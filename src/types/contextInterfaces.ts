export interface data {
    characters: datacharacters
}

interface datacharacters {
    results: resultsInterface[]
}

interface resultsInterface {
    id: string;
    name: string;
    image: string;
    __typename: string;
}
