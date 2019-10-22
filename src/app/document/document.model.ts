export class Document {
  author: string;
  tags: string;
  filename: string;
  file: File;
  id: number;

  constructor(file: File, id: number, author: string, tags: string) {
    this.file = file;
    this.author = author;
    this.tags = tags;
    this.id = id;
  }


}
