import gql from 'graphql-tag'
import * as React from 'react'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactComponents from '@apollo/react-components'
import * as ApolloReactHoc from '@apollo/react-hoc'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  ExternalUrl: any
  ExternalId: any
  examples__JSON: any
  _FieldSet: any
}

export interface Query {
  __typename?: 'Query'
  playlists: Array<Maybe<Playlist>>
  me?: Maybe<User>
  playlist?: Maybe<Playlist>
}

export type QueryMeArgs = {
  code: Scalars['String']
}

export type QueryPlaylistArgs = {
  id: Scalars['ID']
}

export interface Playlist {
  __typename?: 'Playlist'
  description?: Maybe<Scalars['String']>
  externalUrls: Array<Maybe<Scalars['ExternalUrl']>>
  href?: Maybe<Scalars['String']>
  id: Scalars['ID']
  images: Array<Maybe<Image>>
  isCollaborative: Scalars['Boolean']
  isPublicAccess: Scalars['Boolean']
  name: Scalars['String']
  owner?: Maybe<User>
  snapshotId?: Maybe<Scalars['String']>
  tracks: Array<Maybe<Track>>
  uri?: Maybe<Scalars['String']>
}

export interface Image {
  __typename?: 'Image'
  id: Scalars['ID']
  uri: Scalars['String']
  height: Scalars['Int']
  width: Scalars['Int']
}

export interface User {
  __typename?: 'User'
  birthdate?: Maybe<Scalars['String']>
  country?: Maybe<CountryCode>
  displayName?: Maybe<Scalars['String']>
  email: Scalars['String']
  externalUrls?: Maybe<Scalars['ExternalUrl']>
  href?: Maybe<Scalars['String']>
  id: Scalars['ID']
  images?: Maybe<Array<Maybe<Image>>>
  product?: Maybe<ProductType>
  type?: Maybe<ModelObjectType>
  uri?: Maybe<Scalars['String']>
}

