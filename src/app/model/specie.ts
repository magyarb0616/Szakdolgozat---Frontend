export interface Specie {
  id:   string;
  name: string;
}

export class Convert {
  public static toSpecie(json: string): Specie {
    return JSON.parse(json);
  }

  public static specieToJson(value: Specie): string {
    return JSON.stringify(value);
  }
}
