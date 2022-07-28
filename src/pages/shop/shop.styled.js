import styled from "styled-components";


export const BigBox = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    width:75%;
    margin-left: 240px;
    border-left: 8px double black;
    border-right: 8px double black;
`

export const BassketButton = styled.button`
    width: fit-content;
    height: fit-content;
    border: 10px double black;
    font-size: 25px;
    padding: 5px;
    background: orange;
    &::-webkit-scrollbar {
        top: 0;
        transition: 3s;
    }
`

export const ListingBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 20px 20px 20px;
`

export const ListingContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 4px solid black;
    width: 1300px;
`

export const ListingImg = styled.img`
    outline: 3px dotted red;
    height: 400px;
`

export const ListingTitle = styled.h2`
    colour: black;
    font-size: 25px;
    text-decoration: underline;
`
export const ListingCategory = styled.p`
    colour: black;
    font-size: 15px;
    width: fit-content;
    border-bottom: 1px dotted black;
`

export const ListingDescription = styled.p`
    colour: black;
    font-size: 20px;
    width: 400px;
    margin-right: 100px;
`

export const ListingTimer = styled.p`
    font-size: 25px;
    border: 2px dotted black;
    background-color: whitesmoke;
    padding: 5px;
    width: fit-content;
`