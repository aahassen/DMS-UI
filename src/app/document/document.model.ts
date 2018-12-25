export class Document {
  author: string;
  tags: string;

  comments: string;
  file: File;

  constructor(file: File, author: string, tags: string, comments?: string) {
    this.file = file;
    this.author = author;
    this.tags = tags;
    this.comments = comments;
  }


}
