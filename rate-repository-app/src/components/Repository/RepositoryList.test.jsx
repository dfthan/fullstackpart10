import { render } from "@testing-library/react-native";
import { formatNumber } from "./InfoComponent";
import { RepositoryListContainer } from "./RepositoryListContainer";

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const repositories = {
                totalCount: 8,
                pageInfo: {
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor:
                            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            };

            const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

            let firstObj = repositories.edges[0].node;
            let secondObj = repositories.edges[1].node;

            const fullName = getAllByTestId('fullName');
            expect(fullName[0]).toHaveTextContent(firstObj.fullName);
            expect(fullName[1]).toHaveTextContent(secondObj.fullName);

            const description = getAllByTestId("description");
            expect(description[0]).toHaveTextContent(firstObj.description);
            expect(description[1]).toHaveTextContent(secondObj.description);

            const language = getAllByTestId("language");
            expect(language[0]).toHaveTextContent(firstObj.language);
            expect(language[1]).toHaveTextContent(secondObj.language);

            const stars = getAllByTestId("Stars");
            expect(stars[0]).toHaveTextContent(formatNumber(firstObj.stargazersCount));
            expect(stars[1]).toHaveTextContent(formatNumber(secondObj.stargazersCount));

            const rating = getAllByTestId("Rating");
            expect(rating[0]).toHaveTextContent(formatNumber(firstObj.ratingAverage));
            expect(rating[1]).toHaveTextContent(formatNumber(secondObj.ratingAverage));

            const forks = getAllByTestId("Forks");
            expect(forks[0]).toHaveTextContent(formatNumber(firstObj.forksCount));
            expect(forks[1]).toHaveTextContent(formatNumber(secondObj.forksCount));

            const reviews = getAllByTestId("Reviews");
            expect(reviews[0]).toHaveTextContent(formatNumber(firstObj.reviewCount));
            expect(reviews[1]).toHaveTextContent(formatNumber(secondObj.reviewCount));
        });
    });
});