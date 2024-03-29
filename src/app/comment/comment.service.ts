import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentPayload } from './comment.payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  postComment(commentPayload: CommentPayload): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:8080/api/comments/',
      commentPayload
    );
  }

  getAllCommentsForPost(postId: number): Observable<CommentPayload[]> {
    return this.httpClient.get<CommentPayload[]>(
      'http://localhost:8080/api/comments/by-post?postId=' + postId
    );
  }

  getAllCommentsByUser(name: string) {
    return this.httpClient.get<CommentPayload[]>(
      'http://localhost:8080/api/comments/by-user?userName=' + name
    );
  }
}
