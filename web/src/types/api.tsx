import gql from 'graphql-tag'
import * as React from 'react'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactComponents from '@apollo/react-components'
import * as ApolloReactHoc from '@apollo/react-hoc'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  examples__JSON: any
  _FieldSet: any
}

export interface Query {
  __typename?: 'Query'
  playlists: Array<Maybe<Playlist>>
  playlist?: Maybe<Playlist>
}

export type QueryPlaylistArgs = {
  id: Scalars['ID']
}

export interface Playlist {
  __typename?: 'Playlist'
  id: Scalars['ID']
  name: Scalars['String']
  image?: Maybe<Scalars['String']>
  tracks: Array<Maybe<Track>>
}

export interface Track {
  __typename?: 'Track'
  id: Scalars['ID']
  name: Scalars['String']
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
  hackerAbbr = 'hackerAbbr',
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

export enum FakeImageCategory {
  abstract = 'abstract',
  animals = 'animals',
  business = 'business',
  cats = 'cats',
  city = 'city',
  food = 'food',
  nightlife = 'nightlife',
  fashion = 'fashion',
  people = 'people',
  nature = 'nature',
  sports = 'sports',
  technics = 'technics',
  transport = 'transport',
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
  imageWidth?: Maybe<Scalars['Int']>
  /** Only for type `imageUrl` */
  imageHeight?: Maybe<Scalars['Int']>
  /** Only for type `imageUrl` */
  imageCategory?: Maybe<FakeImageCategory>
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
  /** Only for type `colorHex`. [Details here](https://stackoverflow.com/a/43235/4989887) */
  baseColor?: Maybe<FakeColor>
  /** Only for type `number` */
  minNumber?: Maybe<Scalars['Float']>
  /** Only for type `number` */
  maxNumber?: Maybe<Scalars['Float']>
  /** Only for type `number` */
  precisionNumber?: Maybe<Scalars['Float']>
}

export type PlaylistQueryVariables = {
  id: Scalars['ID']
}

export type PlaylistQuery = {
  __typename?: 'Query'
  playlist?: Maybe<{
    __typename?: 'Playlist'
    id: string
    name: string
    image?: Maybe<string>
    tracks: Array<Maybe<{ __typename?: 'Track'; id: string; name: string }>>
  }>
}

export type PlaylistsQueryVariables = {}

export type PlaylistsQuery = {
  __typename?: 'Query'
  playlists: Array<
    Maybe<{ __typename?: 'Playlist'; id: string; name: string; image?: Maybe<string> }>
  >
}

export const PlaylistFragmentFragmentDoc = gql`
  fragment PlaylistFragment on Playlist {
    id
    name
    image
  }
`
export const TrackFragmentFragmentDoc = gql`
  fragment TrackFragment on Track {
    id
    name
  }
`
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
