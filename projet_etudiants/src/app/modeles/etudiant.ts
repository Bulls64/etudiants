export interface Etudiant {
    id: number;
    nom: string;
    prenom: string;
    age: string | number;
    sexe: string | number;
    qualite?: Array<string>;
    image?: string;
}
