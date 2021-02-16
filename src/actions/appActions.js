export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = (feature,price) => {
    return({
        type: ADD_FEATURE,
        payload: {feature: feature, price: price},
    })
}
export const removeFeature = (feature, price) => {
    return({
        type: REMOVE_FEATURE,
        payload: {feature: feature, price: price},
    })
}