export enum CountryCode {
  ac = 'AC',
  ad = 'AD',
  ae = 'AE',
  af = 'AF',
  ag = 'AG',
  ai = 'AI',
  al = 'AL',
  am = 'AM',
  an = 'AN',
  ao = 'AO',
  aq = 'AQ',
  ar = 'AR',
  as = 'AS',
  at = 'AT',
  au = 'AU',
  aw = 'AW',
  ax = 'AX',
  az = 'AZ',
  ba = 'BA',
  bb = 'BB',
  bd = 'BD',
  be = 'BE',
  bf = 'BF',
  bg = 'BG',
  bh = 'BH',
  bi = 'BI',
  bj = 'BJ',
  bl = 'BL',
  bm = 'BM',
  bn = 'BN',
  bo = 'BO',
  bq = 'BQ',
  br = 'BR',
  bs = 'BS',
  bt = 'BT',
  bu = 'BU',
  bv = 'BV',
  bw = 'BW',
  by = 'BY',
  bz = 'BZ',
  ca = 'CA',
  cc = 'CC',
  cd = 'CD',
  cf = 'CF',
  cg = 'CG',
  ch = 'CH',
  ci = 'CI',
  ck = 'CK',
  cl = 'CL',
  cm = 'CM',
  cn = 'CN',
  co = 'CO',
  cp = 'CP',
  cr = 'CR',
  cs = 'CS',
  cu = 'CU',
  cv = 'CV',
  cw = 'CW',
  cx = 'CX',
  cy = 'CY',
  cz = 'CZ',
  de = 'DE',
  dg = 'DG',
  dj = 'DJ',
  dk = 'DK',
  dm = 'DM',
  do = 'DO',
  dz = 'DZ',
  ea = 'EA',
  ec = 'EC',
  ee = 'EE',
  eg = 'EG',
  eh = 'EH',
  er = 'ER',
  es = 'ES',
  et = 'ET',
  eu = 'EU',
  ez = 'EZ',
  fi = 'FI',
  fj = 'FJ',
  fk = 'FK',
  fm = 'FM',
  fo = 'FO',
  fr = 'FR',
  fx = 'FX',
  ga = 'GA',
  gb = 'GB',
  gd = 'GD',
  ge = 'GE',
  gf = 'GF',
  gg = 'GG',
  gh = 'GH',
  gi = 'GI',
  gl = 'GL',
  gm = 'GM',
  gn = 'GN',
  gp = 'GP',
  gq = 'GQ',
  gr = 'GR',
  gs = 'GS',
  gt = 'GT',
  gu = 'GU',
  gw = 'GW',
  gy = 'GY',
  hk = 'HK',
  hm = 'HM',
  hn = 'HN',
  hr = 'HR',
  ht = 'HT',
  hu = 'HU',
  ic = 'IC',
  id = 'ID',
  ie = 'IE',
  il = 'IL',
  im = 'IM',
  in = 'IN',
  io = 'IO',
  iq = 'IQ',
  ir = 'IR',
  is = 'IS',
  it = 'IT',
  je = 'JE',
  jm = 'JM',
  jo = 'JO',
  jp = 'JP',
  ke = 'KE',
  kg = 'KG',
  kh = 'KH',
  ki = 'KI',
  km = 'KM',
  kn = 'KN',
  kp = 'KP',
  kr = 'KR',
  kw = 'KW',
  ky = 'KY',
  kz = 'KZ',
  la = 'LA',
  lb = 'LB',
  lc = 'LC',
  li = 'LI',
  lk = 'LK',
  lr = 'LR',
  ls = 'LS',
  lt = 'LT',
  lu = 'LU',
  lv = 'LV',
  ly = 'LY',
  ma = 'MA',
  mc = 'MC',
  md = 'MD',
  me = 'ME',
  mf = 'MF',
  mg = 'MG',
  mh = 'MH',
  mk = 'MK',
  ml = 'ML',
  mm = 'MM',
  mn = 'MN',
  mo = 'MO',
  mp = 'MP',
  mq = 'MQ',
  mr = 'MR',
  ms = 'MS',
  mt = 'MT',
  mu = 'MU',
  mv = 'MV',
  mw = 'MW',
  mx = 'MX',
  my = 'MY',
  mz = 'MZ',
  na = 'NA',
  nc = 'NC',
  ne = 'NE',
  nf = 'NF',
  ng = 'NG',
  ni = 'NI',
  nl = 'NL',
  no = 'NO',
  np = 'NP',
  nr = 'NR',
  nt = 'NT',
  nu = 'NU',
  nz = 'NZ',
  om = 'OM',
  pa = 'PA',
  pe = 'PE',
  pf = 'PF',
  pg = 'PG',
  ph = 'PH',
  pk = 'PK',
  pl = 'PL',
  pm = 'PM',
  pn = 'PN',
  pr = 'PR',
  ps = 'PS',
  pt = 'PT',
  pw = 'PW',
  py = 'PY',
  qa = 'QA',
  re = 'RE',
  ro = 'RO',
  rs = 'RS',
  ru = 'RU',
  rw = 'RW',
  sa = 'SA',
  sb = 'SB',
  sc = 'SC',
  sd = 'SD',
  se = 'SE',
  sf = 'SF',
  sg = 'SG',
  sh = 'SH',
  si = 'SI',
  sj = 'SJ',
  sk = 'SK',
  sl = 'SL',
  sm = 'SM',
  sn = 'SN',
  so = 'SO',
  sr = 'SR',
  ss = 'SS',
  st = 'ST',
  su = 'SU',
  sv = 'SV',
  sx = 'SX',
  sy = 'SY',
  sz = 'SZ',
  ta = 'TA',
  tc = 'TC',
  td = 'TD',
  tf = 'TF',
  tg = 'TG',
  th = 'TH',
  tj = 'TJ',
  tk = 'TK',
  tl = 'TL',
  tm = 'TM',
  tn = 'TN',
  to = 'TO',
  tp = 'TP',
  tr = 'TR',
  tt = 'TT',
  tv = 'TV',
  tw = 'TW',
  tz = 'TZ',
  ua = 'UA',
  ug = 'UG',
  uk = 'UK',
  um = 'UM',
  undefined = 'UNDEFINED',
  us = 'US',
  uy = 'UY',
  uz = 'UZ',
  va = 'VA',
  vc = 'VC',
  ve = 'VE',
  vg = 'VG',
  vi = 'VI',
  vn = 'VN',
  vu = 'VU',
  wf = 'WF',
  ws = 'WS',
  xk = 'XK',
  ye = 'YE',
  yt = 'YT',
  yu = 'YU',
  za = 'ZA',
  zm = 'ZM',
  zr = 'ZR',
  zw = 'ZW',
}

