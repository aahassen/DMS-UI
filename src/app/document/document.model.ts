export class Document {
  author: string;
  tags: string;

  comments: string;
  file: File;
  id: number;

  constructor(file: File, id: number, author: string, tags: string, comments?: string) {
    this.file = file;
    this.author = author;
    this.tags = tags;
    this.comments = comments;
    this.id = id;
  }


}
