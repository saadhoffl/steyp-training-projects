// app/context/UserContext.js
"use client"; // Ensure this is a client component

import React, { createContext, useState, useContext } from "react";

// Create the context
const UserContext = createContext();

// Create a provider component
export function UserProvider({ children }) {
  const [user, setUser] = useState({}); // Manage user state

  // Function to update user data
  const updateUserData = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
