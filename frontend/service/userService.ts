"use client";

import { api } from "./api";

export default function getUsers(){
    return api('users');
}