
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Events
 * 
 */
export type Events = $Result.DefaultSelection<Prisma.$EventsPayload>
/**
 * Model Facility
 * 
 */
export type Facility = $Result.DefaultSelection<Prisma.$FacilityPayload>
/**
 * Model InsuranceFiles
 * 
 */
export type InsuranceFiles = $Result.DefaultSelection<Prisma.$InsuranceFilesPayload>
/**
 * Model Option
 * 
 */
export type Option = $Result.DefaultSelection<Prisma.$OptionPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model ReservationDate
 * 
 */
export type ReservationDate = $Result.DefaultSelection<Prisma.$ReservationDatePayload>
/**
 * Model ReservationFees
 * 
 */
export type ReservationFees = $Result.DefaultSelection<Prisma.$ReservationFeesPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Reservation_approved: {
  pending: 'pending',
  approved: 'approved',
  denied: 'denied',
  canceled: 'canceled'
};

export type Reservation_approved = (typeof Reservation_approved)[keyof typeof Reservation_approved]


export const ReservationDate_approved: {
  pending: 'pending',
  approved: 'approved',
  denied: 'denied',
  canceled: 'canceled'
};

export type ReservationDate_approved = (typeof ReservationDate_approved)[keyof typeof ReservationDate_approved]


export const User_role: {
  CAL_ADMIN: 'CAL_ADMIN',
  ADMIN_ADMIN: 'ADMIN_ADMIN',
  GR_ADMIN: 'GR_ADMIN',
  LHS_ADMIN: 'LHS_ADMIN',
  LMS_ADMIN: 'LMS_ADMIN',
  WE_ADMIN: 'WE_ADMIN',
  SO_ADMIN: 'SO_ADMIN',
  SUP_ADMIN: 'SUP_ADMIN',
  USER: 'USER'
};

export type User_role = (typeof User_role)[keyof typeof User_role]

}

export type Reservation_approved = $Enums.Reservation_approved

export const Reservation_approved: typeof $Enums.Reservation_approved

export type ReservationDate_approved = $Enums.ReservationDate_approved

export const ReservationDate_approved: typeof $Enums.ReservationDate_approved

export type User_role = $Enums.User_role

