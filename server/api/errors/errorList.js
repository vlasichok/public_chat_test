const errorList = {
    INTERNAL_SERVER_ERROR : {
        code: 1,
        name: 'INTERNAL_SERVER_ERROR',
        cause: 'The server encountered an unexpected condition which prevented it from fulfilling the request.'
    },
    UNKNOWN_ERROR : {
        code: 2,
        name: 'UNKNOWN_ERROR',
        cause: 'The error is not related to expected server behavior.'
    },
    MESSAGE_NOT_FOUND : {
        code: 3,
        name: 'MESSAGE_NOT_FOUND',
        cause: 'The message with requested ID was not found in the data base'
    },
    PAGE_NUMBER_IS_INCORECT: {
        code: 4,
        name: 'PAGE_NUMBER_IS_INCORECT',
        cause: 'The page number must be a positive number'
    },
    REQUEST_BODY_IS_EMPTY: {
        code: 5,
        name: 'REQUEST_BODY_IS_EMPTY',
        cause: 'Request body is empty, please specify the data'
    },
    ID_IS_NOT_DEFINED: {
        code: 6,
        name: 'ID_IS_NOT_DEFINED',
        cause: 'ID is not defined, please specify the id in URL params'
    }
};

module.exports = errorList;
