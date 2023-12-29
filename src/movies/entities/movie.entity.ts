export class Movie {
  push(arg0: any) {
    throw new Error('Method not implemented.');
  }
  filter(arg0: (movie: any) => boolean) {
    throw new Error('Method not implemented.');
  }
  find(arg0: (movie: any) => boolean): Movie {
    throw new Error('Method not implemented.');
  }
  id: number;
  title: string;
  year: number;
  genres: string[];
}
