const {
    GET_ALL_PRODUCTS,
    GET_PRODUCT_BY_ID,
    UPDATE_PRODUCT,
    FILTERED_INSTRUMENTS,
    ORDER_PRODUCTS,
    GET_REVIEWS_BY_PRODUCT_ID,
    ADD_REVIEW,
    CREATE_CONTACT,
    GET_MY_ORDERS,
    ACTIVE_LOADING,
    SHOW_ALERT,
    ALL_ORDERS,
    GET_ALL_USERS,
    GET_USER_BY_EMAIL,
} = require('../actions/index');

function orderMayMen(array, prop) {
    array.sort((a, b) => {
        if (a[prop] < b[prop]) return 1;
        if (a[prop] > b[prop]) return -1;
        return 0;
    });
}
function orderMenMay(array, prop) {
    array.sort((a, b) => {
        if (a[prop] < b[prop]) return -1;
        if (a[prop] > b[prop]) return 1;
        return 0;
    });
}

const initialState = {
    instruments: [],
    allInstruments: [],
    retrievedInstrument: null,
    filteredIntruments: [],
    productReviewList: [],
    myOrders: [],
    users: [],
    isLoading: true,
    alertInfo: {
        displayAlert: false,
        alertVariant: 'success',
        alertTitle: '',
        alertText: ''
    },
    orders: [],
    usersEmail: {}
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_MY_ORDERS:
            if (!action.payload) { return state }
            const NewOrders = action.payload.orders.map(element => {
                return {
                    status: element.status,
                    quantity: element.products[0].quantity,
                    instrument: state.allInstruments.find(instrument => instrument._id === element.products[0].products)
                }
            })

            return { ...state, myOrders: NewOrders }
        //-------------------------
        //-------------------------
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allInstruments: action.payload,
                instruments: action.payload,
                isLoading: false
            }

        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                retrievedInstrument: action.payload,
                isLoading: false
            }

        case UPDATE_PRODUCT:
            const allInstrumentsUpdated = state.allInstruments.map(item =>
                item._id === action.payload._id ? action.payload : item);

            const instrumentsUpdated = state.instruments.map(item =>
                item._id === action.payload._id ? action.payload : item);

            return {
                ...state,
                allInstruments: allInstrumentsUpdated,
                instruments: instrumentsUpdated,
                retrievedInstrument: action.payload
            }
        case FILTERED_INSTRUMENTS:
            return {
                ...state,
                instruments: action.payload,
                isLoading: false
            }

        case ORDER_PRODUCTS:
            let sortedProducts = JSON.parse(JSON.stringify(state.instruments))
            switch (action.payload) {
                case "Up to Down":
                    orderMayMen(sortedProducts, "name");
                    break;
                case "Down to Up":
                    orderMenMay(sortedProducts, "name");
                    break;
                case "Higher price":
                    orderMayMen(sortedProducts, "price")
                    break;
                case "Lower price":
                    orderMenMay(sortedProducts, "price");
                    break;
                default:
                    break;
            }
            return {
                ...state,
                instruments: sortedProducts,
                isLoading: false
            }

        case GET_REVIEWS_BY_PRODUCT_ID:
            return {
                ...state,
                productReviewList: action.payload
            }

        case ADD_REVIEW:
            return {
                ...state,
                productReviewList: [
                    action.payload,
                    ...state.productReviewList]
            }

        case ACTIVE_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case ALL_ORDERS:
            return {
                ...state,
                orders: action.payload,
            }

        case CREATE_CONTACT:
            return {
                ...state,

            }

        case SHOW_ALERT:
            return {
                ...state,
                alertInfo: {
                    displayAlert: true,
                    ...action.payload
                }
            };

        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }

        case GET_USER_BY_EMAIL:
            return {
                ...state,
                usersEmail: action.payload,
                isLoading: false
            }





        default:
            return state
    }

}
