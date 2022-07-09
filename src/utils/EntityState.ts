type NotLoaded = {
  state: 'not_loaded'
}

type Loading = {
  state: 'loading'
}

type Errored = {
  state: 'errored'
}

type Loaded<Data> = {
  state: 'loaded',
  data: Data
}

export type EntityState<Data> = NotLoaded | Loading | Errored | Loaded<Data>