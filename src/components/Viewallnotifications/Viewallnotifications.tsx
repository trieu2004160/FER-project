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
  type: "friend_request" | "security" | "project";
}

// Dữ liệu mẫu về thông báo
const initialNotifications: Notification[] = [
  {
    id: 1,
    sender: "Nguyễn Văn A",
    avatar: "/api/placeholder/50/50",
    content: "Đã gửi một yêu cầu kết bạn",
    time: "2 phút trước",
    isRead: false,
    type: "friend_request",
  },
  {
    id: 2,
    sender: "Hệ Thống",
    avatar: "/api/placeholder/50/50",
    content: "Tài khoản của bạn vừa đăng nhập ở thiết bị mới",
    time: "1 giờ trước",
    isRead: false,
    type: "security",
  },
  {
    id: 3,
    sender: "Dự Án",
    avatar: "/api/placeholder/50/50",
    content: "Deadline dự án sắp đến. Hãy hoàn thành công việc",
    time: "4 giờ trước",
    isRead: true,
    type: "project",
  },
];

const View: React.FC = () => {
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);

  // Hàm đánh dấu tất cả thông báo là đã đọc
  const markAllAsRead = () => {
    setNotifications(notifications.map((note) => ({ ...note, isRead: true })));
  };

  // Hàm xóa thông báo
  const removeNotification = (id: number) => {
    setNotifications(notifications.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Tiêu đề */}
        <div className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bell />
            <h1 className="text-xl font-bold">Thông Báo</h1>
          </div>
          <button
            onClick={markAllAsRead}
            className="text-sm bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded flex items-center space-x-1"
          >
            <Check size={16} />
            <span>Đánh Dấu Đọc</span>
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
                    src={f11}
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
