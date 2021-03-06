import React from "react";
import gql from 'graphql-tag';
import { useParams } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Loader from "../components/Loader";

const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
        title
        medium_cover_image
        language
        rating
        description_intro
        }
    }
`;

const Container = styled.div`
    height: 100vh;
    /* background-image: linear-gradient(-45deg, #d754ab, #fd723a); */
    background-image: linear-gradient(-180deg, #012D6B, #F2A42D);
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
`;

const Column = styled.div`
    margin-left: 10px;
    width: 50%;
`;

const Title = styled.h1`
    font-size: 65px;
    margin-bottom: 15px;
`;

const Subtitle = styled.h4`
    font-size: 35px;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 28px;
`;

const Poster = styled.div`
    width: 25%;
    height: 60%;
    background-color: transparent;
    background-image: url(${props => props.bg});
    background-size: cover;
    background-position: center center;
`;

export default () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: { id: +id }
    });

    return (
        <Container>
            {loading ? <Loader /> :
                (<Column>
                    <Title>{data.movie.title}</Title>
                    <Subtitle>
                        {data.movie.language} · {data.movie.rating}
                    </Subtitle>
                    <Description>{data.movie.description_intro}</Description>
                </Column>
                )
            };
            <Poster bg={data?.movie ? data.movie.medium_cover_image : ""} />
        </Container>
    );
};