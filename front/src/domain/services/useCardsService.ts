import useApi from './useApi.ts';
import {CardUserData} from "../entities/CardUserData.ts";
import {Card} from "../entities/Card.ts";

const useCardsService = () => {
    const api = useApi();
    return {
        getCollection: (tags: string[] = []): Promise<Card[]> => {
            let query = '';
            if (tags.length) {
                query = `?tags=${tags.join(',')}`;
            }

            return api(`cards${query}`, {
                method: 'GET',
            });
        },
        get: (): Promise<Card[]> => api(`cards/quizz`, {
            method: 'GET',
        }),
        post: (body: CardUserData): Promise<Card> => api(`cards`, {
            method: 'POST',
            body: JSON.stringify(body),
        }),
        answer: (id: string, isValid: boolean): Promise<Card> => api(`cards/${id}/answer`, {
            method: 'PATCH',
            body: JSON.stringify({isValid}),
        }),
    };
};

export default useCardsService;
