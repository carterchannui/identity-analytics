import { atom } from "recoil";

export const dataState1 = atom({
    key: "dataState1",
    default: 0,
});

export const dataState2 = atom({
    key: "dataState2",
    default: 0,
});

export const dataState3 = atom({
    key: "dataState3",
    default: 0,
});

export const dataState4 = atom({
    key: "dataState4",
    default: 0,
});

export const graphData = atom({
    key: "graphData",
    default: [
        {
            name: "Jan",
            data: 500,
            key: 200,
            refreshment: 200,
        },
        {
            name: "Feb",
            data: 400,
            key: 450,
            refreshment: 300,
        },
        {
            name: "Mar",
            data: 300,
            key: 200,
            refreshment: 150,
        },
        {
            name: "Apr",
            data: 200,
            key: 500,
            refreshment: 350,
        },
        {
            name: "Jun",
            data: 100,
            key: 100,
            refreshment: 250,
        },
        {
            name: "Jul",
            data: 0,
            key: 300,
            refreshment: 450,
        },
    ],
});
