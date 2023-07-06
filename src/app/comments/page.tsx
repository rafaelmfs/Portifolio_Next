'use client'

import { PageContainer } from "@/components/PageContainer";
import { PageTitle } from "@/components/PageTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CommentCard } from "./components/CommentCard";

interface CommentSchema {
  createdAt: Date;
  name: string;
  avatarURL: string;
  description: string;
  subtitle: string;
  ratings: number;
  id: string;
}

export default function Comments() {
  const { data, isLoading } = useQuery<CommentSchema[]>({
    queryKey: ['comments'],
    queryFn: loadComments
  })


  async function loadComments() {
    const response = await axios.get("https://64a707e1096b3f0fcc80fe3f.mockapi.io/comments")

    return response.data;
  }

  return (
    <PageContainer className="overflow-y-auto">
      <PageTitle text="Testimonials" />

      <div className="grid grid-cols-2 gap-6 pt-4 pl-4 mt-4">
        {isLoading ?
          <>
            <div className="h-56 animate-pulse bg-zinc-900" />
            <div className="h-56 animate-pulse bg-zinc-900" />
            <div className="h-56 animate-pulse bg-zinc-900" />
            <div className="h-56 animate-pulse bg-zinc-900" />
          </>
          : data?.map(comment => (
            <CommentCard
              key={comment.id}
              createdAt={new Date(comment.createdAt)}
              description={comment.description}
              name={comment.name}
              ratings={comment.ratings}
              subtitle={comment.subtitle}
              avatarURL={comment.avatarURL}
            />
          ))
        }
      </div>

    </PageContainer>
  )
}