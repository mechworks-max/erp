
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model archived_progress
 * 
 */
export type archived_progress = $Result.DefaultSelection<Prisma.$archived_progressPayload>
/**
 * Model attendances
 * 
 */
export type attendances = $Result.DefaultSelection<Prisma.$attendancesPayload>
/**
 * Model bills
 * 
 */
export type bills = $Result.DefaultSelection<Prisma.$billsPayload>
/**
 * Model materials
 * 
 */
export type materials = $Result.DefaultSelection<Prisma.$materialsPayload>
/**
 * Model payment_requests
 * 
 */
export type payment_requests = $Result.DefaultSelection<Prisma.$payment_requestsPayload>
/**
 * Model project_progress
 * 
 */
export type project_progress = $Result.DefaultSelection<Prisma.$project_progressPayload>
/**
 * Model projects
 * 
 */
export type projects = $Result.DefaultSelection<Prisma.$projectsPayload>
/**
 * Model reminders
 * 
 */
export type reminders = $Result.DefaultSelection<Prisma.$remindersPayload>
/**
 * Model sites
 * 
 */
export type sites = $Result.DefaultSelection<Prisma.$sitesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model workers
 * 
 */
export type workers = $Result.DefaultSelection<Prisma.$workersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AttendanceStatus: {
  CHECKED_IN: 'CHECKED_IN',
  CHECKED_OUT: 'CHECKED_OUT',
  AUTO_CHECKOUT: 'AUTO_CHECKOUT',
  REJECTED: 'REJECTED'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]


export const PaymentStatus: {
  PENDING_PM: 'PENDING_PM',
  PENDING_ADMIN: 'PENDING_ADMIN',
  PAID: 'PAID',
  REJECTED: 'REJECTED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Archived_progresses
 * const archived_progresses = await prisma.archived_progress.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Archived_progresses
   * const archived_progresses = await prisma.archived_progress.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.archived_progress`: Exposes CRUD operations for the **archived_progress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Archived_progresses
    * const archived_progresses = await prisma.archived_progress.findMany()
    * ```
    */
  get archived_progress(): Prisma.archived_progressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendances`: Exposes CRUD operations for the **attendances** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendances.findMany()
    * ```
    */
  get attendances(): Prisma.attendancesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bills`: Exposes CRUD operations for the **bills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bills.findMany()
    * ```
    */
  get bills(): Prisma.billsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materials`: Exposes CRUD operations for the **materials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.materials.findMany()
    * ```
    */
  get materials(): Prisma.materialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment_requests`: Exposes CRUD operations for the **payment_requests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payment_requests
    * const payment_requests = await prisma.payment_requests.findMany()
    * ```
    */
  get payment_requests(): Prisma.payment_requestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project_progress`: Exposes CRUD operations for the **project_progress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Project_progresses
    * const project_progresses = await prisma.project_progress.findMany()
    * ```
    */
  get project_progress(): Prisma.project_progressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.projectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reminders`: Exposes CRUD operations for the **reminders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reminders
    * const reminders = await prisma.reminders.findMany()
    * ```
    */
  get reminders(): Prisma.remindersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sites`: Exposes CRUD operations for the **sites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.sites.findMany()
    * ```
    */
  get sites(): Prisma.sitesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workers`: Exposes CRUD operations for the **workers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workers
    * const workers = await prisma.workers.findMany()
    * ```
    */
  get workers(): Prisma.workersDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    archived_progress: 'archived_progress',
    attendances: 'attendances',
    bills: 'bills',
    materials: 'materials',
    payment_requests: 'payment_requests',
    project_progress: 'project_progress',
    projects: 'projects',
    reminders: 'reminders',
    sites: 'sites',
    users: 'users',
    workers: 'workers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "archived_progress" | "attendances" | "bills" | "materials" | "payment_requests" | "project_progress" | "projects" | "reminders" | "sites" | "users" | "workers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      archived_progress: {
        payload: Prisma.$archived_progressPayload<ExtArgs>
        fields: Prisma.archived_progressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.archived_progressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archived_progressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.archived_progressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archived_progressPayload>
          }
          findFirst: {
            args: Prisma.archived_progressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archived_progressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.archived_progressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archived_progressPayload>
          }
          findMany: {
            args: Prisma.archived_progressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archived_progressPayload>[]
          }
          create: {
            args: Prisma.archived_progressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archived_progressPayload>
          }
          createMany: {
            args: Prisma.archived_progressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.archived_progressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archived_progressPayload>[]
          }
          delete: {
            args: Prisma.archived_progressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archived_progressPayload>
          }
          update: {
            args: Prisma.archived_progressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archived_progressPayload>
          }
          deleteMany: {
            args: Prisma.archived_progressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.archived_progressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.archived_progressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archived_progressPayload>[]
          }
          upsert: {
            args: Prisma.archived_progressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archived_progressPayload>
          }
          aggregate: {
            args: Prisma.Archived_progressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArchived_progress>
          }
          groupBy: {
            args: Prisma.archived_progressGroupByArgs<ExtArgs>
            result: $Utils.Optional<Archived_progressGroupByOutputType>[]
          }
          count: {
            args: Prisma.archived_progressCountArgs<ExtArgs>
            result: $Utils.Optional<Archived_progressCountAggregateOutputType> | number
          }
        }
      }
      attendances: {
        payload: Prisma.$attendancesPayload<ExtArgs>
        fields: Prisma.attendancesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.attendancesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.attendancesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancesPayload>
          }
          findFirst: {
            args: Prisma.attendancesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.attendancesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancesPayload>
          }
          findMany: {
            args: Prisma.attendancesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancesPayload>[]
          }
          create: {
            args: Prisma.attendancesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancesPayload>
          }
          createMany: {
            args: Prisma.attendancesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.attendancesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancesPayload>[]
          }
          delete: {
            args: Prisma.attendancesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancesPayload>
          }
          update: {
            args: Prisma.attendancesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancesPayload>
          }
          deleteMany: {
            args: Prisma.attendancesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.attendancesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.attendancesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancesPayload>[]
          }
          upsert: {
            args: Prisma.attendancesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancesPayload>
          }
          aggregate: {
            args: Prisma.AttendancesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendances>
          }
          groupBy: {
            args: Prisma.attendancesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendancesGroupByOutputType>[]
          }
          count: {
            args: Prisma.attendancesCountArgs<ExtArgs>
            result: $Utils.Optional<AttendancesCountAggregateOutputType> | number
          }
        }
      }
      bills: {
        payload: Prisma.$billsPayload<ExtArgs>
        fields: Prisma.billsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.billsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.billsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billsPayload>
          }
          findFirst: {
            args: Prisma.billsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.billsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billsPayload>
          }
          findMany: {
            args: Prisma.billsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billsPayload>[]
          }
          create: {
            args: Prisma.billsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billsPayload>
          }
          createMany: {
            args: Prisma.billsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.billsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billsPayload>[]
          }
          delete: {
            args: Prisma.billsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billsPayload>
          }
          update: {
            args: Prisma.billsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billsPayload>
          }
          deleteMany: {
            args: Prisma.billsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.billsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.billsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billsPayload>[]
          }
          upsert: {
            args: Prisma.billsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billsPayload>
          }
          aggregate: {
            args: Prisma.BillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBills>
          }
          groupBy: {
            args: Prisma.billsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.billsCountArgs<ExtArgs>
            result: $Utils.Optional<BillsCountAggregateOutputType> | number
          }
        }
      }
      materials: {
        payload: Prisma.$materialsPayload<ExtArgs>
        fields: Prisma.materialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.materialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.materialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          findFirst: {
            args: Prisma.materialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.materialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          findMany: {
            args: Prisma.materialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>[]
          }
          create: {
            args: Prisma.materialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          createMany: {
            args: Prisma.materialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.materialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>[]
          }
          delete: {
            args: Prisma.materialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          update: {
            args: Prisma.materialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          deleteMany: {
            args: Prisma.materialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.materialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.materialsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>[]
          }
          upsert: {
            args: Prisma.materialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          aggregate: {
            args: Prisma.MaterialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterials>
          }
          groupBy: {
            args: Prisma.materialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.materialsCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialsCountAggregateOutputType> | number
          }
        }
      }
      payment_requests: {
        payload: Prisma.$payment_requestsPayload<ExtArgs>
        fields: Prisma.payment_requestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.payment_requestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_requestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.payment_requestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_requestsPayload>
          }
          findFirst: {
            args: Prisma.payment_requestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_requestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.payment_requestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_requestsPayload>
          }
          findMany: {
            args: Prisma.payment_requestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_requestsPayload>[]
          }
          create: {
            args: Prisma.payment_requestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_requestsPayload>
          }
          createMany: {
            args: Prisma.payment_requestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.payment_requestsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_requestsPayload>[]
          }
          delete: {
            args: Prisma.payment_requestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_requestsPayload>
          }
          update: {
            args: Prisma.payment_requestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_requestsPayload>
          }
          deleteMany: {
            args: Prisma.payment_requestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.payment_requestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.payment_requestsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_requestsPayload>[]
          }
          upsert: {
            args: Prisma.payment_requestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_requestsPayload>
          }
          aggregate: {
            args: Prisma.Payment_requestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment_requests>
          }
          groupBy: {
            args: Prisma.payment_requestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Payment_requestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.payment_requestsCountArgs<ExtArgs>
            result: $Utils.Optional<Payment_requestsCountAggregateOutputType> | number
          }
        }
      }
      project_progress: {
        payload: Prisma.$project_progressPayload<ExtArgs>
        fields: Prisma.project_progressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.project_progressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_progressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.project_progressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_progressPayload>
          }
          findFirst: {
            args: Prisma.project_progressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_progressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.project_progressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_progressPayload>
          }
          findMany: {
            args: Prisma.project_progressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_progressPayload>[]
          }
          create: {
            args: Prisma.project_progressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_progressPayload>
          }
          createMany: {
            args: Prisma.project_progressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.project_progressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_progressPayload>[]
          }
          delete: {
            args: Prisma.project_progressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_progressPayload>
          }
          update: {
            args: Prisma.project_progressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_progressPayload>
          }
          deleteMany: {
            args: Prisma.project_progressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.project_progressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.project_progressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_progressPayload>[]
          }
          upsert: {
            args: Prisma.project_progressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_progressPayload>
          }
          aggregate: {
            args: Prisma.Project_progressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject_progress>
          }
          groupBy: {
            args: Prisma.project_progressGroupByArgs<ExtArgs>
            result: $Utils.Optional<Project_progressGroupByOutputType>[]
          }
          count: {
            args: Prisma.project_progressCountArgs<ExtArgs>
            result: $Utils.Optional<Project_progressCountAggregateOutputType> | number
          }
        }
      }
      projects: {
        payload: Prisma.$projectsPayload<ExtArgs>
        fields: Prisma.projectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findFirst: {
            args: Prisma.projectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findMany: {
            args: Prisma.projectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          create: {
            args: Prisma.projectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          createMany: {
            args: Prisma.projectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          delete: {
            args: Prisma.projectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          update: {
            args: Prisma.projectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          deleteMany: {
            args: Prisma.projectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          upsert: {
            args: Prisma.projectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.projectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      reminders: {
        payload: Prisma.$remindersPayload<ExtArgs>
        fields: Prisma.remindersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.remindersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.remindersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>
          }
          findFirst: {
            args: Prisma.remindersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.remindersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>
          }
          findMany: {
            args: Prisma.remindersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>[]
          }
          create: {
            args: Prisma.remindersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>
          }
          createMany: {
            args: Prisma.remindersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.remindersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>[]
          }
          delete: {
            args: Prisma.remindersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>
          }
          update: {
            args: Prisma.remindersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>
          }
          deleteMany: {
            args: Prisma.remindersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.remindersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.remindersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>[]
          }
          upsert: {
            args: Prisma.remindersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>
          }
          aggregate: {
            args: Prisma.RemindersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminders>
          }
          groupBy: {
            args: Prisma.remindersGroupByArgs<ExtArgs>
            result: $Utils.Optional<RemindersGroupByOutputType>[]
          }
          count: {
            args: Prisma.remindersCountArgs<ExtArgs>
            result: $Utils.Optional<RemindersCountAggregateOutputType> | number
          }
        }
      }
      sites: {
        payload: Prisma.$sitesPayload<ExtArgs>
        fields: Prisma.sitesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sitesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sitesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload>
          }
          findFirst: {
            args: Prisma.sitesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sitesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload>
          }
          findMany: {
            args: Prisma.sitesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload>[]
          }
          create: {
            args: Prisma.sitesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload>
          }
          createMany: {
            args: Prisma.sitesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sitesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload>[]
          }
          delete: {
            args: Prisma.sitesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload>
          }
          update: {
            args: Prisma.sitesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload>
          }
          deleteMany: {
            args: Prisma.sitesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sitesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sitesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload>[]
          }
          upsert: {
            args: Prisma.sitesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload>
          }
          aggregate: {
            args: Prisma.SitesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSites>
          }
          groupBy: {
            args: Prisma.sitesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SitesGroupByOutputType>[]
          }
          count: {
            args: Prisma.sitesCountArgs<ExtArgs>
            result: $Utils.Optional<SitesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      workers: {
        payload: Prisma.$workersPayload<ExtArgs>
        fields: Prisma.workersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload>
          }
          findFirst: {
            args: Prisma.workersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload>
          }
          findMany: {
            args: Prisma.workersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload>[]
          }
          create: {
            args: Prisma.workersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload>
          }
          createMany: {
            args: Prisma.workersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload>[]
          }
          delete: {
            args: Prisma.workersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload>
          }
          update: {
            args: Prisma.workersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload>
          }
          deleteMany: {
            args: Prisma.workersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload>[]
          }
          upsert: {
            args: Prisma.workersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload>
          }
          aggregate: {
            args: Prisma.WorkersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkers>
          }
          groupBy: {
            args: Prisma.workersGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkersGroupByOutputType>[]
          }
          count: {
            args: Prisma.workersCountArgs<ExtArgs>
            result: $Utils.Optional<WorkersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    archived_progress?: archived_progressOmit
    attendances?: attendancesOmit
    bills?: billsOmit
    materials?: materialsOmit
    payment_requests?: payment_requestsOmit
    project_progress?: project_progressOmit
    projects?: projectsOmit
    reminders?: remindersOmit
    sites?: sitesOmit
    users?: usersOmit
    workers?: workersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type Payment_requestsCountOutputType
   */

  export type Payment_requestsCountOutputType = {
    materials: number
  }

  export type Payment_requestsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | Payment_requestsCountOutputTypeCountMaterialsArgs
  }

  // Custom InputTypes
  /**
   * Payment_requestsCountOutputType without action
   */
  export type Payment_requestsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_requestsCountOutputType
     */
    select?: Payment_requestsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Payment_requestsCountOutputType without action
   */
  export type Payment_requestsCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: materialsWhereInput
  }


  /**
   * Count Type ProjectsCountOutputType
   */

  export type ProjectsCountOutputType = {
    archived_progress: number
    bills: number
    payment_requests: number
    project_progress: number
    reminders: number
    users: number
  }

  export type ProjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archived_progress?: boolean | ProjectsCountOutputTypeCountArchived_progressArgs
    bills?: boolean | ProjectsCountOutputTypeCountBillsArgs
    payment_requests?: boolean | ProjectsCountOutputTypeCountPayment_requestsArgs
    project_progress?: boolean | ProjectsCountOutputTypeCountProject_progressArgs
    reminders?: boolean | ProjectsCountOutputTypeCountRemindersArgs
    users?: boolean | ProjectsCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectsCountOutputType
     */
    select?: ProjectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountArchived_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: archived_progressWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: billsWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountPayment_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_requestsWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountProject_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_progressWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: remindersWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type SitesCountOutputType
   */

  export type SitesCountOutputType = {
    attendances: number
    users_users_assignedSiteIdTosites: number
  }

  export type SitesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | SitesCountOutputTypeCountAttendancesArgs
    users_users_assignedSiteIdTosites?: boolean | SitesCountOutputTypeCountUsers_users_assignedSiteIdTositesArgs
  }

  // Custom InputTypes
  /**
   * SitesCountOutputType without action
   */
  export type SitesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitesCountOutputType
     */
    select?: SitesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SitesCountOutputType without action
   */
  export type SitesCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendancesWhereInput
  }

  /**
   * SitesCountOutputType without action
   */
  export type SitesCountOutputTypeCountUsers_users_assignedSiteIdTositesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    attendances: number
    bills: number
    payment_requests_payment_requests_pm_idTousers: number
    payment_requests_payment_requests_supervisor_idTousers: number
    project_progress: number
    sites_sites_createdByTousers: number
    projects: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | UsersCountOutputTypeCountAttendancesArgs
    bills?: boolean | UsersCountOutputTypeCountBillsArgs
    payment_requests_payment_requests_pm_idTousers?: boolean | UsersCountOutputTypeCountPayment_requests_payment_requests_pm_idTousersArgs
    payment_requests_payment_requests_supervisor_idTousers?: boolean | UsersCountOutputTypeCountPayment_requests_payment_requests_supervisor_idTousersArgs
    project_progress?: boolean | UsersCountOutputTypeCountProject_progressArgs
    sites_sites_createdByTousers?: boolean | UsersCountOutputTypeCountSites_sites_createdByTousersArgs
    projects?: boolean | UsersCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendancesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: billsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPayment_requests_payment_requests_pm_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_requestsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPayment_requests_payment_requests_supervisor_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_requestsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProject_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_progressWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSites_sites_createdByTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sitesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
  }


  /**
   * Count Type WorkersCountOutputType
   */

  export type WorkersCountOutputType = {
    materials: number
    reminders: number
  }

  export type WorkersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | WorkersCountOutputTypeCountMaterialsArgs
    reminders?: boolean | WorkersCountOutputTypeCountRemindersArgs
  }

  // Custom InputTypes
  /**
   * WorkersCountOutputType without action
   */
  export type WorkersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersCountOutputType
     */
    select?: WorkersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkersCountOutputType without action
   */
  export type WorkersCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: materialsWhereInput
  }

  /**
   * WorkersCountOutputType without action
   */
  export type WorkersCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: remindersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model archived_progress
   */

  export type AggregateArchived_progress = {
    _count: Archived_progressCountAggregateOutputType | null
    _avg: Archived_progressAvgAggregateOutputType | null
    _sum: Archived_progressSumAggregateOutputType | null
    _min: Archived_progressMinAggregateOutputType | null
    _max: Archived_progressMaxAggregateOutputType | null
  }

  export type Archived_progressAvgAggregateOutputType = {
    id: number | null
    percentage: number | null
    project_id: number | null
  }

  export type Archived_progressSumAggregateOutputType = {
    id: number | null
    percentage: number | null
    project_id: number | null
  }

  export type Archived_progressMinAggregateOutputType = {
    id: number | null
    percentage: number | null
    date: string | null
    notes: string | null
    project_id: number | null
    user_name: string | null
    user_role: string | null
    original_created_at: Date | null
    archived_at: Date | null
  }

  export type Archived_progressMaxAggregateOutputType = {
    id: number | null
    percentage: number | null
    date: string | null
    notes: string | null
    project_id: number | null
    user_name: string | null
    user_role: string | null
    original_created_at: Date | null
    archived_at: Date | null
  }

  export type Archived_progressCountAggregateOutputType = {
    id: number
    percentage: number
    date: number
    notes: number
    project_id: number
    user_name: number
    user_role: number
    original_created_at: number
    archived_at: number
    _all: number
  }


  export type Archived_progressAvgAggregateInputType = {
    id?: true
    percentage?: true
    project_id?: true
  }

  export type Archived_progressSumAggregateInputType = {
    id?: true
    percentage?: true
    project_id?: true
  }

  export type Archived_progressMinAggregateInputType = {
    id?: true
    percentage?: true
    date?: true
    notes?: true
    project_id?: true
    user_name?: true
    user_role?: true
    original_created_at?: true
    archived_at?: true
  }

  export type Archived_progressMaxAggregateInputType = {
    id?: true
    percentage?: true
    date?: true
    notes?: true
    project_id?: true
    user_name?: true
    user_role?: true
    original_created_at?: true
    archived_at?: true
  }

  export type Archived_progressCountAggregateInputType = {
    id?: true
    percentage?: true
    date?: true
    notes?: true
    project_id?: true
    user_name?: true
    user_role?: true
    original_created_at?: true
    archived_at?: true
    _all?: true
  }

  export type Archived_progressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which archived_progress to aggregate.
     */
    where?: archived_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archived_progresses to fetch.
     */
    orderBy?: archived_progressOrderByWithRelationInput | archived_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: archived_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archived_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archived_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned archived_progresses
    **/
    _count?: true | Archived_progressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Archived_progressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Archived_progressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Archived_progressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Archived_progressMaxAggregateInputType
  }

  export type GetArchived_progressAggregateType<T extends Archived_progressAggregateArgs> = {
        [P in keyof T & keyof AggregateArchived_progress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchived_progress[P]>
      : GetScalarType<T[P], AggregateArchived_progress[P]>
  }




  export type archived_progressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: archived_progressWhereInput
    orderBy?: archived_progressOrderByWithAggregationInput | archived_progressOrderByWithAggregationInput[]
    by: Archived_progressScalarFieldEnum[] | Archived_progressScalarFieldEnum
    having?: archived_progressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Archived_progressCountAggregateInputType | true
    _avg?: Archived_progressAvgAggregateInputType
    _sum?: Archived_progressSumAggregateInputType
    _min?: Archived_progressMinAggregateInputType
    _max?: Archived_progressMaxAggregateInputType
  }

  export type Archived_progressGroupByOutputType = {
    id: number
    percentage: number
    date: string
    notes: string | null
    project_id: number
    user_name: string
    user_role: string
    original_created_at: Date
    archived_at: Date
    _count: Archived_progressCountAggregateOutputType | null
    _avg: Archived_progressAvgAggregateOutputType | null
    _sum: Archived_progressSumAggregateOutputType | null
    _min: Archived_progressMinAggregateOutputType | null
    _max: Archived_progressMaxAggregateOutputType | null
  }

  type GetArchived_progressGroupByPayload<T extends archived_progressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Archived_progressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Archived_progressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Archived_progressGroupByOutputType[P]>
            : GetScalarType<T[P], Archived_progressGroupByOutputType[P]>
        }
      >
    >


  export type archived_progressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    percentage?: boolean
    date?: boolean
    notes?: boolean
    project_id?: boolean
    user_name?: boolean
    user_role?: boolean
    original_created_at?: boolean
    archived_at?: boolean
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["archived_progress"]>

  export type archived_progressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    percentage?: boolean
    date?: boolean
    notes?: boolean
    project_id?: boolean
    user_name?: boolean
    user_role?: boolean
    original_created_at?: boolean
    archived_at?: boolean
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["archived_progress"]>

  export type archived_progressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    percentage?: boolean
    date?: boolean
    notes?: boolean
    project_id?: boolean
    user_name?: boolean
    user_role?: boolean
    original_created_at?: boolean
    archived_at?: boolean
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["archived_progress"]>

  export type archived_progressSelectScalar = {
    id?: boolean
    percentage?: boolean
    date?: boolean
    notes?: boolean
    project_id?: boolean
    user_name?: boolean
    user_role?: boolean
    original_created_at?: boolean
    archived_at?: boolean
  }

  export type archived_progressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "percentage" | "date" | "notes" | "project_id" | "user_name" | "user_role" | "original_created_at" | "archived_at", ExtArgs["result"]["archived_progress"]>
  export type archived_progressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }
  export type archived_progressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }
  export type archived_progressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }

  export type $archived_progressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "archived_progress"
    objects: {
      projects: Prisma.$projectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      percentage: number
      date: string
      notes: string | null
      project_id: number
      user_name: string
      user_role: string
      original_created_at: Date
      archived_at: Date
    }, ExtArgs["result"]["archived_progress"]>
    composites: {}
  }

  type archived_progressGetPayload<S extends boolean | null | undefined | archived_progressDefaultArgs> = $Result.GetResult<Prisma.$archived_progressPayload, S>

  type archived_progressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<archived_progressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Archived_progressCountAggregateInputType | true
    }

  export interface archived_progressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['archived_progress'], meta: { name: 'archived_progress' } }
    /**
     * Find zero or one Archived_progress that matches the filter.
     * @param {archived_progressFindUniqueArgs} args - Arguments to find a Archived_progress
     * @example
     * // Get one Archived_progress
     * const archived_progress = await prisma.archived_progress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends archived_progressFindUniqueArgs>(args: SelectSubset<T, archived_progressFindUniqueArgs<ExtArgs>>): Prisma__archived_progressClient<$Result.GetResult<Prisma.$archived_progressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Archived_progress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {archived_progressFindUniqueOrThrowArgs} args - Arguments to find a Archived_progress
     * @example
     * // Get one Archived_progress
     * const archived_progress = await prisma.archived_progress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends archived_progressFindUniqueOrThrowArgs>(args: SelectSubset<T, archived_progressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__archived_progressClient<$Result.GetResult<Prisma.$archived_progressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archived_progress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archived_progressFindFirstArgs} args - Arguments to find a Archived_progress
     * @example
     * // Get one Archived_progress
     * const archived_progress = await prisma.archived_progress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends archived_progressFindFirstArgs>(args?: SelectSubset<T, archived_progressFindFirstArgs<ExtArgs>>): Prisma__archived_progressClient<$Result.GetResult<Prisma.$archived_progressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archived_progress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archived_progressFindFirstOrThrowArgs} args - Arguments to find a Archived_progress
     * @example
     * // Get one Archived_progress
     * const archived_progress = await prisma.archived_progress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends archived_progressFindFirstOrThrowArgs>(args?: SelectSubset<T, archived_progressFindFirstOrThrowArgs<ExtArgs>>): Prisma__archived_progressClient<$Result.GetResult<Prisma.$archived_progressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Archived_progresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archived_progressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Archived_progresses
     * const archived_progresses = await prisma.archived_progress.findMany()
     * 
     * // Get first 10 Archived_progresses
     * const archived_progresses = await prisma.archived_progress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const archived_progressWithIdOnly = await prisma.archived_progress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends archived_progressFindManyArgs>(args?: SelectSubset<T, archived_progressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archived_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Archived_progress.
     * @param {archived_progressCreateArgs} args - Arguments to create a Archived_progress.
     * @example
     * // Create one Archived_progress
     * const Archived_progress = await prisma.archived_progress.create({
     *   data: {
     *     // ... data to create a Archived_progress
     *   }
     * })
     * 
     */
    create<T extends archived_progressCreateArgs>(args: SelectSubset<T, archived_progressCreateArgs<ExtArgs>>): Prisma__archived_progressClient<$Result.GetResult<Prisma.$archived_progressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Archived_progresses.
     * @param {archived_progressCreateManyArgs} args - Arguments to create many Archived_progresses.
     * @example
     * // Create many Archived_progresses
     * const archived_progress = await prisma.archived_progress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends archived_progressCreateManyArgs>(args?: SelectSubset<T, archived_progressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Archived_progresses and returns the data saved in the database.
     * @param {archived_progressCreateManyAndReturnArgs} args - Arguments to create many Archived_progresses.
     * @example
     * // Create many Archived_progresses
     * const archived_progress = await prisma.archived_progress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Archived_progresses and only return the `id`
     * const archived_progressWithIdOnly = await prisma.archived_progress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends archived_progressCreateManyAndReturnArgs>(args?: SelectSubset<T, archived_progressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archived_progressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Archived_progress.
     * @param {archived_progressDeleteArgs} args - Arguments to delete one Archived_progress.
     * @example
     * // Delete one Archived_progress
     * const Archived_progress = await prisma.archived_progress.delete({
     *   where: {
     *     // ... filter to delete one Archived_progress
     *   }
     * })
     * 
     */
    delete<T extends archived_progressDeleteArgs>(args: SelectSubset<T, archived_progressDeleteArgs<ExtArgs>>): Prisma__archived_progressClient<$Result.GetResult<Prisma.$archived_progressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Archived_progress.
     * @param {archived_progressUpdateArgs} args - Arguments to update one Archived_progress.
     * @example
     * // Update one Archived_progress
     * const archived_progress = await prisma.archived_progress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends archived_progressUpdateArgs>(args: SelectSubset<T, archived_progressUpdateArgs<ExtArgs>>): Prisma__archived_progressClient<$Result.GetResult<Prisma.$archived_progressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Archived_progresses.
     * @param {archived_progressDeleteManyArgs} args - Arguments to filter Archived_progresses to delete.
     * @example
     * // Delete a few Archived_progresses
     * const { count } = await prisma.archived_progress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends archived_progressDeleteManyArgs>(args?: SelectSubset<T, archived_progressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archived_progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archived_progressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Archived_progresses
     * const archived_progress = await prisma.archived_progress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends archived_progressUpdateManyArgs>(args: SelectSubset<T, archived_progressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archived_progresses and returns the data updated in the database.
     * @param {archived_progressUpdateManyAndReturnArgs} args - Arguments to update many Archived_progresses.
     * @example
     * // Update many Archived_progresses
     * const archived_progress = await prisma.archived_progress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Archived_progresses and only return the `id`
     * const archived_progressWithIdOnly = await prisma.archived_progress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends archived_progressUpdateManyAndReturnArgs>(args: SelectSubset<T, archived_progressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archived_progressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Archived_progress.
     * @param {archived_progressUpsertArgs} args - Arguments to update or create a Archived_progress.
     * @example
     * // Update or create a Archived_progress
     * const archived_progress = await prisma.archived_progress.upsert({
     *   create: {
     *     // ... data to create a Archived_progress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Archived_progress we want to update
     *   }
     * })
     */
    upsert<T extends archived_progressUpsertArgs>(args: SelectSubset<T, archived_progressUpsertArgs<ExtArgs>>): Prisma__archived_progressClient<$Result.GetResult<Prisma.$archived_progressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Archived_progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archived_progressCountArgs} args - Arguments to filter Archived_progresses to count.
     * @example
     * // Count the number of Archived_progresses
     * const count = await prisma.archived_progress.count({
     *   where: {
     *     // ... the filter for the Archived_progresses we want to count
     *   }
     * })
    **/
    count<T extends archived_progressCountArgs>(
      args?: Subset<T, archived_progressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Archived_progressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Archived_progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Archived_progressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Archived_progressAggregateArgs>(args: Subset<T, Archived_progressAggregateArgs>): Prisma.PrismaPromise<GetArchived_progressAggregateType<T>>

    /**
     * Group by Archived_progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archived_progressGroupByArgs} args - Group by arguments.
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
      T extends archived_progressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: archived_progressGroupByArgs['orderBy'] }
        : { orderBy?: archived_progressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, archived_progressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchived_progressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the archived_progress model
   */
  readonly fields: archived_progressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for archived_progress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__archived_progressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends projectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectsDefaultArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the archived_progress model
   */
  interface archived_progressFieldRefs {
    readonly id: FieldRef<"archived_progress", 'Int'>
    readonly percentage: FieldRef<"archived_progress", 'Int'>
    readonly date: FieldRef<"archived_progress", 'String'>
    readonly notes: FieldRef<"archived_progress", 'String'>
    readonly project_id: FieldRef<"archived_progress", 'Int'>
    readonly user_name: FieldRef<"archived_progress", 'String'>
    readonly user_role: FieldRef<"archived_progress", 'String'>
    readonly original_created_at: FieldRef<"archived_progress", 'DateTime'>
    readonly archived_at: FieldRef<"archived_progress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * archived_progress findUnique
   */
  export type archived_progressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archived_progress
     */
    select?: archived_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archived_progress
     */
    omit?: archived_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archived_progressInclude<ExtArgs> | null
    /**
     * Filter, which archived_progress to fetch.
     */
    where: archived_progressWhereUniqueInput
  }

  /**
   * archived_progress findUniqueOrThrow
   */
  export type archived_progressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archived_progress
     */
    select?: archived_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archived_progress
     */
    omit?: archived_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archived_progressInclude<ExtArgs> | null
    /**
     * Filter, which archived_progress to fetch.
     */
    where: archived_progressWhereUniqueInput
  }

  /**
   * archived_progress findFirst
   */
  export type archived_progressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archived_progress
     */
    select?: archived_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archived_progress
     */
    omit?: archived_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archived_progressInclude<ExtArgs> | null
    /**
     * Filter, which archived_progress to fetch.
     */
    where?: archived_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archived_progresses to fetch.
     */
    orderBy?: archived_progressOrderByWithRelationInput | archived_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for archived_progresses.
     */
    cursor?: archived_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archived_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archived_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of archived_progresses.
     */
    distinct?: Archived_progressScalarFieldEnum | Archived_progressScalarFieldEnum[]
  }

  /**
   * archived_progress findFirstOrThrow
   */
  export type archived_progressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archived_progress
     */
    select?: archived_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archived_progress
     */
    omit?: archived_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archived_progressInclude<ExtArgs> | null
    /**
     * Filter, which archived_progress to fetch.
     */
    where?: archived_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archived_progresses to fetch.
     */
    orderBy?: archived_progressOrderByWithRelationInput | archived_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for archived_progresses.
     */
    cursor?: archived_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archived_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archived_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of archived_progresses.
     */
    distinct?: Archived_progressScalarFieldEnum | Archived_progressScalarFieldEnum[]
  }

  /**
   * archived_progress findMany
   */
  export type archived_progressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archived_progress
     */
    select?: archived_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archived_progress
     */
    omit?: archived_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archived_progressInclude<ExtArgs> | null
    /**
     * Filter, which archived_progresses to fetch.
     */
    where?: archived_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archived_progresses to fetch.
     */
    orderBy?: archived_progressOrderByWithRelationInput | archived_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing archived_progresses.
     */
    cursor?: archived_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archived_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archived_progresses.
     */
    skip?: number
    distinct?: Archived_progressScalarFieldEnum | Archived_progressScalarFieldEnum[]
  }

  /**
   * archived_progress create
   */
  export type archived_progressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archived_progress
     */
    select?: archived_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archived_progress
     */
    omit?: archived_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archived_progressInclude<ExtArgs> | null
    /**
     * The data needed to create a archived_progress.
     */
    data: XOR<archived_progressCreateInput, archived_progressUncheckedCreateInput>
  }

  /**
   * archived_progress createMany
   */
  export type archived_progressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many archived_progresses.
     */
    data: archived_progressCreateManyInput | archived_progressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * archived_progress createManyAndReturn
   */
  export type archived_progressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archived_progress
     */
    select?: archived_progressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the archived_progress
     */
    omit?: archived_progressOmit<ExtArgs> | null
    /**
     * The data used to create many archived_progresses.
     */
    data: archived_progressCreateManyInput | archived_progressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archived_progressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * archived_progress update
   */
  export type archived_progressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archived_progress
     */
    select?: archived_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archived_progress
     */
    omit?: archived_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archived_progressInclude<ExtArgs> | null
    /**
     * The data needed to update a archived_progress.
     */
    data: XOR<archived_progressUpdateInput, archived_progressUncheckedUpdateInput>
    /**
     * Choose, which archived_progress to update.
     */
    where: archived_progressWhereUniqueInput
  }

  /**
   * archived_progress updateMany
   */
  export type archived_progressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update archived_progresses.
     */
    data: XOR<archived_progressUpdateManyMutationInput, archived_progressUncheckedUpdateManyInput>
    /**
     * Filter which archived_progresses to update
     */
    where?: archived_progressWhereInput
    /**
     * Limit how many archived_progresses to update.
     */
    limit?: number
  }

  /**
   * archived_progress updateManyAndReturn
   */
  export type archived_progressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archived_progress
     */
    select?: archived_progressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the archived_progress
     */
    omit?: archived_progressOmit<ExtArgs> | null
    /**
     * The data used to update archived_progresses.
     */
    data: XOR<archived_progressUpdateManyMutationInput, archived_progressUncheckedUpdateManyInput>
    /**
     * Filter which archived_progresses to update
     */
    where?: archived_progressWhereInput
    /**
     * Limit how many archived_progresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archived_progressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * archived_progress upsert
   */
  export type archived_progressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archived_progress
     */
    select?: archived_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archived_progress
     */
    omit?: archived_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archived_progressInclude<ExtArgs> | null
    /**
     * The filter to search for the archived_progress to update in case it exists.
     */
    where: archived_progressWhereUniqueInput
    /**
     * In case the archived_progress found by the `where` argument doesn't exist, create a new archived_progress with this data.
     */
    create: XOR<archived_progressCreateInput, archived_progressUncheckedCreateInput>
    /**
     * In case the archived_progress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<archived_progressUpdateInput, archived_progressUncheckedUpdateInput>
  }

  /**
   * archived_progress delete
   */
  export type archived_progressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archived_progress
     */
    select?: archived_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archived_progress
     */
    omit?: archived_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archived_progressInclude<ExtArgs> | null
    /**
     * Filter which archived_progress to delete.
     */
    where: archived_progressWhereUniqueInput
  }

  /**
   * archived_progress deleteMany
   */
  export type archived_progressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which archived_progresses to delete
     */
    where?: archived_progressWhereInput
    /**
     * Limit how many archived_progresses to delete.
     */
    limit?: number
  }

  /**
   * archived_progress without action
   */
  export type archived_progressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archived_progress
     */
    select?: archived_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archived_progress
     */
    omit?: archived_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archived_progressInclude<ExtArgs> | null
  }


  /**
   * Model attendances
   */

  export type AggregateAttendances = {
    _count: AttendancesCountAggregateOutputType | null
    _avg: AttendancesAvgAggregateOutputType | null
    _sum: AttendancesSumAggregateOutputType | null
    _min: AttendancesMinAggregateOutputType | null
    _max: AttendancesMaxAggregateOutputType | null
  }

  export type AttendancesAvgAggregateOutputType = {
    userId: number | null
    checkInLatitude: number | null
    checkInLongitude: number | null
    checkOutLatitude: number | null
    checkOutLongitude: number | null
    checkInAccuracy: number | null
    checkOutAccuracy: number | null
    durationMinutes: number | null
  }

  export type AttendancesSumAggregateOutputType = {
    userId: number | null
    checkInLatitude: number | null
    checkInLongitude: number | null
    checkOutLatitude: number | null
    checkOutLongitude: number | null
    checkInAccuracy: number | null
    checkOutAccuracy: number | null
    durationMinutes: number | null
  }

  export type AttendancesMinAggregateOutputType = {
    id: string | null
    userId: number | null
    siteId: string | null
    checkInTime: Date | null
    checkOutTime: Date | null
    checkInLatitude: number | null
    checkInLongitude: number | null
    checkOutLatitude: number | null
    checkOutLongitude: number | null
    checkInAccuracy: number | null
    checkOutAccuracy: number | null
    durationMinutes: number | null
    status: $Enums.AttendanceStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendancesMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    siteId: string | null
    checkInTime: Date | null
    checkOutTime: Date | null
    checkInLatitude: number | null
    checkInLongitude: number | null
    checkOutLatitude: number | null
    checkOutLongitude: number | null
    checkInAccuracy: number | null
    checkOutAccuracy: number | null
    durationMinutes: number | null
    status: $Enums.AttendanceStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendancesCountAggregateOutputType = {
    id: number
    userId: number
    siteId: number
    checkInTime: number
    checkOutTime: number
    checkInLatitude: number
    checkInLongitude: number
    checkOutLatitude: number
    checkOutLongitude: number
    checkInAccuracy: number
    checkOutAccuracy: number
    durationMinutes: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendancesAvgAggregateInputType = {
    userId?: true
    checkInLatitude?: true
    checkInLongitude?: true
    checkOutLatitude?: true
    checkOutLongitude?: true
    checkInAccuracy?: true
    checkOutAccuracy?: true
    durationMinutes?: true
  }

  export type AttendancesSumAggregateInputType = {
    userId?: true
    checkInLatitude?: true
    checkInLongitude?: true
    checkOutLatitude?: true
    checkOutLongitude?: true
    checkInAccuracy?: true
    checkOutAccuracy?: true
    durationMinutes?: true
  }

  export type AttendancesMinAggregateInputType = {
    id?: true
    userId?: true
    siteId?: true
    checkInTime?: true
    checkOutTime?: true
    checkInLatitude?: true
    checkInLongitude?: true
    checkOutLatitude?: true
    checkOutLongitude?: true
    checkInAccuracy?: true
    checkOutAccuracy?: true
    durationMinutes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendancesMaxAggregateInputType = {
    id?: true
    userId?: true
    siteId?: true
    checkInTime?: true
    checkOutTime?: true
    checkInLatitude?: true
    checkInLongitude?: true
    checkOutLatitude?: true
    checkOutLongitude?: true
    checkInAccuracy?: true
    checkOutAccuracy?: true
    durationMinutes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendancesCountAggregateInputType = {
    id?: true
    userId?: true
    siteId?: true
    checkInTime?: true
    checkOutTime?: true
    checkInLatitude?: true
    checkInLongitude?: true
    checkOutLatitude?: true
    checkOutLongitude?: true
    checkInAccuracy?: true
    checkOutAccuracy?: true
    durationMinutes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendancesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendances to aggregate.
     */
    where?: attendancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendancesOrderByWithRelationInput | attendancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: attendancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned attendances
    **/
    _count?: true | AttendancesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendancesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendancesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendancesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendancesMaxAggregateInputType
  }

  export type GetAttendancesAggregateType<T extends AttendancesAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendances]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendances[P]>
      : GetScalarType<T[P], AggregateAttendances[P]>
  }




  export type attendancesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendancesWhereInput
    orderBy?: attendancesOrderByWithAggregationInput | attendancesOrderByWithAggregationInput[]
    by: AttendancesScalarFieldEnum[] | AttendancesScalarFieldEnum
    having?: attendancesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendancesCountAggregateInputType | true
    _avg?: AttendancesAvgAggregateInputType
    _sum?: AttendancesSumAggregateInputType
    _min?: AttendancesMinAggregateInputType
    _max?: AttendancesMaxAggregateInputType
  }

  export type AttendancesGroupByOutputType = {
    id: string
    userId: number
    siteId: string
    checkInTime: Date
    checkOutTime: Date | null
    checkInLatitude: number
    checkInLongitude: number
    checkOutLatitude: number | null
    checkOutLongitude: number | null
    checkInAccuracy: number
    checkOutAccuracy: number | null
    durationMinutes: number | null
    status: $Enums.AttendanceStatus
    createdAt: Date
    updatedAt: Date
    _count: AttendancesCountAggregateOutputType | null
    _avg: AttendancesAvgAggregateOutputType | null
    _sum: AttendancesSumAggregateOutputType | null
    _min: AttendancesMinAggregateOutputType | null
    _max: AttendancesMaxAggregateOutputType | null
  }

  type GetAttendancesGroupByPayload<T extends attendancesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendancesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendancesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendancesGroupByOutputType[P]>
            : GetScalarType<T[P], AttendancesGroupByOutputType[P]>
        }
      >
    >


  export type attendancesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    siteId?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
    checkInLatitude?: boolean
    checkInLongitude?: boolean
    checkOutLatitude?: boolean
    checkOutLongitude?: boolean
    checkInAccuracy?: boolean
    checkOutAccuracy?: boolean
    durationMinutes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sites?: boolean | sitesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendances"]>

  export type attendancesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    siteId?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
    checkInLatitude?: boolean
    checkInLongitude?: boolean
    checkOutLatitude?: boolean
    checkOutLongitude?: boolean
    checkInAccuracy?: boolean
    checkOutAccuracy?: boolean
    durationMinutes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sites?: boolean | sitesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendances"]>

  export type attendancesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    siteId?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
    checkInLatitude?: boolean
    checkInLongitude?: boolean
    checkOutLatitude?: boolean
    checkOutLongitude?: boolean
    checkInAccuracy?: boolean
    checkOutAccuracy?: boolean
    durationMinutes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sites?: boolean | sitesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendances"]>

  export type attendancesSelectScalar = {
    id?: boolean
    userId?: boolean
    siteId?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
    checkInLatitude?: boolean
    checkInLongitude?: boolean
    checkOutLatitude?: boolean
    checkOutLongitude?: boolean
    checkInAccuracy?: boolean
    checkOutAccuracy?: boolean
    durationMinutes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type attendancesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "siteId" | "checkInTime" | "checkOutTime" | "checkInLatitude" | "checkInLongitude" | "checkOutLatitude" | "checkOutLongitude" | "checkInAccuracy" | "checkOutAccuracy" | "durationMinutes" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["attendances"]>
  export type attendancesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sites?: boolean | sitesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type attendancesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sites?: boolean | sitesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type attendancesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sites?: boolean | sitesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $attendancesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "attendances"
    objects: {
      sites: Prisma.$sitesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      siteId: string
      checkInTime: Date
      checkOutTime: Date | null
      checkInLatitude: number
      checkInLongitude: number
      checkOutLatitude: number | null
      checkOutLongitude: number | null
      checkInAccuracy: number
      checkOutAccuracy: number | null
      durationMinutes: number | null
      status: $Enums.AttendanceStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendances"]>
    composites: {}
  }

  type attendancesGetPayload<S extends boolean | null | undefined | attendancesDefaultArgs> = $Result.GetResult<Prisma.$attendancesPayload, S>

  type attendancesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<attendancesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendancesCountAggregateInputType | true
    }

  export interface attendancesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['attendances'], meta: { name: 'attendances' } }
    /**
     * Find zero or one Attendances that matches the filter.
     * @param {attendancesFindUniqueArgs} args - Arguments to find a Attendances
     * @example
     * // Get one Attendances
     * const attendances = await prisma.attendances.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends attendancesFindUniqueArgs>(args: SelectSubset<T, attendancesFindUniqueArgs<ExtArgs>>): Prisma__attendancesClient<$Result.GetResult<Prisma.$attendancesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendances that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {attendancesFindUniqueOrThrowArgs} args - Arguments to find a Attendances
     * @example
     * // Get one Attendances
     * const attendances = await prisma.attendances.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends attendancesFindUniqueOrThrowArgs>(args: SelectSubset<T, attendancesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__attendancesClient<$Result.GetResult<Prisma.$attendancesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendancesFindFirstArgs} args - Arguments to find a Attendances
     * @example
     * // Get one Attendances
     * const attendances = await prisma.attendances.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends attendancesFindFirstArgs>(args?: SelectSubset<T, attendancesFindFirstArgs<ExtArgs>>): Prisma__attendancesClient<$Result.GetResult<Prisma.$attendancesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendances that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendancesFindFirstOrThrowArgs} args - Arguments to find a Attendances
     * @example
     * // Get one Attendances
     * const attendances = await prisma.attendances.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends attendancesFindFirstOrThrowArgs>(args?: SelectSubset<T, attendancesFindFirstOrThrowArgs<ExtArgs>>): Prisma__attendancesClient<$Result.GetResult<Prisma.$attendancesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendancesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendances.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendances.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendancesWithIdOnly = await prisma.attendances.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends attendancesFindManyArgs>(args?: SelectSubset<T, attendancesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendances.
     * @param {attendancesCreateArgs} args - Arguments to create a Attendances.
     * @example
     * // Create one Attendances
     * const Attendances = await prisma.attendances.create({
     *   data: {
     *     // ... data to create a Attendances
     *   }
     * })
     * 
     */
    create<T extends attendancesCreateArgs>(args: SelectSubset<T, attendancesCreateArgs<ExtArgs>>): Prisma__attendancesClient<$Result.GetResult<Prisma.$attendancesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {attendancesCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendances = await prisma.attendances.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends attendancesCreateManyArgs>(args?: SelectSubset<T, attendancesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {attendancesCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendances = await prisma.attendances.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendancesWithIdOnly = await prisma.attendances.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends attendancesCreateManyAndReturnArgs>(args?: SelectSubset<T, attendancesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendances.
     * @param {attendancesDeleteArgs} args - Arguments to delete one Attendances.
     * @example
     * // Delete one Attendances
     * const Attendances = await prisma.attendances.delete({
     *   where: {
     *     // ... filter to delete one Attendances
     *   }
     * })
     * 
     */
    delete<T extends attendancesDeleteArgs>(args: SelectSubset<T, attendancesDeleteArgs<ExtArgs>>): Prisma__attendancesClient<$Result.GetResult<Prisma.$attendancesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendances.
     * @param {attendancesUpdateArgs} args - Arguments to update one Attendances.
     * @example
     * // Update one Attendances
     * const attendances = await prisma.attendances.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends attendancesUpdateArgs>(args: SelectSubset<T, attendancesUpdateArgs<ExtArgs>>): Prisma__attendancesClient<$Result.GetResult<Prisma.$attendancesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {attendancesDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendances.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends attendancesDeleteManyArgs>(args?: SelectSubset<T, attendancesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendancesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendances = await prisma.attendances.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends attendancesUpdateManyArgs>(args: SelectSubset<T, attendancesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {attendancesUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendances = await prisma.attendances.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendancesWithIdOnly = await prisma.attendances.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends attendancesUpdateManyAndReturnArgs>(args: SelectSubset<T, attendancesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendances.
     * @param {attendancesUpsertArgs} args - Arguments to update or create a Attendances.
     * @example
     * // Update or create a Attendances
     * const attendances = await prisma.attendances.upsert({
     *   create: {
     *     // ... data to create a Attendances
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendances we want to update
     *   }
     * })
     */
    upsert<T extends attendancesUpsertArgs>(args: SelectSubset<T, attendancesUpsertArgs<ExtArgs>>): Prisma__attendancesClient<$Result.GetResult<Prisma.$attendancesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendancesCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendances.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends attendancesCountArgs>(
      args?: Subset<T, attendancesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendancesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendancesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendancesAggregateArgs>(args: Subset<T, AttendancesAggregateArgs>): Prisma.PrismaPromise<GetAttendancesAggregateType<T>>

    /**
     * Group by Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendancesGroupByArgs} args - Group by arguments.
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
      T extends attendancesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: attendancesGroupByArgs['orderBy'] }
        : { orderBy?: attendancesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, attendancesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendancesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the attendances model
   */
  readonly fields: attendancesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for attendances.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__attendancesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sites<T extends sitesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sitesDefaultArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the attendances model
   */
  interface attendancesFieldRefs {
    readonly id: FieldRef<"attendances", 'String'>
    readonly userId: FieldRef<"attendances", 'Int'>
    readonly siteId: FieldRef<"attendances", 'String'>
    readonly checkInTime: FieldRef<"attendances", 'DateTime'>
    readonly checkOutTime: FieldRef<"attendances", 'DateTime'>
    readonly checkInLatitude: FieldRef<"attendances", 'Float'>
    readonly checkInLongitude: FieldRef<"attendances", 'Float'>
    readonly checkOutLatitude: FieldRef<"attendances", 'Float'>
    readonly checkOutLongitude: FieldRef<"attendances", 'Float'>
    readonly checkInAccuracy: FieldRef<"attendances", 'Float'>
    readonly checkOutAccuracy: FieldRef<"attendances", 'Float'>
    readonly durationMinutes: FieldRef<"attendances", 'Int'>
    readonly status: FieldRef<"attendances", 'AttendanceStatus'>
    readonly createdAt: FieldRef<"attendances", 'DateTime'>
    readonly updatedAt: FieldRef<"attendances", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * attendances findUnique
   */
  export type attendancesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendances
     */
    select?: attendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendances
     */
    omit?: attendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendancesInclude<ExtArgs> | null
    /**
     * Filter, which attendances to fetch.
     */
    where: attendancesWhereUniqueInput
  }

  /**
   * attendances findUniqueOrThrow
   */
  export type attendancesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendances
     */
    select?: attendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendances
     */
    omit?: attendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendancesInclude<ExtArgs> | null
    /**
     * Filter, which attendances to fetch.
     */
    where: attendancesWhereUniqueInput
  }

  /**
   * attendances findFirst
   */
  export type attendancesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendances
     */
    select?: attendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendances
     */
    omit?: attendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendancesInclude<ExtArgs> | null
    /**
     * Filter, which attendances to fetch.
     */
    where?: attendancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendancesOrderByWithRelationInput | attendancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendances.
     */
    cursor?: attendancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendances.
     */
    distinct?: AttendancesScalarFieldEnum | AttendancesScalarFieldEnum[]
  }

  /**
   * attendances findFirstOrThrow
   */
  export type attendancesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendances
     */
    select?: attendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendances
     */
    omit?: attendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendancesInclude<ExtArgs> | null
    /**
     * Filter, which attendances to fetch.
     */
    where?: attendancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendancesOrderByWithRelationInput | attendancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendances.
     */
    cursor?: attendancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendances.
     */
    distinct?: AttendancesScalarFieldEnum | AttendancesScalarFieldEnum[]
  }

  /**
   * attendances findMany
   */
  export type attendancesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendances
     */
    select?: attendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendances
     */
    omit?: attendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendancesInclude<ExtArgs> | null
    /**
     * Filter, which attendances to fetch.
     */
    where?: attendancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendancesOrderByWithRelationInput | attendancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing attendances.
     */
    cursor?: attendancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    distinct?: AttendancesScalarFieldEnum | AttendancesScalarFieldEnum[]
  }

  /**
   * attendances create
   */
  export type attendancesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendances
     */
    select?: attendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendances
     */
    omit?: attendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendancesInclude<ExtArgs> | null
    /**
     * The data needed to create a attendances.
     */
    data: XOR<attendancesCreateInput, attendancesUncheckedCreateInput>
  }

  /**
   * attendances createMany
   */
  export type attendancesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many attendances.
     */
    data: attendancesCreateManyInput | attendancesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * attendances createManyAndReturn
   */
  export type attendancesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendances
     */
    select?: attendancesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the attendances
     */
    omit?: attendancesOmit<ExtArgs> | null
    /**
     * The data used to create many attendances.
     */
    data: attendancesCreateManyInput | attendancesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendancesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * attendances update
   */
  export type attendancesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendances
     */
    select?: attendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendances
     */
    omit?: attendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendancesInclude<ExtArgs> | null
    /**
     * The data needed to update a attendances.
     */
    data: XOR<attendancesUpdateInput, attendancesUncheckedUpdateInput>
    /**
     * Choose, which attendances to update.
     */
    where: attendancesWhereUniqueInput
  }

  /**
   * attendances updateMany
   */
  export type attendancesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update attendances.
     */
    data: XOR<attendancesUpdateManyMutationInput, attendancesUncheckedUpdateManyInput>
    /**
     * Filter which attendances to update
     */
    where?: attendancesWhereInput
    /**
     * Limit how many attendances to update.
     */
    limit?: number
  }

  /**
   * attendances updateManyAndReturn
   */
  export type attendancesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendances
     */
    select?: attendancesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the attendances
     */
    omit?: attendancesOmit<ExtArgs> | null
    /**
     * The data used to update attendances.
     */
    data: XOR<attendancesUpdateManyMutationInput, attendancesUncheckedUpdateManyInput>
    /**
     * Filter which attendances to update
     */
    where?: attendancesWhereInput
    /**
     * Limit how many attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendancesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * attendances upsert
   */
  export type attendancesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendances
     */
    select?: attendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendances
     */
    omit?: attendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendancesInclude<ExtArgs> | null
    /**
     * The filter to search for the attendances to update in case it exists.
     */
    where: attendancesWhereUniqueInput
    /**
     * In case the attendances found by the `where` argument doesn't exist, create a new attendances with this data.
     */
    create: XOR<attendancesCreateInput, attendancesUncheckedCreateInput>
    /**
     * In case the attendances was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attendancesUpdateInput, attendancesUncheckedUpdateInput>
  }

  /**
   * attendances delete
   */
  export type attendancesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendances
     */
    select?: attendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendances
     */
    omit?: attendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendancesInclude<ExtArgs> | null
    /**
     * Filter which attendances to delete.
     */
    where: attendancesWhereUniqueInput
  }

  /**
   * attendances deleteMany
   */
  export type attendancesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendances to delete
     */
    where?: attendancesWhereInput
    /**
     * Limit how many attendances to delete.
     */
    limit?: number
  }

  /**
   * attendances without action
   */
  export type attendancesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendances
     */
    select?: attendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendances
     */
    omit?: attendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendancesInclude<ExtArgs> | null
  }


  /**
   * Model bills
   */

  export type AggregateBills = {
    _count: BillsCountAggregateOutputType | null
    _avg: BillsAvgAggregateOutputType | null
    _sum: BillsSumAggregateOutputType | null
    _min: BillsMinAggregateOutputType | null
    _max: BillsMaxAggregateOutputType | null
  }

  export type BillsAvgAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    project_id: number | null
    creator_id: number | null
  }

  export type BillsSumAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    project_id: number | null
    creator_id: number | null
  }

  export type BillsMinAggregateOutputType = {
    id: number | null
    name: string | null
    image_url: string | null
    image_file_id: string | null
    amount: Decimal | null
    project_id: number | null
    creator_id: number | null
    created_at: Date | null
  }

  export type BillsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image_url: string | null
    image_file_id: string | null
    amount: Decimal | null
    project_id: number | null
    creator_id: number | null
    created_at: Date | null
  }

  export type BillsCountAggregateOutputType = {
    id: number
    name: number
    image_url: number
    image_file_id: number
    amount: number
    project_id: number
    creator_id: number
    created_at: number
    _all: number
  }


  export type BillsAvgAggregateInputType = {
    id?: true
    amount?: true
    project_id?: true
    creator_id?: true
  }

  export type BillsSumAggregateInputType = {
    id?: true
    amount?: true
    project_id?: true
    creator_id?: true
  }

  export type BillsMinAggregateInputType = {
    id?: true
    name?: true
    image_url?: true
    image_file_id?: true
    amount?: true
    project_id?: true
    creator_id?: true
    created_at?: true
  }

  export type BillsMaxAggregateInputType = {
    id?: true
    name?: true
    image_url?: true
    image_file_id?: true
    amount?: true
    project_id?: true
    creator_id?: true
    created_at?: true
  }

  export type BillsCountAggregateInputType = {
    id?: true
    name?: true
    image_url?: true
    image_file_id?: true
    amount?: true
    project_id?: true
    creator_id?: true
    created_at?: true
    _all?: true
  }

  export type BillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bills to aggregate.
     */
    where?: billsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bills to fetch.
     */
    orderBy?: billsOrderByWithRelationInput | billsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: billsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bills
    **/
    _count?: true | BillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillsMaxAggregateInputType
  }

  export type GetBillsAggregateType<T extends BillsAggregateArgs> = {
        [P in keyof T & keyof AggregateBills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBills[P]>
      : GetScalarType<T[P], AggregateBills[P]>
  }




  export type billsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: billsWhereInput
    orderBy?: billsOrderByWithAggregationInput | billsOrderByWithAggregationInput[]
    by: BillsScalarFieldEnum[] | BillsScalarFieldEnum
    having?: billsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillsCountAggregateInputType | true
    _avg?: BillsAvgAggregateInputType
    _sum?: BillsSumAggregateInputType
    _min?: BillsMinAggregateInputType
    _max?: BillsMaxAggregateInputType
  }

  export type BillsGroupByOutputType = {
    id: number
    name: string
    image_url: string | null
    image_file_id: string | null
    amount: Decimal | null
    project_id: number
    creator_id: number
    created_at: Date
    _count: BillsCountAggregateOutputType | null
    _avg: BillsAvgAggregateOutputType | null
    _sum: BillsSumAggregateOutputType | null
    _min: BillsMinAggregateOutputType | null
    _max: BillsMaxAggregateOutputType | null
  }

  type GetBillsGroupByPayload<T extends billsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillsGroupByOutputType[P]>
            : GetScalarType<T[P], BillsGroupByOutputType[P]>
        }
      >
    >


  export type billsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image_url?: boolean
    image_file_id?: boolean
    amount?: boolean
    project_id?: boolean
    creator_id?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bills"]>

  export type billsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image_url?: boolean
    image_file_id?: boolean
    amount?: boolean
    project_id?: boolean
    creator_id?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bills"]>

  export type billsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image_url?: boolean
    image_file_id?: boolean
    amount?: boolean
    project_id?: boolean
    creator_id?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bills"]>

  export type billsSelectScalar = {
    id?: boolean
    name?: boolean
    image_url?: boolean
    image_file_id?: boolean
    amount?: boolean
    project_id?: boolean
    creator_id?: boolean
    created_at?: boolean
  }

  export type billsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image_url" | "image_file_id" | "amount" | "project_id" | "creator_id" | "created_at", ExtArgs["result"]["bills"]>
  export type billsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }
  export type billsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }
  export type billsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }

  export type $billsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bills"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      projects: Prisma.$projectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image_url: string | null
      image_file_id: string | null
      amount: Prisma.Decimal | null
      project_id: number
      creator_id: number
      created_at: Date
    }, ExtArgs["result"]["bills"]>
    composites: {}
  }

  type billsGetPayload<S extends boolean | null | undefined | billsDefaultArgs> = $Result.GetResult<Prisma.$billsPayload, S>

  type billsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<billsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillsCountAggregateInputType | true
    }

  export interface billsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bills'], meta: { name: 'bills' } }
    /**
     * Find zero or one Bills that matches the filter.
     * @param {billsFindUniqueArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends billsFindUniqueArgs>(args: SelectSubset<T, billsFindUniqueArgs<ExtArgs>>): Prisma__billsClient<$Result.GetResult<Prisma.$billsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bills that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {billsFindUniqueOrThrowArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends billsFindUniqueOrThrowArgs>(args: SelectSubset<T, billsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__billsClient<$Result.GetResult<Prisma.$billsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billsFindFirstArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends billsFindFirstArgs>(args?: SelectSubset<T, billsFindFirstArgs<ExtArgs>>): Prisma__billsClient<$Result.GetResult<Prisma.$billsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billsFindFirstOrThrowArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends billsFindFirstOrThrowArgs>(args?: SelectSubset<T, billsFindFirstOrThrowArgs<ExtArgs>>): Prisma__billsClient<$Result.GetResult<Prisma.$billsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bills.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billsWithIdOnly = await prisma.bills.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends billsFindManyArgs>(args?: SelectSubset<T, billsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$billsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bills.
     * @param {billsCreateArgs} args - Arguments to create a Bills.
     * @example
     * // Create one Bills
     * const Bills = await prisma.bills.create({
     *   data: {
     *     // ... data to create a Bills
     *   }
     * })
     * 
     */
    create<T extends billsCreateArgs>(args: SelectSubset<T, billsCreateArgs<ExtArgs>>): Prisma__billsClient<$Result.GetResult<Prisma.$billsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bills.
     * @param {billsCreateManyArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bills = await prisma.bills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends billsCreateManyArgs>(args?: SelectSubset<T, billsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bills and returns the data saved in the database.
     * @param {billsCreateManyAndReturnArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bills = await prisma.bills.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bills and only return the `id`
     * const billsWithIdOnly = await prisma.bills.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends billsCreateManyAndReturnArgs>(args?: SelectSubset<T, billsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$billsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bills.
     * @param {billsDeleteArgs} args - Arguments to delete one Bills.
     * @example
     * // Delete one Bills
     * const Bills = await prisma.bills.delete({
     *   where: {
     *     // ... filter to delete one Bills
     *   }
     * })
     * 
     */
    delete<T extends billsDeleteArgs>(args: SelectSubset<T, billsDeleteArgs<ExtArgs>>): Prisma__billsClient<$Result.GetResult<Prisma.$billsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bills.
     * @param {billsUpdateArgs} args - Arguments to update one Bills.
     * @example
     * // Update one Bills
     * const bills = await prisma.bills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends billsUpdateArgs>(args: SelectSubset<T, billsUpdateArgs<ExtArgs>>): Prisma__billsClient<$Result.GetResult<Prisma.$billsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bills.
     * @param {billsDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends billsDeleteManyArgs>(args?: SelectSubset<T, billsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bills = await prisma.bills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends billsUpdateManyArgs>(args: SelectSubset<T, billsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills and returns the data updated in the database.
     * @param {billsUpdateManyAndReturnArgs} args - Arguments to update many Bills.
     * @example
     * // Update many Bills
     * const bills = await prisma.bills.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bills and only return the `id`
     * const billsWithIdOnly = await prisma.bills.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends billsUpdateManyAndReturnArgs>(args: SelectSubset<T, billsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$billsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bills.
     * @param {billsUpsertArgs} args - Arguments to update or create a Bills.
     * @example
     * // Update or create a Bills
     * const bills = await prisma.bills.upsert({
     *   create: {
     *     // ... data to create a Bills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bills we want to update
     *   }
     * })
     */
    upsert<T extends billsUpsertArgs>(args: SelectSubset<T, billsUpsertArgs<ExtArgs>>): Prisma__billsClient<$Result.GetResult<Prisma.$billsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billsCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bills.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends billsCountArgs>(
      args?: Subset<T, billsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillsAggregateArgs>(args: Subset<T, BillsAggregateArgs>): Prisma.PrismaPromise<GetBillsAggregateType<T>>

    /**
     * Group by Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billsGroupByArgs} args - Group by arguments.
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
      T extends billsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: billsGroupByArgs['orderBy'] }
        : { orderBy?: billsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, billsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bills model
   */
  readonly fields: billsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__billsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projects<T extends projectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectsDefaultArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bills model
   */
  interface billsFieldRefs {
    readonly id: FieldRef<"bills", 'Int'>
    readonly name: FieldRef<"bills", 'String'>
    readonly image_url: FieldRef<"bills", 'String'>
    readonly image_file_id: FieldRef<"bills", 'String'>
    readonly amount: FieldRef<"bills", 'Decimal'>
    readonly project_id: FieldRef<"bills", 'Int'>
    readonly creator_id: FieldRef<"bills", 'Int'>
    readonly created_at: FieldRef<"bills", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * bills findUnique
   */
  export type billsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bills
     */
    omit?: billsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: billsInclude<ExtArgs> | null
    /**
     * Filter, which bills to fetch.
     */
    where: billsWhereUniqueInput
  }

  /**
   * bills findUniqueOrThrow
   */
  export type billsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bills
     */
    omit?: billsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: billsInclude<ExtArgs> | null
    /**
     * Filter, which bills to fetch.
     */
    where: billsWhereUniqueInput
  }

  /**
   * bills findFirst
   */
  export type billsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bills
     */
    omit?: billsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: billsInclude<ExtArgs> | null
    /**
     * Filter, which bills to fetch.
     */
    where?: billsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bills to fetch.
     */
    orderBy?: billsOrderByWithRelationInput | billsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bills.
     */
    cursor?: billsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bills.
     */
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * bills findFirstOrThrow
   */
  export type billsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bills
     */
    omit?: billsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: billsInclude<ExtArgs> | null
    /**
     * Filter, which bills to fetch.
     */
    where?: billsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bills to fetch.
     */
    orderBy?: billsOrderByWithRelationInput | billsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bills.
     */
    cursor?: billsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bills.
     */
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * bills findMany
   */
  export type billsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bills
     */
    omit?: billsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: billsInclude<ExtArgs> | null
    /**
     * Filter, which bills to fetch.
     */
    where?: billsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bills to fetch.
     */
    orderBy?: billsOrderByWithRelationInput | billsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bills.
     */
    cursor?: billsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bills.
     */
    skip?: number
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * bills create
   */
  export type billsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bills
     */
    omit?: billsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: billsInclude<ExtArgs> | null
    /**
     * The data needed to create a bills.
     */
    data: XOR<billsCreateInput, billsUncheckedCreateInput>
  }

  /**
   * bills createMany
   */
  export type billsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bills.
     */
    data: billsCreateManyInput | billsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bills createManyAndReturn
   */
  export type billsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bills
     */
    omit?: billsOmit<ExtArgs> | null
    /**
     * The data used to create many bills.
     */
    data: billsCreateManyInput | billsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: billsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bills update
   */
  export type billsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bills
     */
    omit?: billsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: billsInclude<ExtArgs> | null
    /**
     * The data needed to update a bills.
     */
    data: XOR<billsUpdateInput, billsUncheckedUpdateInput>
    /**
     * Choose, which bills to update.
     */
    where: billsWhereUniqueInput
  }

  /**
   * bills updateMany
   */
  export type billsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bills.
     */
    data: XOR<billsUpdateManyMutationInput, billsUncheckedUpdateManyInput>
    /**
     * Filter which bills to update
     */
    where?: billsWhereInput
    /**
     * Limit how many bills to update.
     */
    limit?: number
  }

  /**
   * bills updateManyAndReturn
   */
  export type billsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bills
     */
    omit?: billsOmit<ExtArgs> | null
    /**
     * The data used to update bills.
     */
    data: XOR<billsUpdateManyMutationInput, billsUncheckedUpdateManyInput>
    /**
     * Filter which bills to update
     */
    where?: billsWhereInput
    /**
     * Limit how many bills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: billsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bills upsert
   */
  export type billsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bills
     */
    omit?: billsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: billsInclude<ExtArgs> | null
    /**
     * The filter to search for the bills to update in case it exists.
     */
    where: billsWhereUniqueInput
    /**
     * In case the bills found by the `where` argument doesn't exist, create a new bills with this data.
     */
    create: XOR<billsCreateInput, billsUncheckedCreateInput>
    /**
     * In case the bills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<billsUpdateInput, billsUncheckedUpdateInput>
  }

  /**
   * bills delete
   */
  export type billsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bills
     */
    omit?: billsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: billsInclude<ExtArgs> | null
    /**
     * Filter which bills to delete.
     */
    where: billsWhereUniqueInput
  }

  /**
   * bills deleteMany
   */
  export type billsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bills to delete
     */
    where?: billsWhereInput
    /**
     * Limit how many bills to delete.
     */
    limit?: number
  }

  /**
   * bills without action
   */
  export type billsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bills
     */
    omit?: billsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: billsInclude<ExtArgs> | null
  }


  /**
   * Model materials
   */

  export type AggregateMaterials = {
    _count: MaterialsCountAggregateOutputType | null
    _avg: MaterialsAvgAggregateOutputType | null
    _sum: MaterialsSumAggregateOutputType | null
    _min: MaterialsMinAggregateOutputType | null
    _max: MaterialsMaxAggregateOutputType | null
  }

  export type MaterialsAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    unit_price: Decimal | null
    request_id: number | null
    worker_id: number | null
  }

  export type MaterialsSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    unit_price: Decimal | null
    request_id: number | null
    worker_id: number | null
  }

  export type MaterialsMinAggregateOutputType = {
    id: number | null
    name: string | null
    quantity: number | null
    unit_price: Decimal | null
    description: string | null
    image_url: string | null
    image_file_id: string | null
    request_id: number | null
    worker_id: number | null
  }

  export type MaterialsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    quantity: number | null
    unit_price: Decimal | null
    description: string | null
    image_url: string | null
    image_file_id: string | null
    request_id: number | null
    worker_id: number | null
  }

  export type MaterialsCountAggregateOutputType = {
    id: number
    name: number
    quantity: number
    unit_price: number
    description: number
    image_url: number
    image_file_id: number
    request_id: number
    worker_id: number
    _all: number
  }


  export type MaterialsAvgAggregateInputType = {
    id?: true
    quantity?: true
    unit_price?: true
    request_id?: true
    worker_id?: true
  }

  export type MaterialsSumAggregateInputType = {
    id?: true
    quantity?: true
    unit_price?: true
    request_id?: true
    worker_id?: true
  }

  export type MaterialsMinAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    unit_price?: true
    description?: true
    image_url?: true
    image_file_id?: true
    request_id?: true
    worker_id?: true
  }

  export type MaterialsMaxAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    unit_price?: true
    description?: true
    image_url?: true
    image_file_id?: true
    request_id?: true
    worker_id?: true
  }

  export type MaterialsCountAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    unit_price?: true
    description?: true
    image_url?: true
    image_file_id?: true
    request_id?: true
    worker_id?: true
    _all?: true
  }

  export type MaterialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which materials to aggregate.
     */
    where?: materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned materials
    **/
    _count?: true | MaterialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialsMaxAggregateInputType
  }

  export type GetMaterialsAggregateType<T extends MaterialsAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterials[P]>
      : GetScalarType<T[P], AggregateMaterials[P]>
  }




  export type materialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: materialsWhereInput
    orderBy?: materialsOrderByWithAggregationInput | materialsOrderByWithAggregationInput[]
    by: MaterialsScalarFieldEnum[] | MaterialsScalarFieldEnum
    having?: materialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialsCountAggregateInputType | true
    _avg?: MaterialsAvgAggregateInputType
    _sum?: MaterialsSumAggregateInputType
    _min?: MaterialsMinAggregateInputType
    _max?: MaterialsMaxAggregateInputType
  }

  export type MaterialsGroupByOutputType = {
    id: number
    name: string
    quantity: number
    unit_price: Decimal
    description: string | null
    image_url: string | null
    image_file_id: string | null
    request_id: number
    worker_id: number | null
    _count: MaterialsCountAggregateOutputType | null
    _avg: MaterialsAvgAggregateOutputType | null
    _sum: MaterialsSumAggregateOutputType | null
    _min: MaterialsMinAggregateOutputType | null
    _max: MaterialsMaxAggregateOutputType | null
  }

  type GetMaterialsGroupByPayload<T extends materialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialsGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialsGroupByOutputType[P]>
        }
      >
    >


  export type materialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit_price?: boolean
    description?: boolean
    image_url?: boolean
    image_file_id?: boolean
    request_id?: boolean
    worker_id?: boolean
    payment_requests?: boolean | payment_requestsDefaultArgs<ExtArgs>
    workers?: boolean | materials$workersArgs<ExtArgs>
  }, ExtArgs["result"]["materials"]>

  export type materialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit_price?: boolean
    description?: boolean
    image_url?: boolean
    image_file_id?: boolean
    request_id?: boolean
    worker_id?: boolean
    payment_requests?: boolean | payment_requestsDefaultArgs<ExtArgs>
    workers?: boolean | materials$workersArgs<ExtArgs>
  }, ExtArgs["result"]["materials"]>

  export type materialsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit_price?: boolean
    description?: boolean
    image_url?: boolean
    image_file_id?: boolean
    request_id?: boolean
    worker_id?: boolean
    payment_requests?: boolean | payment_requestsDefaultArgs<ExtArgs>
    workers?: boolean | materials$workersArgs<ExtArgs>
  }, ExtArgs["result"]["materials"]>

  export type materialsSelectScalar = {
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit_price?: boolean
    description?: boolean
    image_url?: boolean
    image_file_id?: boolean
    request_id?: boolean
    worker_id?: boolean
  }

  export type materialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "quantity" | "unit_price" | "description" | "image_url" | "image_file_id" | "request_id" | "worker_id", ExtArgs["result"]["materials"]>
  export type materialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment_requests?: boolean | payment_requestsDefaultArgs<ExtArgs>
    workers?: boolean | materials$workersArgs<ExtArgs>
  }
  export type materialsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment_requests?: boolean | payment_requestsDefaultArgs<ExtArgs>
    workers?: boolean | materials$workersArgs<ExtArgs>
  }
  export type materialsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment_requests?: boolean | payment_requestsDefaultArgs<ExtArgs>
    workers?: boolean | materials$workersArgs<ExtArgs>
  }

  export type $materialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "materials"
    objects: {
      payment_requests: Prisma.$payment_requestsPayload<ExtArgs>
      workers: Prisma.$workersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      quantity: number
      unit_price: Prisma.Decimal
      description: string | null
      image_url: string | null
      image_file_id: string | null
      request_id: number
      worker_id: number | null
    }, ExtArgs["result"]["materials"]>
    composites: {}
  }

  type materialsGetPayload<S extends boolean | null | undefined | materialsDefaultArgs> = $Result.GetResult<Prisma.$materialsPayload, S>

  type materialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<materialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialsCountAggregateInputType | true
    }

  export interface materialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['materials'], meta: { name: 'materials' } }
    /**
     * Find zero or one Materials that matches the filter.
     * @param {materialsFindUniqueArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends materialsFindUniqueArgs>(args: SelectSubset<T, materialsFindUniqueArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {materialsFindUniqueOrThrowArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends materialsFindUniqueOrThrowArgs>(args: SelectSubset<T, materialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsFindFirstArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends materialsFindFirstArgs>(args?: SelectSubset<T, materialsFindFirstArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsFindFirstOrThrowArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends materialsFindFirstOrThrowArgs>(args?: SelectSubset<T, materialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.materials.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.materials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialsWithIdOnly = await prisma.materials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends materialsFindManyArgs>(args?: SelectSubset<T, materialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materials.
     * @param {materialsCreateArgs} args - Arguments to create a Materials.
     * @example
     * // Create one Materials
     * const Materials = await prisma.materials.create({
     *   data: {
     *     // ... data to create a Materials
     *   }
     * })
     * 
     */
    create<T extends materialsCreateArgs>(args: SelectSubset<T, materialsCreateArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {materialsCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const materials = await prisma.materials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends materialsCreateManyArgs>(args?: SelectSubset<T, materialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {materialsCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const materials = await prisma.materials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialsWithIdOnly = await prisma.materials.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends materialsCreateManyAndReturnArgs>(args?: SelectSubset<T, materialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materials.
     * @param {materialsDeleteArgs} args - Arguments to delete one Materials.
     * @example
     * // Delete one Materials
     * const Materials = await prisma.materials.delete({
     *   where: {
     *     // ... filter to delete one Materials
     *   }
     * })
     * 
     */
    delete<T extends materialsDeleteArgs>(args: SelectSubset<T, materialsDeleteArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materials.
     * @param {materialsUpdateArgs} args - Arguments to update one Materials.
     * @example
     * // Update one Materials
     * const materials = await prisma.materials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends materialsUpdateArgs>(args: SelectSubset<T, materialsUpdateArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {materialsDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.materials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends materialsDeleteManyArgs>(args?: SelectSubset<T, materialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const materials = await prisma.materials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends materialsUpdateManyArgs>(args: SelectSubset<T, materialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {materialsUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const materials = await prisma.materials.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `id`
     * const materialsWithIdOnly = await prisma.materials.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends materialsUpdateManyAndReturnArgs>(args: SelectSubset<T, materialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materials.
     * @param {materialsUpsertArgs} args - Arguments to update or create a Materials.
     * @example
     * // Update or create a Materials
     * const materials = await prisma.materials.upsert({
     *   create: {
     *     // ... data to create a Materials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materials we want to update
     *   }
     * })
     */
    upsert<T extends materialsUpsertArgs>(args: SelectSubset<T, materialsUpsertArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.materials.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends materialsCountArgs>(
      args?: Subset<T, materialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialsAggregateArgs>(args: Subset<T, MaterialsAggregateArgs>): Prisma.PrismaPromise<GetMaterialsAggregateType<T>>

    /**
     * Group by Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsGroupByArgs} args - Group by arguments.
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
      T extends materialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: materialsGroupByArgs['orderBy'] }
        : { orderBy?: materialsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, materialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the materials model
   */
  readonly fields: materialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for materials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__materialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment_requests<T extends payment_requestsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, payment_requestsDefaultArgs<ExtArgs>>): Prisma__payment_requestsClient<$Result.GetResult<Prisma.$payment_requestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workers<T extends materials$workersArgs<ExtArgs> = {}>(args?: Subset<T, materials$workersArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the materials model
   */
  interface materialsFieldRefs {
    readonly id: FieldRef<"materials", 'Int'>
    readonly name: FieldRef<"materials", 'String'>
    readonly quantity: FieldRef<"materials", 'Int'>
    readonly unit_price: FieldRef<"materials", 'Decimal'>
    readonly description: FieldRef<"materials", 'String'>
    readonly image_url: FieldRef<"materials", 'String'>
    readonly image_file_id: FieldRef<"materials", 'String'>
    readonly request_id: FieldRef<"materials", 'Int'>
    readonly worker_id: FieldRef<"materials", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * materials findUnique
   */
  export type materialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where: materialsWhereUniqueInput
  }

  /**
   * materials findUniqueOrThrow
   */
  export type materialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where: materialsWhereUniqueInput
  }

  /**
   * materials findFirst
   */
  export type materialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where?: materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for materials.
     */
    cursor?: materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of materials.
     */
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * materials findFirstOrThrow
   */
  export type materialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where?: materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for materials.
     */
    cursor?: materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of materials.
     */
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * materials findMany
   */
  export type materialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where?: materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing materials.
     */
    cursor?: materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * materials create
   */
  export type materialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * The data needed to create a materials.
     */
    data: XOR<materialsCreateInput, materialsUncheckedCreateInput>
  }

  /**
   * materials createMany
   */
  export type materialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many materials.
     */
    data: materialsCreateManyInput | materialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * materials createManyAndReturn
   */
  export type materialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * The data used to create many materials.
     */
    data: materialsCreateManyInput | materialsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * materials update
   */
  export type materialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * The data needed to update a materials.
     */
    data: XOR<materialsUpdateInput, materialsUncheckedUpdateInput>
    /**
     * Choose, which materials to update.
     */
    where: materialsWhereUniqueInput
  }

  /**
   * materials updateMany
   */
  export type materialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update materials.
     */
    data: XOR<materialsUpdateManyMutationInput, materialsUncheckedUpdateManyInput>
    /**
     * Filter which materials to update
     */
    where?: materialsWhereInput
    /**
     * Limit how many materials to update.
     */
    limit?: number
  }

  /**
   * materials updateManyAndReturn
   */
  export type materialsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * The data used to update materials.
     */
    data: XOR<materialsUpdateManyMutationInput, materialsUncheckedUpdateManyInput>
    /**
     * Filter which materials to update
     */
    where?: materialsWhereInput
    /**
     * Limit how many materials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * materials upsert
   */
  export type materialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * The filter to search for the materials to update in case it exists.
     */
    where: materialsWhereUniqueInput
    /**
     * In case the materials found by the `where` argument doesn't exist, create a new materials with this data.
     */
    create: XOR<materialsCreateInput, materialsUncheckedCreateInput>
    /**
     * In case the materials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<materialsUpdateInput, materialsUncheckedUpdateInput>
  }

  /**
   * materials delete
   */
  export type materialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * Filter which materials to delete.
     */
    where: materialsWhereUniqueInput
  }

  /**
   * materials deleteMany
   */
  export type materialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which materials to delete
     */
    where?: materialsWhereInput
    /**
     * Limit how many materials to delete.
     */
    limit?: number
  }

  /**
   * materials.workers
   */
  export type materials$workersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workers
     */
    omit?: workersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    where?: workersWhereInput
  }

  /**
   * materials without action
   */
  export type materialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
  }


  /**
   * Model payment_requests
   */

  export type AggregatePayment_requests = {
    _count: Payment_requestsCountAggregateOutputType | null
    _avg: Payment_requestsAvgAggregateOutputType | null
    _sum: Payment_requestsSumAggregateOutputType | null
    _min: Payment_requestsMinAggregateOutputType | null
    _max: Payment_requestsMaxAggregateOutputType | null
  }

  export type Payment_requestsAvgAggregateOutputType = {
    id: number | null
    total_amount: Decimal | null
    supervisor_id: number | null
    pm_id: number | null
    project_id: number | null
  }

  export type Payment_requestsSumAggregateOutputType = {
    id: number | null
    total_amount: Decimal | null
    supervisor_id: number | null
    pm_id: number | null
    project_id: number | null
  }

  export type Payment_requestsMinAggregateOutputType = {
    id: number | null
    status: $Enums.PaymentStatus | null
    total_amount: Decimal | null
    supervisor_id: number | null
    pm_id: number | null
    project_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Payment_requestsMaxAggregateOutputType = {
    id: number | null
    status: $Enums.PaymentStatus | null
    total_amount: Decimal | null
    supervisor_id: number | null
    pm_id: number | null
    project_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Payment_requestsCountAggregateOutputType = {
    id: number
    status: number
    total_amount: number
    supervisor_id: number
    pm_id: number
    project_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Payment_requestsAvgAggregateInputType = {
    id?: true
    total_amount?: true
    supervisor_id?: true
    pm_id?: true
    project_id?: true
  }

  export type Payment_requestsSumAggregateInputType = {
    id?: true
    total_amount?: true
    supervisor_id?: true
    pm_id?: true
    project_id?: true
  }

  export type Payment_requestsMinAggregateInputType = {
    id?: true
    status?: true
    total_amount?: true
    supervisor_id?: true
    pm_id?: true
    project_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Payment_requestsMaxAggregateInputType = {
    id?: true
    status?: true
    total_amount?: true
    supervisor_id?: true
    pm_id?: true
    project_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Payment_requestsCountAggregateInputType = {
    id?: true
    status?: true
    total_amount?: true
    supervisor_id?: true
    pm_id?: true
    project_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Payment_requestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_requests to aggregate.
     */
    where?: payment_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_requests to fetch.
     */
    orderBy?: payment_requestsOrderByWithRelationInput | payment_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: payment_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payment_requests
    **/
    _count?: true | Payment_requestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Payment_requestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Payment_requestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Payment_requestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Payment_requestsMaxAggregateInputType
  }

  export type GetPayment_requestsAggregateType<T extends Payment_requestsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment_requests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment_requests[P]>
      : GetScalarType<T[P], AggregatePayment_requests[P]>
  }




  export type payment_requestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_requestsWhereInput
    orderBy?: payment_requestsOrderByWithAggregationInput | payment_requestsOrderByWithAggregationInput[]
    by: Payment_requestsScalarFieldEnum[] | Payment_requestsScalarFieldEnum
    having?: payment_requestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Payment_requestsCountAggregateInputType | true
    _avg?: Payment_requestsAvgAggregateInputType
    _sum?: Payment_requestsSumAggregateInputType
    _min?: Payment_requestsMinAggregateInputType
    _max?: Payment_requestsMaxAggregateInputType
  }

  export type Payment_requestsGroupByOutputType = {
    id: number
    status: $Enums.PaymentStatus
    total_amount: Decimal
    supervisor_id: number
    pm_id: number | null
    project_id: number
    created_at: Date
    updated_at: Date
    _count: Payment_requestsCountAggregateOutputType | null
    _avg: Payment_requestsAvgAggregateOutputType | null
    _sum: Payment_requestsSumAggregateOutputType | null
    _min: Payment_requestsMinAggregateOutputType | null
    _max: Payment_requestsMaxAggregateOutputType | null
  }

  type GetPayment_requestsGroupByPayload<T extends payment_requestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Payment_requestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Payment_requestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Payment_requestsGroupByOutputType[P]>
            : GetScalarType<T[P], Payment_requestsGroupByOutputType[P]>
        }
      >
    >


  export type payment_requestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    total_amount?: boolean
    supervisor_id?: boolean
    pm_id?: boolean
    project_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    materials?: boolean | payment_requests$materialsArgs<ExtArgs>
    users_payment_requests_pm_idTousers?: boolean | payment_requests$users_payment_requests_pm_idTousersArgs<ExtArgs>
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    users_payment_requests_supervisor_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Payment_requestsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment_requests"]>

  export type payment_requestsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    total_amount?: boolean
    supervisor_id?: boolean
    pm_id?: boolean
    project_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users_payment_requests_pm_idTousers?: boolean | payment_requests$users_payment_requests_pm_idTousersArgs<ExtArgs>
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    users_payment_requests_supervisor_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment_requests"]>

  export type payment_requestsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    total_amount?: boolean
    supervisor_id?: boolean
    pm_id?: boolean
    project_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users_payment_requests_pm_idTousers?: boolean | payment_requests$users_payment_requests_pm_idTousersArgs<ExtArgs>
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    users_payment_requests_supervisor_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment_requests"]>

  export type payment_requestsSelectScalar = {
    id?: boolean
    status?: boolean
    total_amount?: boolean
    supervisor_id?: boolean
    pm_id?: boolean
    project_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type payment_requestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "total_amount" | "supervisor_id" | "pm_id" | "project_id" | "created_at" | "updated_at", ExtArgs["result"]["payment_requests"]>
  export type payment_requestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | payment_requests$materialsArgs<ExtArgs>
    users_payment_requests_pm_idTousers?: boolean | payment_requests$users_payment_requests_pm_idTousersArgs<ExtArgs>
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    users_payment_requests_supervisor_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Payment_requestsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type payment_requestsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_payment_requests_pm_idTousers?: boolean | payment_requests$users_payment_requests_pm_idTousersArgs<ExtArgs>
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    users_payment_requests_supervisor_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type payment_requestsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_payment_requests_pm_idTousers?: boolean | payment_requests$users_payment_requests_pm_idTousersArgs<ExtArgs>
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    users_payment_requests_supervisor_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $payment_requestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment_requests"
    objects: {
      materials: Prisma.$materialsPayload<ExtArgs>[]
      users_payment_requests_pm_idTousers: Prisma.$usersPayload<ExtArgs> | null
      projects: Prisma.$projectsPayload<ExtArgs>
      users_payment_requests_supervisor_idTousers: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.PaymentStatus
      total_amount: Prisma.Decimal
      supervisor_id: number
      pm_id: number | null
      project_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["payment_requests"]>
    composites: {}
  }

  type payment_requestsGetPayload<S extends boolean | null | undefined | payment_requestsDefaultArgs> = $Result.GetResult<Prisma.$payment_requestsPayload, S>

  type payment_requestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<payment_requestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Payment_requestsCountAggregateInputType | true
    }

  export interface payment_requestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment_requests'], meta: { name: 'payment_requests' } }
    /**
     * Find zero or one Payment_requests that matches the filter.
     * @param {payment_requestsFindUniqueArgs} args - Arguments to find a Payment_requests
     * @example
     * // Get one Payment_requests
     * const payment_requests = await prisma.payment_requests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends payment_requestsFindUniqueArgs>(args: SelectSubset<T, payment_requestsFindUniqueArgs<ExtArgs>>): Prisma__payment_requestsClient<$Result.GetResult<Prisma.$payment_requestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment_requests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {payment_requestsFindUniqueOrThrowArgs} args - Arguments to find a Payment_requests
     * @example
     * // Get one Payment_requests
     * const payment_requests = await prisma.payment_requests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends payment_requestsFindUniqueOrThrowArgs>(args: SelectSubset<T, payment_requestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__payment_requestsClient<$Result.GetResult<Prisma.$payment_requestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_requestsFindFirstArgs} args - Arguments to find a Payment_requests
     * @example
     * // Get one Payment_requests
     * const payment_requests = await prisma.payment_requests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends payment_requestsFindFirstArgs>(args?: SelectSubset<T, payment_requestsFindFirstArgs<ExtArgs>>): Prisma__payment_requestsClient<$Result.GetResult<Prisma.$payment_requestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment_requests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_requestsFindFirstOrThrowArgs} args - Arguments to find a Payment_requests
     * @example
     * // Get one Payment_requests
     * const payment_requests = await prisma.payment_requests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends payment_requestsFindFirstOrThrowArgs>(args?: SelectSubset<T, payment_requestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__payment_requestsClient<$Result.GetResult<Prisma.$payment_requestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payment_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_requestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payment_requests
     * const payment_requests = await prisma.payment_requests.findMany()
     * 
     * // Get first 10 Payment_requests
     * const payment_requests = await prisma.payment_requests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payment_requestsWithIdOnly = await prisma.payment_requests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends payment_requestsFindManyArgs>(args?: SelectSubset<T, payment_requestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment_requests.
     * @param {payment_requestsCreateArgs} args - Arguments to create a Payment_requests.
     * @example
     * // Create one Payment_requests
     * const Payment_requests = await prisma.payment_requests.create({
     *   data: {
     *     // ... data to create a Payment_requests
     *   }
     * })
     * 
     */
    create<T extends payment_requestsCreateArgs>(args: SelectSubset<T, payment_requestsCreateArgs<ExtArgs>>): Prisma__payment_requestsClient<$Result.GetResult<Prisma.$payment_requestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payment_requests.
     * @param {payment_requestsCreateManyArgs} args - Arguments to create many Payment_requests.
     * @example
     * // Create many Payment_requests
     * const payment_requests = await prisma.payment_requests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends payment_requestsCreateManyArgs>(args?: SelectSubset<T, payment_requestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payment_requests and returns the data saved in the database.
     * @param {payment_requestsCreateManyAndReturnArgs} args - Arguments to create many Payment_requests.
     * @example
     * // Create many Payment_requests
     * const payment_requests = await prisma.payment_requests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payment_requests and only return the `id`
     * const payment_requestsWithIdOnly = await prisma.payment_requests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends payment_requestsCreateManyAndReturnArgs>(args?: SelectSubset<T, payment_requestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_requestsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment_requests.
     * @param {payment_requestsDeleteArgs} args - Arguments to delete one Payment_requests.
     * @example
     * // Delete one Payment_requests
     * const Payment_requests = await prisma.payment_requests.delete({
     *   where: {
     *     // ... filter to delete one Payment_requests
     *   }
     * })
     * 
     */
    delete<T extends payment_requestsDeleteArgs>(args: SelectSubset<T, payment_requestsDeleteArgs<ExtArgs>>): Prisma__payment_requestsClient<$Result.GetResult<Prisma.$payment_requestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment_requests.
     * @param {payment_requestsUpdateArgs} args - Arguments to update one Payment_requests.
     * @example
     * // Update one Payment_requests
     * const payment_requests = await prisma.payment_requests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends payment_requestsUpdateArgs>(args: SelectSubset<T, payment_requestsUpdateArgs<ExtArgs>>): Prisma__payment_requestsClient<$Result.GetResult<Prisma.$payment_requestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payment_requests.
     * @param {payment_requestsDeleteManyArgs} args - Arguments to filter Payment_requests to delete.
     * @example
     * // Delete a few Payment_requests
     * const { count } = await prisma.payment_requests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends payment_requestsDeleteManyArgs>(args?: SelectSubset<T, payment_requestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_requestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payment_requests
     * const payment_requests = await prisma.payment_requests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends payment_requestsUpdateManyArgs>(args: SelectSubset<T, payment_requestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_requests and returns the data updated in the database.
     * @param {payment_requestsUpdateManyAndReturnArgs} args - Arguments to update many Payment_requests.
     * @example
     * // Update many Payment_requests
     * const payment_requests = await prisma.payment_requests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payment_requests and only return the `id`
     * const payment_requestsWithIdOnly = await prisma.payment_requests.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends payment_requestsUpdateManyAndReturnArgs>(args: SelectSubset<T, payment_requestsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_requestsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment_requests.
     * @param {payment_requestsUpsertArgs} args - Arguments to update or create a Payment_requests.
     * @example
     * // Update or create a Payment_requests
     * const payment_requests = await prisma.payment_requests.upsert({
     *   create: {
     *     // ... data to create a Payment_requests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment_requests we want to update
     *   }
     * })
     */
    upsert<T extends payment_requestsUpsertArgs>(args: SelectSubset<T, payment_requestsUpsertArgs<ExtArgs>>): Prisma__payment_requestsClient<$Result.GetResult<Prisma.$payment_requestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payment_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_requestsCountArgs} args - Arguments to filter Payment_requests to count.
     * @example
     * // Count the number of Payment_requests
     * const count = await prisma.payment_requests.count({
     *   where: {
     *     // ... the filter for the Payment_requests we want to count
     *   }
     * })
    **/
    count<T extends payment_requestsCountArgs>(
      args?: Subset<T, payment_requestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Payment_requestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_requestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Payment_requestsAggregateArgs>(args: Subset<T, Payment_requestsAggregateArgs>): Prisma.PrismaPromise<GetPayment_requestsAggregateType<T>>

    /**
     * Group by Payment_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_requestsGroupByArgs} args - Group by arguments.
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
      T extends payment_requestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: payment_requestsGroupByArgs['orderBy'] }
        : { orderBy?: payment_requestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, payment_requestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayment_requestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment_requests model
   */
  readonly fields: payment_requestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment_requests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__payment_requestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materials<T extends payment_requests$materialsArgs<ExtArgs> = {}>(args?: Subset<T, payment_requests$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_payment_requests_pm_idTousers<T extends payment_requests$users_payment_requests_pm_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, payment_requests$users_payment_requests_pm_idTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    projects<T extends projectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectsDefaultArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_payment_requests_supervisor_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payment_requests model
   */
  interface payment_requestsFieldRefs {
    readonly id: FieldRef<"payment_requests", 'Int'>
    readonly status: FieldRef<"payment_requests", 'PaymentStatus'>
    readonly total_amount: FieldRef<"payment_requests", 'Decimal'>
    readonly supervisor_id: FieldRef<"payment_requests", 'Int'>
    readonly pm_id: FieldRef<"payment_requests", 'Int'>
    readonly project_id: FieldRef<"payment_requests", 'Int'>
    readonly created_at: FieldRef<"payment_requests", 'DateTime'>
    readonly updated_at: FieldRef<"payment_requests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payment_requests findUnique
   */
  export type payment_requestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_requests
     */
    select?: payment_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_requests
     */
    omit?: payment_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_requestsInclude<ExtArgs> | null
    /**
     * Filter, which payment_requests to fetch.
     */
    where: payment_requestsWhereUniqueInput
  }

  /**
   * payment_requests findUniqueOrThrow
   */
  export type payment_requestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_requests
     */
    select?: payment_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_requests
     */
    omit?: payment_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_requestsInclude<ExtArgs> | null
    /**
     * Filter, which payment_requests to fetch.
     */
    where: payment_requestsWhereUniqueInput
  }

  /**
   * payment_requests findFirst
   */
  export type payment_requestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_requests
     */
    select?: payment_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_requests
     */
    omit?: payment_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_requestsInclude<ExtArgs> | null
    /**
     * Filter, which payment_requests to fetch.
     */
    where?: payment_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_requests to fetch.
     */
    orderBy?: payment_requestsOrderByWithRelationInput | payment_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_requests.
     */
    cursor?: payment_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_requests.
     */
    distinct?: Payment_requestsScalarFieldEnum | Payment_requestsScalarFieldEnum[]
  }

  /**
   * payment_requests findFirstOrThrow
   */
  export type payment_requestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_requests
     */
    select?: payment_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_requests
     */
    omit?: payment_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_requestsInclude<ExtArgs> | null
    /**
     * Filter, which payment_requests to fetch.
     */
    where?: payment_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_requests to fetch.
     */
    orderBy?: payment_requestsOrderByWithRelationInput | payment_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_requests.
     */
    cursor?: payment_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_requests.
     */
    distinct?: Payment_requestsScalarFieldEnum | Payment_requestsScalarFieldEnum[]
  }

  /**
   * payment_requests findMany
   */
  export type payment_requestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_requests
     */
    select?: payment_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_requests
     */
    omit?: payment_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_requestsInclude<ExtArgs> | null
    /**
     * Filter, which payment_requests to fetch.
     */
    where?: payment_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_requests to fetch.
     */
    orderBy?: payment_requestsOrderByWithRelationInput | payment_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payment_requests.
     */
    cursor?: payment_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_requests.
     */
    skip?: number
    distinct?: Payment_requestsScalarFieldEnum | Payment_requestsScalarFieldEnum[]
  }

  /**
   * payment_requests create
   */
  export type payment_requestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_requests
     */
    select?: payment_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_requests
     */
    omit?: payment_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_requestsInclude<ExtArgs> | null
    /**
     * The data needed to create a payment_requests.
     */
    data: XOR<payment_requestsCreateInput, payment_requestsUncheckedCreateInput>
  }

  /**
   * payment_requests createMany
   */
  export type payment_requestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payment_requests.
     */
    data: payment_requestsCreateManyInput | payment_requestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment_requests createManyAndReturn
   */
  export type payment_requestsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_requests
     */
    select?: payment_requestsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment_requests
     */
    omit?: payment_requestsOmit<ExtArgs> | null
    /**
     * The data used to create many payment_requests.
     */
    data: payment_requestsCreateManyInput | payment_requestsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_requestsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payment_requests update
   */
  export type payment_requestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_requests
     */
    select?: payment_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_requests
     */
    omit?: payment_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_requestsInclude<ExtArgs> | null
    /**
     * The data needed to update a payment_requests.
     */
    data: XOR<payment_requestsUpdateInput, payment_requestsUncheckedUpdateInput>
    /**
     * Choose, which payment_requests to update.
     */
    where: payment_requestsWhereUniqueInput
  }

  /**
   * payment_requests updateMany
   */
  export type payment_requestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payment_requests.
     */
    data: XOR<payment_requestsUpdateManyMutationInput, payment_requestsUncheckedUpdateManyInput>
    /**
     * Filter which payment_requests to update
     */
    where?: payment_requestsWhereInput
    /**
     * Limit how many payment_requests to update.
     */
    limit?: number
  }

  /**
   * payment_requests updateManyAndReturn
   */
  export type payment_requestsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_requests
     */
    select?: payment_requestsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment_requests
     */
    omit?: payment_requestsOmit<ExtArgs> | null
    /**
     * The data used to update payment_requests.
     */
    data: XOR<payment_requestsUpdateManyMutationInput, payment_requestsUncheckedUpdateManyInput>
    /**
     * Filter which payment_requests to update
     */
    where?: payment_requestsWhereInput
    /**
     * Limit how many payment_requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_requestsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payment_requests upsert
   */
  export type payment_requestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_requests
     */
    select?: payment_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_requests
     */
    omit?: payment_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_requestsInclude<ExtArgs> | null
    /**
     * The filter to search for the payment_requests to update in case it exists.
     */
    where: payment_requestsWhereUniqueInput
    /**
     * In case the payment_requests found by the `where` argument doesn't exist, create a new payment_requests with this data.
     */
    create: XOR<payment_requestsCreateInput, payment_requestsUncheckedCreateInput>
    /**
     * In case the payment_requests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payment_requestsUpdateInput, payment_requestsUncheckedUpdateInput>
  }

  /**
   * payment_requests delete
   */
  export type payment_requestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_requests
     */
    select?: payment_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_requests
     */
    omit?: payment_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_requestsInclude<ExtArgs> | null
    /**
     * Filter which payment_requests to delete.
     */
    where: payment_requestsWhereUniqueInput
  }

  /**
   * payment_requests deleteMany
   */
  export type payment_requestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_requests to delete
     */
    where?: payment_requestsWhereInput
    /**
     * Limit how many payment_requests to delete.
     */
    limit?: number
  }

  /**
   * payment_requests.materials
   */
  export type payment_requests$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    where?: materialsWhereInput
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    cursor?: materialsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * payment_requests.users_payment_requests_pm_idTousers
   */
  export type payment_requests$users_payment_requests_pm_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * payment_requests without action
   */
  export type payment_requestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_requests
     */
    select?: payment_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_requests
     */
    omit?: payment_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_requestsInclude<ExtArgs> | null
  }


  /**
   * Model project_progress
   */

  export type AggregateProject_progress = {
    _count: Project_progressCountAggregateOutputType | null
    _avg: Project_progressAvgAggregateOutputType | null
    _sum: Project_progressSumAggregateOutputType | null
    _min: Project_progressMinAggregateOutputType | null
    _max: Project_progressMaxAggregateOutputType | null
  }

  export type Project_progressAvgAggregateOutputType = {
    id: number | null
    percentage: number | null
    project_id: number | null
    user_id: number | null
  }

  export type Project_progressSumAggregateOutputType = {
    id: number | null
    percentage: number | null
    project_id: number | null
    user_id: number | null
  }

  export type Project_progressMinAggregateOutputType = {
    id: number | null
    percentage: number | null
    date: string | null
    notes: string | null
    project_id: number | null
    user_id: number | null
    created_at: Date | null
  }

  export type Project_progressMaxAggregateOutputType = {
    id: number | null
    percentage: number | null
    date: string | null
    notes: string | null
    project_id: number | null
    user_id: number | null
    created_at: Date | null
  }

  export type Project_progressCountAggregateOutputType = {
    id: number
    percentage: number
    date: number
    notes: number
    project_id: number
    user_id: number
    created_at: number
    _all: number
  }


  export type Project_progressAvgAggregateInputType = {
    id?: true
    percentage?: true
    project_id?: true
    user_id?: true
  }

  export type Project_progressSumAggregateInputType = {
    id?: true
    percentage?: true
    project_id?: true
    user_id?: true
  }

  export type Project_progressMinAggregateInputType = {
    id?: true
    percentage?: true
    date?: true
    notes?: true
    project_id?: true
    user_id?: true
    created_at?: true
  }

  export type Project_progressMaxAggregateInputType = {
    id?: true
    percentage?: true
    date?: true
    notes?: true
    project_id?: true
    user_id?: true
    created_at?: true
  }

  export type Project_progressCountAggregateInputType = {
    id?: true
    percentage?: true
    date?: true
    notes?: true
    project_id?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type Project_progressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_progress to aggregate.
     */
    where?: project_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_progresses to fetch.
     */
    orderBy?: project_progressOrderByWithRelationInput | project_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: project_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned project_progresses
    **/
    _count?: true | Project_progressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Project_progressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Project_progressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Project_progressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Project_progressMaxAggregateInputType
  }

  export type GetProject_progressAggregateType<T extends Project_progressAggregateArgs> = {
        [P in keyof T & keyof AggregateProject_progress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject_progress[P]>
      : GetScalarType<T[P], AggregateProject_progress[P]>
  }




  export type project_progressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_progressWhereInput
    orderBy?: project_progressOrderByWithAggregationInput | project_progressOrderByWithAggregationInput[]
    by: Project_progressScalarFieldEnum[] | Project_progressScalarFieldEnum
    having?: project_progressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Project_progressCountAggregateInputType | true
    _avg?: Project_progressAvgAggregateInputType
    _sum?: Project_progressSumAggregateInputType
    _min?: Project_progressMinAggregateInputType
    _max?: Project_progressMaxAggregateInputType
  }

  export type Project_progressGroupByOutputType = {
    id: number
    percentage: number
    date: string
    notes: string | null
    project_id: number
    user_id: number
    created_at: Date
    _count: Project_progressCountAggregateOutputType | null
    _avg: Project_progressAvgAggregateOutputType | null
    _sum: Project_progressSumAggregateOutputType | null
    _min: Project_progressMinAggregateOutputType | null
    _max: Project_progressMaxAggregateOutputType | null
  }

  type GetProject_progressGroupByPayload<T extends project_progressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Project_progressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Project_progressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Project_progressGroupByOutputType[P]>
            : GetScalarType<T[P], Project_progressGroupByOutputType[P]>
        }
      >
    >


  export type project_progressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    percentage?: boolean
    date?: boolean
    notes?: boolean
    project_id?: boolean
    user_id?: boolean
    created_at?: boolean
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project_progress"]>

  export type project_progressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    percentage?: boolean
    date?: boolean
    notes?: boolean
    project_id?: boolean
    user_id?: boolean
    created_at?: boolean
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project_progress"]>

  export type project_progressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    percentage?: boolean
    date?: boolean
    notes?: boolean
    project_id?: boolean
    user_id?: boolean
    created_at?: boolean
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project_progress"]>

  export type project_progressSelectScalar = {
    id?: boolean
    percentage?: boolean
    date?: boolean
    notes?: boolean
    project_id?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type project_progressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "percentage" | "date" | "notes" | "project_id" | "user_id" | "created_at", ExtArgs["result"]["project_progress"]>
  export type project_progressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type project_progressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type project_progressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $project_progressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project_progress"
    objects: {
      projects: Prisma.$projectsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      percentage: number
      date: string
      notes: string | null
      project_id: number
      user_id: number
      created_at: Date
    }, ExtArgs["result"]["project_progress"]>
    composites: {}
  }

  type project_progressGetPayload<S extends boolean | null | undefined | project_progressDefaultArgs> = $Result.GetResult<Prisma.$project_progressPayload, S>

  type project_progressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<project_progressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Project_progressCountAggregateInputType | true
    }

  export interface project_progressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project_progress'], meta: { name: 'project_progress' } }
    /**
     * Find zero or one Project_progress that matches the filter.
     * @param {project_progressFindUniqueArgs} args - Arguments to find a Project_progress
     * @example
     * // Get one Project_progress
     * const project_progress = await prisma.project_progress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends project_progressFindUniqueArgs>(args: SelectSubset<T, project_progressFindUniqueArgs<ExtArgs>>): Prisma__project_progressClient<$Result.GetResult<Prisma.$project_progressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project_progress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {project_progressFindUniqueOrThrowArgs} args - Arguments to find a Project_progress
     * @example
     * // Get one Project_progress
     * const project_progress = await prisma.project_progress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends project_progressFindUniqueOrThrowArgs>(args: SelectSubset<T, project_progressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__project_progressClient<$Result.GetResult<Prisma.$project_progressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_progress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_progressFindFirstArgs} args - Arguments to find a Project_progress
     * @example
     * // Get one Project_progress
     * const project_progress = await prisma.project_progress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends project_progressFindFirstArgs>(args?: SelectSubset<T, project_progressFindFirstArgs<ExtArgs>>): Prisma__project_progressClient<$Result.GetResult<Prisma.$project_progressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_progress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_progressFindFirstOrThrowArgs} args - Arguments to find a Project_progress
     * @example
     * // Get one Project_progress
     * const project_progress = await prisma.project_progress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends project_progressFindFirstOrThrowArgs>(args?: SelectSubset<T, project_progressFindFirstOrThrowArgs<ExtArgs>>): Prisma__project_progressClient<$Result.GetResult<Prisma.$project_progressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Project_progresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_progressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Project_progresses
     * const project_progresses = await prisma.project_progress.findMany()
     * 
     * // Get first 10 Project_progresses
     * const project_progresses = await prisma.project_progress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const project_progressWithIdOnly = await prisma.project_progress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends project_progressFindManyArgs>(args?: SelectSubset<T, project_progressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project_progress.
     * @param {project_progressCreateArgs} args - Arguments to create a Project_progress.
     * @example
     * // Create one Project_progress
     * const Project_progress = await prisma.project_progress.create({
     *   data: {
     *     // ... data to create a Project_progress
     *   }
     * })
     * 
     */
    create<T extends project_progressCreateArgs>(args: SelectSubset<T, project_progressCreateArgs<ExtArgs>>): Prisma__project_progressClient<$Result.GetResult<Prisma.$project_progressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Project_progresses.
     * @param {project_progressCreateManyArgs} args - Arguments to create many Project_progresses.
     * @example
     * // Create many Project_progresses
     * const project_progress = await prisma.project_progress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends project_progressCreateManyArgs>(args?: SelectSubset<T, project_progressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Project_progresses and returns the data saved in the database.
     * @param {project_progressCreateManyAndReturnArgs} args - Arguments to create many Project_progresses.
     * @example
     * // Create many Project_progresses
     * const project_progress = await prisma.project_progress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Project_progresses and only return the `id`
     * const project_progressWithIdOnly = await prisma.project_progress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends project_progressCreateManyAndReturnArgs>(args?: SelectSubset<T, project_progressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_progressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project_progress.
     * @param {project_progressDeleteArgs} args - Arguments to delete one Project_progress.
     * @example
     * // Delete one Project_progress
     * const Project_progress = await prisma.project_progress.delete({
     *   where: {
     *     // ... filter to delete one Project_progress
     *   }
     * })
     * 
     */
    delete<T extends project_progressDeleteArgs>(args: SelectSubset<T, project_progressDeleteArgs<ExtArgs>>): Prisma__project_progressClient<$Result.GetResult<Prisma.$project_progressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project_progress.
     * @param {project_progressUpdateArgs} args - Arguments to update one Project_progress.
     * @example
     * // Update one Project_progress
     * const project_progress = await prisma.project_progress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends project_progressUpdateArgs>(args: SelectSubset<T, project_progressUpdateArgs<ExtArgs>>): Prisma__project_progressClient<$Result.GetResult<Prisma.$project_progressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Project_progresses.
     * @param {project_progressDeleteManyArgs} args - Arguments to filter Project_progresses to delete.
     * @example
     * // Delete a few Project_progresses
     * const { count } = await prisma.project_progress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends project_progressDeleteManyArgs>(args?: SelectSubset<T, project_progressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_progressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Project_progresses
     * const project_progress = await prisma.project_progress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends project_progressUpdateManyArgs>(args: SelectSubset<T, project_progressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_progresses and returns the data updated in the database.
     * @param {project_progressUpdateManyAndReturnArgs} args - Arguments to update many Project_progresses.
     * @example
     * // Update many Project_progresses
     * const project_progress = await prisma.project_progress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Project_progresses and only return the `id`
     * const project_progressWithIdOnly = await prisma.project_progress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends project_progressUpdateManyAndReturnArgs>(args: SelectSubset<T, project_progressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_progressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project_progress.
     * @param {project_progressUpsertArgs} args - Arguments to update or create a Project_progress.
     * @example
     * // Update or create a Project_progress
     * const project_progress = await prisma.project_progress.upsert({
     *   create: {
     *     // ... data to create a Project_progress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project_progress we want to update
     *   }
     * })
     */
    upsert<T extends project_progressUpsertArgs>(args: SelectSubset<T, project_progressUpsertArgs<ExtArgs>>): Prisma__project_progressClient<$Result.GetResult<Prisma.$project_progressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Project_progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_progressCountArgs} args - Arguments to filter Project_progresses to count.
     * @example
     * // Count the number of Project_progresses
     * const count = await prisma.project_progress.count({
     *   where: {
     *     // ... the filter for the Project_progresses we want to count
     *   }
     * })
    **/
    count<T extends project_progressCountArgs>(
      args?: Subset<T, project_progressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Project_progressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project_progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_progressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Project_progressAggregateArgs>(args: Subset<T, Project_progressAggregateArgs>): Prisma.PrismaPromise<GetProject_progressAggregateType<T>>

    /**
     * Group by Project_progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_progressGroupByArgs} args - Group by arguments.
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
      T extends project_progressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: project_progressGroupByArgs['orderBy'] }
        : { orderBy?: project_progressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, project_progressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProject_progressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project_progress model
   */
  readonly fields: project_progressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project_progress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__project_progressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends projectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectsDefaultArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project_progress model
   */
  interface project_progressFieldRefs {
    readonly id: FieldRef<"project_progress", 'Int'>
    readonly percentage: FieldRef<"project_progress", 'Int'>
    readonly date: FieldRef<"project_progress", 'String'>
    readonly notes: FieldRef<"project_progress", 'String'>
    readonly project_id: FieldRef<"project_progress", 'Int'>
    readonly user_id: FieldRef<"project_progress", 'Int'>
    readonly created_at: FieldRef<"project_progress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * project_progress findUnique
   */
  export type project_progressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_progress
     */
    select?: project_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_progress
     */
    omit?: project_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_progressInclude<ExtArgs> | null
    /**
     * Filter, which project_progress to fetch.
     */
    where: project_progressWhereUniqueInput
  }

  /**
   * project_progress findUniqueOrThrow
   */
  export type project_progressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_progress
     */
    select?: project_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_progress
     */
    omit?: project_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_progressInclude<ExtArgs> | null
    /**
     * Filter, which project_progress to fetch.
     */
    where: project_progressWhereUniqueInput
  }

  /**
   * project_progress findFirst
   */
  export type project_progressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_progress
     */
    select?: project_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_progress
     */
    omit?: project_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_progressInclude<ExtArgs> | null
    /**
     * Filter, which project_progress to fetch.
     */
    where?: project_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_progresses to fetch.
     */
    orderBy?: project_progressOrderByWithRelationInput | project_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_progresses.
     */
    cursor?: project_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_progresses.
     */
    distinct?: Project_progressScalarFieldEnum | Project_progressScalarFieldEnum[]
  }

  /**
   * project_progress findFirstOrThrow
   */
  export type project_progressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_progress
     */
    select?: project_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_progress
     */
    omit?: project_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_progressInclude<ExtArgs> | null
    /**
     * Filter, which project_progress to fetch.
     */
    where?: project_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_progresses to fetch.
     */
    orderBy?: project_progressOrderByWithRelationInput | project_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_progresses.
     */
    cursor?: project_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_progresses.
     */
    distinct?: Project_progressScalarFieldEnum | Project_progressScalarFieldEnum[]
  }

  /**
   * project_progress findMany
   */
  export type project_progressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_progress
     */
    select?: project_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_progress
     */
    omit?: project_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_progressInclude<ExtArgs> | null
    /**
     * Filter, which project_progresses to fetch.
     */
    where?: project_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_progresses to fetch.
     */
    orderBy?: project_progressOrderByWithRelationInput | project_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing project_progresses.
     */
    cursor?: project_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_progresses.
     */
    skip?: number
    distinct?: Project_progressScalarFieldEnum | Project_progressScalarFieldEnum[]
  }

  /**
   * project_progress create
   */
  export type project_progressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_progress
     */
    select?: project_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_progress
     */
    omit?: project_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_progressInclude<ExtArgs> | null
    /**
     * The data needed to create a project_progress.
     */
    data: XOR<project_progressCreateInput, project_progressUncheckedCreateInput>
  }

  /**
   * project_progress createMany
   */
  export type project_progressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many project_progresses.
     */
    data: project_progressCreateManyInput | project_progressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project_progress createManyAndReturn
   */
  export type project_progressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_progress
     */
    select?: project_progressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project_progress
     */
    omit?: project_progressOmit<ExtArgs> | null
    /**
     * The data used to create many project_progresses.
     */
    data: project_progressCreateManyInput | project_progressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_progressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * project_progress update
   */
  export type project_progressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_progress
     */
    select?: project_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_progress
     */
    omit?: project_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_progressInclude<ExtArgs> | null
    /**
     * The data needed to update a project_progress.
     */
    data: XOR<project_progressUpdateInput, project_progressUncheckedUpdateInput>
    /**
     * Choose, which project_progress to update.
     */
    where: project_progressWhereUniqueInput
  }

  /**
   * project_progress updateMany
   */
  export type project_progressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update project_progresses.
     */
    data: XOR<project_progressUpdateManyMutationInput, project_progressUncheckedUpdateManyInput>
    /**
     * Filter which project_progresses to update
     */
    where?: project_progressWhereInput
    /**
     * Limit how many project_progresses to update.
     */
    limit?: number
  }

  /**
   * project_progress updateManyAndReturn
   */
  export type project_progressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_progress
     */
    select?: project_progressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project_progress
     */
    omit?: project_progressOmit<ExtArgs> | null
    /**
     * The data used to update project_progresses.
     */
    data: XOR<project_progressUpdateManyMutationInput, project_progressUncheckedUpdateManyInput>
    /**
     * Filter which project_progresses to update
     */
    where?: project_progressWhereInput
    /**
     * Limit how many project_progresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_progressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * project_progress upsert
   */
  export type project_progressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_progress
     */
    select?: project_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_progress
     */
    omit?: project_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_progressInclude<ExtArgs> | null
    /**
     * The filter to search for the project_progress to update in case it exists.
     */
    where: project_progressWhereUniqueInput
    /**
     * In case the project_progress found by the `where` argument doesn't exist, create a new project_progress with this data.
     */
    create: XOR<project_progressCreateInput, project_progressUncheckedCreateInput>
    /**
     * In case the project_progress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<project_progressUpdateInput, project_progressUncheckedUpdateInput>
  }

  /**
   * project_progress delete
   */
  export type project_progressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_progress
     */
    select?: project_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_progress
     */
    omit?: project_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_progressInclude<ExtArgs> | null
    /**
     * Filter which project_progress to delete.
     */
    where: project_progressWhereUniqueInput
  }

  /**
   * project_progress deleteMany
   */
  export type project_progressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_progresses to delete
     */
    where?: project_progressWhereInput
    /**
     * Limit how many project_progresses to delete.
     */
    limit?: number
  }

  /**
   * project_progress without action
   */
  export type project_progressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_progress
     */
    select?: project_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_progress
     */
    omit?: project_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_progressInclude<ExtArgs> | null
  }


  /**
   * Model projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    id: number | null
    budget: Decimal | null
  }

  export type ProjectsSumAggregateOutputType = {
    id: number | null
    budget: Decimal | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    status: string | null
    budget: Decimal | null
    created_at: Date | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    status: string | null
    budget: Decimal | null
    created_at: Date | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    expense_heads: number
    budget: number
    created_at: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    id?: true
    budget?: true
  }

  export type ProjectsSumAggregateInputType = {
    id?: true
    budget?: true
  }

  export type ProjectsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    budget?: true
    created_at?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    budget?: true
    created_at?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    expense_heads?: true
    budget?: true
    created_at?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to aggregate.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type projectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithAggregationInput | projectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: projectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: number
    name: string
    description: string | null
    status: string
    expense_heads: string[]
    budget: Decimal | null
    created_at: Date
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends projectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type projectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    expense_heads?: boolean
    budget?: boolean
    created_at?: boolean
    archived_progress?: boolean | projects$archived_progressArgs<ExtArgs>
    bills?: boolean | projects$billsArgs<ExtArgs>
    payment_requests?: boolean | projects$payment_requestsArgs<ExtArgs>
    project_progress?: boolean | projects$project_progressArgs<ExtArgs>
    reminders?: boolean | projects$remindersArgs<ExtArgs>
    users?: boolean | projects$usersArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    expense_heads?: boolean
    budget?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    expense_heads?: boolean
    budget?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    expense_heads?: boolean
    budget?: boolean
    created_at?: boolean
  }

  export type projectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "expense_heads" | "budget" | "created_at", ExtArgs["result"]["projects"]>
  export type projectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archived_progress?: boolean | projects$archived_progressArgs<ExtArgs>
    bills?: boolean | projects$billsArgs<ExtArgs>
    payment_requests?: boolean | projects$payment_requestsArgs<ExtArgs>
    project_progress?: boolean | projects$project_progressArgs<ExtArgs>
    reminders?: boolean | projects$remindersArgs<ExtArgs>
    users?: boolean | projects$usersArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type projectsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type projectsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $projectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projects"
    objects: {
      archived_progress: Prisma.$archived_progressPayload<ExtArgs>[]
      bills: Prisma.$billsPayload<ExtArgs>[]
      payment_requests: Prisma.$payment_requestsPayload<ExtArgs>[]
      project_progress: Prisma.$project_progressPayload<ExtArgs>[]
      reminders: Prisma.$remindersPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      status: string
      expense_heads: string[]
      budget: Prisma.Decimal | null
      created_at: Date
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type projectsGetPayload<S extends boolean | null | undefined | projectsDefaultArgs> = $Result.GetResult<Prisma.$projectsPayload, S>

  type projectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface projectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projects'], meta: { name: 'projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {projectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectsFindUniqueArgs>(args: SelectSubset<T, projectsFindUniqueArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectsFindUniqueOrThrowArgs>(args: SelectSubset<T, projectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectsFindFirstArgs>(args?: SelectSubset<T, projectsFindFirstArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectsFindFirstOrThrowArgs>(args?: SelectSubset<T, projectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectsFindManyArgs>(args?: SelectSubset<T, projectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projects.
     * @param {projectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends projectsCreateArgs>(args: SelectSubset<T, projectsCreateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectsCreateManyArgs>(args?: SelectSubset<T, projectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {projectsCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectsCreateManyAndReturnArgs>(args?: SelectSubset<T, projectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projects.
     * @param {projectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends projectsDeleteArgs>(args: SelectSubset<T, projectsDeleteArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projects.
     * @param {projectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectsUpdateArgs>(args: SelectSubset<T, projectsUpdateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectsDeleteManyArgs>(args?: SelectSubset<T, projectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectsUpdateManyArgs>(args: SelectSubset<T, projectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {projectsUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectsUpdateManyAndReturnArgs>(args: SelectSubset<T, projectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projects.
     * @param {projectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends projectsUpsertArgs>(args: SelectSubset<T, projectsUpsertArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectsCountArgs>(
      args?: Subset<T, projectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsGroupByArgs} args - Group by arguments.
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
      T extends projectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectsGroupByArgs['orderBy'] }
        : { orderBy?: projectsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, projectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projects model
   */
  readonly fields: projectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    archived_progress<T extends projects$archived_progressArgs<ExtArgs> = {}>(args?: Subset<T, projects$archived_progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archived_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bills<T extends projects$billsArgs<ExtArgs> = {}>(args?: Subset<T, projects$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$billsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment_requests<T extends projects$payment_requestsArgs<ExtArgs> = {}>(args?: Subset<T, projects$payment_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project_progress<T extends projects$project_progressArgs<ExtArgs> = {}>(args?: Subset<T, projects$project_progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reminders<T extends projects$remindersArgs<ExtArgs> = {}>(args?: Subset<T, projects$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends projects$usersArgs<ExtArgs> = {}>(args?: Subset<T, projects$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projects model
   */
  interface projectsFieldRefs {
    readonly id: FieldRef<"projects", 'Int'>
    readonly name: FieldRef<"projects", 'String'>
    readonly description: FieldRef<"projects", 'String'>
    readonly status: FieldRef<"projects", 'String'>
    readonly expense_heads: FieldRef<"projects", 'String[]'>
    readonly budget: FieldRef<"projects", 'Decimal'>
    readonly created_at: FieldRef<"projects", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * projects findUnique
   */
  export type projectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findUniqueOrThrow
   */
  export type projectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findFirst
   */
  export type projectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findFirstOrThrow
   */
  export type projectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findMany
   */
  export type projectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects create
   */
  export type projectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to create a projects.
     */
    data: XOR<projectsCreateInput, projectsUncheckedCreateInput>
  }

  /**
   * projects createMany
   */
  export type projectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projects createManyAndReturn
   */
  export type projectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projects update
   */
  export type projectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to update a projects.
     */
    data: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
    /**
     * Choose, which projects to update.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects updateMany
   */
  export type projectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * projects updateManyAndReturn
   */
  export type projectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * projects upsert
   */
  export type projectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The filter to search for the projects to update in case it exists.
     */
    where: projectsWhereUniqueInput
    /**
     * In case the projects found by the `where` argument doesn't exist, create a new projects with this data.
     */
    create: XOR<projectsCreateInput, projectsUncheckedCreateInput>
    /**
     * In case the projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
  }

  /**
   * projects delete
   */
  export type projectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter which projects to delete.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects deleteMany
   */
  export type projectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * projects.archived_progress
   */
  export type projects$archived_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archived_progress
     */
    select?: archived_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archived_progress
     */
    omit?: archived_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archived_progressInclude<ExtArgs> | null
    where?: archived_progressWhereInput
    orderBy?: archived_progressOrderByWithRelationInput | archived_progressOrderByWithRelationInput[]
    cursor?: archived_progressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Archived_progressScalarFieldEnum | Archived_progressScalarFieldEnum[]
  }

  /**
   * projects.bills
   */
  export type projects$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bills
     */
    omit?: billsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: billsInclude<ExtArgs> | null
    where?: billsWhereInput
    orderBy?: billsOrderByWithRelationInput | billsOrderByWithRelationInput[]
    cursor?: billsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * projects.payment_requests
   */
  export type projects$payment_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_requests
     */
    select?: payment_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_requests
     */
    omit?: payment_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_requestsInclude<ExtArgs> | null
    where?: payment_requestsWhereInput
    orderBy?: payment_requestsOrderByWithRelationInput | payment_requestsOrderByWithRelationInput[]
    cursor?: payment_requestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Payment_requestsScalarFieldEnum | Payment_requestsScalarFieldEnum[]
  }

  /**
   * projects.project_progress
   */
  export type projects$project_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_progress
     */
    select?: project_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_progress
     */
    omit?: project_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_progressInclude<ExtArgs> | null
    where?: project_progressWhereInput
    orderBy?: project_progressOrderByWithRelationInput | project_progressOrderByWithRelationInput[]
    cursor?: project_progressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Project_progressScalarFieldEnum | Project_progressScalarFieldEnum[]
  }

  /**
   * projects.reminders
   */
  export type projects$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    where?: remindersWhereInput
    orderBy?: remindersOrderByWithRelationInput | remindersOrderByWithRelationInput[]
    cursor?: remindersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[]
  }

  /**
   * projects.users
   */
  export type projects$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * projects without action
   */
  export type projectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
  }


  /**
   * Model reminders
   */

  export type AggregateReminders = {
    _count: RemindersCountAggregateOutputType | null
    _avg: RemindersAvgAggregateOutputType | null
    _sum: RemindersSumAggregateOutputType | null
    _min: RemindersMinAggregateOutputType | null
    _max: RemindersMaxAggregateOutputType | null
  }

  export type RemindersAvgAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    day_of_month: number | null
    worker_id: number | null
    project_id: number | null
  }

  export type RemindersSumAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    day_of_month: number | null
    worker_id: number | null
    project_id: number | null
  }

  export type RemindersMinAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    day_of_month: number | null
    frequency: string | null
    reason: string | null
    is_active: boolean | null
    worker_id: number | null
    project_id: number | null
    last_triggered_at: Date | null
    created_at: Date | null
  }

  export type RemindersMaxAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    day_of_month: number | null
    frequency: string | null
    reason: string | null
    is_active: boolean | null
    worker_id: number | null
    project_id: number | null
    last_triggered_at: Date | null
    created_at: Date | null
  }

  export type RemindersCountAggregateOutputType = {
    id: number
    amount: number
    day_of_month: number
    frequency: number
    reason: number
    is_active: number
    worker_id: number
    project_id: number
    last_triggered_at: number
    created_at: number
    _all: number
  }


  export type RemindersAvgAggregateInputType = {
    id?: true
    amount?: true
    day_of_month?: true
    worker_id?: true
    project_id?: true
  }

  export type RemindersSumAggregateInputType = {
    id?: true
    amount?: true
    day_of_month?: true
    worker_id?: true
    project_id?: true
  }

  export type RemindersMinAggregateInputType = {
    id?: true
    amount?: true
    day_of_month?: true
    frequency?: true
    reason?: true
    is_active?: true
    worker_id?: true
    project_id?: true
    last_triggered_at?: true
    created_at?: true
  }

  export type RemindersMaxAggregateInputType = {
    id?: true
    amount?: true
    day_of_month?: true
    frequency?: true
    reason?: true
    is_active?: true
    worker_id?: true
    project_id?: true
    last_triggered_at?: true
    created_at?: true
  }

  export type RemindersCountAggregateInputType = {
    id?: true
    amount?: true
    day_of_month?: true
    frequency?: true
    reason?: true
    is_active?: true
    worker_id?: true
    project_id?: true
    last_triggered_at?: true
    created_at?: true
    _all?: true
  }

  export type RemindersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reminders to aggregate.
     */
    where?: remindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reminders to fetch.
     */
    orderBy?: remindersOrderByWithRelationInput | remindersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: remindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reminders
    **/
    _count?: true | RemindersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RemindersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RemindersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RemindersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RemindersMaxAggregateInputType
  }

  export type GetRemindersAggregateType<T extends RemindersAggregateArgs> = {
        [P in keyof T & keyof AggregateReminders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminders[P]>
      : GetScalarType<T[P], AggregateReminders[P]>
  }




  export type remindersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: remindersWhereInput
    orderBy?: remindersOrderByWithAggregationInput | remindersOrderByWithAggregationInput[]
    by: RemindersScalarFieldEnum[] | RemindersScalarFieldEnum
    having?: remindersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RemindersCountAggregateInputType | true
    _avg?: RemindersAvgAggregateInputType
    _sum?: RemindersSumAggregateInputType
    _min?: RemindersMinAggregateInputType
    _max?: RemindersMaxAggregateInputType
  }

  export type RemindersGroupByOutputType = {
    id: number
    amount: Decimal
    day_of_month: number
    frequency: string
    reason: string
    is_active: boolean
    worker_id: number
    project_id: number
    last_triggered_at: Date | null
    created_at: Date
    _count: RemindersCountAggregateOutputType | null
    _avg: RemindersAvgAggregateOutputType | null
    _sum: RemindersSumAggregateOutputType | null
    _min: RemindersMinAggregateOutputType | null
    _max: RemindersMaxAggregateOutputType | null
  }

  type GetRemindersGroupByPayload<T extends remindersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RemindersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RemindersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RemindersGroupByOutputType[P]>
            : GetScalarType<T[P], RemindersGroupByOutputType[P]>
        }
      >
    >


  export type remindersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    day_of_month?: boolean
    frequency?: boolean
    reason?: boolean
    is_active?: boolean
    worker_id?: boolean
    project_id?: boolean
    last_triggered_at?: boolean
    created_at?: boolean
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminders"]>

  export type remindersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    day_of_month?: boolean
    frequency?: boolean
    reason?: boolean
    is_active?: boolean
    worker_id?: boolean
    project_id?: boolean
    last_triggered_at?: boolean
    created_at?: boolean
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminders"]>

  export type remindersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    day_of_month?: boolean
    frequency?: boolean
    reason?: boolean
    is_active?: boolean
    worker_id?: boolean
    project_id?: boolean
    last_triggered_at?: boolean
    created_at?: boolean
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminders"]>

  export type remindersSelectScalar = {
    id?: boolean
    amount?: boolean
    day_of_month?: boolean
    frequency?: boolean
    reason?: boolean
    is_active?: boolean
    worker_id?: boolean
    project_id?: boolean
    last_triggered_at?: boolean
    created_at?: boolean
  }

  export type remindersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "day_of_month" | "frequency" | "reason" | "is_active" | "worker_id" | "project_id" | "last_triggered_at" | "created_at", ExtArgs["result"]["reminders"]>
  export type remindersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }
  export type remindersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }
  export type remindersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }

  export type $remindersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reminders"
    objects: {
      projects: Prisma.$projectsPayload<ExtArgs>
      workers: Prisma.$workersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: Prisma.Decimal
      day_of_month: number
      frequency: string
      reason: string
      is_active: boolean
      worker_id: number
      project_id: number
      last_triggered_at: Date | null
      created_at: Date
    }, ExtArgs["result"]["reminders"]>
    composites: {}
  }

  type remindersGetPayload<S extends boolean | null | undefined | remindersDefaultArgs> = $Result.GetResult<Prisma.$remindersPayload, S>

  type remindersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<remindersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RemindersCountAggregateInputType | true
    }

  export interface remindersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reminders'], meta: { name: 'reminders' } }
    /**
     * Find zero or one Reminders that matches the filter.
     * @param {remindersFindUniqueArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends remindersFindUniqueArgs>(args: SelectSubset<T, remindersFindUniqueArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reminders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {remindersFindUniqueOrThrowArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends remindersFindUniqueOrThrowArgs>(args: SelectSubset<T, remindersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersFindFirstArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends remindersFindFirstArgs>(args?: SelectSubset<T, remindersFindFirstArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersFindFirstOrThrowArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends remindersFindFirstOrThrowArgs>(args?: SelectSubset<T, remindersFindFirstOrThrowArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminders.findMany()
     * 
     * // Get first 10 Reminders
     * const reminders = await prisma.reminders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const remindersWithIdOnly = await prisma.reminders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends remindersFindManyArgs>(args?: SelectSubset<T, remindersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reminders.
     * @param {remindersCreateArgs} args - Arguments to create a Reminders.
     * @example
     * // Create one Reminders
     * const Reminders = await prisma.reminders.create({
     *   data: {
     *     // ... data to create a Reminders
     *   }
     * })
     * 
     */
    create<T extends remindersCreateArgs>(args: SelectSubset<T, remindersCreateArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reminders.
     * @param {remindersCreateManyArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminders = await prisma.reminders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends remindersCreateManyArgs>(args?: SelectSubset<T, remindersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reminders and returns the data saved in the database.
     * @param {remindersCreateManyAndReturnArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminders = await prisma.reminders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reminders and only return the `id`
     * const remindersWithIdOnly = await prisma.reminders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends remindersCreateManyAndReturnArgs>(args?: SelectSubset<T, remindersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reminders.
     * @param {remindersDeleteArgs} args - Arguments to delete one Reminders.
     * @example
     * // Delete one Reminders
     * const Reminders = await prisma.reminders.delete({
     *   where: {
     *     // ... filter to delete one Reminders
     *   }
     * })
     * 
     */
    delete<T extends remindersDeleteArgs>(args: SelectSubset<T, remindersDeleteArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reminders.
     * @param {remindersUpdateArgs} args - Arguments to update one Reminders.
     * @example
     * // Update one Reminders
     * const reminders = await prisma.reminders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends remindersUpdateArgs>(args: SelectSubset<T, remindersUpdateArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reminders.
     * @param {remindersDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends remindersDeleteManyArgs>(args?: SelectSubset<T, remindersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminders = await prisma.reminders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends remindersUpdateManyArgs>(args: SelectSubset<T, remindersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders and returns the data updated in the database.
     * @param {remindersUpdateManyAndReturnArgs} args - Arguments to update many Reminders.
     * @example
     * // Update many Reminders
     * const reminders = await prisma.reminders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reminders and only return the `id`
     * const remindersWithIdOnly = await prisma.reminders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends remindersUpdateManyAndReturnArgs>(args: SelectSubset<T, remindersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reminders.
     * @param {remindersUpsertArgs} args - Arguments to update or create a Reminders.
     * @example
     * // Update or create a Reminders
     * const reminders = await prisma.reminders.upsert({
     *   create: {
     *     // ... data to create a Reminders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminders we want to update
     *   }
     * })
     */
    upsert<T extends remindersUpsertArgs>(args: SelectSubset<T, remindersUpsertArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminders.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
    **/
    count<T extends remindersCountArgs>(
      args?: Subset<T, remindersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RemindersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemindersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RemindersAggregateArgs>(args: Subset<T, RemindersAggregateArgs>): Prisma.PrismaPromise<GetRemindersAggregateType<T>>

    /**
     * Group by Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersGroupByArgs} args - Group by arguments.
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
      T extends remindersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: remindersGroupByArgs['orderBy'] }
        : { orderBy?: remindersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, remindersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRemindersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reminders model
   */
  readonly fields: remindersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reminders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__remindersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends projectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectsDefaultArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workers<T extends workersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workersDefaultArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reminders model
   */
  interface remindersFieldRefs {
    readonly id: FieldRef<"reminders", 'Int'>
    readonly amount: FieldRef<"reminders", 'Decimal'>
    readonly day_of_month: FieldRef<"reminders", 'Int'>
    readonly frequency: FieldRef<"reminders", 'String'>
    readonly reason: FieldRef<"reminders", 'String'>
    readonly is_active: FieldRef<"reminders", 'Boolean'>
    readonly worker_id: FieldRef<"reminders", 'Int'>
    readonly project_id: FieldRef<"reminders", 'Int'>
    readonly last_triggered_at: FieldRef<"reminders", 'DateTime'>
    readonly created_at: FieldRef<"reminders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reminders findUnique
   */
  export type remindersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    /**
     * Filter, which reminders to fetch.
     */
    where: remindersWhereUniqueInput
  }

  /**
   * reminders findUniqueOrThrow
   */
  export type remindersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    /**
     * Filter, which reminders to fetch.
     */
    where: remindersWhereUniqueInput
  }

  /**
   * reminders findFirst
   */
  export type remindersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    /**
     * Filter, which reminders to fetch.
     */
    where?: remindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reminders to fetch.
     */
    orderBy?: remindersOrderByWithRelationInput | remindersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reminders.
     */
    cursor?: remindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reminders.
     */
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[]
  }

  /**
   * reminders findFirstOrThrow
   */
  export type remindersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    /**
     * Filter, which reminders to fetch.
     */
    where?: remindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reminders to fetch.
     */
    orderBy?: remindersOrderByWithRelationInput | remindersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reminders.
     */
    cursor?: remindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reminders.
     */
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[]
  }

  /**
   * reminders findMany
   */
  export type remindersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    /**
     * Filter, which reminders to fetch.
     */
    where?: remindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reminders to fetch.
     */
    orderBy?: remindersOrderByWithRelationInput | remindersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reminders.
     */
    cursor?: remindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reminders.
     */
    skip?: number
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[]
  }

  /**
   * reminders create
   */
  export type remindersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    /**
     * The data needed to create a reminders.
     */
    data: XOR<remindersCreateInput, remindersUncheckedCreateInput>
  }

  /**
   * reminders createMany
   */
  export type remindersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reminders.
     */
    data: remindersCreateManyInput | remindersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reminders createManyAndReturn
   */
  export type remindersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * The data used to create many reminders.
     */
    data: remindersCreateManyInput | remindersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reminders update
   */
  export type remindersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    /**
     * The data needed to update a reminders.
     */
    data: XOR<remindersUpdateInput, remindersUncheckedUpdateInput>
    /**
     * Choose, which reminders to update.
     */
    where: remindersWhereUniqueInput
  }

  /**
   * reminders updateMany
   */
  export type remindersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reminders.
     */
    data: XOR<remindersUpdateManyMutationInput, remindersUncheckedUpdateManyInput>
    /**
     * Filter which reminders to update
     */
    where?: remindersWhereInput
    /**
     * Limit how many reminders to update.
     */
    limit?: number
  }

  /**
   * reminders updateManyAndReturn
   */
  export type remindersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * The data used to update reminders.
     */
    data: XOR<remindersUpdateManyMutationInput, remindersUncheckedUpdateManyInput>
    /**
     * Filter which reminders to update
     */
    where?: remindersWhereInput
    /**
     * Limit how many reminders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reminders upsert
   */
  export type remindersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    /**
     * The filter to search for the reminders to update in case it exists.
     */
    where: remindersWhereUniqueInput
    /**
     * In case the reminders found by the `where` argument doesn't exist, create a new reminders with this data.
     */
    create: XOR<remindersCreateInput, remindersUncheckedCreateInput>
    /**
     * In case the reminders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<remindersUpdateInput, remindersUncheckedUpdateInput>
  }

  /**
   * reminders delete
   */
  export type remindersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    /**
     * Filter which reminders to delete.
     */
    where: remindersWhereUniqueInput
  }

  /**
   * reminders deleteMany
   */
  export type remindersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reminders to delete
     */
    where?: remindersWhereInput
    /**
     * Limit how many reminders to delete.
     */
    limit?: number
  }

  /**
   * reminders without action
   */
  export type remindersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
  }


  /**
   * Model sites
   */

  export type AggregateSites = {
    _count: SitesCountAggregateOutputType | null
    _avg: SitesAvgAggregateOutputType | null
    _sum: SitesSumAggregateOutputType | null
    _min: SitesMinAggregateOutputType | null
    _max: SitesMaxAggregateOutputType | null
  }

  export type SitesAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    radius: number | null
    createdBy: number | null
  }

  export type SitesSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    radius: number | null
    createdBy: number | null
  }

  export type SitesMinAggregateOutputType = {
    id: string | null
    name: string | null
    latitude: number | null
    longitude: number | null
    radius: number | null
    status: string | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SitesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    latitude: number | null
    longitude: number | null
    radius: number | null
    status: string | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SitesCountAggregateOutputType = {
    id: number
    name: number
    latitude: number
    longitude: number
    radius: number
    status: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SitesAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    radius?: true
    createdBy?: true
  }

  export type SitesSumAggregateInputType = {
    latitude?: true
    longitude?: true
    radius?: true
    createdBy?: true
  }

  export type SitesMinAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    radius?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SitesMaxAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    radius?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SitesCountAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    radius?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SitesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sites to aggregate.
     */
    where?: sitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sites to fetch.
     */
    orderBy?: sitesOrderByWithRelationInput | sitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sites
    **/
    _count?: true | SitesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SitesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SitesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SitesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SitesMaxAggregateInputType
  }

  export type GetSitesAggregateType<T extends SitesAggregateArgs> = {
        [P in keyof T & keyof AggregateSites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSites[P]>
      : GetScalarType<T[P], AggregateSites[P]>
  }




  export type sitesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sitesWhereInput
    orderBy?: sitesOrderByWithAggregationInput | sitesOrderByWithAggregationInput[]
    by: SitesScalarFieldEnum[] | SitesScalarFieldEnum
    having?: sitesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SitesCountAggregateInputType | true
    _avg?: SitesAvgAggregateInputType
    _sum?: SitesSumAggregateInputType
    _min?: SitesMinAggregateInputType
    _max?: SitesMaxAggregateInputType
  }

  export type SitesGroupByOutputType = {
    id: string
    name: string
    latitude: number
    longitude: number
    radius: number
    status: string
    createdBy: number
    createdAt: Date
    updatedAt: Date
    _count: SitesCountAggregateOutputType | null
    _avg: SitesAvgAggregateOutputType | null
    _sum: SitesSumAggregateOutputType | null
    _min: SitesMinAggregateOutputType | null
    _max: SitesMaxAggregateOutputType | null
  }

  type GetSitesGroupByPayload<T extends sitesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SitesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SitesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SitesGroupByOutputType[P]>
            : GetScalarType<T[P], SitesGroupByOutputType[P]>
        }
      >
    >


  export type sitesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendances?: boolean | sites$attendancesArgs<ExtArgs>
    users_sites_createdByTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_users_assignedSiteIdTosites?: boolean | sites$users_users_assignedSiteIdTositesArgs<ExtArgs>
    _count?: boolean | SitesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sites"]>

  export type sitesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users_sites_createdByTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sites"]>

  export type sitesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users_sites_createdByTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sites"]>

  export type sitesSelectScalar = {
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type sitesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "latitude" | "longitude" | "radius" | "status" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["sites"]>
  export type sitesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | sites$attendancesArgs<ExtArgs>
    users_sites_createdByTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_users_assignedSiteIdTosites?: boolean | sites$users_users_assignedSiteIdTositesArgs<ExtArgs>
    _count?: boolean | SitesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type sitesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_sites_createdByTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type sitesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_sites_createdByTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $sitesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sites"
    objects: {
      attendances: Prisma.$attendancesPayload<ExtArgs>[]
      users_sites_createdByTousers: Prisma.$usersPayload<ExtArgs>
      users_users_assignedSiteIdTosites: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      latitude: number
      longitude: number
      radius: number
      status: string
      createdBy: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sites"]>
    composites: {}
  }

  type sitesGetPayload<S extends boolean | null | undefined | sitesDefaultArgs> = $Result.GetResult<Prisma.$sitesPayload, S>

  type sitesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sitesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SitesCountAggregateInputType | true
    }

  export interface sitesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sites'], meta: { name: 'sites' } }
    /**
     * Find zero or one Sites that matches the filter.
     * @param {sitesFindUniqueArgs} args - Arguments to find a Sites
     * @example
     * // Get one Sites
     * const sites = await prisma.sites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sitesFindUniqueArgs>(args: SelectSubset<T, sitesFindUniqueArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sites that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sitesFindUniqueOrThrowArgs} args - Arguments to find a Sites
     * @example
     * // Get one Sites
     * const sites = await prisma.sites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sitesFindUniqueOrThrowArgs>(args: SelectSubset<T, sitesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitesFindFirstArgs} args - Arguments to find a Sites
     * @example
     * // Get one Sites
     * const sites = await prisma.sites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sitesFindFirstArgs>(args?: SelectSubset<T, sitesFindFirstArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sites that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitesFindFirstOrThrowArgs} args - Arguments to find a Sites
     * @example
     * // Get one Sites
     * const sites = await prisma.sites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sitesFindFirstOrThrowArgs>(args?: SelectSubset<T, sitesFindFirstOrThrowArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sites
     * const sites = await prisma.sites.findMany()
     * 
     * // Get first 10 Sites
     * const sites = await prisma.sites.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sitesWithIdOnly = await prisma.sites.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sitesFindManyArgs>(args?: SelectSubset<T, sitesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sites.
     * @param {sitesCreateArgs} args - Arguments to create a Sites.
     * @example
     * // Create one Sites
     * const Sites = await prisma.sites.create({
     *   data: {
     *     // ... data to create a Sites
     *   }
     * })
     * 
     */
    create<T extends sitesCreateArgs>(args: SelectSubset<T, sitesCreateArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sites.
     * @param {sitesCreateManyArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const sites = await prisma.sites.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sitesCreateManyArgs>(args?: SelectSubset<T, sitesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sites and returns the data saved in the database.
     * @param {sitesCreateManyAndReturnArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const sites = await prisma.sites.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sites and only return the `id`
     * const sitesWithIdOnly = await prisma.sites.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sitesCreateManyAndReturnArgs>(args?: SelectSubset<T, sitesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sites.
     * @param {sitesDeleteArgs} args - Arguments to delete one Sites.
     * @example
     * // Delete one Sites
     * const Sites = await prisma.sites.delete({
     *   where: {
     *     // ... filter to delete one Sites
     *   }
     * })
     * 
     */
    delete<T extends sitesDeleteArgs>(args: SelectSubset<T, sitesDeleteArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sites.
     * @param {sitesUpdateArgs} args - Arguments to update one Sites.
     * @example
     * // Update one Sites
     * const sites = await prisma.sites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sitesUpdateArgs>(args: SelectSubset<T, sitesUpdateArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sites.
     * @param {sitesDeleteManyArgs} args - Arguments to filter Sites to delete.
     * @example
     * // Delete a few Sites
     * const { count } = await prisma.sites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sitesDeleteManyArgs>(args?: SelectSubset<T, sitesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sites
     * const sites = await prisma.sites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sitesUpdateManyArgs>(args: SelectSubset<T, sitesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites and returns the data updated in the database.
     * @param {sitesUpdateManyAndReturnArgs} args - Arguments to update many Sites.
     * @example
     * // Update many Sites
     * const sites = await prisma.sites.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sites and only return the `id`
     * const sitesWithIdOnly = await prisma.sites.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sitesUpdateManyAndReturnArgs>(args: SelectSubset<T, sitesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sites.
     * @param {sitesUpsertArgs} args - Arguments to update or create a Sites.
     * @example
     * // Update or create a Sites
     * const sites = await prisma.sites.upsert({
     *   create: {
     *     // ... data to create a Sites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sites we want to update
     *   }
     * })
     */
    upsert<T extends sitesUpsertArgs>(args: SelectSubset<T, sitesUpsertArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitesCountArgs} args - Arguments to filter Sites to count.
     * @example
     * // Count the number of Sites
     * const count = await prisma.sites.count({
     *   where: {
     *     // ... the filter for the Sites we want to count
     *   }
     * })
    **/
    count<T extends sitesCountArgs>(
      args?: Subset<T, sitesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SitesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SitesAggregateArgs>(args: Subset<T, SitesAggregateArgs>): Prisma.PrismaPromise<GetSitesAggregateType<T>>

    /**
     * Group by Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitesGroupByArgs} args - Group by arguments.
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
      T extends sitesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sitesGroupByArgs['orderBy'] }
        : { orderBy?: sitesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sitesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSitesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sites model
   */
  readonly fields: sitesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sitesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendances<T extends sites$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, sites$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_sites_createdByTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_users_assignedSiteIdTosites<T extends sites$users_users_assignedSiteIdTositesArgs<ExtArgs> = {}>(args?: Subset<T, sites$users_users_assignedSiteIdTositesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sites model
   */
  interface sitesFieldRefs {
    readonly id: FieldRef<"sites", 'String'>
    readonly name: FieldRef<"sites", 'String'>
    readonly latitude: FieldRef<"sites", 'Float'>
    readonly longitude: FieldRef<"sites", 'Float'>
    readonly radius: FieldRef<"sites", 'Float'>
    readonly status: FieldRef<"sites", 'String'>
    readonly createdBy: FieldRef<"sites", 'Int'>
    readonly createdAt: FieldRef<"sites", 'DateTime'>
    readonly updatedAt: FieldRef<"sites", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sites findUnique
   */
  export type sitesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sites
     */
    omit?: sitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    /**
     * Filter, which sites to fetch.
     */
    where: sitesWhereUniqueInput
  }

  /**
   * sites findUniqueOrThrow
   */
  export type sitesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sites
     */
    omit?: sitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    /**
     * Filter, which sites to fetch.
     */
    where: sitesWhereUniqueInput
  }

  /**
   * sites findFirst
   */
  export type sitesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sites
     */
    omit?: sitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    /**
     * Filter, which sites to fetch.
     */
    where?: sitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sites to fetch.
     */
    orderBy?: sitesOrderByWithRelationInput | sitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sites.
     */
    cursor?: sitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sites.
     */
    distinct?: SitesScalarFieldEnum | SitesScalarFieldEnum[]
  }

  /**
   * sites findFirstOrThrow
   */
  export type sitesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sites
     */
    omit?: sitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    /**
     * Filter, which sites to fetch.
     */
    where?: sitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sites to fetch.
     */
    orderBy?: sitesOrderByWithRelationInput | sitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sites.
     */
    cursor?: sitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sites.
     */
    distinct?: SitesScalarFieldEnum | SitesScalarFieldEnum[]
  }

  /**
   * sites findMany
   */
  export type sitesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sites
     */
    omit?: sitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    /**
     * Filter, which sites to fetch.
     */
    where?: sitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sites to fetch.
     */
    orderBy?: sitesOrderByWithRelationInput | sitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sites.
     */
    cursor?: sitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sites.
     */
    skip?: number
    distinct?: SitesScalarFieldEnum | SitesScalarFieldEnum[]
  }

  /**
   * sites create
   */
  export type sitesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sites
     */
    omit?: sitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    /**
     * The data needed to create a sites.
     */
    data: XOR<sitesCreateInput, sitesUncheckedCreateInput>
  }

  /**
   * sites createMany
   */
  export type sitesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sites.
     */
    data: sitesCreateManyInput | sitesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sites createManyAndReturn
   */
  export type sitesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sites
     */
    omit?: sitesOmit<ExtArgs> | null
    /**
     * The data used to create many sites.
     */
    data: sitesCreateManyInput | sitesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sites update
   */
  export type sitesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sites
     */
    omit?: sitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    /**
     * The data needed to update a sites.
     */
    data: XOR<sitesUpdateInput, sitesUncheckedUpdateInput>
    /**
     * Choose, which sites to update.
     */
    where: sitesWhereUniqueInput
  }

  /**
   * sites updateMany
   */
  export type sitesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sites.
     */
    data: XOR<sitesUpdateManyMutationInput, sitesUncheckedUpdateManyInput>
    /**
     * Filter which sites to update
     */
    where?: sitesWhereInput
    /**
     * Limit how many sites to update.
     */
    limit?: number
  }

  /**
   * sites updateManyAndReturn
   */
  export type sitesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sites
     */
    omit?: sitesOmit<ExtArgs> | null
    /**
     * The data used to update sites.
     */
    data: XOR<sitesUpdateManyMutationInput, sitesUncheckedUpdateManyInput>
    /**
     * Filter which sites to update
     */
    where?: sitesWhereInput
    /**
     * Limit how many sites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sites upsert
   */
  export type sitesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sites
     */
    omit?: sitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    /**
     * The filter to search for the sites to update in case it exists.
     */
    where: sitesWhereUniqueInput
    /**
     * In case the sites found by the `where` argument doesn't exist, create a new sites with this data.
     */
    create: XOR<sitesCreateInput, sitesUncheckedCreateInput>
    /**
     * In case the sites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sitesUpdateInput, sitesUncheckedUpdateInput>
  }

  /**
   * sites delete
   */
  export type sitesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sites
     */
    omit?: sitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    /**
     * Filter which sites to delete.
     */
    where: sitesWhereUniqueInput
  }

  /**
   * sites deleteMany
   */
  export type sitesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sites to delete
     */
    where?: sitesWhereInput
    /**
     * Limit how many sites to delete.
     */
    limit?: number
  }

  /**
   * sites.attendances
   */
  export type sites$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendances
     */
    select?: attendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendances
     */
    omit?: attendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendancesInclude<ExtArgs> | null
    where?: attendancesWhereInput
    orderBy?: attendancesOrderByWithRelationInput | attendancesOrderByWithRelationInput[]
    cursor?: attendancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendancesScalarFieldEnum | AttendancesScalarFieldEnum[]
  }

  /**
   * sites.users_users_assignedSiteIdTosites
   */
  export type sites$users_users_assignedSiteIdTositesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * sites without action
   */
  export type sitesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sites
     */
    omit?: sitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    phone: string | null
    dob: string | null
    role: string | null
    name: string | null
    created_at: Date | null
    assignedSiteId: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    phone: string | null
    dob: string | null
    role: string | null
    name: string | null
    created_at: Date | null
    assignedSiteId: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    phone: number
    dob: number
    role: number
    name: number
    created_at: number
    assignedSiteId: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    phone?: true
    dob?: true
    role?: true
    name?: true
    created_at?: true
    assignedSiteId?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    phone?: true
    dob?: true
    role?: true
    name?: true
    created_at?: true
    assignedSiteId?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    phone?: true
    dob?: true
    role?: true
    name?: true
    created_at?: true
    assignedSiteId?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    phone: string
    dob: string
    role: string
    name: string | null
    created_at: Date
    assignedSiteId: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    dob?: boolean
    role?: boolean
    name?: boolean
    created_at?: boolean
    assignedSiteId?: boolean
    attendances?: boolean | users$attendancesArgs<ExtArgs>
    bills?: boolean | users$billsArgs<ExtArgs>
    payment_requests_payment_requests_pm_idTousers?: boolean | users$payment_requests_payment_requests_pm_idTousersArgs<ExtArgs>
    payment_requests_payment_requests_supervisor_idTousers?: boolean | users$payment_requests_payment_requests_supervisor_idTousersArgs<ExtArgs>
    project_progress?: boolean | users$project_progressArgs<ExtArgs>
    sites_sites_createdByTousers?: boolean | users$sites_sites_createdByTousersArgs<ExtArgs>
    sites_users_assignedSiteIdTosites?: boolean | users$sites_users_assignedSiteIdTositesArgs<ExtArgs>
    projects?: boolean | users$projectsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    dob?: boolean
    role?: boolean
    name?: boolean
    created_at?: boolean
    assignedSiteId?: boolean
    sites_users_assignedSiteIdTosites?: boolean | users$sites_users_assignedSiteIdTositesArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    dob?: boolean
    role?: boolean
    name?: boolean
    created_at?: boolean
    assignedSiteId?: boolean
    sites_users_assignedSiteIdTosites?: boolean | users$sites_users_assignedSiteIdTositesArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    phone?: boolean
    dob?: boolean
    role?: boolean
    name?: boolean
    created_at?: boolean
    assignedSiteId?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "dob" | "role" | "name" | "created_at" | "assignedSiteId", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | users$attendancesArgs<ExtArgs>
    bills?: boolean | users$billsArgs<ExtArgs>
    payment_requests_payment_requests_pm_idTousers?: boolean | users$payment_requests_payment_requests_pm_idTousersArgs<ExtArgs>
    payment_requests_payment_requests_supervisor_idTousers?: boolean | users$payment_requests_payment_requests_supervisor_idTousersArgs<ExtArgs>
    project_progress?: boolean | users$project_progressArgs<ExtArgs>
    sites_sites_createdByTousers?: boolean | users$sites_sites_createdByTousersArgs<ExtArgs>
    sites_users_assignedSiteIdTosites?: boolean | users$sites_users_assignedSiteIdTositesArgs<ExtArgs>
    projects?: boolean | users$projectsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sites_users_assignedSiteIdTosites?: boolean | users$sites_users_assignedSiteIdTositesArgs<ExtArgs>
  }
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sites_users_assignedSiteIdTosites?: boolean | users$sites_users_assignedSiteIdTositesArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      attendances: Prisma.$attendancesPayload<ExtArgs>[]
      bills: Prisma.$billsPayload<ExtArgs>[]
      payment_requests_payment_requests_pm_idTousers: Prisma.$payment_requestsPayload<ExtArgs>[]
      payment_requests_payment_requests_supervisor_idTousers: Prisma.$payment_requestsPayload<ExtArgs>[]
      project_progress: Prisma.$project_progressPayload<ExtArgs>[]
      sites_sites_createdByTousers: Prisma.$sitesPayload<ExtArgs>[]
      sites_users_assignedSiteIdTosites: Prisma.$sitesPayload<ExtArgs> | null
      projects: Prisma.$projectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      phone: string
      dob: string
      role: string
      name: string | null
      created_at: Date
      assignedSiteId: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendances<T extends users$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, users$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bills<T extends users$billsArgs<ExtArgs> = {}>(args?: Subset<T, users$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$billsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment_requests_payment_requests_pm_idTousers<T extends users$payment_requests_payment_requests_pm_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$payment_requests_payment_requests_pm_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment_requests_payment_requests_supervisor_idTousers<T extends users$payment_requests_payment_requests_supervisor_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$payment_requests_payment_requests_supervisor_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project_progress<T extends users$project_progressArgs<ExtArgs> = {}>(args?: Subset<T, users$project_progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sites_sites_createdByTousers<T extends users$sites_sites_createdByTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$sites_sites_createdByTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sites_users_assignedSiteIdTosites<T extends users$sites_users_assignedSiteIdTositesArgs<ExtArgs> = {}>(args?: Subset<T, users$sites_users_assignedSiteIdTositesArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    projects<T extends users$projectsArgs<ExtArgs> = {}>(args?: Subset<T, users$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly phone: FieldRef<"users", 'String'>
    readonly dob: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly assignedSiteId: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.attendances
   */
  export type users$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendances
     */
    select?: attendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendances
     */
    omit?: attendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendancesInclude<ExtArgs> | null
    where?: attendancesWhereInput
    orderBy?: attendancesOrderByWithRelationInput | attendancesOrderByWithRelationInput[]
    cursor?: attendancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendancesScalarFieldEnum | AttendancesScalarFieldEnum[]
  }

  /**
   * users.bills
   */
  export type users$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bills
     */
    select?: billsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bills
     */
    omit?: billsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: billsInclude<ExtArgs> | null
    where?: billsWhereInput
    orderBy?: billsOrderByWithRelationInput | billsOrderByWithRelationInput[]
    cursor?: billsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * users.payment_requests_payment_requests_pm_idTousers
   */
  export type users$payment_requests_payment_requests_pm_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_requests
     */
    select?: payment_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_requests
     */
    omit?: payment_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_requestsInclude<ExtArgs> | null
    where?: payment_requestsWhereInput
    orderBy?: payment_requestsOrderByWithRelationInput | payment_requestsOrderByWithRelationInput[]
    cursor?: payment_requestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Payment_requestsScalarFieldEnum | Payment_requestsScalarFieldEnum[]
  }

  /**
   * users.payment_requests_payment_requests_supervisor_idTousers
   */
  export type users$payment_requests_payment_requests_supervisor_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_requests
     */
    select?: payment_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_requests
     */
    omit?: payment_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_requestsInclude<ExtArgs> | null
    where?: payment_requestsWhereInput
    orderBy?: payment_requestsOrderByWithRelationInput | payment_requestsOrderByWithRelationInput[]
    cursor?: payment_requestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Payment_requestsScalarFieldEnum | Payment_requestsScalarFieldEnum[]
  }

  /**
   * users.project_progress
   */
  export type users$project_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_progress
     */
    select?: project_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_progress
     */
    omit?: project_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_progressInclude<ExtArgs> | null
    where?: project_progressWhereInput
    orderBy?: project_progressOrderByWithRelationInput | project_progressOrderByWithRelationInput[]
    cursor?: project_progressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Project_progressScalarFieldEnum | Project_progressScalarFieldEnum[]
  }

  /**
   * users.sites_sites_createdByTousers
   */
  export type users$sites_sites_createdByTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sites
     */
    omit?: sitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    where?: sitesWhereInput
    orderBy?: sitesOrderByWithRelationInput | sitesOrderByWithRelationInput[]
    cursor?: sitesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SitesScalarFieldEnum | SitesScalarFieldEnum[]
  }

  /**
   * users.sites_users_assignedSiteIdTosites
   */
  export type users$sites_users_assignedSiteIdTositesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sites
     */
    omit?: sitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    where?: sitesWhereInput
  }

  /**
   * users.projects
   */
  export type users$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    cursor?: projectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model workers
   */

  export type AggregateWorkers = {
    _count: WorkersCountAggregateOutputType | null
    _avg: WorkersAvgAggregateOutputType | null
    _sum: WorkersSumAggregateOutputType | null
    _min: WorkersMinAggregateOutputType | null
    _max: WorkersMaxAggregateOutputType | null
  }

  export type WorkersAvgAggregateOutputType = {
    id: number | null
  }

  export type WorkersSumAggregateOutputType = {
    id: number | null
  }

  export type WorkersMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    address: string | null
    designation: string | null
    joining_date: Date | null
    status: string | null
    notes: string | null
    created_at: Date | null
  }

  export type WorkersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    address: string | null
    designation: string | null
    joining_date: Date | null
    status: string | null
    notes: string | null
    created_at: Date | null
  }

  export type WorkersCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    address: number
    designation: number
    joining_date: number
    status: number
    notes: number
    created_at: number
    _all: number
  }


  export type WorkersAvgAggregateInputType = {
    id?: true
  }

  export type WorkersSumAggregateInputType = {
    id?: true
  }

  export type WorkersMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    designation?: true
    joining_date?: true
    status?: true
    notes?: true
    created_at?: true
  }

  export type WorkersMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    designation?: true
    joining_date?: true
    status?: true
    notes?: true
    created_at?: true
  }

  export type WorkersCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    designation?: true
    joining_date?: true
    status?: true
    notes?: true
    created_at?: true
    _all?: true
  }

  export type WorkersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workers to aggregate.
     */
    where?: workersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workers to fetch.
     */
    orderBy?: workersOrderByWithRelationInput | workersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workers
    **/
    _count?: true | WorkersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkersMaxAggregateInputType
  }

  export type GetWorkersAggregateType<T extends WorkersAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkers[P]>
      : GetScalarType<T[P], AggregateWorkers[P]>
  }




  export type workersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workersWhereInput
    orderBy?: workersOrderByWithAggregationInput | workersOrderByWithAggregationInput[]
    by: WorkersScalarFieldEnum[] | WorkersScalarFieldEnum
    having?: workersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkersCountAggregateInputType | true
    _avg?: WorkersAvgAggregateInputType
    _sum?: WorkersSumAggregateInputType
    _min?: WorkersMinAggregateInputType
    _max?: WorkersMaxAggregateInputType
  }

  export type WorkersGroupByOutputType = {
    id: number
    name: string
    phone: string | null
    address: string | null
    designation: string | null
    joining_date: Date | null
    status: string
    notes: string | null
    created_at: Date
    _count: WorkersCountAggregateOutputType | null
    _avg: WorkersAvgAggregateOutputType | null
    _sum: WorkersSumAggregateOutputType | null
    _min: WorkersMinAggregateOutputType | null
    _max: WorkersMaxAggregateOutputType | null
  }

  type GetWorkersGroupByPayload<T extends workersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkersGroupByOutputType[P]>
            : GetScalarType<T[P], WorkersGroupByOutputType[P]>
        }
      >
    >


  export type workersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    designation?: boolean
    joining_date?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    materials?: boolean | workers$materialsArgs<ExtArgs>
    reminders?: boolean | workers$remindersArgs<ExtArgs>
    _count?: boolean | WorkersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workers"]>

  export type workersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    designation?: boolean
    joining_date?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["workers"]>

  export type workersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    designation?: boolean
    joining_date?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["workers"]>

  export type workersSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    designation?: boolean
    joining_date?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
  }

  export type workersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "address" | "designation" | "joining_date" | "status" | "notes" | "created_at", ExtArgs["result"]["workers"]>
  export type workersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | workers$materialsArgs<ExtArgs>
    reminders?: boolean | workers$remindersArgs<ExtArgs>
    _count?: boolean | WorkersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type workersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type workersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $workersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workers"
    objects: {
      materials: Prisma.$materialsPayload<ExtArgs>[]
      reminders: Prisma.$remindersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string | null
      address: string | null
      designation: string | null
      joining_date: Date | null
      status: string
      notes: string | null
      created_at: Date
    }, ExtArgs["result"]["workers"]>
    composites: {}
  }

  type workersGetPayload<S extends boolean | null | undefined | workersDefaultArgs> = $Result.GetResult<Prisma.$workersPayload, S>

  type workersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkersCountAggregateInputType | true
    }

  export interface workersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workers'], meta: { name: 'workers' } }
    /**
     * Find zero or one Workers that matches the filter.
     * @param {workersFindUniqueArgs} args - Arguments to find a Workers
     * @example
     * // Get one Workers
     * const workers = await prisma.workers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workersFindUniqueArgs>(args: SelectSubset<T, workersFindUniqueArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workersFindUniqueOrThrowArgs} args - Arguments to find a Workers
     * @example
     * // Get one Workers
     * const workers = await prisma.workers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workersFindUniqueOrThrowArgs>(args: SelectSubset<T, workersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workersFindFirstArgs} args - Arguments to find a Workers
     * @example
     * // Get one Workers
     * const workers = await prisma.workers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workersFindFirstArgs>(args?: SelectSubset<T, workersFindFirstArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workersFindFirstOrThrowArgs} args - Arguments to find a Workers
     * @example
     * // Get one Workers
     * const workers = await prisma.workers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workersFindFirstOrThrowArgs>(args?: SelectSubset<T, workersFindFirstOrThrowArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workers
     * const workers = await prisma.workers.findMany()
     * 
     * // Get first 10 Workers
     * const workers = await prisma.workers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workersWithIdOnly = await prisma.workers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workersFindManyArgs>(args?: SelectSubset<T, workersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workers.
     * @param {workersCreateArgs} args - Arguments to create a Workers.
     * @example
     * // Create one Workers
     * const Workers = await prisma.workers.create({
     *   data: {
     *     // ... data to create a Workers
     *   }
     * })
     * 
     */
    create<T extends workersCreateArgs>(args: SelectSubset<T, workersCreateArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workers.
     * @param {workersCreateManyArgs} args - Arguments to create many Workers.
     * @example
     * // Create many Workers
     * const workers = await prisma.workers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workersCreateManyArgs>(args?: SelectSubset<T, workersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workers and returns the data saved in the database.
     * @param {workersCreateManyAndReturnArgs} args - Arguments to create many Workers.
     * @example
     * // Create many Workers
     * const workers = await prisma.workers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workers and only return the `id`
     * const workersWithIdOnly = await prisma.workers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workersCreateManyAndReturnArgs>(args?: SelectSubset<T, workersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workers.
     * @param {workersDeleteArgs} args - Arguments to delete one Workers.
     * @example
     * // Delete one Workers
     * const Workers = await prisma.workers.delete({
     *   where: {
     *     // ... filter to delete one Workers
     *   }
     * })
     * 
     */
    delete<T extends workersDeleteArgs>(args: SelectSubset<T, workersDeleteArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workers.
     * @param {workersUpdateArgs} args - Arguments to update one Workers.
     * @example
     * // Update one Workers
     * const workers = await prisma.workers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workersUpdateArgs>(args: SelectSubset<T, workersUpdateArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workers.
     * @param {workersDeleteManyArgs} args - Arguments to filter Workers to delete.
     * @example
     * // Delete a few Workers
     * const { count } = await prisma.workers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workersDeleteManyArgs>(args?: SelectSubset<T, workersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workers
     * const workers = await prisma.workers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workersUpdateManyArgs>(args: SelectSubset<T, workersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workers and returns the data updated in the database.
     * @param {workersUpdateManyAndReturnArgs} args - Arguments to update many Workers.
     * @example
     * // Update many Workers
     * const workers = await prisma.workers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workers and only return the `id`
     * const workersWithIdOnly = await prisma.workers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends workersUpdateManyAndReturnArgs>(args: SelectSubset<T, workersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workers.
     * @param {workersUpsertArgs} args - Arguments to update or create a Workers.
     * @example
     * // Update or create a Workers
     * const workers = await prisma.workers.upsert({
     *   create: {
     *     // ... data to create a Workers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workers we want to update
     *   }
     * })
     */
    upsert<T extends workersUpsertArgs>(args: SelectSubset<T, workersUpsertArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workersCountArgs} args - Arguments to filter Workers to count.
     * @example
     * // Count the number of Workers
     * const count = await prisma.workers.count({
     *   where: {
     *     // ... the filter for the Workers we want to count
     *   }
     * })
    **/
    count<T extends workersCountArgs>(
      args?: Subset<T, workersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkersAggregateArgs>(args: Subset<T, WorkersAggregateArgs>): Prisma.PrismaPromise<GetWorkersAggregateType<T>>

    /**
     * Group by Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workersGroupByArgs} args - Group by arguments.
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
      T extends workersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workersGroupByArgs['orderBy'] }
        : { orderBy?: workersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, workersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workers model
   */
  readonly fields: workersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materials<T extends workers$materialsArgs<ExtArgs> = {}>(args?: Subset<T, workers$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reminders<T extends workers$remindersArgs<ExtArgs> = {}>(args?: Subset<T, workers$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workers model
   */
  interface workersFieldRefs {
    readonly id: FieldRef<"workers", 'Int'>
    readonly name: FieldRef<"workers", 'String'>
    readonly phone: FieldRef<"workers", 'String'>
    readonly address: FieldRef<"workers", 'String'>
    readonly designation: FieldRef<"workers", 'String'>
    readonly joining_date: FieldRef<"workers", 'DateTime'>
    readonly status: FieldRef<"workers", 'String'>
    readonly notes: FieldRef<"workers", 'String'>
    readonly created_at: FieldRef<"workers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * workers findUnique
   */
  export type workersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workers
     */
    omit?: workersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    /**
     * Filter, which workers to fetch.
     */
    where: workersWhereUniqueInput
  }

  /**
   * workers findUniqueOrThrow
   */
  export type workersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workers
     */
    omit?: workersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    /**
     * Filter, which workers to fetch.
     */
    where: workersWhereUniqueInput
  }

  /**
   * workers findFirst
   */
  export type workersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workers
     */
    omit?: workersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    /**
     * Filter, which workers to fetch.
     */
    where?: workersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workers to fetch.
     */
    orderBy?: workersOrderByWithRelationInput | workersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workers.
     */
    cursor?: workersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workers.
     */
    distinct?: WorkersScalarFieldEnum | WorkersScalarFieldEnum[]
  }

  /**
   * workers findFirstOrThrow
   */
  export type workersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workers
     */
    omit?: workersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    /**
     * Filter, which workers to fetch.
     */
    where?: workersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workers to fetch.
     */
    orderBy?: workersOrderByWithRelationInput | workersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workers.
     */
    cursor?: workersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workers.
     */
    distinct?: WorkersScalarFieldEnum | WorkersScalarFieldEnum[]
  }

  /**
   * workers findMany
   */
  export type workersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workers
     */
    omit?: workersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    /**
     * Filter, which workers to fetch.
     */
    where?: workersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workers to fetch.
     */
    orderBy?: workersOrderByWithRelationInput | workersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workers.
     */
    cursor?: workersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workers.
     */
    skip?: number
    distinct?: WorkersScalarFieldEnum | WorkersScalarFieldEnum[]
  }

  /**
   * workers create
   */
  export type workersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workers
     */
    omit?: workersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    /**
     * The data needed to create a workers.
     */
    data: XOR<workersCreateInput, workersUncheckedCreateInput>
  }

  /**
   * workers createMany
   */
  export type workersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workers.
     */
    data: workersCreateManyInput | workersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workers createManyAndReturn
   */
  export type workersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workers
     */
    omit?: workersOmit<ExtArgs> | null
    /**
     * The data used to create many workers.
     */
    data: workersCreateManyInput | workersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workers update
   */
  export type workersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workers
     */
    omit?: workersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    /**
     * The data needed to update a workers.
     */
    data: XOR<workersUpdateInput, workersUncheckedUpdateInput>
    /**
     * Choose, which workers to update.
     */
    where: workersWhereUniqueInput
  }

  /**
   * workers updateMany
   */
  export type workersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workers.
     */
    data: XOR<workersUpdateManyMutationInput, workersUncheckedUpdateManyInput>
    /**
     * Filter which workers to update
     */
    where?: workersWhereInput
    /**
     * Limit how many workers to update.
     */
    limit?: number
  }

  /**
   * workers updateManyAndReturn
   */
  export type workersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workers
     */
    omit?: workersOmit<ExtArgs> | null
    /**
     * The data used to update workers.
     */
    data: XOR<workersUpdateManyMutationInput, workersUncheckedUpdateManyInput>
    /**
     * Filter which workers to update
     */
    where?: workersWhereInput
    /**
     * Limit how many workers to update.
     */
    limit?: number
  }

  /**
   * workers upsert
   */
  export type workersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workers
     */
    omit?: workersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    /**
     * The filter to search for the workers to update in case it exists.
     */
    where: workersWhereUniqueInput
    /**
     * In case the workers found by the `where` argument doesn't exist, create a new workers with this data.
     */
    create: XOR<workersCreateInput, workersUncheckedCreateInput>
    /**
     * In case the workers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workersUpdateInput, workersUncheckedUpdateInput>
  }

  /**
   * workers delete
   */
  export type workersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workers
     */
    omit?: workersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    /**
     * Filter which workers to delete.
     */
    where: workersWhereUniqueInput
  }

  /**
   * workers deleteMany
   */
  export type workersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workers to delete
     */
    where?: workersWhereInput
    /**
     * Limit how many workers to delete.
     */
    limit?: number
  }

  /**
   * workers.materials
   */
  export type workers$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    where?: materialsWhereInput
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    cursor?: materialsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * workers.reminders
   */
  export type workers$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    where?: remindersWhereInput
    orderBy?: remindersOrderByWithRelationInput | remindersOrderByWithRelationInput[]
    cursor?: remindersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[]
  }

  /**
   * workers without action
   */
  export type workersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workers
     */
    omit?: workersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
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


  export const Archived_progressScalarFieldEnum: {
    id: 'id',
    percentage: 'percentage',
    date: 'date',
    notes: 'notes',
    project_id: 'project_id',
    user_name: 'user_name',
    user_role: 'user_role',
    original_created_at: 'original_created_at',
    archived_at: 'archived_at'
  };

  export type Archived_progressScalarFieldEnum = (typeof Archived_progressScalarFieldEnum)[keyof typeof Archived_progressScalarFieldEnum]


  export const AttendancesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    siteId: 'siteId',
    checkInTime: 'checkInTime',
    checkOutTime: 'checkOutTime',
    checkInLatitude: 'checkInLatitude',
    checkInLongitude: 'checkInLongitude',
    checkOutLatitude: 'checkOutLatitude',
    checkOutLongitude: 'checkOutLongitude',
    checkInAccuracy: 'checkInAccuracy',
    checkOutAccuracy: 'checkOutAccuracy',
    durationMinutes: 'durationMinutes',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendancesScalarFieldEnum = (typeof AttendancesScalarFieldEnum)[keyof typeof AttendancesScalarFieldEnum]


  export const BillsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image_url: 'image_url',
    image_file_id: 'image_file_id',
    amount: 'amount',
    project_id: 'project_id',
    creator_id: 'creator_id',
    created_at: 'created_at'
  };

  export type BillsScalarFieldEnum = (typeof BillsScalarFieldEnum)[keyof typeof BillsScalarFieldEnum]


  export const MaterialsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    quantity: 'quantity',
    unit_price: 'unit_price',
    description: 'description',
    image_url: 'image_url',
    image_file_id: 'image_file_id',
    request_id: 'request_id',
    worker_id: 'worker_id'
  };

  export type MaterialsScalarFieldEnum = (typeof MaterialsScalarFieldEnum)[keyof typeof MaterialsScalarFieldEnum]


  export const Payment_requestsScalarFieldEnum: {
    id: 'id',
    status: 'status',
    total_amount: 'total_amount',
    supervisor_id: 'supervisor_id',
    pm_id: 'pm_id',
    project_id: 'project_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Payment_requestsScalarFieldEnum = (typeof Payment_requestsScalarFieldEnum)[keyof typeof Payment_requestsScalarFieldEnum]


  export const Project_progressScalarFieldEnum: {
    id: 'id',
    percentage: 'percentage',
    date: 'date',
    notes: 'notes',
    project_id: 'project_id',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type Project_progressScalarFieldEnum = (typeof Project_progressScalarFieldEnum)[keyof typeof Project_progressScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    expense_heads: 'expense_heads',
    budget: 'budget',
    created_at: 'created_at'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const RemindersScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    day_of_month: 'day_of_month',
    frequency: 'frequency',
    reason: 'reason',
    is_active: 'is_active',
    worker_id: 'worker_id',
    project_id: 'project_id',
    last_triggered_at: 'last_triggered_at',
    created_at: 'created_at'
  };

  export type RemindersScalarFieldEnum = (typeof RemindersScalarFieldEnum)[keyof typeof RemindersScalarFieldEnum]


  export const SitesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    latitude: 'latitude',
    longitude: 'longitude',
    radius: 'radius',
    status: 'status',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SitesScalarFieldEnum = (typeof SitesScalarFieldEnum)[keyof typeof SitesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    dob: 'dob',
    role: 'role',
    name: 'name',
    created_at: 'created_at',
    assignedSiteId: 'assignedSiteId'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const WorkersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    address: 'address',
    designation: 'designation',
    joining_date: 'joining_date',
    status: 'status',
    notes: 'notes',
    created_at: 'created_at'
  };

  export type WorkersScalarFieldEnum = (typeof WorkersScalarFieldEnum)[keyof typeof WorkersScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus[]'
   */
  export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type archived_progressWhereInput = {
    AND?: archived_progressWhereInput | archived_progressWhereInput[]
    OR?: archived_progressWhereInput[]
    NOT?: archived_progressWhereInput | archived_progressWhereInput[]
    id?: IntFilter<"archived_progress"> | number
    percentage?: IntFilter<"archived_progress"> | number
    date?: StringFilter<"archived_progress"> | string
    notes?: StringNullableFilter<"archived_progress"> | string | null
    project_id?: IntFilter<"archived_progress"> | number
    user_name?: StringFilter<"archived_progress"> | string
    user_role?: StringFilter<"archived_progress"> | string
    original_created_at?: DateTimeFilter<"archived_progress"> | Date | string
    archived_at?: DateTimeFilter<"archived_progress"> | Date | string
    projects?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
  }

  export type archived_progressOrderByWithRelationInput = {
    id?: SortOrder
    percentage?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    project_id?: SortOrder
    user_name?: SortOrder
    user_role?: SortOrder
    original_created_at?: SortOrder
    archived_at?: SortOrder
    projects?: projectsOrderByWithRelationInput
  }

  export type archived_progressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: archived_progressWhereInput | archived_progressWhereInput[]
    OR?: archived_progressWhereInput[]
    NOT?: archived_progressWhereInput | archived_progressWhereInput[]
    percentage?: IntFilter<"archived_progress"> | number
    date?: StringFilter<"archived_progress"> | string
    notes?: StringNullableFilter<"archived_progress"> | string | null
    project_id?: IntFilter<"archived_progress"> | number
    user_name?: StringFilter<"archived_progress"> | string
    user_role?: StringFilter<"archived_progress"> | string
    original_created_at?: DateTimeFilter<"archived_progress"> | Date | string
    archived_at?: DateTimeFilter<"archived_progress"> | Date | string
    projects?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
  }, "id">

  export type archived_progressOrderByWithAggregationInput = {
    id?: SortOrder
    percentage?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    project_id?: SortOrder
    user_name?: SortOrder
    user_role?: SortOrder
    original_created_at?: SortOrder
    archived_at?: SortOrder
    _count?: archived_progressCountOrderByAggregateInput
    _avg?: archived_progressAvgOrderByAggregateInput
    _max?: archived_progressMaxOrderByAggregateInput
    _min?: archived_progressMinOrderByAggregateInput
    _sum?: archived_progressSumOrderByAggregateInput
  }

  export type archived_progressScalarWhereWithAggregatesInput = {
    AND?: archived_progressScalarWhereWithAggregatesInput | archived_progressScalarWhereWithAggregatesInput[]
    OR?: archived_progressScalarWhereWithAggregatesInput[]
    NOT?: archived_progressScalarWhereWithAggregatesInput | archived_progressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"archived_progress"> | number
    percentage?: IntWithAggregatesFilter<"archived_progress"> | number
    date?: StringWithAggregatesFilter<"archived_progress"> | string
    notes?: StringNullableWithAggregatesFilter<"archived_progress"> | string | null
    project_id?: IntWithAggregatesFilter<"archived_progress"> | number
    user_name?: StringWithAggregatesFilter<"archived_progress"> | string
    user_role?: StringWithAggregatesFilter<"archived_progress"> | string
    original_created_at?: DateTimeWithAggregatesFilter<"archived_progress"> | Date | string
    archived_at?: DateTimeWithAggregatesFilter<"archived_progress"> | Date | string
  }

  export type attendancesWhereInput = {
    AND?: attendancesWhereInput | attendancesWhereInput[]
    OR?: attendancesWhereInput[]
    NOT?: attendancesWhereInput | attendancesWhereInput[]
    id?: UuidFilter<"attendances"> | string
    userId?: IntFilter<"attendances"> | number
    siteId?: UuidFilter<"attendances"> | string
    checkInTime?: DateTimeFilter<"attendances"> | Date | string
    checkOutTime?: DateTimeNullableFilter<"attendances"> | Date | string | null
    checkInLatitude?: FloatFilter<"attendances"> | number
    checkInLongitude?: FloatFilter<"attendances"> | number
    checkOutLatitude?: FloatNullableFilter<"attendances"> | number | null
    checkOutLongitude?: FloatNullableFilter<"attendances"> | number | null
    checkInAccuracy?: FloatFilter<"attendances"> | number
    checkOutAccuracy?: FloatNullableFilter<"attendances"> | number | null
    durationMinutes?: IntNullableFilter<"attendances"> | number | null
    status?: EnumAttendanceStatusFilter<"attendances"> | $Enums.AttendanceStatus
    createdAt?: DateTimeFilter<"attendances"> | Date | string
    updatedAt?: DateTimeFilter<"attendances"> | Date | string
    sites?: XOR<SitesScalarRelationFilter, sitesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type attendancesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    siteId?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrderInput | SortOrder
    checkInLatitude?: SortOrder
    checkInLongitude?: SortOrder
    checkOutLatitude?: SortOrderInput | SortOrder
    checkOutLongitude?: SortOrderInput | SortOrder
    checkInAccuracy?: SortOrder
    checkOutAccuracy?: SortOrderInput | SortOrder
    durationMinutes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sites?: sitesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type attendancesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: attendancesWhereInput | attendancesWhereInput[]
    OR?: attendancesWhereInput[]
    NOT?: attendancesWhereInput | attendancesWhereInput[]
    userId?: IntFilter<"attendances"> | number
    siteId?: UuidFilter<"attendances"> | string
    checkInTime?: DateTimeFilter<"attendances"> | Date | string
    checkOutTime?: DateTimeNullableFilter<"attendances"> | Date | string | null
    checkInLatitude?: FloatFilter<"attendances"> | number
    checkInLongitude?: FloatFilter<"attendances"> | number
    checkOutLatitude?: FloatNullableFilter<"attendances"> | number | null
    checkOutLongitude?: FloatNullableFilter<"attendances"> | number | null
    checkInAccuracy?: FloatFilter<"attendances"> | number
    checkOutAccuracy?: FloatNullableFilter<"attendances"> | number | null
    durationMinutes?: IntNullableFilter<"attendances"> | number | null
    status?: EnumAttendanceStatusFilter<"attendances"> | $Enums.AttendanceStatus
    createdAt?: DateTimeFilter<"attendances"> | Date | string
    updatedAt?: DateTimeFilter<"attendances"> | Date | string
    sites?: XOR<SitesScalarRelationFilter, sitesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type attendancesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    siteId?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrderInput | SortOrder
    checkInLatitude?: SortOrder
    checkInLongitude?: SortOrder
    checkOutLatitude?: SortOrderInput | SortOrder
    checkOutLongitude?: SortOrderInput | SortOrder
    checkInAccuracy?: SortOrder
    checkOutAccuracy?: SortOrderInput | SortOrder
    durationMinutes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: attendancesCountOrderByAggregateInput
    _avg?: attendancesAvgOrderByAggregateInput
    _max?: attendancesMaxOrderByAggregateInput
    _min?: attendancesMinOrderByAggregateInput
    _sum?: attendancesSumOrderByAggregateInput
  }

  export type attendancesScalarWhereWithAggregatesInput = {
    AND?: attendancesScalarWhereWithAggregatesInput | attendancesScalarWhereWithAggregatesInput[]
    OR?: attendancesScalarWhereWithAggregatesInput[]
    NOT?: attendancesScalarWhereWithAggregatesInput | attendancesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"attendances"> | string
    userId?: IntWithAggregatesFilter<"attendances"> | number
    siteId?: UuidWithAggregatesFilter<"attendances"> | string
    checkInTime?: DateTimeWithAggregatesFilter<"attendances"> | Date | string
    checkOutTime?: DateTimeNullableWithAggregatesFilter<"attendances"> | Date | string | null
    checkInLatitude?: FloatWithAggregatesFilter<"attendances"> | number
    checkInLongitude?: FloatWithAggregatesFilter<"attendances"> | number
    checkOutLatitude?: FloatNullableWithAggregatesFilter<"attendances"> | number | null
    checkOutLongitude?: FloatNullableWithAggregatesFilter<"attendances"> | number | null
    checkInAccuracy?: FloatWithAggregatesFilter<"attendances"> | number
    checkOutAccuracy?: FloatNullableWithAggregatesFilter<"attendances"> | number | null
    durationMinutes?: IntNullableWithAggregatesFilter<"attendances"> | number | null
    status?: EnumAttendanceStatusWithAggregatesFilter<"attendances"> | $Enums.AttendanceStatus
    createdAt?: DateTimeWithAggregatesFilter<"attendances"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"attendances"> | Date | string
  }

  export type billsWhereInput = {
    AND?: billsWhereInput | billsWhereInput[]
    OR?: billsWhereInput[]
    NOT?: billsWhereInput | billsWhereInput[]
    id?: IntFilter<"bills"> | number
    name?: StringFilter<"bills"> | string
    image_url?: StringNullableFilter<"bills"> | string | null
    image_file_id?: StringNullableFilter<"bills"> | string | null
    amount?: DecimalNullableFilter<"bills"> | Decimal | DecimalJsLike | number | string | null
    project_id?: IntFilter<"bills"> | number
    creator_id?: IntFilter<"bills"> | number
    created_at?: DateTimeFilter<"bills"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    projects?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
  }

  export type billsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrderInput | SortOrder
    image_file_id?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    project_id?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
    users?: usersOrderByWithRelationInput
    projects?: projectsOrderByWithRelationInput
  }

  export type billsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: billsWhereInput | billsWhereInput[]
    OR?: billsWhereInput[]
    NOT?: billsWhereInput | billsWhereInput[]
    name?: StringFilter<"bills"> | string
    image_url?: StringNullableFilter<"bills"> | string | null
    image_file_id?: StringNullableFilter<"bills"> | string | null
    amount?: DecimalNullableFilter<"bills"> | Decimal | DecimalJsLike | number | string | null
    project_id?: IntFilter<"bills"> | number
    creator_id?: IntFilter<"bills"> | number
    created_at?: DateTimeFilter<"bills"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    projects?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
  }, "id">

  export type billsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrderInput | SortOrder
    image_file_id?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    project_id?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
    _count?: billsCountOrderByAggregateInput
    _avg?: billsAvgOrderByAggregateInput
    _max?: billsMaxOrderByAggregateInput
    _min?: billsMinOrderByAggregateInput
    _sum?: billsSumOrderByAggregateInput
  }

  export type billsScalarWhereWithAggregatesInput = {
    AND?: billsScalarWhereWithAggregatesInput | billsScalarWhereWithAggregatesInput[]
    OR?: billsScalarWhereWithAggregatesInput[]
    NOT?: billsScalarWhereWithAggregatesInput | billsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bills"> | number
    name?: StringWithAggregatesFilter<"bills"> | string
    image_url?: StringNullableWithAggregatesFilter<"bills"> | string | null
    image_file_id?: StringNullableWithAggregatesFilter<"bills"> | string | null
    amount?: DecimalNullableWithAggregatesFilter<"bills"> | Decimal | DecimalJsLike | number | string | null
    project_id?: IntWithAggregatesFilter<"bills"> | number
    creator_id?: IntWithAggregatesFilter<"bills"> | number
    created_at?: DateTimeWithAggregatesFilter<"bills"> | Date | string
  }

  export type materialsWhereInput = {
    AND?: materialsWhereInput | materialsWhereInput[]
    OR?: materialsWhereInput[]
    NOT?: materialsWhereInput | materialsWhereInput[]
    id?: IntFilter<"materials"> | number
    name?: StringFilter<"materials"> | string
    quantity?: IntFilter<"materials"> | number
    unit_price?: DecimalFilter<"materials"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"materials"> | string | null
    image_url?: StringNullableFilter<"materials"> | string | null
    image_file_id?: StringNullableFilter<"materials"> | string | null
    request_id?: IntFilter<"materials"> | number
    worker_id?: IntNullableFilter<"materials"> | number | null
    payment_requests?: XOR<Payment_requestsScalarRelationFilter, payment_requestsWhereInput>
    workers?: XOR<WorkersNullableScalarRelationFilter, workersWhereInput> | null
  }

  export type materialsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    image_file_id?: SortOrderInput | SortOrder
    request_id?: SortOrder
    worker_id?: SortOrderInput | SortOrder
    payment_requests?: payment_requestsOrderByWithRelationInput
    workers?: workersOrderByWithRelationInput
  }

  export type materialsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: materialsWhereInput | materialsWhereInput[]
    OR?: materialsWhereInput[]
    NOT?: materialsWhereInput | materialsWhereInput[]
    name?: StringFilter<"materials"> | string
    quantity?: IntFilter<"materials"> | number
    unit_price?: DecimalFilter<"materials"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"materials"> | string | null
    image_url?: StringNullableFilter<"materials"> | string | null
    image_file_id?: StringNullableFilter<"materials"> | string | null
    request_id?: IntFilter<"materials"> | number
    worker_id?: IntNullableFilter<"materials"> | number | null
    payment_requests?: XOR<Payment_requestsScalarRelationFilter, payment_requestsWhereInput>
    workers?: XOR<WorkersNullableScalarRelationFilter, workersWhereInput> | null
  }, "id">

  export type materialsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    image_file_id?: SortOrderInput | SortOrder
    request_id?: SortOrder
    worker_id?: SortOrderInput | SortOrder
    _count?: materialsCountOrderByAggregateInput
    _avg?: materialsAvgOrderByAggregateInput
    _max?: materialsMaxOrderByAggregateInput
    _min?: materialsMinOrderByAggregateInput
    _sum?: materialsSumOrderByAggregateInput
  }

  export type materialsScalarWhereWithAggregatesInput = {
    AND?: materialsScalarWhereWithAggregatesInput | materialsScalarWhereWithAggregatesInput[]
    OR?: materialsScalarWhereWithAggregatesInput[]
    NOT?: materialsScalarWhereWithAggregatesInput | materialsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"materials"> | number
    name?: StringWithAggregatesFilter<"materials"> | string
    quantity?: IntWithAggregatesFilter<"materials"> | number
    unit_price?: DecimalWithAggregatesFilter<"materials"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"materials"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"materials"> | string | null
    image_file_id?: StringNullableWithAggregatesFilter<"materials"> | string | null
    request_id?: IntWithAggregatesFilter<"materials"> | number
    worker_id?: IntNullableWithAggregatesFilter<"materials"> | number | null
  }

  export type payment_requestsWhereInput = {
    AND?: payment_requestsWhereInput | payment_requestsWhereInput[]
    OR?: payment_requestsWhereInput[]
    NOT?: payment_requestsWhereInput | payment_requestsWhereInput[]
    id?: IntFilter<"payment_requests"> | number
    status?: EnumPaymentStatusFilter<"payment_requests"> | $Enums.PaymentStatus
    total_amount?: DecimalFilter<"payment_requests"> | Decimal | DecimalJsLike | number | string
    supervisor_id?: IntFilter<"payment_requests"> | number
    pm_id?: IntNullableFilter<"payment_requests"> | number | null
    project_id?: IntFilter<"payment_requests"> | number
    created_at?: DateTimeFilter<"payment_requests"> | Date | string
    updated_at?: DateTimeFilter<"payment_requests"> | Date | string
    materials?: MaterialsListRelationFilter
    users_payment_requests_pm_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    projects?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
    users_payment_requests_supervisor_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type payment_requestsOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    supervisor_id?: SortOrder
    pm_id?: SortOrderInput | SortOrder
    project_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    materials?: materialsOrderByRelationAggregateInput
    users_payment_requests_pm_idTousers?: usersOrderByWithRelationInput
    projects?: projectsOrderByWithRelationInput
    users_payment_requests_supervisor_idTousers?: usersOrderByWithRelationInput
  }

  export type payment_requestsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: payment_requestsWhereInput | payment_requestsWhereInput[]
    OR?: payment_requestsWhereInput[]
    NOT?: payment_requestsWhereInput | payment_requestsWhereInput[]
    status?: EnumPaymentStatusFilter<"payment_requests"> | $Enums.PaymentStatus
    total_amount?: DecimalFilter<"payment_requests"> | Decimal | DecimalJsLike | number | string
    supervisor_id?: IntFilter<"payment_requests"> | number
    pm_id?: IntNullableFilter<"payment_requests"> | number | null
    project_id?: IntFilter<"payment_requests"> | number
    created_at?: DateTimeFilter<"payment_requests"> | Date | string
    updated_at?: DateTimeFilter<"payment_requests"> | Date | string
    materials?: MaterialsListRelationFilter
    users_payment_requests_pm_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    projects?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
    users_payment_requests_supervisor_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type payment_requestsOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    supervisor_id?: SortOrder
    pm_id?: SortOrderInput | SortOrder
    project_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: payment_requestsCountOrderByAggregateInput
    _avg?: payment_requestsAvgOrderByAggregateInput
    _max?: payment_requestsMaxOrderByAggregateInput
    _min?: payment_requestsMinOrderByAggregateInput
    _sum?: payment_requestsSumOrderByAggregateInput
  }

  export type payment_requestsScalarWhereWithAggregatesInput = {
    AND?: payment_requestsScalarWhereWithAggregatesInput | payment_requestsScalarWhereWithAggregatesInput[]
    OR?: payment_requestsScalarWhereWithAggregatesInput[]
    NOT?: payment_requestsScalarWhereWithAggregatesInput | payment_requestsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payment_requests"> | number
    status?: EnumPaymentStatusWithAggregatesFilter<"payment_requests"> | $Enums.PaymentStatus
    total_amount?: DecimalWithAggregatesFilter<"payment_requests"> | Decimal | DecimalJsLike | number | string
    supervisor_id?: IntWithAggregatesFilter<"payment_requests"> | number
    pm_id?: IntNullableWithAggregatesFilter<"payment_requests"> | number | null
    project_id?: IntWithAggregatesFilter<"payment_requests"> | number
    created_at?: DateTimeWithAggregatesFilter<"payment_requests"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"payment_requests"> | Date | string
  }

  export type project_progressWhereInput = {
    AND?: project_progressWhereInput | project_progressWhereInput[]
    OR?: project_progressWhereInput[]
    NOT?: project_progressWhereInput | project_progressWhereInput[]
    id?: IntFilter<"project_progress"> | number
    percentage?: IntFilter<"project_progress"> | number
    date?: StringFilter<"project_progress"> | string
    notes?: StringNullableFilter<"project_progress"> | string | null
    project_id?: IntFilter<"project_progress"> | number
    user_id?: IntFilter<"project_progress"> | number
    created_at?: DateTimeFilter<"project_progress"> | Date | string
    projects?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type project_progressOrderByWithRelationInput = {
    id?: SortOrder
    percentage?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    projects?: projectsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type project_progressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: project_progressWhereInput | project_progressWhereInput[]
    OR?: project_progressWhereInput[]
    NOT?: project_progressWhereInput | project_progressWhereInput[]
    percentage?: IntFilter<"project_progress"> | number
    date?: StringFilter<"project_progress"> | string
    notes?: StringNullableFilter<"project_progress"> | string | null
    project_id?: IntFilter<"project_progress"> | number
    user_id?: IntFilter<"project_progress"> | number
    created_at?: DateTimeFilter<"project_progress"> | Date | string
    projects?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type project_progressOrderByWithAggregationInput = {
    id?: SortOrder
    percentage?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    _count?: project_progressCountOrderByAggregateInput
    _avg?: project_progressAvgOrderByAggregateInput
    _max?: project_progressMaxOrderByAggregateInput
    _min?: project_progressMinOrderByAggregateInput
    _sum?: project_progressSumOrderByAggregateInput
  }

  export type project_progressScalarWhereWithAggregatesInput = {
    AND?: project_progressScalarWhereWithAggregatesInput | project_progressScalarWhereWithAggregatesInput[]
    OR?: project_progressScalarWhereWithAggregatesInput[]
    NOT?: project_progressScalarWhereWithAggregatesInput | project_progressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"project_progress"> | number
    percentage?: IntWithAggregatesFilter<"project_progress"> | number
    date?: StringWithAggregatesFilter<"project_progress"> | string
    notes?: StringNullableWithAggregatesFilter<"project_progress"> | string | null
    project_id?: IntWithAggregatesFilter<"project_progress"> | number
    user_id?: IntWithAggregatesFilter<"project_progress"> | number
    created_at?: DateTimeWithAggregatesFilter<"project_progress"> | Date | string
  }

  export type projectsWhereInput = {
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    id?: IntFilter<"projects"> | number
    name?: StringFilter<"projects"> | string
    description?: StringNullableFilter<"projects"> | string | null
    status?: StringFilter<"projects"> | string
    expense_heads?: StringNullableListFilter<"projects">
    budget?: DecimalNullableFilter<"projects"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"projects"> | Date | string
    archived_progress?: Archived_progressListRelationFilter
    bills?: BillsListRelationFilter
    payment_requests?: Payment_requestsListRelationFilter
    project_progress?: Project_progressListRelationFilter
    reminders?: RemindersListRelationFilter
    users?: UsersListRelationFilter
  }

  export type projectsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    expense_heads?: SortOrder
    budget?: SortOrderInput | SortOrder
    created_at?: SortOrder
    archived_progress?: archived_progressOrderByRelationAggregateInput
    bills?: billsOrderByRelationAggregateInput
    payment_requests?: payment_requestsOrderByRelationAggregateInput
    project_progress?: project_progressOrderByRelationAggregateInput
    reminders?: remindersOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
  }

  export type projectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    name?: StringFilter<"projects"> | string
    description?: StringNullableFilter<"projects"> | string | null
    status?: StringFilter<"projects"> | string
    expense_heads?: StringNullableListFilter<"projects">
    budget?: DecimalNullableFilter<"projects"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"projects"> | Date | string
    archived_progress?: Archived_progressListRelationFilter
    bills?: BillsListRelationFilter
    payment_requests?: Payment_requestsListRelationFilter
    project_progress?: Project_progressListRelationFilter
    reminders?: RemindersListRelationFilter
    users?: UsersListRelationFilter
  }, "id">

  export type projectsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    expense_heads?: SortOrder
    budget?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: projectsCountOrderByAggregateInput
    _avg?: projectsAvgOrderByAggregateInput
    _max?: projectsMaxOrderByAggregateInput
    _min?: projectsMinOrderByAggregateInput
    _sum?: projectsSumOrderByAggregateInput
  }

  export type projectsScalarWhereWithAggregatesInput = {
    AND?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    OR?: projectsScalarWhereWithAggregatesInput[]
    NOT?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"projects"> | number
    name?: StringWithAggregatesFilter<"projects"> | string
    description?: StringNullableWithAggregatesFilter<"projects"> | string | null
    status?: StringWithAggregatesFilter<"projects"> | string
    expense_heads?: StringNullableListFilter<"projects">
    budget?: DecimalNullableWithAggregatesFilter<"projects"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeWithAggregatesFilter<"projects"> | Date | string
  }

  export type remindersWhereInput = {
    AND?: remindersWhereInput | remindersWhereInput[]
    OR?: remindersWhereInput[]
    NOT?: remindersWhereInput | remindersWhereInput[]
    id?: IntFilter<"reminders"> | number
    amount?: DecimalFilter<"reminders"> | Decimal | DecimalJsLike | number | string
    day_of_month?: IntFilter<"reminders"> | number
    frequency?: StringFilter<"reminders"> | string
    reason?: StringFilter<"reminders"> | string
    is_active?: BoolFilter<"reminders"> | boolean
    worker_id?: IntFilter<"reminders"> | number
    project_id?: IntFilter<"reminders"> | number
    last_triggered_at?: DateTimeNullableFilter<"reminders"> | Date | string | null
    created_at?: DateTimeFilter<"reminders"> | Date | string
    projects?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
    workers?: XOR<WorkersScalarRelationFilter, workersWhereInput>
  }

  export type remindersOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    day_of_month?: SortOrder
    frequency?: SortOrder
    reason?: SortOrder
    is_active?: SortOrder
    worker_id?: SortOrder
    project_id?: SortOrder
    last_triggered_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    projects?: projectsOrderByWithRelationInput
    workers?: workersOrderByWithRelationInput
  }

  export type remindersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: remindersWhereInput | remindersWhereInput[]
    OR?: remindersWhereInput[]
    NOT?: remindersWhereInput | remindersWhereInput[]
    amount?: DecimalFilter<"reminders"> | Decimal | DecimalJsLike | number | string
    day_of_month?: IntFilter<"reminders"> | number
    frequency?: StringFilter<"reminders"> | string
    reason?: StringFilter<"reminders"> | string
    is_active?: BoolFilter<"reminders"> | boolean
    worker_id?: IntFilter<"reminders"> | number
    project_id?: IntFilter<"reminders"> | number
    last_triggered_at?: DateTimeNullableFilter<"reminders"> | Date | string | null
    created_at?: DateTimeFilter<"reminders"> | Date | string
    projects?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
    workers?: XOR<WorkersScalarRelationFilter, workersWhereInput>
  }, "id">

  export type remindersOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    day_of_month?: SortOrder
    frequency?: SortOrder
    reason?: SortOrder
    is_active?: SortOrder
    worker_id?: SortOrder
    project_id?: SortOrder
    last_triggered_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: remindersCountOrderByAggregateInput
    _avg?: remindersAvgOrderByAggregateInput
    _max?: remindersMaxOrderByAggregateInput
    _min?: remindersMinOrderByAggregateInput
    _sum?: remindersSumOrderByAggregateInput
  }

  export type remindersScalarWhereWithAggregatesInput = {
    AND?: remindersScalarWhereWithAggregatesInput | remindersScalarWhereWithAggregatesInput[]
    OR?: remindersScalarWhereWithAggregatesInput[]
    NOT?: remindersScalarWhereWithAggregatesInput | remindersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reminders"> | number
    amount?: DecimalWithAggregatesFilter<"reminders"> | Decimal | DecimalJsLike | number | string
    day_of_month?: IntWithAggregatesFilter<"reminders"> | number
    frequency?: StringWithAggregatesFilter<"reminders"> | string
    reason?: StringWithAggregatesFilter<"reminders"> | string
    is_active?: BoolWithAggregatesFilter<"reminders"> | boolean
    worker_id?: IntWithAggregatesFilter<"reminders"> | number
    project_id?: IntWithAggregatesFilter<"reminders"> | number
    last_triggered_at?: DateTimeNullableWithAggregatesFilter<"reminders"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"reminders"> | Date | string
  }

  export type sitesWhereInput = {
    AND?: sitesWhereInput | sitesWhereInput[]
    OR?: sitesWhereInput[]
    NOT?: sitesWhereInput | sitesWhereInput[]
    id?: UuidFilter<"sites"> | string
    name?: StringFilter<"sites"> | string
    latitude?: FloatFilter<"sites"> | number
    longitude?: FloatFilter<"sites"> | number
    radius?: FloatFilter<"sites"> | number
    status?: StringFilter<"sites"> | string
    createdBy?: IntFilter<"sites"> | number
    createdAt?: DateTimeFilter<"sites"> | Date | string
    updatedAt?: DateTimeFilter<"sites"> | Date | string
    attendances?: AttendancesListRelationFilter
    users_sites_createdByTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_users_assignedSiteIdTosites?: UsersListRelationFilter
  }

  export type sitesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendances?: attendancesOrderByRelationAggregateInput
    users_sites_createdByTousers?: usersOrderByWithRelationInput
    users_users_assignedSiteIdTosites?: usersOrderByRelationAggregateInput
  }

  export type sitesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sitesWhereInput | sitesWhereInput[]
    OR?: sitesWhereInput[]
    NOT?: sitesWhereInput | sitesWhereInput[]
    name?: StringFilter<"sites"> | string
    latitude?: FloatFilter<"sites"> | number
    longitude?: FloatFilter<"sites"> | number
    radius?: FloatFilter<"sites"> | number
    status?: StringFilter<"sites"> | string
    createdBy?: IntFilter<"sites"> | number
    createdAt?: DateTimeFilter<"sites"> | Date | string
    updatedAt?: DateTimeFilter<"sites"> | Date | string
    attendances?: AttendancesListRelationFilter
    users_sites_createdByTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_users_assignedSiteIdTosites?: UsersListRelationFilter
  }, "id">

  export type sitesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: sitesCountOrderByAggregateInput
    _avg?: sitesAvgOrderByAggregateInput
    _max?: sitesMaxOrderByAggregateInput
    _min?: sitesMinOrderByAggregateInput
    _sum?: sitesSumOrderByAggregateInput
  }

  export type sitesScalarWhereWithAggregatesInput = {
    AND?: sitesScalarWhereWithAggregatesInput | sitesScalarWhereWithAggregatesInput[]
    OR?: sitesScalarWhereWithAggregatesInput[]
    NOT?: sitesScalarWhereWithAggregatesInput | sitesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"sites"> | string
    name?: StringWithAggregatesFilter<"sites"> | string
    latitude?: FloatWithAggregatesFilter<"sites"> | number
    longitude?: FloatWithAggregatesFilter<"sites"> | number
    radius?: FloatWithAggregatesFilter<"sites"> | number
    status?: StringWithAggregatesFilter<"sites"> | string
    createdBy?: IntWithAggregatesFilter<"sites"> | number
    createdAt?: DateTimeWithAggregatesFilter<"sites"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"sites"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    phone?: StringFilter<"users"> | string
    dob?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    name?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    assignedSiteId?: UuidNullableFilter<"users"> | string | null
    attendances?: AttendancesListRelationFilter
    bills?: BillsListRelationFilter
    payment_requests_payment_requests_pm_idTousers?: Payment_requestsListRelationFilter
    payment_requests_payment_requests_supervisor_idTousers?: Payment_requestsListRelationFilter
    project_progress?: Project_progressListRelationFilter
    sites_sites_createdByTousers?: SitesListRelationFilter
    sites_users_assignedSiteIdTosites?: XOR<SitesNullableScalarRelationFilter, sitesWhereInput> | null
    projects?: ProjectsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    dob?: SortOrder
    role?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    assignedSiteId?: SortOrderInput | SortOrder
    attendances?: attendancesOrderByRelationAggregateInput
    bills?: billsOrderByRelationAggregateInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsOrderByRelationAggregateInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsOrderByRelationAggregateInput
    project_progress?: project_progressOrderByRelationAggregateInput
    sites_sites_createdByTousers?: sitesOrderByRelationAggregateInput
    sites_users_assignedSiteIdTosites?: sitesOrderByWithRelationInput
    projects?: projectsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    dob?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    name?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    assignedSiteId?: UuidNullableFilter<"users"> | string | null
    attendances?: AttendancesListRelationFilter
    bills?: BillsListRelationFilter
    payment_requests_payment_requests_pm_idTousers?: Payment_requestsListRelationFilter
    payment_requests_payment_requests_supervisor_idTousers?: Payment_requestsListRelationFilter
    project_progress?: Project_progressListRelationFilter
    sites_sites_createdByTousers?: SitesListRelationFilter
    sites_users_assignedSiteIdTosites?: XOR<SitesNullableScalarRelationFilter, sitesWhereInput> | null
    projects?: ProjectsListRelationFilter
  }, "id" | "phone">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    dob?: SortOrder
    role?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    assignedSiteId?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    phone?: StringWithAggregatesFilter<"users"> | string
    dob?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    assignedSiteId?: UuidNullableWithAggregatesFilter<"users"> | string | null
  }

  export type workersWhereInput = {
    AND?: workersWhereInput | workersWhereInput[]
    OR?: workersWhereInput[]
    NOT?: workersWhereInput | workersWhereInput[]
    id?: IntFilter<"workers"> | number
    name?: StringFilter<"workers"> | string
    phone?: StringNullableFilter<"workers"> | string | null
    address?: StringNullableFilter<"workers"> | string | null
    designation?: StringNullableFilter<"workers"> | string | null
    joining_date?: DateTimeNullableFilter<"workers"> | Date | string | null
    status?: StringFilter<"workers"> | string
    notes?: StringNullableFilter<"workers"> | string | null
    created_at?: DateTimeFilter<"workers"> | Date | string
    materials?: MaterialsListRelationFilter
    reminders?: RemindersListRelationFilter
  }

  export type workersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    joining_date?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    materials?: materialsOrderByRelationAggregateInput
    reminders?: remindersOrderByRelationAggregateInput
  }

  export type workersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: workersWhereInput | workersWhereInput[]
    OR?: workersWhereInput[]
    NOT?: workersWhereInput | workersWhereInput[]
    name?: StringFilter<"workers"> | string
    phone?: StringNullableFilter<"workers"> | string | null
    address?: StringNullableFilter<"workers"> | string | null
    designation?: StringNullableFilter<"workers"> | string | null
    joining_date?: DateTimeNullableFilter<"workers"> | Date | string | null
    status?: StringFilter<"workers"> | string
    notes?: StringNullableFilter<"workers"> | string | null
    created_at?: DateTimeFilter<"workers"> | Date | string
    materials?: MaterialsListRelationFilter
    reminders?: RemindersListRelationFilter
  }, "id">

  export type workersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    joining_date?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: workersCountOrderByAggregateInput
    _avg?: workersAvgOrderByAggregateInput
    _max?: workersMaxOrderByAggregateInput
    _min?: workersMinOrderByAggregateInput
    _sum?: workersSumOrderByAggregateInput
  }

  export type workersScalarWhereWithAggregatesInput = {
    AND?: workersScalarWhereWithAggregatesInput | workersScalarWhereWithAggregatesInput[]
    OR?: workersScalarWhereWithAggregatesInput[]
    NOT?: workersScalarWhereWithAggregatesInput | workersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"workers"> | number
    name?: StringWithAggregatesFilter<"workers"> | string
    phone?: StringNullableWithAggregatesFilter<"workers"> | string | null
    address?: StringNullableWithAggregatesFilter<"workers"> | string | null
    designation?: StringNullableWithAggregatesFilter<"workers"> | string | null
    joining_date?: DateTimeNullableWithAggregatesFilter<"workers"> | Date | string | null
    status?: StringWithAggregatesFilter<"workers"> | string
    notes?: StringNullableWithAggregatesFilter<"workers"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"workers"> | Date | string
  }

  export type archived_progressCreateInput = {
    percentage: number
    date: string
    notes?: string | null
    user_name: string
    user_role: string
    original_created_at: Date | string
    archived_at?: Date | string
    projects: projectsCreateNestedOneWithoutArchived_progressInput
  }

  export type archived_progressUncheckedCreateInput = {
    id?: number
    percentage: number
    date: string
    notes?: string | null
    project_id: number
    user_name: string
    user_role: string
    original_created_at: Date | string
    archived_at?: Date | string
  }

  export type archived_progressUpdateInput = {
    percentage?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    original_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_at?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: projectsUpdateOneRequiredWithoutArchived_progressNestedInput
  }

  export type archived_progressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    original_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type archived_progressCreateManyInput = {
    id?: number
    percentage: number
    date: string
    notes?: string | null
    project_id: number
    user_name: string
    user_role: string
    original_created_at: Date | string
    archived_at?: Date | string
  }

  export type archived_progressUpdateManyMutationInput = {
    percentage?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    original_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type archived_progressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    original_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type attendancesCreateInput = {
    id: string
    checkInTime?: Date | string
    checkOutTime?: Date | string | null
    checkInLatitude: number
    checkInLongitude: number
    checkOutLatitude?: number | null
    checkOutLongitude?: number | null
    checkInAccuracy: number
    checkOutAccuracy?: number | null
    durationMinutes?: number | null
    status?: $Enums.AttendanceStatus
    createdAt?: Date | string
    updatedAt: Date | string
    sites: sitesCreateNestedOneWithoutAttendancesInput
    users: usersCreateNestedOneWithoutAttendancesInput
  }

  export type attendancesUncheckedCreateInput = {
    id: string
    userId: number
    siteId: string
    checkInTime?: Date | string
    checkOutTime?: Date | string | null
    checkInLatitude: number
    checkInLongitude: number
    checkOutLatitude?: number | null
    checkOutLongitude?: number | null
    checkInAccuracy: number
    checkOutAccuracy?: number | null
    durationMinutes?: number | null
    status?: $Enums.AttendanceStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type attendancesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkInLatitude?: FloatFieldUpdateOperationsInput | number
    checkInLongitude?: FloatFieldUpdateOperationsInput | number
    checkOutLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkOutLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkInAccuracy?: FloatFieldUpdateOperationsInput | number
    checkOutAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sites?: sitesUpdateOneRequiredWithoutAttendancesNestedInput
    users?: usersUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type attendancesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    siteId?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkInLatitude?: FloatFieldUpdateOperationsInput | number
    checkInLongitude?: FloatFieldUpdateOperationsInput | number
    checkOutLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkOutLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkInAccuracy?: FloatFieldUpdateOperationsInput | number
    checkOutAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type attendancesCreateManyInput = {
    id: string
    userId: number
    siteId: string
    checkInTime?: Date | string
    checkOutTime?: Date | string | null
    checkInLatitude: number
    checkInLongitude: number
    checkOutLatitude?: number | null
    checkOutLongitude?: number | null
    checkInAccuracy: number
    checkOutAccuracy?: number | null
    durationMinutes?: number | null
    status?: $Enums.AttendanceStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type attendancesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkInLatitude?: FloatFieldUpdateOperationsInput | number
    checkInLongitude?: FloatFieldUpdateOperationsInput | number
    checkOutLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkOutLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkInAccuracy?: FloatFieldUpdateOperationsInput | number
    checkOutAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type attendancesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    siteId?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkInLatitude?: FloatFieldUpdateOperationsInput | number
    checkInLongitude?: FloatFieldUpdateOperationsInput | number
    checkOutLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkOutLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkInAccuracy?: FloatFieldUpdateOperationsInput | number
    checkOutAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type billsCreateInput = {
    name: string
    image_url?: string | null
    image_file_id?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    users: usersCreateNestedOneWithoutBillsInput
    projects: projectsCreateNestedOneWithoutBillsInput
  }

  export type billsUncheckedCreateInput = {
    id?: number
    name: string
    image_url?: string | null
    image_file_id?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    project_id: number
    creator_id: number
    created_at?: Date | string
  }

  export type billsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutBillsNestedInput
    projects?: projectsUpdateOneRequiredWithoutBillsNestedInput
  }

  export type billsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    project_id?: IntFieldUpdateOperationsInput | number
    creator_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type billsCreateManyInput = {
    id?: number
    name: string
    image_url?: string | null
    image_file_id?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    project_id: number
    creator_id: number
    created_at?: Date | string
  }

  export type billsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type billsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    project_id?: IntFieldUpdateOperationsInput | number
    creator_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type materialsCreateInput = {
    name: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    image_url?: string | null
    image_file_id?: string | null
    payment_requests: payment_requestsCreateNestedOneWithoutMaterialsInput
    workers?: workersCreateNestedOneWithoutMaterialsInput
  }

  export type materialsUncheckedCreateInput = {
    id?: number
    name: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    image_url?: string | null
    image_file_id?: string | null
    request_id: number
    worker_id?: number | null
  }

  export type materialsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_requests?: payment_requestsUpdateOneRequiredWithoutMaterialsNestedInput
    workers?: workersUpdateOneWithoutMaterialsNestedInput
  }

  export type materialsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    request_id?: IntFieldUpdateOperationsInput | number
    worker_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type materialsCreateManyInput = {
    id?: number
    name: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    image_url?: string | null
    image_file_id?: string | null
    request_id: number
    worker_id?: number | null
  }

  export type materialsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type materialsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    request_id?: IntFieldUpdateOperationsInput | number
    worker_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type payment_requestsCreateInput = {
    status?: $Enums.PaymentStatus
    total_amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at: Date | string
    materials?: materialsCreateNestedManyWithoutPayment_requestsInput
    users_payment_requests_pm_idTousers?: usersCreateNestedOneWithoutPayment_requests_payment_requests_pm_idTousersInput
    projects: projectsCreateNestedOneWithoutPayment_requestsInput
    users_payment_requests_supervisor_idTousers: usersCreateNestedOneWithoutPayment_requests_payment_requests_supervisor_idTousersInput
  }

  export type payment_requestsUncheckedCreateInput = {
    id?: number
    status?: $Enums.PaymentStatus
    total_amount: Decimal | DecimalJsLike | number | string
    supervisor_id: number
    pm_id?: number | null
    project_id: number
    created_at?: Date | string
    updated_at: Date | string
    materials?: materialsUncheckedCreateNestedManyWithoutPayment_requestsInput
  }

  export type payment_requestsUpdateInput = {
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: materialsUpdateManyWithoutPayment_requestsNestedInput
    users_payment_requests_pm_idTousers?: usersUpdateOneWithoutPayment_requests_payment_requests_pm_idTousersNestedInput
    projects?: projectsUpdateOneRequiredWithoutPayment_requestsNestedInput
    users_payment_requests_supervisor_idTousers?: usersUpdateOneRequiredWithoutPayment_requests_payment_requests_supervisor_idTousersNestedInput
  }

  export type payment_requestsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supervisor_id?: IntFieldUpdateOperationsInput | number
    pm_id?: NullableIntFieldUpdateOperationsInput | number | null
    project_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: materialsUncheckedUpdateManyWithoutPayment_requestsNestedInput
  }

  export type payment_requestsCreateManyInput = {
    id?: number
    status?: $Enums.PaymentStatus
    total_amount: Decimal | DecimalJsLike | number | string
    supervisor_id: number
    pm_id?: number | null
    project_id: number
    created_at?: Date | string
    updated_at: Date | string
  }

  export type payment_requestsUpdateManyMutationInput = {
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_requestsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supervisor_id?: IntFieldUpdateOperationsInput | number
    pm_id?: NullableIntFieldUpdateOperationsInput | number | null
    project_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type project_progressCreateInput = {
    percentage: number
    date: string
    notes?: string | null
    created_at?: Date | string
    projects: projectsCreateNestedOneWithoutProject_progressInput
    users: usersCreateNestedOneWithoutProject_progressInput
  }

  export type project_progressUncheckedCreateInput = {
    id?: number
    percentage: number
    date: string
    notes?: string | null
    project_id: number
    user_id: number
    created_at?: Date | string
  }

  export type project_progressUpdateInput = {
    percentage?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: projectsUpdateOneRequiredWithoutProject_progressNestedInput
    users?: usersUpdateOneRequiredWithoutProject_progressNestedInput
  }

  export type project_progressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type project_progressCreateManyInput = {
    id?: number
    percentage: number
    date: string
    notes?: string | null
    project_id: number
    user_id: number
    created_at?: Date | string
  }

  export type project_progressUpdateManyMutationInput = {
    percentage?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type project_progressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectsCreateInput = {
    name: string
    description?: string | null
    status?: string
    expense_heads?: projectsCreateexpense_headsInput | string[]
    budget?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    archived_progress?: archived_progressCreateNestedManyWithoutProjectsInput
    bills?: billsCreateNestedManyWithoutProjectsInput
    payment_requests?: payment_requestsCreateNestedManyWithoutProjectsInput
    project_progress?: project_progressCreateNestedManyWithoutProjectsInput
    reminders?: remindersCreateNestedManyWithoutProjectsInput
    users?: usersCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    status?: string
    expense_heads?: projectsCreateexpense_headsInput | string[]
    budget?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    archived_progress?: archived_progressUncheckedCreateNestedManyWithoutProjectsInput
    bills?: billsUncheckedCreateNestedManyWithoutProjectsInput
    payment_requests?: payment_requestsUncheckedCreateNestedManyWithoutProjectsInput
    project_progress?: project_progressUncheckedCreateNestedManyWithoutProjectsInput
    reminders?: remindersUncheckedCreateNestedManyWithoutProjectsInput
    users?: usersUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expense_heads?: projectsUpdateexpense_headsInput | string[]
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_progress?: archived_progressUpdateManyWithoutProjectsNestedInput
    bills?: billsUpdateManyWithoutProjectsNestedInput
    payment_requests?: payment_requestsUpdateManyWithoutProjectsNestedInput
    project_progress?: project_progressUpdateManyWithoutProjectsNestedInput
    reminders?: remindersUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expense_heads?: projectsUpdateexpense_headsInput | string[]
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_progress?: archived_progressUncheckedUpdateManyWithoutProjectsNestedInput
    bills?: billsUncheckedUpdateManyWithoutProjectsNestedInput
    payment_requests?: payment_requestsUncheckedUpdateManyWithoutProjectsNestedInput
    project_progress?: project_progressUncheckedUpdateManyWithoutProjectsNestedInput
    reminders?: remindersUncheckedUpdateManyWithoutProjectsNestedInput
    users?: usersUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type projectsCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    status?: string
    expense_heads?: projectsCreateexpense_headsInput | string[]
    budget?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
  }

  export type projectsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expense_heads?: projectsUpdateexpense_headsInput | string[]
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expense_heads?: projectsUpdateexpense_headsInput | string[]
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type remindersCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    day_of_month: number
    frequency?: string
    reason: string
    is_active?: boolean
    last_triggered_at?: Date | string | null
    created_at?: Date | string
    projects: projectsCreateNestedOneWithoutRemindersInput
    workers: workersCreateNestedOneWithoutRemindersInput
  }

  export type remindersUncheckedCreateInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    day_of_month: number
    frequency?: string
    reason: string
    is_active?: boolean
    worker_id: number
    project_id: number
    last_triggered_at?: Date | string | null
    created_at?: Date | string
  }

  export type remindersUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    day_of_month?: IntFieldUpdateOperationsInput | number
    frequency?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    last_triggered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: projectsUpdateOneRequiredWithoutRemindersNestedInput
    workers?: workersUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type remindersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    day_of_month?: IntFieldUpdateOperationsInput | number
    frequency?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    worker_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    last_triggered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type remindersCreateManyInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    day_of_month: number
    frequency?: string
    reason: string
    is_active?: boolean
    worker_id: number
    project_id: number
    last_triggered_at?: Date | string | null
    created_at?: Date | string
  }

  export type remindersUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    day_of_month?: IntFieldUpdateOperationsInput | number
    frequency?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    last_triggered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type remindersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    day_of_month?: IntFieldUpdateOperationsInput | number
    frequency?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    worker_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    last_triggered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sitesCreateInput = {
    id: string
    name: string
    latitude: number
    longitude: number
    radius?: number
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    attendances?: attendancesCreateNestedManyWithoutSitesInput
    users_sites_createdByTousers: usersCreateNestedOneWithoutSites_sites_createdByTousersInput
    users_users_assignedSiteIdTosites?: usersCreateNestedManyWithoutSites_users_assignedSiteIdTositesInput
  }

  export type sitesUncheckedCreateInput = {
    id: string
    name: string
    latitude: number
    longitude: number
    radius?: number
    status?: string
    createdBy: number
    createdAt?: Date | string
    updatedAt: Date | string
    attendances?: attendancesUncheckedCreateNestedManyWithoutSitesInput
    users_users_assignedSiteIdTosites?: usersUncheckedCreateNestedManyWithoutSites_users_assignedSiteIdTositesInput
  }

  export type sitesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: attendancesUpdateManyWithoutSitesNestedInput
    users_sites_createdByTousers?: usersUpdateOneRequiredWithoutSites_sites_createdByTousersNestedInput
    users_users_assignedSiteIdTosites?: usersUpdateManyWithoutSites_users_assignedSiteIdTositesNestedInput
  }

  export type sitesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: attendancesUncheckedUpdateManyWithoutSitesNestedInput
    users_users_assignedSiteIdTosites?: usersUncheckedUpdateManyWithoutSites_users_assignedSiteIdTositesNestedInput
  }

  export type sitesCreateManyInput = {
    id: string
    name: string
    latitude: number
    longitude: number
    radius?: number
    status?: string
    createdBy: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type sitesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sitesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    attendances?: attendancesCreateNestedManyWithoutUsersInput
    bills?: billsCreateNestedManyWithoutUsersInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsCreateNestedManyWithoutUsers_payment_requests_pm_idTousersInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsCreateNestedManyWithoutUsers_payment_requests_supervisor_idTousersInput
    project_progress?: project_progressCreateNestedManyWithoutUsersInput
    sites_sites_createdByTousers?: sitesCreateNestedManyWithoutUsers_sites_createdByTousersInput
    sites_users_assignedSiteIdTosites?: sitesCreateNestedOneWithoutUsers_users_assignedSiteIdTositesInput
    projects?: projectsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    assignedSiteId?: string | null
    attendances?: attendancesUncheckedCreateNestedManyWithoutUsersInput
    bills?: billsUncheckedCreateNestedManyWithoutUsersInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUncheckedCreateNestedManyWithoutUsers_payment_requests_pm_idTousersInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUncheckedCreateNestedManyWithoutUsers_payment_requests_supervisor_idTousersInput
    project_progress?: project_progressUncheckedCreateNestedManyWithoutUsersInput
    sites_sites_createdByTousers?: sitesUncheckedCreateNestedManyWithoutUsers_sites_createdByTousersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: attendancesUpdateManyWithoutUsersNestedInput
    bills?: billsUpdateManyWithoutUsersNestedInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUpdateManyWithoutUsers_payment_requests_pm_idTousersNestedInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUpdateManyWithoutUsers_payment_requests_supervisor_idTousersNestedInput
    project_progress?: project_progressUpdateManyWithoutUsersNestedInput
    sites_sites_createdByTousers?: sitesUpdateManyWithoutUsers_sites_createdByTousersNestedInput
    sites_users_assignedSiteIdTosites?: sitesUpdateOneWithoutUsers_users_assignedSiteIdTositesNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedSiteId?: NullableStringFieldUpdateOperationsInput | string | null
    attendances?: attendancesUncheckedUpdateManyWithoutUsersNestedInput
    bills?: billsUncheckedUpdateManyWithoutUsersNestedInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_pm_idTousersNestedInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_supervisor_idTousersNestedInput
    project_progress?: project_progressUncheckedUpdateManyWithoutUsersNestedInput
    sites_sites_createdByTousers?: sitesUncheckedUpdateManyWithoutUsers_sites_createdByTousersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    assignedSiteId?: string | null
  }

  export type usersUpdateManyMutationInput = {
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedSiteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type workersCreateInput = {
    name: string
    phone?: string | null
    address?: string | null
    designation?: string | null
    joining_date?: Date | string | null
    status?: string
    notes?: string | null
    created_at?: Date | string
    materials?: materialsCreateNestedManyWithoutWorkersInput
    reminders?: remindersCreateNestedManyWithoutWorkersInput
  }

  export type workersUncheckedCreateInput = {
    id?: number
    name: string
    phone?: string | null
    address?: string | null
    designation?: string | null
    joining_date?: Date | string | null
    status?: string
    notes?: string | null
    created_at?: Date | string
    materials?: materialsUncheckedCreateNestedManyWithoutWorkersInput
    reminders?: remindersUncheckedCreateNestedManyWithoutWorkersInput
  }

  export type workersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: materialsUpdateManyWithoutWorkersNestedInput
    reminders?: remindersUpdateManyWithoutWorkersNestedInput
  }

  export type workersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: materialsUncheckedUpdateManyWithoutWorkersNestedInput
    reminders?: remindersUncheckedUpdateManyWithoutWorkersNestedInput
  }

  export type workersCreateManyInput = {
    id?: number
    name: string
    phone?: string | null
    address?: string | null
    designation?: string | null
    joining_date?: Date | string | null
    status?: string
    notes?: string | null
    created_at?: Date | string
  }

  export type workersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectsScalarRelationFilter = {
    is?: projectsWhereInput
    isNot?: projectsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type archived_progressCountOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    project_id?: SortOrder
    user_name?: SortOrder
    user_role?: SortOrder
    original_created_at?: SortOrder
    archived_at?: SortOrder
  }

  export type archived_progressAvgOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
    project_id?: SortOrder
  }

  export type archived_progressMaxOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    project_id?: SortOrder
    user_name?: SortOrder
    user_role?: SortOrder
    original_created_at?: SortOrder
    archived_at?: SortOrder
  }

  export type archived_progressMinOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    project_id?: SortOrder
    user_name?: SortOrder
    user_role?: SortOrder
    original_created_at?: SortOrder
    archived_at?: SortOrder
  }

  export type archived_progressSumOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
    project_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type SitesScalarRelationFilter = {
    is?: sitesWhereInput
    isNot?: sitesWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type attendancesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    siteId?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    checkInLatitude?: SortOrder
    checkInLongitude?: SortOrder
    checkOutLatitude?: SortOrder
    checkOutLongitude?: SortOrder
    checkInAccuracy?: SortOrder
    checkOutAccuracy?: SortOrder
    durationMinutes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type attendancesAvgOrderByAggregateInput = {
    userId?: SortOrder
    checkInLatitude?: SortOrder
    checkInLongitude?: SortOrder
    checkOutLatitude?: SortOrder
    checkOutLongitude?: SortOrder
    checkInAccuracy?: SortOrder
    checkOutAccuracy?: SortOrder
    durationMinutes?: SortOrder
  }

  export type attendancesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    siteId?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    checkInLatitude?: SortOrder
    checkInLongitude?: SortOrder
    checkOutLatitude?: SortOrder
    checkOutLongitude?: SortOrder
    checkInAccuracy?: SortOrder
    checkOutAccuracy?: SortOrder
    durationMinutes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type attendancesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    siteId?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    checkInLatitude?: SortOrder
    checkInLongitude?: SortOrder
    checkOutLatitude?: SortOrder
    checkOutLongitude?: SortOrder
    checkInAccuracy?: SortOrder
    checkOutAccuracy?: SortOrder
    durationMinutes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type attendancesSumOrderByAggregateInput = {
    userId?: SortOrder
    checkInLatitude?: SortOrder
    checkInLongitude?: SortOrder
    checkOutLatitude?: SortOrder
    checkOutLongitude?: SortOrder
    checkInAccuracy?: SortOrder
    checkOutAccuracy?: SortOrder
    durationMinutes?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type billsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    image_file_id?: SortOrder
    amount?: SortOrder
    project_id?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type billsAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    project_id?: SortOrder
    creator_id?: SortOrder
  }

  export type billsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    image_file_id?: SortOrder
    amount?: SortOrder
    project_id?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type billsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    image_file_id?: SortOrder
    amount?: SortOrder
    project_id?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type billsSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    project_id?: SortOrder
    creator_id?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Payment_requestsScalarRelationFilter = {
    is?: payment_requestsWhereInput
    isNot?: payment_requestsWhereInput
  }

  export type WorkersNullableScalarRelationFilter = {
    is?: workersWhereInput | null
    isNot?: workersWhereInput | null
  }

  export type materialsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    image_file_id?: SortOrder
    request_id?: SortOrder
    worker_id?: SortOrder
  }

  export type materialsAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    request_id?: SortOrder
    worker_id?: SortOrder
  }

  export type materialsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    image_file_id?: SortOrder
    request_id?: SortOrder
    worker_id?: SortOrder
  }

  export type materialsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    image_file_id?: SortOrder
    request_id?: SortOrder
    worker_id?: SortOrder
  }

  export type materialsSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    request_id?: SortOrder
    worker_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type MaterialsListRelationFilter = {
    every?: materialsWhereInput
    some?: materialsWhereInput
    none?: materialsWhereInput
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type materialsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type payment_requestsCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    supervisor_id?: SortOrder
    pm_id?: SortOrder
    project_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payment_requestsAvgOrderByAggregateInput = {
    id?: SortOrder
    total_amount?: SortOrder
    supervisor_id?: SortOrder
    pm_id?: SortOrder
    project_id?: SortOrder
  }

  export type payment_requestsMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    supervisor_id?: SortOrder
    pm_id?: SortOrder
    project_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payment_requestsMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    supervisor_id?: SortOrder
    pm_id?: SortOrder
    project_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payment_requestsSumOrderByAggregateInput = {
    id?: SortOrder
    total_amount?: SortOrder
    supervisor_id?: SortOrder
    pm_id?: SortOrder
    project_id?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type project_progressCountOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type project_progressAvgOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
  }

  export type project_progressMaxOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type project_progressMinOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type project_progressSumOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type Archived_progressListRelationFilter = {
    every?: archived_progressWhereInput
    some?: archived_progressWhereInput
    none?: archived_progressWhereInput
  }

  export type BillsListRelationFilter = {
    every?: billsWhereInput
    some?: billsWhereInput
    none?: billsWhereInput
  }

  export type Payment_requestsListRelationFilter = {
    every?: payment_requestsWhereInput
    some?: payment_requestsWhereInput
    none?: payment_requestsWhereInput
  }

  export type Project_progressListRelationFilter = {
    every?: project_progressWhereInput
    some?: project_progressWhereInput
    none?: project_progressWhereInput
  }

  export type RemindersListRelationFilter = {
    every?: remindersWhereInput
    some?: remindersWhereInput
    none?: remindersWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type archived_progressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type billsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type payment_requestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type project_progressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type remindersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    expense_heads?: SortOrder
    budget?: SortOrder
    created_at?: SortOrder
  }

  export type projectsAvgOrderByAggregateInput = {
    id?: SortOrder
    budget?: SortOrder
  }

  export type projectsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    budget?: SortOrder
    created_at?: SortOrder
  }

  export type projectsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    budget?: SortOrder
    created_at?: SortOrder
  }

  export type projectsSumOrderByAggregateInput = {
    id?: SortOrder
    budget?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WorkersScalarRelationFilter = {
    is?: workersWhereInput
    isNot?: workersWhereInput
  }

  export type remindersCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    day_of_month?: SortOrder
    frequency?: SortOrder
    reason?: SortOrder
    is_active?: SortOrder
    worker_id?: SortOrder
    project_id?: SortOrder
    last_triggered_at?: SortOrder
    created_at?: SortOrder
  }

  export type remindersAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    day_of_month?: SortOrder
    worker_id?: SortOrder
    project_id?: SortOrder
  }

  export type remindersMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    day_of_month?: SortOrder
    frequency?: SortOrder
    reason?: SortOrder
    is_active?: SortOrder
    worker_id?: SortOrder
    project_id?: SortOrder
    last_triggered_at?: SortOrder
    created_at?: SortOrder
  }

  export type remindersMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    day_of_month?: SortOrder
    frequency?: SortOrder
    reason?: SortOrder
    is_active?: SortOrder
    worker_id?: SortOrder
    project_id?: SortOrder
    last_triggered_at?: SortOrder
    created_at?: SortOrder
  }

  export type remindersSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    day_of_month?: SortOrder
    worker_id?: SortOrder
    project_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AttendancesListRelationFilter = {
    every?: attendancesWhereInput
    some?: attendancesWhereInput
    none?: attendancesWhereInput
  }

  export type attendancesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sitesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sitesAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    createdBy?: SortOrder
  }

  export type sitesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sitesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sitesSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    createdBy?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type SitesListRelationFilter = {
    every?: sitesWhereInput
    some?: sitesWhereInput
    none?: sitesWhereInput
  }

  export type SitesNullableScalarRelationFilter = {
    is?: sitesWhereInput | null
    isNot?: sitesWhereInput | null
  }

  export type ProjectsListRelationFilter = {
    every?: projectsWhereInput
    some?: projectsWhereInput
    none?: projectsWhereInput
  }

  export type sitesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    dob?: SortOrder
    role?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    assignedSiteId?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    dob?: SortOrder
    role?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    assignedSiteId?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    dob?: SortOrder
    role?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    assignedSiteId?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type workersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    designation?: SortOrder
    joining_date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type workersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type workersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    designation?: SortOrder
    joining_date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type workersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    designation?: SortOrder
    joining_date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type workersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type projectsCreateNestedOneWithoutArchived_progressInput = {
    create?: XOR<projectsCreateWithoutArchived_progressInput, projectsUncheckedCreateWithoutArchived_progressInput>
    connectOrCreate?: projectsCreateOrConnectWithoutArchived_progressInput
    connect?: projectsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type projectsUpdateOneRequiredWithoutArchived_progressNestedInput = {
    create?: XOR<projectsCreateWithoutArchived_progressInput, projectsUncheckedCreateWithoutArchived_progressInput>
    connectOrCreate?: projectsCreateOrConnectWithoutArchived_progressInput
    upsert?: projectsUpsertWithoutArchived_progressInput
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutArchived_progressInput, projectsUpdateWithoutArchived_progressInput>, projectsUncheckedUpdateWithoutArchived_progressInput>
  }

  export type sitesCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<sitesCreateWithoutAttendancesInput, sitesUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: sitesCreateOrConnectWithoutAttendancesInput
    connect?: sitesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<usersCreateWithoutAttendancesInput, usersUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAttendancesInput
    connect?: usersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type sitesUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<sitesCreateWithoutAttendancesInput, sitesUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: sitesCreateOrConnectWithoutAttendancesInput
    upsert?: sitesUpsertWithoutAttendancesInput
    connect?: sitesWhereUniqueInput
    update?: XOR<XOR<sitesUpdateToOneWithWhereWithoutAttendancesInput, sitesUpdateWithoutAttendancesInput>, sitesUncheckedUpdateWithoutAttendancesInput>
  }

  export type usersUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<usersCreateWithoutAttendancesInput, usersUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAttendancesInput
    upsert?: usersUpsertWithoutAttendancesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAttendancesInput, usersUpdateWithoutAttendancesInput>, usersUncheckedUpdateWithoutAttendancesInput>
  }

  export type usersCreateNestedOneWithoutBillsInput = {
    create?: XOR<usersCreateWithoutBillsInput, usersUncheckedCreateWithoutBillsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBillsInput
    connect?: usersWhereUniqueInput
  }

  export type projectsCreateNestedOneWithoutBillsInput = {
    create?: XOR<projectsCreateWithoutBillsInput, projectsUncheckedCreateWithoutBillsInput>
    connectOrCreate?: projectsCreateOrConnectWithoutBillsInput
    connect?: projectsWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type usersUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<usersCreateWithoutBillsInput, usersUncheckedCreateWithoutBillsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBillsInput
    upsert?: usersUpsertWithoutBillsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBillsInput, usersUpdateWithoutBillsInput>, usersUncheckedUpdateWithoutBillsInput>
  }

  export type projectsUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<projectsCreateWithoutBillsInput, projectsUncheckedCreateWithoutBillsInput>
    connectOrCreate?: projectsCreateOrConnectWithoutBillsInput
    upsert?: projectsUpsertWithoutBillsInput
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutBillsInput, projectsUpdateWithoutBillsInput>, projectsUncheckedUpdateWithoutBillsInput>
  }

  export type payment_requestsCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<payment_requestsCreateWithoutMaterialsInput, payment_requestsUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: payment_requestsCreateOrConnectWithoutMaterialsInput
    connect?: payment_requestsWhereUniqueInput
  }

  export type workersCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<workersCreateWithoutMaterialsInput, workersUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: workersCreateOrConnectWithoutMaterialsInput
    connect?: workersWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type payment_requestsUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: XOR<payment_requestsCreateWithoutMaterialsInput, payment_requestsUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: payment_requestsCreateOrConnectWithoutMaterialsInput
    upsert?: payment_requestsUpsertWithoutMaterialsInput
    connect?: payment_requestsWhereUniqueInput
    update?: XOR<XOR<payment_requestsUpdateToOneWithWhereWithoutMaterialsInput, payment_requestsUpdateWithoutMaterialsInput>, payment_requestsUncheckedUpdateWithoutMaterialsInput>
  }

  export type workersUpdateOneWithoutMaterialsNestedInput = {
    create?: XOR<workersCreateWithoutMaterialsInput, workersUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: workersCreateOrConnectWithoutMaterialsInput
    upsert?: workersUpsertWithoutMaterialsInput
    disconnect?: workersWhereInput | boolean
    delete?: workersWhereInput | boolean
    connect?: workersWhereUniqueInput
    update?: XOR<XOR<workersUpdateToOneWithWhereWithoutMaterialsInput, workersUpdateWithoutMaterialsInput>, workersUncheckedUpdateWithoutMaterialsInput>
  }

  export type materialsCreateNestedManyWithoutPayment_requestsInput = {
    create?: XOR<materialsCreateWithoutPayment_requestsInput, materialsUncheckedCreateWithoutPayment_requestsInput> | materialsCreateWithoutPayment_requestsInput[] | materialsUncheckedCreateWithoutPayment_requestsInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutPayment_requestsInput | materialsCreateOrConnectWithoutPayment_requestsInput[]
    createMany?: materialsCreateManyPayment_requestsInputEnvelope
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutPayment_requests_payment_requests_pm_idTousersInput = {
    create?: XOR<usersCreateWithoutPayment_requests_payment_requests_pm_idTousersInput, usersUncheckedCreateWithoutPayment_requests_payment_requests_pm_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutPayment_requests_payment_requests_pm_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type projectsCreateNestedOneWithoutPayment_requestsInput = {
    create?: XOR<projectsCreateWithoutPayment_requestsInput, projectsUncheckedCreateWithoutPayment_requestsInput>
    connectOrCreate?: projectsCreateOrConnectWithoutPayment_requestsInput
    connect?: projectsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutPayment_requests_payment_requests_supervisor_idTousersInput = {
    create?: XOR<usersCreateWithoutPayment_requests_payment_requests_supervisor_idTousersInput, usersUncheckedCreateWithoutPayment_requests_payment_requests_supervisor_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutPayment_requests_payment_requests_supervisor_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type materialsUncheckedCreateNestedManyWithoutPayment_requestsInput = {
    create?: XOR<materialsCreateWithoutPayment_requestsInput, materialsUncheckedCreateWithoutPayment_requestsInput> | materialsCreateWithoutPayment_requestsInput[] | materialsUncheckedCreateWithoutPayment_requestsInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutPayment_requestsInput | materialsCreateOrConnectWithoutPayment_requestsInput[]
    createMany?: materialsCreateManyPayment_requestsInputEnvelope
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type materialsUpdateManyWithoutPayment_requestsNestedInput = {
    create?: XOR<materialsCreateWithoutPayment_requestsInput, materialsUncheckedCreateWithoutPayment_requestsInput> | materialsCreateWithoutPayment_requestsInput[] | materialsUncheckedCreateWithoutPayment_requestsInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutPayment_requestsInput | materialsCreateOrConnectWithoutPayment_requestsInput[]
    upsert?: materialsUpsertWithWhereUniqueWithoutPayment_requestsInput | materialsUpsertWithWhereUniqueWithoutPayment_requestsInput[]
    createMany?: materialsCreateManyPayment_requestsInputEnvelope
    set?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    disconnect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    delete?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    update?: materialsUpdateWithWhereUniqueWithoutPayment_requestsInput | materialsUpdateWithWhereUniqueWithoutPayment_requestsInput[]
    updateMany?: materialsUpdateManyWithWhereWithoutPayment_requestsInput | materialsUpdateManyWithWhereWithoutPayment_requestsInput[]
    deleteMany?: materialsScalarWhereInput | materialsScalarWhereInput[]
  }

  export type usersUpdateOneWithoutPayment_requests_payment_requests_pm_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutPayment_requests_payment_requests_pm_idTousersInput, usersUncheckedCreateWithoutPayment_requests_payment_requests_pm_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutPayment_requests_payment_requests_pm_idTousersInput
    upsert?: usersUpsertWithoutPayment_requests_payment_requests_pm_idTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPayment_requests_payment_requests_pm_idTousersInput, usersUpdateWithoutPayment_requests_payment_requests_pm_idTousersInput>, usersUncheckedUpdateWithoutPayment_requests_payment_requests_pm_idTousersInput>
  }

  export type projectsUpdateOneRequiredWithoutPayment_requestsNestedInput = {
    create?: XOR<projectsCreateWithoutPayment_requestsInput, projectsUncheckedCreateWithoutPayment_requestsInput>
    connectOrCreate?: projectsCreateOrConnectWithoutPayment_requestsInput
    upsert?: projectsUpsertWithoutPayment_requestsInput
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutPayment_requestsInput, projectsUpdateWithoutPayment_requestsInput>, projectsUncheckedUpdateWithoutPayment_requestsInput>
  }

  export type usersUpdateOneRequiredWithoutPayment_requests_payment_requests_supervisor_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutPayment_requests_payment_requests_supervisor_idTousersInput, usersUncheckedCreateWithoutPayment_requests_payment_requests_supervisor_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutPayment_requests_payment_requests_supervisor_idTousersInput
    upsert?: usersUpsertWithoutPayment_requests_payment_requests_supervisor_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPayment_requests_payment_requests_supervisor_idTousersInput, usersUpdateWithoutPayment_requests_payment_requests_supervisor_idTousersInput>, usersUncheckedUpdateWithoutPayment_requests_payment_requests_supervisor_idTousersInput>
  }

  export type materialsUncheckedUpdateManyWithoutPayment_requestsNestedInput = {
    create?: XOR<materialsCreateWithoutPayment_requestsInput, materialsUncheckedCreateWithoutPayment_requestsInput> | materialsCreateWithoutPayment_requestsInput[] | materialsUncheckedCreateWithoutPayment_requestsInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutPayment_requestsInput | materialsCreateOrConnectWithoutPayment_requestsInput[]
    upsert?: materialsUpsertWithWhereUniqueWithoutPayment_requestsInput | materialsUpsertWithWhereUniqueWithoutPayment_requestsInput[]
    createMany?: materialsCreateManyPayment_requestsInputEnvelope
    set?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    disconnect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    delete?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    update?: materialsUpdateWithWhereUniqueWithoutPayment_requestsInput | materialsUpdateWithWhereUniqueWithoutPayment_requestsInput[]
    updateMany?: materialsUpdateManyWithWhereWithoutPayment_requestsInput | materialsUpdateManyWithWhereWithoutPayment_requestsInput[]
    deleteMany?: materialsScalarWhereInput | materialsScalarWhereInput[]
  }

  export type projectsCreateNestedOneWithoutProject_progressInput = {
    create?: XOR<projectsCreateWithoutProject_progressInput, projectsUncheckedCreateWithoutProject_progressInput>
    connectOrCreate?: projectsCreateOrConnectWithoutProject_progressInput
    connect?: projectsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutProject_progressInput = {
    create?: XOR<usersCreateWithoutProject_progressInput, usersUncheckedCreateWithoutProject_progressInput>
    connectOrCreate?: usersCreateOrConnectWithoutProject_progressInput
    connect?: usersWhereUniqueInput
  }

  export type projectsUpdateOneRequiredWithoutProject_progressNestedInput = {
    create?: XOR<projectsCreateWithoutProject_progressInput, projectsUncheckedCreateWithoutProject_progressInput>
    connectOrCreate?: projectsCreateOrConnectWithoutProject_progressInput
    upsert?: projectsUpsertWithoutProject_progressInput
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutProject_progressInput, projectsUpdateWithoutProject_progressInput>, projectsUncheckedUpdateWithoutProject_progressInput>
  }

  export type usersUpdateOneRequiredWithoutProject_progressNestedInput = {
    create?: XOR<usersCreateWithoutProject_progressInput, usersUncheckedCreateWithoutProject_progressInput>
    connectOrCreate?: usersCreateOrConnectWithoutProject_progressInput
    upsert?: usersUpsertWithoutProject_progressInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProject_progressInput, usersUpdateWithoutProject_progressInput>, usersUncheckedUpdateWithoutProject_progressInput>
  }

  export type projectsCreateexpense_headsInput = {
    set: string[]
  }

  export type archived_progressCreateNestedManyWithoutProjectsInput = {
    create?: XOR<archived_progressCreateWithoutProjectsInput, archived_progressUncheckedCreateWithoutProjectsInput> | archived_progressCreateWithoutProjectsInput[] | archived_progressUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: archived_progressCreateOrConnectWithoutProjectsInput | archived_progressCreateOrConnectWithoutProjectsInput[]
    createMany?: archived_progressCreateManyProjectsInputEnvelope
    connect?: archived_progressWhereUniqueInput | archived_progressWhereUniqueInput[]
  }

  export type billsCreateNestedManyWithoutProjectsInput = {
    create?: XOR<billsCreateWithoutProjectsInput, billsUncheckedCreateWithoutProjectsInput> | billsCreateWithoutProjectsInput[] | billsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: billsCreateOrConnectWithoutProjectsInput | billsCreateOrConnectWithoutProjectsInput[]
    createMany?: billsCreateManyProjectsInputEnvelope
    connect?: billsWhereUniqueInput | billsWhereUniqueInput[]
  }

  export type payment_requestsCreateNestedManyWithoutProjectsInput = {
    create?: XOR<payment_requestsCreateWithoutProjectsInput, payment_requestsUncheckedCreateWithoutProjectsInput> | payment_requestsCreateWithoutProjectsInput[] | payment_requestsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: payment_requestsCreateOrConnectWithoutProjectsInput | payment_requestsCreateOrConnectWithoutProjectsInput[]
    createMany?: payment_requestsCreateManyProjectsInputEnvelope
    connect?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
  }

  export type project_progressCreateNestedManyWithoutProjectsInput = {
    create?: XOR<project_progressCreateWithoutProjectsInput, project_progressUncheckedCreateWithoutProjectsInput> | project_progressCreateWithoutProjectsInput[] | project_progressUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_progressCreateOrConnectWithoutProjectsInput | project_progressCreateOrConnectWithoutProjectsInput[]
    createMany?: project_progressCreateManyProjectsInputEnvelope
    connect?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
  }

  export type remindersCreateNestedManyWithoutProjectsInput = {
    create?: XOR<remindersCreateWithoutProjectsInput, remindersUncheckedCreateWithoutProjectsInput> | remindersCreateWithoutProjectsInput[] | remindersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: remindersCreateOrConnectWithoutProjectsInput | remindersCreateOrConnectWithoutProjectsInput[]
    createMany?: remindersCreateManyProjectsInputEnvelope
    connect?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutProjectsInput = {
    create?: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput> | usersCreateWithoutProjectsInput[] | usersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutProjectsInput | usersCreateOrConnectWithoutProjectsInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type archived_progressUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<archived_progressCreateWithoutProjectsInput, archived_progressUncheckedCreateWithoutProjectsInput> | archived_progressCreateWithoutProjectsInput[] | archived_progressUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: archived_progressCreateOrConnectWithoutProjectsInput | archived_progressCreateOrConnectWithoutProjectsInput[]
    createMany?: archived_progressCreateManyProjectsInputEnvelope
    connect?: archived_progressWhereUniqueInput | archived_progressWhereUniqueInput[]
  }

  export type billsUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<billsCreateWithoutProjectsInput, billsUncheckedCreateWithoutProjectsInput> | billsCreateWithoutProjectsInput[] | billsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: billsCreateOrConnectWithoutProjectsInput | billsCreateOrConnectWithoutProjectsInput[]
    createMany?: billsCreateManyProjectsInputEnvelope
    connect?: billsWhereUniqueInput | billsWhereUniqueInput[]
  }

  export type payment_requestsUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<payment_requestsCreateWithoutProjectsInput, payment_requestsUncheckedCreateWithoutProjectsInput> | payment_requestsCreateWithoutProjectsInput[] | payment_requestsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: payment_requestsCreateOrConnectWithoutProjectsInput | payment_requestsCreateOrConnectWithoutProjectsInput[]
    createMany?: payment_requestsCreateManyProjectsInputEnvelope
    connect?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
  }

  export type project_progressUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<project_progressCreateWithoutProjectsInput, project_progressUncheckedCreateWithoutProjectsInput> | project_progressCreateWithoutProjectsInput[] | project_progressUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_progressCreateOrConnectWithoutProjectsInput | project_progressCreateOrConnectWithoutProjectsInput[]
    createMany?: project_progressCreateManyProjectsInputEnvelope
    connect?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
  }

  export type remindersUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<remindersCreateWithoutProjectsInput, remindersUncheckedCreateWithoutProjectsInput> | remindersCreateWithoutProjectsInput[] | remindersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: remindersCreateOrConnectWithoutProjectsInput | remindersCreateOrConnectWithoutProjectsInput[]
    createMany?: remindersCreateManyProjectsInputEnvelope
    connect?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput> | usersCreateWithoutProjectsInput[] | usersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutProjectsInput | usersCreateOrConnectWithoutProjectsInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type projectsUpdateexpense_headsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type archived_progressUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<archived_progressCreateWithoutProjectsInput, archived_progressUncheckedCreateWithoutProjectsInput> | archived_progressCreateWithoutProjectsInput[] | archived_progressUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: archived_progressCreateOrConnectWithoutProjectsInput | archived_progressCreateOrConnectWithoutProjectsInput[]
    upsert?: archived_progressUpsertWithWhereUniqueWithoutProjectsInput | archived_progressUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: archived_progressCreateManyProjectsInputEnvelope
    set?: archived_progressWhereUniqueInput | archived_progressWhereUniqueInput[]
    disconnect?: archived_progressWhereUniqueInput | archived_progressWhereUniqueInput[]
    delete?: archived_progressWhereUniqueInput | archived_progressWhereUniqueInput[]
    connect?: archived_progressWhereUniqueInput | archived_progressWhereUniqueInput[]
    update?: archived_progressUpdateWithWhereUniqueWithoutProjectsInput | archived_progressUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: archived_progressUpdateManyWithWhereWithoutProjectsInput | archived_progressUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: archived_progressScalarWhereInput | archived_progressScalarWhereInput[]
  }

  export type billsUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<billsCreateWithoutProjectsInput, billsUncheckedCreateWithoutProjectsInput> | billsCreateWithoutProjectsInput[] | billsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: billsCreateOrConnectWithoutProjectsInput | billsCreateOrConnectWithoutProjectsInput[]
    upsert?: billsUpsertWithWhereUniqueWithoutProjectsInput | billsUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: billsCreateManyProjectsInputEnvelope
    set?: billsWhereUniqueInput | billsWhereUniqueInput[]
    disconnect?: billsWhereUniqueInput | billsWhereUniqueInput[]
    delete?: billsWhereUniqueInput | billsWhereUniqueInput[]
    connect?: billsWhereUniqueInput | billsWhereUniqueInput[]
    update?: billsUpdateWithWhereUniqueWithoutProjectsInput | billsUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: billsUpdateManyWithWhereWithoutProjectsInput | billsUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: billsScalarWhereInput | billsScalarWhereInput[]
  }

  export type payment_requestsUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<payment_requestsCreateWithoutProjectsInput, payment_requestsUncheckedCreateWithoutProjectsInput> | payment_requestsCreateWithoutProjectsInput[] | payment_requestsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: payment_requestsCreateOrConnectWithoutProjectsInput | payment_requestsCreateOrConnectWithoutProjectsInput[]
    upsert?: payment_requestsUpsertWithWhereUniqueWithoutProjectsInput | payment_requestsUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: payment_requestsCreateManyProjectsInputEnvelope
    set?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    disconnect?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    delete?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    connect?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    update?: payment_requestsUpdateWithWhereUniqueWithoutProjectsInput | payment_requestsUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: payment_requestsUpdateManyWithWhereWithoutProjectsInput | payment_requestsUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: payment_requestsScalarWhereInput | payment_requestsScalarWhereInput[]
  }

  export type project_progressUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<project_progressCreateWithoutProjectsInput, project_progressUncheckedCreateWithoutProjectsInput> | project_progressCreateWithoutProjectsInput[] | project_progressUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_progressCreateOrConnectWithoutProjectsInput | project_progressCreateOrConnectWithoutProjectsInput[]
    upsert?: project_progressUpsertWithWhereUniqueWithoutProjectsInput | project_progressUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: project_progressCreateManyProjectsInputEnvelope
    set?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
    disconnect?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
    delete?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
    connect?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
    update?: project_progressUpdateWithWhereUniqueWithoutProjectsInput | project_progressUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: project_progressUpdateManyWithWhereWithoutProjectsInput | project_progressUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: project_progressScalarWhereInput | project_progressScalarWhereInput[]
  }

  export type remindersUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<remindersCreateWithoutProjectsInput, remindersUncheckedCreateWithoutProjectsInput> | remindersCreateWithoutProjectsInput[] | remindersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: remindersCreateOrConnectWithoutProjectsInput | remindersCreateOrConnectWithoutProjectsInput[]
    upsert?: remindersUpsertWithWhereUniqueWithoutProjectsInput | remindersUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: remindersCreateManyProjectsInputEnvelope
    set?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    disconnect?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    delete?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    connect?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    update?: remindersUpdateWithWhereUniqueWithoutProjectsInput | remindersUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: remindersUpdateManyWithWhereWithoutProjectsInput | remindersUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: remindersScalarWhereInput | remindersScalarWhereInput[]
  }

  export type usersUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput> | usersCreateWithoutProjectsInput[] | usersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutProjectsInput | usersCreateOrConnectWithoutProjectsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutProjectsInput | usersUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutProjectsInput | usersUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutProjectsInput | usersUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type archived_progressUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<archived_progressCreateWithoutProjectsInput, archived_progressUncheckedCreateWithoutProjectsInput> | archived_progressCreateWithoutProjectsInput[] | archived_progressUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: archived_progressCreateOrConnectWithoutProjectsInput | archived_progressCreateOrConnectWithoutProjectsInput[]
    upsert?: archived_progressUpsertWithWhereUniqueWithoutProjectsInput | archived_progressUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: archived_progressCreateManyProjectsInputEnvelope
    set?: archived_progressWhereUniqueInput | archived_progressWhereUniqueInput[]
    disconnect?: archived_progressWhereUniqueInput | archived_progressWhereUniqueInput[]
    delete?: archived_progressWhereUniqueInput | archived_progressWhereUniqueInput[]
    connect?: archived_progressWhereUniqueInput | archived_progressWhereUniqueInput[]
    update?: archived_progressUpdateWithWhereUniqueWithoutProjectsInput | archived_progressUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: archived_progressUpdateManyWithWhereWithoutProjectsInput | archived_progressUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: archived_progressScalarWhereInput | archived_progressScalarWhereInput[]
  }

  export type billsUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<billsCreateWithoutProjectsInput, billsUncheckedCreateWithoutProjectsInput> | billsCreateWithoutProjectsInput[] | billsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: billsCreateOrConnectWithoutProjectsInput | billsCreateOrConnectWithoutProjectsInput[]
    upsert?: billsUpsertWithWhereUniqueWithoutProjectsInput | billsUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: billsCreateManyProjectsInputEnvelope
    set?: billsWhereUniqueInput | billsWhereUniqueInput[]
    disconnect?: billsWhereUniqueInput | billsWhereUniqueInput[]
    delete?: billsWhereUniqueInput | billsWhereUniqueInput[]
    connect?: billsWhereUniqueInput | billsWhereUniqueInput[]
    update?: billsUpdateWithWhereUniqueWithoutProjectsInput | billsUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: billsUpdateManyWithWhereWithoutProjectsInput | billsUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: billsScalarWhereInput | billsScalarWhereInput[]
  }

  export type payment_requestsUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<payment_requestsCreateWithoutProjectsInput, payment_requestsUncheckedCreateWithoutProjectsInput> | payment_requestsCreateWithoutProjectsInput[] | payment_requestsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: payment_requestsCreateOrConnectWithoutProjectsInput | payment_requestsCreateOrConnectWithoutProjectsInput[]
    upsert?: payment_requestsUpsertWithWhereUniqueWithoutProjectsInput | payment_requestsUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: payment_requestsCreateManyProjectsInputEnvelope
    set?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    disconnect?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    delete?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    connect?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    update?: payment_requestsUpdateWithWhereUniqueWithoutProjectsInput | payment_requestsUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: payment_requestsUpdateManyWithWhereWithoutProjectsInput | payment_requestsUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: payment_requestsScalarWhereInput | payment_requestsScalarWhereInput[]
  }

  export type project_progressUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<project_progressCreateWithoutProjectsInput, project_progressUncheckedCreateWithoutProjectsInput> | project_progressCreateWithoutProjectsInput[] | project_progressUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_progressCreateOrConnectWithoutProjectsInput | project_progressCreateOrConnectWithoutProjectsInput[]
    upsert?: project_progressUpsertWithWhereUniqueWithoutProjectsInput | project_progressUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: project_progressCreateManyProjectsInputEnvelope
    set?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
    disconnect?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
    delete?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
    connect?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
    update?: project_progressUpdateWithWhereUniqueWithoutProjectsInput | project_progressUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: project_progressUpdateManyWithWhereWithoutProjectsInput | project_progressUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: project_progressScalarWhereInput | project_progressScalarWhereInput[]
  }

  export type remindersUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<remindersCreateWithoutProjectsInput, remindersUncheckedCreateWithoutProjectsInput> | remindersCreateWithoutProjectsInput[] | remindersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: remindersCreateOrConnectWithoutProjectsInput | remindersCreateOrConnectWithoutProjectsInput[]
    upsert?: remindersUpsertWithWhereUniqueWithoutProjectsInput | remindersUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: remindersCreateManyProjectsInputEnvelope
    set?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    disconnect?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    delete?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    connect?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    update?: remindersUpdateWithWhereUniqueWithoutProjectsInput | remindersUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: remindersUpdateManyWithWhereWithoutProjectsInput | remindersUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: remindersScalarWhereInput | remindersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput> | usersCreateWithoutProjectsInput[] | usersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutProjectsInput | usersCreateOrConnectWithoutProjectsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutProjectsInput | usersUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutProjectsInput | usersUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutProjectsInput | usersUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type projectsCreateNestedOneWithoutRemindersInput = {
    create?: XOR<projectsCreateWithoutRemindersInput, projectsUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: projectsCreateOrConnectWithoutRemindersInput
    connect?: projectsWhereUniqueInput
  }

  export type workersCreateNestedOneWithoutRemindersInput = {
    create?: XOR<workersCreateWithoutRemindersInput, workersUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: workersCreateOrConnectWithoutRemindersInput
    connect?: workersWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type projectsUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<projectsCreateWithoutRemindersInput, projectsUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: projectsCreateOrConnectWithoutRemindersInput
    upsert?: projectsUpsertWithoutRemindersInput
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutRemindersInput, projectsUpdateWithoutRemindersInput>, projectsUncheckedUpdateWithoutRemindersInput>
  }

  export type workersUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<workersCreateWithoutRemindersInput, workersUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: workersCreateOrConnectWithoutRemindersInput
    upsert?: workersUpsertWithoutRemindersInput
    connect?: workersWhereUniqueInput
    update?: XOR<XOR<workersUpdateToOneWithWhereWithoutRemindersInput, workersUpdateWithoutRemindersInput>, workersUncheckedUpdateWithoutRemindersInput>
  }

  export type attendancesCreateNestedManyWithoutSitesInput = {
    create?: XOR<attendancesCreateWithoutSitesInput, attendancesUncheckedCreateWithoutSitesInput> | attendancesCreateWithoutSitesInput[] | attendancesUncheckedCreateWithoutSitesInput[]
    connectOrCreate?: attendancesCreateOrConnectWithoutSitesInput | attendancesCreateOrConnectWithoutSitesInput[]
    createMany?: attendancesCreateManySitesInputEnvelope
    connect?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutSites_sites_createdByTousersInput = {
    create?: XOR<usersCreateWithoutSites_sites_createdByTousersInput, usersUncheckedCreateWithoutSites_sites_createdByTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutSites_sites_createdByTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedManyWithoutSites_users_assignedSiteIdTositesInput = {
    create?: XOR<usersCreateWithoutSites_users_assignedSiteIdTositesInput, usersUncheckedCreateWithoutSites_users_assignedSiteIdTositesInput> | usersCreateWithoutSites_users_assignedSiteIdTositesInput[] | usersUncheckedCreateWithoutSites_users_assignedSiteIdTositesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSites_users_assignedSiteIdTositesInput | usersCreateOrConnectWithoutSites_users_assignedSiteIdTositesInput[]
    createMany?: usersCreateManySites_users_assignedSiteIdTositesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type attendancesUncheckedCreateNestedManyWithoutSitesInput = {
    create?: XOR<attendancesCreateWithoutSitesInput, attendancesUncheckedCreateWithoutSitesInput> | attendancesCreateWithoutSitesInput[] | attendancesUncheckedCreateWithoutSitesInput[]
    connectOrCreate?: attendancesCreateOrConnectWithoutSitesInput | attendancesCreateOrConnectWithoutSitesInput[]
    createMany?: attendancesCreateManySitesInputEnvelope
    connect?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutSites_users_assignedSiteIdTositesInput = {
    create?: XOR<usersCreateWithoutSites_users_assignedSiteIdTositesInput, usersUncheckedCreateWithoutSites_users_assignedSiteIdTositesInput> | usersCreateWithoutSites_users_assignedSiteIdTositesInput[] | usersUncheckedCreateWithoutSites_users_assignedSiteIdTositesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSites_users_assignedSiteIdTositesInput | usersCreateOrConnectWithoutSites_users_assignedSiteIdTositesInput[]
    createMany?: usersCreateManySites_users_assignedSiteIdTositesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type attendancesUpdateManyWithoutSitesNestedInput = {
    create?: XOR<attendancesCreateWithoutSitesInput, attendancesUncheckedCreateWithoutSitesInput> | attendancesCreateWithoutSitesInput[] | attendancesUncheckedCreateWithoutSitesInput[]
    connectOrCreate?: attendancesCreateOrConnectWithoutSitesInput | attendancesCreateOrConnectWithoutSitesInput[]
    upsert?: attendancesUpsertWithWhereUniqueWithoutSitesInput | attendancesUpsertWithWhereUniqueWithoutSitesInput[]
    createMany?: attendancesCreateManySitesInputEnvelope
    set?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
    disconnect?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
    delete?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
    connect?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
    update?: attendancesUpdateWithWhereUniqueWithoutSitesInput | attendancesUpdateWithWhereUniqueWithoutSitesInput[]
    updateMany?: attendancesUpdateManyWithWhereWithoutSitesInput | attendancesUpdateManyWithWhereWithoutSitesInput[]
    deleteMany?: attendancesScalarWhereInput | attendancesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutSites_sites_createdByTousersNestedInput = {
    create?: XOR<usersCreateWithoutSites_sites_createdByTousersInput, usersUncheckedCreateWithoutSites_sites_createdByTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutSites_sites_createdByTousersInput
    upsert?: usersUpsertWithoutSites_sites_createdByTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSites_sites_createdByTousersInput, usersUpdateWithoutSites_sites_createdByTousersInput>, usersUncheckedUpdateWithoutSites_sites_createdByTousersInput>
  }

  export type usersUpdateManyWithoutSites_users_assignedSiteIdTositesNestedInput = {
    create?: XOR<usersCreateWithoutSites_users_assignedSiteIdTositesInput, usersUncheckedCreateWithoutSites_users_assignedSiteIdTositesInput> | usersCreateWithoutSites_users_assignedSiteIdTositesInput[] | usersUncheckedCreateWithoutSites_users_assignedSiteIdTositesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSites_users_assignedSiteIdTositesInput | usersCreateOrConnectWithoutSites_users_assignedSiteIdTositesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutSites_users_assignedSiteIdTositesInput | usersUpsertWithWhereUniqueWithoutSites_users_assignedSiteIdTositesInput[]
    createMany?: usersCreateManySites_users_assignedSiteIdTositesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutSites_users_assignedSiteIdTositesInput | usersUpdateWithWhereUniqueWithoutSites_users_assignedSiteIdTositesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutSites_users_assignedSiteIdTositesInput | usersUpdateManyWithWhereWithoutSites_users_assignedSiteIdTositesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type attendancesUncheckedUpdateManyWithoutSitesNestedInput = {
    create?: XOR<attendancesCreateWithoutSitesInput, attendancesUncheckedCreateWithoutSitesInput> | attendancesCreateWithoutSitesInput[] | attendancesUncheckedCreateWithoutSitesInput[]
    connectOrCreate?: attendancesCreateOrConnectWithoutSitesInput | attendancesCreateOrConnectWithoutSitesInput[]
    upsert?: attendancesUpsertWithWhereUniqueWithoutSitesInput | attendancesUpsertWithWhereUniqueWithoutSitesInput[]
    createMany?: attendancesCreateManySitesInputEnvelope
    set?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
    disconnect?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
    delete?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
    connect?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
    update?: attendancesUpdateWithWhereUniqueWithoutSitesInput | attendancesUpdateWithWhereUniqueWithoutSitesInput[]
    updateMany?: attendancesUpdateManyWithWhereWithoutSitesInput | attendancesUpdateManyWithWhereWithoutSitesInput[]
    deleteMany?: attendancesScalarWhereInput | attendancesScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutSites_users_assignedSiteIdTositesNestedInput = {
    create?: XOR<usersCreateWithoutSites_users_assignedSiteIdTositesInput, usersUncheckedCreateWithoutSites_users_assignedSiteIdTositesInput> | usersCreateWithoutSites_users_assignedSiteIdTositesInput[] | usersUncheckedCreateWithoutSites_users_assignedSiteIdTositesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSites_users_assignedSiteIdTositesInput | usersCreateOrConnectWithoutSites_users_assignedSiteIdTositesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutSites_users_assignedSiteIdTositesInput | usersUpsertWithWhereUniqueWithoutSites_users_assignedSiteIdTositesInput[]
    createMany?: usersCreateManySites_users_assignedSiteIdTositesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutSites_users_assignedSiteIdTositesInput | usersUpdateWithWhereUniqueWithoutSites_users_assignedSiteIdTositesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutSites_users_assignedSiteIdTositesInput | usersUpdateManyWithWhereWithoutSites_users_assignedSiteIdTositesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type attendancesCreateNestedManyWithoutUsersInput = {
    create?: XOR<attendancesCreateWithoutUsersInput, attendancesUncheckedCreateWithoutUsersInput> | attendancesCreateWithoutUsersInput[] | attendancesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: attendancesCreateOrConnectWithoutUsersInput | attendancesCreateOrConnectWithoutUsersInput[]
    createMany?: attendancesCreateManyUsersInputEnvelope
    connect?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
  }

  export type billsCreateNestedManyWithoutUsersInput = {
    create?: XOR<billsCreateWithoutUsersInput, billsUncheckedCreateWithoutUsersInput> | billsCreateWithoutUsersInput[] | billsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: billsCreateOrConnectWithoutUsersInput | billsCreateOrConnectWithoutUsersInput[]
    createMany?: billsCreateManyUsersInputEnvelope
    connect?: billsWhereUniqueInput | billsWhereUniqueInput[]
  }

  export type payment_requestsCreateNestedManyWithoutUsers_payment_requests_pm_idTousersInput = {
    create?: XOR<payment_requestsCreateWithoutUsers_payment_requests_pm_idTousersInput, payment_requestsUncheckedCreateWithoutUsers_payment_requests_pm_idTousersInput> | payment_requestsCreateWithoutUsers_payment_requests_pm_idTousersInput[] | payment_requestsUncheckedCreateWithoutUsers_payment_requests_pm_idTousersInput[]
    connectOrCreate?: payment_requestsCreateOrConnectWithoutUsers_payment_requests_pm_idTousersInput | payment_requestsCreateOrConnectWithoutUsers_payment_requests_pm_idTousersInput[]
    createMany?: payment_requestsCreateManyUsers_payment_requests_pm_idTousersInputEnvelope
    connect?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
  }

  export type payment_requestsCreateNestedManyWithoutUsers_payment_requests_supervisor_idTousersInput = {
    create?: XOR<payment_requestsCreateWithoutUsers_payment_requests_supervisor_idTousersInput, payment_requestsUncheckedCreateWithoutUsers_payment_requests_supervisor_idTousersInput> | payment_requestsCreateWithoutUsers_payment_requests_supervisor_idTousersInput[] | payment_requestsUncheckedCreateWithoutUsers_payment_requests_supervisor_idTousersInput[]
    connectOrCreate?: payment_requestsCreateOrConnectWithoutUsers_payment_requests_supervisor_idTousersInput | payment_requestsCreateOrConnectWithoutUsers_payment_requests_supervisor_idTousersInput[]
    createMany?: payment_requestsCreateManyUsers_payment_requests_supervisor_idTousersInputEnvelope
    connect?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
  }

  export type project_progressCreateNestedManyWithoutUsersInput = {
    create?: XOR<project_progressCreateWithoutUsersInput, project_progressUncheckedCreateWithoutUsersInput> | project_progressCreateWithoutUsersInput[] | project_progressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: project_progressCreateOrConnectWithoutUsersInput | project_progressCreateOrConnectWithoutUsersInput[]
    createMany?: project_progressCreateManyUsersInputEnvelope
    connect?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
  }

  export type sitesCreateNestedManyWithoutUsers_sites_createdByTousersInput = {
    create?: XOR<sitesCreateWithoutUsers_sites_createdByTousersInput, sitesUncheckedCreateWithoutUsers_sites_createdByTousersInput> | sitesCreateWithoutUsers_sites_createdByTousersInput[] | sitesUncheckedCreateWithoutUsers_sites_createdByTousersInput[]
    connectOrCreate?: sitesCreateOrConnectWithoutUsers_sites_createdByTousersInput | sitesCreateOrConnectWithoutUsers_sites_createdByTousersInput[]
    createMany?: sitesCreateManyUsers_sites_createdByTousersInputEnvelope
    connect?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
  }

  export type sitesCreateNestedOneWithoutUsers_users_assignedSiteIdTositesInput = {
    create?: XOR<sitesCreateWithoutUsers_users_assignedSiteIdTositesInput, sitesUncheckedCreateWithoutUsers_users_assignedSiteIdTositesInput>
    connectOrCreate?: sitesCreateOrConnectWithoutUsers_users_assignedSiteIdTositesInput
    connect?: sitesWhereUniqueInput
  }

  export type projectsCreateNestedManyWithoutUsersInput = {
    create?: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput> | projectsCreateWithoutUsersInput[] | projectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsersInput | projectsCreateOrConnectWithoutUsersInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type attendancesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<attendancesCreateWithoutUsersInput, attendancesUncheckedCreateWithoutUsersInput> | attendancesCreateWithoutUsersInput[] | attendancesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: attendancesCreateOrConnectWithoutUsersInput | attendancesCreateOrConnectWithoutUsersInput[]
    createMany?: attendancesCreateManyUsersInputEnvelope
    connect?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
  }

  export type billsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<billsCreateWithoutUsersInput, billsUncheckedCreateWithoutUsersInput> | billsCreateWithoutUsersInput[] | billsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: billsCreateOrConnectWithoutUsersInput | billsCreateOrConnectWithoutUsersInput[]
    createMany?: billsCreateManyUsersInputEnvelope
    connect?: billsWhereUniqueInput | billsWhereUniqueInput[]
  }

  export type payment_requestsUncheckedCreateNestedManyWithoutUsers_payment_requests_pm_idTousersInput = {
    create?: XOR<payment_requestsCreateWithoutUsers_payment_requests_pm_idTousersInput, payment_requestsUncheckedCreateWithoutUsers_payment_requests_pm_idTousersInput> | payment_requestsCreateWithoutUsers_payment_requests_pm_idTousersInput[] | payment_requestsUncheckedCreateWithoutUsers_payment_requests_pm_idTousersInput[]
    connectOrCreate?: payment_requestsCreateOrConnectWithoutUsers_payment_requests_pm_idTousersInput | payment_requestsCreateOrConnectWithoutUsers_payment_requests_pm_idTousersInput[]
    createMany?: payment_requestsCreateManyUsers_payment_requests_pm_idTousersInputEnvelope
    connect?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
  }

  export type payment_requestsUncheckedCreateNestedManyWithoutUsers_payment_requests_supervisor_idTousersInput = {
    create?: XOR<payment_requestsCreateWithoutUsers_payment_requests_supervisor_idTousersInput, payment_requestsUncheckedCreateWithoutUsers_payment_requests_supervisor_idTousersInput> | payment_requestsCreateWithoutUsers_payment_requests_supervisor_idTousersInput[] | payment_requestsUncheckedCreateWithoutUsers_payment_requests_supervisor_idTousersInput[]
    connectOrCreate?: payment_requestsCreateOrConnectWithoutUsers_payment_requests_supervisor_idTousersInput | payment_requestsCreateOrConnectWithoutUsers_payment_requests_supervisor_idTousersInput[]
    createMany?: payment_requestsCreateManyUsers_payment_requests_supervisor_idTousersInputEnvelope
    connect?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
  }

  export type project_progressUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<project_progressCreateWithoutUsersInput, project_progressUncheckedCreateWithoutUsersInput> | project_progressCreateWithoutUsersInput[] | project_progressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: project_progressCreateOrConnectWithoutUsersInput | project_progressCreateOrConnectWithoutUsersInput[]
    createMany?: project_progressCreateManyUsersInputEnvelope
    connect?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
  }

  export type sitesUncheckedCreateNestedManyWithoutUsers_sites_createdByTousersInput = {
    create?: XOR<sitesCreateWithoutUsers_sites_createdByTousersInput, sitesUncheckedCreateWithoutUsers_sites_createdByTousersInput> | sitesCreateWithoutUsers_sites_createdByTousersInput[] | sitesUncheckedCreateWithoutUsers_sites_createdByTousersInput[]
    connectOrCreate?: sitesCreateOrConnectWithoutUsers_sites_createdByTousersInput | sitesCreateOrConnectWithoutUsers_sites_createdByTousersInput[]
    createMany?: sitesCreateManyUsers_sites_createdByTousersInputEnvelope
    connect?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
  }

  export type projectsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput> | projectsCreateWithoutUsersInput[] | projectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsersInput | projectsCreateOrConnectWithoutUsersInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type attendancesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<attendancesCreateWithoutUsersInput, attendancesUncheckedCreateWithoutUsersInput> | attendancesCreateWithoutUsersInput[] | attendancesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: attendancesCreateOrConnectWithoutUsersInput | attendancesCreateOrConnectWithoutUsersInput[]
    upsert?: attendancesUpsertWithWhereUniqueWithoutUsersInput | attendancesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: attendancesCreateManyUsersInputEnvelope
    set?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
    disconnect?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
    delete?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
    connect?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
    update?: attendancesUpdateWithWhereUniqueWithoutUsersInput | attendancesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: attendancesUpdateManyWithWhereWithoutUsersInput | attendancesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: attendancesScalarWhereInput | attendancesScalarWhereInput[]
  }

  export type billsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<billsCreateWithoutUsersInput, billsUncheckedCreateWithoutUsersInput> | billsCreateWithoutUsersInput[] | billsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: billsCreateOrConnectWithoutUsersInput | billsCreateOrConnectWithoutUsersInput[]
    upsert?: billsUpsertWithWhereUniqueWithoutUsersInput | billsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: billsCreateManyUsersInputEnvelope
    set?: billsWhereUniqueInput | billsWhereUniqueInput[]
    disconnect?: billsWhereUniqueInput | billsWhereUniqueInput[]
    delete?: billsWhereUniqueInput | billsWhereUniqueInput[]
    connect?: billsWhereUniqueInput | billsWhereUniqueInput[]
    update?: billsUpdateWithWhereUniqueWithoutUsersInput | billsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: billsUpdateManyWithWhereWithoutUsersInput | billsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: billsScalarWhereInput | billsScalarWhereInput[]
  }

  export type payment_requestsUpdateManyWithoutUsers_payment_requests_pm_idTousersNestedInput = {
    create?: XOR<payment_requestsCreateWithoutUsers_payment_requests_pm_idTousersInput, payment_requestsUncheckedCreateWithoutUsers_payment_requests_pm_idTousersInput> | payment_requestsCreateWithoutUsers_payment_requests_pm_idTousersInput[] | payment_requestsUncheckedCreateWithoutUsers_payment_requests_pm_idTousersInput[]
    connectOrCreate?: payment_requestsCreateOrConnectWithoutUsers_payment_requests_pm_idTousersInput | payment_requestsCreateOrConnectWithoutUsers_payment_requests_pm_idTousersInput[]
    upsert?: payment_requestsUpsertWithWhereUniqueWithoutUsers_payment_requests_pm_idTousersInput | payment_requestsUpsertWithWhereUniqueWithoutUsers_payment_requests_pm_idTousersInput[]
    createMany?: payment_requestsCreateManyUsers_payment_requests_pm_idTousersInputEnvelope
    set?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    disconnect?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    delete?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    connect?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    update?: payment_requestsUpdateWithWhereUniqueWithoutUsers_payment_requests_pm_idTousersInput | payment_requestsUpdateWithWhereUniqueWithoutUsers_payment_requests_pm_idTousersInput[]
    updateMany?: payment_requestsUpdateManyWithWhereWithoutUsers_payment_requests_pm_idTousersInput | payment_requestsUpdateManyWithWhereWithoutUsers_payment_requests_pm_idTousersInput[]
    deleteMany?: payment_requestsScalarWhereInput | payment_requestsScalarWhereInput[]
  }

  export type payment_requestsUpdateManyWithoutUsers_payment_requests_supervisor_idTousersNestedInput = {
    create?: XOR<payment_requestsCreateWithoutUsers_payment_requests_supervisor_idTousersInput, payment_requestsUncheckedCreateWithoutUsers_payment_requests_supervisor_idTousersInput> | payment_requestsCreateWithoutUsers_payment_requests_supervisor_idTousersInput[] | payment_requestsUncheckedCreateWithoutUsers_payment_requests_supervisor_idTousersInput[]
    connectOrCreate?: payment_requestsCreateOrConnectWithoutUsers_payment_requests_supervisor_idTousersInput | payment_requestsCreateOrConnectWithoutUsers_payment_requests_supervisor_idTousersInput[]
    upsert?: payment_requestsUpsertWithWhereUniqueWithoutUsers_payment_requests_supervisor_idTousersInput | payment_requestsUpsertWithWhereUniqueWithoutUsers_payment_requests_supervisor_idTousersInput[]
    createMany?: payment_requestsCreateManyUsers_payment_requests_supervisor_idTousersInputEnvelope
    set?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    disconnect?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    delete?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    connect?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    update?: payment_requestsUpdateWithWhereUniqueWithoutUsers_payment_requests_supervisor_idTousersInput | payment_requestsUpdateWithWhereUniqueWithoutUsers_payment_requests_supervisor_idTousersInput[]
    updateMany?: payment_requestsUpdateManyWithWhereWithoutUsers_payment_requests_supervisor_idTousersInput | payment_requestsUpdateManyWithWhereWithoutUsers_payment_requests_supervisor_idTousersInput[]
    deleteMany?: payment_requestsScalarWhereInput | payment_requestsScalarWhereInput[]
  }

  export type project_progressUpdateManyWithoutUsersNestedInput = {
    create?: XOR<project_progressCreateWithoutUsersInput, project_progressUncheckedCreateWithoutUsersInput> | project_progressCreateWithoutUsersInput[] | project_progressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: project_progressCreateOrConnectWithoutUsersInput | project_progressCreateOrConnectWithoutUsersInput[]
    upsert?: project_progressUpsertWithWhereUniqueWithoutUsersInput | project_progressUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: project_progressCreateManyUsersInputEnvelope
    set?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
    disconnect?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
    delete?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
    connect?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
    update?: project_progressUpdateWithWhereUniqueWithoutUsersInput | project_progressUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: project_progressUpdateManyWithWhereWithoutUsersInput | project_progressUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: project_progressScalarWhereInput | project_progressScalarWhereInput[]
  }

  export type sitesUpdateManyWithoutUsers_sites_createdByTousersNestedInput = {
    create?: XOR<sitesCreateWithoutUsers_sites_createdByTousersInput, sitesUncheckedCreateWithoutUsers_sites_createdByTousersInput> | sitesCreateWithoutUsers_sites_createdByTousersInput[] | sitesUncheckedCreateWithoutUsers_sites_createdByTousersInput[]
    connectOrCreate?: sitesCreateOrConnectWithoutUsers_sites_createdByTousersInput | sitesCreateOrConnectWithoutUsers_sites_createdByTousersInput[]
    upsert?: sitesUpsertWithWhereUniqueWithoutUsers_sites_createdByTousersInput | sitesUpsertWithWhereUniqueWithoutUsers_sites_createdByTousersInput[]
    createMany?: sitesCreateManyUsers_sites_createdByTousersInputEnvelope
    set?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
    disconnect?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
    delete?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
    connect?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
    update?: sitesUpdateWithWhereUniqueWithoutUsers_sites_createdByTousersInput | sitesUpdateWithWhereUniqueWithoutUsers_sites_createdByTousersInput[]
    updateMany?: sitesUpdateManyWithWhereWithoutUsers_sites_createdByTousersInput | sitesUpdateManyWithWhereWithoutUsers_sites_createdByTousersInput[]
    deleteMany?: sitesScalarWhereInput | sitesScalarWhereInput[]
  }

  export type sitesUpdateOneWithoutUsers_users_assignedSiteIdTositesNestedInput = {
    create?: XOR<sitesCreateWithoutUsers_users_assignedSiteIdTositesInput, sitesUncheckedCreateWithoutUsers_users_assignedSiteIdTositesInput>
    connectOrCreate?: sitesCreateOrConnectWithoutUsers_users_assignedSiteIdTositesInput
    upsert?: sitesUpsertWithoutUsers_users_assignedSiteIdTositesInput
    disconnect?: sitesWhereInput | boolean
    delete?: sitesWhereInput | boolean
    connect?: sitesWhereUniqueInput
    update?: XOR<XOR<sitesUpdateToOneWithWhereWithoutUsers_users_assignedSiteIdTositesInput, sitesUpdateWithoutUsers_users_assignedSiteIdTositesInput>, sitesUncheckedUpdateWithoutUsers_users_assignedSiteIdTositesInput>
  }

  export type projectsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput> | projectsCreateWithoutUsersInput[] | projectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsersInput | projectsCreateOrConnectWithoutUsersInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutUsersInput | projectsUpsertWithWhereUniqueWithoutUsersInput[]
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutUsersInput | projectsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutUsersInput | projectsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type attendancesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<attendancesCreateWithoutUsersInput, attendancesUncheckedCreateWithoutUsersInput> | attendancesCreateWithoutUsersInput[] | attendancesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: attendancesCreateOrConnectWithoutUsersInput | attendancesCreateOrConnectWithoutUsersInput[]
    upsert?: attendancesUpsertWithWhereUniqueWithoutUsersInput | attendancesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: attendancesCreateManyUsersInputEnvelope
    set?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
    disconnect?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
    delete?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
    connect?: attendancesWhereUniqueInput | attendancesWhereUniqueInput[]
    update?: attendancesUpdateWithWhereUniqueWithoutUsersInput | attendancesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: attendancesUpdateManyWithWhereWithoutUsersInput | attendancesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: attendancesScalarWhereInput | attendancesScalarWhereInput[]
  }

  export type billsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<billsCreateWithoutUsersInput, billsUncheckedCreateWithoutUsersInput> | billsCreateWithoutUsersInput[] | billsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: billsCreateOrConnectWithoutUsersInput | billsCreateOrConnectWithoutUsersInput[]
    upsert?: billsUpsertWithWhereUniqueWithoutUsersInput | billsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: billsCreateManyUsersInputEnvelope
    set?: billsWhereUniqueInput | billsWhereUniqueInput[]
    disconnect?: billsWhereUniqueInput | billsWhereUniqueInput[]
    delete?: billsWhereUniqueInput | billsWhereUniqueInput[]
    connect?: billsWhereUniqueInput | billsWhereUniqueInput[]
    update?: billsUpdateWithWhereUniqueWithoutUsersInput | billsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: billsUpdateManyWithWhereWithoutUsersInput | billsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: billsScalarWhereInput | billsScalarWhereInput[]
  }

  export type payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_pm_idTousersNestedInput = {
    create?: XOR<payment_requestsCreateWithoutUsers_payment_requests_pm_idTousersInput, payment_requestsUncheckedCreateWithoutUsers_payment_requests_pm_idTousersInput> | payment_requestsCreateWithoutUsers_payment_requests_pm_idTousersInput[] | payment_requestsUncheckedCreateWithoutUsers_payment_requests_pm_idTousersInput[]
    connectOrCreate?: payment_requestsCreateOrConnectWithoutUsers_payment_requests_pm_idTousersInput | payment_requestsCreateOrConnectWithoutUsers_payment_requests_pm_idTousersInput[]
    upsert?: payment_requestsUpsertWithWhereUniqueWithoutUsers_payment_requests_pm_idTousersInput | payment_requestsUpsertWithWhereUniqueWithoutUsers_payment_requests_pm_idTousersInput[]
    createMany?: payment_requestsCreateManyUsers_payment_requests_pm_idTousersInputEnvelope
    set?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    disconnect?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    delete?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    connect?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    update?: payment_requestsUpdateWithWhereUniqueWithoutUsers_payment_requests_pm_idTousersInput | payment_requestsUpdateWithWhereUniqueWithoutUsers_payment_requests_pm_idTousersInput[]
    updateMany?: payment_requestsUpdateManyWithWhereWithoutUsers_payment_requests_pm_idTousersInput | payment_requestsUpdateManyWithWhereWithoutUsers_payment_requests_pm_idTousersInput[]
    deleteMany?: payment_requestsScalarWhereInput | payment_requestsScalarWhereInput[]
  }

  export type payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_supervisor_idTousersNestedInput = {
    create?: XOR<payment_requestsCreateWithoutUsers_payment_requests_supervisor_idTousersInput, payment_requestsUncheckedCreateWithoutUsers_payment_requests_supervisor_idTousersInput> | payment_requestsCreateWithoutUsers_payment_requests_supervisor_idTousersInput[] | payment_requestsUncheckedCreateWithoutUsers_payment_requests_supervisor_idTousersInput[]
    connectOrCreate?: payment_requestsCreateOrConnectWithoutUsers_payment_requests_supervisor_idTousersInput | payment_requestsCreateOrConnectWithoutUsers_payment_requests_supervisor_idTousersInput[]
    upsert?: payment_requestsUpsertWithWhereUniqueWithoutUsers_payment_requests_supervisor_idTousersInput | payment_requestsUpsertWithWhereUniqueWithoutUsers_payment_requests_supervisor_idTousersInput[]
    createMany?: payment_requestsCreateManyUsers_payment_requests_supervisor_idTousersInputEnvelope
    set?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    disconnect?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    delete?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    connect?: payment_requestsWhereUniqueInput | payment_requestsWhereUniqueInput[]
    update?: payment_requestsUpdateWithWhereUniqueWithoutUsers_payment_requests_supervisor_idTousersInput | payment_requestsUpdateWithWhereUniqueWithoutUsers_payment_requests_supervisor_idTousersInput[]
    updateMany?: payment_requestsUpdateManyWithWhereWithoutUsers_payment_requests_supervisor_idTousersInput | payment_requestsUpdateManyWithWhereWithoutUsers_payment_requests_supervisor_idTousersInput[]
    deleteMany?: payment_requestsScalarWhereInput | payment_requestsScalarWhereInput[]
  }

  export type project_progressUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<project_progressCreateWithoutUsersInput, project_progressUncheckedCreateWithoutUsersInput> | project_progressCreateWithoutUsersInput[] | project_progressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: project_progressCreateOrConnectWithoutUsersInput | project_progressCreateOrConnectWithoutUsersInput[]
    upsert?: project_progressUpsertWithWhereUniqueWithoutUsersInput | project_progressUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: project_progressCreateManyUsersInputEnvelope
    set?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
    disconnect?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
    delete?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
    connect?: project_progressWhereUniqueInput | project_progressWhereUniqueInput[]
    update?: project_progressUpdateWithWhereUniqueWithoutUsersInput | project_progressUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: project_progressUpdateManyWithWhereWithoutUsersInput | project_progressUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: project_progressScalarWhereInput | project_progressScalarWhereInput[]
  }

  export type sitesUncheckedUpdateManyWithoutUsers_sites_createdByTousersNestedInput = {
    create?: XOR<sitesCreateWithoutUsers_sites_createdByTousersInput, sitesUncheckedCreateWithoutUsers_sites_createdByTousersInput> | sitesCreateWithoutUsers_sites_createdByTousersInput[] | sitesUncheckedCreateWithoutUsers_sites_createdByTousersInput[]
    connectOrCreate?: sitesCreateOrConnectWithoutUsers_sites_createdByTousersInput | sitesCreateOrConnectWithoutUsers_sites_createdByTousersInput[]
    upsert?: sitesUpsertWithWhereUniqueWithoutUsers_sites_createdByTousersInput | sitesUpsertWithWhereUniqueWithoutUsers_sites_createdByTousersInput[]
    createMany?: sitesCreateManyUsers_sites_createdByTousersInputEnvelope
    set?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
    disconnect?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
    delete?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
    connect?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
    update?: sitesUpdateWithWhereUniqueWithoutUsers_sites_createdByTousersInput | sitesUpdateWithWhereUniqueWithoutUsers_sites_createdByTousersInput[]
    updateMany?: sitesUpdateManyWithWhereWithoutUsers_sites_createdByTousersInput | sitesUpdateManyWithWhereWithoutUsers_sites_createdByTousersInput[]
    deleteMany?: sitesScalarWhereInput | sitesScalarWhereInput[]
  }

  export type projectsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput> | projectsCreateWithoutUsersInput[] | projectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsersInput | projectsCreateOrConnectWithoutUsersInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutUsersInput | projectsUpsertWithWhereUniqueWithoutUsersInput[]
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutUsersInput | projectsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutUsersInput | projectsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type materialsCreateNestedManyWithoutWorkersInput = {
    create?: XOR<materialsCreateWithoutWorkersInput, materialsUncheckedCreateWithoutWorkersInput> | materialsCreateWithoutWorkersInput[] | materialsUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutWorkersInput | materialsCreateOrConnectWithoutWorkersInput[]
    createMany?: materialsCreateManyWorkersInputEnvelope
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
  }

  export type remindersCreateNestedManyWithoutWorkersInput = {
    create?: XOR<remindersCreateWithoutWorkersInput, remindersUncheckedCreateWithoutWorkersInput> | remindersCreateWithoutWorkersInput[] | remindersUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: remindersCreateOrConnectWithoutWorkersInput | remindersCreateOrConnectWithoutWorkersInput[]
    createMany?: remindersCreateManyWorkersInputEnvelope
    connect?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
  }

  export type materialsUncheckedCreateNestedManyWithoutWorkersInput = {
    create?: XOR<materialsCreateWithoutWorkersInput, materialsUncheckedCreateWithoutWorkersInput> | materialsCreateWithoutWorkersInput[] | materialsUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutWorkersInput | materialsCreateOrConnectWithoutWorkersInput[]
    createMany?: materialsCreateManyWorkersInputEnvelope
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
  }

  export type remindersUncheckedCreateNestedManyWithoutWorkersInput = {
    create?: XOR<remindersCreateWithoutWorkersInput, remindersUncheckedCreateWithoutWorkersInput> | remindersCreateWithoutWorkersInput[] | remindersUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: remindersCreateOrConnectWithoutWorkersInput | remindersCreateOrConnectWithoutWorkersInput[]
    createMany?: remindersCreateManyWorkersInputEnvelope
    connect?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
  }

  export type materialsUpdateManyWithoutWorkersNestedInput = {
    create?: XOR<materialsCreateWithoutWorkersInput, materialsUncheckedCreateWithoutWorkersInput> | materialsCreateWithoutWorkersInput[] | materialsUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutWorkersInput | materialsCreateOrConnectWithoutWorkersInput[]
    upsert?: materialsUpsertWithWhereUniqueWithoutWorkersInput | materialsUpsertWithWhereUniqueWithoutWorkersInput[]
    createMany?: materialsCreateManyWorkersInputEnvelope
    set?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    disconnect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    delete?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    update?: materialsUpdateWithWhereUniqueWithoutWorkersInput | materialsUpdateWithWhereUniqueWithoutWorkersInput[]
    updateMany?: materialsUpdateManyWithWhereWithoutWorkersInput | materialsUpdateManyWithWhereWithoutWorkersInput[]
    deleteMany?: materialsScalarWhereInput | materialsScalarWhereInput[]
  }

  export type remindersUpdateManyWithoutWorkersNestedInput = {
    create?: XOR<remindersCreateWithoutWorkersInput, remindersUncheckedCreateWithoutWorkersInput> | remindersCreateWithoutWorkersInput[] | remindersUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: remindersCreateOrConnectWithoutWorkersInput | remindersCreateOrConnectWithoutWorkersInput[]
    upsert?: remindersUpsertWithWhereUniqueWithoutWorkersInput | remindersUpsertWithWhereUniqueWithoutWorkersInput[]
    createMany?: remindersCreateManyWorkersInputEnvelope
    set?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    disconnect?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    delete?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    connect?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    update?: remindersUpdateWithWhereUniqueWithoutWorkersInput | remindersUpdateWithWhereUniqueWithoutWorkersInput[]
    updateMany?: remindersUpdateManyWithWhereWithoutWorkersInput | remindersUpdateManyWithWhereWithoutWorkersInput[]
    deleteMany?: remindersScalarWhereInput | remindersScalarWhereInput[]
  }

  export type materialsUncheckedUpdateManyWithoutWorkersNestedInput = {
    create?: XOR<materialsCreateWithoutWorkersInput, materialsUncheckedCreateWithoutWorkersInput> | materialsCreateWithoutWorkersInput[] | materialsUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutWorkersInput | materialsCreateOrConnectWithoutWorkersInput[]
    upsert?: materialsUpsertWithWhereUniqueWithoutWorkersInput | materialsUpsertWithWhereUniqueWithoutWorkersInput[]
    createMany?: materialsCreateManyWorkersInputEnvelope
    set?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    disconnect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    delete?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    update?: materialsUpdateWithWhereUniqueWithoutWorkersInput | materialsUpdateWithWhereUniqueWithoutWorkersInput[]
    updateMany?: materialsUpdateManyWithWhereWithoutWorkersInput | materialsUpdateManyWithWhereWithoutWorkersInput[]
    deleteMany?: materialsScalarWhereInput | materialsScalarWhereInput[]
  }

  export type remindersUncheckedUpdateManyWithoutWorkersNestedInput = {
    create?: XOR<remindersCreateWithoutWorkersInput, remindersUncheckedCreateWithoutWorkersInput> | remindersCreateWithoutWorkersInput[] | remindersUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: remindersCreateOrConnectWithoutWorkersInput | remindersCreateOrConnectWithoutWorkersInput[]
    upsert?: remindersUpsertWithWhereUniqueWithoutWorkersInput | remindersUpsertWithWhereUniqueWithoutWorkersInput[]
    createMany?: remindersCreateManyWorkersInputEnvelope
    set?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    disconnect?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    delete?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    connect?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    update?: remindersUpdateWithWhereUniqueWithoutWorkersInput | remindersUpdateWithWhereUniqueWithoutWorkersInput[]
    updateMany?: remindersUpdateManyWithWhereWithoutWorkersInput | remindersUpdateManyWithWhereWithoutWorkersInput[]
    deleteMany?: remindersScalarWhereInput | remindersScalarWhereInput[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type projectsCreateWithoutArchived_progressInput = {
    name: string
    description?: string | null
    status?: string
    expense_heads?: projectsCreateexpense_headsInput | string[]
    budget?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    bills?: billsCreateNestedManyWithoutProjectsInput
    payment_requests?: payment_requestsCreateNestedManyWithoutProjectsInput
    project_progress?: project_progressCreateNestedManyWithoutProjectsInput
    reminders?: remindersCreateNestedManyWithoutProjectsInput
    users?: usersCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutArchived_progressInput = {
    id?: number
    name: string
    description?: string | null
    status?: string
    expense_heads?: projectsCreateexpense_headsInput | string[]
    budget?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    bills?: billsUncheckedCreateNestedManyWithoutProjectsInput
    payment_requests?: payment_requestsUncheckedCreateNestedManyWithoutProjectsInput
    project_progress?: project_progressUncheckedCreateNestedManyWithoutProjectsInput
    reminders?: remindersUncheckedCreateNestedManyWithoutProjectsInput
    users?: usersUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutArchived_progressInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutArchived_progressInput, projectsUncheckedCreateWithoutArchived_progressInput>
  }

  export type projectsUpsertWithoutArchived_progressInput = {
    update: XOR<projectsUpdateWithoutArchived_progressInput, projectsUncheckedUpdateWithoutArchived_progressInput>
    create: XOR<projectsCreateWithoutArchived_progressInput, projectsUncheckedCreateWithoutArchived_progressInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutArchived_progressInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutArchived_progressInput, projectsUncheckedUpdateWithoutArchived_progressInput>
  }

  export type projectsUpdateWithoutArchived_progressInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expense_heads?: projectsUpdateexpense_headsInput | string[]
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bills?: billsUpdateManyWithoutProjectsNestedInput
    payment_requests?: payment_requestsUpdateManyWithoutProjectsNestedInput
    project_progress?: project_progressUpdateManyWithoutProjectsNestedInput
    reminders?: remindersUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutArchived_progressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expense_heads?: projectsUpdateexpense_headsInput | string[]
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bills?: billsUncheckedUpdateManyWithoutProjectsNestedInput
    payment_requests?: payment_requestsUncheckedUpdateManyWithoutProjectsNestedInput
    project_progress?: project_progressUncheckedUpdateManyWithoutProjectsNestedInput
    reminders?: remindersUncheckedUpdateManyWithoutProjectsNestedInput
    users?: usersUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type sitesCreateWithoutAttendancesInput = {
    id: string
    name: string
    latitude: number
    longitude: number
    radius?: number
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    users_sites_createdByTousers: usersCreateNestedOneWithoutSites_sites_createdByTousersInput
    users_users_assignedSiteIdTosites?: usersCreateNestedManyWithoutSites_users_assignedSiteIdTositesInput
  }

  export type sitesUncheckedCreateWithoutAttendancesInput = {
    id: string
    name: string
    latitude: number
    longitude: number
    radius?: number
    status?: string
    createdBy: number
    createdAt?: Date | string
    updatedAt: Date | string
    users_users_assignedSiteIdTosites?: usersUncheckedCreateNestedManyWithoutSites_users_assignedSiteIdTositesInput
  }

  export type sitesCreateOrConnectWithoutAttendancesInput = {
    where: sitesWhereUniqueInput
    create: XOR<sitesCreateWithoutAttendancesInput, sitesUncheckedCreateWithoutAttendancesInput>
  }

  export type usersCreateWithoutAttendancesInput = {
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    bills?: billsCreateNestedManyWithoutUsersInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsCreateNestedManyWithoutUsers_payment_requests_pm_idTousersInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsCreateNestedManyWithoutUsers_payment_requests_supervisor_idTousersInput
    project_progress?: project_progressCreateNestedManyWithoutUsersInput
    sites_sites_createdByTousers?: sitesCreateNestedManyWithoutUsers_sites_createdByTousersInput
    sites_users_assignedSiteIdTosites?: sitesCreateNestedOneWithoutUsers_users_assignedSiteIdTositesInput
    projects?: projectsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAttendancesInput = {
    id?: number
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    assignedSiteId?: string | null
    bills?: billsUncheckedCreateNestedManyWithoutUsersInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUncheckedCreateNestedManyWithoutUsers_payment_requests_pm_idTousersInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUncheckedCreateNestedManyWithoutUsers_payment_requests_supervisor_idTousersInput
    project_progress?: project_progressUncheckedCreateNestedManyWithoutUsersInput
    sites_sites_createdByTousers?: sitesUncheckedCreateNestedManyWithoutUsers_sites_createdByTousersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAttendancesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAttendancesInput, usersUncheckedCreateWithoutAttendancesInput>
  }

  export type sitesUpsertWithoutAttendancesInput = {
    update: XOR<sitesUpdateWithoutAttendancesInput, sitesUncheckedUpdateWithoutAttendancesInput>
    create: XOR<sitesCreateWithoutAttendancesInput, sitesUncheckedCreateWithoutAttendancesInput>
    where?: sitesWhereInput
  }

  export type sitesUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: sitesWhereInput
    data: XOR<sitesUpdateWithoutAttendancesInput, sitesUncheckedUpdateWithoutAttendancesInput>
  }

  export type sitesUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users_sites_createdByTousers?: usersUpdateOneRequiredWithoutSites_sites_createdByTousersNestedInput
    users_users_assignedSiteIdTosites?: usersUpdateManyWithoutSites_users_assignedSiteIdTositesNestedInput
  }

  export type sitesUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users_users_assignedSiteIdTosites?: usersUncheckedUpdateManyWithoutSites_users_assignedSiteIdTositesNestedInput
  }

  export type usersUpsertWithoutAttendancesInput = {
    update: XOR<usersUpdateWithoutAttendancesInput, usersUncheckedUpdateWithoutAttendancesInput>
    create: XOR<usersCreateWithoutAttendancesInput, usersUncheckedCreateWithoutAttendancesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAttendancesInput, usersUncheckedUpdateWithoutAttendancesInput>
  }

  export type usersUpdateWithoutAttendancesInput = {
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bills?: billsUpdateManyWithoutUsersNestedInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUpdateManyWithoutUsers_payment_requests_pm_idTousersNestedInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUpdateManyWithoutUsers_payment_requests_supervisor_idTousersNestedInput
    project_progress?: project_progressUpdateManyWithoutUsersNestedInput
    sites_sites_createdByTousers?: sitesUpdateManyWithoutUsers_sites_createdByTousersNestedInput
    sites_users_assignedSiteIdTosites?: sitesUpdateOneWithoutUsers_users_assignedSiteIdTositesNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAttendancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedSiteId?: NullableStringFieldUpdateOperationsInput | string | null
    bills?: billsUncheckedUpdateManyWithoutUsersNestedInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_pm_idTousersNestedInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_supervisor_idTousersNestedInput
    project_progress?: project_progressUncheckedUpdateManyWithoutUsersNestedInput
    sites_sites_createdByTousers?: sitesUncheckedUpdateManyWithoutUsers_sites_createdByTousersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutBillsInput = {
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    attendances?: attendancesCreateNestedManyWithoutUsersInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsCreateNestedManyWithoutUsers_payment_requests_pm_idTousersInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsCreateNestedManyWithoutUsers_payment_requests_supervisor_idTousersInput
    project_progress?: project_progressCreateNestedManyWithoutUsersInput
    sites_sites_createdByTousers?: sitesCreateNestedManyWithoutUsers_sites_createdByTousersInput
    sites_users_assignedSiteIdTosites?: sitesCreateNestedOneWithoutUsers_users_assignedSiteIdTositesInput
    projects?: projectsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutBillsInput = {
    id?: number
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    assignedSiteId?: string | null
    attendances?: attendancesUncheckedCreateNestedManyWithoutUsersInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUncheckedCreateNestedManyWithoutUsers_payment_requests_pm_idTousersInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUncheckedCreateNestedManyWithoutUsers_payment_requests_supervisor_idTousersInput
    project_progress?: project_progressUncheckedCreateNestedManyWithoutUsersInput
    sites_sites_createdByTousers?: sitesUncheckedCreateNestedManyWithoutUsers_sites_createdByTousersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutBillsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBillsInput, usersUncheckedCreateWithoutBillsInput>
  }

  export type projectsCreateWithoutBillsInput = {
    name: string
    description?: string | null
    status?: string
    expense_heads?: projectsCreateexpense_headsInput | string[]
    budget?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    archived_progress?: archived_progressCreateNestedManyWithoutProjectsInput
    payment_requests?: payment_requestsCreateNestedManyWithoutProjectsInput
    project_progress?: project_progressCreateNestedManyWithoutProjectsInput
    reminders?: remindersCreateNestedManyWithoutProjectsInput
    users?: usersCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutBillsInput = {
    id?: number
    name: string
    description?: string | null
    status?: string
    expense_heads?: projectsCreateexpense_headsInput | string[]
    budget?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    archived_progress?: archived_progressUncheckedCreateNestedManyWithoutProjectsInput
    payment_requests?: payment_requestsUncheckedCreateNestedManyWithoutProjectsInput
    project_progress?: project_progressUncheckedCreateNestedManyWithoutProjectsInput
    reminders?: remindersUncheckedCreateNestedManyWithoutProjectsInput
    users?: usersUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutBillsInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutBillsInput, projectsUncheckedCreateWithoutBillsInput>
  }

  export type usersUpsertWithoutBillsInput = {
    update: XOR<usersUpdateWithoutBillsInput, usersUncheckedUpdateWithoutBillsInput>
    create: XOR<usersCreateWithoutBillsInput, usersUncheckedCreateWithoutBillsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBillsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBillsInput, usersUncheckedUpdateWithoutBillsInput>
  }

  export type usersUpdateWithoutBillsInput = {
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: attendancesUpdateManyWithoutUsersNestedInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUpdateManyWithoutUsers_payment_requests_pm_idTousersNestedInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUpdateManyWithoutUsers_payment_requests_supervisor_idTousersNestedInput
    project_progress?: project_progressUpdateManyWithoutUsersNestedInput
    sites_sites_createdByTousers?: sitesUpdateManyWithoutUsers_sites_createdByTousersNestedInput
    sites_users_assignedSiteIdTosites?: sitesUpdateOneWithoutUsers_users_assignedSiteIdTositesNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutBillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedSiteId?: NullableStringFieldUpdateOperationsInput | string | null
    attendances?: attendancesUncheckedUpdateManyWithoutUsersNestedInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_pm_idTousersNestedInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_supervisor_idTousersNestedInput
    project_progress?: project_progressUncheckedUpdateManyWithoutUsersNestedInput
    sites_sites_createdByTousers?: sitesUncheckedUpdateManyWithoutUsers_sites_createdByTousersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type projectsUpsertWithoutBillsInput = {
    update: XOR<projectsUpdateWithoutBillsInput, projectsUncheckedUpdateWithoutBillsInput>
    create: XOR<projectsCreateWithoutBillsInput, projectsUncheckedCreateWithoutBillsInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutBillsInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutBillsInput, projectsUncheckedUpdateWithoutBillsInput>
  }

  export type projectsUpdateWithoutBillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expense_heads?: projectsUpdateexpense_headsInput | string[]
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_progress?: archived_progressUpdateManyWithoutProjectsNestedInput
    payment_requests?: payment_requestsUpdateManyWithoutProjectsNestedInput
    project_progress?: project_progressUpdateManyWithoutProjectsNestedInput
    reminders?: remindersUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutBillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expense_heads?: projectsUpdateexpense_headsInput | string[]
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_progress?: archived_progressUncheckedUpdateManyWithoutProjectsNestedInput
    payment_requests?: payment_requestsUncheckedUpdateManyWithoutProjectsNestedInput
    project_progress?: project_progressUncheckedUpdateManyWithoutProjectsNestedInput
    reminders?: remindersUncheckedUpdateManyWithoutProjectsNestedInput
    users?: usersUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type payment_requestsCreateWithoutMaterialsInput = {
    status?: $Enums.PaymentStatus
    total_amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at: Date | string
    users_payment_requests_pm_idTousers?: usersCreateNestedOneWithoutPayment_requests_payment_requests_pm_idTousersInput
    projects: projectsCreateNestedOneWithoutPayment_requestsInput
    users_payment_requests_supervisor_idTousers: usersCreateNestedOneWithoutPayment_requests_payment_requests_supervisor_idTousersInput
  }

  export type payment_requestsUncheckedCreateWithoutMaterialsInput = {
    id?: number
    status?: $Enums.PaymentStatus
    total_amount: Decimal | DecimalJsLike | number | string
    supervisor_id: number
    pm_id?: number | null
    project_id: number
    created_at?: Date | string
    updated_at: Date | string
  }

  export type payment_requestsCreateOrConnectWithoutMaterialsInput = {
    where: payment_requestsWhereUniqueInput
    create: XOR<payment_requestsCreateWithoutMaterialsInput, payment_requestsUncheckedCreateWithoutMaterialsInput>
  }

  export type workersCreateWithoutMaterialsInput = {
    name: string
    phone?: string | null
    address?: string | null
    designation?: string | null
    joining_date?: Date | string | null
    status?: string
    notes?: string | null
    created_at?: Date | string
    reminders?: remindersCreateNestedManyWithoutWorkersInput
  }

  export type workersUncheckedCreateWithoutMaterialsInput = {
    id?: number
    name: string
    phone?: string | null
    address?: string | null
    designation?: string | null
    joining_date?: Date | string | null
    status?: string
    notes?: string | null
    created_at?: Date | string
    reminders?: remindersUncheckedCreateNestedManyWithoutWorkersInput
  }

  export type workersCreateOrConnectWithoutMaterialsInput = {
    where: workersWhereUniqueInput
    create: XOR<workersCreateWithoutMaterialsInput, workersUncheckedCreateWithoutMaterialsInput>
  }

  export type payment_requestsUpsertWithoutMaterialsInput = {
    update: XOR<payment_requestsUpdateWithoutMaterialsInput, payment_requestsUncheckedUpdateWithoutMaterialsInput>
    create: XOR<payment_requestsCreateWithoutMaterialsInput, payment_requestsUncheckedCreateWithoutMaterialsInput>
    where?: payment_requestsWhereInput
  }

  export type payment_requestsUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: payment_requestsWhereInput
    data: XOR<payment_requestsUpdateWithoutMaterialsInput, payment_requestsUncheckedUpdateWithoutMaterialsInput>
  }

  export type payment_requestsUpdateWithoutMaterialsInput = {
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_payment_requests_pm_idTousers?: usersUpdateOneWithoutPayment_requests_payment_requests_pm_idTousersNestedInput
    projects?: projectsUpdateOneRequiredWithoutPayment_requestsNestedInput
    users_payment_requests_supervisor_idTousers?: usersUpdateOneRequiredWithoutPayment_requests_payment_requests_supervisor_idTousersNestedInput
  }

  export type payment_requestsUncheckedUpdateWithoutMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supervisor_id?: IntFieldUpdateOperationsInput | number
    pm_id?: NullableIntFieldUpdateOperationsInput | number | null
    project_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workersUpsertWithoutMaterialsInput = {
    update: XOR<workersUpdateWithoutMaterialsInput, workersUncheckedUpdateWithoutMaterialsInput>
    create: XOR<workersCreateWithoutMaterialsInput, workersUncheckedCreateWithoutMaterialsInput>
    where?: workersWhereInput
  }

  export type workersUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: workersWhereInput
    data: XOR<workersUpdateWithoutMaterialsInput, workersUncheckedUpdateWithoutMaterialsInput>
  }

  export type workersUpdateWithoutMaterialsInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reminders?: remindersUpdateManyWithoutWorkersNestedInput
  }

  export type workersUncheckedUpdateWithoutMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reminders?: remindersUncheckedUpdateManyWithoutWorkersNestedInput
  }

  export type materialsCreateWithoutPayment_requestsInput = {
    name: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    image_url?: string | null
    image_file_id?: string | null
    workers?: workersCreateNestedOneWithoutMaterialsInput
  }

  export type materialsUncheckedCreateWithoutPayment_requestsInput = {
    id?: number
    name: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    image_url?: string | null
    image_file_id?: string | null
    worker_id?: number | null
  }

  export type materialsCreateOrConnectWithoutPayment_requestsInput = {
    where: materialsWhereUniqueInput
    create: XOR<materialsCreateWithoutPayment_requestsInput, materialsUncheckedCreateWithoutPayment_requestsInput>
  }

  export type materialsCreateManyPayment_requestsInputEnvelope = {
    data: materialsCreateManyPayment_requestsInput | materialsCreateManyPayment_requestsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutPayment_requests_payment_requests_pm_idTousersInput = {
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    attendances?: attendancesCreateNestedManyWithoutUsersInput
    bills?: billsCreateNestedManyWithoutUsersInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsCreateNestedManyWithoutUsers_payment_requests_supervisor_idTousersInput
    project_progress?: project_progressCreateNestedManyWithoutUsersInput
    sites_sites_createdByTousers?: sitesCreateNestedManyWithoutUsers_sites_createdByTousersInput
    sites_users_assignedSiteIdTosites?: sitesCreateNestedOneWithoutUsers_users_assignedSiteIdTositesInput
    projects?: projectsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPayment_requests_payment_requests_pm_idTousersInput = {
    id?: number
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    assignedSiteId?: string | null
    attendances?: attendancesUncheckedCreateNestedManyWithoutUsersInput
    bills?: billsUncheckedCreateNestedManyWithoutUsersInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUncheckedCreateNestedManyWithoutUsers_payment_requests_supervisor_idTousersInput
    project_progress?: project_progressUncheckedCreateNestedManyWithoutUsersInput
    sites_sites_createdByTousers?: sitesUncheckedCreateNestedManyWithoutUsers_sites_createdByTousersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPayment_requests_payment_requests_pm_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPayment_requests_payment_requests_pm_idTousersInput, usersUncheckedCreateWithoutPayment_requests_payment_requests_pm_idTousersInput>
  }

  export type projectsCreateWithoutPayment_requestsInput = {
    name: string
    description?: string | null
    status?: string
    expense_heads?: projectsCreateexpense_headsInput | string[]
    budget?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    archived_progress?: archived_progressCreateNestedManyWithoutProjectsInput
    bills?: billsCreateNestedManyWithoutProjectsInput
    project_progress?: project_progressCreateNestedManyWithoutProjectsInput
    reminders?: remindersCreateNestedManyWithoutProjectsInput
    users?: usersCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutPayment_requestsInput = {
    id?: number
    name: string
    description?: string | null
    status?: string
    expense_heads?: projectsCreateexpense_headsInput | string[]
    budget?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    archived_progress?: archived_progressUncheckedCreateNestedManyWithoutProjectsInput
    bills?: billsUncheckedCreateNestedManyWithoutProjectsInput
    project_progress?: project_progressUncheckedCreateNestedManyWithoutProjectsInput
    reminders?: remindersUncheckedCreateNestedManyWithoutProjectsInput
    users?: usersUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutPayment_requestsInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutPayment_requestsInput, projectsUncheckedCreateWithoutPayment_requestsInput>
  }

  export type usersCreateWithoutPayment_requests_payment_requests_supervisor_idTousersInput = {
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    attendances?: attendancesCreateNestedManyWithoutUsersInput
    bills?: billsCreateNestedManyWithoutUsersInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsCreateNestedManyWithoutUsers_payment_requests_pm_idTousersInput
    project_progress?: project_progressCreateNestedManyWithoutUsersInput
    sites_sites_createdByTousers?: sitesCreateNestedManyWithoutUsers_sites_createdByTousersInput
    sites_users_assignedSiteIdTosites?: sitesCreateNestedOneWithoutUsers_users_assignedSiteIdTositesInput
    projects?: projectsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPayment_requests_payment_requests_supervisor_idTousersInput = {
    id?: number
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    assignedSiteId?: string | null
    attendances?: attendancesUncheckedCreateNestedManyWithoutUsersInput
    bills?: billsUncheckedCreateNestedManyWithoutUsersInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUncheckedCreateNestedManyWithoutUsers_payment_requests_pm_idTousersInput
    project_progress?: project_progressUncheckedCreateNestedManyWithoutUsersInput
    sites_sites_createdByTousers?: sitesUncheckedCreateNestedManyWithoutUsers_sites_createdByTousersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPayment_requests_payment_requests_supervisor_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPayment_requests_payment_requests_supervisor_idTousersInput, usersUncheckedCreateWithoutPayment_requests_payment_requests_supervisor_idTousersInput>
  }

  export type materialsUpsertWithWhereUniqueWithoutPayment_requestsInput = {
    where: materialsWhereUniqueInput
    update: XOR<materialsUpdateWithoutPayment_requestsInput, materialsUncheckedUpdateWithoutPayment_requestsInput>
    create: XOR<materialsCreateWithoutPayment_requestsInput, materialsUncheckedCreateWithoutPayment_requestsInput>
  }

  export type materialsUpdateWithWhereUniqueWithoutPayment_requestsInput = {
    where: materialsWhereUniqueInput
    data: XOR<materialsUpdateWithoutPayment_requestsInput, materialsUncheckedUpdateWithoutPayment_requestsInput>
  }

  export type materialsUpdateManyWithWhereWithoutPayment_requestsInput = {
    where: materialsScalarWhereInput
    data: XOR<materialsUpdateManyMutationInput, materialsUncheckedUpdateManyWithoutPayment_requestsInput>
  }

  export type materialsScalarWhereInput = {
    AND?: materialsScalarWhereInput | materialsScalarWhereInput[]
    OR?: materialsScalarWhereInput[]
    NOT?: materialsScalarWhereInput | materialsScalarWhereInput[]
    id?: IntFilter<"materials"> | number
    name?: StringFilter<"materials"> | string
    quantity?: IntFilter<"materials"> | number
    unit_price?: DecimalFilter<"materials"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"materials"> | string | null
    image_url?: StringNullableFilter<"materials"> | string | null
    image_file_id?: StringNullableFilter<"materials"> | string | null
    request_id?: IntFilter<"materials"> | number
    worker_id?: IntNullableFilter<"materials"> | number | null
  }

  export type usersUpsertWithoutPayment_requests_payment_requests_pm_idTousersInput = {
    update: XOR<usersUpdateWithoutPayment_requests_payment_requests_pm_idTousersInput, usersUncheckedUpdateWithoutPayment_requests_payment_requests_pm_idTousersInput>
    create: XOR<usersCreateWithoutPayment_requests_payment_requests_pm_idTousersInput, usersUncheckedCreateWithoutPayment_requests_payment_requests_pm_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPayment_requests_payment_requests_pm_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPayment_requests_payment_requests_pm_idTousersInput, usersUncheckedUpdateWithoutPayment_requests_payment_requests_pm_idTousersInput>
  }

  export type usersUpdateWithoutPayment_requests_payment_requests_pm_idTousersInput = {
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: attendancesUpdateManyWithoutUsersNestedInput
    bills?: billsUpdateManyWithoutUsersNestedInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUpdateManyWithoutUsers_payment_requests_supervisor_idTousersNestedInput
    project_progress?: project_progressUpdateManyWithoutUsersNestedInput
    sites_sites_createdByTousers?: sitesUpdateManyWithoutUsers_sites_createdByTousersNestedInput
    sites_users_assignedSiteIdTosites?: sitesUpdateOneWithoutUsers_users_assignedSiteIdTositesNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPayment_requests_payment_requests_pm_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedSiteId?: NullableStringFieldUpdateOperationsInput | string | null
    attendances?: attendancesUncheckedUpdateManyWithoutUsersNestedInput
    bills?: billsUncheckedUpdateManyWithoutUsersNestedInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_supervisor_idTousersNestedInput
    project_progress?: project_progressUncheckedUpdateManyWithoutUsersNestedInput
    sites_sites_createdByTousers?: sitesUncheckedUpdateManyWithoutUsers_sites_createdByTousersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type projectsUpsertWithoutPayment_requestsInput = {
    update: XOR<projectsUpdateWithoutPayment_requestsInput, projectsUncheckedUpdateWithoutPayment_requestsInput>
    create: XOR<projectsCreateWithoutPayment_requestsInput, projectsUncheckedCreateWithoutPayment_requestsInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutPayment_requestsInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutPayment_requestsInput, projectsUncheckedUpdateWithoutPayment_requestsInput>
  }

  export type projectsUpdateWithoutPayment_requestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expense_heads?: projectsUpdateexpense_headsInput | string[]
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_progress?: archived_progressUpdateManyWithoutProjectsNestedInput
    bills?: billsUpdateManyWithoutProjectsNestedInput
    project_progress?: project_progressUpdateManyWithoutProjectsNestedInput
    reminders?: remindersUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutPayment_requestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expense_heads?: projectsUpdateexpense_headsInput | string[]
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_progress?: archived_progressUncheckedUpdateManyWithoutProjectsNestedInput
    bills?: billsUncheckedUpdateManyWithoutProjectsNestedInput
    project_progress?: project_progressUncheckedUpdateManyWithoutProjectsNestedInput
    reminders?: remindersUncheckedUpdateManyWithoutProjectsNestedInput
    users?: usersUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type usersUpsertWithoutPayment_requests_payment_requests_supervisor_idTousersInput = {
    update: XOR<usersUpdateWithoutPayment_requests_payment_requests_supervisor_idTousersInput, usersUncheckedUpdateWithoutPayment_requests_payment_requests_supervisor_idTousersInput>
    create: XOR<usersCreateWithoutPayment_requests_payment_requests_supervisor_idTousersInput, usersUncheckedCreateWithoutPayment_requests_payment_requests_supervisor_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPayment_requests_payment_requests_supervisor_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPayment_requests_payment_requests_supervisor_idTousersInput, usersUncheckedUpdateWithoutPayment_requests_payment_requests_supervisor_idTousersInput>
  }

  export type usersUpdateWithoutPayment_requests_payment_requests_supervisor_idTousersInput = {
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: attendancesUpdateManyWithoutUsersNestedInput
    bills?: billsUpdateManyWithoutUsersNestedInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUpdateManyWithoutUsers_payment_requests_pm_idTousersNestedInput
    project_progress?: project_progressUpdateManyWithoutUsersNestedInput
    sites_sites_createdByTousers?: sitesUpdateManyWithoutUsers_sites_createdByTousersNestedInput
    sites_users_assignedSiteIdTosites?: sitesUpdateOneWithoutUsers_users_assignedSiteIdTositesNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPayment_requests_payment_requests_supervisor_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedSiteId?: NullableStringFieldUpdateOperationsInput | string | null
    attendances?: attendancesUncheckedUpdateManyWithoutUsersNestedInput
    bills?: billsUncheckedUpdateManyWithoutUsersNestedInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_pm_idTousersNestedInput
    project_progress?: project_progressUncheckedUpdateManyWithoutUsersNestedInput
    sites_sites_createdByTousers?: sitesUncheckedUpdateManyWithoutUsers_sites_createdByTousersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type projectsCreateWithoutProject_progressInput = {
    name: string
    description?: string | null
    status?: string
    expense_heads?: projectsCreateexpense_headsInput | string[]
    budget?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    archived_progress?: archived_progressCreateNestedManyWithoutProjectsInput
    bills?: billsCreateNestedManyWithoutProjectsInput
    payment_requests?: payment_requestsCreateNestedManyWithoutProjectsInput
    reminders?: remindersCreateNestedManyWithoutProjectsInput
    users?: usersCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutProject_progressInput = {
    id?: number
    name: string
    description?: string | null
    status?: string
    expense_heads?: projectsCreateexpense_headsInput | string[]
    budget?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    archived_progress?: archived_progressUncheckedCreateNestedManyWithoutProjectsInput
    bills?: billsUncheckedCreateNestedManyWithoutProjectsInput
    payment_requests?: payment_requestsUncheckedCreateNestedManyWithoutProjectsInput
    reminders?: remindersUncheckedCreateNestedManyWithoutProjectsInput
    users?: usersUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutProject_progressInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutProject_progressInput, projectsUncheckedCreateWithoutProject_progressInput>
  }

  export type usersCreateWithoutProject_progressInput = {
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    attendances?: attendancesCreateNestedManyWithoutUsersInput
    bills?: billsCreateNestedManyWithoutUsersInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsCreateNestedManyWithoutUsers_payment_requests_pm_idTousersInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsCreateNestedManyWithoutUsers_payment_requests_supervisor_idTousersInput
    sites_sites_createdByTousers?: sitesCreateNestedManyWithoutUsers_sites_createdByTousersInput
    sites_users_assignedSiteIdTosites?: sitesCreateNestedOneWithoutUsers_users_assignedSiteIdTositesInput
    projects?: projectsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProject_progressInput = {
    id?: number
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    assignedSiteId?: string | null
    attendances?: attendancesUncheckedCreateNestedManyWithoutUsersInput
    bills?: billsUncheckedCreateNestedManyWithoutUsersInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUncheckedCreateNestedManyWithoutUsers_payment_requests_pm_idTousersInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUncheckedCreateNestedManyWithoutUsers_payment_requests_supervisor_idTousersInput
    sites_sites_createdByTousers?: sitesUncheckedCreateNestedManyWithoutUsers_sites_createdByTousersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProject_progressInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProject_progressInput, usersUncheckedCreateWithoutProject_progressInput>
  }

  export type projectsUpsertWithoutProject_progressInput = {
    update: XOR<projectsUpdateWithoutProject_progressInput, projectsUncheckedUpdateWithoutProject_progressInput>
    create: XOR<projectsCreateWithoutProject_progressInput, projectsUncheckedCreateWithoutProject_progressInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutProject_progressInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutProject_progressInput, projectsUncheckedUpdateWithoutProject_progressInput>
  }

  export type projectsUpdateWithoutProject_progressInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expense_heads?: projectsUpdateexpense_headsInput | string[]
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_progress?: archived_progressUpdateManyWithoutProjectsNestedInput
    bills?: billsUpdateManyWithoutProjectsNestedInput
    payment_requests?: payment_requestsUpdateManyWithoutProjectsNestedInput
    reminders?: remindersUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutProject_progressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expense_heads?: projectsUpdateexpense_headsInput | string[]
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_progress?: archived_progressUncheckedUpdateManyWithoutProjectsNestedInput
    bills?: billsUncheckedUpdateManyWithoutProjectsNestedInput
    payment_requests?: payment_requestsUncheckedUpdateManyWithoutProjectsNestedInput
    reminders?: remindersUncheckedUpdateManyWithoutProjectsNestedInput
    users?: usersUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type usersUpsertWithoutProject_progressInput = {
    update: XOR<usersUpdateWithoutProject_progressInput, usersUncheckedUpdateWithoutProject_progressInput>
    create: XOR<usersCreateWithoutProject_progressInput, usersUncheckedCreateWithoutProject_progressInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProject_progressInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProject_progressInput, usersUncheckedUpdateWithoutProject_progressInput>
  }

  export type usersUpdateWithoutProject_progressInput = {
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: attendancesUpdateManyWithoutUsersNestedInput
    bills?: billsUpdateManyWithoutUsersNestedInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUpdateManyWithoutUsers_payment_requests_pm_idTousersNestedInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUpdateManyWithoutUsers_payment_requests_supervisor_idTousersNestedInput
    sites_sites_createdByTousers?: sitesUpdateManyWithoutUsers_sites_createdByTousersNestedInput
    sites_users_assignedSiteIdTosites?: sitesUpdateOneWithoutUsers_users_assignedSiteIdTositesNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProject_progressInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedSiteId?: NullableStringFieldUpdateOperationsInput | string | null
    attendances?: attendancesUncheckedUpdateManyWithoutUsersNestedInput
    bills?: billsUncheckedUpdateManyWithoutUsersNestedInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_pm_idTousersNestedInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_supervisor_idTousersNestedInput
    sites_sites_createdByTousers?: sitesUncheckedUpdateManyWithoutUsers_sites_createdByTousersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type archived_progressCreateWithoutProjectsInput = {
    percentage: number
    date: string
    notes?: string | null
    user_name: string
    user_role: string
    original_created_at: Date | string
    archived_at?: Date | string
  }

  export type archived_progressUncheckedCreateWithoutProjectsInput = {
    id?: number
    percentage: number
    date: string
    notes?: string | null
    user_name: string
    user_role: string
    original_created_at: Date | string
    archived_at?: Date | string
  }

  export type archived_progressCreateOrConnectWithoutProjectsInput = {
    where: archived_progressWhereUniqueInput
    create: XOR<archived_progressCreateWithoutProjectsInput, archived_progressUncheckedCreateWithoutProjectsInput>
  }

  export type archived_progressCreateManyProjectsInputEnvelope = {
    data: archived_progressCreateManyProjectsInput | archived_progressCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type billsCreateWithoutProjectsInput = {
    name: string
    image_url?: string | null
    image_file_id?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    users: usersCreateNestedOneWithoutBillsInput
  }

  export type billsUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
    image_url?: string | null
    image_file_id?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    creator_id: number
    created_at?: Date | string
  }

  export type billsCreateOrConnectWithoutProjectsInput = {
    where: billsWhereUniqueInput
    create: XOR<billsCreateWithoutProjectsInput, billsUncheckedCreateWithoutProjectsInput>
  }

  export type billsCreateManyProjectsInputEnvelope = {
    data: billsCreateManyProjectsInput | billsCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type payment_requestsCreateWithoutProjectsInput = {
    status?: $Enums.PaymentStatus
    total_amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at: Date | string
    materials?: materialsCreateNestedManyWithoutPayment_requestsInput
    users_payment_requests_pm_idTousers?: usersCreateNestedOneWithoutPayment_requests_payment_requests_pm_idTousersInput
    users_payment_requests_supervisor_idTousers: usersCreateNestedOneWithoutPayment_requests_payment_requests_supervisor_idTousersInput
  }

  export type payment_requestsUncheckedCreateWithoutProjectsInput = {
    id?: number
    status?: $Enums.PaymentStatus
    total_amount: Decimal | DecimalJsLike | number | string
    supervisor_id: number
    pm_id?: number | null
    created_at?: Date | string
    updated_at: Date | string
    materials?: materialsUncheckedCreateNestedManyWithoutPayment_requestsInput
  }

  export type payment_requestsCreateOrConnectWithoutProjectsInput = {
    where: payment_requestsWhereUniqueInput
    create: XOR<payment_requestsCreateWithoutProjectsInput, payment_requestsUncheckedCreateWithoutProjectsInput>
  }

  export type payment_requestsCreateManyProjectsInputEnvelope = {
    data: payment_requestsCreateManyProjectsInput | payment_requestsCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type project_progressCreateWithoutProjectsInput = {
    percentage: number
    date: string
    notes?: string | null
    created_at?: Date | string
    users: usersCreateNestedOneWithoutProject_progressInput
  }

  export type project_progressUncheckedCreateWithoutProjectsInput = {
    id?: number
    percentage: number
    date: string
    notes?: string | null
    user_id: number
    created_at?: Date | string
  }

  export type project_progressCreateOrConnectWithoutProjectsInput = {
    where: project_progressWhereUniqueInput
    create: XOR<project_progressCreateWithoutProjectsInput, project_progressUncheckedCreateWithoutProjectsInput>
  }

  export type project_progressCreateManyProjectsInputEnvelope = {
    data: project_progressCreateManyProjectsInput | project_progressCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type remindersCreateWithoutProjectsInput = {
    amount: Decimal | DecimalJsLike | number | string
    day_of_month: number
    frequency?: string
    reason: string
    is_active?: boolean
    last_triggered_at?: Date | string | null
    created_at?: Date | string
    workers: workersCreateNestedOneWithoutRemindersInput
  }

  export type remindersUncheckedCreateWithoutProjectsInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    day_of_month: number
    frequency?: string
    reason: string
    is_active?: boolean
    worker_id: number
    last_triggered_at?: Date | string | null
    created_at?: Date | string
  }

  export type remindersCreateOrConnectWithoutProjectsInput = {
    where: remindersWhereUniqueInput
    create: XOR<remindersCreateWithoutProjectsInput, remindersUncheckedCreateWithoutProjectsInput>
  }

  export type remindersCreateManyProjectsInputEnvelope = {
    data: remindersCreateManyProjectsInput | remindersCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutProjectsInput = {
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    attendances?: attendancesCreateNestedManyWithoutUsersInput
    bills?: billsCreateNestedManyWithoutUsersInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsCreateNestedManyWithoutUsers_payment_requests_pm_idTousersInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsCreateNestedManyWithoutUsers_payment_requests_supervisor_idTousersInput
    project_progress?: project_progressCreateNestedManyWithoutUsersInput
    sites_sites_createdByTousers?: sitesCreateNestedManyWithoutUsers_sites_createdByTousersInput
    sites_users_assignedSiteIdTosites?: sitesCreateNestedOneWithoutUsers_users_assignedSiteIdTositesInput
  }

  export type usersUncheckedCreateWithoutProjectsInput = {
    id?: number
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    assignedSiteId?: string | null
    attendances?: attendancesUncheckedCreateNestedManyWithoutUsersInput
    bills?: billsUncheckedCreateNestedManyWithoutUsersInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUncheckedCreateNestedManyWithoutUsers_payment_requests_pm_idTousersInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUncheckedCreateNestedManyWithoutUsers_payment_requests_supervisor_idTousersInput
    project_progress?: project_progressUncheckedCreateNestedManyWithoutUsersInput
    sites_sites_createdByTousers?: sitesUncheckedCreateNestedManyWithoutUsers_sites_createdByTousersInput
  }

  export type usersCreateOrConnectWithoutProjectsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
  }

  export type archived_progressUpsertWithWhereUniqueWithoutProjectsInput = {
    where: archived_progressWhereUniqueInput
    update: XOR<archived_progressUpdateWithoutProjectsInput, archived_progressUncheckedUpdateWithoutProjectsInput>
    create: XOR<archived_progressCreateWithoutProjectsInput, archived_progressUncheckedCreateWithoutProjectsInput>
  }

  export type archived_progressUpdateWithWhereUniqueWithoutProjectsInput = {
    where: archived_progressWhereUniqueInput
    data: XOR<archived_progressUpdateWithoutProjectsInput, archived_progressUncheckedUpdateWithoutProjectsInput>
  }

  export type archived_progressUpdateManyWithWhereWithoutProjectsInput = {
    where: archived_progressScalarWhereInput
    data: XOR<archived_progressUpdateManyMutationInput, archived_progressUncheckedUpdateManyWithoutProjectsInput>
  }

  export type archived_progressScalarWhereInput = {
    AND?: archived_progressScalarWhereInput | archived_progressScalarWhereInput[]
    OR?: archived_progressScalarWhereInput[]
    NOT?: archived_progressScalarWhereInput | archived_progressScalarWhereInput[]
    id?: IntFilter<"archived_progress"> | number
    percentage?: IntFilter<"archived_progress"> | number
    date?: StringFilter<"archived_progress"> | string
    notes?: StringNullableFilter<"archived_progress"> | string | null
    project_id?: IntFilter<"archived_progress"> | number
    user_name?: StringFilter<"archived_progress"> | string
    user_role?: StringFilter<"archived_progress"> | string
    original_created_at?: DateTimeFilter<"archived_progress"> | Date | string
    archived_at?: DateTimeFilter<"archived_progress"> | Date | string
  }

  export type billsUpsertWithWhereUniqueWithoutProjectsInput = {
    where: billsWhereUniqueInput
    update: XOR<billsUpdateWithoutProjectsInput, billsUncheckedUpdateWithoutProjectsInput>
    create: XOR<billsCreateWithoutProjectsInput, billsUncheckedCreateWithoutProjectsInput>
  }

  export type billsUpdateWithWhereUniqueWithoutProjectsInput = {
    where: billsWhereUniqueInput
    data: XOR<billsUpdateWithoutProjectsInput, billsUncheckedUpdateWithoutProjectsInput>
  }

  export type billsUpdateManyWithWhereWithoutProjectsInput = {
    where: billsScalarWhereInput
    data: XOR<billsUpdateManyMutationInput, billsUncheckedUpdateManyWithoutProjectsInput>
  }

  export type billsScalarWhereInput = {
    AND?: billsScalarWhereInput | billsScalarWhereInput[]
    OR?: billsScalarWhereInput[]
    NOT?: billsScalarWhereInput | billsScalarWhereInput[]
    id?: IntFilter<"bills"> | number
    name?: StringFilter<"bills"> | string
    image_url?: StringNullableFilter<"bills"> | string | null
    image_file_id?: StringNullableFilter<"bills"> | string | null
    amount?: DecimalNullableFilter<"bills"> | Decimal | DecimalJsLike | number | string | null
    project_id?: IntFilter<"bills"> | number
    creator_id?: IntFilter<"bills"> | number
    created_at?: DateTimeFilter<"bills"> | Date | string
  }

  export type payment_requestsUpsertWithWhereUniqueWithoutProjectsInput = {
    where: payment_requestsWhereUniqueInput
    update: XOR<payment_requestsUpdateWithoutProjectsInput, payment_requestsUncheckedUpdateWithoutProjectsInput>
    create: XOR<payment_requestsCreateWithoutProjectsInput, payment_requestsUncheckedCreateWithoutProjectsInput>
  }

  export type payment_requestsUpdateWithWhereUniqueWithoutProjectsInput = {
    where: payment_requestsWhereUniqueInput
    data: XOR<payment_requestsUpdateWithoutProjectsInput, payment_requestsUncheckedUpdateWithoutProjectsInput>
  }

  export type payment_requestsUpdateManyWithWhereWithoutProjectsInput = {
    where: payment_requestsScalarWhereInput
    data: XOR<payment_requestsUpdateManyMutationInput, payment_requestsUncheckedUpdateManyWithoutProjectsInput>
  }

  export type payment_requestsScalarWhereInput = {
    AND?: payment_requestsScalarWhereInput | payment_requestsScalarWhereInput[]
    OR?: payment_requestsScalarWhereInput[]
    NOT?: payment_requestsScalarWhereInput | payment_requestsScalarWhereInput[]
    id?: IntFilter<"payment_requests"> | number
    status?: EnumPaymentStatusFilter<"payment_requests"> | $Enums.PaymentStatus
    total_amount?: DecimalFilter<"payment_requests"> | Decimal | DecimalJsLike | number | string
    supervisor_id?: IntFilter<"payment_requests"> | number
    pm_id?: IntNullableFilter<"payment_requests"> | number | null
    project_id?: IntFilter<"payment_requests"> | number
    created_at?: DateTimeFilter<"payment_requests"> | Date | string
    updated_at?: DateTimeFilter<"payment_requests"> | Date | string
  }

  export type project_progressUpsertWithWhereUniqueWithoutProjectsInput = {
    where: project_progressWhereUniqueInput
    update: XOR<project_progressUpdateWithoutProjectsInput, project_progressUncheckedUpdateWithoutProjectsInput>
    create: XOR<project_progressCreateWithoutProjectsInput, project_progressUncheckedCreateWithoutProjectsInput>
  }

  export type project_progressUpdateWithWhereUniqueWithoutProjectsInput = {
    where: project_progressWhereUniqueInput
    data: XOR<project_progressUpdateWithoutProjectsInput, project_progressUncheckedUpdateWithoutProjectsInput>
  }

  export type project_progressUpdateManyWithWhereWithoutProjectsInput = {
    where: project_progressScalarWhereInput
    data: XOR<project_progressUpdateManyMutationInput, project_progressUncheckedUpdateManyWithoutProjectsInput>
  }

  export type project_progressScalarWhereInput = {
    AND?: project_progressScalarWhereInput | project_progressScalarWhereInput[]
    OR?: project_progressScalarWhereInput[]
    NOT?: project_progressScalarWhereInput | project_progressScalarWhereInput[]
    id?: IntFilter<"project_progress"> | number
    percentage?: IntFilter<"project_progress"> | number
    date?: StringFilter<"project_progress"> | string
    notes?: StringNullableFilter<"project_progress"> | string | null
    project_id?: IntFilter<"project_progress"> | number
    user_id?: IntFilter<"project_progress"> | number
    created_at?: DateTimeFilter<"project_progress"> | Date | string
  }

  export type remindersUpsertWithWhereUniqueWithoutProjectsInput = {
    where: remindersWhereUniqueInput
    update: XOR<remindersUpdateWithoutProjectsInput, remindersUncheckedUpdateWithoutProjectsInput>
    create: XOR<remindersCreateWithoutProjectsInput, remindersUncheckedCreateWithoutProjectsInput>
  }

  export type remindersUpdateWithWhereUniqueWithoutProjectsInput = {
    where: remindersWhereUniqueInput
    data: XOR<remindersUpdateWithoutProjectsInput, remindersUncheckedUpdateWithoutProjectsInput>
  }

  export type remindersUpdateManyWithWhereWithoutProjectsInput = {
    where: remindersScalarWhereInput
    data: XOR<remindersUpdateManyMutationInput, remindersUncheckedUpdateManyWithoutProjectsInput>
  }

  export type remindersScalarWhereInput = {
    AND?: remindersScalarWhereInput | remindersScalarWhereInput[]
    OR?: remindersScalarWhereInput[]
    NOT?: remindersScalarWhereInput | remindersScalarWhereInput[]
    id?: IntFilter<"reminders"> | number
    amount?: DecimalFilter<"reminders"> | Decimal | DecimalJsLike | number | string
    day_of_month?: IntFilter<"reminders"> | number
    frequency?: StringFilter<"reminders"> | string
    reason?: StringFilter<"reminders"> | string
    is_active?: BoolFilter<"reminders"> | boolean
    worker_id?: IntFilter<"reminders"> | number
    project_id?: IntFilter<"reminders"> | number
    last_triggered_at?: DateTimeNullableFilter<"reminders"> | Date | string | null
    created_at?: DateTimeFilter<"reminders"> | Date | string
  }

  export type usersUpsertWithWhereUniqueWithoutProjectsInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutProjectsInput, usersUncheckedUpdateWithoutProjectsInput>
    create: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
  }

  export type usersUpdateWithWhereUniqueWithoutProjectsInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutProjectsInput, usersUncheckedUpdateWithoutProjectsInput>
  }

  export type usersUpdateManyWithWhereWithoutProjectsInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutProjectsInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: IntFilter<"users"> | number
    phone?: StringFilter<"users"> | string
    dob?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    name?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    assignedSiteId?: UuidNullableFilter<"users"> | string | null
  }

  export type projectsCreateWithoutRemindersInput = {
    name: string
    description?: string | null
    status?: string
    expense_heads?: projectsCreateexpense_headsInput | string[]
    budget?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    archived_progress?: archived_progressCreateNestedManyWithoutProjectsInput
    bills?: billsCreateNestedManyWithoutProjectsInput
    payment_requests?: payment_requestsCreateNestedManyWithoutProjectsInput
    project_progress?: project_progressCreateNestedManyWithoutProjectsInput
    users?: usersCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutRemindersInput = {
    id?: number
    name: string
    description?: string | null
    status?: string
    expense_heads?: projectsCreateexpense_headsInput | string[]
    budget?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    archived_progress?: archived_progressUncheckedCreateNestedManyWithoutProjectsInput
    bills?: billsUncheckedCreateNestedManyWithoutProjectsInput
    payment_requests?: payment_requestsUncheckedCreateNestedManyWithoutProjectsInput
    project_progress?: project_progressUncheckedCreateNestedManyWithoutProjectsInput
    users?: usersUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutRemindersInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutRemindersInput, projectsUncheckedCreateWithoutRemindersInput>
  }

  export type workersCreateWithoutRemindersInput = {
    name: string
    phone?: string | null
    address?: string | null
    designation?: string | null
    joining_date?: Date | string | null
    status?: string
    notes?: string | null
    created_at?: Date | string
    materials?: materialsCreateNestedManyWithoutWorkersInput
  }

  export type workersUncheckedCreateWithoutRemindersInput = {
    id?: number
    name: string
    phone?: string | null
    address?: string | null
    designation?: string | null
    joining_date?: Date | string | null
    status?: string
    notes?: string | null
    created_at?: Date | string
    materials?: materialsUncheckedCreateNestedManyWithoutWorkersInput
  }

  export type workersCreateOrConnectWithoutRemindersInput = {
    where: workersWhereUniqueInput
    create: XOR<workersCreateWithoutRemindersInput, workersUncheckedCreateWithoutRemindersInput>
  }

  export type projectsUpsertWithoutRemindersInput = {
    update: XOR<projectsUpdateWithoutRemindersInput, projectsUncheckedUpdateWithoutRemindersInput>
    create: XOR<projectsCreateWithoutRemindersInput, projectsUncheckedCreateWithoutRemindersInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutRemindersInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutRemindersInput, projectsUncheckedUpdateWithoutRemindersInput>
  }

  export type projectsUpdateWithoutRemindersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expense_heads?: projectsUpdateexpense_headsInput | string[]
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_progress?: archived_progressUpdateManyWithoutProjectsNestedInput
    bills?: billsUpdateManyWithoutProjectsNestedInput
    payment_requests?: payment_requestsUpdateManyWithoutProjectsNestedInput
    project_progress?: project_progressUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutRemindersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expense_heads?: projectsUpdateexpense_headsInput | string[]
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_progress?: archived_progressUncheckedUpdateManyWithoutProjectsNestedInput
    bills?: billsUncheckedUpdateManyWithoutProjectsNestedInput
    payment_requests?: payment_requestsUncheckedUpdateManyWithoutProjectsNestedInput
    project_progress?: project_progressUncheckedUpdateManyWithoutProjectsNestedInput
    users?: usersUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type workersUpsertWithoutRemindersInput = {
    update: XOR<workersUpdateWithoutRemindersInput, workersUncheckedUpdateWithoutRemindersInput>
    create: XOR<workersCreateWithoutRemindersInput, workersUncheckedCreateWithoutRemindersInput>
    where?: workersWhereInput
  }

  export type workersUpdateToOneWithWhereWithoutRemindersInput = {
    where?: workersWhereInput
    data: XOR<workersUpdateWithoutRemindersInput, workersUncheckedUpdateWithoutRemindersInput>
  }

  export type workersUpdateWithoutRemindersInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: materialsUpdateManyWithoutWorkersNestedInput
  }

  export type workersUncheckedUpdateWithoutRemindersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    joining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: materialsUncheckedUpdateManyWithoutWorkersNestedInput
  }

  export type attendancesCreateWithoutSitesInput = {
    id: string
    checkInTime?: Date | string
    checkOutTime?: Date | string | null
    checkInLatitude: number
    checkInLongitude: number
    checkOutLatitude?: number | null
    checkOutLongitude?: number | null
    checkInAccuracy: number
    checkOutAccuracy?: number | null
    durationMinutes?: number | null
    status?: $Enums.AttendanceStatus
    createdAt?: Date | string
    updatedAt: Date | string
    users: usersCreateNestedOneWithoutAttendancesInput
  }

  export type attendancesUncheckedCreateWithoutSitesInput = {
    id: string
    userId: number
    checkInTime?: Date | string
    checkOutTime?: Date | string | null
    checkInLatitude: number
    checkInLongitude: number
    checkOutLatitude?: number | null
    checkOutLongitude?: number | null
    checkInAccuracy: number
    checkOutAccuracy?: number | null
    durationMinutes?: number | null
    status?: $Enums.AttendanceStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type attendancesCreateOrConnectWithoutSitesInput = {
    where: attendancesWhereUniqueInput
    create: XOR<attendancesCreateWithoutSitesInput, attendancesUncheckedCreateWithoutSitesInput>
  }

  export type attendancesCreateManySitesInputEnvelope = {
    data: attendancesCreateManySitesInput | attendancesCreateManySitesInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutSites_sites_createdByTousersInput = {
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    attendances?: attendancesCreateNestedManyWithoutUsersInput
    bills?: billsCreateNestedManyWithoutUsersInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsCreateNestedManyWithoutUsers_payment_requests_pm_idTousersInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsCreateNestedManyWithoutUsers_payment_requests_supervisor_idTousersInput
    project_progress?: project_progressCreateNestedManyWithoutUsersInput
    sites_users_assignedSiteIdTosites?: sitesCreateNestedOneWithoutUsers_users_assignedSiteIdTositesInput
    projects?: projectsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSites_sites_createdByTousersInput = {
    id?: number
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    assignedSiteId?: string | null
    attendances?: attendancesUncheckedCreateNestedManyWithoutUsersInput
    bills?: billsUncheckedCreateNestedManyWithoutUsersInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUncheckedCreateNestedManyWithoutUsers_payment_requests_pm_idTousersInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUncheckedCreateNestedManyWithoutUsers_payment_requests_supervisor_idTousersInput
    project_progress?: project_progressUncheckedCreateNestedManyWithoutUsersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSites_sites_createdByTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSites_sites_createdByTousersInput, usersUncheckedCreateWithoutSites_sites_createdByTousersInput>
  }

  export type usersCreateWithoutSites_users_assignedSiteIdTositesInput = {
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    attendances?: attendancesCreateNestedManyWithoutUsersInput
    bills?: billsCreateNestedManyWithoutUsersInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsCreateNestedManyWithoutUsers_payment_requests_pm_idTousersInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsCreateNestedManyWithoutUsers_payment_requests_supervisor_idTousersInput
    project_progress?: project_progressCreateNestedManyWithoutUsersInput
    sites_sites_createdByTousers?: sitesCreateNestedManyWithoutUsers_sites_createdByTousersInput
    projects?: projectsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSites_users_assignedSiteIdTositesInput = {
    id?: number
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
    attendances?: attendancesUncheckedCreateNestedManyWithoutUsersInput
    bills?: billsUncheckedCreateNestedManyWithoutUsersInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUncheckedCreateNestedManyWithoutUsers_payment_requests_pm_idTousersInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUncheckedCreateNestedManyWithoutUsers_payment_requests_supervisor_idTousersInput
    project_progress?: project_progressUncheckedCreateNestedManyWithoutUsersInput
    sites_sites_createdByTousers?: sitesUncheckedCreateNestedManyWithoutUsers_sites_createdByTousersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSites_users_assignedSiteIdTositesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSites_users_assignedSiteIdTositesInput, usersUncheckedCreateWithoutSites_users_assignedSiteIdTositesInput>
  }

  export type usersCreateManySites_users_assignedSiteIdTositesInputEnvelope = {
    data: usersCreateManySites_users_assignedSiteIdTositesInput | usersCreateManySites_users_assignedSiteIdTositesInput[]
    skipDuplicates?: boolean
  }

  export type attendancesUpsertWithWhereUniqueWithoutSitesInput = {
    where: attendancesWhereUniqueInput
    update: XOR<attendancesUpdateWithoutSitesInput, attendancesUncheckedUpdateWithoutSitesInput>
    create: XOR<attendancesCreateWithoutSitesInput, attendancesUncheckedCreateWithoutSitesInput>
  }

  export type attendancesUpdateWithWhereUniqueWithoutSitesInput = {
    where: attendancesWhereUniqueInput
    data: XOR<attendancesUpdateWithoutSitesInput, attendancesUncheckedUpdateWithoutSitesInput>
  }

  export type attendancesUpdateManyWithWhereWithoutSitesInput = {
    where: attendancesScalarWhereInput
    data: XOR<attendancesUpdateManyMutationInput, attendancesUncheckedUpdateManyWithoutSitesInput>
  }

  export type attendancesScalarWhereInput = {
    AND?: attendancesScalarWhereInput | attendancesScalarWhereInput[]
    OR?: attendancesScalarWhereInput[]
    NOT?: attendancesScalarWhereInput | attendancesScalarWhereInput[]
    id?: UuidFilter<"attendances"> | string
    userId?: IntFilter<"attendances"> | number
    siteId?: UuidFilter<"attendances"> | string
    checkInTime?: DateTimeFilter<"attendances"> | Date | string
    checkOutTime?: DateTimeNullableFilter<"attendances"> | Date | string | null
    checkInLatitude?: FloatFilter<"attendances"> | number
    checkInLongitude?: FloatFilter<"attendances"> | number
    checkOutLatitude?: FloatNullableFilter<"attendances"> | number | null
    checkOutLongitude?: FloatNullableFilter<"attendances"> | number | null
    checkInAccuracy?: FloatFilter<"attendances"> | number
    checkOutAccuracy?: FloatNullableFilter<"attendances"> | number | null
    durationMinutes?: IntNullableFilter<"attendances"> | number | null
    status?: EnumAttendanceStatusFilter<"attendances"> | $Enums.AttendanceStatus
    createdAt?: DateTimeFilter<"attendances"> | Date | string
    updatedAt?: DateTimeFilter<"attendances"> | Date | string
  }

  export type usersUpsertWithoutSites_sites_createdByTousersInput = {
    update: XOR<usersUpdateWithoutSites_sites_createdByTousersInput, usersUncheckedUpdateWithoutSites_sites_createdByTousersInput>
    create: XOR<usersCreateWithoutSites_sites_createdByTousersInput, usersUncheckedCreateWithoutSites_sites_createdByTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSites_sites_createdByTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSites_sites_createdByTousersInput, usersUncheckedUpdateWithoutSites_sites_createdByTousersInput>
  }

  export type usersUpdateWithoutSites_sites_createdByTousersInput = {
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: attendancesUpdateManyWithoutUsersNestedInput
    bills?: billsUpdateManyWithoutUsersNestedInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUpdateManyWithoutUsers_payment_requests_pm_idTousersNestedInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUpdateManyWithoutUsers_payment_requests_supervisor_idTousersNestedInput
    project_progress?: project_progressUpdateManyWithoutUsersNestedInput
    sites_users_assignedSiteIdTosites?: sitesUpdateOneWithoutUsers_users_assignedSiteIdTositesNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSites_sites_createdByTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedSiteId?: NullableStringFieldUpdateOperationsInput | string | null
    attendances?: attendancesUncheckedUpdateManyWithoutUsersNestedInput
    bills?: billsUncheckedUpdateManyWithoutUsersNestedInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_pm_idTousersNestedInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_supervisor_idTousersNestedInput
    project_progress?: project_progressUncheckedUpdateManyWithoutUsersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUpsertWithWhereUniqueWithoutSites_users_assignedSiteIdTositesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutSites_users_assignedSiteIdTositesInput, usersUncheckedUpdateWithoutSites_users_assignedSiteIdTositesInput>
    create: XOR<usersCreateWithoutSites_users_assignedSiteIdTositesInput, usersUncheckedCreateWithoutSites_users_assignedSiteIdTositesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutSites_users_assignedSiteIdTositesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutSites_users_assignedSiteIdTositesInput, usersUncheckedUpdateWithoutSites_users_assignedSiteIdTositesInput>
  }

  export type usersUpdateManyWithWhereWithoutSites_users_assignedSiteIdTositesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutSites_users_assignedSiteIdTositesInput>
  }

  export type attendancesCreateWithoutUsersInput = {
    id: string
    checkInTime?: Date | string
    checkOutTime?: Date | string | null
    checkInLatitude: number
    checkInLongitude: number
    checkOutLatitude?: number | null
    checkOutLongitude?: number | null
    checkInAccuracy: number
    checkOutAccuracy?: number | null
    durationMinutes?: number | null
    status?: $Enums.AttendanceStatus
    createdAt?: Date | string
    updatedAt: Date | string
    sites: sitesCreateNestedOneWithoutAttendancesInput
  }

  export type attendancesUncheckedCreateWithoutUsersInput = {
    id: string
    siteId: string
    checkInTime?: Date | string
    checkOutTime?: Date | string | null
    checkInLatitude: number
    checkInLongitude: number
    checkOutLatitude?: number | null
    checkOutLongitude?: number | null
    checkInAccuracy: number
    checkOutAccuracy?: number | null
    durationMinutes?: number | null
    status?: $Enums.AttendanceStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type attendancesCreateOrConnectWithoutUsersInput = {
    where: attendancesWhereUniqueInput
    create: XOR<attendancesCreateWithoutUsersInput, attendancesUncheckedCreateWithoutUsersInput>
  }

  export type attendancesCreateManyUsersInputEnvelope = {
    data: attendancesCreateManyUsersInput | attendancesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type billsCreateWithoutUsersInput = {
    name: string
    image_url?: string | null
    image_file_id?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    projects: projectsCreateNestedOneWithoutBillsInput
  }

  export type billsUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    image_url?: string | null
    image_file_id?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    project_id: number
    created_at?: Date | string
  }

  export type billsCreateOrConnectWithoutUsersInput = {
    where: billsWhereUniqueInput
    create: XOR<billsCreateWithoutUsersInput, billsUncheckedCreateWithoutUsersInput>
  }

  export type billsCreateManyUsersInputEnvelope = {
    data: billsCreateManyUsersInput | billsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type payment_requestsCreateWithoutUsers_payment_requests_pm_idTousersInput = {
    status?: $Enums.PaymentStatus
    total_amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at: Date | string
    materials?: materialsCreateNestedManyWithoutPayment_requestsInput
    projects: projectsCreateNestedOneWithoutPayment_requestsInput
    users_payment_requests_supervisor_idTousers: usersCreateNestedOneWithoutPayment_requests_payment_requests_supervisor_idTousersInput
  }

  export type payment_requestsUncheckedCreateWithoutUsers_payment_requests_pm_idTousersInput = {
    id?: number
    status?: $Enums.PaymentStatus
    total_amount: Decimal | DecimalJsLike | number | string
    supervisor_id: number
    project_id: number
    created_at?: Date | string
    updated_at: Date | string
    materials?: materialsUncheckedCreateNestedManyWithoutPayment_requestsInput
  }

  export type payment_requestsCreateOrConnectWithoutUsers_payment_requests_pm_idTousersInput = {
    where: payment_requestsWhereUniqueInput
    create: XOR<payment_requestsCreateWithoutUsers_payment_requests_pm_idTousersInput, payment_requestsUncheckedCreateWithoutUsers_payment_requests_pm_idTousersInput>
  }

  export type payment_requestsCreateManyUsers_payment_requests_pm_idTousersInputEnvelope = {
    data: payment_requestsCreateManyUsers_payment_requests_pm_idTousersInput | payment_requestsCreateManyUsers_payment_requests_pm_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type payment_requestsCreateWithoutUsers_payment_requests_supervisor_idTousersInput = {
    status?: $Enums.PaymentStatus
    total_amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at: Date | string
    materials?: materialsCreateNestedManyWithoutPayment_requestsInput
    users_payment_requests_pm_idTousers?: usersCreateNestedOneWithoutPayment_requests_payment_requests_pm_idTousersInput
    projects: projectsCreateNestedOneWithoutPayment_requestsInput
  }

  export type payment_requestsUncheckedCreateWithoutUsers_payment_requests_supervisor_idTousersInput = {
    id?: number
    status?: $Enums.PaymentStatus
    total_amount: Decimal | DecimalJsLike | number | string
    pm_id?: number | null
    project_id: number
    created_at?: Date | string
    updated_at: Date | string
    materials?: materialsUncheckedCreateNestedManyWithoutPayment_requestsInput
  }

  export type payment_requestsCreateOrConnectWithoutUsers_payment_requests_supervisor_idTousersInput = {
    where: payment_requestsWhereUniqueInput
    create: XOR<payment_requestsCreateWithoutUsers_payment_requests_supervisor_idTousersInput, payment_requestsUncheckedCreateWithoutUsers_payment_requests_supervisor_idTousersInput>
  }

  export type payment_requestsCreateManyUsers_payment_requests_supervisor_idTousersInputEnvelope = {
    data: payment_requestsCreateManyUsers_payment_requests_supervisor_idTousersInput | payment_requestsCreateManyUsers_payment_requests_supervisor_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type project_progressCreateWithoutUsersInput = {
    percentage: number
    date: string
    notes?: string | null
    created_at?: Date | string
    projects: projectsCreateNestedOneWithoutProject_progressInput
  }

  export type project_progressUncheckedCreateWithoutUsersInput = {
    id?: number
    percentage: number
    date: string
    notes?: string | null
    project_id: number
    created_at?: Date | string
  }

  export type project_progressCreateOrConnectWithoutUsersInput = {
    where: project_progressWhereUniqueInput
    create: XOR<project_progressCreateWithoutUsersInput, project_progressUncheckedCreateWithoutUsersInput>
  }

  export type project_progressCreateManyUsersInputEnvelope = {
    data: project_progressCreateManyUsersInput | project_progressCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type sitesCreateWithoutUsers_sites_createdByTousersInput = {
    id: string
    name: string
    latitude: number
    longitude: number
    radius?: number
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    attendances?: attendancesCreateNestedManyWithoutSitesInput
    users_users_assignedSiteIdTosites?: usersCreateNestedManyWithoutSites_users_assignedSiteIdTositesInput
  }

  export type sitesUncheckedCreateWithoutUsers_sites_createdByTousersInput = {
    id: string
    name: string
    latitude: number
    longitude: number
    radius?: number
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    attendances?: attendancesUncheckedCreateNestedManyWithoutSitesInput
    users_users_assignedSiteIdTosites?: usersUncheckedCreateNestedManyWithoutSites_users_assignedSiteIdTositesInput
  }

  export type sitesCreateOrConnectWithoutUsers_sites_createdByTousersInput = {
    where: sitesWhereUniqueInput
    create: XOR<sitesCreateWithoutUsers_sites_createdByTousersInput, sitesUncheckedCreateWithoutUsers_sites_createdByTousersInput>
  }

  export type sitesCreateManyUsers_sites_createdByTousersInputEnvelope = {
    data: sitesCreateManyUsers_sites_createdByTousersInput | sitesCreateManyUsers_sites_createdByTousersInput[]
    skipDuplicates?: boolean
  }

  export type sitesCreateWithoutUsers_users_assignedSiteIdTositesInput = {
    id: string
    name: string
    latitude: number
    longitude: number
    radius?: number
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    attendances?: attendancesCreateNestedManyWithoutSitesInput
    users_sites_createdByTousers: usersCreateNestedOneWithoutSites_sites_createdByTousersInput
  }

  export type sitesUncheckedCreateWithoutUsers_users_assignedSiteIdTositesInput = {
    id: string
    name: string
    latitude: number
    longitude: number
    radius?: number
    status?: string
    createdBy: number
    createdAt?: Date | string
    updatedAt: Date | string
    attendances?: attendancesUncheckedCreateNestedManyWithoutSitesInput
  }

  export type sitesCreateOrConnectWithoutUsers_users_assignedSiteIdTositesInput = {
    where: sitesWhereUniqueInput
    create: XOR<sitesCreateWithoutUsers_users_assignedSiteIdTositesInput, sitesUncheckedCreateWithoutUsers_users_assignedSiteIdTositesInput>
  }

  export type projectsCreateWithoutUsersInput = {
    name: string
    description?: string | null
    status?: string
    expense_heads?: projectsCreateexpense_headsInput | string[]
    budget?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    archived_progress?: archived_progressCreateNestedManyWithoutProjectsInput
    bills?: billsCreateNestedManyWithoutProjectsInput
    payment_requests?: payment_requestsCreateNestedManyWithoutProjectsInput
    project_progress?: project_progressCreateNestedManyWithoutProjectsInput
    reminders?: remindersCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    status?: string
    expense_heads?: projectsCreateexpense_headsInput | string[]
    budget?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    archived_progress?: archived_progressUncheckedCreateNestedManyWithoutProjectsInput
    bills?: billsUncheckedCreateNestedManyWithoutProjectsInput
    payment_requests?: payment_requestsUncheckedCreateNestedManyWithoutProjectsInput
    project_progress?: project_progressUncheckedCreateNestedManyWithoutProjectsInput
    reminders?: remindersUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutUsersInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput>
  }

  export type attendancesUpsertWithWhereUniqueWithoutUsersInput = {
    where: attendancesWhereUniqueInput
    update: XOR<attendancesUpdateWithoutUsersInput, attendancesUncheckedUpdateWithoutUsersInput>
    create: XOR<attendancesCreateWithoutUsersInput, attendancesUncheckedCreateWithoutUsersInput>
  }

  export type attendancesUpdateWithWhereUniqueWithoutUsersInput = {
    where: attendancesWhereUniqueInput
    data: XOR<attendancesUpdateWithoutUsersInput, attendancesUncheckedUpdateWithoutUsersInput>
  }

  export type attendancesUpdateManyWithWhereWithoutUsersInput = {
    where: attendancesScalarWhereInput
    data: XOR<attendancesUpdateManyMutationInput, attendancesUncheckedUpdateManyWithoutUsersInput>
  }

  export type billsUpsertWithWhereUniqueWithoutUsersInput = {
    where: billsWhereUniqueInput
    update: XOR<billsUpdateWithoutUsersInput, billsUncheckedUpdateWithoutUsersInput>
    create: XOR<billsCreateWithoutUsersInput, billsUncheckedCreateWithoutUsersInput>
  }

  export type billsUpdateWithWhereUniqueWithoutUsersInput = {
    where: billsWhereUniqueInput
    data: XOR<billsUpdateWithoutUsersInput, billsUncheckedUpdateWithoutUsersInput>
  }

  export type billsUpdateManyWithWhereWithoutUsersInput = {
    where: billsScalarWhereInput
    data: XOR<billsUpdateManyMutationInput, billsUncheckedUpdateManyWithoutUsersInput>
  }

  export type payment_requestsUpsertWithWhereUniqueWithoutUsers_payment_requests_pm_idTousersInput = {
    where: payment_requestsWhereUniqueInput
    update: XOR<payment_requestsUpdateWithoutUsers_payment_requests_pm_idTousersInput, payment_requestsUncheckedUpdateWithoutUsers_payment_requests_pm_idTousersInput>
    create: XOR<payment_requestsCreateWithoutUsers_payment_requests_pm_idTousersInput, payment_requestsUncheckedCreateWithoutUsers_payment_requests_pm_idTousersInput>
  }

  export type payment_requestsUpdateWithWhereUniqueWithoutUsers_payment_requests_pm_idTousersInput = {
    where: payment_requestsWhereUniqueInput
    data: XOR<payment_requestsUpdateWithoutUsers_payment_requests_pm_idTousersInput, payment_requestsUncheckedUpdateWithoutUsers_payment_requests_pm_idTousersInput>
  }

  export type payment_requestsUpdateManyWithWhereWithoutUsers_payment_requests_pm_idTousersInput = {
    where: payment_requestsScalarWhereInput
    data: XOR<payment_requestsUpdateManyMutationInput, payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_pm_idTousersInput>
  }

  export type payment_requestsUpsertWithWhereUniqueWithoutUsers_payment_requests_supervisor_idTousersInput = {
    where: payment_requestsWhereUniqueInput
    update: XOR<payment_requestsUpdateWithoutUsers_payment_requests_supervisor_idTousersInput, payment_requestsUncheckedUpdateWithoutUsers_payment_requests_supervisor_idTousersInput>
    create: XOR<payment_requestsCreateWithoutUsers_payment_requests_supervisor_idTousersInput, payment_requestsUncheckedCreateWithoutUsers_payment_requests_supervisor_idTousersInput>
  }

  export type payment_requestsUpdateWithWhereUniqueWithoutUsers_payment_requests_supervisor_idTousersInput = {
    where: payment_requestsWhereUniqueInput
    data: XOR<payment_requestsUpdateWithoutUsers_payment_requests_supervisor_idTousersInput, payment_requestsUncheckedUpdateWithoutUsers_payment_requests_supervisor_idTousersInput>
  }

  export type payment_requestsUpdateManyWithWhereWithoutUsers_payment_requests_supervisor_idTousersInput = {
    where: payment_requestsScalarWhereInput
    data: XOR<payment_requestsUpdateManyMutationInput, payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_supervisor_idTousersInput>
  }

  export type project_progressUpsertWithWhereUniqueWithoutUsersInput = {
    where: project_progressWhereUniqueInput
    update: XOR<project_progressUpdateWithoutUsersInput, project_progressUncheckedUpdateWithoutUsersInput>
    create: XOR<project_progressCreateWithoutUsersInput, project_progressUncheckedCreateWithoutUsersInput>
  }

  export type project_progressUpdateWithWhereUniqueWithoutUsersInput = {
    where: project_progressWhereUniqueInput
    data: XOR<project_progressUpdateWithoutUsersInput, project_progressUncheckedUpdateWithoutUsersInput>
  }

  export type project_progressUpdateManyWithWhereWithoutUsersInput = {
    where: project_progressScalarWhereInput
    data: XOR<project_progressUpdateManyMutationInput, project_progressUncheckedUpdateManyWithoutUsersInput>
  }

  export type sitesUpsertWithWhereUniqueWithoutUsers_sites_createdByTousersInput = {
    where: sitesWhereUniqueInput
    update: XOR<sitesUpdateWithoutUsers_sites_createdByTousersInput, sitesUncheckedUpdateWithoutUsers_sites_createdByTousersInput>
    create: XOR<sitesCreateWithoutUsers_sites_createdByTousersInput, sitesUncheckedCreateWithoutUsers_sites_createdByTousersInput>
  }

  export type sitesUpdateWithWhereUniqueWithoutUsers_sites_createdByTousersInput = {
    where: sitesWhereUniqueInput
    data: XOR<sitesUpdateWithoutUsers_sites_createdByTousersInput, sitesUncheckedUpdateWithoutUsers_sites_createdByTousersInput>
  }

  export type sitesUpdateManyWithWhereWithoutUsers_sites_createdByTousersInput = {
    where: sitesScalarWhereInput
    data: XOR<sitesUpdateManyMutationInput, sitesUncheckedUpdateManyWithoutUsers_sites_createdByTousersInput>
  }

  export type sitesScalarWhereInput = {
    AND?: sitesScalarWhereInput | sitesScalarWhereInput[]
    OR?: sitesScalarWhereInput[]
    NOT?: sitesScalarWhereInput | sitesScalarWhereInput[]
    id?: UuidFilter<"sites"> | string
    name?: StringFilter<"sites"> | string
    latitude?: FloatFilter<"sites"> | number
    longitude?: FloatFilter<"sites"> | number
    radius?: FloatFilter<"sites"> | number
    status?: StringFilter<"sites"> | string
    createdBy?: IntFilter<"sites"> | number
    createdAt?: DateTimeFilter<"sites"> | Date | string
    updatedAt?: DateTimeFilter<"sites"> | Date | string
  }

  export type sitesUpsertWithoutUsers_users_assignedSiteIdTositesInput = {
    update: XOR<sitesUpdateWithoutUsers_users_assignedSiteIdTositesInput, sitesUncheckedUpdateWithoutUsers_users_assignedSiteIdTositesInput>
    create: XOR<sitesCreateWithoutUsers_users_assignedSiteIdTositesInput, sitesUncheckedCreateWithoutUsers_users_assignedSiteIdTositesInput>
    where?: sitesWhereInput
  }

  export type sitesUpdateToOneWithWhereWithoutUsers_users_assignedSiteIdTositesInput = {
    where?: sitesWhereInput
    data: XOR<sitesUpdateWithoutUsers_users_assignedSiteIdTositesInput, sitesUncheckedUpdateWithoutUsers_users_assignedSiteIdTositesInput>
  }

  export type sitesUpdateWithoutUsers_users_assignedSiteIdTositesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: attendancesUpdateManyWithoutSitesNestedInput
    users_sites_createdByTousers?: usersUpdateOneRequiredWithoutSites_sites_createdByTousersNestedInput
  }

  export type sitesUncheckedUpdateWithoutUsers_users_assignedSiteIdTositesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: attendancesUncheckedUpdateManyWithoutSitesNestedInput
  }

  export type projectsUpsertWithWhereUniqueWithoutUsersInput = {
    where: projectsWhereUniqueInput
    update: XOR<projectsUpdateWithoutUsersInput, projectsUncheckedUpdateWithoutUsersInput>
    create: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput>
  }

  export type projectsUpdateWithWhereUniqueWithoutUsersInput = {
    where: projectsWhereUniqueInput
    data: XOR<projectsUpdateWithoutUsersInput, projectsUncheckedUpdateWithoutUsersInput>
  }

  export type projectsUpdateManyWithWhereWithoutUsersInput = {
    where: projectsScalarWhereInput
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyWithoutUsersInput>
  }

  export type projectsScalarWhereInput = {
    AND?: projectsScalarWhereInput | projectsScalarWhereInput[]
    OR?: projectsScalarWhereInput[]
    NOT?: projectsScalarWhereInput | projectsScalarWhereInput[]
    id?: IntFilter<"projects"> | number
    name?: StringFilter<"projects"> | string
    description?: StringNullableFilter<"projects"> | string | null
    status?: StringFilter<"projects"> | string
    expense_heads?: StringNullableListFilter<"projects">
    budget?: DecimalNullableFilter<"projects"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"projects"> | Date | string
  }

  export type materialsCreateWithoutWorkersInput = {
    name: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    image_url?: string | null
    image_file_id?: string | null
    payment_requests: payment_requestsCreateNestedOneWithoutMaterialsInput
  }

  export type materialsUncheckedCreateWithoutWorkersInput = {
    id?: number
    name: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    image_url?: string | null
    image_file_id?: string | null
    request_id: number
  }

  export type materialsCreateOrConnectWithoutWorkersInput = {
    where: materialsWhereUniqueInput
    create: XOR<materialsCreateWithoutWorkersInput, materialsUncheckedCreateWithoutWorkersInput>
  }

  export type materialsCreateManyWorkersInputEnvelope = {
    data: materialsCreateManyWorkersInput | materialsCreateManyWorkersInput[]
    skipDuplicates?: boolean
  }

  export type remindersCreateWithoutWorkersInput = {
    amount: Decimal | DecimalJsLike | number | string
    day_of_month: number
    frequency?: string
    reason: string
    is_active?: boolean
    last_triggered_at?: Date | string | null
    created_at?: Date | string
    projects: projectsCreateNestedOneWithoutRemindersInput
  }

  export type remindersUncheckedCreateWithoutWorkersInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    day_of_month: number
    frequency?: string
    reason: string
    is_active?: boolean
    project_id: number
    last_triggered_at?: Date | string | null
    created_at?: Date | string
  }

  export type remindersCreateOrConnectWithoutWorkersInput = {
    where: remindersWhereUniqueInput
    create: XOR<remindersCreateWithoutWorkersInput, remindersUncheckedCreateWithoutWorkersInput>
  }

  export type remindersCreateManyWorkersInputEnvelope = {
    data: remindersCreateManyWorkersInput | remindersCreateManyWorkersInput[]
    skipDuplicates?: boolean
  }

  export type materialsUpsertWithWhereUniqueWithoutWorkersInput = {
    where: materialsWhereUniqueInput
    update: XOR<materialsUpdateWithoutWorkersInput, materialsUncheckedUpdateWithoutWorkersInput>
    create: XOR<materialsCreateWithoutWorkersInput, materialsUncheckedCreateWithoutWorkersInput>
  }

  export type materialsUpdateWithWhereUniqueWithoutWorkersInput = {
    where: materialsWhereUniqueInput
    data: XOR<materialsUpdateWithoutWorkersInput, materialsUncheckedUpdateWithoutWorkersInput>
  }

  export type materialsUpdateManyWithWhereWithoutWorkersInput = {
    where: materialsScalarWhereInput
    data: XOR<materialsUpdateManyMutationInput, materialsUncheckedUpdateManyWithoutWorkersInput>
  }

  export type remindersUpsertWithWhereUniqueWithoutWorkersInput = {
    where: remindersWhereUniqueInput
    update: XOR<remindersUpdateWithoutWorkersInput, remindersUncheckedUpdateWithoutWorkersInput>
    create: XOR<remindersCreateWithoutWorkersInput, remindersUncheckedCreateWithoutWorkersInput>
  }

  export type remindersUpdateWithWhereUniqueWithoutWorkersInput = {
    where: remindersWhereUniqueInput
    data: XOR<remindersUpdateWithoutWorkersInput, remindersUncheckedUpdateWithoutWorkersInput>
  }

  export type remindersUpdateManyWithWhereWithoutWorkersInput = {
    where: remindersScalarWhereInput
    data: XOR<remindersUpdateManyMutationInput, remindersUncheckedUpdateManyWithoutWorkersInput>
  }

  export type materialsCreateManyPayment_requestsInput = {
    id?: number
    name: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    image_url?: string | null
    image_file_id?: string | null
    worker_id?: number | null
  }

  export type materialsUpdateWithoutPayment_requestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    workers?: workersUpdateOneWithoutMaterialsNestedInput
  }

  export type materialsUncheckedUpdateWithoutPayment_requestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    worker_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type materialsUncheckedUpdateManyWithoutPayment_requestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    worker_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type archived_progressCreateManyProjectsInput = {
    id?: number
    percentage: number
    date: string
    notes?: string | null
    user_name: string
    user_role: string
    original_created_at: Date | string
    archived_at?: Date | string
  }

  export type billsCreateManyProjectsInput = {
    id?: number
    name: string
    image_url?: string | null
    image_file_id?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    creator_id: number
    created_at?: Date | string
  }

  export type payment_requestsCreateManyProjectsInput = {
    id?: number
    status?: $Enums.PaymentStatus
    total_amount: Decimal | DecimalJsLike | number | string
    supervisor_id: number
    pm_id?: number | null
    created_at?: Date | string
    updated_at: Date | string
  }

  export type project_progressCreateManyProjectsInput = {
    id?: number
    percentage: number
    date: string
    notes?: string | null
    user_id: number
    created_at?: Date | string
  }

  export type remindersCreateManyProjectsInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    day_of_month: number
    frequency?: string
    reason: string
    is_active?: boolean
    worker_id: number
    last_triggered_at?: Date | string | null
    created_at?: Date | string
  }

  export type archived_progressUpdateWithoutProjectsInput = {
    percentage?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    original_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type archived_progressUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    original_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type archived_progressUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    original_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type billsUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutBillsNestedInput
  }

  export type billsUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creator_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type billsUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creator_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_requestsUpdateWithoutProjectsInput = {
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: materialsUpdateManyWithoutPayment_requestsNestedInput
    users_payment_requests_pm_idTousers?: usersUpdateOneWithoutPayment_requests_payment_requests_pm_idTousersNestedInput
    users_payment_requests_supervisor_idTousers?: usersUpdateOneRequiredWithoutPayment_requests_payment_requests_supervisor_idTousersNestedInput
  }

  export type payment_requestsUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supervisor_id?: IntFieldUpdateOperationsInput | number
    pm_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: materialsUncheckedUpdateManyWithoutPayment_requestsNestedInput
  }

  export type payment_requestsUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supervisor_id?: IntFieldUpdateOperationsInput | number
    pm_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type project_progressUpdateWithoutProjectsInput = {
    percentage?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutProject_progressNestedInput
  }

  export type project_progressUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type project_progressUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type remindersUpdateWithoutProjectsInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    day_of_month?: IntFieldUpdateOperationsInput | number
    frequency?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    last_triggered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    workers?: workersUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type remindersUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    day_of_month?: IntFieldUpdateOperationsInput | number
    frequency?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    worker_id?: IntFieldUpdateOperationsInput | number
    last_triggered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type remindersUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    day_of_month?: IntFieldUpdateOperationsInput | number
    frequency?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    worker_id?: IntFieldUpdateOperationsInput | number
    last_triggered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUpdateWithoutProjectsInput = {
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: attendancesUpdateManyWithoutUsersNestedInput
    bills?: billsUpdateManyWithoutUsersNestedInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUpdateManyWithoutUsers_payment_requests_pm_idTousersNestedInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUpdateManyWithoutUsers_payment_requests_supervisor_idTousersNestedInput
    project_progress?: project_progressUpdateManyWithoutUsersNestedInput
    sites_sites_createdByTousers?: sitesUpdateManyWithoutUsers_sites_createdByTousersNestedInput
    sites_users_assignedSiteIdTosites?: sitesUpdateOneWithoutUsers_users_assignedSiteIdTositesNestedInput
  }

  export type usersUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedSiteId?: NullableStringFieldUpdateOperationsInput | string | null
    attendances?: attendancesUncheckedUpdateManyWithoutUsersNestedInput
    bills?: billsUncheckedUpdateManyWithoutUsersNestedInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_pm_idTousersNestedInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_supervisor_idTousersNestedInput
    project_progress?: project_progressUncheckedUpdateManyWithoutUsersNestedInput
    sites_sites_createdByTousers?: sitesUncheckedUpdateManyWithoutUsers_sites_createdByTousersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedSiteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type attendancesCreateManySitesInput = {
    id: string
    userId: number
    checkInTime?: Date | string
    checkOutTime?: Date | string | null
    checkInLatitude: number
    checkInLongitude: number
    checkOutLatitude?: number | null
    checkOutLongitude?: number | null
    checkInAccuracy: number
    checkOutAccuracy?: number | null
    durationMinutes?: number | null
    status?: $Enums.AttendanceStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type usersCreateManySites_users_assignedSiteIdTositesInput = {
    id?: number
    phone: string
    dob: string
    role: string
    name?: string | null
    created_at?: Date | string
  }

  export type attendancesUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkInLatitude?: FloatFieldUpdateOperationsInput | number
    checkInLongitude?: FloatFieldUpdateOperationsInput | number
    checkOutLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkOutLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkInAccuracy?: FloatFieldUpdateOperationsInput | number
    checkOutAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type attendancesUncheckedUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkInLatitude?: FloatFieldUpdateOperationsInput | number
    checkInLongitude?: FloatFieldUpdateOperationsInput | number
    checkOutLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkOutLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkInAccuracy?: FloatFieldUpdateOperationsInput | number
    checkOutAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type attendancesUncheckedUpdateManyWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkInLatitude?: FloatFieldUpdateOperationsInput | number
    checkInLongitude?: FloatFieldUpdateOperationsInput | number
    checkOutLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkOutLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkInAccuracy?: FloatFieldUpdateOperationsInput | number
    checkOutAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUpdateWithoutSites_users_assignedSiteIdTositesInput = {
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: attendancesUpdateManyWithoutUsersNestedInput
    bills?: billsUpdateManyWithoutUsersNestedInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUpdateManyWithoutUsers_payment_requests_pm_idTousersNestedInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUpdateManyWithoutUsers_payment_requests_supervisor_idTousersNestedInput
    project_progress?: project_progressUpdateManyWithoutUsersNestedInput
    sites_sites_createdByTousers?: sitesUpdateManyWithoutUsers_sites_createdByTousersNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSites_users_assignedSiteIdTositesInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: attendancesUncheckedUpdateManyWithoutUsersNestedInput
    bills?: billsUncheckedUpdateManyWithoutUsersNestedInput
    payment_requests_payment_requests_pm_idTousers?: payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_pm_idTousersNestedInput
    payment_requests_payment_requests_supervisor_idTousers?: payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_supervisor_idTousersNestedInput
    project_progress?: project_progressUncheckedUpdateManyWithoutUsersNestedInput
    sites_sites_createdByTousers?: sitesUncheckedUpdateManyWithoutUsers_sites_createdByTousersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutSites_users_assignedSiteIdTositesInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type attendancesCreateManyUsersInput = {
    id: string
    siteId: string
    checkInTime?: Date | string
    checkOutTime?: Date | string | null
    checkInLatitude: number
    checkInLongitude: number
    checkOutLatitude?: number | null
    checkOutLongitude?: number | null
    checkInAccuracy: number
    checkOutAccuracy?: number | null
    durationMinutes?: number | null
    status?: $Enums.AttendanceStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type billsCreateManyUsersInput = {
    id?: number
    name: string
    image_url?: string | null
    image_file_id?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    project_id: number
    created_at?: Date | string
  }

  export type payment_requestsCreateManyUsers_payment_requests_pm_idTousersInput = {
    id?: number
    status?: $Enums.PaymentStatus
    total_amount: Decimal | DecimalJsLike | number | string
    supervisor_id: number
    project_id: number
    created_at?: Date | string
    updated_at: Date | string
  }

  export type payment_requestsCreateManyUsers_payment_requests_supervisor_idTousersInput = {
    id?: number
    status?: $Enums.PaymentStatus
    total_amount: Decimal | DecimalJsLike | number | string
    pm_id?: number | null
    project_id: number
    created_at?: Date | string
    updated_at: Date | string
  }

  export type project_progressCreateManyUsersInput = {
    id?: number
    percentage: number
    date: string
    notes?: string | null
    project_id: number
    created_at?: Date | string
  }

  export type sitesCreateManyUsers_sites_createdByTousersInput = {
    id: string
    name: string
    latitude: number
    longitude: number
    radius?: number
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type attendancesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkInLatitude?: FloatFieldUpdateOperationsInput | number
    checkInLongitude?: FloatFieldUpdateOperationsInput | number
    checkOutLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkOutLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkInAccuracy?: FloatFieldUpdateOperationsInput | number
    checkOutAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sites?: sitesUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type attendancesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkInLatitude?: FloatFieldUpdateOperationsInput | number
    checkInLongitude?: FloatFieldUpdateOperationsInput | number
    checkOutLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkOutLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkInAccuracy?: FloatFieldUpdateOperationsInput | number
    checkOutAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type attendancesUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkInLatitude?: FloatFieldUpdateOperationsInput | number
    checkInLongitude?: FloatFieldUpdateOperationsInput | number
    checkOutLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkOutLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    checkInAccuracy?: FloatFieldUpdateOperationsInput | number
    checkOutAccuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type billsUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: projectsUpdateOneRequiredWithoutBillsNestedInput
  }

  export type billsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    project_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type billsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    project_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_requestsUpdateWithoutUsers_payment_requests_pm_idTousersInput = {
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: materialsUpdateManyWithoutPayment_requestsNestedInput
    projects?: projectsUpdateOneRequiredWithoutPayment_requestsNestedInput
    users_payment_requests_supervisor_idTousers?: usersUpdateOneRequiredWithoutPayment_requests_payment_requests_supervisor_idTousersNestedInput
  }

  export type payment_requestsUncheckedUpdateWithoutUsers_payment_requests_pm_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supervisor_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: materialsUncheckedUpdateManyWithoutPayment_requestsNestedInput
  }

  export type payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_pm_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supervisor_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_requestsUpdateWithoutUsers_payment_requests_supervisor_idTousersInput = {
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: materialsUpdateManyWithoutPayment_requestsNestedInput
    users_payment_requests_pm_idTousers?: usersUpdateOneWithoutPayment_requests_payment_requests_pm_idTousersNestedInput
    projects?: projectsUpdateOneRequiredWithoutPayment_requestsNestedInput
  }

  export type payment_requestsUncheckedUpdateWithoutUsers_payment_requests_supervisor_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pm_id?: NullableIntFieldUpdateOperationsInput | number | null
    project_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: materialsUncheckedUpdateManyWithoutPayment_requestsNestedInput
  }

  export type payment_requestsUncheckedUpdateManyWithoutUsers_payment_requests_supervisor_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pm_id?: NullableIntFieldUpdateOperationsInput | number | null
    project_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type project_progressUpdateWithoutUsersInput = {
    percentage?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: projectsUpdateOneRequiredWithoutProject_progressNestedInput
  }

  export type project_progressUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type project_progressUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    project_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sitesUpdateWithoutUsers_sites_createdByTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: attendancesUpdateManyWithoutSitesNestedInput
    users_users_assignedSiteIdTosites?: usersUpdateManyWithoutSites_users_assignedSiteIdTositesNestedInput
  }

  export type sitesUncheckedUpdateWithoutUsers_sites_createdByTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: attendancesUncheckedUpdateManyWithoutSitesNestedInput
    users_users_assignedSiteIdTosites?: usersUncheckedUpdateManyWithoutSites_users_assignedSiteIdTositesNestedInput
  }

  export type sitesUncheckedUpdateManyWithoutUsers_sites_createdByTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectsUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expense_heads?: projectsUpdateexpense_headsInput | string[]
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_progress?: archived_progressUpdateManyWithoutProjectsNestedInput
    bills?: billsUpdateManyWithoutProjectsNestedInput
    payment_requests?: payment_requestsUpdateManyWithoutProjectsNestedInput
    project_progress?: project_progressUpdateManyWithoutProjectsNestedInput
    reminders?: remindersUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expense_heads?: projectsUpdateexpense_headsInput | string[]
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    archived_progress?: archived_progressUncheckedUpdateManyWithoutProjectsNestedInput
    bills?: billsUncheckedUpdateManyWithoutProjectsNestedInput
    payment_requests?: payment_requestsUncheckedUpdateManyWithoutProjectsNestedInput
    project_progress?: project_progressUncheckedUpdateManyWithoutProjectsNestedInput
    reminders?: remindersUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expense_heads?: projectsUpdateexpense_headsInput | string[]
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type materialsCreateManyWorkersInput = {
    id?: number
    name: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    image_url?: string | null
    image_file_id?: string | null
    request_id: number
  }

  export type remindersCreateManyWorkersInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    day_of_month: number
    frequency?: string
    reason: string
    is_active?: boolean
    project_id: number
    last_triggered_at?: Date | string | null
    created_at?: Date | string
  }

  export type materialsUpdateWithoutWorkersInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_requests?: payment_requestsUpdateOneRequiredWithoutMaterialsNestedInput
  }

  export type materialsUncheckedUpdateWithoutWorkersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    request_id?: IntFieldUpdateOperationsInput | number
  }

  export type materialsUncheckedUpdateManyWithoutWorkersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_file_id?: NullableStringFieldUpdateOperationsInput | string | null
    request_id?: IntFieldUpdateOperationsInput | number
  }

  export type remindersUpdateWithoutWorkersInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    day_of_month?: IntFieldUpdateOperationsInput | number
    frequency?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    last_triggered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: projectsUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type remindersUncheckedUpdateWithoutWorkersInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    day_of_month?: IntFieldUpdateOperationsInput | number
    frequency?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    project_id?: IntFieldUpdateOperationsInput | number
    last_triggered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type remindersUncheckedUpdateManyWithoutWorkersInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    day_of_month?: IntFieldUpdateOperationsInput | number
    frequency?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    project_id?: IntFieldUpdateOperationsInput | number
    last_triggered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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