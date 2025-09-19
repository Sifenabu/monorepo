"use client";

import { useState } from "react";
import { Input } from "@repo/ui/components/input";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/avatar";

interface HeaderProps {
  onSearch: (city: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      onSearch(query.trim());
      setQuery("");
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm rounded-2xl">
      {/* Search Bar */}
      <div className="flex items-center gap-2 w-full max-w-sm">
        <Input
          type="text"
          placeholder="Search city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="rounded-xl"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative">
          <Bell className="h-6 w-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Avatar */}
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/40" alt="@user" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