export enum ProductType {
  basicDesktop = 'BASIC_DESKTOP',
  daypass = 'DAYPASS',
  free = 'FREE',
  open = 'OPEN',
  premium = 'PREMIUM',
}

export enum ModelObjectType {
  album = 'ALBUM',
  artist = 'ARTIST',
  audioFeatures = 'AUDIO_FEATURES',
  episode = 'EPISODE',
  genre = 'GENRE',
  playlist = 'PLAYLIST',
  show = 'SHOW',
  track = 'TRACK',
  user = 'USER',
}

export interface Track {
  __typename?: 'Track'
  album?: Maybe<Album>
  artists?: Maybe<Array<Maybe<Artist>>>
  availableMarkets?: Maybe<Array<Maybe<CountryCode>>>
  discNumber?: Maybe<Scalars['Int']>
  durationMs?: Maybe<Scalars['Int']>
  externalIds?: Maybe<Array<Maybe<Scalars['ExternalId']>>>
  externalUrls?: Maybe<Scalars['ExternalUrl']>
  href?: Maybe<Scalars['String']>
  id: Scalars['ID']
  isExplicit: Scalars['Boolean']
  isPlayable: Scalars['Boolean']
  name: Scalars['String']
  popularity?: Maybe<Scalars['Int']>
  previewUrl?: Maybe<Scalars['String']>
  trackNumber?: Maybe<Scalars['Int']>
  uri?: Maybe<Scalars['String']>
}

export interface Album {
  __typename?: 'Album'
  albumType?: Maybe<AlbumType>
  artists: Array<Maybe<Artist>>
  availableMarkets?: Maybe<Array<Maybe<CountryCode>>>
  externalIds?: Maybe<Scalars['ExternalId']>
  externalUrls?: Maybe<Scalars['ExternalUrl']>
  genres?: Maybe<Array<Maybe<Scalars['String']>>>
  href?: Maybe<Scalars['String']>
  id: Scalars['ID']
  images?: Maybe<Array<Maybe<Image>>>
  label?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  popularity?: Maybe<Scalars['Int']>
  releaseDate?: Maybe<Scalars['String']>
  releaseDatePrecision?: Maybe<ReleaseDatePrecision>
  tracks?: Maybe<Array<Maybe<Track>>>
  type?: Maybe<ModelObjectType>
  uri?: Maybe<Scalars['String']>
}

export enum AlbumType {
  album = 'ALBUM',
  compilation = 'COMPILATION',
  single = 'SINGLE',
}

export interface Artist {
  __typename?: 'Artist'
  externalUrls: Array<Maybe<Scalars['ExternalUrl']>>
  genres: Array<Maybe<Scalars['String']>>
  href: Scalars['String']
  id: Scalars['ID']
  images: Array<Maybe<Image>>
  name: Scalars['String']
  popularity?: Maybe<Scalars['Int']>
  uri?: Maybe<Scalars['String']>
}

export enum ReleaseDatePrecision {
  day = 'DAY',
  month = 'MONTH',
  year = 'YEAR',
}

export enum AlbumGroup {
  album = 'ALBUM',
  appearsOn = 'APPEARS_ON',
  compilation = 'COMPILATION',
  single = 'SINGLE',
}

export enum CopyrightType {
  c = 'C',
  p = 'P',
}

