// Implementing Recoil State Management Library (Recoil) for global state management in React
// Atom is wrapper for state management.
import { atom } from "recoil";

/**
 * Recoil global state value to dynamically update the state of the passesIssued.
 * @param passesIssued (Number) The initial value for the PassesIssued.
 */

export const passesIssued = atom({
    key: "passesIssued",
    default: 0,
});

/**
 * Recoil global state value to dynamically update the state of the passesRefreshed.
 * @param passesRefreshed (Number) The initial value for the PassesRefreshed.
 */

export const passesRefreshed = atom({
    key: "passesRefreshed",
    default: 0,
});

/**
 * Recoil global state value to dynamically update the state of the uniqueInteractions.
 * @param uniqueInteractions (Number) The initial value for the uniqueInteractions.
 */

export const uniqueInteractions = atom({
    key: "uniqueInteractions",
    default: 0,
});

/**
 * Recoil global state value to dynamically update the state of the activeGatekeepers.
 * @param activeGatekeepers (Number) The initial value for the activeGatekeepers.
 */

export const activeGatekeepers = atom({
    key: "activeGatekeepers",
    default: 0,
});

/**
 * Recoil global state value to dynamically update the state of the passesIssuedData.
 * @param passesIssuedData (String) The specific data for graph.
 */

export const passesIssuedData = atom({
    key: "passesIssuedData",
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
