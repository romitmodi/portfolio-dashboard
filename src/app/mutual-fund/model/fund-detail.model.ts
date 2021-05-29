export interface FundMetaData {
    fund_house: string,
    scheme_category: string,
    scheme_code: string,
    scheme_name: string,
    scheme_type: string
}

export interface FundDetails {
    meta: FundMetaData,
    data: { date: string, nav: string }[],
    status: string
}