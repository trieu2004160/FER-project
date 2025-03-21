"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import imageCompression from "browser-image-compression";
import defaultAvatar from "../../images/u.jpg";

// Define proper types
interface Profile {
  full_name: string;
  email: string;
  gender: string;
  phone: string;
  address: string;
  birthday: string;
  about_me: string;
  skills: string;
  soft_skills: string;
  avatar_url: string;
}

interface Experience {
  title: string;
  period: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  date: string;
}

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile>({
    full_name: "",
    email: "",
    gender: "",
    phone: "",
    address: "",
    birthday: "",
    about_me: "",
    skills: "",
    soft_skills: "",
    avatar_url: "",
  });

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      title: "",
      period: "",
      description: "",
    },
    {
      title: "",
      period: "",
      description: "",
    },
    {
      title: "",
      period: "",
      description: "",
    },
  ]);

  const [projects, setProjects] = useState<Project[]>([
    {
      title: "Project 1",
      description: "Description for project 1",
      date: new Date().toISOString().split("T")[0],
    },
    {
      title: "Project 2",
      description: "Description for project 2",
      date: new Date().toISOString().split("T")[0],
    },
    {
      title: "Project 3",
      description: "Description for project 3",
      date: new Date().toISOString().split("T")[0],
    },
  ]);

  const [languages, setLanguages] = useState<string[]>([
    "Tiếng Việt",
    "Tiếng Anh",
  ]);
  const [editMode, setEditMode] = useState(false);
  const [editableExperiences, setEditableExperiences] =
    useState<Experience[]>(experiences);
  const [editableProjects, setEditableProjects] = useState<Project[]>(projects);
  const [editableLanguages, setEditableLanguages] =
    useState<string[]>(languages);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        // Fetch user profile from Supabase
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (data && !error) {
          setProfile((prevProfile) => ({
            ...prevProfile,
            full_name: data.full_name || prevProfile.full_name,
            email: user.email || prevProfile.email,
            gender: data.gender || prevProfile.gender,
            phone: data.phone || prevProfile.phone,
            address: data.address || prevProfile.address,
            birthday: data.birthday || prevProfile.birthday,
            about_me: data.about_me || prevProfile.about_me,
            skills: data.skills || prevProfile.skills,
            soft_skills: data.soft_skills || prevProfile.soft_skills,
            avatar_url: data.avatar_url || prevProfile.avatar_url,
          }));
        }
      }

      setLoading(false);
    }

    getUser();
  }, [supabase]);

  const handleProfileUpdate = async () => {
    setLoading(true);

    if (user) {
      try {
        const { error } = await supabase.from("profiles").upsert({
          id: user.id,
          full_name: profile.full_name,
          gender: profile.gender,
          phone: profile.phone,
          address: profile.address,
          birthday: profile.birthday,
          about_me: profile.about_me,
          skills: profile.skills,
          soft_skills: profile.soft_skills,
          avatar_url: profile.avatar_url,
          updated_at: new Date().toISOString(),
        });

        if (error) {
          console.error("Error updating profile:", error);
          alert("Error updating profile: " + error.message);
        } else {
          // Update experiences, projects, and languages if needed
          setExperiences(editableExperiences);
          setProjects(editableProjects);
          setLanguages(editableLanguages);
          setEditMode(false);
          alert("Profile updated successfully!");
        }
      } catch (error) {
        console.error("Exception during profile update:", error);
        alert("An error occurred while updating profile");
      }
    }

    setLoading(false);
  };

  const handleAvatarUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const file = event.target.files?.[0];
      if (!file || !user) return;

      setLoading(true);

      // 1. Compress the image
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 800,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(file, options);

      // 2. Generate unique file name
      const fileExt = file.name.split(".").pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      // 3. Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, compressedFile, {
          cacheControl: "3600",
          upsert: true,
        });

      if (uploadError) {
        throw uploadError;
      }

      // 4. Get the public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("avatars").getPublicUrl(filePath);

      if (!publicUrl) {
        throw new Error("Failed to get public URL");
      }

      // 5. Update the profile with new avatar URL
      const { error: updateError } = await supabase
        .from("profiles")
        .update({
          avatar_url: publicUrl,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id);

      if (updateError) {
        throw updateError;
      }

      // 6. Update local state
      setProfile((prev) => ({
        ...prev,
        avatar_url: publicUrl,
      }));

      alert("Avatar updated successfully!");
    } catch (error) {
      console.error("Error uploading avatar:", error);
      alert("Error uploading avatar. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleExperienceChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedExperiences = [...editableExperiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value,
    };
    setEditableExperiences(updatedExperiences);
  };

  const handleProjectChange = (index: number, field: string, value: string) => {
    const updatedProjects = [...editableProjects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };
    setEditableProjects(updatedProjects);
  };

  const handleLanguageChange = (index: number, value: string) => {
    const updatedLanguages = [...editableLanguages];
    updatedLanguages[index] = value;
    setEditableLanguages(updatedLanguages);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-black">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mx-auto max-w-6xl rounded-lg bg-white p-8 shadow-lg">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black">
            Welcome, {profile.email.split("@")[0]}
          </h1>
          <div className="flex gap-4">
            <input
              type="search"
              className="rounded-lg border border-gray-300 px-4 py-2 text-black"
              placeholder="Search"
            />
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-200">
              <img
                src={profile.avatar_url || defaultAvatar}
                alt="Profile"
                width={128}
                height={128}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = defaultAvatar;
                }}
              />
            </div>
          </div>
        </div>

        {/* Profile Header with gradient */}
        <div className="mb-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 p-16">
          {/* Empty gradient banner */}
        </div>

        {/* Profile section */}
        <div className="mb-8 flex items-start gap-6">
          <div
            className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-gray-200 shadow-lg"
            style={{ marginTop: "-48px" }}
          >
            <label htmlFor="avatar-upload" className="cursor-pointer">
              <img
                src={profile.avatar_url || defaultAvatar}
                alt="Profile"
                width={128}
                height={128}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = defaultAvatar;
                }}
              />
              {editMode && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm">Change Photo</span>
                </div>
              )}
            </label>
            {editMode && (
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
                className="hidden"
              />
            )}
          </div>

          <div className="flex-1">
            <div className="mb-3 flex items-center gap-5">
              <input
                type="text"
                value={profile.full_name}
                onChange={(e) =>
                  setProfile({ ...profile, full_name: e.target.value })
                }
                className={`text-2xl font-bold text-black ${
                  editMode ? "border rounded px-2" : "border-transparent"
                }`}
                readOnly={!editMode}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <label className="cursor-pointer rounded-md bg-indigo-100 px-5 py-3 text-base font-medium text-black hover:bg-indigo-200">
              Upload Profile
              <input
                type="file"
                className="hidden"
                accept="img/*"
                onChange={handleAvatarUpload}
              />
            </label>

            <button
              onClick={() => {
                if (editMode) {
                  handleProfileUpdate();
                } else {
                  setEditMode(true);
                  // Initialize editable states when entering edit mode
                  setEditableExperiences([...experiences]);
                  setEditableProjects([...projects]);
                  setEditableLanguages([...languages]);
                }
              }}
              className="rounded-md bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              {editMode ? "Save" : "Edit"}
            </button>
          </div>
        </div>

        {/* Personal Info Grid */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-base font-medium text-black">
              Full Name
            </label>
            <input
              type="text"
              value={profile.full_name}
              onChange={(e) =>
                setProfile({ ...profile, full_name: e.target.value })
              }
              className={`w-full rounded-md border border-gray-300 p-3 text-black ${
                editMode ? "" : "bg-gray-50"
              }`}
              readOnly={!editMode}
            />
          </div>

          <div>
            <label className="mb-2 block text-base font-medium text-black">
              Email
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
              className={`w-full rounded-md border border-gray-300 p-3 text-black ${
                editMode ? "" : "bg-gray-50"
              }`}
              readOnly={!editMode}
            />
          </div>

          <div>
            <label className="mb-2 block text-base font-medium text-black">
              Gender
            </label>
            <select
              value={profile.gender}
              onChange={(e) =>
                setProfile({ ...profile, gender: e.target.value })
              }
              className={`w-full rounded-md border border-gray-300 p-3 text-black ${
                editMode ? "" : "bg-gray-50"
              }`}
              disabled={!editMode}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-base font-medium text-black">
              Phone
            </label>
            <input
              type="tel"
              value={profile.phone}
              onChange={(e) =>
                setProfile({ ...profile, phone: e.target.value })
              }
              className={`w-full rounded-md border border-gray-300 p-3 text-black ${
                editMode ? "" : "bg-gray-50"
              }`}
              readOnly={!editMode}
            />
          </div>

          <div>
            <label className="mb-2 block text-base font-medium text-black">
              Address
            </label>
            <input
              type="text"
              value={profile.address}
              onChange={(e) =>
                setProfile({ ...profile, address: e.target.value })
              }
              className={`w-full rounded-md border border-gray-300 p-3 text-black ${
                editMode ? "" : "bg-gray-50"
              }`}
              readOnly={!editMode}
            />
          </div>

          <div>
            <label className="mb-2 block text-base font-medium text-black">
              Birthday
            </label>
            <input
              type="date"
              value={profile.birthday}
              onChange={(e) =>
                setProfile({ ...profile, birthday: e.target.value })
              }
              className={`w-full rounded-md border border-gray-300 p-3 text-black ${
                editMode ? "" : "bg-gray-50"
              }`}
              readOnly={!editMode}
            />
          </div>
        </div>

        {/* About Me */}
        <div className="mb-10">
          <h3 className="mb-3 text-xl font-bold text-black">About me:</h3>
          <textarea
            value={profile.about_me}
            onChange={(e) =>
              setProfile({ ...profile, about_me: e.target.value })
            }
            className={`w-full rounded-md border border-gray-300 p-3 text-black ${
              editMode ? "" : "bg-gray-50"
            }`}
            rows={5}
            readOnly={!editMode}
          ></textarea>
        </div>

        {/* Skills */}
        <div className="mb-10">
          <h3 className="mb-3 text-xl font-bold text-black">My skill:</h3>
          <input
            type="text"
            value={profile.skills}
            onChange={(e) => setProfile({ ...profile, skills: e.target.value })}
            className={`w-full rounded-md border border-gray-300 p-3 text-black mb-3 ${
              editMode ? "" : "bg-gray-50"
            }`}
            readOnly={!editMode}
            placeholder="Technical skills"
          />
          <input
            type="text"
            value={profile.soft_skills}
            onChange={(e) =>
              setProfile({ ...profile, soft_skills: e.target.value })
            }
            className={`w-full rounded-md border border-gray-300 p-3 text-black ${
              editMode ? "" : "bg-gray-50"
            }`}
            readOnly={!editMode}
            placeholder="Soft skills"
          />
        </div>

        {/* Experience */}
        <div className="mb-10">
          <h3 className="mb-4 text-xl font-bold text-black">Experience:</h3>
          <div className="space-y-6">
            {(editMode ? editableExperiences : experiences).map(
              (exp, index) => (
                <div
                  key={index}
                  className="border-l-4 border-indigo-500 pl-6 py-2"
                >
                  {editMode ? (
                    <>
                      <input
                        type="text"
                        value={exp.title}
                        onChange={(e) =>
                          handleExperienceChange(index, "title", e.target.value)
                        }
                        className="w-full text-lg font-medium border rounded px-3 py-2 mb-2 text-black"
                        placeholder="Job Title"
                      />
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "period",
                            e.target.value
                          )
                        }
                        className="w-full text-base text-black border rounded px-3 py-2 mb-2"
                        placeholder="Period (e.g., Jan 2022 - Present)"
                      />
                      <input
                        type="text"
                        value={exp.description}
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                        className="w-full text-base text-black border rounded px-3 py-2"
                        placeholder="Job description"
                      />
                    </>
                  ) : (
                    <>
                      <h4 className="text-lg font-medium text-black">
                        {exp.title || "No title provided"}
                      </h4>
                      <p className="text-base text-black mb-1">
                        {exp.period || "No period provided"}
                      </p>
                      <p className="text-base text-black">
                        {exp.description || "No description provided"}
                      </p>
                    </>
                  )}
                </div>
              )
            )}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-10">
          <h3 className="mb-4 text-xl font-bold text-black">My Project:</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {(editMode ? editableProjects : projects).map((project, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 p-6 shadow-md"
              >
                {editMode ? (
                  <>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) =>
                        handleProjectChange(index, "title", e.target.value)
                      }
                      className="w-full text-lg font-medium border rounded px-3 py-2 mb-2 text-black"
                      placeholder="Project Title"
                    />
                    <input
                      type="text"
                      value={project.description}
                      onChange={(e) =>
                        handleProjectChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      className="w-full text-base text-black border rounded px-3 py-2 mb-2"
                      placeholder="Project Description"
                    />
                    <input
                      type="text"
                      value={project.date}
                      onChange={(e) =>
                        handleProjectChange(index, "date", e.target.value)
                      }
                      className="w-full text-base text-black border rounded px-3 py-2"
                      placeholder="Date (e.g., Dec 2022)"
                    />
                  </>
                ) : (
                  <>
                    <h4 className="text-lg font-medium text-black mb-2">
                      {project.title}
                    </h4>
                    <p className="text-base text-black mb-2">
                      {project.description}
                    </p>
                    <p className="text-base text-black">{project.date}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-8">
          <h3 className="mb-3 text-xl font-bold text-black">Language</h3>
          <ul className="list-inside list-disc space-y-2 text-black text-base">
            {(editMode ? editableLanguages : languages).map((lang, index) => (
              <li key={index} className="ml-2">
                {editMode ? (
                  <input
                    type="text"
                    value={lang}
                    onChange={(e) =>
                      handleLanguageChange(index, e.target.value)
                    }
                    className="border rounded px-3 py-2 text-black"
                  />
                ) : (
                  lang
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