export const User_role: typeof $Enums.User_role

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **Events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.EventsDelegate<ExtArgs>;

  /**
   * `prisma.facility`: Exposes CRUD operations for the **Facility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facilities
    * const facilities = await prisma.facility.findMany()
    * ```
    */
  get facility(): Prisma.FacilityDelegate<ExtArgs>;

  /**
   * `prisma.insuranceFiles`: Exposes CRUD operations for the **InsuranceFiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InsuranceFiles
    * const insuranceFiles = await prisma.insuranceFiles.findMany()
    * ```
    */
  get insuranceFiles(): Prisma.InsuranceFilesDelegate<ExtArgs>;

  /**
   * `prisma.option`: Exposes CRUD operations for the **Option** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Options
    * const options = await prisma.option.findMany()
    * ```
    */
  get option(): Prisma.OptionDelegate<ExtArgs>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs>;

  /**
   * `prisma.reservationDate`: Exposes CRUD operations for the **ReservationDate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReservationDates
    * const reservationDates = await prisma.reservationDate.findMany()
    * ```
    */
  get reservationDate(): Prisma.ReservationDateDelegate<ExtArgs>;

  /**
   * `prisma.reservationFees`: Exposes CRUD operations for the **ReservationFees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReservationFees
    * const reservationFees = await prisma.reservationFees.findMany()
    * ```
    */
  get reservationFees(): Prisma.ReservationFeesDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Category: 'Category',
    Events: 'Events',
    Facility: 'Facility',
    InsuranceFiles: 'InsuranceFiles',
    Option: 'Option',
    Reservation: 'Reservation',
    ReservationDate: 'ReservationDate',
    ReservationFees: 'ReservationFees',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'account' | 'category' | 'events' | 'facility' | 'insuranceFiles' | 'option' | 'reservation' | 'reservationDate' | 'reservationFees' | 'session' | 'user' | 'verificationToken'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Events: {
        payload: Prisma.$EventsPayload<ExtArgs>
        fields: Prisma.EventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findFirst: {
            args: Prisma.EventsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findMany: {
            args: Prisma.EventsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          create: {
            args: Prisma.EventsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          createMany: {
            args: Prisma.EventsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EventsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          update: {
            args: Prisma.EventsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          deleteMany: {
            args: Prisma.EventsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EventsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EventsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.EventsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventsCountArgs<ExtArgs>,
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      Facility: {
        payload: Prisma.$FacilityPayload<ExtArgs>
        fields: Prisma.FacilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacilityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacilityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          findFirst: {
            args: Prisma.FacilityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacilityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          findMany: {
            args: Prisma.FacilityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          create: {
            args: Prisma.FacilityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          createMany: {
            args: Prisma.FacilityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FacilityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          update: {
            args: Prisma.FacilityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          deleteMany: {
            args: Prisma.FacilityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FacilityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FacilityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          aggregate: {
            args: Prisma.FacilityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFacility>
          }
          groupBy: {
            args: Prisma.FacilityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FacilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacilityCountArgs<ExtArgs>,
            result: $Utils.Optional<FacilityCountAggregateOutputType> | number
          }
        }
      }
      InsuranceFiles: {
        payload: Prisma.$InsuranceFilesPayload<ExtArgs>
        fields: Prisma.InsuranceFilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InsuranceFilesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InsuranceFilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InsuranceFilesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InsuranceFilesPayload>
          }
          findFirst: {
            args: Prisma.InsuranceFilesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InsuranceFilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InsuranceFilesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InsuranceFilesPayload>
          }
          findMany: {
            args: Prisma.InsuranceFilesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InsuranceFilesPayload>[]
          }
          create: {
            args: Prisma.InsuranceFilesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InsuranceFilesPayload>
          }
          createMany: {
            args: Prisma.InsuranceFilesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InsuranceFilesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InsuranceFilesPayload>
          }
          update: {
            args: Prisma.InsuranceFilesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InsuranceFilesPayload>
          }
          deleteMany: {
            args: Prisma.InsuranceFilesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InsuranceFilesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InsuranceFilesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InsuranceFilesPayload>
          }
          aggregate: {
            args: Prisma.InsuranceFilesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInsuranceFiles>
          }
          groupBy: {
            args: Prisma.InsuranceFilesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InsuranceFilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.InsuranceFilesCountArgs<ExtArgs>,
            result: $Utils.Optional<InsuranceFilesCountAggregateOutputType> | number
          }
        }
      }
      Option: {
        payload: Prisma.$OptionPayload<ExtArgs>
        fields: Prisma.OptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findFirst: {
            args: Prisma.OptionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findMany: {
            args: Prisma.OptionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          create: {
            args: Prisma.OptionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          createMany: {
            args: Prisma.OptionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OptionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          update: {
            args: Prisma.OptionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          deleteMany: {
            args: Prisma.OptionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OptionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OptionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          aggregate: {
            args: Prisma.OptionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOption>
          }
          groupBy: {
            args: Prisma.OptionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionCountArgs<ExtArgs>,
            result: $Utils.Optional<OptionCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>,
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      ReservationDate: {
        payload: Prisma.$ReservationDatePayload<ExtArgs>
        fields: Prisma.ReservationDateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationDateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationDatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationDateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationDatePayload>
          }
          findFirst: {
            args: Prisma.ReservationDateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationDatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationDateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationDatePayload>
          }
          findMany: {
            args: Prisma.ReservationDateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationDatePayload>[]
          }
          create: {
            args: Prisma.ReservationDateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationDatePayload>
          }
          createMany: {
            args: Prisma.ReservationDateCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReservationDateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationDatePayload>
          }
          update: {
            args: Prisma.ReservationDateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationDatePayload>
          }
          deleteMany: {
            args: Prisma.ReservationDateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationDateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReservationDateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationDatePayload>
          }
          aggregate: {
            args: Prisma.ReservationDateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReservationDate>
          }
          groupBy: {
            args: Prisma.ReservationDateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReservationDateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationDateCountArgs<ExtArgs>,
            result: $Utils.Optional<ReservationDateCountAggregateOutputType> | number
          }
        }
      }
      ReservationFees: {
        payload: Prisma.$ReservationFeesPayload<ExtArgs>
        fields: Prisma.ReservationFeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFeesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationFeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFeesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationFeesPayload>
          }
          findFirst: {
            args: Prisma.ReservationFeesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationFeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFeesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationFeesPayload>
          }
          findMany: {
            args: Prisma.ReservationFeesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationFeesPayload>[]
          }
          create: {
            args: Prisma.ReservationFeesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationFeesPayload>
          }
          createMany: {
            args: Prisma.ReservationFeesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReservationFeesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationFeesPayload>
          }
          update: {
            args: Prisma.ReservationFeesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationFeesPayload>
          }
          deleteMany: {
            args: Prisma.ReservationFeesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationFeesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReservationFeesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationFeesPayload>
          }
          aggregate: {
            args: Prisma.ReservationFeesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReservationFees>
          }
          groupBy: {
            args: Prisma.ReservationFeesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReservationFeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationFeesCountArgs<ExtArgs>,
            result: $Utils.Optional<ReservationFeesCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    Reservation: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Reservation?: boolean | CategoryCountOutputTypeCountReservationArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountReservationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }



  /**
   * Count Type EventsCountOutputType
   */

  export type EventsCountOutputType = {
    Reservation: number
  }

  export type EventsCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Reservation?: boolean | EventsCountOutputTypeCountReservationArgs
  }

  // Custom InputTypes

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventsCountOutputType
     */
    select?: EventsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountReservationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }



  /**
   * Count Type FacilityCountOutputType
   */

  export type FacilityCountOutputType = {
    Category: number
    Events: number
    Reservation: number
    Option: number
  }

  export type FacilityCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Category?: boolean | FacilityCountOutputTypeCountCategoryArgs
    Events?: boolean | FacilityCountOutputTypeCountEventsArgs
    Reservation?: boolean | FacilityCountOutputTypeCountReservationArgs
    Option?: boolean | FacilityCountOutputTypeCountOptionArgs
  }

  // Custom InputTypes

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityCountOutputType
     */
    select?: FacilityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountCategoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EventsWhereInput
  }


  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountReservationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountOptionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
  }



  /**
   * Count Type OptionCountOutputType
   */

  export type OptionCountOutputType = {
    Facility: number
  }

  export type OptionCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Facility?: boolean | OptionCountOutputTypeCountFacilityArgs
  }

  // Custom InputTypes

  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCountOutputType
     */
    select?: OptionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeCountFacilityArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FacilityWhereInput
  }



  /**
   * Count Type ReservationCountOutputType
   */

  export type ReservationCountOutputType = {
    InsuranceFiles: number
    ReservationDate: number
    ReservationFees: number
  }

  export type ReservationCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    InsuranceFiles?: boolean | ReservationCountOutputTypeCountInsuranceFilesArgs
    ReservationDate?: boolean | ReservationCountOutputTypeCountReservationDateArgs
    ReservationFees?: boolean | ReservationCountOutputTypeCountReservationFeesArgs
  }

  // Custom InputTypes

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationCountOutputType
     */
    select?: ReservationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountInsuranceFilesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: InsuranceFilesWhereInput
  }


  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountReservationDateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReservationDateWhereInput
  }


  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountReservationFeesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReservationFeesWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Account: number
    Reservation: number
    Session: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Account?: boolean | UserCountOutputTypeCountAccountArgs
    Reservation?: boolean | UserCountOutputTypeCountReservationArgs
    Session?: boolean | UserCountOutputTypeCountSessionArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReservationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    ext_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    ext_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    ext_expires_in: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    ext_expires_in: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    ext_expires_in: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    ext_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    ext_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    ext_expires_in?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    ext_expires_in?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    ext_expires_in?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    ext_expires_in: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    ext_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    ext_expires_in?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      ext_expires_in: number | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly ext_expires_in: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    price: number | null
    facilityId: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: bigint | null
    price: number | null
    facilityId: bigint | null
  }

  export type CategoryMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    price: number | null
    facilityId: bigint | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    price: number | null
    facilityId: bigint | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    facilityId: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    price?: true
    facilityId?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    price?: true
    facilityId?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    facilityId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    facilityId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    facilityId?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: bigint
    name: string
    description: string
    price: number
    facilityId: bigint
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    facilityId?: boolean
    Facility?: boolean | FacilityDefaultArgs<ExtArgs>
    Reservation?: boolean | Category$ReservationArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    facilityId?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Facility?: boolean | FacilityDefaultArgs<ExtArgs>
    Reservation?: boolean | Category$ReservationArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      Facility: Prisma.$FacilityPayload<ExtArgs>
      Reservation: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      name: string
      description: string
      price: number
      facilityId: bigint
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Facility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Reservation<T extends Category$ReservationArgs<ExtArgs> = {}>(args?: Subset<T, Category$ReservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'BigInt'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly price: FieldRef<"Category", 'Float'>
    readonly facilityId: FieldRef<"Category", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.Reservation
   */
  export type Category$ReservationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    facilityId: number | null
  }

  export type EventsSumAggregateOutputType = {
    facilityId: bigint | null
  }

  export type EventsMinAggregateOutputType = {
    id: string | null
    calendarId: string | null
    title: string | null
    start: Date | null
    end: Date | null
    location: string | null
    recurringEventId: string | null
    facilityId: bigint | null
  }

  export type EventsMaxAggregateOutputType = {
    id: string | null
    calendarId: string | null
    title: string | null
    start: Date | null
    end: Date | null
    location: string | null
    recurringEventId: string | null
    facilityId: bigint | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    calendarId: number
    title: number
    start: number
    end: number
    location: number
    recurringEventId: number
    facilityId: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    facilityId?: true
  }

  export type EventsSumAggregateInputType = {
    facilityId?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    calendarId?: true
    title?: true
    start?: true
    end?: true
    location?: true
    recurringEventId?: true
    facilityId?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    calendarId?: true
    title?: true
    start?: true
    end?: true
    location?: true
    recurringEventId?: true
    facilityId?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    calendarId?: true
    title?: true
    start?: true
    end?: true
    location?: true
    recurringEventId?: true
    facilityId?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to aggregate.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type EventsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EventsWhereInput
    orderBy?: EventsOrderByWithAggregationInput | EventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: EventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: string
    calendarId: string | null
    title: string | null
    start: Date | null
    end: Date | null
    location: string | null
    recurringEventId: string | null
    facilityId: bigint
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends EventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type EventsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    calendarId?: boolean
    title?: boolean
    start?: boolean
    end?: boolean
    location?: boolean
    recurringEventId?: boolean
    facilityId?: boolean
    Facility?: boolean | FacilityDefaultArgs<ExtArgs>
    Reservation?: boolean | Events$ReservationArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectScalar = {
    id?: boolean
    calendarId?: boolean
    title?: boolean
    start?: boolean
    end?: boolean
    location?: boolean
    recurringEventId?: boolean
    facilityId?: boolean
  }

  export type EventsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Facility?: boolean | FacilityDefaultArgs<ExtArgs>
    Reservation?: boolean | Events$ReservationArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EventsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Events"
    objects: {
      Facility: Prisma.$FacilityPayload<ExtArgs>
      Reservation: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      calendarId: string | null
      title: string | null
      start: Date | null
      end: Date | null
      location: string | null
      recurringEventId: string | null
      facilityId: bigint
    }, ExtArgs["result"]["events"]>
    composites: {}
  }


  type EventsGetPayload<S extends boolean | null | undefined | EventsDefaultArgs> = $Result.GetResult<Prisma.$EventsPayload, S>

  type EventsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EventsFindManyArgs, 'select' | 'include'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface EventsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Events'], meta: { name: 'Events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {EventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EventsFindUniqueArgs<ExtArgs>>
    ): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Events that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EventsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EventsFindFirstArgs<ExtArgs>>
    ): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EventsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Events.
     * @param {EventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
    **/
    create<T extends EventsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EventsCreateArgs<ExtArgs>>
    ): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Events.
     *     @param {EventsCreateManyArgs} args - Arguments to create many Events.
     *     @example
     *     // Create many Events
     *     const events = await prisma.events.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Events.
     * @param {EventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
    **/
    delete<T extends EventsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EventsDeleteArgs<ExtArgs>>
    ): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Events.
     * @param {EventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EventsUpdateArgs<ExtArgs>>
    ): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EventsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Events.
     * @param {EventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
    **/
    upsert<T extends EventsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EventsUpsertArgs<ExtArgs>>
    ): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventsCountArgs>(
      args?: Subset<T, EventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventsGroupByArgs['orderBy'] }
        : { orderBy?: EventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Events model
   */
  readonly fields: EventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Facility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Reservation<T extends Events$ReservationArgs<ExtArgs> = {}>(args?: Subset<T, Events$ReservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Events model
   */ 
  interface EventsFieldRefs {
    readonly id: FieldRef<"Events", 'String'>
    readonly calendarId: FieldRef<"Events", 'String'>
    readonly title: FieldRef<"Events", 'String'>
    readonly start: FieldRef<"Events", 'DateTime'>
    readonly end: FieldRef<"Events", 'DateTime'>
    readonly location: FieldRef<"Events", 'String'>
    readonly recurringEventId: FieldRef<"Events", 'String'>
    readonly facilityId: FieldRef<"Events", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * Events findUnique
   */
  export type EventsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }


  /**
   * Events findUniqueOrThrow
   */
  export type EventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }


  /**
   * Events findFirst
   */
  export type EventsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }


  /**
   * Events findFirstOrThrow
   */
  export type EventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }


  /**
   * Events findMany
   */
  export type EventsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }


  /**
   * Events create
   */
  export type EventsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The data needed to create a Events.
     */
    data: XOR<EventsCreateInput, EventsUncheckedCreateInput>
  }


  /**
   * Events createMany
   */
  export type EventsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Events update
   */
  export type EventsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The data needed to update a Events.
     */
    data: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
    /**
     * Choose, which Events to update.
     */
    where: EventsWhereUniqueInput
  }


  /**
   * Events updateMany
   */
  export type EventsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
  }


  /**
   * Events upsert
   */
  export type EventsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The filter to search for the Events to update in case it exists.
     */
    where: EventsWhereUniqueInput
    /**
     * In case the Events found by the `where` argument doesn't exist, create a new Events with this data.
     */
    create: XOR<EventsCreateInput, EventsUncheckedCreateInput>
    /**
     * In case the Events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
  }


  /**
   * Events delete
   */
  export type EventsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter which Events to delete.
     */
    where: EventsWhereUniqueInput
  }


  /**
   * Events deleteMany
   */
  export type EventsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventsWhereInput
  }


  /**
   * Events.Reservation
   */
  export type Events$ReservationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }


  /**
   * Events without action
   */
  export type EventsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null
  }



  /**
   * Model Facility
   */

  export type AggregateFacility = {
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  export type FacilityAvgAggregateOutputType = {
    id: number | null
    capacity: number | null
  }

  export type FacilitySumAggregateOutputType = {
    id: bigint | null
    capacity: number | null
  }

  export type FacilityMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    building: string | null
    address: string | null
    imagePath: string | null
    capacity: number | null
    createdAt: Date | null
    updatedAt: Date | null
    googleCalendarId: string | null
  }

  export type FacilityMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    building: string | null
    address: string | null
    imagePath: string | null
    capacity: number | null
    createdAt: Date | null
    updatedAt: Date | null
    googleCalendarId: string | null
  }

  export type FacilityCountAggregateOutputType = {
    id: number
    name: number
    building: number
    address: number
    imagePath: number
    capacity: number
    createdAt: number
    updatedAt: number
    googleCalendarId: number
    _all: number
  }


  export type FacilityAvgAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type FacilitySumAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type FacilityMinAggregateInputType = {
    id?: true
    name?: true
    building?: true
    address?: true
    imagePath?: true
    capacity?: true
    createdAt?: true
    updatedAt?: true
    googleCalendarId?: true
  }

  export type FacilityMaxAggregateInputType = {
    id?: true
    name?: true
    building?: true
    address?: true
    imagePath?: true
    capacity?: true
    createdAt?: true
    updatedAt?: true
    googleCalendarId?: true
  }

  export type FacilityCountAggregateInputType = {
    id?: true
    name?: true
    building?: true
    address?: true
    imagePath?: true
    capacity?: true
    createdAt?: true
    updatedAt?: true
    googleCalendarId?: true
    _all?: true
  }

  export type FacilityAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facility to aggregate.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facilities
    **/
    _count?: true | FacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityMaxAggregateInputType
  }

  export type GetFacilityAggregateType<T extends FacilityAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility[P]>
      : GetScalarType<T[P], AggregateFacility[P]>
  }




  export type FacilityGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FacilityWhereInput
    orderBy?: FacilityOrderByWithAggregationInput | FacilityOrderByWithAggregationInput[]
    by: FacilityScalarFieldEnum[] | FacilityScalarFieldEnum
    having?: FacilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityCountAggregateInputType | true
    _avg?: FacilityAvgAggregateInputType
    _sum?: FacilitySumAggregateInputType
    _min?: FacilityMinAggregateInputType
    _max?: FacilityMaxAggregateInputType
  }

  export type FacilityGroupByOutputType = {
    id: bigint
    name: string
    building: string
    address: string
    imagePath: string | null
    capacity: number | null
    createdAt: Date | null
    updatedAt: Date | null
    googleCalendarId: string
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  type GetFacilityGroupByPayload<T extends FacilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityGroupByOutputType[P]>
        }
      >
    >


  export type FacilitySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    building?: boolean
    address?: boolean
    imagePath?: boolean
    capacity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    googleCalendarId?: boolean
    Category?: boolean | Facility$CategoryArgs<ExtArgs>
    Events?: boolean | Facility$EventsArgs<ExtArgs>
    Reservation?: boolean | Facility$ReservationArgs<ExtArgs>
    Option?: boolean | Facility$OptionArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectScalar = {
    id?: boolean
    name?: boolean
    building?: boolean
    address?: boolean
    imagePath?: boolean
    capacity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    googleCalendarId?: boolean
  }

  export type FacilityInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Category?: boolean | Facility$CategoryArgs<ExtArgs>
    Events?: boolean | Facility$EventsArgs<ExtArgs>
    Reservation?: boolean | Facility$ReservationArgs<ExtArgs>
    Option?: boolean | Facility$OptionArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FacilityPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Facility"
    objects: {
      Category: Prisma.$CategoryPayload<ExtArgs>[]
      Events: Prisma.$EventsPayload<ExtArgs>[]
      Reservation: Prisma.$ReservationPayload<ExtArgs>[]
      Option: Prisma.$OptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      name: string
      building: string
      address: string
      imagePath: string | null
      capacity: number | null
      createdAt: Date | null
      updatedAt: Date | null
      googleCalendarId: string
    }, ExtArgs["result"]["facility"]>
    composites: {}
  }


  type FacilityGetPayload<S extends boolean | null | undefined | FacilityDefaultArgs> = $Result.GetResult<Prisma.$FacilityPayload, S>

  type FacilityCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FacilityFindManyArgs, 'select' | 'include'> & {
      select?: FacilityCountAggregateInputType | true
    }

  export interface FacilityDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Facility'], meta: { name: 'Facility' } }
    /**
     * Find zero or one Facility that matches the filter.
     * @param {FacilityFindUniqueArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FacilityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FacilityFindUniqueArgs<ExtArgs>>
    ): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Facility that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FacilityFindUniqueOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FacilityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FacilityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Facility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FacilityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FacilityFindFirstArgs<ExtArgs>>
    ): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Facility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FacilityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FacilityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Facilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facilities
     * const facilities = await prisma.facility.findMany()
     * 
     * // Get first 10 Facilities
     * const facilities = await prisma.facility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityWithIdOnly = await prisma.facility.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FacilityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FacilityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Facility.
     * @param {FacilityCreateArgs} args - Arguments to create a Facility.
     * @example
     * // Create one Facility
     * const Facility = await prisma.facility.create({
     *   data: {
     *     // ... data to create a Facility
     *   }
     * })
     * 
    **/
    create<T extends FacilityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FacilityCreateArgs<ExtArgs>>
    ): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Facilities.
     *     @param {FacilityCreateManyArgs} args - Arguments to create many Facilities.
     *     @example
     *     // Create many Facilities
     *     const facility = await prisma.facility.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FacilityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FacilityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Facility.
     * @param {FacilityDeleteArgs} args - Arguments to delete one Facility.
     * @example
     * // Delete one Facility
     * const Facility = await prisma.facility.delete({
     *   where: {
     *     // ... filter to delete one Facility
     *   }
     * })
     * 
    **/
    delete<T extends FacilityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FacilityDeleteArgs<ExtArgs>>
    ): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Facility.
     * @param {FacilityUpdateArgs} args - Arguments to update one Facility.
     * @example
     * // Update one Facility
     * const facility = await prisma.facility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FacilityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FacilityUpdateArgs<ExtArgs>>
    ): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Facilities.
     * @param {FacilityDeleteManyArgs} args - Arguments to filter Facilities to delete.
     * @example
     * // Delete a few Facilities
     * const { count } = await prisma.facility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FacilityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FacilityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FacilityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FacilityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Facility.
     * @param {FacilityUpsertArgs} args - Arguments to update or create a Facility.
     * @example
     * // Update or create a Facility
     * const facility = await prisma.facility.upsert({
     *   create: {
     *     // ... data to create a Facility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility we want to update
     *   }
     * })
    **/
    upsert<T extends FacilityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FacilityUpsertArgs<ExtArgs>>
    ): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityCountArgs} args - Arguments to filter Facilities to count.
     * @example
     * // Count the number of Facilities
     * const count = await prisma.facility.count({
     *   where: {
     *     // ... the filter for the Facilities we want to count
     *   }
     * })
    **/
    count<T extends FacilityCountArgs>(
      args?: Subset<T, FacilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacilityAggregateArgs>(args: Subset<T, FacilityAggregateArgs>): Prisma.PrismaPromise<GetFacilityAggregateType<T>>

    /**
     * Group by Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilityGroupByArgs['orderBy'] }
        : { orderBy?: FacilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Facility model
   */
  readonly fields: FacilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Facility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacilityClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Category<T extends Facility$CategoryArgs<ExtArgs> = {}>(args?: Subset<T, Facility$CategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    Events<T extends Facility$EventsArgs<ExtArgs> = {}>(args?: Subset<T, Facility$EventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, 'findMany'> | Null>;

    Reservation<T extends Facility$ReservationArgs<ExtArgs> = {}>(args?: Subset<T, Facility$ReservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findMany'> | Null>;

    Option<T extends Facility$OptionArgs<ExtArgs> = {}>(args?: Subset<T, Facility$OptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Facility model
   */ 
  interface FacilityFieldRefs {
    readonly id: FieldRef<"Facility", 'BigInt'>
    readonly name: FieldRef<"Facility", 'String'>
    readonly building: FieldRef<"Facility", 'String'>
    readonly address: FieldRef<"Facility", 'String'>
    readonly imagePath: FieldRef<"Facility", 'String'>
    readonly capacity: FieldRef<"Facility", 'Int'>
    readonly createdAt: FieldRef<"Facility", 'DateTime'>
    readonly updatedAt: FieldRef<"Facility", 'DateTime'>
    readonly googleCalendarId: FieldRef<"Facility", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Facility findUnique
   */
  export type FacilityFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }


  /**
   * Facility findUniqueOrThrow
   */
  export type FacilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }


  /**
   * Facility findFirst
   */
  export type FacilityFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }


  /**
   * Facility findFirstOrThrow
   */
  export type FacilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }


  /**
   * Facility findMany
   */
  export type FacilityFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facilities to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }


  /**
   * Facility create
   */
  export type FacilityCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Facility.
     */
    data: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
  }


  /**
   * Facility createMany
   */
  export type FacilityCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facilities.
     */
    data: FacilityCreateManyInput | FacilityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Facility update
   */
  export type FacilityUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Facility.
     */
    data: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
    /**
     * Choose, which Facility to update.
     */
    where: FacilityWhereUniqueInput
  }


  /**
   * Facility updateMany
   */
  export type FacilityUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facilities.
     */
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyInput>
    /**
     * Filter which Facilities to update
     */
    where?: FacilityWhereInput
  }


  /**
   * Facility upsert
   */
  export type FacilityUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Facility to update in case it exists.
     */
    where: FacilityWhereUniqueInput
    /**
     * In case the Facility found by the `where` argument doesn't exist, create a new Facility with this data.
     */
    create: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
    /**
     * In case the Facility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
  }


  /**
   * Facility delete
   */
  export type FacilityDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter which Facility to delete.
     */
    where: FacilityWhereUniqueInput
  }


  /**
   * Facility deleteMany
   */
  export type FacilityDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facilities to delete
     */
    where?: FacilityWhereInput
  }


  /**
   * Facility.Category
   */
  export type Facility$CategoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Facility.Events
   */
  export type Facility$EventsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null
    where?: EventsWhereInput
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    cursor?: EventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }


  /**
   * Facility.Reservation
   */
  export type Facility$ReservationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }


  /**
   * Facility.Option
   */
  export type Facility$OptionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    cursor?: OptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }


  /**
   * Facility without action
   */
  export type FacilityDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude<ExtArgs> | null
  }



  /**
   * Model InsuranceFiles
   */

  export type AggregateInsuranceFiles = {
    _count: InsuranceFilesCountAggregateOutputType | null
    _avg: InsuranceFilesAvgAggregateOutputType | null
    _sum: InsuranceFilesSumAggregateOutputType | null
    _min: InsuranceFilesMinAggregateOutputType | null
    _max: InsuranceFilesMaxAggregateOutputType | null
  }

  export type InsuranceFilesAvgAggregateOutputType = {
    id: number | null
    reservationId: number | null
  }

  export type InsuranceFilesSumAggregateOutputType = {
    id: bigint | null
    reservationId: bigint | null
  }

  export type InsuranceFilesMinAggregateOutputType = {
    id: bigint | null
    path: string | null
    fileName: string | null
    reservationId: bigint | null
    varified: boolean | null
  }

  export type InsuranceFilesMaxAggregateOutputType = {
    id: bigint | null
    path: string | null
    fileName: string | null
    reservationId: bigint | null
    varified: boolean | null
  }

  export type InsuranceFilesCountAggregateOutputType = {
    id: number
    path: number
    fileName: number
    reservationId: number
    varified: number
    _all: number
  }


  export type InsuranceFilesAvgAggregateInputType = {
    id?: true
    reservationId?: true
  }

  export type InsuranceFilesSumAggregateInputType = {
    id?: true
    reservationId?: true
  }

  export type InsuranceFilesMinAggregateInputType = {
    id?: true
    path?: true
    fileName?: true
    reservationId?: true
    varified?: true
  }

  export type InsuranceFilesMaxAggregateInputType = {
    id?: true
    path?: true
    fileName?: true
    reservationId?: true
    varified?: true
  }

  export type InsuranceFilesCountAggregateInputType = {
    id?: true
    path?: true
    fileName?: true
    reservationId?: true
    varified?: true
    _all?: true
  }

  export type InsuranceFilesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which InsuranceFiles to aggregate.
     */
    where?: InsuranceFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InsuranceFiles to fetch.
     */
    orderBy?: InsuranceFilesOrderByWithRelationInput | InsuranceFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InsuranceFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InsuranceFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InsuranceFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InsuranceFiles
    **/
    _count?: true | InsuranceFilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InsuranceFilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InsuranceFilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InsuranceFilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InsuranceFilesMaxAggregateInputType
  }

  export type GetInsuranceFilesAggregateType<T extends InsuranceFilesAggregateArgs> = {
        [P in keyof T & keyof AggregateInsuranceFiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsuranceFiles[P]>
      : GetScalarType<T[P], AggregateInsuranceFiles[P]>
  }




  export type InsuranceFilesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: InsuranceFilesWhereInput
    orderBy?: InsuranceFilesOrderByWithAggregationInput | InsuranceFilesOrderByWithAggregationInput[]
    by: InsuranceFilesScalarFieldEnum[] | InsuranceFilesScalarFieldEnum
    having?: InsuranceFilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InsuranceFilesCountAggregateInputType | true
    _avg?: InsuranceFilesAvgAggregateInputType
    _sum?: InsuranceFilesSumAggregateInputType
    _min?: InsuranceFilesMinAggregateInputType
    _max?: InsuranceFilesMaxAggregateInputType
  }

  export type InsuranceFilesGroupByOutputType = {
    id: bigint
    path: string | null
    fileName: string | null
    reservationId: bigint
    varified: boolean
    _count: InsuranceFilesCountAggregateOutputType | null
    _avg: InsuranceFilesAvgAggregateOutputType | null
    _sum: InsuranceFilesSumAggregateOutputType | null
    _min: InsuranceFilesMinAggregateOutputType | null
    _max: InsuranceFilesMaxAggregateOutputType | null
  }

  type GetInsuranceFilesGroupByPayload<T extends InsuranceFilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InsuranceFilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InsuranceFilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsuranceFilesGroupByOutputType[P]>
            : GetScalarType<T[P], InsuranceFilesGroupByOutputType[P]>
        }
      >
    >


  export type InsuranceFilesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    fileName?: boolean
    reservationId?: boolean
    varified?: boolean
    Reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insuranceFiles"]>

  export type InsuranceFilesSelectScalar = {
    id?: boolean
    path?: boolean
    fileName?: boolean
    reservationId?: boolean
    varified?: boolean
  }

  export type InsuranceFilesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }


  export type $InsuranceFilesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "InsuranceFiles"
    objects: {
      Reservation: Prisma.$ReservationPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      path: string | null
      fileName: string | null
      reservationId: bigint
      varified: boolean
    }, ExtArgs["result"]["insuranceFiles"]>
    composites: {}
  }


  type InsuranceFilesGetPayload<S extends boolean | null | undefined | InsuranceFilesDefaultArgs> = $Result.GetResult<Prisma.$InsuranceFilesPayload, S>

  type InsuranceFilesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<InsuranceFilesFindManyArgs, 'select' | 'include'> & {
      select?: InsuranceFilesCountAggregateInputType | true
    }

  export interface InsuranceFilesDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InsuranceFiles'], meta: { name: 'InsuranceFiles' } }
    /**
     * Find zero or one InsuranceFiles that matches the filter.
     * @param {InsuranceFilesFindUniqueArgs} args - Arguments to find a InsuranceFiles
     * @example
     * // Get one InsuranceFiles
     * const insuranceFiles = await prisma.insuranceFiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InsuranceFilesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InsuranceFilesFindUniqueArgs<ExtArgs>>
    ): Prisma__InsuranceFilesClient<$Result.GetResult<Prisma.$InsuranceFilesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one InsuranceFiles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InsuranceFilesFindUniqueOrThrowArgs} args - Arguments to find a InsuranceFiles
     * @example
     * // Get one InsuranceFiles
     * const insuranceFiles = await prisma.insuranceFiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InsuranceFilesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InsuranceFilesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InsuranceFilesClient<$Result.GetResult<Prisma.$InsuranceFilesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first InsuranceFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceFilesFindFirstArgs} args - Arguments to find a InsuranceFiles
     * @example
     * // Get one InsuranceFiles
     * const insuranceFiles = await prisma.insuranceFiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InsuranceFilesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InsuranceFilesFindFirstArgs<ExtArgs>>
    ): Prisma__InsuranceFilesClient<$Result.GetResult<Prisma.$InsuranceFilesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first InsuranceFiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceFilesFindFirstOrThrowArgs} args - Arguments to find a InsuranceFiles
     * @example
     * // Get one InsuranceFiles
     * const insuranceFiles = await prisma.insuranceFiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InsuranceFilesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InsuranceFilesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InsuranceFilesClient<$Result.GetResult<Prisma.$InsuranceFilesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more InsuranceFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceFilesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InsuranceFiles
     * const insuranceFiles = await prisma.insuranceFiles.findMany()
     * 
     * // Get first 10 InsuranceFiles
     * const insuranceFiles = await prisma.insuranceFiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const insuranceFilesWithIdOnly = await prisma.insuranceFiles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InsuranceFilesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InsuranceFilesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsuranceFilesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a InsuranceFiles.
     * @param {InsuranceFilesCreateArgs} args - Arguments to create a InsuranceFiles.
     * @example
     * // Create one InsuranceFiles
     * const InsuranceFiles = await prisma.insuranceFiles.create({
     *   data: {
     *     // ... data to create a InsuranceFiles
     *   }
     * })
     * 
    **/
    create<T extends InsuranceFilesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InsuranceFilesCreateArgs<ExtArgs>>
    ): Prisma__InsuranceFilesClient<$Result.GetResult<Prisma.$InsuranceFilesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many InsuranceFiles.
     *     @param {InsuranceFilesCreateManyArgs} args - Arguments to create many InsuranceFiles.
     *     @example
     *     // Create many InsuranceFiles
     *     const insuranceFiles = await prisma.insuranceFiles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InsuranceFilesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InsuranceFilesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InsuranceFiles.
     * @param {InsuranceFilesDeleteArgs} args - Arguments to delete one InsuranceFiles.
     * @example
     * // Delete one InsuranceFiles
     * const InsuranceFiles = await prisma.insuranceFiles.delete({
     *   where: {
     *     // ... filter to delete one InsuranceFiles
     *   }
     * })
     * 
    **/
    delete<T extends InsuranceFilesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InsuranceFilesDeleteArgs<ExtArgs>>
    ): Prisma__InsuranceFilesClient<$Result.GetResult<Prisma.$InsuranceFilesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one InsuranceFiles.
     * @param {InsuranceFilesUpdateArgs} args - Arguments to update one InsuranceFiles.
     * @example
     * // Update one InsuranceFiles
     * const insuranceFiles = await prisma.insuranceFiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InsuranceFilesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InsuranceFilesUpdateArgs<ExtArgs>>
    ): Prisma__InsuranceFilesClient<$Result.GetResult<Prisma.$InsuranceFilesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more InsuranceFiles.
     * @param {InsuranceFilesDeleteManyArgs} args - Arguments to filter InsuranceFiles to delete.
     * @example
     * // Delete a few InsuranceFiles
     * const { count } = await prisma.insuranceFiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InsuranceFilesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InsuranceFilesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InsuranceFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceFilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InsuranceFiles
     * const insuranceFiles = await prisma.insuranceFiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InsuranceFilesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InsuranceFilesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InsuranceFiles.
     * @param {InsuranceFilesUpsertArgs} args - Arguments to update or create a InsuranceFiles.
     * @example
     * // Update or create a InsuranceFiles
     * const insuranceFiles = await prisma.insuranceFiles.upsert({
     *   create: {
     *     // ... data to create a InsuranceFiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InsuranceFiles we want to update
     *   }
     * })
    **/
    upsert<T extends InsuranceFilesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InsuranceFilesUpsertArgs<ExtArgs>>
    ): Prisma__InsuranceFilesClient<$Result.GetResult<Prisma.$InsuranceFilesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of InsuranceFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceFilesCountArgs} args - Arguments to filter InsuranceFiles to count.
     * @example
     * // Count the number of InsuranceFiles
     * const count = await prisma.insuranceFiles.count({
     *   where: {
     *     // ... the filter for the InsuranceFiles we want to count
     *   }
     * })
    **/
    count<T extends InsuranceFilesCountArgs>(
      args?: Subset<T, InsuranceFilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsuranceFilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InsuranceFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceFilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InsuranceFilesAggregateArgs>(args: Subset<T, InsuranceFilesAggregateArgs>): Prisma.PrismaPromise<GetInsuranceFilesAggregateType<T>>

    /**
     * Group by InsuranceFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceFilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InsuranceFilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsuranceFilesGroupByArgs['orderBy'] }
        : { orderBy?: InsuranceFilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InsuranceFilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsuranceFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InsuranceFiles model
   */
  readonly fields: InsuranceFilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InsuranceFiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsuranceFilesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the InsuranceFiles model
   */ 
  interface InsuranceFilesFieldRefs {
    readonly id: FieldRef<"InsuranceFiles", 'BigInt'>
    readonly path: FieldRef<"InsuranceFiles", 'String'>
    readonly fileName: FieldRef<"InsuranceFiles", 'String'>
    readonly reservationId: FieldRef<"InsuranceFiles", 'BigInt'>
    readonly varified: FieldRef<"InsuranceFiles", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * InsuranceFiles findUnique
   */
  export type InsuranceFilesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceFiles
     */
    select?: InsuranceFilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InsuranceFilesInclude<ExtArgs> | null
    /**
     * Filter, which InsuranceFiles to fetch.
     */
    where: InsuranceFilesWhereUniqueInput
  }


  /**
   * InsuranceFiles findUniqueOrThrow
   */
  export type InsuranceFilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceFiles
     */
    select?: InsuranceFilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InsuranceFilesInclude<ExtArgs> | null
    /**
     * Filter, which InsuranceFiles to fetch.
     */
    where: InsuranceFilesWhereUniqueInput
  }


  /**
   * InsuranceFiles findFirst
   */
  export type InsuranceFilesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceFiles
     */
    select?: InsuranceFilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InsuranceFilesInclude<ExtArgs> | null
    /**
     * Filter, which InsuranceFiles to fetch.
     */
    where?: InsuranceFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InsuranceFiles to fetch.
     */
    orderBy?: InsuranceFilesOrderByWithRelationInput | InsuranceFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InsuranceFiles.
     */
    cursor?: InsuranceFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InsuranceFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InsuranceFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InsuranceFiles.
     */
    distinct?: InsuranceFilesScalarFieldEnum | InsuranceFilesScalarFieldEnum[]
  }


  /**
   * InsuranceFiles findFirstOrThrow
   */
  export type InsuranceFilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceFiles
     */
    select?: InsuranceFilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InsuranceFilesInclude<ExtArgs> | null
    /**
     * Filter, which InsuranceFiles to fetch.
     */
    where?: InsuranceFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InsuranceFiles to fetch.
     */
    orderBy?: InsuranceFilesOrderByWithRelationInput | InsuranceFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InsuranceFiles.
     */
    cursor?: InsuranceFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InsuranceFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InsuranceFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InsuranceFiles.
     */
    distinct?: InsuranceFilesScalarFieldEnum | InsuranceFilesScalarFieldEnum[]
  }


  /**
   * InsuranceFiles findMany
   */
  export type InsuranceFilesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceFiles
     */
    select?: InsuranceFilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InsuranceFilesInclude<ExtArgs> | null
    /**
     * Filter, which InsuranceFiles to fetch.
     */
    where?: InsuranceFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InsuranceFiles to fetch.
     */
    orderBy?: InsuranceFilesOrderByWithRelationInput | InsuranceFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InsuranceFiles.
     */
    cursor?: InsuranceFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InsuranceFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InsuranceFiles.
     */
    skip?: number
    distinct?: InsuranceFilesScalarFieldEnum | InsuranceFilesScalarFieldEnum[]
  }


  /**
   * InsuranceFiles create
   */
  export type InsuranceFilesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceFiles
     */
    select?: InsuranceFilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InsuranceFilesInclude<ExtArgs> | null
    /**
     * The data needed to create a InsuranceFiles.
     */
    data: XOR<InsuranceFilesCreateInput, InsuranceFilesUncheckedCreateInput>
  }


  /**
   * InsuranceFiles createMany
   */
  export type InsuranceFilesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InsuranceFiles.
     */
    data: InsuranceFilesCreateManyInput | InsuranceFilesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * InsuranceFiles update
   */
  export type InsuranceFilesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceFiles
     */
    select?: InsuranceFilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InsuranceFilesInclude<ExtArgs> | null
    /**
     * The data needed to update a InsuranceFiles.
     */
    data: XOR<InsuranceFilesUpdateInput, InsuranceFilesUncheckedUpdateInput>
    /**
     * Choose, which InsuranceFiles to update.
     */
    where: InsuranceFilesWhereUniqueInput
  }


  /**
   * InsuranceFiles updateMany
   */
  export type InsuranceFilesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InsuranceFiles.
     */
    data: XOR<InsuranceFilesUpdateManyMutationInput, InsuranceFilesUncheckedUpdateManyInput>
    /**
     * Filter which InsuranceFiles to update
     */
    where?: InsuranceFilesWhereInput
  }


  /**
   * InsuranceFiles upsert
   */
  export type InsuranceFilesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceFiles
     */
    select?: InsuranceFilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InsuranceFilesInclude<ExtArgs> | null
    /**
     * The filter to search for the InsuranceFiles to update in case it exists.
     */
    where: InsuranceFilesWhereUniqueInput
    /**
     * In case the InsuranceFiles found by the `where` argument doesn't exist, create a new InsuranceFiles with this data.
     */
    create: XOR<InsuranceFilesCreateInput, InsuranceFilesUncheckedCreateInput>
    /**
     * In case the InsuranceFiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsuranceFilesUpdateInput, InsuranceFilesUncheckedUpdateInput>
  }


  /**
   * InsuranceFiles delete
   */
  export type InsuranceFilesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceFiles
     */
    select?: InsuranceFilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InsuranceFilesInclude<ExtArgs> | null
    /**
     * Filter which InsuranceFiles to delete.
     */
    where: InsuranceFilesWhereUniqueInput
  }


  /**
   * InsuranceFiles deleteMany
   */
  export type InsuranceFilesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which InsuranceFiles to delete
     */
    where?: InsuranceFilesWhereInput
  }


  /**
   * InsuranceFiles without action
   */
  export type InsuranceFilesDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceFiles
     */
    select?: InsuranceFilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InsuranceFilesInclude<ExtArgs> | null
  }



  /**
   * Model Option
   */

  export type AggregateOption = {
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  export type OptionAvgAggregateOutputType = {
    id: number | null
  }

  export type OptionSumAggregateOutputType = {
    id: bigint | null
  }

  export type OptionMinAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type OptionMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type OptionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type OptionAvgAggregateInputType = {
    id?: true
  }

  export type OptionSumAggregateInputType = {
    id?: true
  }

  export type OptionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type OptionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type OptionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type OptionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Option to aggregate.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Options
    **/
    _count?: true | OptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionMaxAggregateInputType
  }

  export type GetOptionAggregateType<T extends OptionAggregateArgs> = {
        [P in keyof T & keyof AggregateOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOption[P]>
      : GetScalarType<T[P], AggregateOption[P]>
  }




  export type OptionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithAggregationInput | OptionOrderByWithAggregationInput[]
    by: OptionScalarFieldEnum[] | OptionScalarFieldEnum
    having?: OptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionCountAggregateInputType | true
    _avg?: OptionAvgAggregateInputType
    _sum?: OptionSumAggregateInputType
    _min?: OptionMinAggregateInputType
    _max?: OptionMaxAggregateInputType
  }

  export type OptionGroupByOutputType = {
    id: bigint
    name: string
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  type GetOptionGroupByPayload<T extends OptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionGroupByOutputType[P]>
            : GetScalarType<T[P], OptionGroupByOutputType[P]>
        }
      >
    >


  export type OptionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Facility?: boolean | Option$FacilityArgs<ExtArgs>
    _count?: boolean | OptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type OptionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Facility?: boolean | Option$FacilityArgs<ExtArgs>
    _count?: boolean | OptionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OptionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Option"
    objects: {
      Facility: Prisma.$FacilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      name: string
    }, ExtArgs["result"]["option"]>
    composites: {}
  }


  type OptionGetPayload<S extends boolean | null | undefined | OptionDefaultArgs> = $Result.GetResult<Prisma.$OptionPayload, S>

  type OptionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<OptionFindManyArgs, 'select' | 'include'> & {
      select?: OptionCountAggregateInputType | true
    }

  export interface OptionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Option'], meta: { name: 'Option' } }
    /**
     * Find zero or one Option that matches the filter.
     * @param {OptionFindUniqueArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OptionFindUniqueArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Option that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OptionFindUniqueOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Option that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionFindFirstArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Option that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Options
     * const options = await prisma.option.findMany()
     * 
     * // Get first 10 Options
     * const options = await prisma.option.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionWithIdOnly = await prisma.option.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Option.
     * @param {OptionCreateArgs} args - Arguments to create a Option.
     * @example
     * // Create one Option
     * const Option = await prisma.option.create({
     *   data: {
     *     // ... data to create a Option
     *   }
     * })
     * 
    **/
    create<T extends OptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OptionCreateArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Options.
     *     @param {OptionCreateManyArgs} args - Arguments to create many Options.
     *     @example
     *     // Create many Options
     *     const option = await prisma.option.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Option.
     * @param {OptionDeleteArgs} args - Arguments to delete one Option.
     * @example
     * // Delete one Option
     * const Option = await prisma.option.delete({
     *   where: {
     *     // ... filter to delete one Option
     *   }
     * })
     * 
    **/
    delete<T extends OptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OptionDeleteArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Option.
     * @param {OptionUpdateArgs} args - Arguments to update one Option.
     * @example
     * // Update one Option
     * const option = await prisma.option.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OptionUpdateArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Options.
     * @param {OptionDeleteManyArgs} args - Arguments to filter Options to delete.
     * @example
     * // Delete a few Options
     * const { count } = await prisma.option.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OptionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Option.
     * @param {OptionUpsertArgs} args - Arguments to update or create a Option.
     * @example
     * // Update or create a Option
     * const option = await prisma.option.upsert({
     *   create: {
     *     // ... data to create a Option
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Option we want to update
     *   }
     * })
    **/
    upsert<T extends OptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OptionUpsertArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCountArgs} args - Arguments to filter Options to count.
     * @example
     * // Count the number of Options
     * const count = await prisma.option.count({
     *   where: {
     *     // ... the filter for the Options we want to count
     *   }
     * })
    **/
    count<T extends OptionCountArgs>(
      args?: Subset<T, OptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OptionAggregateArgs>(args: Subset<T, OptionAggregateArgs>): Prisma.PrismaPromise<GetOptionAggregateType<T>>

    /**
     * Group by Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionGroupByArgs['orderBy'] }
        : { orderBy?: OptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Option model
   */
  readonly fields: OptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Option.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Facility<T extends Option$FacilityArgs<ExtArgs> = {}>(args?: Subset<T, Option$FacilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Option model
   */ 
  interface OptionFieldRefs {
    readonly id: FieldRef<"Option", 'BigInt'>
    readonly name: FieldRef<"Option", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Option findUnique
   */
  export type OptionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }


  /**
   * Option findUniqueOrThrow
   */
  export type OptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }


  /**
   * Option findFirst
   */
  export type OptionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }


  /**
   * Option findFirstOrThrow
   */
  export type OptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }


  /**
   * Option findMany
   */
  export type OptionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }


  /**
   * Option create
   */
  export type OptionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Option.
     */
    data: XOR<OptionCreateInput, OptionUncheckedCreateInput>
  }


  /**
   * Option createMany
   */
  export type OptionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Option update
   */
  export type OptionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Option.
     */
    data: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
    /**
     * Choose, which Option to update.
     */
    where: OptionWhereUniqueInput
  }


  /**
   * Option updateMany
   */
  export type OptionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
  }


  /**
   * Option upsert
   */
  export type OptionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Option to update in case it exists.
     */
    where: OptionWhereUniqueInput
    /**
     * In case the Option found by the `where` argument doesn't exist, create a new Option with this data.
     */
    create: XOR<OptionCreateInput, OptionUncheckedCreateInput>
    /**
     * In case the Option was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
  }


  /**
   * Option delete
   */
  export type OptionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter which Option to delete.
     */
    where: OptionWhereUniqueInput
  }


  /**
   * Option deleteMany
   */
  export type OptionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Options to delete
     */
    where?: OptionWhereInput
  }


  /**
   * Option.Facility
   */
  export type Option$FacilityArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude<ExtArgs> | null
    where?: FacilityWhereInput
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    cursor?: FacilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }


  /**
   * Option without action
   */
  export type OptionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
  }



  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    id: number | null
    facilityId: number | null
    fees: number | null
    categoryId: number | null
    totalHours: number | null
  }

  export type ReservationSumAggregateOutputType = {
    id: bigint | null
    facilityId: bigint | null
    fees: number | null
    categoryId: bigint | null
    totalHours: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id: bigint | null
    userId: string | null
    eventName: string | null
    facilityId: bigint | null
    approved: $Enums.Reservation_approved | null
    createdAt: Date | null
    updatedAt: Date | null
    details: string | null
    eventId: string | null
    fees: number | null
    insurance: boolean | null
    primaryContact: string | null
    responsibleParty: string | null
    doorAccess: boolean | null
    doorsDetails: string | null
    name: string | null
    people: string | null
    techDetails: string | null
    techSupport: boolean | null
    phone: string | null
    categoryId: bigint | null
    totalHours: number | null
    inPerson: boolean | null
    paid: boolean | null
    paymentUrl: string | null
    paymentLinkID: string | null
    ticketMade: boolean | null
    conflicts: boolean | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: bigint | null
    userId: string | null
    eventName: string | null
    facilityId: bigint | null
    approved: $Enums.Reservation_approved | null
    createdAt: Date | null
    updatedAt: Date | null
    details: string | null
    eventId: string | null
    fees: number | null
    insurance: boolean | null
    primaryContact: string | null
    responsibleParty: string | null
    doorAccess: boolean | null
    doorsDetails: string | null
    name: string | null
    people: string | null
    techDetails: string | null
    techSupport: boolean | null
    phone: string | null
    categoryId: bigint | null
    totalHours: number | null
    inPerson: boolean | null
    paid: boolean | null
    paymentUrl: string | null
    paymentLinkID: string | null
    ticketMade: boolean | null
    conflicts: boolean | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    userId: number
    eventName: number
    facilityId: number
    approved: number
    createdAt: number
    updatedAt: number
    details: number
    eventId: number
    fees: number
    insurance: number
    primaryContact: number
    responsibleParty: number
    doorAccess: number
    doorsDetails: number
    name: number
    people: number
    techDetails: number
    techSupport: number
    phone: number
    categoryId: number
    totalHours: number
    inPerson: number
    paid: number
    paymentUrl: number
    paymentLinkID: number
    ticketMade: number
    conflicts: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    id?: true
    facilityId?: true
    fees?: true
    categoryId?: true
    totalHours?: true
  }

  export type ReservationSumAggregateInputType = {
    id?: true
    facilityId?: true
    fees?: true
    categoryId?: true
    totalHours?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    userId?: true
    eventName?: true
    facilityId?: true
    approved?: true
    createdAt?: true
    updatedAt?: true
    details?: true
    eventId?: true
    fees?: true
    insurance?: true
    primaryContact?: true
    responsibleParty?: true
    doorAccess?: true
    doorsDetails?: true
    name?: true
    people?: true
    techDetails?: true
    techSupport?: true
    phone?: true
    categoryId?: true
    totalHours?: true
    inPerson?: true
    paid?: true
    paymentUrl?: true
    paymentLinkID?: true
    ticketMade?: true
    conflicts?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    userId?: true
    eventName?: true
    facilityId?: true
    approved?: true
    createdAt?: true
    updatedAt?: true
    details?: true
    eventId?: true
    fees?: true
    insurance?: true
    primaryContact?: true
    responsibleParty?: true
    doorAccess?: true
    doorsDetails?: true
    name?: true
    people?: true
    techDetails?: true
    techSupport?: true
    phone?: true
    categoryId?: true
    totalHours?: true
    inPerson?: true
    paid?: true
    paymentUrl?: true
    paymentLinkID?: true
    ticketMade?: true
    conflicts?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    userId?: true
    eventName?: true
    facilityId?: true
    approved?: true
    createdAt?: true
    updatedAt?: true
    details?: true
    eventId?: true
    fees?: true
    insurance?: true
    primaryContact?: true
    responsibleParty?: true
    doorAccess?: true
    doorsDetails?: true
    name?: true
    people?: true
    techDetails?: true
    techSupport?: true
    phone?: true
    categoryId?: true
    totalHours?: true
    inPerson?: true
    paid?: true
    paymentUrl?: true
    paymentLinkID?: true
    ticketMade?: true
    conflicts?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: bigint
    userId: string
    eventName: string
    facilityId: bigint
    approved: $Enums.Reservation_approved
    createdAt: Date | null
    updatedAt: Date | null
    details: string | null
    eventId: string | null
    fees: number | null
    insurance: boolean
    primaryContact: string | null
    responsibleParty: string | null
    doorAccess: boolean | null
    doorsDetails: string | null
    name: string | null
    people: string | null
    techDetails: string | null
    techSupport: boolean | null
    phone: string | null
    categoryId: bigint
    totalHours: number | null
    inPerson: boolean
    paid: boolean
    paymentUrl: string | null
    paymentLinkID: string | null
    ticketMade: boolean
    conflicts: boolean
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventName?: boolean
    facilityId?: boolean
    approved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    details?: boolean
    eventId?: boolean
    fees?: boolean
    insurance?: boolean
    primaryContact?: boolean
    responsibleParty?: boolean
    doorAccess?: boolean
    doorsDetails?: boolean
    name?: boolean
    people?: boolean
    techDetails?: boolean
    techSupport?: boolean
    phone?: boolean
    categoryId?: boolean
    totalHours?: boolean
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: boolean
    paymentLinkID?: boolean
    ticketMade?: boolean
    conflicts?: boolean
    InsuranceFiles?: boolean | Reservation$InsuranceFilesArgs<ExtArgs>
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Events?: boolean | Reservation$EventsArgs<ExtArgs>
    Facility?: boolean | FacilityDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    ReservationDate?: boolean | Reservation$ReservationDateArgs<ExtArgs>
    ReservationFees?: boolean | Reservation$ReservationFeesArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    userId?: boolean
    eventName?: boolean
    facilityId?: boolean
    approved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    details?: boolean
    eventId?: boolean
    fees?: boolean
    insurance?: boolean
    primaryContact?: boolean
    responsibleParty?: boolean
    doorAccess?: boolean
    doorsDetails?: boolean
    name?: boolean
    people?: boolean
    techDetails?: boolean
    techSupport?: boolean
    phone?: boolean
    categoryId?: boolean
    totalHours?: boolean
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: boolean
    paymentLinkID?: boolean
    ticketMade?: boolean
    conflicts?: boolean
  }

  export type ReservationInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    InsuranceFiles?: boolean | Reservation$InsuranceFilesArgs<ExtArgs>
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Events?: boolean | Reservation$EventsArgs<ExtArgs>
    Facility?: boolean | FacilityDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    ReservationDate?: boolean | Reservation$ReservationDateArgs<ExtArgs>
    ReservationFees?: boolean | Reservation$ReservationFeesArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ReservationPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      InsuranceFiles: Prisma.$InsuranceFilesPayload<ExtArgs>[]
      Category: Prisma.$CategoryPayload<ExtArgs>
      Events: Prisma.$EventsPayload<ExtArgs> | null
      Facility: Prisma.$FacilityPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
      ReservationDate: Prisma.$ReservationDatePayload<ExtArgs>[]
      ReservationFees: Prisma.$ReservationFeesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      userId: string
      eventName: string
      facilityId: bigint
      approved: $Enums.Reservation_approved
      createdAt: Date | null
      updatedAt: Date | null
      details: string | null
      eventId: string | null
      fees: number | null
      insurance: boolean
      primaryContact: string | null
      responsibleParty: string | null
      doorAccess: boolean | null
      doorsDetails: string | null
      name: string | null
      people: string | null
      techDetails: string | null
      techSupport: boolean | null
      phone: string | null
      categoryId: bigint
      totalHours: number | null
      inPerson: boolean
      paid: boolean
      paymentUrl: string | null
      paymentLinkID: string | null
      ticketMade: boolean
      conflicts: boolean
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }


  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ReservationFindManyArgs, 'select' | 'include'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReservationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Reservation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReservationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReservationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
    **/
    create<T extends ReservationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reservations.
     *     @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     *     @example
     *     // Create many Reservations
     *     const reservation = await prisma.reservation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReservationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
    **/
    delete<T extends ReservationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReservationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReservationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReservationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
    **/
    upsert<T extends ReservationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    InsuranceFiles<T extends Reservation$InsuranceFilesArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$InsuranceFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsuranceFilesPayload<ExtArgs>, T, 'findMany'> | Null>;

    Category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Events<T extends Reservation$EventsArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$EventsArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Facility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ReservationDate<T extends Reservation$ReservationDateArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$ReservationDateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationDatePayload<ExtArgs>, T, 'findMany'> | Null>;

    ReservationFees<T extends Reservation$ReservationFeesArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$ReservationFeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationFeesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Reservation model
   */ 
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'BigInt'>
    readonly userId: FieldRef<"Reservation", 'String'>
    readonly eventName: FieldRef<"Reservation", 'String'>
    readonly facilityId: FieldRef<"Reservation", 'BigInt'>
    readonly approved: FieldRef<"Reservation", 'Reservation_approved'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservation", 'DateTime'>
    readonly details: FieldRef<"Reservation", 'String'>
    readonly eventId: FieldRef<"Reservation", 'String'>
    readonly fees: FieldRef<"Reservation", 'Float'>
    readonly insurance: FieldRef<"Reservation", 'Boolean'>
    readonly primaryContact: FieldRef<"Reservation", 'String'>
    readonly responsibleParty: FieldRef<"Reservation", 'String'>
    readonly doorAccess: FieldRef<"Reservation", 'Boolean'>
    readonly doorsDetails: FieldRef<"Reservation", 'String'>
    readonly name: FieldRef<"Reservation", 'String'>
    readonly people: FieldRef<"Reservation", 'String'>
    readonly techDetails: FieldRef<"Reservation", 'String'>
    readonly techSupport: FieldRef<"Reservation", 'Boolean'>
    readonly phone: FieldRef<"Reservation", 'String'>
    readonly categoryId: FieldRef<"Reservation", 'BigInt'>
    readonly totalHours: FieldRef<"Reservation", 'Float'>
    readonly inPerson: FieldRef<"Reservation", 'Boolean'>
    readonly paid: FieldRef<"Reservation", 'Boolean'>
    readonly paymentUrl: FieldRef<"Reservation", 'String'>
    readonly paymentLinkID: FieldRef<"Reservation", 'String'>
    readonly ticketMade: FieldRef<"Reservation", 'Boolean'>
    readonly conflicts: FieldRef<"Reservation", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }


  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }


  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }


  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }


  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }


  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }


  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }


  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
  }


  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }


  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }


  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
  }


  /**
   * Reservation.InsuranceFiles
   */
  export type Reservation$InsuranceFilesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuranceFiles
     */
    select?: InsuranceFilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InsuranceFilesInclude<ExtArgs> | null
    where?: InsuranceFilesWhereInput
    orderBy?: InsuranceFilesOrderByWithRelationInput | InsuranceFilesOrderByWithRelationInput[]
    cursor?: InsuranceFilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InsuranceFilesScalarFieldEnum | InsuranceFilesScalarFieldEnum[]
  }


  /**
   * Reservation.Events
   */
  export type Reservation$EventsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null
    where?: EventsWhereInput
  }


  /**
   * Reservation.ReservationDate
   */
  export type Reservation$ReservationDateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationDate
     */
    select?: ReservationDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationDateInclude<ExtArgs> | null
    where?: ReservationDateWhereInput
    orderBy?: ReservationDateOrderByWithRelationInput | ReservationDateOrderByWithRelationInput[]
    cursor?: ReservationDateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationDateScalarFieldEnum | ReservationDateScalarFieldEnum[]
  }


  /**
   * Reservation.ReservationFees
   */
  export type Reservation$ReservationFeesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationFees
     */
    select?: ReservationFeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationFeesInclude<ExtArgs> | null
    where?: ReservationFeesWhereInput
    orderBy?: ReservationFeesOrderByWithRelationInput | ReservationFeesOrderByWithRelationInput[]
    cursor?: ReservationFeesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationFeesScalarFieldEnum | ReservationFeesScalarFieldEnum[]
  }


  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
  }



  /**
   * Model ReservationDate
   */

  export type AggregateReservationDate = {
    _count: ReservationDateCountAggregateOutputType | null
    _avg: ReservationDateAvgAggregateOutputType | null
    _sum: ReservationDateSumAggregateOutputType | null
    _min: ReservationDateMinAggregateOutputType | null
    _max: ReservationDateMaxAggregateOutputType | null
  }

  export type ReservationDateAvgAggregateOutputType = {
    id: number | null
    reservationId: number | null
  }

  export type ReservationDateSumAggregateOutputType = {
    id: bigint | null
    reservationId: bigint | null
  }

  export type ReservationDateMinAggregateOutputType = {
    id: bigint | null
    startDate: string | null
    endDate: string | null
    startTime: string | null
    endTime: string | null
    reservationId: bigint | null
    approved: $Enums.ReservationDate_approved | null
  }

  export type ReservationDateMaxAggregateOutputType = {
    id: bigint | null
    startDate: string | null
    endDate: string | null
    startTime: string | null
    endTime: string | null
    reservationId: bigint | null
    approved: $Enums.ReservationDate_approved | null
  }

  export type ReservationDateCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    startTime: number
    endTime: number
    reservationId: number
    approved: number
    _all: number
  }


  export type ReservationDateAvgAggregateInputType = {
    id?: true
    reservationId?: true
  }

  export type ReservationDateSumAggregateInputType = {
    id?: true
    reservationId?: true
  }

  export type ReservationDateMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    startTime?: true
    endTime?: true
    reservationId?: true
    approved?: true
  }

  export type ReservationDateMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    startTime?: true
    endTime?: true
    reservationId?: true
    approved?: true
  }

  export type ReservationDateCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    startTime?: true
    endTime?: true
    reservationId?: true
    approved?: true
    _all?: true
  }

  export type ReservationDateAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationDate to aggregate.
     */
    where?: ReservationDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationDates to fetch.
     */
    orderBy?: ReservationDateOrderByWithRelationInput | ReservationDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReservationDates
    **/
    _count?: true | ReservationDateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationDateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationDateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationDateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationDateMaxAggregateInputType
  }

  export type GetReservationDateAggregateType<T extends ReservationDateAggregateArgs> = {
        [P in keyof T & keyof AggregateReservationDate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservationDate[P]>
      : GetScalarType<T[P], AggregateReservationDate[P]>
  }




  export type ReservationDateGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReservationDateWhereInput
    orderBy?: ReservationDateOrderByWithAggregationInput | ReservationDateOrderByWithAggregationInput[]
    by: ReservationDateScalarFieldEnum[] | ReservationDateScalarFieldEnum
    having?: ReservationDateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationDateCountAggregateInputType | true
    _avg?: ReservationDateAvgAggregateInputType
    _sum?: ReservationDateSumAggregateInputType
    _min?: ReservationDateMinAggregateInputType
    _max?: ReservationDateMaxAggregateInputType
  }

  export type ReservationDateGroupByOutputType = {
    id: bigint
    startDate: string
    endDate: string
    startTime: string
    endTime: string
    reservationId: bigint
    approved: $Enums.ReservationDate_approved
    _count: ReservationDateCountAggregateOutputType | null
    _avg: ReservationDateAvgAggregateOutputType | null
    _sum: ReservationDateSumAggregateOutputType | null
    _min: ReservationDateMinAggregateOutputType | null
    _max: ReservationDateMaxAggregateOutputType | null
  }

  type GetReservationDateGroupByPayload<T extends ReservationDateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationDateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationDateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationDateGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationDateGroupByOutputType[P]>
        }
      >
    >


  export type ReservationDateSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    startTime?: boolean
    endTime?: boolean
    reservationId?: boolean
    approved?: boolean
    Reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservationDate"]>

  export type ReservationDateSelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    startTime?: boolean
    endTime?: boolean
    reservationId?: boolean
    approved?: boolean
  }

  export type ReservationDateInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }


  export type $ReservationDatePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "ReservationDate"
    objects: {
      Reservation: Prisma.$ReservationPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      startDate: string
      endDate: string
      startTime: string
      endTime: string
      reservationId: bigint
      approved: $Enums.ReservationDate_approved
    }, ExtArgs["result"]["reservationDate"]>
    composites: {}
  }


  type ReservationDateGetPayload<S extends boolean | null | undefined | ReservationDateDefaultArgs> = $Result.GetResult<Prisma.$ReservationDatePayload, S>

  type ReservationDateCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ReservationDateFindManyArgs, 'select' | 'include'> & {
      select?: ReservationDateCountAggregateInputType | true
    }

  export interface ReservationDateDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReservationDate'], meta: { name: 'ReservationDate' } }
    /**
     * Find zero or one ReservationDate that matches the filter.
     * @param {ReservationDateFindUniqueArgs} args - Arguments to find a ReservationDate
     * @example
     * // Get one ReservationDate
     * const reservationDate = await prisma.reservationDate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReservationDateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationDateFindUniqueArgs<ExtArgs>>
    ): Prisma__ReservationDateClient<$Result.GetResult<Prisma.$ReservationDatePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ReservationDate that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReservationDateFindUniqueOrThrowArgs} args - Arguments to find a ReservationDate
     * @example
     * // Get one ReservationDate
     * const reservationDate = await prisma.reservationDate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReservationDateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationDateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReservationDateClient<$Result.GetResult<Prisma.$ReservationDatePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ReservationDate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationDateFindFirstArgs} args - Arguments to find a ReservationDate
     * @example
     * // Get one ReservationDate
     * const reservationDate = await prisma.reservationDate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReservationDateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationDateFindFirstArgs<ExtArgs>>
    ): Prisma__ReservationDateClient<$Result.GetResult<Prisma.$ReservationDatePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ReservationDate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationDateFindFirstOrThrowArgs} args - Arguments to find a ReservationDate
     * @example
     * // Get one ReservationDate
     * const reservationDate = await prisma.reservationDate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReservationDateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationDateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReservationDateClient<$Result.GetResult<Prisma.$ReservationDatePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ReservationDates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationDateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReservationDates
     * const reservationDates = await prisma.reservationDate.findMany()
     * 
     * // Get first 10 ReservationDates
     * const reservationDates = await prisma.reservationDate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationDateWithIdOnly = await prisma.reservationDate.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReservationDateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationDateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationDatePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ReservationDate.
     * @param {ReservationDateCreateArgs} args - Arguments to create a ReservationDate.
     * @example
     * // Create one ReservationDate
     * const ReservationDate = await prisma.reservationDate.create({
     *   data: {
     *     // ... data to create a ReservationDate
     *   }
     * })
     * 
    **/
    create<T extends ReservationDateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationDateCreateArgs<ExtArgs>>
    ): Prisma__ReservationDateClient<$Result.GetResult<Prisma.$ReservationDatePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ReservationDates.
     *     @param {ReservationDateCreateManyArgs} args - Arguments to create many ReservationDates.
     *     @example
     *     // Create many ReservationDates
     *     const reservationDate = await prisma.reservationDate.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReservationDateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationDateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReservationDate.
     * @param {ReservationDateDeleteArgs} args - Arguments to delete one ReservationDate.
     * @example
     * // Delete one ReservationDate
     * const ReservationDate = await prisma.reservationDate.delete({
     *   where: {
     *     // ... filter to delete one ReservationDate
     *   }
     * })
     * 
    **/
    delete<T extends ReservationDateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationDateDeleteArgs<ExtArgs>>
    ): Prisma__ReservationDateClient<$Result.GetResult<Prisma.$ReservationDatePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ReservationDate.
     * @param {ReservationDateUpdateArgs} args - Arguments to update one ReservationDate.
     * @example
     * // Update one ReservationDate
     * const reservationDate = await prisma.reservationDate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReservationDateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationDateUpdateArgs<ExtArgs>>
    ): Prisma__ReservationDateClient<$Result.GetResult<Prisma.$ReservationDatePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ReservationDates.
     * @param {ReservationDateDeleteManyArgs} args - Arguments to filter ReservationDates to delete.
     * @example
     * // Delete a few ReservationDates
     * const { count } = await prisma.reservationDate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReservationDateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationDateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservationDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationDateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReservationDates
     * const reservationDate = await prisma.reservationDate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReservationDateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationDateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReservationDate.
     * @param {ReservationDateUpsertArgs} args - Arguments to update or create a ReservationDate.
     * @example
     * // Update or create a ReservationDate
     * const reservationDate = await prisma.reservationDate.upsert({
     *   create: {
     *     // ... data to create a ReservationDate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReservationDate we want to update
     *   }
     * })
    **/
    upsert<T extends ReservationDateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationDateUpsertArgs<ExtArgs>>
    ): Prisma__ReservationDateClient<$Result.GetResult<Prisma.$ReservationDatePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ReservationDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationDateCountArgs} args - Arguments to filter ReservationDates to count.
     * @example
     * // Count the number of ReservationDates
     * const count = await prisma.reservationDate.count({
     *   where: {
     *     // ... the filter for the ReservationDates we want to count
     *   }
     * })
    **/
    count<T extends ReservationDateCountArgs>(
      args?: Subset<T, ReservationDateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationDateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReservationDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationDateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationDateAggregateArgs>(args: Subset<T, ReservationDateAggregateArgs>): Prisma.PrismaPromise<GetReservationDateAggregateType<T>>

    /**
     * Group by ReservationDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationDateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationDateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationDateGroupByArgs['orderBy'] }
        : { orderBy?: ReservationDateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationDateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationDateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReservationDate model
   */
  readonly fields: ReservationDateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReservationDate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationDateClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ReservationDate model
   */ 
  interface ReservationDateFieldRefs {
    readonly id: FieldRef<"ReservationDate", 'BigInt'>
    readonly startDate: FieldRef<"ReservationDate", 'String'>
    readonly endDate: FieldRef<"ReservationDate", 'String'>
    readonly startTime: FieldRef<"ReservationDate", 'String'>
    readonly endTime: FieldRef<"ReservationDate", 'String'>
    readonly reservationId: FieldRef<"ReservationDate", 'BigInt'>
    readonly approved: FieldRef<"ReservationDate", 'ReservationDate_approved'>
  }
    

  // Custom InputTypes

  /**
   * ReservationDate findUnique
   */
  export type ReservationDateFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationDate
     */
    select?: ReservationDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationDateInclude<ExtArgs> | null
    /**
     * Filter, which ReservationDate to fetch.
     */
    where: ReservationDateWhereUniqueInput
  }


  /**
   * ReservationDate findUniqueOrThrow
   */
  export type ReservationDateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationDate
     */
    select?: ReservationDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationDateInclude<ExtArgs> | null
    /**
     * Filter, which ReservationDate to fetch.
     */
    where: ReservationDateWhereUniqueInput
  }


  /**
   * ReservationDate findFirst
   */
  export type ReservationDateFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationDate
     */
    select?: ReservationDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationDateInclude<ExtArgs> | null
    /**
     * Filter, which ReservationDate to fetch.
     */
    where?: ReservationDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationDates to fetch.
     */
    orderBy?: ReservationDateOrderByWithRelationInput | ReservationDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationDates.
     */
    cursor?: ReservationDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationDates.
     */
    distinct?: ReservationDateScalarFieldEnum | ReservationDateScalarFieldEnum[]
  }


  /**
   * ReservationDate findFirstOrThrow
   */
  export type ReservationDateFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationDate
     */
    select?: ReservationDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationDateInclude<ExtArgs> | null
    /**
     * Filter, which ReservationDate to fetch.
     */
    where?: ReservationDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationDates to fetch.
     */
    orderBy?: ReservationDateOrderByWithRelationInput | ReservationDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationDates.
     */
    cursor?: ReservationDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationDates.
     */
    distinct?: ReservationDateScalarFieldEnum | ReservationDateScalarFieldEnum[]
  }


  /**
   * ReservationDate findMany
   */
  export type ReservationDateFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationDate
     */
    select?: ReservationDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationDateInclude<ExtArgs> | null
    /**
     * Filter, which ReservationDates to fetch.
     */
    where?: ReservationDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationDates to fetch.
     */
    orderBy?: ReservationDateOrderByWithRelationInput | ReservationDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReservationDates.
     */
    cursor?: ReservationDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationDates.
     */
    skip?: number
    distinct?: ReservationDateScalarFieldEnum | ReservationDateScalarFieldEnum[]
  }


  /**
   * ReservationDate create
   */
  export type ReservationDateCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationDate
     */
    select?: ReservationDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationDateInclude<ExtArgs> | null
    /**
     * The data needed to create a ReservationDate.
     */
    data: XOR<ReservationDateCreateInput, ReservationDateUncheckedCreateInput>
  }


  /**
   * ReservationDate createMany
   */
  export type ReservationDateCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReservationDates.
     */
    data: ReservationDateCreateManyInput | ReservationDateCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ReservationDate update
   */
  export type ReservationDateUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationDate
     */
    select?: ReservationDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationDateInclude<ExtArgs> | null
    /**
     * The data needed to update a ReservationDate.
     */
    data: XOR<ReservationDateUpdateInput, ReservationDateUncheckedUpdateInput>
    /**
     * Choose, which ReservationDate to update.
     */
    where: ReservationDateWhereUniqueInput
  }


  /**
   * ReservationDate updateMany
   */
  export type ReservationDateUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReservationDates.
     */
    data: XOR<ReservationDateUpdateManyMutationInput, ReservationDateUncheckedUpdateManyInput>
    /**
     * Filter which ReservationDates to update
     */
    where?: ReservationDateWhereInput
  }


  /**
   * ReservationDate upsert
   */
  export type ReservationDateUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationDate
     */
    select?: ReservationDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationDateInclude<ExtArgs> | null
    /**
     * The filter to search for the ReservationDate to update in case it exists.
     */
    where: ReservationDateWhereUniqueInput
    /**
     * In case the ReservationDate found by the `where` argument doesn't exist, create a new ReservationDate with this data.
     */
    create: XOR<ReservationDateCreateInput, ReservationDateUncheckedCreateInput>
    /**
     * In case the ReservationDate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationDateUpdateInput, ReservationDateUncheckedUpdateInput>
  }


  /**
   * ReservationDate delete
   */
  export type ReservationDateDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationDate
     */
    select?: ReservationDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationDateInclude<ExtArgs> | null
    /**
     * Filter which ReservationDate to delete.
     */
    where: ReservationDateWhereUniqueInput
  }


  /**
   * ReservationDate deleteMany
   */
  export type ReservationDateDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationDates to delete
     */
    where?: ReservationDateWhereInput
  }


  /**
   * ReservationDate without action
   */
  export type ReservationDateDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationDate
     */
    select?: ReservationDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationDateInclude<ExtArgs> | null
  }



  /**
   * Model ReservationFees
   */

  export type AggregateReservationFees = {
    _count: ReservationFeesCountAggregateOutputType | null
    _avg: ReservationFeesAvgAggregateOutputType | null
    _sum: ReservationFeesSumAggregateOutputType | null
    _min: ReservationFeesMinAggregateOutputType | null
    _max: ReservationFeesMaxAggregateOutputType | null
  }

  export type ReservationFeesAvgAggregateOutputType = {
    id: number | null
    additionalFees: number | null
    reservationId: number | null
  }

  export type ReservationFeesSumAggregateOutputType = {
    id: bigint | null
    additionalFees: number | null
    reservationId: bigint | null
  }

  export type ReservationFeesMinAggregateOutputType = {
    id: bigint | null
    additionalFees: number | null
    feesType: string | null
    reservationId: bigint | null
  }

  export type ReservationFeesMaxAggregateOutputType = {
    id: bigint | null
    additionalFees: number | null
    feesType: string | null
    reservationId: bigint | null
  }

  export type ReservationFeesCountAggregateOutputType = {
    id: number
    additionalFees: number
    feesType: number
    reservationId: number
    _all: number
  }


  export type ReservationFeesAvgAggregateInputType = {
    id?: true
    additionalFees?: true
    reservationId?: true
  }

  export type ReservationFeesSumAggregateInputType = {
    id?: true
    additionalFees?: true
    reservationId?: true
  }

  export type ReservationFeesMinAggregateInputType = {
    id?: true
    additionalFees?: true
    feesType?: true
    reservationId?: true
  }

  export type ReservationFeesMaxAggregateInputType = {
    id?: true
    additionalFees?: true
    feesType?: true
    reservationId?: true
  }

  export type ReservationFeesCountAggregateInputType = {
    id?: true
    additionalFees?: true
    feesType?: true
    reservationId?: true
    _all?: true
  }

  export type ReservationFeesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationFees to aggregate.
     */
    where?: ReservationFeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationFees to fetch.
     */
    orderBy?: ReservationFeesOrderByWithRelationInput | ReservationFeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationFeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReservationFees
    **/
    _count?: true | ReservationFeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationFeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationFeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationFeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationFeesMaxAggregateInputType
  }

  export type GetReservationFeesAggregateType<T extends ReservationFeesAggregateArgs> = {
        [P in keyof T & keyof AggregateReservationFees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservationFees[P]>
      : GetScalarType<T[P], AggregateReservationFees[P]>
  }




  export type ReservationFeesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReservationFeesWhereInput
    orderBy?: ReservationFeesOrderByWithAggregationInput | ReservationFeesOrderByWithAggregationInput[]
    by: ReservationFeesScalarFieldEnum[] | ReservationFeesScalarFieldEnum
    having?: ReservationFeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationFeesCountAggregateInputType | true
    _avg?: ReservationFeesAvgAggregateInputType
    _sum?: ReservationFeesSumAggregateInputType
    _min?: ReservationFeesMinAggregateInputType
    _max?: ReservationFeesMaxAggregateInputType
  }

  export type ReservationFeesGroupByOutputType = {
    id: bigint
    additionalFees: number | null
    feesType: string | null
    reservationId: bigint
    _count: ReservationFeesCountAggregateOutputType | null
    _avg: ReservationFeesAvgAggregateOutputType | null
    _sum: ReservationFeesSumAggregateOutputType | null
    _min: ReservationFeesMinAggregateOutputType | null
    _max: ReservationFeesMaxAggregateOutputType | null
  }

  type GetReservationFeesGroupByPayload<T extends ReservationFeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationFeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationFeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationFeesGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationFeesGroupByOutputType[P]>
        }
      >
    >


  export type ReservationFeesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    additionalFees?: boolean
    feesType?: boolean
    reservationId?: boolean
    Reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservationFees"]>

  export type ReservationFeesSelectScalar = {
    id?: boolean
    additionalFees?: boolean
    feesType?: boolean
    reservationId?: boolean
  }

  export type ReservationFeesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }


  export type $ReservationFeesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "ReservationFees"
    objects: {
      Reservation: Prisma.$ReservationPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      additionalFees: number | null
      feesType: string | null
      reservationId: bigint
    }, ExtArgs["result"]["reservationFees"]>
    composites: {}
  }


  type ReservationFeesGetPayload<S extends boolean | null | undefined | ReservationFeesDefaultArgs> = $Result.GetResult<Prisma.$ReservationFeesPayload, S>

  type ReservationFeesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ReservationFeesFindManyArgs, 'select' | 'include'> & {
      select?: ReservationFeesCountAggregateInputType | true
    }

  export interface ReservationFeesDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReservationFees'], meta: { name: 'ReservationFees' } }
    /**
     * Find zero or one ReservationFees that matches the filter.
     * @param {ReservationFeesFindUniqueArgs} args - Arguments to find a ReservationFees
     * @example
     * // Get one ReservationFees
     * const reservationFees = await prisma.reservationFees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReservationFeesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationFeesFindUniqueArgs<ExtArgs>>
    ): Prisma__ReservationFeesClient<$Result.GetResult<Prisma.$ReservationFeesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ReservationFees that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReservationFeesFindUniqueOrThrowArgs} args - Arguments to find a ReservationFees
     * @example
     * // Get one ReservationFees
     * const reservationFees = await prisma.reservationFees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReservationFeesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationFeesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReservationFeesClient<$Result.GetResult<Prisma.$ReservationFeesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ReservationFees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFeesFindFirstArgs} args - Arguments to find a ReservationFees
     * @example
     * // Get one ReservationFees
     * const reservationFees = await prisma.reservationFees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReservationFeesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationFeesFindFirstArgs<ExtArgs>>
    ): Prisma__ReservationFeesClient<$Result.GetResult<Prisma.$ReservationFeesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ReservationFees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFeesFindFirstOrThrowArgs} args - Arguments to find a ReservationFees
     * @example
     * // Get one ReservationFees
     * const reservationFees = await prisma.reservationFees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReservationFeesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationFeesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReservationFeesClient<$Result.GetResult<Prisma.$ReservationFeesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ReservationFees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFeesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReservationFees
     * const reservationFees = await prisma.reservationFees.findMany()
     * 
     * // Get first 10 ReservationFees
     * const reservationFees = await prisma.reservationFees.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationFeesWithIdOnly = await prisma.reservationFees.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReservationFeesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationFeesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationFeesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ReservationFees.
     * @param {ReservationFeesCreateArgs} args - Arguments to create a ReservationFees.
     * @example
     * // Create one ReservationFees
     * const ReservationFees = await prisma.reservationFees.create({
     *   data: {
     *     // ... data to create a ReservationFees
     *   }
     * })
     * 
    **/
    create<T extends ReservationFeesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationFeesCreateArgs<ExtArgs>>
    ): Prisma__ReservationFeesClient<$Result.GetResult<Prisma.$ReservationFeesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ReservationFees.
     *     @param {ReservationFeesCreateManyArgs} args - Arguments to create many ReservationFees.
     *     @example
     *     // Create many ReservationFees
     *     const reservationFees = await prisma.reservationFees.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReservationFeesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationFeesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReservationFees.
     * @param {ReservationFeesDeleteArgs} args - Arguments to delete one ReservationFees.
     * @example
     * // Delete one ReservationFees
     * const ReservationFees = await prisma.reservationFees.delete({
     *   where: {
     *     // ... filter to delete one ReservationFees
     *   }
     * })
     * 
    **/
    delete<T extends ReservationFeesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationFeesDeleteArgs<ExtArgs>>
    ): Prisma__ReservationFeesClient<$Result.GetResult<Prisma.$ReservationFeesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ReservationFees.
     * @param {ReservationFeesUpdateArgs} args - Arguments to update one ReservationFees.
     * @example
     * // Update one ReservationFees
     * const reservationFees = await prisma.reservationFees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReservationFeesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationFeesUpdateArgs<ExtArgs>>
    ): Prisma__ReservationFeesClient<$Result.GetResult<Prisma.$ReservationFeesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ReservationFees.
     * @param {ReservationFeesDeleteManyArgs} args - Arguments to filter ReservationFees to delete.
     * @example
     * // Delete a few ReservationFees
     * const { count } = await prisma.reservationFees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReservationFeesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationFeesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservationFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReservationFees
     * const reservationFees = await prisma.reservationFees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReservationFeesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationFeesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReservationFees.
     * @param {ReservationFeesUpsertArgs} args - Arguments to update or create a ReservationFees.
     * @example
     * // Update or create a ReservationFees
     * const reservationFees = await prisma.reservationFees.upsert({
     *   create: {
     *     // ... data to create a ReservationFees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReservationFees we want to update
     *   }
     * })
    **/
    upsert<T extends ReservationFeesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationFeesUpsertArgs<ExtArgs>>
    ): Prisma__ReservationFeesClient<$Result.GetResult<Prisma.$ReservationFeesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ReservationFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFeesCountArgs} args - Arguments to filter ReservationFees to count.
     * @example
     * // Count the number of ReservationFees
     * const count = await prisma.reservationFees.count({
     *   where: {
     *     // ... the filter for the ReservationFees we want to count
     *   }
     * })
    **/
    count<T extends ReservationFeesCountArgs>(
      args?: Subset<T, ReservationFeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationFeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReservationFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationFeesAggregateArgs>(args: Subset<T, ReservationFeesAggregateArgs>): Prisma.PrismaPromise<GetReservationFeesAggregateType<T>>

    /**
     * Group by ReservationFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFeesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationFeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationFeesGroupByArgs['orderBy'] }
        : { orderBy?: ReservationFeesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationFeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationFeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReservationFees model
   */
  readonly fields: ReservationFeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReservationFees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationFeesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ReservationFees model
   */ 
  interface ReservationFeesFieldRefs {
    readonly id: FieldRef<"ReservationFees", 'BigInt'>
    readonly additionalFees: FieldRef<"ReservationFees", 'Float'>
    readonly feesType: FieldRef<"ReservationFees", 'String'>
    readonly reservationId: FieldRef<"ReservationFees", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * ReservationFees findUnique
   */
  export type ReservationFeesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationFees
     */
    select?: ReservationFeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationFeesInclude<ExtArgs> | null
    /**
     * Filter, which ReservationFees to fetch.
     */
    where: ReservationFeesWhereUniqueInput
  }


  /**
   * ReservationFees findUniqueOrThrow
   */
  export type ReservationFeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationFees
     */
    select?: ReservationFeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationFeesInclude<ExtArgs> | null
    /**
     * Filter, which ReservationFees to fetch.
     */
    where: ReservationFeesWhereUniqueInput
  }


  /**
   * ReservationFees findFirst
   */
  export type ReservationFeesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationFees
     */
    select?: ReservationFeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationFeesInclude<ExtArgs> | null
    /**
     * Filter, which ReservationFees to fetch.
     */
    where?: ReservationFeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationFees to fetch.
     */
    orderBy?: ReservationFeesOrderByWithRelationInput | ReservationFeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationFees.
     */
    cursor?: ReservationFeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationFees.
     */
    distinct?: ReservationFeesScalarFieldEnum | ReservationFeesScalarFieldEnum[]
  }


  /**
   * ReservationFees findFirstOrThrow
   */
  export type ReservationFeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationFees
     */
    select?: ReservationFeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationFeesInclude<ExtArgs> | null
    /**
     * Filter, which ReservationFees to fetch.
     */
    where?: ReservationFeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationFees to fetch.
     */
    orderBy?: ReservationFeesOrderByWithRelationInput | ReservationFeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationFees.
     */
    cursor?: ReservationFeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationFees.
     */
    distinct?: ReservationFeesScalarFieldEnum | ReservationFeesScalarFieldEnum[]
  }


  /**
   * ReservationFees findMany
   */
  export type ReservationFeesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationFees
     */
    select?: ReservationFeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationFeesInclude<ExtArgs> | null
    /**
     * Filter, which ReservationFees to fetch.
     */
    where?: ReservationFeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationFees to fetch.
     */
    orderBy?: ReservationFeesOrderByWithRelationInput | ReservationFeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReservationFees.
     */
    cursor?: ReservationFeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationFees.
     */
    skip?: number
    distinct?: ReservationFeesScalarFieldEnum | ReservationFeesScalarFieldEnum[]
  }


  /**
   * ReservationFees create
   */
  export type ReservationFeesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationFees
     */
    select?: ReservationFeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationFeesInclude<ExtArgs> | null
    /**
     * The data needed to create a ReservationFees.
     */
    data: XOR<ReservationFeesCreateInput, ReservationFeesUncheckedCreateInput>
  }


  /**
   * ReservationFees createMany
   */
  export type ReservationFeesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReservationFees.
     */
    data: ReservationFeesCreateManyInput | ReservationFeesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ReservationFees update
   */
  export type ReservationFeesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationFees
     */
    select?: ReservationFeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationFeesInclude<ExtArgs> | null
    /**
     * The data needed to update a ReservationFees.
     */
    data: XOR<ReservationFeesUpdateInput, ReservationFeesUncheckedUpdateInput>
    /**
     * Choose, which ReservationFees to update.
     */
    where: ReservationFeesWhereUniqueInput
  }


  /**
   * ReservationFees updateMany
   */
  export type ReservationFeesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReservationFees.
     */
    data: XOR<ReservationFeesUpdateManyMutationInput, ReservationFeesUncheckedUpdateManyInput>
    /**
     * Filter which ReservationFees to update
     */
    where?: ReservationFeesWhereInput
  }


  /**
   * ReservationFees upsert
   */
  export type ReservationFeesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationFees
     */
    select?: ReservationFeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationFeesInclude<ExtArgs> | null
    /**
     * The filter to search for the ReservationFees to update in case it exists.
     */
    where: ReservationFeesWhereUniqueInput
    /**
     * In case the ReservationFees found by the `where` argument doesn't exist, create a new ReservationFees with this data.
     */
    create: XOR<ReservationFeesCreateInput, ReservationFeesUncheckedCreateInput>
    /**
     * In case the ReservationFees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationFeesUpdateInput, ReservationFeesUncheckedUpdateInput>
  }


  /**
   * ReservationFees delete
   */
  export type ReservationFeesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationFees
     */
    select?: ReservationFeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationFeesInclude<ExtArgs> | null
    /**
     * Filter which ReservationFees to delete.
     */
    where: ReservationFeesWhereUniqueInput
  }


  /**
   * ReservationFees deleteMany
   */
  export type ReservationFeesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationFees to delete
     */
    where?: ReservationFeesWhereInput
  }


  /**
   * ReservationFees without action
   */
  export type ReservationFeesDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationFees
     */
    select?: ReservationFeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationFeesInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    provider: string | null
    externalUser: boolean | null
    role: $Enums.User_role | null
    createdAt: Date | null
    tos: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    provider: string | null
    externalUser: boolean | null
    role: $Enums.User_role | null
    createdAt: Date | null
    tos: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    image: number
    email: number
    emailVerified: number
    password: number
    provider: number
    externalUser: number
    role: number
    createdAt: number
    tos: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    email?: true
    emailVerified?: true
    password?: true
    provider?: true
    externalUser?: true
    role?: true
    createdAt?: true
    tos?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    email?: true
    emailVerified?: true
    password?: true
    provider?: true
    externalUser?: true
    role?: true
    createdAt?: true
    tos?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    email?: true
    emailVerified?: true
    password?: true
    provider?: true
    externalUser?: true
    role?: true
    createdAt?: true
    tos?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    image: string | null
    email: string
    emailVerified: Date | null
    password: string | null
    provider: string | null
    externalUser: boolean
    role: $Enums.User_role
    createdAt: Date | null
    tos: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    provider?: boolean
    externalUser?: boolean
    role?: boolean
    createdAt?: boolean
    tos?: boolean
    Account?: boolean | User$AccountArgs<ExtArgs>
    Reservation?: boolean | User$ReservationArgs<ExtArgs>
    Session?: boolean | User$SessionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    provider?: boolean
    externalUser?: boolean
    role?: boolean
    createdAt?: boolean
    tos?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Account?: boolean | User$AccountArgs<ExtArgs>
    Reservation?: boolean | User$ReservationArgs<ExtArgs>
    Session?: boolean | User$SessionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Account: Prisma.$AccountPayload<ExtArgs>[]
      Reservation: Prisma.$ReservationPayload<ExtArgs>[]
      Session: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      image: string | null
      email: string
      emailVerified: Date | null
      password: string | null
      provider: string | null
      externalUser: boolean
      role: $Enums.User_role
      createdAt: Date | null
      tos: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Account<T extends User$AccountArgs<ExtArgs> = {}>(args?: Subset<T, User$AccountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    Reservation<T extends User$ReservationArgs<ExtArgs> = {}>(args?: Subset<T, User$ReservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findMany'> | Null>;

    Session<T extends User$SessionArgs<ExtArgs> = {}>(args?: Subset<T, User$SessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'String'>
    readonly externalUser: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'User_role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly tos: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.Account
   */
  export type User$AccountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * User.Reservation
   */
  export type User$ReservationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }


  /**
   * User.Session
   */
  export type User$SessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date | null
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetResult<{
      identifier: string
      token: string
      expires: Date | null
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }


  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     *     @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     *     @example
     *     // Create many VerificationTokens
     *     const verificationToken = await prisma.verificationToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }


  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }


  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    ext_expires_in: 'ext_expires_in'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    facilityId: 'facilityId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    calendarId: 'calendarId',
    title: 'title',
    start: 'start',
    end: 'end',
    location: 'location',
    recurringEventId: 'recurringEventId',
    facilityId: 'facilityId'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const FacilityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    building: 'building',
    address: 'address',
    imagePath: 'imagePath',
    capacity: 'capacity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    googleCalendarId: 'googleCalendarId'
  };

  export type FacilityScalarFieldEnum = (typeof FacilityScalarFieldEnum)[keyof typeof FacilityScalarFieldEnum]


  export const InsuranceFilesScalarFieldEnum: {
    id: 'id',
    path: 'path',
    fileName: 'fileName',
    reservationId: 'reservationId',
    varified: 'varified'
  };

  export type InsuranceFilesScalarFieldEnum = (typeof InsuranceFilesScalarFieldEnum)[keyof typeof InsuranceFilesScalarFieldEnum]


  export const OptionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type OptionScalarFieldEnum = (typeof OptionScalarFieldEnum)[keyof typeof OptionScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventName: 'eventName',
    facilityId: 'facilityId',
    approved: 'approved',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    details: 'details',
    eventId: 'eventId',
    fees: 'fees',
    insurance: 'insurance',
    primaryContact: 'primaryContact',
    responsibleParty: 'responsibleParty',
    doorAccess: 'doorAccess',
    doorsDetails: 'doorsDetails',
    name: 'name',
    people: 'people',
    techDetails: 'techDetails',
    techSupport: 'techSupport',
    phone: 'phone',
    categoryId: 'categoryId',
    totalHours: 'totalHours',
    inPerson: 'inPerson',
    paid: 'paid',
    paymentUrl: 'paymentUrl',
    paymentLinkID: 'paymentLinkID',
    ticketMade: 'ticketMade',
    conflicts: 'conflicts'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const ReservationDateScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    startTime: 'startTime',
    endTime: 'endTime',
    reservationId: 'reservationId',
    approved: 'approved'
  };

  export type ReservationDateScalarFieldEnum = (typeof ReservationDateScalarFieldEnum)[keyof typeof ReservationDateScalarFieldEnum]


  export const ReservationFeesScalarFieldEnum: {
    id: 'id',
    additionalFees: 'additionalFees',
    feesType: 'feesType',
    reservationId: 'reservationId'
  };

  export type ReservationFeesScalarFieldEnum = (typeof ReservationFeesScalarFieldEnum)[keyof typeof ReservationFeesScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    email: 'email',
    emailVerified: 'emailVerified',
    password: 'password',
    provider: 'provider',
    externalUser: 'externalUser',
    role: 'role',
    createdAt: 'createdAt',
    tos: 'tos'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Reservation_approved'
   */
  export type EnumReservation_approvedFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Reservation_approved'>
    


  /**
   * Reference to a field of type 'Reservation_approved[]'
   */
  export type ListEnumReservation_approvedFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Reservation_approved[]'>
    


  /**
   * Reference to a field of type 'ReservationDate_approved'
   */
  export type EnumReservationDate_approvedFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationDate_approved'>
    


  /**
   * Reference to a field of type 'ReservationDate_approved[]'
   */
  export type ListEnumReservationDate_approvedFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationDate_approved[]'>
    


  /**
   * Reference to a field of type 'User_role'
   */
  export type EnumUser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'User_role'>
    


  /**
   * Reference to a field of type 'User_role[]'
   */
  export type ListEnumUser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'User_role[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    ext_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    ext_expires_in?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    ext_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    ext_expires_in?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    ext_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: BigIntFilter<"Category"> | bigint | number
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    price?: FloatFilter<"Category"> | number
    facilityId?: BigIntFilter<"Category"> | bigint | number
    Facility?: XOR<FacilityRelationFilter, FacilityWhereInput>
    Reservation?: ReservationListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    facilityId?: SortOrder
    Facility?: FacilityOrderByWithRelationInput
    Reservation?: ReservationOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    price?: FloatFilter<"Category"> | number
    facilityId?: BigIntFilter<"Category"> | bigint | number
    Facility?: XOR<FacilityRelationFilter, FacilityWhereInput>
    Reservation?: ReservationListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    facilityId?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Category"> | bigint | number
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringWithAggregatesFilter<"Category"> | string
    price?: FloatWithAggregatesFilter<"Category"> | number
    facilityId?: BigIntWithAggregatesFilter<"Category"> | bigint | number
  }

  export type EventsWhereInput = {
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    id?: StringFilter<"Events"> | string
    calendarId?: StringNullableFilter<"Events"> | string | null
    title?: StringNullableFilter<"Events"> | string | null
    start?: DateTimeNullableFilter<"Events"> | Date | string | null
    end?: DateTimeNullableFilter<"Events"> | Date | string | null
    location?: StringNullableFilter<"Events"> | string | null
    recurringEventId?: StringNullableFilter<"Events"> | string | null
    facilityId?: BigIntFilter<"Events"> | bigint | number
    Facility?: XOR<FacilityRelationFilter, FacilityWhereInput>
    Reservation?: ReservationListRelationFilter
  }

  export type EventsOrderByWithRelationInput = {
    id?: SortOrder
    calendarId?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    start?: SortOrderInput | SortOrder
    end?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    recurringEventId?: SortOrderInput | SortOrder
    facilityId?: SortOrder
    Facility?: FacilityOrderByWithRelationInput
    Reservation?: ReservationOrderByRelationAggregateInput
  }

  export type EventsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    calendarId?: StringNullableFilter<"Events"> | string | null
    title?: StringNullableFilter<"Events"> | string | null
    start?: DateTimeNullableFilter<"Events"> | Date | string | null
    end?: DateTimeNullableFilter<"Events"> | Date | string | null
    location?: StringNullableFilter<"Events"> | string | null
    recurringEventId?: StringNullableFilter<"Events"> | string | null
    facilityId?: BigIntFilter<"Events"> | bigint | number
    Facility?: XOR<FacilityRelationFilter, FacilityWhereInput>
    Reservation?: ReservationListRelationFilter
  }, "id" | "id">

  export type EventsOrderByWithAggregationInput = {
    id?: SortOrder
    calendarId?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    start?: SortOrderInput | SortOrder
    end?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    recurringEventId?: SortOrderInput | SortOrder
    facilityId?: SortOrder
    _count?: EventsCountOrderByAggregateInput
    _avg?: EventsAvgOrderByAggregateInput
    _max?: EventsMaxOrderByAggregateInput
    _min?: EventsMinOrderByAggregateInput
    _sum?: EventsSumOrderByAggregateInput
  }

  export type EventsScalarWhereWithAggregatesInput = {
    AND?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    OR?: EventsScalarWhereWithAggregatesInput[]
    NOT?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Events"> | string
    calendarId?: StringNullableWithAggregatesFilter<"Events"> | string | null
    title?: StringNullableWithAggregatesFilter<"Events"> | string | null
    start?: DateTimeNullableWithAggregatesFilter<"Events"> | Date | string | null
    end?: DateTimeNullableWithAggregatesFilter<"Events"> | Date | string | null
    location?: StringNullableWithAggregatesFilter<"Events"> | string | null
    recurringEventId?: StringNullableWithAggregatesFilter<"Events"> | string | null
    facilityId?: BigIntWithAggregatesFilter<"Events"> | bigint | number
  }

  export type FacilityWhereInput = {
    AND?: FacilityWhereInput | FacilityWhereInput[]
    OR?: FacilityWhereInput[]
    NOT?: FacilityWhereInput | FacilityWhereInput[]
    id?: BigIntFilter<"Facility"> | bigint | number
    name?: StringFilter<"Facility"> | string
    building?: StringFilter<"Facility"> | string
    address?: StringFilter<"Facility"> | string
    imagePath?: StringNullableFilter<"Facility"> | string | null
    capacity?: IntNullableFilter<"Facility"> | number | null
    createdAt?: DateTimeNullableFilter<"Facility"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Facility"> | Date | string | null
    googleCalendarId?: StringFilter<"Facility"> | string
    Category?: CategoryListRelationFilter
    Events?: EventsListRelationFilter
    Reservation?: ReservationListRelationFilter
    Option?: OptionListRelationFilter
  }

  export type FacilityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    building?: SortOrder
    address?: SortOrder
    imagePath?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    googleCalendarId?: SortOrder
    Category?: CategoryOrderByRelationAggregateInput
    Events?: EventsOrderByRelationAggregateInput
    Reservation?: ReservationOrderByRelationAggregateInput
    Option?: OptionOrderByRelationAggregateInput
  }

  export type FacilityWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    name?: string
    googleCalendarId?: string
    AND?: FacilityWhereInput | FacilityWhereInput[]
    OR?: FacilityWhereInput[]
    NOT?: FacilityWhereInput | FacilityWhereInput[]
    building?: StringFilter<"Facility"> | string
    address?: StringFilter<"Facility"> | string
    imagePath?: StringNullableFilter<"Facility"> | string | null
    capacity?: IntNullableFilter<"Facility"> | number | null
    createdAt?: DateTimeNullableFilter<"Facility"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Facility"> | Date | string | null
    Category?: CategoryListRelationFilter
    Events?: EventsListRelationFilter
    Reservation?: ReservationListRelationFilter
    Option?: OptionListRelationFilter
  }, "id" | "name" | "googleCalendarId">

  export type FacilityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    building?: SortOrder
    address?: SortOrder
    imagePath?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    googleCalendarId?: SortOrder
    _count?: FacilityCountOrderByAggregateInput
    _avg?: FacilityAvgOrderByAggregateInput
    _max?: FacilityMaxOrderByAggregateInput
    _min?: FacilityMinOrderByAggregateInput
    _sum?: FacilitySumOrderByAggregateInput
  }

  export type FacilityScalarWhereWithAggregatesInput = {
    AND?: FacilityScalarWhereWithAggregatesInput | FacilityScalarWhereWithAggregatesInput[]
    OR?: FacilityScalarWhereWithAggregatesInput[]
    NOT?: FacilityScalarWhereWithAggregatesInput | FacilityScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Facility"> | bigint | number
    name?: StringWithAggregatesFilter<"Facility"> | string
    building?: StringWithAggregatesFilter<"Facility"> | string
    address?: StringWithAggregatesFilter<"Facility"> | string
    imagePath?: StringNullableWithAggregatesFilter<"Facility"> | string | null
    capacity?: IntNullableWithAggregatesFilter<"Facility"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Facility"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Facility"> | Date | string | null
    googleCalendarId?: StringWithAggregatesFilter<"Facility"> | string
  }

  export type InsuranceFilesWhereInput = {
    AND?: InsuranceFilesWhereInput | InsuranceFilesWhereInput[]
    OR?: InsuranceFilesWhereInput[]
    NOT?: InsuranceFilesWhereInput | InsuranceFilesWhereInput[]
    id?: BigIntFilter<"InsuranceFiles"> | bigint | number
    path?: StringNullableFilter<"InsuranceFiles"> | string | null
    fileName?: StringNullableFilter<"InsuranceFiles"> | string | null
    reservationId?: BigIntFilter<"InsuranceFiles"> | bigint | number
    varified?: BoolFilter<"InsuranceFiles"> | boolean
    Reservation?: XOR<ReservationRelationFilter, ReservationWhereInput>
  }

  export type InsuranceFilesOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    reservationId?: SortOrder
    varified?: SortOrder
    Reservation?: ReservationOrderByWithRelationInput
  }

  export type InsuranceFilesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: InsuranceFilesWhereInput | InsuranceFilesWhereInput[]
    OR?: InsuranceFilesWhereInput[]
    NOT?: InsuranceFilesWhereInput | InsuranceFilesWhereInput[]
    path?: StringNullableFilter<"InsuranceFiles"> | string | null
    fileName?: StringNullableFilter<"InsuranceFiles"> | string | null
    reservationId?: BigIntFilter<"InsuranceFiles"> | bigint | number
    varified?: BoolFilter<"InsuranceFiles"> | boolean
    Reservation?: XOR<ReservationRelationFilter, ReservationWhereInput>
  }, "id">

  export type InsuranceFilesOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    reservationId?: SortOrder
    varified?: SortOrder
    _count?: InsuranceFilesCountOrderByAggregateInput
    _avg?: InsuranceFilesAvgOrderByAggregateInput
    _max?: InsuranceFilesMaxOrderByAggregateInput
    _min?: InsuranceFilesMinOrderByAggregateInput
    _sum?: InsuranceFilesSumOrderByAggregateInput
  }

  export type InsuranceFilesScalarWhereWithAggregatesInput = {
    AND?: InsuranceFilesScalarWhereWithAggregatesInput | InsuranceFilesScalarWhereWithAggregatesInput[]
    OR?: InsuranceFilesScalarWhereWithAggregatesInput[]
    NOT?: InsuranceFilesScalarWhereWithAggregatesInput | InsuranceFilesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"InsuranceFiles"> | bigint | number
    path?: StringNullableWithAggregatesFilter<"InsuranceFiles"> | string | null
    fileName?: StringNullableWithAggregatesFilter<"InsuranceFiles"> | string | null
    reservationId?: BigIntWithAggregatesFilter<"InsuranceFiles"> | bigint | number
    varified?: BoolWithAggregatesFilter<"InsuranceFiles"> | boolean
  }

  export type OptionWhereInput = {
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    id?: BigIntFilter<"Option"> | bigint | number
    name?: StringFilter<"Option"> | string
    Facility?: FacilityListRelationFilter
  }

  export type OptionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Facility?: FacilityOrderByRelationAggregateInput
  }

  export type OptionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    name?: StringFilter<"Option"> | string
    Facility?: FacilityListRelationFilter
  }, "id">

  export type OptionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: OptionCountOrderByAggregateInput
    _avg?: OptionAvgOrderByAggregateInput
    _max?: OptionMaxOrderByAggregateInput
    _min?: OptionMinOrderByAggregateInput
    _sum?: OptionSumOrderByAggregateInput
  }

  export type OptionScalarWhereWithAggregatesInput = {
    AND?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    OR?: OptionScalarWhereWithAggregatesInput[]
    NOT?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Option"> | bigint | number
    name?: StringWithAggregatesFilter<"Option"> | string
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: BigIntFilter<"Reservation"> | bigint | number
    userId?: StringFilter<"Reservation"> | string
    eventName?: StringFilter<"Reservation"> | string
    facilityId?: BigIntFilter<"Reservation"> | bigint | number
    approved?: EnumReservation_approvedFilter<"Reservation"> | $Enums.Reservation_approved
    createdAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    details?: StringNullableFilter<"Reservation"> | string | null
    eventId?: StringNullableFilter<"Reservation"> | string | null
    fees?: FloatNullableFilter<"Reservation"> | number | null
    insurance?: BoolFilter<"Reservation"> | boolean
    primaryContact?: StringNullableFilter<"Reservation"> | string | null
    responsibleParty?: StringNullableFilter<"Reservation"> | string | null
    doorAccess?: BoolNullableFilter<"Reservation"> | boolean | null
    doorsDetails?: StringNullableFilter<"Reservation"> | string | null
    name?: StringNullableFilter<"Reservation"> | string | null
    people?: StringNullableFilter<"Reservation"> | string | null
    techDetails?: StringNullableFilter<"Reservation"> | string | null
    techSupport?: BoolNullableFilter<"Reservation"> | boolean | null
    phone?: StringNullableFilter<"Reservation"> | string | null
    categoryId?: BigIntFilter<"Reservation"> | bigint | number
    totalHours?: FloatNullableFilter<"Reservation"> | number | null
    inPerson?: BoolFilter<"Reservation"> | boolean
    paid?: BoolFilter<"Reservation"> | boolean
    paymentUrl?: StringNullableFilter<"Reservation"> | string | null
    paymentLinkID?: StringNullableFilter<"Reservation"> | string | null
    ticketMade?: BoolFilter<"Reservation"> | boolean
    conflicts?: BoolFilter<"Reservation"> | boolean
    InsuranceFiles?: InsuranceFilesListRelationFilter
    Category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    Events?: XOR<EventsNullableRelationFilter, EventsWhereInput> | null
    Facility?: XOR<FacilityRelationFilter, FacilityWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
    ReservationDate?: ReservationDateListRelationFilter
    ReservationFees?: ReservationFeesListRelationFilter
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventName?: SortOrder
    facilityId?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    fees?: SortOrderInput | SortOrder
    insurance?: SortOrder
    primaryContact?: SortOrderInput | SortOrder
    responsibleParty?: SortOrderInput | SortOrder
    doorAccess?: SortOrderInput | SortOrder
    doorsDetails?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    people?: SortOrderInput | SortOrder
    techDetails?: SortOrderInput | SortOrder
    techSupport?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    totalHours?: SortOrderInput | SortOrder
    inPerson?: SortOrder
    paid?: SortOrder
    paymentUrl?: SortOrderInput | SortOrder
    paymentLinkID?: SortOrderInput | SortOrder
    ticketMade?: SortOrder
    conflicts?: SortOrder
    InsuranceFiles?: InsuranceFilesOrderByRelationAggregateInput
    Category?: CategoryOrderByWithRelationInput
    Events?: EventsOrderByWithRelationInput
    Facility?: FacilityOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    ReservationDate?: ReservationDateOrderByRelationAggregateInput
    ReservationFees?: ReservationFeesOrderByRelationAggregateInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    paymentLinkID?: string
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    userId?: StringFilter<"Reservation"> | string
    eventName?: StringFilter<"Reservation"> | string
    facilityId?: BigIntFilter<"Reservation"> | bigint | number
    approved?: EnumReservation_approvedFilter<"Reservation"> | $Enums.Reservation_approved
    createdAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    details?: StringNullableFilter<"Reservation"> | string | null
    eventId?: StringNullableFilter<"Reservation"> | string | null
    fees?: FloatNullableFilter<"Reservation"> | number | null
    insurance?: BoolFilter<"Reservation"> | boolean
    primaryContact?: StringNullableFilter<"Reservation"> | string | null
    responsibleParty?: StringNullableFilter<"Reservation"> | string | null
    doorAccess?: BoolNullableFilter<"Reservation"> | boolean | null
    doorsDetails?: StringNullableFilter<"Reservation"> | string | null
    name?: StringNullableFilter<"Reservation"> | string | null
    people?: StringNullableFilter<"Reservation"> | string | null
    techDetails?: StringNullableFilter<"Reservation"> | string | null
    techSupport?: BoolNullableFilter<"Reservation"> | boolean | null
    phone?: StringNullableFilter<"Reservation"> | string | null
    categoryId?: BigIntFilter<"Reservation"> | bigint | number
    totalHours?: FloatNullableFilter<"Reservation"> | number | null
    inPerson?: BoolFilter<"Reservation"> | boolean
    paid?: BoolFilter<"Reservation"> | boolean
    paymentUrl?: StringNullableFilter<"Reservation"> | string | null
    ticketMade?: BoolFilter<"Reservation"> | boolean
    conflicts?: BoolFilter<"Reservation"> | boolean
    InsuranceFiles?: InsuranceFilesListRelationFilter
    Category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    Events?: XOR<EventsNullableRelationFilter, EventsWhereInput> | null
    Facility?: XOR<FacilityRelationFilter, FacilityWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
    ReservationDate?: ReservationDateListRelationFilter
    ReservationFees?: ReservationFeesListRelationFilter
  }, "id" | "paymentLinkID">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventName?: SortOrder
    facilityId?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    fees?: SortOrderInput | SortOrder
    insurance?: SortOrder
    primaryContact?: SortOrderInput | SortOrder
    responsibleParty?: SortOrderInput | SortOrder
    doorAccess?: SortOrderInput | SortOrder
    doorsDetails?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    people?: SortOrderInput | SortOrder
    techDetails?: SortOrderInput | SortOrder
    techSupport?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    totalHours?: SortOrderInput | SortOrder
    inPerson?: SortOrder
    paid?: SortOrder
    paymentUrl?: SortOrderInput | SortOrder
    paymentLinkID?: SortOrderInput | SortOrder
    ticketMade?: SortOrder
    conflicts?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Reservation"> | bigint | number
    userId?: StringWithAggregatesFilter<"Reservation"> | string
    eventName?: StringWithAggregatesFilter<"Reservation"> | string
    facilityId?: BigIntWithAggregatesFilter<"Reservation"> | bigint | number
    approved?: EnumReservation_approvedWithAggregatesFilter<"Reservation"> | $Enums.Reservation_approved
    createdAt?: DateTimeNullableWithAggregatesFilter<"Reservation"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Reservation"> | Date | string | null
    details?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    eventId?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    fees?: FloatNullableWithAggregatesFilter<"Reservation"> | number | null
    insurance?: BoolWithAggregatesFilter<"Reservation"> | boolean
    primaryContact?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    responsibleParty?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    doorAccess?: BoolNullableWithAggregatesFilter<"Reservation"> | boolean | null
    doorsDetails?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    name?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    people?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    techDetails?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    techSupport?: BoolNullableWithAggregatesFilter<"Reservation"> | boolean | null
    phone?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    categoryId?: BigIntWithAggregatesFilter<"Reservation"> | bigint | number
    totalHours?: FloatNullableWithAggregatesFilter<"Reservation"> | number | null
    inPerson?: BoolWithAggregatesFilter<"Reservation"> | boolean
    paid?: BoolWithAggregatesFilter<"Reservation"> | boolean
    paymentUrl?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    paymentLinkID?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    ticketMade?: BoolWithAggregatesFilter<"Reservation"> | boolean
    conflicts?: BoolWithAggregatesFilter<"Reservation"> | boolean
  }

  export type ReservationDateWhereInput = {
    AND?: ReservationDateWhereInput | ReservationDateWhereInput[]
    OR?: ReservationDateWhereInput[]
    NOT?: ReservationDateWhereInput | ReservationDateWhereInput[]
    id?: BigIntFilter<"ReservationDate"> | bigint | number
    startDate?: StringFilter<"ReservationDate"> | string
    endDate?: StringFilter<"ReservationDate"> | string
    startTime?: StringFilter<"ReservationDate"> | string
    endTime?: StringFilter<"ReservationDate"> | string
    reservationId?: BigIntFilter<"ReservationDate"> | bigint | number
    approved?: EnumReservationDate_approvedFilter<"ReservationDate"> | $Enums.ReservationDate_approved
    Reservation?: XOR<ReservationRelationFilter, ReservationWhereInput>
  }

  export type ReservationDateOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    reservationId?: SortOrder
    approved?: SortOrder
    Reservation?: ReservationOrderByWithRelationInput
  }

  export type ReservationDateWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ReservationDateWhereInput | ReservationDateWhereInput[]
    OR?: ReservationDateWhereInput[]
    NOT?: ReservationDateWhereInput | ReservationDateWhereInput[]
    startDate?: StringFilter<"ReservationDate"> | string
    endDate?: StringFilter<"ReservationDate"> | string
    startTime?: StringFilter<"ReservationDate"> | string
    endTime?: StringFilter<"ReservationDate"> | string
    reservationId?: BigIntFilter<"ReservationDate"> | bigint | number
    approved?: EnumReservationDate_approvedFilter<"ReservationDate"> | $Enums.ReservationDate_approved
    Reservation?: XOR<ReservationRelationFilter, ReservationWhereInput>
  }, "id">

  export type ReservationDateOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    reservationId?: SortOrder
    approved?: SortOrder
    _count?: ReservationDateCountOrderByAggregateInput
    _avg?: ReservationDateAvgOrderByAggregateInput
    _max?: ReservationDateMaxOrderByAggregateInput
    _min?: ReservationDateMinOrderByAggregateInput
    _sum?: ReservationDateSumOrderByAggregateInput
  }

  export type ReservationDateScalarWhereWithAggregatesInput = {
    AND?: ReservationDateScalarWhereWithAggregatesInput | ReservationDateScalarWhereWithAggregatesInput[]
    OR?: ReservationDateScalarWhereWithAggregatesInput[]
    NOT?: ReservationDateScalarWhereWithAggregatesInput | ReservationDateScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ReservationDate"> | bigint | number
    startDate?: StringWithAggregatesFilter<"ReservationDate"> | string
    endDate?: StringWithAggregatesFilter<"ReservationDate"> | string
    startTime?: StringWithAggregatesFilter<"ReservationDate"> | string
    endTime?: StringWithAggregatesFilter<"ReservationDate"> | string
    reservationId?: BigIntWithAggregatesFilter<"ReservationDate"> | bigint | number
    approved?: EnumReservationDate_approvedWithAggregatesFilter<"ReservationDate"> | $Enums.ReservationDate_approved
  }

  export type ReservationFeesWhereInput = {
    AND?: ReservationFeesWhereInput | ReservationFeesWhereInput[]
    OR?: ReservationFeesWhereInput[]
    NOT?: ReservationFeesWhereInput | ReservationFeesWhereInput[]
    id?: BigIntFilter<"ReservationFees"> | bigint | number
    additionalFees?: FloatNullableFilter<"ReservationFees"> | number | null
    feesType?: StringNullableFilter<"ReservationFees"> | string | null
    reservationId?: BigIntFilter<"ReservationFees"> | bigint | number
    Reservation?: XOR<ReservationRelationFilter, ReservationWhereInput>
  }

  export type ReservationFeesOrderByWithRelationInput = {
    id?: SortOrder
    additionalFees?: SortOrderInput | SortOrder
    feesType?: SortOrderInput | SortOrder
    reservationId?: SortOrder
    Reservation?: ReservationOrderByWithRelationInput
  }

  export type ReservationFeesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ReservationFeesWhereInput | ReservationFeesWhereInput[]
    OR?: ReservationFeesWhereInput[]
    NOT?: ReservationFeesWhereInput | ReservationFeesWhereInput[]
    additionalFees?: FloatNullableFilter<"ReservationFees"> | number | null
    feesType?: StringNullableFilter<"ReservationFees"> | string | null
    reservationId?: BigIntFilter<"ReservationFees"> | bigint | number
    Reservation?: XOR<ReservationRelationFilter, ReservationWhereInput>
  }, "id">

  export type ReservationFeesOrderByWithAggregationInput = {
    id?: SortOrder
    additionalFees?: SortOrderInput | SortOrder
    feesType?: SortOrderInput | SortOrder
    reservationId?: SortOrder
    _count?: ReservationFeesCountOrderByAggregateInput
    _avg?: ReservationFeesAvgOrderByAggregateInput
    _max?: ReservationFeesMaxOrderByAggregateInput
    _min?: ReservationFeesMinOrderByAggregateInput
    _sum?: ReservationFeesSumOrderByAggregateInput
  }

  export type ReservationFeesScalarWhereWithAggregatesInput = {
    AND?: ReservationFeesScalarWhereWithAggregatesInput | ReservationFeesScalarWhereWithAggregatesInput[]
    OR?: ReservationFeesScalarWhereWithAggregatesInput[]
    NOT?: ReservationFeesScalarWhereWithAggregatesInput | ReservationFeesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ReservationFees"> | bigint | number
    additionalFees?: FloatNullableWithAggregatesFilter<"ReservationFees"> | number | null
    feesType?: StringNullableWithAggregatesFilter<"ReservationFees"> | string | null
    reservationId?: BigIntWithAggregatesFilter<"ReservationFees"> | bigint | number
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeNullableFilter<"Session"> | Date | string | null
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeNullableFilter<"Session"> | Date | string | null
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    provider?: StringNullableFilter<"User"> | string | null
    externalUser?: BoolFilter<"User"> | boolean
    role?: EnumUser_roleFilter<"User"> | $Enums.User_role
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    tos?: BoolFilter<"User"> | boolean
    Account?: AccountListRelationFilter
    Reservation?: ReservationListRelationFilter
    Session?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    externalUser?: SortOrder
    role?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    tos?: SortOrder
    Account?: AccountOrderByRelationAggregateInput
    Reservation?: ReservationOrderByRelationAggregateInput
    Session?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    provider?: StringNullableFilter<"User"> | string | null
    externalUser?: BoolFilter<"User"> | boolean
    role?: EnumUser_roleFilter<"User"> | $Enums.User_role
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    tos?: BoolFilter<"User"> | boolean
    Account?: AccountListRelationFilter
    Reservation?: ReservationListRelationFilter
    Session?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    externalUser?: SortOrder
    role?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    tos?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    provider?: StringNullableWithAggregatesFilter<"User"> | string | null
    externalUser?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumUser_roleWithAggregatesFilter<"User"> | $Enums.User_role
    createdAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    tos?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeNullableFilter<"VerificationToken"> | Date | string | null
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrderInput | SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeNullableFilter<"VerificationToken"> | Date | string | null
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrderInput | SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeNullableWithAggregatesFilter<"VerificationToken"> | Date | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    ext_expires_in?: number | null
    user: UserCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    ext_expires_in?: number | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    ext_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    ext_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    ext_expires_in?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    ext_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    ext_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoryCreateInput = {
    id?: bigint | number
    name: string
    description: string
    price: number
    Facility: FacilityCreateNestedOneWithoutCategoryInput
    Reservation?: ReservationCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description: string
    price: number
    facilityId: bigint | number
    Reservation?: ReservationUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    Facility?: FacilityUpdateOneRequiredWithoutCategoryNestedInput
    Reservation?: ReservationUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    facilityId?: BigIntFieldUpdateOperationsInput | bigint | number
    Reservation?: ReservationUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: bigint | number
    name: string
    description: string
    price: number
    facilityId: bigint | number
  }

  export type CategoryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    facilityId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type EventsCreateInput = {
    id: string
    calendarId?: string | null
    title?: string | null
    start?: Date | string | null
    end?: Date | string | null
    location?: string | null
    recurringEventId?: string | null
    Facility: FacilityCreateNestedOneWithoutEventsInput
    Reservation?: ReservationCreateNestedManyWithoutEventsInput
  }

  export type EventsUncheckedCreateInput = {
    id: string
    calendarId?: string | null
    title?: string | null
    start?: Date | string | null
    end?: Date | string | null
    location?: string | null
    recurringEventId?: string | null
    facilityId: bigint | number
    Reservation?: ReservationUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    recurringEventId?: NullableStringFieldUpdateOperationsInput | string | null
    Facility?: FacilityUpdateOneRequiredWithoutEventsNestedInput
    Reservation?: ReservationUpdateManyWithoutEventsNestedInput
  }

  export type EventsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    recurringEventId?: NullableStringFieldUpdateOperationsInput | string | null
    facilityId?: BigIntFieldUpdateOperationsInput | bigint | number
    Reservation?: ReservationUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type EventsCreateManyInput = {
    id: string
    calendarId?: string | null
    title?: string | null
    start?: Date | string | null
    end?: Date | string | null
    location?: string | null
    recurringEventId?: string | null
    facilityId: bigint | number
  }

  export type EventsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    recurringEventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    recurringEventId?: NullableStringFieldUpdateOperationsInput | string | null
    facilityId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type FacilityCreateInput = {
    id?: bigint | number
    name: string
    building: string
    address: string
    imagePath?: string | null
    capacity?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    googleCalendarId: string
    Category?: CategoryCreateNestedManyWithoutFacilityInput
    Events?: EventsCreateNestedManyWithoutFacilityInput
    Reservation?: ReservationCreateNestedManyWithoutFacilityInput
    Option?: OptionCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateInput = {
    id?: bigint | number
    name: string
    building: string
    address: string
    imagePath?: string | null
    capacity?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    googleCalendarId: string
    Category?: CategoryUncheckedCreateNestedManyWithoutFacilityInput
    Events?: EventsUncheckedCreateNestedManyWithoutFacilityInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutFacilityInput
    Option?: OptionUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    Category?: CategoryUpdateManyWithoutFacilityNestedInput
    Events?: EventsUpdateManyWithoutFacilityNestedInput
    Reservation?: ReservationUpdateManyWithoutFacilityNestedInput
    Option?: OptionUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    Category?: CategoryUncheckedUpdateManyWithoutFacilityNestedInput
    Events?: EventsUncheckedUpdateManyWithoutFacilityNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutFacilityNestedInput
    Option?: OptionUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityCreateManyInput = {
    id?: bigint | number
    name: string
    building: string
    address: string
    imagePath?: string | null
    capacity?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    googleCalendarId: string
  }

  export type FacilityUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleCalendarId?: StringFieldUpdateOperationsInput | string
  }

  export type FacilityUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleCalendarId?: StringFieldUpdateOperationsInput | string
  }

  export type InsuranceFilesCreateInput = {
    id?: bigint | number
    path?: string | null
    fileName?: string | null
    varified?: boolean
    Reservation: ReservationCreateNestedOneWithoutInsuranceFilesInput
  }

  export type InsuranceFilesUncheckedCreateInput = {
    id?: bigint | number
    path?: string | null
    fileName?: string | null
    reservationId: bigint | number
    varified?: boolean
  }

  export type InsuranceFilesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    path?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    varified?: BoolFieldUpdateOperationsInput | boolean
    Reservation?: ReservationUpdateOneRequiredWithoutInsuranceFilesNestedInput
  }

  export type InsuranceFilesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    path?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    reservationId?: BigIntFieldUpdateOperationsInput | bigint | number
    varified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InsuranceFilesCreateManyInput = {
    id?: bigint | number
    path?: string | null
    fileName?: string | null
    reservationId: bigint | number
    varified?: boolean
  }

  export type InsuranceFilesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    path?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    varified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InsuranceFilesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    path?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    reservationId?: BigIntFieldUpdateOperationsInput | bigint | number
    varified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OptionCreateInput = {
    id?: bigint | number
    name: string
    Facility?: FacilityCreateNestedManyWithoutOptionInput
  }

  export type OptionUncheckedCreateInput = {
    id?: bigint | number
    name: string
    Facility?: FacilityUncheckedCreateNestedManyWithoutOptionInput
  }

  export type OptionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    Facility?: FacilityUpdateManyWithoutOptionNestedInput
  }

  export type OptionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    Facility?: FacilityUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type OptionCreateManyInput = {
    id?: bigint | number
    name: string
  }

  export type OptionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OptionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationCreateInput = {
    id?: bigint | number
    eventName: string
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
    InsuranceFiles?: InsuranceFilesCreateNestedManyWithoutReservationInput
    Category: CategoryCreateNestedOneWithoutReservationInput
    Events?: EventsCreateNestedOneWithoutReservationInput
    Facility: FacilityCreateNestedOneWithoutReservationInput
    User: UserCreateNestedOneWithoutReservationInput
    ReservationDate?: ReservationDateCreateNestedManyWithoutReservationInput
    ReservationFees?: ReservationFeesCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: bigint | number
    userId: string
    eventName: string
    facilityId: bigint | number
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    eventId?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    categoryId: bigint | number
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
    InsuranceFiles?: InsuranceFilesUncheckedCreateNestedManyWithoutReservationInput
    ReservationDate?: ReservationDateUncheckedCreateNestedManyWithoutReservationInput
    ReservationFees?: ReservationFeesUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventName?: StringFieldUpdateOperationsInput | string
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
    InsuranceFiles?: InsuranceFilesUpdateManyWithoutReservationNestedInput
    Category?: CategoryUpdateOneRequiredWithoutReservationNestedInput
    Events?: EventsUpdateOneWithoutReservationNestedInput
    Facility?: FacilityUpdateOneRequiredWithoutReservationNestedInput
    User?: UserUpdateOneRequiredWithoutReservationNestedInput
    ReservationDate?: ReservationDateUpdateManyWithoutReservationNestedInput
    ReservationFees?: ReservationFeesUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    facilityId?: BigIntFieldUpdateOperationsInput | bigint | number
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
    InsuranceFiles?: InsuranceFilesUncheckedUpdateManyWithoutReservationNestedInput
    ReservationDate?: ReservationDateUncheckedUpdateManyWithoutReservationNestedInput
    ReservationFees?: ReservationFeesUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationCreateManyInput = {
    id?: bigint | number
    userId: string
    eventName: string
    facilityId: bigint | number
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    eventId?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    categoryId: bigint | number
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
  }

  export type ReservationUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventName?: StringFieldUpdateOperationsInput | string
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    facilityId?: BigIntFieldUpdateOperationsInput | bigint | number
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReservationDateCreateInput = {
    id?: bigint | number
    startDate: string
    endDate: string
    startTime: string
    endTime: string
    approved?: $Enums.ReservationDate_approved
    Reservation: ReservationCreateNestedOneWithoutReservationDateInput
  }

  export type ReservationDateUncheckedCreateInput = {
    id?: bigint | number
    startDate: string
    endDate: string
    startTime: string
    endTime: string
    reservationId: bigint | number
    approved?: $Enums.ReservationDate_approved
  }

  export type ReservationDateUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    approved?: EnumReservationDate_approvedFieldUpdateOperationsInput | $Enums.ReservationDate_approved
    Reservation?: ReservationUpdateOneRequiredWithoutReservationDateNestedInput
  }

  export type ReservationDateUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    reservationId?: BigIntFieldUpdateOperationsInput | bigint | number
    approved?: EnumReservationDate_approvedFieldUpdateOperationsInput | $Enums.ReservationDate_approved
  }

  export type ReservationDateCreateManyInput = {
    id?: bigint | number
    startDate: string
    endDate: string
    startTime: string
    endTime: string
    reservationId: bigint | number
    approved?: $Enums.ReservationDate_approved
  }

  export type ReservationDateUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    approved?: EnumReservationDate_approvedFieldUpdateOperationsInput | $Enums.ReservationDate_approved
  }

  export type ReservationDateUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    reservationId?: BigIntFieldUpdateOperationsInput | bigint | number
    approved?: EnumReservationDate_approvedFieldUpdateOperationsInput | $Enums.ReservationDate_approved
  }

  export type ReservationFeesCreateInput = {
    id?: bigint | number
    additionalFees?: number | null
    feesType?: string | null
    Reservation: ReservationCreateNestedOneWithoutReservationFeesInput
  }

  export type ReservationFeesUncheckedCreateInput = {
    id?: bigint | number
    additionalFees?: number | null
    feesType?: string | null
    reservationId: bigint | number
  }

  export type ReservationFeesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    additionalFees?: NullableFloatFieldUpdateOperationsInput | number | null
    feesType?: NullableStringFieldUpdateOperationsInput | string | null
    Reservation?: ReservationUpdateOneRequiredWithoutReservationFeesNestedInput
  }

  export type ReservationFeesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    additionalFees?: NullableFloatFieldUpdateOperationsInput | number | null
    feesType?: NullableStringFieldUpdateOperationsInput | string | null
    reservationId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ReservationFeesCreateManyInput = {
    id?: bigint | number
    additionalFees?: number | null
    feesType?: string | null
    reservationId: bigint | number
  }

  export type ReservationFeesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    additionalFees?: NullableFloatFieldUpdateOperationsInput | number | null
    feesType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservationFeesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    additionalFees?: NullableFloatFieldUpdateOperationsInput | number | null
    feesType?: NullableStringFieldUpdateOperationsInput | string | null
    reservationId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SessionCreateInput = {
    id: string
    sessionToken: string
    expires?: Date | string | null
    User: UserCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sessionToken: string
    userId: string
    expires?: Date | string | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionCreateManyInput = {
    id: string
    sessionToken: string
    userId: string
    expires?: Date | string | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    image?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    provider?: string | null
    externalUser?: boolean
    role?: $Enums.User_role
    createdAt?: Date | string | null
    tos?: boolean
    Account?: AccountCreateNestedManyWithoutUserInput
    Reservation?: ReservationCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    image?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    provider?: string | null
    externalUser?: boolean
    role?: $Enums.User_role
    createdAt?: Date | string | null
    tos?: boolean
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalUser?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUser_roleFieldUpdateOperationsInput | $Enums.User_role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tos?: BoolFieldUpdateOperationsInput | boolean
    Account?: AccountUpdateManyWithoutUserNestedInput
    Reservation?: ReservationUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalUser?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUser_roleFieldUpdateOperationsInput | $Enums.User_role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tos?: BoolFieldUpdateOperationsInput | boolean
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    image?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    provider?: string | null
    externalUser?: boolean
    role?: $Enums.User_role
    createdAt?: Date | string | null
    tos?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalUser?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUser_roleFieldUpdateOperationsInput | $Enums.User_role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tos?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalUser?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUser_roleFieldUpdateOperationsInput | $Enums.User_role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tos?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires?: Date | string | null
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires?: Date | string | null
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires?: Date | string | null
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    ext_expires_in?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    ext_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    ext_expires_in?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    ext_expires_in?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    ext_expires_in?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FacilityRelationFilter = {
    is?: FacilityWhereInput
    isNot?: FacilityWhereInput
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    facilityId?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    facilityId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    facilityId?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    facilityId?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    facilityId?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EventsCountOrderByAggregateInput = {
    id?: SortOrder
    calendarId?: SortOrder
    title?: SortOrder
    start?: SortOrder
    end?: SortOrder
    location?: SortOrder
    recurringEventId?: SortOrder
    facilityId?: SortOrder
  }

  export type EventsAvgOrderByAggregateInput = {
    facilityId?: SortOrder
  }

  export type EventsMaxOrderByAggregateInput = {
    id?: SortOrder
    calendarId?: SortOrder
    title?: SortOrder
    start?: SortOrder
    end?: SortOrder
    location?: SortOrder
    recurringEventId?: SortOrder
    facilityId?: SortOrder
  }

  export type EventsMinOrderByAggregateInput = {
    id?: SortOrder
    calendarId?: SortOrder
    title?: SortOrder
    start?: SortOrder
    end?: SortOrder
    location?: SortOrder
    recurringEventId?: SortOrder
    facilityId?: SortOrder
  }

  export type EventsSumOrderByAggregateInput = {
    facilityId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type EventsListRelationFilter = {
    every?: EventsWhereInput
    some?: EventsWhereInput
    none?: EventsWhereInput
  }

  export type OptionListRelationFilter = {
    every?: OptionWhereInput
    some?: OptionWhereInput
    none?: OptionWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacilityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    building?: SortOrder
    address?: SortOrder
    imagePath?: SortOrder
    capacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    googleCalendarId?: SortOrder
  }

  export type FacilityAvgOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type FacilityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    building?: SortOrder
    address?: SortOrder
    imagePath?: SortOrder
    capacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    googleCalendarId?: SortOrder
  }

  export type FacilityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    building?: SortOrder
    address?: SortOrder
    imagePath?: SortOrder
    capacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    googleCalendarId?: SortOrder
  }

  export type FacilitySumOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ReservationRelationFilter = {
    is?: ReservationWhereInput
    isNot?: ReservationWhereInput
  }

  export type InsuranceFilesCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    fileName?: SortOrder
    reservationId?: SortOrder
    varified?: SortOrder
  }

  export type InsuranceFilesAvgOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
  }

  export type InsuranceFilesMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    fileName?: SortOrder
    reservationId?: SortOrder
    varified?: SortOrder
  }

  export type InsuranceFilesMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    fileName?: SortOrder
    reservationId?: SortOrder
    varified?: SortOrder
  }

  export type InsuranceFilesSumOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FacilityListRelationFilter = {
    every?: FacilityWhereInput
    some?: FacilityWhereInput
    none?: FacilityWhereInput
  }

  export type FacilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OptionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OptionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OptionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OptionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OptionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumReservation_approvedFilter<$PrismaModel = never> = {
    equals?: $Enums.Reservation_approved | EnumReservation_approvedFieldRefInput<$PrismaModel>
    in?: $Enums.Reservation_approved[] | ListEnumReservation_approvedFieldRefInput<$PrismaModel>
    notIn?: $Enums.Reservation_approved[] | ListEnumReservation_approvedFieldRefInput<$PrismaModel>
    not?: NestedEnumReservation_approvedFilter<$PrismaModel> | $Enums.Reservation_approved
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type InsuranceFilesListRelationFilter = {
    every?: InsuranceFilesWhereInput
    some?: InsuranceFilesWhereInput
    none?: InsuranceFilesWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type EventsNullableRelationFilter = {
    is?: EventsWhereInput | null
    isNot?: EventsWhereInput | null
  }

  export type ReservationDateListRelationFilter = {
    every?: ReservationDateWhereInput
    some?: ReservationDateWhereInput
    none?: ReservationDateWhereInput
  }

  export type ReservationFeesListRelationFilter = {
    every?: ReservationFeesWhereInput
    some?: ReservationFeesWhereInput
    none?: ReservationFeesWhereInput
  }

  export type InsuranceFilesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationDateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationFeesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventName?: SortOrder
    facilityId?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    details?: SortOrder
    eventId?: SortOrder
    fees?: SortOrder
    insurance?: SortOrder
    primaryContact?: SortOrder
    responsibleParty?: SortOrder
    doorAccess?: SortOrder
    doorsDetails?: SortOrder
    name?: SortOrder
    people?: SortOrder
    techDetails?: SortOrder
    techSupport?: SortOrder
    phone?: SortOrder
    categoryId?: SortOrder
    totalHours?: SortOrder
    inPerson?: SortOrder
    paid?: SortOrder
    paymentUrl?: SortOrder
    paymentLinkID?: SortOrder
    ticketMade?: SortOrder
    conflicts?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    id?: SortOrder
    facilityId?: SortOrder
    fees?: SortOrder
    categoryId?: SortOrder
    totalHours?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventName?: SortOrder
    facilityId?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    details?: SortOrder
    eventId?: SortOrder
    fees?: SortOrder
    insurance?: SortOrder
    primaryContact?: SortOrder
    responsibleParty?: SortOrder
    doorAccess?: SortOrder
    doorsDetails?: SortOrder
    name?: SortOrder
    people?: SortOrder
    techDetails?: SortOrder
    techSupport?: SortOrder
    phone?: SortOrder
    categoryId?: SortOrder
    totalHours?: SortOrder
    inPerson?: SortOrder
    paid?: SortOrder
    paymentUrl?: SortOrder
    paymentLinkID?: SortOrder
    ticketMade?: SortOrder
    conflicts?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventName?: SortOrder
    facilityId?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    details?: SortOrder
    eventId?: SortOrder
    fees?: SortOrder
    insurance?: SortOrder
    primaryContact?: SortOrder
    responsibleParty?: SortOrder
    doorAccess?: SortOrder
    doorsDetails?: SortOrder
    name?: SortOrder
    people?: SortOrder
    techDetails?: SortOrder
    techSupport?: SortOrder
    phone?: SortOrder
    categoryId?: SortOrder
    totalHours?: SortOrder
    inPerson?: SortOrder
    paid?: SortOrder
    paymentUrl?: SortOrder
    paymentLinkID?: SortOrder
    ticketMade?: SortOrder
    conflicts?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    id?: SortOrder
    facilityId?: SortOrder
    fees?: SortOrder
    categoryId?: SortOrder
    totalHours?: SortOrder
  }

  export type EnumReservation_approvedWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Reservation_approved | EnumReservation_approvedFieldRefInput<$PrismaModel>
    in?: $Enums.Reservation_approved[] | ListEnumReservation_approvedFieldRefInput<$PrismaModel>
    notIn?: $Enums.Reservation_approved[] | ListEnumReservation_approvedFieldRefInput<$PrismaModel>
    not?: NestedEnumReservation_approvedWithAggregatesFilter<$PrismaModel> | $Enums.Reservation_approved
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservation_approvedFilter<$PrismaModel>
    _max?: NestedEnumReservation_approvedFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumReservationDate_approvedFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationDate_approved | EnumReservationDate_approvedFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationDate_approved[] | ListEnumReservationDate_approvedFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationDate_approved[] | ListEnumReservationDate_approvedFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationDate_approvedFilter<$PrismaModel> | $Enums.ReservationDate_approved
  }

  export type ReservationDateCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    reservationId?: SortOrder
    approved?: SortOrder
  }

  export type ReservationDateAvgOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
  }

  export type ReservationDateMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    reservationId?: SortOrder
    approved?: SortOrder
  }

  export type ReservationDateMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    reservationId?: SortOrder
    approved?: SortOrder
  }

  export type ReservationDateSumOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
  }

  export type EnumReservationDate_approvedWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationDate_approved | EnumReservationDate_approvedFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationDate_approved[] | ListEnumReservationDate_approvedFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationDate_approved[] | ListEnumReservationDate_approvedFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationDate_approvedWithAggregatesFilter<$PrismaModel> | $Enums.ReservationDate_approved
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationDate_approvedFilter<$PrismaModel>
    _max?: NestedEnumReservationDate_approvedFilter<$PrismaModel>
  }

  export type ReservationFeesCountOrderByAggregateInput = {
    id?: SortOrder
    additionalFees?: SortOrder
    feesType?: SortOrder
    reservationId?: SortOrder
  }

  export type ReservationFeesAvgOrderByAggregateInput = {
    id?: SortOrder
    additionalFees?: SortOrder
    reservationId?: SortOrder
  }

  export type ReservationFeesMaxOrderByAggregateInput = {
    id?: SortOrder
    additionalFees?: SortOrder
    feesType?: SortOrder
    reservationId?: SortOrder
  }

  export type ReservationFeesMinOrderByAggregateInput = {
    id?: SortOrder
    additionalFees?: SortOrder
    feesType?: SortOrder
    reservationId?: SortOrder
  }

  export type ReservationFeesSumOrderByAggregateInput = {
    id?: SortOrder
    additionalFees?: SortOrder
    reservationId?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type EnumUser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.User_role | EnumUser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.User_role[] | ListEnumUser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.User_role[] | ListEnumUser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumUser_roleFilter<$PrismaModel> | $Enums.User_role
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    externalUser?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    tos?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    externalUser?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    tos?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    externalUser?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    tos?: SortOrder
  }

  export type EnumUser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.User_role | EnumUser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.User_role[] | ListEnumUser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.User_role[] | ListEnumUser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumUser_roleWithAggregatesFilter<$PrismaModel> | $Enums.User_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUser_roleFilter<$PrismaModel>
    _max?: NestedEnumUser_roleFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    upsert?: UserUpsertWithoutAccountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountInput, UserUpdateWithoutAccountInput>, UserUncheckedUpdateWithoutAccountInput>
  }

  export type FacilityCreateNestedOneWithoutCategoryInput = {
    create?: XOR<FacilityCreateWithoutCategoryInput, FacilityUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutCategoryInput
    connect?: FacilityWhereUniqueInput
  }

  export type ReservationCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ReservationCreateWithoutCategoryInput, ReservationUncheckedCreateWithoutCategoryInput> | ReservationCreateWithoutCategoryInput[] | ReservationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCategoryInput | ReservationCreateOrConnectWithoutCategoryInput[]
    createMany?: ReservationCreateManyCategoryInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ReservationCreateWithoutCategoryInput, ReservationUncheckedCreateWithoutCategoryInput> | ReservationCreateWithoutCategoryInput[] | ReservationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCategoryInput | ReservationCreateOrConnectWithoutCategoryInput[]
    createMany?: ReservationCreateManyCategoryInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FacilityUpdateOneRequiredWithoutCategoryNestedInput = {
    create?: XOR<FacilityCreateWithoutCategoryInput, FacilityUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutCategoryInput
    upsert?: FacilityUpsertWithoutCategoryInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutCategoryInput, FacilityUpdateWithoutCategoryInput>, FacilityUncheckedUpdateWithoutCategoryInput>
  }

  export type ReservationUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ReservationCreateWithoutCategoryInput, ReservationUncheckedCreateWithoutCategoryInput> | ReservationCreateWithoutCategoryInput[] | ReservationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCategoryInput | ReservationCreateOrConnectWithoutCategoryInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutCategoryInput | ReservationUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ReservationCreateManyCategoryInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutCategoryInput | ReservationUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutCategoryInput | ReservationUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ReservationCreateWithoutCategoryInput, ReservationUncheckedCreateWithoutCategoryInput> | ReservationCreateWithoutCategoryInput[] | ReservationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCategoryInput | ReservationCreateOrConnectWithoutCategoryInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutCategoryInput | ReservationUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ReservationCreateManyCategoryInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutCategoryInput | ReservationUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutCategoryInput | ReservationUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type FacilityCreateNestedOneWithoutEventsInput = {
    create?: XOR<FacilityCreateWithoutEventsInput, FacilityUncheckedCreateWithoutEventsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutEventsInput
    connect?: FacilityWhereUniqueInput
  }

  export type ReservationCreateNestedManyWithoutEventsInput = {
    create?: XOR<ReservationCreateWithoutEventsInput, ReservationUncheckedCreateWithoutEventsInput> | ReservationCreateWithoutEventsInput[] | ReservationUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutEventsInput | ReservationCreateOrConnectWithoutEventsInput[]
    createMany?: ReservationCreateManyEventsInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<ReservationCreateWithoutEventsInput, ReservationUncheckedCreateWithoutEventsInput> | ReservationCreateWithoutEventsInput[] | ReservationUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutEventsInput | ReservationCreateOrConnectWithoutEventsInput[]
    createMany?: ReservationCreateManyEventsInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FacilityUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<FacilityCreateWithoutEventsInput, FacilityUncheckedCreateWithoutEventsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutEventsInput
    upsert?: FacilityUpsertWithoutEventsInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutEventsInput, FacilityUpdateWithoutEventsInput>, FacilityUncheckedUpdateWithoutEventsInput>
  }

  export type ReservationUpdateManyWithoutEventsNestedInput = {
    create?: XOR<ReservationCreateWithoutEventsInput, ReservationUncheckedCreateWithoutEventsInput> | ReservationCreateWithoutEventsInput[] | ReservationUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutEventsInput | ReservationCreateOrConnectWithoutEventsInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutEventsInput | ReservationUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: ReservationCreateManyEventsInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutEventsInput | ReservationUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutEventsInput | ReservationUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<ReservationCreateWithoutEventsInput, ReservationUncheckedCreateWithoutEventsInput> | ReservationCreateWithoutEventsInput[] | ReservationUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutEventsInput | ReservationCreateOrConnectWithoutEventsInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutEventsInput | ReservationUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: ReservationCreateManyEventsInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutEventsInput | ReservationUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutEventsInput | ReservationUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type CategoryCreateNestedManyWithoutFacilityInput = {
    create?: XOR<CategoryCreateWithoutFacilityInput, CategoryUncheckedCreateWithoutFacilityInput> | CategoryCreateWithoutFacilityInput[] | CategoryUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutFacilityInput | CategoryCreateOrConnectWithoutFacilityInput[]
    createMany?: CategoryCreateManyFacilityInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type EventsCreateNestedManyWithoutFacilityInput = {
    create?: XOR<EventsCreateWithoutFacilityInput, EventsUncheckedCreateWithoutFacilityInput> | EventsCreateWithoutFacilityInput[] | EventsUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutFacilityInput | EventsCreateOrConnectWithoutFacilityInput[]
    createMany?: EventsCreateManyFacilityInputEnvelope
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutFacilityInput = {
    create?: XOR<ReservationCreateWithoutFacilityInput, ReservationUncheckedCreateWithoutFacilityInput> | ReservationCreateWithoutFacilityInput[] | ReservationUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutFacilityInput | ReservationCreateOrConnectWithoutFacilityInput[]
    createMany?: ReservationCreateManyFacilityInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type OptionCreateNestedManyWithoutFacilityInput = {
    create?: XOR<OptionCreateWithoutFacilityInput, OptionUncheckedCreateWithoutFacilityInput> | OptionCreateWithoutFacilityInput[] | OptionUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutFacilityInput | OptionCreateOrConnectWithoutFacilityInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<CategoryCreateWithoutFacilityInput, CategoryUncheckedCreateWithoutFacilityInput> | CategoryCreateWithoutFacilityInput[] | CategoryUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutFacilityInput | CategoryCreateOrConnectWithoutFacilityInput[]
    createMany?: CategoryCreateManyFacilityInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type EventsUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<EventsCreateWithoutFacilityInput, EventsUncheckedCreateWithoutFacilityInput> | EventsCreateWithoutFacilityInput[] | EventsUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutFacilityInput | EventsCreateOrConnectWithoutFacilityInput[]
    createMany?: EventsCreateManyFacilityInputEnvelope
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<ReservationCreateWithoutFacilityInput, ReservationUncheckedCreateWithoutFacilityInput> | ReservationCreateWithoutFacilityInput[] | ReservationUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutFacilityInput | ReservationCreateOrConnectWithoutFacilityInput[]
    createMany?: ReservationCreateManyFacilityInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type OptionUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<OptionCreateWithoutFacilityInput, OptionUncheckedCreateWithoutFacilityInput> | OptionCreateWithoutFacilityInput[] | OptionUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutFacilityInput | OptionCreateOrConnectWithoutFacilityInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type CategoryUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<CategoryCreateWithoutFacilityInput, CategoryUncheckedCreateWithoutFacilityInput> | CategoryCreateWithoutFacilityInput[] | CategoryUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutFacilityInput | CategoryCreateOrConnectWithoutFacilityInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutFacilityInput | CategoryUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: CategoryCreateManyFacilityInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutFacilityInput | CategoryUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutFacilityInput | CategoryUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type EventsUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<EventsCreateWithoutFacilityInput, EventsUncheckedCreateWithoutFacilityInput> | EventsCreateWithoutFacilityInput[] | EventsUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutFacilityInput | EventsCreateOrConnectWithoutFacilityInput[]
    upsert?: EventsUpsertWithWhereUniqueWithoutFacilityInput | EventsUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: EventsCreateManyFacilityInputEnvelope
    set?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    disconnect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    delete?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    update?: EventsUpdateWithWhereUniqueWithoutFacilityInput | EventsUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: EventsUpdateManyWithWhereWithoutFacilityInput | EventsUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: EventsScalarWhereInput | EventsScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<ReservationCreateWithoutFacilityInput, ReservationUncheckedCreateWithoutFacilityInput> | ReservationCreateWithoutFacilityInput[] | ReservationUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutFacilityInput | ReservationCreateOrConnectWithoutFacilityInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutFacilityInput | ReservationUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: ReservationCreateManyFacilityInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutFacilityInput | ReservationUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutFacilityInput | ReservationUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type OptionUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<OptionCreateWithoutFacilityInput, OptionUncheckedCreateWithoutFacilityInput> | OptionCreateWithoutFacilityInput[] | OptionUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutFacilityInput | OptionCreateOrConnectWithoutFacilityInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutFacilityInput | OptionUpsertWithWhereUniqueWithoutFacilityInput[]
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutFacilityInput | OptionUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutFacilityInput | OptionUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<CategoryCreateWithoutFacilityInput, CategoryUncheckedCreateWithoutFacilityInput> | CategoryCreateWithoutFacilityInput[] | CategoryUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutFacilityInput | CategoryCreateOrConnectWithoutFacilityInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutFacilityInput | CategoryUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: CategoryCreateManyFacilityInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutFacilityInput | CategoryUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutFacilityInput | CategoryUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type EventsUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<EventsCreateWithoutFacilityInput, EventsUncheckedCreateWithoutFacilityInput> | EventsCreateWithoutFacilityInput[] | EventsUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutFacilityInput | EventsCreateOrConnectWithoutFacilityInput[]
    upsert?: EventsUpsertWithWhereUniqueWithoutFacilityInput | EventsUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: EventsCreateManyFacilityInputEnvelope
    set?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    disconnect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    delete?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    update?: EventsUpdateWithWhereUniqueWithoutFacilityInput | EventsUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: EventsUpdateManyWithWhereWithoutFacilityInput | EventsUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: EventsScalarWhereInput | EventsScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<ReservationCreateWithoutFacilityInput, ReservationUncheckedCreateWithoutFacilityInput> | ReservationCreateWithoutFacilityInput[] | ReservationUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutFacilityInput | ReservationCreateOrConnectWithoutFacilityInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutFacilityInput | ReservationUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: ReservationCreateManyFacilityInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutFacilityInput | ReservationUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutFacilityInput | ReservationUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type OptionUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<OptionCreateWithoutFacilityInput, OptionUncheckedCreateWithoutFacilityInput> | OptionCreateWithoutFacilityInput[] | OptionUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutFacilityInput | OptionCreateOrConnectWithoutFacilityInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutFacilityInput | OptionUpsertWithWhereUniqueWithoutFacilityInput[]
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutFacilityInput | OptionUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutFacilityInput | OptionUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type ReservationCreateNestedOneWithoutInsuranceFilesInput = {
    create?: XOR<ReservationCreateWithoutInsuranceFilesInput, ReservationUncheckedCreateWithoutInsuranceFilesInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutInsuranceFilesInput
    connect?: ReservationWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ReservationUpdateOneRequiredWithoutInsuranceFilesNestedInput = {
    create?: XOR<ReservationCreateWithoutInsuranceFilesInput, ReservationUncheckedCreateWithoutInsuranceFilesInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutInsuranceFilesInput
    upsert?: ReservationUpsertWithoutInsuranceFilesInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutInsuranceFilesInput, ReservationUpdateWithoutInsuranceFilesInput>, ReservationUncheckedUpdateWithoutInsuranceFilesInput>
  }

  export type FacilityCreateNestedManyWithoutOptionInput = {
    create?: XOR<FacilityCreateWithoutOptionInput, FacilityUncheckedCreateWithoutOptionInput> | FacilityCreateWithoutOptionInput[] | FacilityUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: FacilityCreateOrConnectWithoutOptionInput | FacilityCreateOrConnectWithoutOptionInput[]
    connect?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
  }

  export type FacilityUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<FacilityCreateWithoutOptionInput, FacilityUncheckedCreateWithoutOptionInput> | FacilityCreateWithoutOptionInput[] | FacilityUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: FacilityCreateOrConnectWithoutOptionInput | FacilityCreateOrConnectWithoutOptionInput[]
    connect?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
  }

  export type FacilityUpdateManyWithoutOptionNestedInput = {
    create?: XOR<FacilityCreateWithoutOptionInput, FacilityUncheckedCreateWithoutOptionInput> | FacilityCreateWithoutOptionInput[] | FacilityUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: FacilityCreateOrConnectWithoutOptionInput | FacilityCreateOrConnectWithoutOptionInput[]
    upsert?: FacilityUpsertWithWhereUniqueWithoutOptionInput | FacilityUpsertWithWhereUniqueWithoutOptionInput[]
    set?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
    disconnect?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
    delete?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
    connect?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
    update?: FacilityUpdateWithWhereUniqueWithoutOptionInput | FacilityUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: FacilityUpdateManyWithWhereWithoutOptionInput | FacilityUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: FacilityScalarWhereInput | FacilityScalarWhereInput[]
  }

  export type FacilityUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<FacilityCreateWithoutOptionInput, FacilityUncheckedCreateWithoutOptionInput> | FacilityCreateWithoutOptionInput[] | FacilityUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: FacilityCreateOrConnectWithoutOptionInput | FacilityCreateOrConnectWithoutOptionInput[]
    upsert?: FacilityUpsertWithWhereUniqueWithoutOptionInput | FacilityUpsertWithWhereUniqueWithoutOptionInput[]
    set?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
    disconnect?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
    delete?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
    connect?: FacilityWhereUniqueInput | FacilityWhereUniqueInput[]
    update?: FacilityUpdateWithWhereUniqueWithoutOptionInput | FacilityUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: FacilityUpdateManyWithWhereWithoutOptionInput | FacilityUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: FacilityScalarWhereInput | FacilityScalarWhereInput[]
  }

  export type InsuranceFilesCreateNestedManyWithoutReservationInput = {
    create?: XOR<InsuranceFilesCreateWithoutReservationInput, InsuranceFilesUncheckedCreateWithoutReservationInput> | InsuranceFilesCreateWithoutReservationInput[] | InsuranceFilesUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: InsuranceFilesCreateOrConnectWithoutReservationInput | InsuranceFilesCreateOrConnectWithoutReservationInput[]
    createMany?: InsuranceFilesCreateManyReservationInputEnvelope
    connect?: InsuranceFilesWhereUniqueInput | InsuranceFilesWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutReservationInput = {
    create?: XOR<CategoryCreateWithoutReservationInput, CategoryUncheckedCreateWithoutReservationInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutReservationInput
    connect?: CategoryWhereUniqueInput
  }

  export type EventsCreateNestedOneWithoutReservationInput = {
    create?: XOR<EventsCreateWithoutReservationInput, EventsUncheckedCreateWithoutReservationInput>
    connectOrCreate?: EventsCreateOrConnectWithoutReservationInput
    connect?: EventsWhereUniqueInput
  }

  export type FacilityCreateNestedOneWithoutReservationInput = {
    create?: XOR<FacilityCreateWithoutReservationInput, FacilityUncheckedCreateWithoutReservationInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutReservationInput
    connect?: FacilityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReservationInput = {
    create?: XOR<UserCreateWithoutReservationInput, UserUncheckedCreateWithoutReservationInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationInput
    connect?: UserWhereUniqueInput
  }

  export type ReservationDateCreateNestedManyWithoutReservationInput = {
    create?: XOR<ReservationDateCreateWithoutReservationInput, ReservationDateUncheckedCreateWithoutReservationInput> | ReservationDateCreateWithoutReservationInput[] | ReservationDateUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationDateCreateOrConnectWithoutReservationInput | ReservationDateCreateOrConnectWithoutReservationInput[]
    createMany?: ReservationDateCreateManyReservationInputEnvelope
    connect?: ReservationDateWhereUniqueInput | ReservationDateWhereUniqueInput[]
  }

  export type ReservationFeesCreateNestedManyWithoutReservationInput = {
    create?: XOR<ReservationFeesCreateWithoutReservationInput, ReservationFeesUncheckedCreateWithoutReservationInput> | ReservationFeesCreateWithoutReservationInput[] | ReservationFeesUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationFeesCreateOrConnectWithoutReservationInput | ReservationFeesCreateOrConnectWithoutReservationInput[]
    createMany?: ReservationFeesCreateManyReservationInputEnvelope
    connect?: ReservationFeesWhereUniqueInput | ReservationFeesWhereUniqueInput[]
  }

  export type InsuranceFilesUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<InsuranceFilesCreateWithoutReservationInput, InsuranceFilesUncheckedCreateWithoutReservationInput> | InsuranceFilesCreateWithoutReservationInput[] | InsuranceFilesUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: InsuranceFilesCreateOrConnectWithoutReservationInput | InsuranceFilesCreateOrConnectWithoutReservationInput[]
    createMany?: InsuranceFilesCreateManyReservationInputEnvelope
    connect?: InsuranceFilesWhereUniqueInput | InsuranceFilesWhereUniqueInput[]
  }

  export type ReservationDateUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<ReservationDateCreateWithoutReservationInput, ReservationDateUncheckedCreateWithoutReservationInput> | ReservationDateCreateWithoutReservationInput[] | ReservationDateUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationDateCreateOrConnectWithoutReservationInput | ReservationDateCreateOrConnectWithoutReservationInput[]
    createMany?: ReservationDateCreateManyReservationInputEnvelope
    connect?: ReservationDateWhereUniqueInput | ReservationDateWhereUniqueInput[]
  }

  export type ReservationFeesUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<ReservationFeesCreateWithoutReservationInput, ReservationFeesUncheckedCreateWithoutReservationInput> | ReservationFeesCreateWithoutReservationInput[] | ReservationFeesUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationFeesCreateOrConnectWithoutReservationInput | ReservationFeesCreateOrConnectWithoutReservationInput[]
    createMany?: ReservationFeesCreateManyReservationInputEnvelope
    connect?: ReservationFeesWhereUniqueInput | ReservationFeesWhereUniqueInput[]
  }

  export type EnumReservation_approvedFieldUpdateOperationsInput = {
    set?: $Enums.Reservation_approved
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type InsuranceFilesUpdateManyWithoutReservationNestedInput = {
    create?: XOR<InsuranceFilesCreateWithoutReservationInput, InsuranceFilesUncheckedCreateWithoutReservationInput> | InsuranceFilesCreateWithoutReservationInput[] | InsuranceFilesUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: InsuranceFilesCreateOrConnectWithoutReservationInput | InsuranceFilesCreateOrConnectWithoutReservationInput[]
    upsert?: InsuranceFilesUpsertWithWhereUniqueWithoutReservationInput | InsuranceFilesUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: InsuranceFilesCreateManyReservationInputEnvelope
    set?: InsuranceFilesWhereUniqueInput | InsuranceFilesWhereUniqueInput[]
    disconnect?: InsuranceFilesWhereUniqueInput | InsuranceFilesWhereUniqueInput[]
    delete?: InsuranceFilesWhereUniqueInput | InsuranceFilesWhereUniqueInput[]
    connect?: InsuranceFilesWhereUniqueInput | InsuranceFilesWhereUniqueInput[]
    update?: InsuranceFilesUpdateWithWhereUniqueWithoutReservationInput | InsuranceFilesUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: InsuranceFilesUpdateManyWithWhereWithoutReservationInput | InsuranceFilesUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: InsuranceFilesScalarWhereInput | InsuranceFilesScalarWhereInput[]
  }

  export type CategoryUpdateOneRequiredWithoutReservationNestedInput = {
    create?: XOR<CategoryCreateWithoutReservationInput, CategoryUncheckedCreateWithoutReservationInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutReservationInput
    upsert?: CategoryUpsertWithoutReservationInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutReservationInput, CategoryUpdateWithoutReservationInput>, CategoryUncheckedUpdateWithoutReservationInput>
  }

  export type EventsUpdateOneWithoutReservationNestedInput = {
    create?: XOR<EventsCreateWithoutReservationInput, EventsUncheckedCreateWithoutReservationInput>
    connectOrCreate?: EventsCreateOrConnectWithoutReservationInput
    upsert?: EventsUpsertWithoutReservationInput
    disconnect?: EventsWhereInput | boolean
    delete?: EventsWhereInput | boolean
    connect?: EventsWhereUniqueInput
    update?: XOR<XOR<EventsUpdateToOneWithWhereWithoutReservationInput, EventsUpdateWithoutReservationInput>, EventsUncheckedUpdateWithoutReservationInput>
  }

  export type FacilityUpdateOneRequiredWithoutReservationNestedInput = {
    create?: XOR<FacilityCreateWithoutReservationInput, FacilityUncheckedCreateWithoutReservationInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutReservationInput
    upsert?: FacilityUpsertWithoutReservationInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutReservationInput, FacilityUpdateWithoutReservationInput>, FacilityUncheckedUpdateWithoutReservationInput>
  }

  export type UserUpdateOneRequiredWithoutReservationNestedInput = {
    create?: XOR<UserCreateWithoutReservationInput, UserUncheckedCreateWithoutReservationInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationInput
    upsert?: UserUpsertWithoutReservationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReservationInput, UserUpdateWithoutReservationInput>, UserUncheckedUpdateWithoutReservationInput>
  }

  export type ReservationDateUpdateManyWithoutReservationNestedInput = {
    create?: XOR<ReservationDateCreateWithoutReservationInput, ReservationDateUncheckedCreateWithoutReservationInput> | ReservationDateCreateWithoutReservationInput[] | ReservationDateUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationDateCreateOrConnectWithoutReservationInput | ReservationDateCreateOrConnectWithoutReservationInput[]
    upsert?: ReservationDateUpsertWithWhereUniqueWithoutReservationInput | ReservationDateUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: ReservationDateCreateManyReservationInputEnvelope
    set?: ReservationDateWhereUniqueInput | ReservationDateWhereUniqueInput[]
    disconnect?: ReservationDateWhereUniqueInput | ReservationDateWhereUniqueInput[]
    delete?: ReservationDateWhereUniqueInput | ReservationDateWhereUniqueInput[]
    connect?: ReservationDateWhereUniqueInput | ReservationDateWhereUniqueInput[]
    update?: ReservationDateUpdateWithWhereUniqueWithoutReservationInput | ReservationDateUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: ReservationDateUpdateManyWithWhereWithoutReservationInput | ReservationDateUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: ReservationDateScalarWhereInput | ReservationDateScalarWhereInput[]
  }

  export type ReservationFeesUpdateManyWithoutReservationNestedInput = {
    create?: XOR<ReservationFeesCreateWithoutReservationInput, ReservationFeesUncheckedCreateWithoutReservationInput> | ReservationFeesCreateWithoutReservationInput[] | ReservationFeesUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationFeesCreateOrConnectWithoutReservationInput | ReservationFeesCreateOrConnectWithoutReservationInput[]
    upsert?: ReservationFeesUpsertWithWhereUniqueWithoutReservationInput | ReservationFeesUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: ReservationFeesCreateManyReservationInputEnvelope
    set?: ReservationFeesWhereUniqueInput | ReservationFeesWhereUniqueInput[]
    disconnect?: ReservationFeesWhereUniqueInput | ReservationFeesWhereUniqueInput[]
    delete?: ReservationFeesWhereUniqueInput | ReservationFeesWhereUniqueInput[]
    connect?: ReservationFeesWhereUniqueInput | ReservationFeesWhereUniqueInput[]
    update?: ReservationFeesUpdateWithWhereUniqueWithoutReservationInput | ReservationFeesUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: ReservationFeesUpdateManyWithWhereWithoutReservationInput | ReservationFeesUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: ReservationFeesScalarWhereInput | ReservationFeesScalarWhereInput[]
  }

  export type InsuranceFilesUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<InsuranceFilesCreateWithoutReservationInput, InsuranceFilesUncheckedCreateWithoutReservationInput> | InsuranceFilesCreateWithoutReservationInput[] | InsuranceFilesUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: InsuranceFilesCreateOrConnectWithoutReservationInput | InsuranceFilesCreateOrConnectWithoutReservationInput[]
    upsert?: InsuranceFilesUpsertWithWhereUniqueWithoutReservationInput | InsuranceFilesUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: InsuranceFilesCreateManyReservationInputEnvelope
    set?: InsuranceFilesWhereUniqueInput | InsuranceFilesWhereUniqueInput[]
    disconnect?: InsuranceFilesWhereUniqueInput | InsuranceFilesWhereUniqueInput[]
    delete?: InsuranceFilesWhereUniqueInput | InsuranceFilesWhereUniqueInput[]
    connect?: InsuranceFilesWhereUniqueInput | InsuranceFilesWhereUniqueInput[]
    update?: InsuranceFilesUpdateWithWhereUniqueWithoutReservationInput | InsuranceFilesUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: InsuranceFilesUpdateManyWithWhereWithoutReservationInput | InsuranceFilesUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: InsuranceFilesScalarWhereInput | InsuranceFilesScalarWhereInput[]
  }

  export type ReservationDateUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<ReservationDateCreateWithoutReservationInput, ReservationDateUncheckedCreateWithoutReservationInput> | ReservationDateCreateWithoutReservationInput[] | ReservationDateUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationDateCreateOrConnectWithoutReservationInput | ReservationDateCreateOrConnectWithoutReservationInput[]
    upsert?: ReservationDateUpsertWithWhereUniqueWithoutReservationInput | ReservationDateUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: ReservationDateCreateManyReservationInputEnvelope
    set?: ReservationDateWhereUniqueInput | ReservationDateWhereUniqueInput[]
    disconnect?: ReservationDateWhereUniqueInput | ReservationDateWhereUniqueInput[]
    delete?: ReservationDateWhereUniqueInput | ReservationDateWhereUniqueInput[]
    connect?: ReservationDateWhereUniqueInput | ReservationDateWhereUniqueInput[]
    update?: ReservationDateUpdateWithWhereUniqueWithoutReservationInput | ReservationDateUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: ReservationDateUpdateManyWithWhereWithoutReservationInput | ReservationDateUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: ReservationDateScalarWhereInput | ReservationDateScalarWhereInput[]
  }

  export type ReservationFeesUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<ReservationFeesCreateWithoutReservationInput, ReservationFeesUncheckedCreateWithoutReservationInput> | ReservationFeesCreateWithoutReservationInput[] | ReservationFeesUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationFeesCreateOrConnectWithoutReservationInput | ReservationFeesCreateOrConnectWithoutReservationInput[]
    upsert?: ReservationFeesUpsertWithWhereUniqueWithoutReservationInput | ReservationFeesUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: ReservationFeesCreateManyReservationInputEnvelope
    set?: ReservationFeesWhereUniqueInput | ReservationFeesWhereUniqueInput[]
    disconnect?: ReservationFeesWhereUniqueInput | ReservationFeesWhereUniqueInput[]
    delete?: ReservationFeesWhereUniqueInput | ReservationFeesWhereUniqueInput[]
    connect?: ReservationFeesWhereUniqueInput | ReservationFeesWhereUniqueInput[]
    update?: ReservationFeesUpdateWithWhereUniqueWithoutReservationInput | ReservationFeesUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: ReservationFeesUpdateManyWithWhereWithoutReservationInput | ReservationFeesUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: ReservationFeesScalarWhereInput | ReservationFeesScalarWhereInput[]
  }

  export type ReservationCreateNestedOneWithoutReservationDateInput = {
    create?: XOR<ReservationCreateWithoutReservationDateInput, ReservationUncheckedCreateWithoutReservationDateInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutReservationDateInput
    connect?: ReservationWhereUniqueInput
  }

  export type EnumReservationDate_approvedFieldUpdateOperationsInput = {
    set?: $Enums.ReservationDate_approved
  }

  export type ReservationUpdateOneRequiredWithoutReservationDateNestedInput = {
    create?: XOR<ReservationCreateWithoutReservationDateInput, ReservationUncheckedCreateWithoutReservationDateInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutReservationDateInput
    upsert?: ReservationUpsertWithoutReservationDateInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutReservationDateInput, ReservationUpdateWithoutReservationDateInput>, ReservationUncheckedUpdateWithoutReservationDateInput>
  }

  export type ReservationCreateNestedOneWithoutReservationFeesInput = {
    create?: XOR<ReservationCreateWithoutReservationFeesInput, ReservationUncheckedCreateWithoutReservationFeesInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutReservationFeesInput
    connect?: ReservationWhereUniqueInput
  }

  export type ReservationUpdateOneRequiredWithoutReservationFeesNestedInput = {
    create?: XOR<ReservationCreateWithoutReservationFeesInput, ReservationUncheckedCreateWithoutReservationFeesInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutReservationFeesInput
    upsert?: ReservationUpsertWithoutReservationFeesInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutReservationFeesInput, ReservationUpdateWithoutReservationFeesInput>, ReservationUncheckedUpdateWithoutReservationFeesInput>
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionInput, UserUpdateWithoutSessionInput>, UserUncheckedUpdateWithoutSessionInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EnumUser_roleFieldUpdateOperationsInput = {
    set?: $Enums.User_role
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUserInput | ReservationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUserInput | ReservationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUserInput | ReservationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUserInput | ReservationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUserInput | ReservationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUserInput | ReservationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumReservation_approvedFilter<$PrismaModel = never> = {
    equals?: $Enums.Reservation_approved | EnumReservation_approvedFieldRefInput<$PrismaModel>
    in?: $Enums.Reservation_approved[] | ListEnumReservation_approvedFieldRefInput<$PrismaModel>
    notIn?: $Enums.Reservation_approved[] | ListEnumReservation_approvedFieldRefInput<$PrismaModel>
    not?: NestedEnumReservation_approvedFilter<$PrismaModel> | $Enums.Reservation_approved
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumReservation_approvedWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Reservation_approved | EnumReservation_approvedFieldRefInput<$PrismaModel>
    in?: $Enums.Reservation_approved[] | ListEnumReservation_approvedFieldRefInput<$PrismaModel>
    notIn?: $Enums.Reservation_approved[] | ListEnumReservation_approvedFieldRefInput<$PrismaModel>
    not?: NestedEnumReservation_approvedWithAggregatesFilter<$PrismaModel> | $Enums.Reservation_approved
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservation_approvedFilter<$PrismaModel>
    _max?: NestedEnumReservation_approvedFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumReservationDate_approvedFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationDate_approved | EnumReservationDate_approvedFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationDate_approved[] | ListEnumReservationDate_approvedFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationDate_approved[] | ListEnumReservationDate_approvedFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationDate_approvedFilter<$PrismaModel> | $Enums.ReservationDate_approved
  }

  export type NestedEnumReservationDate_approvedWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationDate_approved | EnumReservationDate_approvedFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationDate_approved[] | ListEnumReservationDate_approvedFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationDate_approved[] | ListEnumReservationDate_approvedFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationDate_approvedWithAggregatesFilter<$PrismaModel> | $Enums.ReservationDate_approved
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationDate_approvedFilter<$PrismaModel>
    _max?: NestedEnumReservationDate_approvedFilter<$PrismaModel>
  }

  export type NestedEnumUser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.User_role | EnumUser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.User_role[] | ListEnumUser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.User_role[] | ListEnumUser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumUser_roleFilter<$PrismaModel> | $Enums.User_role
  }

  export type NestedEnumUser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.User_role | EnumUser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.User_role[] | ListEnumUser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.User_role[] | ListEnumUser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumUser_roleWithAggregatesFilter<$PrismaModel> | $Enums.User_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUser_roleFilter<$PrismaModel>
    _max?: NestedEnumUser_roleFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountInput = {
    id?: string
    name: string
    image?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    provider?: string | null
    externalUser?: boolean
    role?: $Enums.User_role
    createdAt?: Date | string | null
    tos?: boolean
    Reservation?: ReservationCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    image?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    provider?: string | null
    externalUser?: boolean
    role?: $Enums.User_role
    createdAt?: Date | string | null
    tos?: boolean
    Reservation?: ReservationUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
  }

  export type UserUpsertWithoutAccountInput = {
    update: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalUser?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUser_roleFieldUpdateOperationsInput | $Enums.User_role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tos?: BoolFieldUpdateOperationsInput | boolean
    Reservation?: ReservationUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalUser?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUser_roleFieldUpdateOperationsInput | $Enums.User_role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tos?: BoolFieldUpdateOperationsInput | boolean
    Reservation?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FacilityCreateWithoutCategoryInput = {
    id?: bigint | number
    name: string
    building: string
    address: string
    imagePath?: string | null
    capacity?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    googleCalendarId: string
    Events?: EventsCreateNestedManyWithoutFacilityInput
    Reservation?: ReservationCreateNestedManyWithoutFacilityInput
    Option?: OptionCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateWithoutCategoryInput = {
    id?: bigint | number
    name: string
    building: string
    address: string
    imagePath?: string | null
    capacity?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    googleCalendarId: string
    Events?: EventsUncheckedCreateNestedManyWithoutFacilityInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutFacilityInput
    Option?: OptionUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityCreateOrConnectWithoutCategoryInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutCategoryInput, FacilityUncheckedCreateWithoutCategoryInput>
  }

  export type ReservationCreateWithoutCategoryInput = {
    id?: bigint | number
    eventName: string
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
    InsuranceFiles?: InsuranceFilesCreateNestedManyWithoutReservationInput
    Events?: EventsCreateNestedOneWithoutReservationInput
    Facility: FacilityCreateNestedOneWithoutReservationInput
    User: UserCreateNestedOneWithoutReservationInput
    ReservationDate?: ReservationDateCreateNestedManyWithoutReservationInput
    ReservationFees?: ReservationFeesCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutCategoryInput = {
    id?: bigint | number
    userId: string
    eventName: string
    facilityId: bigint | number
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    eventId?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
    InsuranceFiles?: InsuranceFilesUncheckedCreateNestedManyWithoutReservationInput
    ReservationDate?: ReservationDateUncheckedCreateNestedManyWithoutReservationInput
    ReservationFees?: ReservationFeesUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutCategoryInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutCategoryInput, ReservationUncheckedCreateWithoutCategoryInput>
  }

  export type ReservationCreateManyCategoryInputEnvelope = {
    data: ReservationCreateManyCategoryInput | ReservationCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type FacilityUpsertWithoutCategoryInput = {
    update: XOR<FacilityUpdateWithoutCategoryInput, FacilityUncheckedUpdateWithoutCategoryInput>
    create: XOR<FacilityCreateWithoutCategoryInput, FacilityUncheckedCreateWithoutCategoryInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutCategoryInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutCategoryInput, FacilityUncheckedUpdateWithoutCategoryInput>
  }

  export type FacilityUpdateWithoutCategoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    Events?: EventsUpdateManyWithoutFacilityNestedInput
    Reservation?: ReservationUpdateManyWithoutFacilityNestedInput
    Option?: OptionUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutCategoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    Events?: EventsUncheckedUpdateManyWithoutFacilityNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutFacilityNestedInput
    Option?: OptionUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type ReservationUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutCategoryInput, ReservationUncheckedUpdateWithoutCategoryInput>
    create: XOR<ReservationCreateWithoutCategoryInput, ReservationUncheckedCreateWithoutCategoryInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutCategoryInput, ReservationUncheckedUpdateWithoutCategoryInput>
  }

  export type ReservationUpdateManyWithWhereWithoutCategoryInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: BigIntFilter<"Reservation"> | bigint | number
    userId?: StringFilter<"Reservation"> | string
    eventName?: StringFilter<"Reservation"> | string
    facilityId?: BigIntFilter<"Reservation"> | bigint | number
    approved?: EnumReservation_approvedFilter<"Reservation"> | $Enums.Reservation_approved
    createdAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    details?: StringNullableFilter<"Reservation"> | string | null
    eventId?: StringNullableFilter<"Reservation"> | string | null
    fees?: FloatNullableFilter<"Reservation"> | number | null
    insurance?: BoolFilter<"Reservation"> | boolean
    primaryContact?: StringNullableFilter<"Reservation"> | string | null
    responsibleParty?: StringNullableFilter<"Reservation"> | string | null
    doorAccess?: BoolNullableFilter<"Reservation"> | boolean | null
    doorsDetails?: StringNullableFilter<"Reservation"> | string | null
    name?: StringNullableFilter<"Reservation"> | string | null
    people?: StringNullableFilter<"Reservation"> | string | null
    techDetails?: StringNullableFilter<"Reservation"> | string | null
    techSupport?: BoolNullableFilter<"Reservation"> | boolean | null
    phone?: StringNullableFilter<"Reservation"> | string | null
    categoryId?: BigIntFilter<"Reservation"> | bigint | number
    totalHours?: FloatNullableFilter<"Reservation"> | number | null
    inPerson?: BoolFilter<"Reservation"> | boolean
    paid?: BoolFilter<"Reservation"> | boolean
    paymentUrl?: StringNullableFilter<"Reservation"> | string | null
    paymentLinkID?: StringNullableFilter<"Reservation"> | string | null
    ticketMade?: BoolFilter<"Reservation"> | boolean
    conflicts?: BoolFilter<"Reservation"> | boolean
  }

  export type FacilityCreateWithoutEventsInput = {
    id?: bigint | number
    name: string
    building: string
    address: string
    imagePath?: string | null
    capacity?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    googleCalendarId: string
    Category?: CategoryCreateNestedManyWithoutFacilityInput
    Reservation?: ReservationCreateNestedManyWithoutFacilityInput
    Option?: OptionCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateWithoutEventsInput = {
    id?: bigint | number
    name: string
    building: string
    address: string
    imagePath?: string | null
    capacity?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    googleCalendarId: string
    Category?: CategoryUncheckedCreateNestedManyWithoutFacilityInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutFacilityInput
    Option?: OptionUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityCreateOrConnectWithoutEventsInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutEventsInput, FacilityUncheckedCreateWithoutEventsInput>
  }

  export type ReservationCreateWithoutEventsInput = {
    id?: bigint | number
    eventName: string
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
    InsuranceFiles?: InsuranceFilesCreateNestedManyWithoutReservationInput
    Category: CategoryCreateNestedOneWithoutReservationInput
    Facility: FacilityCreateNestedOneWithoutReservationInput
    User: UserCreateNestedOneWithoutReservationInput
    ReservationDate?: ReservationDateCreateNestedManyWithoutReservationInput
    ReservationFees?: ReservationFeesCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutEventsInput = {
    id?: bigint | number
    userId: string
    eventName: string
    facilityId: bigint | number
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    categoryId: bigint | number
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
    InsuranceFiles?: InsuranceFilesUncheckedCreateNestedManyWithoutReservationInput
    ReservationDate?: ReservationDateUncheckedCreateNestedManyWithoutReservationInput
    ReservationFees?: ReservationFeesUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutEventsInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutEventsInput, ReservationUncheckedCreateWithoutEventsInput>
  }

  export type ReservationCreateManyEventsInputEnvelope = {
    data: ReservationCreateManyEventsInput | ReservationCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type FacilityUpsertWithoutEventsInput = {
    update: XOR<FacilityUpdateWithoutEventsInput, FacilityUncheckedUpdateWithoutEventsInput>
    create: XOR<FacilityCreateWithoutEventsInput, FacilityUncheckedCreateWithoutEventsInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutEventsInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutEventsInput, FacilityUncheckedUpdateWithoutEventsInput>
  }

  export type FacilityUpdateWithoutEventsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    Category?: CategoryUpdateManyWithoutFacilityNestedInput
    Reservation?: ReservationUpdateManyWithoutFacilityNestedInput
    Option?: OptionUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutEventsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    Category?: CategoryUncheckedUpdateManyWithoutFacilityNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutFacilityNestedInput
    Option?: OptionUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type ReservationUpsertWithWhereUniqueWithoutEventsInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutEventsInput, ReservationUncheckedUpdateWithoutEventsInput>
    create: XOR<ReservationCreateWithoutEventsInput, ReservationUncheckedCreateWithoutEventsInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutEventsInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutEventsInput, ReservationUncheckedUpdateWithoutEventsInput>
  }

  export type ReservationUpdateManyWithWhereWithoutEventsInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutEventsInput>
  }

  export type CategoryCreateWithoutFacilityInput = {
    id?: bigint | number
    name: string
    description: string
    price: number
    Reservation?: ReservationCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutFacilityInput = {
    id?: bigint | number
    name: string
    description: string
    price: number
    Reservation?: ReservationUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutFacilityInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutFacilityInput, CategoryUncheckedCreateWithoutFacilityInput>
  }

  export type CategoryCreateManyFacilityInputEnvelope = {
    data: CategoryCreateManyFacilityInput | CategoryCreateManyFacilityInput[]
    skipDuplicates?: boolean
  }

  export type EventsCreateWithoutFacilityInput = {
    id: string
    calendarId?: string | null
    title?: string | null
    start?: Date | string | null
    end?: Date | string | null
    location?: string | null
    recurringEventId?: string | null
    Reservation?: ReservationCreateNestedManyWithoutEventsInput
  }

  export type EventsUncheckedCreateWithoutFacilityInput = {
    id: string
    calendarId?: string | null
    title?: string | null
    start?: Date | string | null
    end?: Date | string | null
    location?: string | null
    recurringEventId?: string | null
    Reservation?: ReservationUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventsCreateOrConnectWithoutFacilityInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutFacilityInput, EventsUncheckedCreateWithoutFacilityInput>
  }

  export type EventsCreateManyFacilityInputEnvelope = {
    data: EventsCreateManyFacilityInput | EventsCreateManyFacilityInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutFacilityInput = {
    id?: bigint | number
    eventName: string
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
    InsuranceFiles?: InsuranceFilesCreateNestedManyWithoutReservationInput
    Category: CategoryCreateNestedOneWithoutReservationInput
    Events?: EventsCreateNestedOneWithoutReservationInput
    User: UserCreateNestedOneWithoutReservationInput
    ReservationDate?: ReservationDateCreateNestedManyWithoutReservationInput
    ReservationFees?: ReservationFeesCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutFacilityInput = {
    id?: bigint | number
    userId: string
    eventName: string
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    eventId?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    categoryId: bigint | number
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
    InsuranceFiles?: InsuranceFilesUncheckedCreateNestedManyWithoutReservationInput
    ReservationDate?: ReservationDateUncheckedCreateNestedManyWithoutReservationInput
    ReservationFees?: ReservationFeesUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutFacilityInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutFacilityInput, ReservationUncheckedCreateWithoutFacilityInput>
  }

  export type ReservationCreateManyFacilityInputEnvelope = {
    data: ReservationCreateManyFacilityInput | ReservationCreateManyFacilityInput[]
    skipDuplicates?: boolean
  }

  export type OptionCreateWithoutFacilityInput = {
    id?: bigint | number
    name: string
  }

  export type OptionUncheckedCreateWithoutFacilityInput = {
    id?: bigint | number
    name: string
  }

  export type OptionCreateOrConnectWithoutFacilityInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutFacilityInput, OptionUncheckedCreateWithoutFacilityInput>
  }

  export type CategoryUpsertWithWhereUniqueWithoutFacilityInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutFacilityInput, CategoryUncheckedUpdateWithoutFacilityInput>
    create: XOR<CategoryCreateWithoutFacilityInput, CategoryUncheckedCreateWithoutFacilityInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutFacilityInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutFacilityInput, CategoryUncheckedUpdateWithoutFacilityInput>
  }

  export type CategoryUpdateManyWithWhereWithoutFacilityInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutFacilityInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: BigIntFilter<"Category"> | bigint | number
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    price?: FloatFilter<"Category"> | number
    facilityId?: BigIntFilter<"Category"> | bigint | number
  }

  export type EventsUpsertWithWhereUniqueWithoutFacilityInput = {
    where: EventsWhereUniqueInput
    update: XOR<EventsUpdateWithoutFacilityInput, EventsUncheckedUpdateWithoutFacilityInput>
    create: XOR<EventsCreateWithoutFacilityInput, EventsUncheckedCreateWithoutFacilityInput>
  }

  export type EventsUpdateWithWhereUniqueWithoutFacilityInput = {
    where: EventsWhereUniqueInput
    data: XOR<EventsUpdateWithoutFacilityInput, EventsUncheckedUpdateWithoutFacilityInput>
  }

  export type EventsUpdateManyWithWhereWithoutFacilityInput = {
    where: EventsScalarWhereInput
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyWithoutFacilityInput>
  }

  export type EventsScalarWhereInput = {
    AND?: EventsScalarWhereInput | EventsScalarWhereInput[]
    OR?: EventsScalarWhereInput[]
    NOT?: EventsScalarWhereInput | EventsScalarWhereInput[]
    id?: StringFilter<"Events"> | string
    calendarId?: StringNullableFilter<"Events"> | string | null
    title?: StringNullableFilter<"Events"> | string | null
    start?: DateTimeNullableFilter<"Events"> | Date | string | null
    end?: DateTimeNullableFilter<"Events"> | Date | string | null
    location?: StringNullableFilter<"Events"> | string | null
    recurringEventId?: StringNullableFilter<"Events"> | string | null
    facilityId?: BigIntFilter<"Events"> | bigint | number
  }

  export type ReservationUpsertWithWhereUniqueWithoutFacilityInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutFacilityInput, ReservationUncheckedUpdateWithoutFacilityInput>
    create: XOR<ReservationCreateWithoutFacilityInput, ReservationUncheckedCreateWithoutFacilityInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutFacilityInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutFacilityInput, ReservationUncheckedUpdateWithoutFacilityInput>
  }

  export type ReservationUpdateManyWithWhereWithoutFacilityInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutFacilityInput>
  }

  export type OptionUpsertWithWhereUniqueWithoutFacilityInput = {
    where: OptionWhereUniqueInput
    update: XOR<OptionUpdateWithoutFacilityInput, OptionUncheckedUpdateWithoutFacilityInput>
    create: XOR<OptionCreateWithoutFacilityInput, OptionUncheckedCreateWithoutFacilityInput>
  }

  export type OptionUpdateWithWhereUniqueWithoutFacilityInput = {
    where: OptionWhereUniqueInput
    data: XOR<OptionUpdateWithoutFacilityInput, OptionUncheckedUpdateWithoutFacilityInput>
  }

  export type OptionUpdateManyWithWhereWithoutFacilityInput = {
    where: OptionScalarWhereInput
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyWithoutFacilityInput>
  }

  export type OptionScalarWhereInput = {
    AND?: OptionScalarWhereInput | OptionScalarWhereInput[]
    OR?: OptionScalarWhereInput[]
    NOT?: OptionScalarWhereInput | OptionScalarWhereInput[]
    id?: BigIntFilter<"Option"> | bigint | number
    name?: StringFilter<"Option"> | string
  }

  export type ReservationCreateWithoutInsuranceFilesInput = {
    id?: bigint | number
    eventName: string
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
    Category: CategoryCreateNestedOneWithoutReservationInput
    Events?: EventsCreateNestedOneWithoutReservationInput
    Facility: FacilityCreateNestedOneWithoutReservationInput
    User: UserCreateNestedOneWithoutReservationInput
    ReservationDate?: ReservationDateCreateNestedManyWithoutReservationInput
    ReservationFees?: ReservationFeesCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutInsuranceFilesInput = {
    id?: bigint | number
    userId: string
    eventName: string
    facilityId: bigint | number
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    eventId?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    categoryId: bigint | number
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
    ReservationDate?: ReservationDateUncheckedCreateNestedManyWithoutReservationInput
    ReservationFees?: ReservationFeesUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutInsuranceFilesInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutInsuranceFilesInput, ReservationUncheckedCreateWithoutInsuranceFilesInput>
  }

  export type ReservationUpsertWithoutInsuranceFilesInput = {
    update: XOR<ReservationUpdateWithoutInsuranceFilesInput, ReservationUncheckedUpdateWithoutInsuranceFilesInput>
    create: XOR<ReservationCreateWithoutInsuranceFilesInput, ReservationUncheckedCreateWithoutInsuranceFilesInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutInsuranceFilesInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutInsuranceFilesInput, ReservationUncheckedUpdateWithoutInsuranceFilesInput>
  }

  export type ReservationUpdateWithoutInsuranceFilesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventName?: StringFieldUpdateOperationsInput | string
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
    Category?: CategoryUpdateOneRequiredWithoutReservationNestedInput
    Events?: EventsUpdateOneWithoutReservationNestedInput
    Facility?: FacilityUpdateOneRequiredWithoutReservationNestedInput
    User?: UserUpdateOneRequiredWithoutReservationNestedInput
    ReservationDate?: ReservationDateUpdateManyWithoutReservationNestedInput
    ReservationFees?: ReservationFeesUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutInsuranceFilesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    facilityId?: BigIntFieldUpdateOperationsInput | bigint | number
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
    ReservationDate?: ReservationDateUncheckedUpdateManyWithoutReservationNestedInput
    ReservationFees?: ReservationFeesUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type FacilityCreateWithoutOptionInput = {
    id?: bigint | number
    name: string
    building: string
    address: string
    imagePath?: string | null
    capacity?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    googleCalendarId: string
    Category?: CategoryCreateNestedManyWithoutFacilityInput
    Events?: EventsCreateNestedManyWithoutFacilityInput
    Reservation?: ReservationCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateWithoutOptionInput = {
    id?: bigint | number
    name: string
    building: string
    address: string
    imagePath?: string | null
    capacity?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    googleCalendarId: string
    Category?: CategoryUncheckedCreateNestedManyWithoutFacilityInput
    Events?: EventsUncheckedCreateNestedManyWithoutFacilityInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityCreateOrConnectWithoutOptionInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutOptionInput, FacilityUncheckedCreateWithoutOptionInput>
  }

  export type FacilityUpsertWithWhereUniqueWithoutOptionInput = {
    where: FacilityWhereUniqueInput
    update: XOR<FacilityUpdateWithoutOptionInput, FacilityUncheckedUpdateWithoutOptionInput>
    create: XOR<FacilityCreateWithoutOptionInput, FacilityUncheckedCreateWithoutOptionInput>
  }

  export type FacilityUpdateWithWhereUniqueWithoutOptionInput = {
    where: FacilityWhereUniqueInput
    data: XOR<FacilityUpdateWithoutOptionInput, FacilityUncheckedUpdateWithoutOptionInput>
  }

  export type FacilityUpdateManyWithWhereWithoutOptionInput = {
    where: FacilityScalarWhereInput
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyWithoutOptionInput>
  }

  export type FacilityScalarWhereInput = {
    AND?: FacilityScalarWhereInput | FacilityScalarWhereInput[]
    OR?: FacilityScalarWhereInput[]
    NOT?: FacilityScalarWhereInput | FacilityScalarWhereInput[]
    id?: BigIntFilter<"Facility"> | bigint | number
    name?: StringFilter<"Facility"> | string
    building?: StringFilter<"Facility"> | string
    address?: StringFilter<"Facility"> | string
    imagePath?: StringNullableFilter<"Facility"> | string | null
    capacity?: IntNullableFilter<"Facility"> | number | null
    createdAt?: DateTimeNullableFilter<"Facility"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Facility"> | Date | string | null
    googleCalendarId?: StringFilter<"Facility"> | string
  }

  export type InsuranceFilesCreateWithoutReservationInput = {
    id?: bigint | number
    path?: string | null
    fileName?: string | null
    varified?: boolean
  }

  export type InsuranceFilesUncheckedCreateWithoutReservationInput = {
    id?: bigint | number
    path?: string | null
    fileName?: string | null
    varified?: boolean
  }

  export type InsuranceFilesCreateOrConnectWithoutReservationInput = {
    where: InsuranceFilesWhereUniqueInput
    create: XOR<InsuranceFilesCreateWithoutReservationInput, InsuranceFilesUncheckedCreateWithoutReservationInput>
  }

  export type InsuranceFilesCreateManyReservationInputEnvelope = {
    data: InsuranceFilesCreateManyReservationInput | InsuranceFilesCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutReservationInput = {
    id?: bigint | number
    name: string
    description: string
    price: number
    Facility: FacilityCreateNestedOneWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutReservationInput = {
    id?: bigint | number
    name: string
    description: string
    price: number
    facilityId: bigint | number
  }

  export type CategoryCreateOrConnectWithoutReservationInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutReservationInput, CategoryUncheckedCreateWithoutReservationInput>
  }

  export type EventsCreateWithoutReservationInput = {
    id: string
    calendarId?: string | null
    title?: string | null
    start?: Date | string | null
    end?: Date | string | null
    location?: string | null
    recurringEventId?: string | null
    Facility: FacilityCreateNestedOneWithoutEventsInput
  }

  export type EventsUncheckedCreateWithoutReservationInput = {
    id: string
    calendarId?: string | null
    title?: string | null
    start?: Date | string | null
    end?: Date | string | null
    location?: string | null
    recurringEventId?: string | null
    facilityId: bigint | number
  }

  export type EventsCreateOrConnectWithoutReservationInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutReservationInput, EventsUncheckedCreateWithoutReservationInput>
  }

  export type FacilityCreateWithoutReservationInput = {
    id?: bigint | number
    name: string
    building: string
    address: string
    imagePath?: string | null
    capacity?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    googleCalendarId: string
    Category?: CategoryCreateNestedManyWithoutFacilityInput
    Events?: EventsCreateNestedManyWithoutFacilityInput
    Option?: OptionCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateWithoutReservationInput = {
    id?: bigint | number
    name: string
    building: string
    address: string
    imagePath?: string | null
    capacity?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    googleCalendarId: string
    Category?: CategoryUncheckedCreateNestedManyWithoutFacilityInput
    Events?: EventsUncheckedCreateNestedManyWithoutFacilityInput
    Option?: OptionUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityCreateOrConnectWithoutReservationInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutReservationInput, FacilityUncheckedCreateWithoutReservationInput>
  }

  export type UserCreateWithoutReservationInput = {
    id?: string
    name: string
    image?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    provider?: string | null
    externalUser?: boolean
    role?: $Enums.User_role
    createdAt?: Date | string | null
    tos?: boolean
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReservationInput = {
    id?: string
    name: string
    image?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    provider?: string | null
    externalUser?: boolean
    role?: $Enums.User_role
    createdAt?: Date | string | null
    tos?: boolean
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReservationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReservationInput, UserUncheckedCreateWithoutReservationInput>
  }

  export type ReservationDateCreateWithoutReservationInput = {
    id?: bigint | number
    startDate: string
    endDate: string
    startTime: string
    endTime: string
    approved?: $Enums.ReservationDate_approved
  }

  export type ReservationDateUncheckedCreateWithoutReservationInput = {
    id?: bigint | number
    startDate: string
    endDate: string
    startTime: string
    endTime: string
    approved?: $Enums.ReservationDate_approved
  }

  export type ReservationDateCreateOrConnectWithoutReservationInput = {
    where: ReservationDateWhereUniqueInput
    create: XOR<ReservationDateCreateWithoutReservationInput, ReservationDateUncheckedCreateWithoutReservationInput>
  }

  export type ReservationDateCreateManyReservationInputEnvelope = {
    data: ReservationDateCreateManyReservationInput | ReservationDateCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type ReservationFeesCreateWithoutReservationInput = {
    id?: bigint | number
    additionalFees?: number | null
    feesType?: string | null
  }

  export type ReservationFeesUncheckedCreateWithoutReservationInput = {
    id?: bigint | number
    additionalFees?: number | null
    feesType?: string | null
  }

  export type ReservationFeesCreateOrConnectWithoutReservationInput = {
    where: ReservationFeesWhereUniqueInput
    create: XOR<ReservationFeesCreateWithoutReservationInput, ReservationFeesUncheckedCreateWithoutReservationInput>
  }

  export type ReservationFeesCreateManyReservationInputEnvelope = {
    data: ReservationFeesCreateManyReservationInput | ReservationFeesCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type InsuranceFilesUpsertWithWhereUniqueWithoutReservationInput = {
    where: InsuranceFilesWhereUniqueInput
    update: XOR<InsuranceFilesUpdateWithoutReservationInput, InsuranceFilesUncheckedUpdateWithoutReservationInput>
    create: XOR<InsuranceFilesCreateWithoutReservationInput, InsuranceFilesUncheckedCreateWithoutReservationInput>
  }

  export type InsuranceFilesUpdateWithWhereUniqueWithoutReservationInput = {
    where: InsuranceFilesWhereUniqueInput
    data: XOR<InsuranceFilesUpdateWithoutReservationInput, InsuranceFilesUncheckedUpdateWithoutReservationInput>
  }

  export type InsuranceFilesUpdateManyWithWhereWithoutReservationInput = {
    where: InsuranceFilesScalarWhereInput
    data: XOR<InsuranceFilesUpdateManyMutationInput, InsuranceFilesUncheckedUpdateManyWithoutReservationInput>
  }

  export type InsuranceFilesScalarWhereInput = {
    AND?: InsuranceFilesScalarWhereInput | InsuranceFilesScalarWhereInput[]
    OR?: InsuranceFilesScalarWhereInput[]
    NOT?: InsuranceFilesScalarWhereInput | InsuranceFilesScalarWhereInput[]
    id?: BigIntFilter<"InsuranceFiles"> | bigint | number
    path?: StringNullableFilter<"InsuranceFiles"> | string | null
    fileName?: StringNullableFilter<"InsuranceFiles"> | string | null
    reservationId?: BigIntFilter<"InsuranceFiles"> | bigint | number
    varified?: BoolFilter<"InsuranceFiles"> | boolean
  }

  export type CategoryUpsertWithoutReservationInput = {
    update: XOR<CategoryUpdateWithoutReservationInput, CategoryUncheckedUpdateWithoutReservationInput>
    create: XOR<CategoryCreateWithoutReservationInput, CategoryUncheckedCreateWithoutReservationInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutReservationInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutReservationInput, CategoryUncheckedUpdateWithoutReservationInput>
  }

  export type CategoryUpdateWithoutReservationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    Facility?: FacilityUpdateOneRequiredWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutReservationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    facilityId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type EventsUpsertWithoutReservationInput = {
    update: XOR<EventsUpdateWithoutReservationInput, EventsUncheckedUpdateWithoutReservationInput>
    create: XOR<EventsCreateWithoutReservationInput, EventsUncheckedCreateWithoutReservationInput>
    where?: EventsWhereInput
  }

  export type EventsUpdateToOneWithWhereWithoutReservationInput = {
    where?: EventsWhereInput
    data: XOR<EventsUpdateWithoutReservationInput, EventsUncheckedUpdateWithoutReservationInput>
  }

  export type EventsUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    recurringEventId?: NullableStringFieldUpdateOperationsInput | string | null
    Facility?: FacilityUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventsUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    recurringEventId?: NullableStringFieldUpdateOperationsInput | string | null
    facilityId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type FacilityUpsertWithoutReservationInput = {
    update: XOR<FacilityUpdateWithoutReservationInput, FacilityUncheckedUpdateWithoutReservationInput>
    create: XOR<FacilityCreateWithoutReservationInput, FacilityUncheckedCreateWithoutReservationInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutReservationInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutReservationInput, FacilityUncheckedUpdateWithoutReservationInput>
  }

  export type FacilityUpdateWithoutReservationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    Category?: CategoryUpdateManyWithoutFacilityNestedInput
    Events?: EventsUpdateManyWithoutFacilityNestedInput
    Option?: OptionUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutReservationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    Category?: CategoryUncheckedUpdateManyWithoutFacilityNestedInput
    Events?: EventsUncheckedUpdateManyWithoutFacilityNestedInput
    Option?: OptionUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type UserUpsertWithoutReservationInput = {
    update: XOR<UserUpdateWithoutReservationInput, UserUncheckedUpdateWithoutReservationInput>
    create: XOR<UserCreateWithoutReservationInput, UserUncheckedCreateWithoutReservationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReservationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReservationInput, UserUncheckedUpdateWithoutReservationInput>
  }

  export type UserUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalUser?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUser_roleFieldUpdateOperationsInput | $Enums.User_role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tos?: BoolFieldUpdateOperationsInput | boolean
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalUser?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUser_roleFieldUpdateOperationsInput | $Enums.User_role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tos?: BoolFieldUpdateOperationsInput | boolean
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReservationDateUpsertWithWhereUniqueWithoutReservationInput = {
    where: ReservationDateWhereUniqueInput
    update: XOR<ReservationDateUpdateWithoutReservationInput, ReservationDateUncheckedUpdateWithoutReservationInput>
    create: XOR<ReservationDateCreateWithoutReservationInput, ReservationDateUncheckedCreateWithoutReservationInput>
  }

  export type ReservationDateUpdateWithWhereUniqueWithoutReservationInput = {
    where: ReservationDateWhereUniqueInput
    data: XOR<ReservationDateUpdateWithoutReservationInput, ReservationDateUncheckedUpdateWithoutReservationInput>
  }

  export type ReservationDateUpdateManyWithWhereWithoutReservationInput = {
    where: ReservationDateScalarWhereInput
    data: XOR<ReservationDateUpdateManyMutationInput, ReservationDateUncheckedUpdateManyWithoutReservationInput>
  }

  export type ReservationDateScalarWhereInput = {
    AND?: ReservationDateScalarWhereInput | ReservationDateScalarWhereInput[]
    OR?: ReservationDateScalarWhereInput[]
    NOT?: ReservationDateScalarWhereInput | ReservationDateScalarWhereInput[]
    id?: BigIntFilter<"ReservationDate"> | bigint | number
    startDate?: StringFilter<"ReservationDate"> | string
    endDate?: StringFilter<"ReservationDate"> | string
    startTime?: StringFilter<"ReservationDate"> | string
    endTime?: StringFilter<"ReservationDate"> | string
    reservationId?: BigIntFilter<"ReservationDate"> | bigint | number
    approved?: EnumReservationDate_approvedFilter<"ReservationDate"> | $Enums.ReservationDate_approved
  }

  export type ReservationFeesUpsertWithWhereUniqueWithoutReservationInput = {
    where: ReservationFeesWhereUniqueInput
    update: XOR<ReservationFeesUpdateWithoutReservationInput, ReservationFeesUncheckedUpdateWithoutReservationInput>
    create: XOR<ReservationFeesCreateWithoutReservationInput, ReservationFeesUncheckedCreateWithoutReservationInput>
  }

  export type ReservationFeesUpdateWithWhereUniqueWithoutReservationInput = {
    where: ReservationFeesWhereUniqueInput
    data: XOR<ReservationFeesUpdateWithoutReservationInput, ReservationFeesUncheckedUpdateWithoutReservationInput>
  }

  export type ReservationFeesUpdateManyWithWhereWithoutReservationInput = {
    where: ReservationFeesScalarWhereInput
    data: XOR<ReservationFeesUpdateManyMutationInput, ReservationFeesUncheckedUpdateManyWithoutReservationInput>
  }

  export type ReservationFeesScalarWhereInput = {
    AND?: ReservationFeesScalarWhereInput | ReservationFeesScalarWhereInput[]
    OR?: ReservationFeesScalarWhereInput[]
    NOT?: ReservationFeesScalarWhereInput | ReservationFeesScalarWhereInput[]
    id?: BigIntFilter<"ReservationFees"> | bigint | number
    additionalFees?: FloatNullableFilter<"ReservationFees"> | number | null
    feesType?: StringNullableFilter<"ReservationFees"> | string | null
    reservationId?: BigIntFilter<"ReservationFees"> | bigint | number
  }

  export type ReservationCreateWithoutReservationDateInput = {
    id?: bigint | number
    eventName: string
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
    InsuranceFiles?: InsuranceFilesCreateNestedManyWithoutReservationInput
    Category: CategoryCreateNestedOneWithoutReservationInput
    Events?: EventsCreateNestedOneWithoutReservationInput
    Facility: FacilityCreateNestedOneWithoutReservationInput
    User: UserCreateNestedOneWithoutReservationInput
    ReservationFees?: ReservationFeesCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutReservationDateInput = {
    id?: bigint | number
    userId: string
    eventName: string
    facilityId: bigint | number
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    eventId?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    categoryId: bigint | number
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
    InsuranceFiles?: InsuranceFilesUncheckedCreateNestedManyWithoutReservationInput
    ReservationFees?: ReservationFeesUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutReservationDateInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutReservationDateInput, ReservationUncheckedCreateWithoutReservationDateInput>
  }

  export type ReservationUpsertWithoutReservationDateInput = {
    update: XOR<ReservationUpdateWithoutReservationDateInput, ReservationUncheckedUpdateWithoutReservationDateInput>
    create: XOR<ReservationCreateWithoutReservationDateInput, ReservationUncheckedCreateWithoutReservationDateInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutReservationDateInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutReservationDateInput, ReservationUncheckedUpdateWithoutReservationDateInput>
  }

  export type ReservationUpdateWithoutReservationDateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventName?: StringFieldUpdateOperationsInput | string
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
    InsuranceFiles?: InsuranceFilesUpdateManyWithoutReservationNestedInput
    Category?: CategoryUpdateOneRequiredWithoutReservationNestedInput
    Events?: EventsUpdateOneWithoutReservationNestedInput
    Facility?: FacilityUpdateOneRequiredWithoutReservationNestedInput
    User?: UserUpdateOneRequiredWithoutReservationNestedInput
    ReservationFees?: ReservationFeesUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutReservationDateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    facilityId?: BigIntFieldUpdateOperationsInput | bigint | number
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
    InsuranceFiles?: InsuranceFilesUncheckedUpdateManyWithoutReservationNestedInput
    ReservationFees?: ReservationFeesUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationCreateWithoutReservationFeesInput = {
    id?: bigint | number
    eventName: string
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
    InsuranceFiles?: InsuranceFilesCreateNestedManyWithoutReservationInput
    Category: CategoryCreateNestedOneWithoutReservationInput
    Events?: EventsCreateNestedOneWithoutReservationInput
    Facility: FacilityCreateNestedOneWithoutReservationInput
    User: UserCreateNestedOneWithoutReservationInput
    ReservationDate?: ReservationDateCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutReservationFeesInput = {
    id?: bigint | number
    userId: string
    eventName: string
    facilityId: bigint | number
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    eventId?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    categoryId: bigint | number
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
    InsuranceFiles?: InsuranceFilesUncheckedCreateNestedManyWithoutReservationInput
    ReservationDate?: ReservationDateUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutReservationFeesInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutReservationFeesInput, ReservationUncheckedCreateWithoutReservationFeesInput>
  }

  export type ReservationUpsertWithoutReservationFeesInput = {
    update: XOR<ReservationUpdateWithoutReservationFeesInput, ReservationUncheckedUpdateWithoutReservationFeesInput>
    create: XOR<ReservationCreateWithoutReservationFeesInput, ReservationUncheckedCreateWithoutReservationFeesInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutReservationFeesInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutReservationFeesInput, ReservationUncheckedUpdateWithoutReservationFeesInput>
  }

  export type ReservationUpdateWithoutReservationFeesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventName?: StringFieldUpdateOperationsInput | string
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
    InsuranceFiles?: InsuranceFilesUpdateManyWithoutReservationNestedInput
    Category?: CategoryUpdateOneRequiredWithoutReservationNestedInput
    Events?: EventsUpdateOneWithoutReservationNestedInput
    Facility?: FacilityUpdateOneRequiredWithoutReservationNestedInput
    User?: UserUpdateOneRequiredWithoutReservationNestedInput
    ReservationDate?: ReservationDateUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutReservationFeesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    facilityId?: BigIntFieldUpdateOperationsInput | bigint | number
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
    InsuranceFiles?: InsuranceFilesUncheckedUpdateManyWithoutReservationNestedInput
    ReservationDate?: ReservationDateUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type UserCreateWithoutSessionInput = {
    id?: string
    name: string
    image?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    provider?: string | null
    externalUser?: boolean
    role?: $Enums.User_role
    createdAt?: Date | string | null
    tos?: boolean
    Account?: AccountCreateNestedManyWithoutUserInput
    Reservation?: ReservationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: string
    name: string
    image?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    provider?: string | null
    externalUser?: boolean
    role?: $Enums.User_role
    createdAt?: Date | string | null
    tos?: boolean
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalUser?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUser_roleFieldUpdateOperationsInput | $Enums.User_role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tos?: BoolFieldUpdateOperationsInput | boolean
    Account?: AccountUpdateManyWithoutUserNestedInput
    Reservation?: ReservationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalUser?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUser_roleFieldUpdateOperationsInput | $Enums.User_role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tos?: BoolFieldUpdateOperationsInput | boolean
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    ext_expires_in?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    ext_expires_in?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutUserInput = {
    id?: bigint | number
    eventName: string
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
    InsuranceFiles?: InsuranceFilesCreateNestedManyWithoutReservationInput
    Category: CategoryCreateNestedOneWithoutReservationInput
    Events?: EventsCreateNestedOneWithoutReservationInput
    Facility: FacilityCreateNestedOneWithoutReservationInput
    ReservationDate?: ReservationDateCreateNestedManyWithoutReservationInput
    ReservationFees?: ReservationFeesCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    eventName: string
    facilityId: bigint | number
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    eventId?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    categoryId: bigint | number
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
    InsuranceFiles?: InsuranceFilesUncheckedCreateNestedManyWithoutReservationInput
    ReservationDate?: ReservationDateUncheckedCreateNestedManyWithoutReservationInput
    ReservationFees?: ReservationFeesUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutUserInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput>
  }

  export type ReservationCreateManyUserInputEnvelope = {
    data: ReservationCreateManyUserInput | ReservationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    sessionToken: string
    expires?: Date | string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    sessionToken: string
    expires?: Date | string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    ext_expires_in?: IntNullableFilter<"Account"> | number | null
  }

  export type ReservationUpsertWithWhereUniqueWithoutUserInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutUserInput, ReservationUncheckedUpdateWithoutUserInput>
    create: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutUserInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutUserInput, ReservationUncheckedUpdateWithoutUserInput>
  }

  export type ReservationUpdateManyWithWhereWithoutUserInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeNullableFilter<"Session"> | Date | string | null
  }

  export type ReservationCreateManyCategoryInput = {
    id?: bigint | number
    userId: string
    eventName: string
    facilityId: bigint | number
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    eventId?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
  }

  export type ReservationUpdateWithoutCategoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventName?: StringFieldUpdateOperationsInput | string
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
    InsuranceFiles?: InsuranceFilesUpdateManyWithoutReservationNestedInput
    Events?: EventsUpdateOneWithoutReservationNestedInput
    Facility?: FacilityUpdateOneRequiredWithoutReservationNestedInput
    User?: UserUpdateOneRequiredWithoutReservationNestedInput
    ReservationDate?: ReservationDateUpdateManyWithoutReservationNestedInput
    ReservationFees?: ReservationFeesUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutCategoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    facilityId?: BigIntFieldUpdateOperationsInput | bigint | number
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
    InsuranceFiles?: InsuranceFilesUncheckedUpdateManyWithoutReservationNestedInput
    ReservationDate?: ReservationDateUncheckedUpdateManyWithoutReservationNestedInput
    ReservationFees?: ReservationFeesUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutCategoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    facilityId?: BigIntFieldUpdateOperationsInput | bigint | number
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReservationCreateManyEventsInput = {
    id?: bigint | number
    userId: string
    eventName: string
    facilityId: bigint | number
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    categoryId: bigint | number
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
  }

  export type ReservationUpdateWithoutEventsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventName?: StringFieldUpdateOperationsInput | string
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
    InsuranceFiles?: InsuranceFilesUpdateManyWithoutReservationNestedInput
    Category?: CategoryUpdateOneRequiredWithoutReservationNestedInput
    Facility?: FacilityUpdateOneRequiredWithoutReservationNestedInput
    User?: UserUpdateOneRequiredWithoutReservationNestedInput
    ReservationDate?: ReservationDateUpdateManyWithoutReservationNestedInput
    ReservationFees?: ReservationFeesUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutEventsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    facilityId?: BigIntFieldUpdateOperationsInput | bigint | number
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
    InsuranceFiles?: InsuranceFilesUncheckedUpdateManyWithoutReservationNestedInput
    ReservationDate?: ReservationDateUncheckedUpdateManyWithoutReservationNestedInput
    ReservationFees?: ReservationFeesUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutEventsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    facilityId?: BigIntFieldUpdateOperationsInput | bigint | number
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryCreateManyFacilityInput = {
    id?: bigint | number
    name: string
    description: string
    price: number
  }

  export type EventsCreateManyFacilityInput = {
    id: string
    calendarId?: string | null
    title?: string | null
    start?: Date | string | null
    end?: Date | string | null
    location?: string | null
    recurringEventId?: string | null
  }

  export type ReservationCreateManyFacilityInput = {
    id?: bigint | number
    userId: string
    eventName: string
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    eventId?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    categoryId: bigint | number
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
  }

  export type CategoryUpdateWithoutFacilityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    Reservation?: ReservationUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutFacilityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    Reservation?: ReservationUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutFacilityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type EventsUpdateWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    recurringEventId?: NullableStringFieldUpdateOperationsInput | string | null
    Reservation?: ReservationUpdateManyWithoutEventsNestedInput
  }

  export type EventsUncheckedUpdateWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    recurringEventId?: NullableStringFieldUpdateOperationsInput | string | null
    Reservation?: ReservationUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type EventsUncheckedUpdateManyWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    recurringEventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservationUpdateWithoutFacilityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventName?: StringFieldUpdateOperationsInput | string
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
    InsuranceFiles?: InsuranceFilesUpdateManyWithoutReservationNestedInput
    Category?: CategoryUpdateOneRequiredWithoutReservationNestedInput
    Events?: EventsUpdateOneWithoutReservationNestedInput
    User?: UserUpdateOneRequiredWithoutReservationNestedInput
    ReservationDate?: ReservationDateUpdateManyWithoutReservationNestedInput
    ReservationFees?: ReservationFeesUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutFacilityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
    InsuranceFiles?: InsuranceFilesUncheckedUpdateManyWithoutReservationNestedInput
    ReservationDate?: ReservationDateUncheckedUpdateManyWithoutReservationNestedInput
    ReservationFees?: ReservationFeesUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutFacilityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OptionUpdateWithoutFacilityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OptionUncheckedUpdateWithoutFacilityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OptionUncheckedUpdateManyWithoutFacilityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FacilityUpdateWithoutOptionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    Category?: CategoryUpdateManyWithoutFacilityNestedInput
    Events?: EventsUpdateManyWithoutFacilityNestedInput
    Reservation?: ReservationUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutOptionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    Category?: CategoryUncheckedUpdateManyWithoutFacilityNestedInput
    Events?: EventsUncheckedUpdateManyWithoutFacilityNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateManyWithoutOptionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleCalendarId?: StringFieldUpdateOperationsInput | string
  }

  export type InsuranceFilesCreateManyReservationInput = {
    id?: bigint | number
    path?: string | null
    fileName?: string | null
    varified?: boolean
  }

  export type ReservationDateCreateManyReservationInput = {
    id?: bigint | number
    startDate: string
    endDate: string
    startTime: string
    endTime: string
    approved?: $Enums.ReservationDate_approved
  }

  export type ReservationFeesCreateManyReservationInput = {
    id?: bigint | number
    additionalFees?: number | null
    feesType?: string | null
  }

  export type InsuranceFilesUpdateWithoutReservationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    path?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    varified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InsuranceFilesUncheckedUpdateWithoutReservationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    path?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    varified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InsuranceFilesUncheckedUpdateManyWithoutReservationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    path?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    varified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReservationDateUpdateWithoutReservationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    approved?: EnumReservationDate_approvedFieldUpdateOperationsInput | $Enums.ReservationDate_approved
  }

  export type ReservationDateUncheckedUpdateWithoutReservationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    approved?: EnumReservationDate_approvedFieldUpdateOperationsInput | $Enums.ReservationDate_approved
  }

  export type ReservationDateUncheckedUpdateManyWithoutReservationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    approved?: EnumReservationDate_approvedFieldUpdateOperationsInput | $Enums.ReservationDate_approved
  }

  export type ReservationFeesUpdateWithoutReservationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    additionalFees?: NullableFloatFieldUpdateOperationsInput | number | null
    feesType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservationFeesUncheckedUpdateWithoutReservationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    additionalFees?: NullableFloatFieldUpdateOperationsInput | number | null
    feesType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservationFeesUncheckedUpdateManyWithoutReservationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    additionalFees?: NullableFloatFieldUpdateOperationsInput | number | null
    feesType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    ext_expires_in?: number | null
  }

  export type ReservationCreateManyUserInput = {
    id?: bigint | number
    eventName: string
    facilityId: bigint | number
    approved?: $Enums.Reservation_approved
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    details?: string | null
    eventId?: string | null
    fees?: number | null
    insurance: boolean
    primaryContact?: string | null
    responsibleParty?: string | null
    doorAccess?: boolean | null
    doorsDetails?: string | null
    name?: string | null
    people?: string | null
    techDetails?: string | null
    techSupport?: boolean | null
    phone?: string | null
    categoryId: bigint | number
    totalHours?: number | null
    inPerson?: boolean
    paid?: boolean
    paymentUrl?: string | null
    paymentLinkID?: string | null
    ticketMade?: boolean
    conflicts?: boolean
  }

  export type SessionCreateManyUserInput = {
    id: string
    sessionToken: string
    expires?: Date | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    ext_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    ext_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    ext_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReservationUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventName?: StringFieldUpdateOperationsInput | string
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
    InsuranceFiles?: InsuranceFilesUpdateManyWithoutReservationNestedInput
    Category?: CategoryUpdateOneRequiredWithoutReservationNestedInput
    Events?: EventsUpdateOneWithoutReservationNestedInput
    Facility?: FacilityUpdateOneRequiredWithoutReservationNestedInput
    ReservationDate?: ReservationDateUpdateManyWithoutReservationNestedInput
    ReservationFees?: ReservationFeesUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventName?: StringFieldUpdateOperationsInput | string
    facilityId?: BigIntFieldUpdateOperationsInput | bigint | number
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
    InsuranceFiles?: InsuranceFilesUncheckedUpdateManyWithoutReservationNestedInput
    ReservationDate?: ReservationDateUncheckedUpdateManyWithoutReservationNestedInput
    ReservationFees?: ReservationFeesUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventName?: StringFieldUpdateOperationsInput | string
    facilityId?: BigIntFieldUpdateOperationsInput | bigint | number
    approved?: EnumReservation_approvedFieldUpdateOperationsInput | $Enums.Reservation_approved
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    insurance?: BoolFieldUpdateOperationsInput | boolean
    primaryContact?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleParty?: NullableStringFieldUpdateOperationsInput | string | null
    doorAccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    doorsDetails?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    people?: NullableStringFieldUpdateOperationsInput | string | null
    techDetails?: NullableStringFieldUpdateOperationsInput | string | null
    techSupport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    totalHours?: NullableFloatFieldUpdateOperationsInput | number | null
    inPerson?: BoolFieldUpdateOperationsInput | boolean
    paid?: BoolFieldUpdateOperationsInput | boolean
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentLinkID?: NullableStringFieldUpdateOperationsInput | string | null
    ticketMade?: BoolFieldUpdateOperationsInput | boolean
    conflicts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventsCountOutputTypeDefaultArgs instead
     */
    export type EventsCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EventsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FacilityCountOutputTypeDefaultArgs instead
     */
    export type FacilityCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FacilityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OptionCountOutputTypeDefaultArgs instead
     */
    export type OptionCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = OptionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservationCountOutputTypeDefaultArgs instead
     */
    export type ReservationCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ReservationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventsDefaultArgs instead
     */
    export type EventsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EventsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FacilityDefaultArgs instead
     */
    export type FacilityArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FacilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InsuranceFilesDefaultArgs instead
     */
    export type InsuranceFilesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = InsuranceFilesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OptionDefaultArgs instead
     */
    export type OptionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = OptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservationDefaultArgs instead
     */
    export type ReservationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ReservationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservationDateDefaultArgs instead
     */
    export type ReservationDateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ReservationDateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservationFeesDefaultArgs instead
     */
    export type ReservationFeesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ReservationFeesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}