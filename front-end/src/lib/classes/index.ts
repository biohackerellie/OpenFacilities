export class apiQuery {
  query: string;
  headers?: any;
  constructor(query: string, headers?: any) {
    this.query = `${process.env.NEXT_PUBLIC_HOST}/api/` + query;
    this.headers = headers;
  }
  Fetch = async () => {
    const response = await fetch(this.query, {
      headers: this.headers,
    });
    return response.json();
  };
}
