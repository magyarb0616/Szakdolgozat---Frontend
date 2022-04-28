export interface Breed {
  id:   string;
  name: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toBreed(json: string): Breed {
    return JSON.parse(json);
  }

  public static breedToJson(value: Breed): string {
    return JSON.stringify(value);
  }
}
