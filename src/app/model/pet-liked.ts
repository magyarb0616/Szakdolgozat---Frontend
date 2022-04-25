export interface PetLiked {
    id:          string;
    petId:       string;
    adopterId:   string;
    adoptiveId:  string;
    name:        string;
    age:         string;
    sex:         string;
    size:        string;
    hair:        string;
    movement:    string;
    description: string;
    speciesId:   string;
    speciesName: string;
    breedId:     string;
    breedName:   string;
    cityId:      string;
    cityName:    string;
    countryName: string;
}

// Converts JSON strings to/from to petLiked
export class Convert {
    public static toPetLiked(json: string): PetLiked {
        return JSON.parse(json);
    }

    public static petLikedToJson(value: PetLiked): string {
        return JSON.stringify(value);
    }
}
