import React, { useState } from "react";
import { Bell, Check, X } from "lucide-react";
import f11 from "../../images/f11.jpg";

// Định nghĩa kiểu cho thông báo
interface Notification {
  id: number;
  sender: string;
  avatar: string;
  content: string;
  time: string;
  isRead: boolean;
  type: "friend_request" | "security" | "project" | "general";
}

// Dữ liệu mẫu mở rộng
const initialNotifications: Notification[] = [
  {
    id: 1,
    sender: "Nguyen Van A",
    avatar: f11,
    content: "Sent a friend request",
    time: "1 minutes ago",
    isRead: false,
    type: "friend_request",
  },
  {
    id: 2,
    sender: "System",
    avatar: f11,
    content: "Your account has just been logged in on a new device.",
    time: "2 minute ago",
    isRead: false,
    type: "security",
  },
  {
    id: 3,
    sender: "Project Manager",
    avatar: f11,
    content: "Project deadline is coming. Get it done.",
    time: "3 minutes ago",
    isRead: false,
    type: "project",
  },
  {
    id: 4,
    sender: "System",
    avatar: f11,
    content: "Security alert: Suspicious login attempt detected.",
    time: "5 minutes ago",
    isRead: true,
    type: "security",
  },
  {
    id: 5,
    sender: "John Doe",
    avatar: f11,
    content: "Liked your post.",
    time: "10 minutes ago",
    isRead: true,
    type: "general",
  },
  {
    id: 6,
    sender: "Jane Smith",
    avatar: f11,
    content: "Commented on your photo.",
    time: "15 minutes ago",
    isRead: true,
    type: "general",
  },
  {
    id: 7,
    sender: "Team Lead",
    avatar: f11,
    content: "Meeting scheduled for tomorrow at 10 AM.",
    time: "20 minutes ago",
    isRead: true,
    type: "project",
  },
];

const View: React.FC = () => {
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);

  // Đánh dấu tất cả thông báo là đã đọc
  const markAllAsRead = () => {
    setNotifications(notifications.map((note) => ({ ...note, isRead: true })));
  };

  // Xóa thông báo
  const removeNotification = (id: number) => {
    const updatedNotifications = notifications.filter((note) => note.id !== id);
    setNotifications(updatedNotifications);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Tiêu đề */}
        <div className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bell />
            <h1 className="text-xl font-bold">Notification</h1>
          </div>
          <button
            onClick={markAllAsRead}
            className="text-sm bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded flex items-center space-x-1"
          >
            <Check size={16} />
            <span>Mark all as read</span>
          </button>
        </div>

        {/* Danh sách thông báo */}
        <div className="divide-y divide-gray-200">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`px-4 py-3 flex items-start space-x-3 ${
                  !notification.isRead ? "bg-blue-50" : "hover:bg-gray-50"
                }`}
              >
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src={notification.avatar}
                    alt={notification.sender}
                    className="w-10 h-10 rounded-full"
                  />
                </div>

                {/* Nội dung thông báo */}
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800">
                      {notification.sender}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-gray-600">{notification.content}</p>
                </div>

                {/* Nút xóa */}
                <button
                  onClick={() => removeNotification(notification.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X size={20} />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Bell className="mx-auto mb-4 text-gray-300" size={48} />
              <p>Không có thông báo mới</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default View;
