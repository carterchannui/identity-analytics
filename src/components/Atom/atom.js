// Implementing Recoil State Management Library (Recoil) for global state management in React
// Atom is wrapper for state management.
import { atom } from "recoil";

export const isLoading = atom({
    key: "isLoading",
    default: false,
});

export const displayIssued = atom({
    key: "displayIssued",
    default: false,
});

export const displayRefreshed = atom({
    key: "displayRefreshed",
    default: false,
});

export const passesIssued = atom({
    key: "passesIssued",
    default: 0,
});

export const passesRefreshed = atom({
    key: "passesRefreshed",
    default: 0,
});

export const uniqueInteractions = atom({
    key: "uniqueInteractions",
    default: 0,
});

export const activeGatekeepers = atom({
    key: "activeGatekeepers",
    default: 0,
});

/**
 * Recoil global state value to dynamically update the state of the passesIssuedData.
 * @param passesIssuedData (String) The specific data for graph.
 */

export const graphData = atom({
    key: "graphData",
    default: [
        {
            month: "Jan",
            issued: 0,
            refreshed: 0,
        },
        {
            month: "Feb",
            issued: 0,
            refreshed: 0,
        },
        {
            month: "Mar",
            issued: 0,
            refreshed: 0,
        },
        {
            month: "Apr",
            issued: 0,
            refreshed: 0,
        },
        {
            month: "May",
            issued: 0,
            refreshed: 0,
        },
        {
            month: "Jun",
            issued: 0,
            refreshed: 0,
        },
        {
            month: "Jul",
            issued: 0,
            refreshed: 0,
        },
        {
            month: "Aug",
            issued: 0,
            refreshed: 0,
        },
        {
            month: "Sep",
            issued: 0,
            refreshed: 0,
        },
        {
            month: "Oct",
            issued: 0,
            refreshed: 0,
        },
        {
            month: "Nov",
            issued: 0,
            refreshed: 0,
        },
        {
            month: "Dec",
            issued: 0,
            refreshed: 0,
        },
    ],
});
