"use client";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function api<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_URL}/${endpoint}`);
    if(!response.ok) {
        throw new Error(`Erro: ${response.statusText}`);
    }
    return response.json();
}