export enum FakeLocale {
  az = 'az',
  cz = 'cz',
  de = 'de',
  deAt = 'de_AT',
  deCh = 'de_CH',
  en = 'en',
  enAu = 'en_AU',
  enBork = 'en_BORK',
  enCa = 'en_CA',
  enGb = 'en_GB',
  enIe = 'en_IE',
  enInd = 'en_IND',
  enUs = 'en_US',
  enAuOcker = 'en_au_ocker',
  es = 'es',
  esMx = 'es_MX',
  fa = 'fa',
  fr = 'fr',
  frCa = 'fr_CA',
  ge = 'ge',
  idId = 'id_ID',
  it = 'it',
  ja = 'ja',
  ko = 'ko',
  nbNo = 'nb_NO',
  nep = 'nep',
  nl = 'nl',
  pl = 'pl',
  ptBr = 'pt_BR',
  ru = 'ru',
  sk = 'sk',
  sv = 'sv',
  tr = 'tr',
  uk = 'uk',
  vi = 'vi',
  zhCn = 'zh_CN',
  zhTw = 'zh_TW',
}

export enum FakeTypes {
  zipCode = 'zipCode',
  city = 'city',
  streetName = 'streetName',
  /** Configure address with option `useFullAddress` */
  streetAddress = 'streetAddress',
  secondaryAddress = 'secondaryAddress',
  county = 'county',
  country = 'country',
  countryCode = 'countryCode',
  state = 'state',
  stateAbbr = 'stateAbbr',
  latitude = 'latitude',
  longitude = 'longitude',
  colorName = 'colorName',
  productCategory = 'productCategory',
  productName = 'productName',
  /** Sum of money. Configure with options `minMoney`/`maxMoney` and 'decimalPlaces'. */
  money = 'money',
  productMaterial = 'productMaterial',
  product = 'product',
  companyName = 'companyName',
  companyCatchPhrase = 'companyCatchPhrase',
  companyBs = 'companyBS',
  dbColumn = 'dbColumn',
  dbType = 'dbType',
  dbCollation = 'dbCollation',
  dbEngine = 'dbEngine',
  /**
   * By default returns dates beetween 2000-01-01 and 2030-01-01.
   * Configure date format with options `dateFormat` `dateFrom` `dateTo`.
   */
  date = 'date',
  /** Configure date format with option `dateFormat` */
  pastDate = 'pastDate',
  /** Configure date format with option `dateFormat` */
  futureDate = 'futureDate',
  /** Configure date format with option `dateFormat` */
  recentDate = 'recentDate',
  financeAccountName = 'financeAccountName',
  financeTransactionType = 'financeTransactionType',
  currencyCode = 'currencyCode',
  currencyName = 'currencyName',
  currencySymbol = 'currencySymbol',
  bitcoinAddress = 'bitcoinAddress',
  internationalBankAccountNumber = 'internationalBankAccountNumber',
  bankIdentifierCode = 'bankIdentifierCode',
  hackerAbbreviation = 'hackerAbbreviation',
  hackerPhrase = 'hackerPhrase',
  /** An image url. Configure image with options: `imageCategory`, `imageWidth`, `imageHeight` and `randomizeImageUrl` */
  imageUrl = 'imageUrl',
  /** An URL for an avatar */
  avatarUrl = 'avatarUrl',
  /** Configure email provider with option: `emailProvider` */
  email = 'email',
  url = 'url',
  domainName = 'domainName',
  ipv4Address = 'ipv4Address',
  ipv6Address = 'ipv6Address',
  userAgent = 'userAgent',
  /** Configure color with option: `baseColor` */
  colorHex = 'colorHex',
  macAddress = 'macAddress',
  /** Configure password with option `passwordLength` */
  password = 'password',
  /** Lorem Ipsum text. Configure size with option `loremSize` */
  lorem = 'lorem',
  firstName = 'firstName',
  lastName = 'lastName',
  fullName = 'fullName',
  jobTitle = 'jobTitle',
  phoneNumber = 'phoneNumber',
  number = 'number',
  uuid = 'uuid',
  word = 'word',
  words = 'words',
  locale = 'locale',
  filename = 'filename',
  mimeType = 'mimeType',
  fileExtension = 'fileExtension',
  semver = 'semver',
}

export interface FakeImageSize {
  width: Scalars['Int']
  height: Scalars['Int']
}

export enum FakeLoremSize {
  word = 'word',
  words = 'words',
  sentence = 'sentence',
  sentences = 'sentences',
  paragraph = 'paragraph',
  paragraphs = 'paragraphs',
}

