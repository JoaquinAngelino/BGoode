import axios from 'axios'

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_INSTRUMENT_BY_NAME = "GET_INSTRUMENTS_BY_NAME";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const FILTERED_INSTRUMENTS = "FILTERED_INSTRUMENTS";
export const ORDER_PRODUCTS = "ORDER_PRODUCTS";
export const GET_REVIEWS_BY_PRODUCT_ID = "GET_REVIEWS_BY_PRODUCT_ID";
export const ADD_REVIEW = "ADD_REVIEW";
export const GET_MY_ORDERS = "GET_MY_ORDERS";
export const ACTIVE_LOADING = "ACTIVE_LOADING";
export const CREATE_CONTACT = "CREATE_CONTACT";
export const SHOW_ALERT = "SHOW_ALERT";
export const ALL_ORDERS = "ALL_ORDERS";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER_BY_EMAIL = "GET_USER_BY_EMAIL";
export const UPDATE_USER = "UPDATE_USER";
export const GET_USER_BY_ID = "GET_USER_BY_ID";






export const getAllProducts = () => {
    return async function (dispatch) {
        const products = await axios('/products');

        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: products.data
        });
    };
};

export const getAllUsers = () => {
    return async function (dispatch) {
        const users = await axios('/users');
        return dispatch({
            type: GET_ALL_USERS,
            payload: users.data
        });
    };
};
// export const getUserById = (id) => {
//     return async function (dispatch) {
//         const user = await axios("/users/" + id);
//         return dispatch({
//             type: GET_USER_BY_ID,
//             payload: user.data
//         });
//     };
// };

export function getUserByEmail(email) {
    return async function (dispatch) {
        try {
            const user = await axios.get(`users/${email}`);
            dispatch({
                type: GET_USER_BY_EMAIL,
                payload: user.data
            });
        } catch (error) {
            return
        };
    }
};

export async function registerUser(user) {
    try {
        await axios.post("/users", user)
    } catch (err) { return }
}


export const getAllCategories = () => {
    return function (dispatch) {
        return dispatch({ type: GET_ALL_CATEGORIES, payload: null })
    };
};

export const getProductById = (instrumentId) => {
    return function (dispatch) {
        axios.get(`/products/${instrumentId}`)
            .then(response =>
                dispatch({
                    type: GET_PRODUCT_BY_ID,
                    payload: response.data
                })
            )
            .catch(error =>
                dispatch({
                    type: GET_PRODUCT_BY_ID,
                    payload: { error: error.message }
                })
            );
    }
}

export const updateProduct = (instrumentItem) => {
    return async function (dispatch) {
        const response = await axios.put(`/products/${instrumentItem._id}`,
            instrumentItem);
        return dispatch({
            type: UPDATE_PRODUCT,
            payload: response.data
        });
    };
};

export const putUser = (email, payload) => {
    return async function (dispatch) {
        const response = await axios.put(`/users/${email}`, payload);
        return dispatch({
            type: UPDATE_USER,
            payload: response.data
        });
    };
};



export function filteredIntruments(payload) {
    return async function (dispatch) {
        const filter = await axios.get(`/filter?${payload}`)
        dispatch({
            type: FILTERED_INSTRUMENTS,
            payload: filter.data
        });
    };
};


export function allOrders() {
    return async (dispatch) => {
        const NewOrder = await axios.get('/orders')
        return dispatch({
            type: ALL_ORDERS,
            payload: NewOrder.data,
        })
    }
}

export const orderProducts = (payload) => {
    return async function (dispatch) {
        return dispatch({
            type: ORDER_PRODUCTS,
            payload,
        });
    };
};

export const getReviewsByProduct = (productId) => {
    return async function (dispatch) {
        const response = await axios(`/reviews/${productId}`);
        return dispatch({
            type: GET_REVIEWS_BY_PRODUCT_ID,
            payload: response.data
        })
    }
}

export const addReview = (reviewItem) => { //add one review to product
    return async function (dispatch) {
        const response = await axios.post('reviews', reviewItem);
        dispatch({
            type: ADD_REVIEW,
            payload: response.data
        });
    }
}

export const getMyOrders = (userId) => {
    return async function (dispatch) {
        try {
            const response = await axios.get('/orders/user/' + userId);
            dispatch({
                type: GET_MY_ORDERS,
                payload: response.data
            });
        } catch (err) {
            return
        }
    }
}
export const activeLoading = () => {
    return function (dispatch) {
        return dispatch({
            type: ACTIVE_LOADING
        });
    };
}

export function createContact(payload) {
    return async function (dispatch) {
        await axios.post('/send-claim', payload)
    }
}


export function showAlert(alertInfo) {
    return {
        type: SHOW_ALERT,
        payload: alertInfo
    };
}

export function getUsers() {
    //todo - pending
}

export function purchaseOrder(orderInfo) {
    //todo - pending
}

