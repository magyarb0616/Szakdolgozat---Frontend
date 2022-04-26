export interface User {
    id:          string;
    username:    string;
    surname:     string;
    firstname:   string;
    email:       string;
    phone:       string;
    cityId:      string;
    cityName:    string;
    countryName: string;
    countryId:   string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toUser(json: string): User {
        return JSON.parse(json);
    }

    public static userToJson(value: User): string {
        return JSON.stringify(value);
    }
}