export interface FakeColor {
  red255?: Maybe<Scalars['Int']>
  green255?: Maybe<Scalars['Int']>
  blue255?: Maybe<Scalars['Int']>
}

export interface FakeOptions {
  /** Only for type `streetAddress` */
  useFullAddress?: Maybe<Scalars['Boolean']>
  /** Only for type `money` */
  minMoney?: Maybe<Scalars['Float']>
  /** Only for type `money` */
  maxMoney?: Maybe<Scalars['Float']>
  /** Only for type `money` */
  decimalPlaces?: Maybe<Scalars['Int']>
  /** Only for type `imageUrl` */
  imageSize?: Maybe<FakeImageSize>
  /** Only for type `imageUrl`. Example value: `["nature", "water"]`. */
  imageKeywords?: Maybe<Array<Scalars['String']>>
  /** Only for type `imageUrl` */
  randomizeImageUrl?: Maybe<Scalars['Boolean']>
  /** Only for type `email` */
  emailProvider?: Maybe<Scalars['String']>
  /** Only for type `password` */
  passwordLength?: Maybe<Scalars['Int']>
  /** Only for type `lorem` */
  loremSize?: Maybe<FakeLoremSize>
  /** Only for types `*Date`. Example value: `YYYY MM DD`. [Full Specification](http://momentjs.com/docs/#/displaying/format/) */
  dateFormat?: Maybe<Scalars['String']>
  /** Only for types `betweenDate`. Example value: `1986-11-02`. */
  dateFrom?: Maybe<Scalars['String']>
  /** Only for types `betweenDate`. Example value: `2038-01-19`. */
  dateTo?: Maybe<Scalars['String']>
  /** Only for type `colorHex`. [Details here](https://stackoverflow.com/a/43235/4989887) */
  baseColor?: Maybe<FakeColor>
  /** Only for type `number` */
  minNumber?: Maybe<Scalars['Float']>
  /** Only for type `number` */
  maxNumber?: Maybe<Scalars['Float']>
  /** Only for type `number` */
  precisionNumber?: Maybe<Scalars['Float']>
}

export type MeQueryVariables = Exact<{
  code: Scalars['String']
}>

export type MeQuery = {
  __typename?: 'Query'
  me?: Maybe<{ __typename?: 'User'; id: string; email: string; displayName?: Maybe<string> }>
}

export type PlaylistQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type PlaylistQuery = {
  __typename?: 'Query'
  playlist?: Maybe<{
    __typename?: 'Playlist'
    id: string
    name: string
    description?: Maybe<string>
    isCollaborative: boolean
    isPublicAccess: boolean
    tracks: Array<
      Maybe<{
        __typename?: 'Track'
        id: string
        name: string
        popularity?: Maybe<number>
        isExplicit: boolean
        isPlayable: boolean
      }>
    >
  }>
}

export type PlaylistsQueryVariables = Exact<{ [key: string]: never }>

export type PlaylistsQuery = {
  __typename?: 'Query'
  playlists: Array<
    Maybe<{
      __typename?: 'Playlist'
      id: string
      name: string
      description?: Maybe<string>
      isCollaborative: boolean
      isPublicAccess: boolean
    }>
  >
}

export const PlaylistFragmentFragmentDoc = gql`
  fragment PlaylistFragment on Playlist {
    id
    name
    description
    isCollaborative
    isPublicAccess
  }
`
export const TrackFragmentFragmentDoc = gql`
  fragment TrackFragment on Track {
    id
    name
    popularity
    isExplicit
    isPlayable
  }
`
export const MeDocument = gql`
  query Me($code: String!) {
    me(code: $code) {
      id
      email
      displayName
    }
  }
`
export type MeComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>,
  'query'
> &
  ({ variables: MeQueryVariables; skip?: boolean } | { skip: boolean })

export const MeComponent = (props: MeComponentProps) => (
  <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
)

export type MeProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<MeQuery, MeQueryVariables>
} &
  TChildProps
