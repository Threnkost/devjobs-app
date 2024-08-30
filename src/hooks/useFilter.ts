import { useEffect, useReducer } from "react"


type Keywords = { query: Array<string>, location: string, fullTimeOnly: string }

type Params = {
    defaultSource   : Array<any>
    defaultQuery    : string
    defaultLocation : string
    keywords        : Keywords
}


type State = {
    source  : Array<any>
    query   : string
    location: string
    filtered: Array<any>
    fullTimeOnly: boolean
    keywords: Keywords
}


export type Action =
    | { type: 'SET_SOURCE', payload: Array<any> }
    | { type: 'SET_QUERY', payload: string }
    | { type: 'SET_LOCATION', payload: string }
    | { type: 'SET_FULLTIME_ONLY', payload: boolean }
    | { type: 'FILTER' }


const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SET_SOURCE':
            return {
                ...state,
                source: action.payload
            }

        case 'SET_QUERY':
            return {
                ...state,
                query: action.payload
            }

        case 'SET_LOCATION':
            return {
                ...state,
                location: action.payload
            }

        case 'SET_FULLTIME_ONLY':
            return {
                ...state,
                fullTimeOnly: action.payload
            }

        case 'FILTER':
            const filter = () => {
                let filtered = []
                filtered = state.source.filter(item => {
                    return state.keywords.query.some(kw => item[kw].toLowerCase().includes(state.query.toLowerCase()))
                })
        
                filtered = filtered.filter(item => item[state.keywords.location].toLowerCase().includes(state.location.toLowerCase()))
                if (state.fullTimeOnly) filtered = filtered.filter(item => item[state.keywords.fullTimeOnly] === 'Full Time')
                return filtered
            }

            let filtered = filter()

            return {
                ...state,
                filtered
            }
    }
}


export const useFilter = ({ defaultSource, defaultQuery, defaultLocation, keywords }: Params) => {
    const [state, dispatch] = useReducer(reducer, {
        source  : defaultSource,
        query   : defaultQuery,
        location: defaultLocation,
        fullTimeOnly: false,
        filtered: [],
        keywords
    })

    useEffect(() => {
        dispatch({ type: 'FILTER' })
    }, [])

    return [state, dispatch] as const
}