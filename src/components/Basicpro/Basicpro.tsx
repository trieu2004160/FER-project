"use client";

import { useState, useEffect, useRef } from "react";
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

  const [languages, setLanguages] = useState<string[]>([
    "Tiếng Việt",
    "Tiếng Anh",
  ]);
  const [editMode, setEditMode] = useState(false);
  const [editableExperiences, setEditableExperiences] =
    useState<string[]>(languages);
  const [activeTab, setActiveTab] = useState("profile");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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
  }, []);

  const handleProfileUpdate = async () => {
    setIsSubmitting(true);

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
          throw error;
        }

        // Hiển thị thông báo thành công
        showNotification("Profile updated successfully!", "success");

        // Thoát chế độ chỉnh sửa
        setEditMode(false);
      } catch (error) {
        console.error("Exception during profile update:", error);
        showNotification("An error occurred while updating profile", "error");
      }
    }

    setIsSubmitting(false);
  };

  const showNotification = (
    message: string,
    type: "info" | "success" | "error" = "info"
  ) => {
    // Replace alert with a custom notification
    const notificationDiv = document.createElement("div");
    notificationDiv.className = `fixed bottom-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
      type === "success"
        ? "bg-green-500"
        : type === "error"
        ? "bg-red-500"
        : "bg-blue-500"
    } text-white`;

    notificationDiv.innerText = message;
    document.body.appendChild(notificationDiv);

    setTimeout(() => {
      notificationDiv.classList.add(
        "opacity-0",
        "transition-opacity",
        "duration-500"
      );
      setTimeout(() => {
        document.body.removeChild(notificationDiv);
      }, 500);
    }, 3000);
  };

  const cancelAvatarPreview = () => {
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleAvatarSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Preview the selected image
    const objectUrl = URL.createObjectURL(file);
    setPreviewImage(objectUrl);

    // Clean up the object URL when no longer needed
    return () => URL.revokeObjectURL(objectUrl);
  };

  const handleAvatarUpload = async () => {
    if (!previewImage || !user || !fileInputRef.current?.files?.[0]) return;

    try {
      setIsUploading(true);
      setUploadProgress(0);
      const file = fileInputRef.current.files[0];

      // 1. Compress the image
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 800,
        useWebWorker: true,
        onProgress: (progress: number) => {
          setUploadProgress(Math.round(progress * 30)); // 30% of the progress bar for compression
        },
      };

      const compressedFile = await imageCompression(file, options);

      // 2. Generate unique file name
      const fileExt = file.name.split(".").pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      // 3. Upload to Supabase Storage
      setUploadProgress(40); // Start upload at 40% progress

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, compressedFile, {
          cacheControl: "3600",
          upsert: true,
        });

      if (uploadError) {
        throw uploadError;
      }

      setUploadProgress(70); // Update progress after upload

      // 4. Get the public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("avatars").getPublicUrl(filePath);

      if (!publicUrl) {
        throw new Error("Failed to get public URL");
      }

      setUploadProgress(80); // Update progress after getting URL

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

      setUploadProgress(100); // Completed

      // 6. Update local state
      setProfile((prev) => ({
        ...prev,
        avatar_url: publicUrl,
      }));

      // Reset preview
      setPreviewImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      showNotification("Avatar updated successfully!", "success");
    } catch (error) {
      console.error("Error uploading avatar:", error);
      showNotification("Error uploading avatar. Please try again.", "error");
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent mx-auto"></div>
          <p className="text-lg font-medium text-black">
            Loading your profile...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl p-4 pt-6">
        {/* Profile Header with gradient */}
        <div className="relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 p-14 text-white shadow-2xl">
          {/* Background Decorations */}
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white bg-opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white bg-opacity-10"></div>

          {/* Profile Picture */}
          <div className="absolute -bottom-10 left-10 h-36 w-36 flex items-center justify-center">
            <div className="relative h-28 w-28 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
              {/* Avatar Image */}
              <img
                src={
                  previewImage || profile.avatar_url || "/default-avatar.png"
                }
                alt="Profile"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/default-avatar.png";
                }}
              />
            </div>

            {/* Edit Mode Upload Button */}
            {editMode && !previewImage && (
              <label
                htmlFor="avatar-upload"
                className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-40 opacity-0 transition-opacity hover:opacity-100"
              >
                <div className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="mt-1 text-xs font-medium text-white">
                    Upload
                  </span>
                </div>
              </label>
            )}

            {/* Preview Image Actions */}
            {editMode && previewImage && (
              <div className="absolute -right-2 -top-2 flex space-x-1">
                <button
                  onClick={handleAvatarUpload}
                  disabled={isUploading}
                  className="rounded-full bg-green-500 p-2 text-white shadow-md hover:bg-green-600 focus:outline-none transition"
                  title="Save avatar"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
                <button
                  onClick={cancelAvatarPreview}
                  disabled={isUploading}
                  className="rounded-full bg-red-500 p-2 text-white shadow-md hover:bg-red-600 focus:outline-none transition"
                  title="Cancel"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}

            {/* Upload Progress Indicator */}
            {isUploading && (
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50">
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
                  <span className="mt-2 text-sm font-medium text-white">
                    {uploadProgress}%
                  </span>
                </div>
              </div>
            )}

            {/* Hidden File Input */}
            <input
              ref={fileInputRef}
              id="avatar-upload"
              type="file"
              accept="image/*"
              onChange={handleAvatarSelect}
              className="hidden"
            />
          </div>

          {/* Name & Email */}
          <div className="absolute bottom-8 left-52">
            <h2 className="text-3xl font-bold drop-shadow-lg">
              {profile.full_name || "Welcome!"}
            </h2>
            <p className="text-indigo-200 drop-shadow-md">{profile.email}</p>
          </div>

          {/* Action Buttons */}
          <div className="absolute bottom-8 right-6 flex gap-4">
            {!editMode ? (
              <button
                onClick={() => setEditMode(true)}
                className="flex items-center gap-2 rounded-lg bg-white px-5 py-2 text-sm font-semibold text-indigo-700 shadow-md hover:bg-indigo-100 transition-all"
              >
                ✏️ Edit Profile
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    setEditMode(false);
                    setPreviewImage(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = "";
                    }
                  }}
                  className="rounded-lg bg-white/30 px-5 py-2 text-sm font-semibold text-white hover:bg-white/40 transition-all"
                >
                  ❌ Cancel
                </button>
                <button
                  onClick={handleProfileUpdate}
                  disabled={isSubmitting || isUploading}
                  className={`flex items-center gap-2 rounded-lg bg-white px-5 py-2 text-sm font-semibold text-indigo-700 shadow-md hover:bg-indigo-100 transition-all ${
                    isSubmitting || isUploading
                      ? "opacity-70 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {isSubmitting ? "⏳ Saving..." : "✅ Save Changes"}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="rounded-xl bg-white p-8 shadow">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <>
              {/* Personal Info Grid */}
              <div className="mb-8">
                <h3 className="mb-6 text-xl font-bold text-gray-800">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profile.full_name}
                      onChange={(e) =>
                        setProfile({ ...profile, full_name: e.target.value })
                      }
                      className={`w-full rounded-lg border ${
                        editMode
                          ? "border-gray-300"
                          : "border-gray-200 bg-gray-50"
                      } p-3 text-black focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors`}
                      readOnly={!editMode}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) =>
                        setProfile({ ...profile, email: e.target.value })
                      }
                      className={`w-full rounded-lg border ${
                        editMode
                          ? "border-gray-300"
                          : "border-gray-200 bg-gray-50"
                      } p-3 text-black focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors`}
                      readOnly={!editMode}
                      placeholder="Your email address"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Gender
                    </label>
                    <select
                      value={profile.gender}
                      onChange={(e) =>
                        setProfile({ ...profile, gender: e.target.value })
                      }
                      className={`w-full rounded-lg border ${
                        editMode
                          ? "border-gray-300"
                          : "border-gray-200 bg-gray-50"
                      } p-3 text-black focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors`}
                      disabled={!editMode}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) =>
                        setProfile({ ...profile, phone: e.target.value })
                      }
                      className={`w-full rounded-lg border ${
                        editMode
                          ? "border-gray-300"
                          : "border-gray-200 bg-gray-50"
                      } p-3 text-black focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors`}
                      readOnly={!editMode}
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      value={profile.address}
                      onChange={(e) =>
                        setProfile({ ...profile, address: e.target.value })
                      }
                      className={`w-full rounded-lg border ${
                        editMode
                          ? "border-gray-300"
                          : "border-gray-200 bg-gray-50"
                      } p-3 text-black focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors`}
                      readOnly={!editMode}
                      placeholder="Your address"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Birthday
                    </label>
                    <input
                      type="date"
                      value={profile.birthday}
                      onChange={(e) =>
                        setProfile({ ...profile, birthday: e.target.value })
                      }
                      className={`w-full rounded-lg border ${
                        editMode
                          ? "border-gray-300"
                          : "border-gray-200 bg-gray-50"
                      } p-3 text-black focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors`}
                      readOnly={!editMode}
                    />
                  </div>
                </div>
              </div>

              {/* About Me */}
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  About Me
                </h3>
                <textarea
                  value={profile.about_me}
                  onChange={(e) =>
                    setProfile({ ...profile, about_me: e.target.value })
                  }
                  className={`w-full rounded-lg border ${
                    editMode ? "border-gray-300" : "border-gray-200 bg-gray-50"
                  } p-4 text-black focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors`}
                  rows={6}
                  readOnly={!editMode}
                  placeholder="Tell us about yourself, your interests, and your background..."
                ></textarea>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-bold text-gray-800">Skills</h3>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Technical Skills
                    </label>
                    <input
                      type="text"
                      value={profile.skills}
                      onChange={(e) =>
                        setProfile({ ...profile, skills: e.target.value })
                      }
                      className={`w-full rounded-lg border ${
                        editMode
                          ? "border-gray-300"
                          : "border-gray-200 bg-gray-50"
                      } p-3 text-black focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors`}
                      readOnly={!editMode}
                      placeholder="e.g., JavaScript, React, Node.js, Python, etc."
                    />
                    {!editMode && profile.skills && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {profile.skills.split(",").map((skill, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800"
                          >
                            {skill.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Soft Skills
                    </label>
                    <input
                      type="text"
                      value={profile.soft_skills}
                      onChange={(e) =>
                        setProfile({ ...profile, soft_skills: e.target.value })
                      }
                      className={`w-full rounded-lg border ${
                        editMode
                          ? "border-gray-300"
                          : "border-gray-200 bg-gray-50"
                      } p-3 text-black focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors`}
                      readOnly={!editMode}
                      placeholder="e.g., Communication, Leadership, Teamwork, etc."
                    />
                    {!editMode && profile.soft_skills && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {profile.soft_skills.split(",").map((skill, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800"
                          >
                            {skill.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