export function withMe<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    MeQuery,
    MeQueryVariables,
    MeProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    MeQuery,
    MeQueryVariables,
    MeProps<TChildProps, TDataName>
  >(MeDocument, {
    alias: 'me',
    ...operationOptions,
  })
}

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>,
) {
  return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
export function useMeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>
export const PlaylistDocument = gql`
  query Playlist($id: ID!) {
    playlist(id: $id) {
      ...PlaylistFragment
      tracks {
        ...TrackFragment
      }
    }
  }
  ${PlaylistFragmentFragmentDoc}
  ${TrackFragmentFragmentDoc}
`
export type PlaylistComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<PlaylistQuery, PlaylistQueryVariables>,
  'query'
> &
  ({ variables: PlaylistQueryVariables; skip?: boolean } | { skip: boolean })

export const PlaylistComponent = (props: PlaylistComponentProps) => (
  <ApolloReactComponents.Query<PlaylistQuery, PlaylistQueryVariables>
    query={PlaylistDocument}
    {...props}
  />
)

export type PlaylistProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<PlaylistQuery, PlaylistQueryVariables>
} &
  TChildProps
export function withPlaylist<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    PlaylistQuery,
    PlaylistQueryVariables,
    PlaylistProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    PlaylistQuery,
    PlaylistQueryVariables,
    PlaylistProps<TChildProps, TDataName>
  >(PlaylistDocument, {
    alias: 'playlist',
    ...operationOptions,
  })
}

/**
 * __usePlaylistQuery__
 *
 * To run a query within a React component, call `usePlaylistQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaylistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaylistQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePlaylistQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<PlaylistQuery, PlaylistQueryVariables>,
) {
  return ApolloReactHooks.useQuery<PlaylistQuery, PlaylistQueryVariables>(
    PlaylistDocument,
    baseOptions,
  )
}
export function usePlaylistLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PlaylistQuery, PlaylistQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<PlaylistQuery, PlaylistQueryVariables>(
    PlaylistDocument,
    baseOptions,
  )
}
export type PlaylistQueryHookResult = ReturnType<typeof usePlaylistQuery>
export type PlaylistLazyQueryHookResult = ReturnType<typeof usePlaylistLazyQuery>
export type PlaylistQueryResult = ApolloReactCommon.QueryResult<
  PlaylistQuery,
  PlaylistQueryVariables
>
export const PlaylistsDocument = gql`
  query Playlists {
    playlists {
      ...PlaylistFragment
    }
  }
  ${PlaylistFragmentFragmentDoc}
`
export type PlaylistsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<PlaylistsQuery, PlaylistsQueryVariables>,
  'query'
>

export const PlaylistsComponent = (props: PlaylistsComponentProps) => (
  <ApolloReactComponents.Query<PlaylistsQuery, PlaylistsQueryVariables>
    query={PlaylistsDocument}
    {...props}
  />
)

export type PlaylistsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<PlaylistsQuery, PlaylistsQueryVariables>
} &
  TChildProps
export function withPlaylists<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    PlaylistsQuery,
    PlaylistsQueryVariables,
    PlaylistsProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    PlaylistsQuery,
    PlaylistsQueryVariables,
    PlaylistsProps<TChildProps, TDataName>
  >(PlaylistsDocument, {
    alias: 'playlists',
    ...operationOptions,
  })
}

/**
 * __usePlaylistsQuery__
 *
 * To run a query within a React component, call `usePlaylistsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaylistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaylistsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlaylistsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<PlaylistsQuery, PlaylistsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<PlaylistsQuery, PlaylistsQueryVariables>(
    PlaylistsDocument,
    baseOptions,
  )
}
export function usePlaylistsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PlaylistsQuery, PlaylistsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<PlaylistsQuery, PlaylistsQueryVariables>(
    PlaylistsDocument,
    baseOptions,
  )
}
export type PlaylistsQueryHookResult = ReturnType<typeof usePlaylistsQuery>
export type PlaylistsLazyQueryHookResult = ReturnType<typeof usePlaylistsLazyQuery>
export type PlaylistsQueryResult = ApolloReactCommon.QueryResult<
  PlaylistsQuery,
  PlaylistsQueryVariables
>
