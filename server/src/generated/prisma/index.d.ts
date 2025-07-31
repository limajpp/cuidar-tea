
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model agendamentos
 * 
 */
export type agendamentos = $Result.DefaultSelection<Prisma.$agendamentosPayload>
/**
 * Model enderecos
 * 
 */
export type enderecos = $Result.DefaultSelection<Prisma.$enderecosPayload>
/**
 * Model especialidades
 * 
 */
export type especialidades = $Result.DefaultSelection<Prisma.$especialidadesPayload>
/**
 * Model formacoes
 * 
 */
export type formacoes = $Result.DefaultSelection<Prisma.$formacoesPayload>
/**
 * Model horarios_trabalho
 * 
 */
export type horarios_trabalho = $Result.DefaultSelection<Prisma.$horarios_trabalhoPayload>
/**
 * Model idiomas
 * 
 */
export type idiomas = $Result.DefaultSelection<Prisma.$idiomasPayload>
/**
 * Model pacientes
 * 
 */
export type pacientes = $Result.DefaultSelection<Prisma.$pacientesPayload>
/**
 * Model profissionais
 * 
 */
export type profissionais = $Result.DefaultSelection<Prisma.$profissionaisPayload>
/**
 * Model profissional_especialidades
 * 
 */
export type profissional_especialidades = $Result.DefaultSelection<Prisma.$profissional_especialidadesPayload>
/**
 * Model profissional_formacoes
 * 
 */
export type profissional_formacoes = $Result.DefaultSelection<Prisma.$profissional_formacoesPayload>
/**
 * Model profissional_idiomas
 * 
 */
export type profissional_idiomas = $Result.DefaultSelection<Prisma.$profissional_idiomasPayload>
/**
 * Model profissional_tags
 * 
 */
export type profissional_tags = $Result.DefaultSelection<Prisma.$profissional_tagsPayload>
/**
 * Model tags
 * 
 */
export type tags = $Result.DefaultSelection<Prisma.$tagsPayload>
/**
 * Model telefones
 * 
 */
export type telefones = $Result.DefaultSelection<Prisma.$telefonesPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const telefones_tipo: {
  CELULAR: 'CELULAR',
  RESIDENCIAL: 'RESIDENCIAL',
  COMERCIAL: 'COMERCIAL'
};

export type telefones_tipo = (typeof telefones_tipo)[keyof typeof telefones_tipo]


export const profissionais_tipo_registro: {
  CRM: 'CRM',
  CRP: 'CRP',
  CRFa: 'CRFa',
  CREFITO: 'CREFITO',
  CREA: 'CREA'
};

export type profissionais_tipo_registro = (typeof profissionais_tipo_registro)[keyof typeof profissionais_tipo_registro]


export const pacientes_nivel_tea: {
  N_VEL_1: 'N_VEL_1',
  N_VEL_2: 'N_VEL_2',
  N_VEL_3: 'N_VEL_3'
};

export type pacientes_nivel_tea = (typeof pacientes_nivel_tea)[keyof typeof pacientes_nivel_tea]


export const agendamentos_status: {
  AGENDADO: 'AGENDADO',
  CANCELADO: 'CANCELADO',
  FINALIZADO: 'FINALIZADO'
};

export type agendamentos_status = (typeof agendamentos_status)[keyof typeof agendamentos_status]

}

export type telefones_tipo = $Enums.telefones_tipo

export const telefones_tipo: typeof $Enums.telefones_tipo

export type profissionais_tipo_registro = $Enums.profissionais_tipo_registro

export const profissionais_tipo_registro: typeof $Enums.profissionais_tipo_registro

export type pacientes_nivel_tea = $Enums.pacientes_nivel_tea

export const pacientes_nivel_tea: typeof $Enums.pacientes_nivel_tea

export type agendamentos_status = $Enums.agendamentos_status

export const agendamentos_status: typeof $Enums.agendamentos_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Agendamentos
 * const agendamentos = await prisma.agendamentos.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Agendamentos
   * const agendamentos = await prisma.agendamentos.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.agendamentos`: Exposes CRUD operations for the **agendamentos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agendamentos
    * const agendamentos = await prisma.agendamentos.findMany()
    * ```
    */
  get agendamentos(): Prisma.agendamentosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enderecos`: Exposes CRUD operations for the **enderecos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enderecos
    * const enderecos = await prisma.enderecos.findMany()
    * ```
    */
  get enderecos(): Prisma.enderecosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.especialidades`: Exposes CRUD operations for the **especialidades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Especialidades
    * const especialidades = await prisma.especialidades.findMany()
    * ```
    */
  get especialidades(): Prisma.especialidadesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formacoes`: Exposes CRUD operations for the **formacoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formacoes
    * const formacoes = await prisma.formacoes.findMany()
    * ```
    */
  get formacoes(): Prisma.formacoesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horarios_trabalho`: Exposes CRUD operations for the **horarios_trabalho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Horarios_trabalhos
    * const horarios_trabalhos = await prisma.horarios_trabalho.findMany()
    * ```
    */
  get horarios_trabalho(): Prisma.horarios_trabalhoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idiomas`: Exposes CRUD operations for the **idiomas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idiomas
    * const idiomas = await prisma.idiomas.findMany()
    * ```
    */
  get idiomas(): Prisma.idiomasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pacientes`: Exposes CRUD operations for the **pacientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.pacientes.findMany()
    * ```
    */
  get pacientes(): Prisma.pacientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profissionais`: Exposes CRUD operations for the **profissionais** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profissionais
    * const profissionais = await prisma.profissionais.findMany()
    * ```
    */
  get profissionais(): Prisma.profissionaisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profissional_especialidades`: Exposes CRUD operations for the **profissional_especialidades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profissional_especialidades
    * const profissional_especialidades = await prisma.profissional_especialidades.findMany()
    * ```
    */
  get profissional_especialidades(): Prisma.profissional_especialidadesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profissional_formacoes`: Exposes CRUD operations for the **profissional_formacoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profissional_formacoes
    * const profissional_formacoes = await prisma.profissional_formacoes.findMany()
    * ```
    */
  get profissional_formacoes(): Prisma.profissional_formacoesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profissional_idiomas`: Exposes CRUD operations for the **profissional_idiomas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profissional_idiomas
    * const profissional_idiomas = await prisma.profissional_idiomas.findMany()
    * ```
    */
  get profissional_idiomas(): Prisma.profissional_idiomasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profissional_tags`: Exposes CRUD operations for the **profissional_tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profissional_tags
    * const profissional_tags = await prisma.profissional_tags.findMany()
    * ```
    */
  get profissional_tags(): Prisma.profissional_tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telefones`: Exposes CRUD operations for the **telefones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Telefones
    * const telefones = await prisma.telefones.findMany()
    * ```
    */
  get telefones(): Prisma.telefonesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    agendamentos: 'agendamentos',
    enderecos: 'enderecos',
    especialidades: 'especialidades',
    formacoes: 'formacoes',
    horarios_trabalho: 'horarios_trabalho',
    idiomas: 'idiomas',
    pacientes: 'pacientes',
    profissionais: 'profissionais',
    profissional_especialidades: 'profissional_especialidades',
    profissional_formacoes: 'profissional_formacoes',
    profissional_idiomas: 'profissional_idiomas',
    profissional_tags: 'profissional_tags',
    tags: 'tags',
    telefones: 'telefones',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "agendamentos" | "enderecos" | "especialidades" | "formacoes" | "horarios_trabalho" | "idiomas" | "pacientes" | "profissionais" | "profissional_especialidades" | "profissional_formacoes" | "profissional_idiomas" | "profissional_tags" | "tags" | "telefones" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      agendamentos: {
        payload: Prisma.$agendamentosPayload<ExtArgs>
        fields: Prisma.agendamentosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.agendamentosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamentosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.agendamentosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamentosPayload>
          }
          findFirst: {
            args: Prisma.agendamentosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamentosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.agendamentosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamentosPayload>
          }
          findMany: {
            args: Prisma.agendamentosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamentosPayload>[]
          }
          create: {
            args: Prisma.agendamentosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamentosPayload>
          }
          createMany: {
            args: Prisma.agendamentosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.agendamentosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamentosPayload>
          }
          update: {
            args: Prisma.agendamentosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamentosPayload>
          }
          deleteMany: {
            args: Prisma.agendamentosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.agendamentosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.agendamentosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamentosPayload>
          }
          aggregate: {
            args: Prisma.AgendamentosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgendamentos>
          }
          groupBy: {
            args: Prisma.agendamentosGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendamentosGroupByOutputType>[]
          }
          count: {
            args: Prisma.agendamentosCountArgs<ExtArgs>
            result: $Utils.Optional<AgendamentosCountAggregateOutputType> | number
          }
        }
      }
      enderecos: {
        payload: Prisma.$enderecosPayload<ExtArgs>
        fields: Prisma.enderecosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enderecosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enderecosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosPayload>
          }
          findFirst: {
            args: Prisma.enderecosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enderecosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosPayload>
          }
          findMany: {
            args: Prisma.enderecosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosPayload>[]
          }
          create: {
            args: Prisma.enderecosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosPayload>
          }
          createMany: {
            args: Prisma.enderecosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.enderecosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosPayload>
          }
          update: {
            args: Prisma.enderecosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosPayload>
          }
          deleteMany: {
            args: Prisma.enderecosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enderecosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.enderecosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecosPayload>
          }
          aggregate: {
            args: Prisma.EnderecosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnderecos>
          }
          groupBy: {
            args: Prisma.enderecosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecosGroupByOutputType>[]
          }
          count: {
            args: Prisma.enderecosCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecosCountAggregateOutputType> | number
          }
        }
      }
      especialidades: {
        payload: Prisma.$especialidadesPayload<ExtArgs>
        fields: Prisma.especialidadesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.especialidadesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialidadesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.especialidadesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialidadesPayload>
          }
          findFirst: {
            args: Prisma.especialidadesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialidadesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.especialidadesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialidadesPayload>
          }
          findMany: {
            args: Prisma.especialidadesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialidadesPayload>[]
          }
          create: {
            args: Prisma.especialidadesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialidadesPayload>
          }
          createMany: {
            args: Prisma.especialidadesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.especialidadesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialidadesPayload>
          }
          update: {
            args: Prisma.especialidadesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialidadesPayload>
          }
          deleteMany: {
            args: Prisma.especialidadesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.especialidadesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.especialidadesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialidadesPayload>
          }
          aggregate: {
            args: Prisma.EspecialidadesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspecialidades>
          }
          groupBy: {
            args: Prisma.especialidadesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadesGroupByOutputType>[]
          }
          count: {
            args: Prisma.especialidadesCountArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadesCountAggregateOutputType> | number
          }
        }
      }
      formacoes: {
        payload: Prisma.$formacoesPayload<ExtArgs>
        fields: Prisma.formacoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formacoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formacoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formacoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formacoesPayload>
          }
          findFirst: {
            args: Prisma.formacoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formacoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formacoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formacoesPayload>
          }
          findMany: {
            args: Prisma.formacoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formacoesPayload>[]
          }
          create: {
            args: Prisma.formacoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formacoesPayload>
          }
          createMany: {
            args: Prisma.formacoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.formacoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formacoesPayload>
          }
          update: {
            args: Prisma.formacoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formacoesPayload>
          }
          deleteMany: {
            args: Prisma.formacoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formacoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.formacoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formacoesPayload>
          }
          aggregate: {
            args: Prisma.FormacoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormacoes>
          }
          groupBy: {
            args: Prisma.formacoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormacoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.formacoesCountArgs<ExtArgs>
            result: $Utils.Optional<FormacoesCountAggregateOutputType> | number
          }
        }
      }
      horarios_trabalho: {
        payload: Prisma.$horarios_trabalhoPayload<ExtArgs>
        fields: Prisma.horarios_trabalhoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.horarios_trabalhoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horarios_trabalhoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.horarios_trabalhoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horarios_trabalhoPayload>
          }
          findFirst: {
            args: Prisma.horarios_trabalhoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horarios_trabalhoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.horarios_trabalhoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horarios_trabalhoPayload>
          }
          findMany: {
            args: Prisma.horarios_trabalhoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horarios_trabalhoPayload>[]
          }
          create: {
            args: Prisma.horarios_trabalhoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horarios_trabalhoPayload>
          }
          createMany: {
            args: Prisma.horarios_trabalhoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.horarios_trabalhoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horarios_trabalhoPayload>
          }
          update: {
            args: Prisma.horarios_trabalhoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horarios_trabalhoPayload>
          }
          deleteMany: {
            args: Prisma.horarios_trabalhoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.horarios_trabalhoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.horarios_trabalhoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horarios_trabalhoPayload>
          }
          aggregate: {
            args: Prisma.Horarios_trabalhoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorarios_trabalho>
          }
          groupBy: {
            args: Prisma.horarios_trabalhoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Horarios_trabalhoGroupByOutputType>[]
          }
          count: {
            args: Prisma.horarios_trabalhoCountArgs<ExtArgs>
            result: $Utils.Optional<Horarios_trabalhoCountAggregateOutputType> | number
          }
        }
      }
      idiomas: {
        payload: Prisma.$idiomasPayload<ExtArgs>
        fields: Prisma.idiomasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idiomasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idiomasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomasPayload>
          }
          findFirst: {
            args: Prisma.idiomasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idiomasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomasPayload>
          }
          findMany: {
            args: Prisma.idiomasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomasPayload>[]
          }
          create: {
            args: Prisma.idiomasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomasPayload>
          }
          createMany: {
            args: Prisma.idiomasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.idiomasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomasPayload>
          }
          update: {
            args: Prisma.idiomasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomasPayload>
          }
          deleteMany: {
            args: Prisma.idiomasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idiomasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.idiomasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomasPayload>
          }
          aggregate: {
            args: Prisma.IdiomasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdiomas>
          }
          groupBy: {
            args: Prisma.idiomasGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdiomasGroupByOutputType>[]
          }
          count: {
            args: Prisma.idiomasCountArgs<ExtArgs>
            result: $Utils.Optional<IdiomasCountAggregateOutputType> | number
          }
        }
      }
      pacientes: {
        payload: Prisma.$pacientesPayload<ExtArgs>
        fields: Prisma.pacientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pacientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pacientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          findFirst: {
            args: Prisma.pacientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pacientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          findMany: {
            args: Prisma.pacientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>[]
          }
          create: {
            args: Prisma.pacientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          createMany: {
            args: Prisma.pacientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pacientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          update: {
            args: Prisma.pacientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          deleteMany: {
            args: Prisma.pacientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pacientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pacientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          aggregate: {
            args: Prisma.PacientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePacientes>
          }
          groupBy: {
            args: Prisma.pacientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.pacientesCountArgs<ExtArgs>
            result: $Utils.Optional<PacientesCountAggregateOutputType> | number
          }
        }
      }
      profissionais: {
        payload: Prisma.$profissionaisPayload<ExtArgs>
        fields: Prisma.profissionaisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profissionaisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profissionaisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>
          }
          findFirst: {
            args: Prisma.profissionaisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profissionaisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>
          }
          findMany: {
            args: Prisma.profissionaisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>[]
          }
          create: {
            args: Prisma.profissionaisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>
          }
          createMany: {
            args: Prisma.profissionaisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.profissionaisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>
          }
          update: {
            args: Prisma.profissionaisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>
          }
          deleteMany: {
            args: Prisma.profissionaisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profissionaisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.profissionaisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>
          }
          aggregate: {
            args: Prisma.ProfissionaisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfissionais>
          }
          groupBy: {
            args: Prisma.profissionaisGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfissionaisGroupByOutputType>[]
          }
          count: {
            args: Prisma.profissionaisCountArgs<ExtArgs>
            result: $Utils.Optional<ProfissionaisCountAggregateOutputType> | number
          }
        }
      }
      profissional_especialidades: {
        payload: Prisma.$profissional_especialidadesPayload<ExtArgs>
        fields: Prisma.profissional_especialidadesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profissional_especialidadesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_especialidadesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profissional_especialidadesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_especialidadesPayload>
          }
          findFirst: {
            args: Prisma.profissional_especialidadesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_especialidadesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profissional_especialidadesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_especialidadesPayload>
          }
          findMany: {
            args: Prisma.profissional_especialidadesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_especialidadesPayload>[]
          }
          create: {
            args: Prisma.profissional_especialidadesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_especialidadesPayload>
          }
          createMany: {
            args: Prisma.profissional_especialidadesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.profissional_especialidadesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_especialidadesPayload>
          }
          update: {
            args: Prisma.profissional_especialidadesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_especialidadesPayload>
          }
          deleteMany: {
            args: Prisma.profissional_especialidadesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profissional_especialidadesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.profissional_especialidadesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_especialidadesPayload>
          }
          aggregate: {
            args: Prisma.Profissional_especialidadesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfissional_especialidades>
          }
          groupBy: {
            args: Prisma.profissional_especialidadesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Profissional_especialidadesGroupByOutputType>[]
          }
          count: {
            args: Prisma.profissional_especialidadesCountArgs<ExtArgs>
            result: $Utils.Optional<Profissional_especialidadesCountAggregateOutputType> | number
          }
        }
      }
      profissional_formacoes: {
        payload: Prisma.$profissional_formacoesPayload<ExtArgs>
        fields: Prisma.profissional_formacoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profissional_formacoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_formacoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profissional_formacoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_formacoesPayload>
          }
          findFirst: {
            args: Prisma.profissional_formacoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_formacoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profissional_formacoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_formacoesPayload>
          }
          findMany: {
            args: Prisma.profissional_formacoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_formacoesPayload>[]
          }
          create: {
            args: Prisma.profissional_formacoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_formacoesPayload>
          }
          createMany: {
            args: Prisma.profissional_formacoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.profissional_formacoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_formacoesPayload>
          }
          update: {
            args: Prisma.profissional_formacoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_formacoesPayload>
          }
          deleteMany: {
            args: Prisma.profissional_formacoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profissional_formacoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.profissional_formacoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_formacoesPayload>
          }
          aggregate: {
            args: Prisma.Profissional_formacoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfissional_formacoes>
          }
          groupBy: {
            args: Prisma.profissional_formacoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Profissional_formacoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.profissional_formacoesCountArgs<ExtArgs>
            result: $Utils.Optional<Profissional_formacoesCountAggregateOutputType> | number
          }
        }
      }
      profissional_idiomas: {
        payload: Prisma.$profissional_idiomasPayload<ExtArgs>
        fields: Prisma.profissional_idiomasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profissional_idiomasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_idiomasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profissional_idiomasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_idiomasPayload>
          }
          findFirst: {
            args: Prisma.profissional_idiomasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_idiomasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profissional_idiomasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_idiomasPayload>
          }
          findMany: {
            args: Prisma.profissional_idiomasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_idiomasPayload>[]
          }
          create: {
            args: Prisma.profissional_idiomasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_idiomasPayload>
          }
          createMany: {
            args: Prisma.profissional_idiomasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.profissional_idiomasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_idiomasPayload>
          }
          update: {
            args: Prisma.profissional_idiomasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_idiomasPayload>
          }
          deleteMany: {
            args: Prisma.profissional_idiomasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profissional_idiomasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.profissional_idiomasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_idiomasPayload>
          }
          aggregate: {
            args: Prisma.Profissional_idiomasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfissional_idiomas>
          }
          groupBy: {
            args: Prisma.profissional_idiomasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Profissional_idiomasGroupByOutputType>[]
          }
          count: {
            args: Prisma.profissional_idiomasCountArgs<ExtArgs>
            result: $Utils.Optional<Profissional_idiomasCountAggregateOutputType> | number
          }
        }
      }
      profissional_tags: {
        payload: Prisma.$profissional_tagsPayload<ExtArgs>
        fields: Prisma.profissional_tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profissional_tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profissional_tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_tagsPayload>
          }
          findFirst: {
            args: Prisma.profissional_tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profissional_tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_tagsPayload>
          }
          findMany: {
            args: Prisma.profissional_tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_tagsPayload>[]
          }
          create: {
            args: Prisma.profissional_tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_tagsPayload>
          }
          createMany: {
            args: Prisma.profissional_tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.profissional_tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_tagsPayload>
          }
          update: {
            args: Prisma.profissional_tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_tagsPayload>
          }
          deleteMany: {
            args: Prisma.profissional_tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profissional_tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.profissional_tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissional_tagsPayload>
          }
          aggregate: {
            args: Prisma.Profissional_tagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfissional_tags>
          }
          groupBy: {
            args: Prisma.profissional_tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Profissional_tagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.profissional_tagsCountArgs<ExtArgs>
            result: $Utils.Optional<Profissional_tagsCountAggregateOutputType> | number
          }
        }
      }
      tags: {
        payload: Prisma.$tagsPayload<ExtArgs>
        fields: Prisma.tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findFirst: {
            args: Prisma.tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findMany: {
            args: Prisma.tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          create: {
            args: Prisma.tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          createMany: {
            args: Prisma.tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          update: {
            args: Prisma.tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          deleteMany: {
            args: Prisma.tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      telefones: {
        payload: Prisma.$telefonesPayload<ExtArgs>
        fields: Prisma.telefonesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.telefonesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.telefonesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonesPayload>
          }
          findFirst: {
            args: Prisma.telefonesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.telefonesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonesPayload>
          }
          findMany: {
            args: Prisma.telefonesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonesPayload>[]
          }
          create: {
            args: Prisma.telefonesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonesPayload>
          }
          createMany: {
            args: Prisma.telefonesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.telefonesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonesPayload>
          }
          update: {
            args: Prisma.telefonesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonesPayload>
          }
          deleteMany: {
            args: Prisma.telefonesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.telefonesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.telefonesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$telefonesPayload>
          }
          aggregate: {
            args: Prisma.TelefonesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelefones>
          }
          groupBy: {
            args: Prisma.telefonesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelefonesGroupByOutputType>[]
          }
          count: {
            args: Prisma.telefonesCountArgs<ExtArgs>
            result: $Utils.Optional<TelefonesCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    agendamentos?: agendamentosOmit
    enderecos?: enderecosOmit
    especialidades?: especialidadesOmit
    formacoes?: formacoesOmit
    horarios_trabalho?: horarios_trabalhoOmit
    idiomas?: idiomasOmit
    pacientes?: pacientesOmit
    profissionais?: profissionaisOmit
    profissional_especialidades?: profissional_especialidadesOmit
    profissional_formacoes?: profissional_formacoesOmit
    profissional_idiomas?: profissional_idiomasOmit
    profissional_tags?: profissional_tagsOmit
    tags?: tagsOmit
    telefones?: telefonesOmit
    usuarios?: usuariosOmit
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
   * Count Type EnderecosCountOutputType
   */

  export type EnderecosCountOutputType = {
    agendamentos: number
    pacientes: number
    profissionais: number
  }

  export type EnderecosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | EnderecosCountOutputTypeCountAgendamentosArgs
    pacientes?: boolean | EnderecosCountOutputTypeCountPacientesArgs
    profissionais?: boolean | EnderecosCountOutputTypeCountProfissionaisArgs
  }

  // Custom InputTypes
  /**
   * EnderecosCountOutputType without action
   */
  export type EnderecosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecosCountOutputType
     */
    select?: EnderecosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnderecosCountOutputType without action
   */
  export type EnderecosCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agendamentosWhereInput
  }

  /**
   * EnderecosCountOutputType without action
   */
  export type EnderecosCountOutputTypeCountPacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pacientesWhereInput
  }

  /**
   * EnderecosCountOutputType without action
   */
  export type EnderecosCountOutputTypeCountProfissionaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profissionaisWhereInput
  }


  /**
   * Count Type EspecialidadesCountOutputType
   */

  export type EspecialidadesCountOutputType = {
    profissional_especialidades: number
  }

  export type EspecialidadesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional_especialidades?: boolean | EspecialidadesCountOutputTypeCountProfissional_especialidadesArgs
  }

  // Custom InputTypes
  /**
   * EspecialidadesCountOutputType without action
   */
  export type EspecialidadesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecialidadesCountOutputType
     */
    select?: EspecialidadesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EspecialidadesCountOutputType without action
   */
  export type EspecialidadesCountOutputTypeCountProfissional_especialidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profissional_especialidadesWhereInput
  }


  /**
   * Count Type FormacoesCountOutputType
   */

  export type FormacoesCountOutputType = {
    profissional_formacoes: number
  }

  export type FormacoesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional_formacoes?: boolean | FormacoesCountOutputTypeCountProfissional_formacoesArgs
  }

  // Custom InputTypes
  /**
   * FormacoesCountOutputType without action
   */
  export type FormacoesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacoesCountOutputType
     */
    select?: FormacoesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormacoesCountOutputType without action
   */
  export type FormacoesCountOutputTypeCountProfissional_formacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profissional_formacoesWhereInput
  }


  /**
   * Count Type IdiomasCountOutputType
   */

  export type IdiomasCountOutputType = {
    profissional_idiomas: number
  }

  export type IdiomasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional_idiomas?: boolean | IdiomasCountOutputTypeCountProfissional_idiomasArgs
  }

  // Custom InputTypes
  /**
   * IdiomasCountOutputType without action
   */
  export type IdiomasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdiomasCountOutputType
     */
    select?: IdiomasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IdiomasCountOutputType without action
   */
  export type IdiomasCountOutputTypeCountProfissional_idiomasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profissional_idiomasWhereInput
  }


  /**
   * Count Type PacientesCountOutputType
   */

  export type PacientesCountOutputType = {
    agendamentos: number
  }

  export type PacientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | PacientesCountOutputTypeCountAgendamentosArgs
  }

  // Custom InputTypes
  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacientesCountOutputType
     */
    select?: PacientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agendamentosWhereInput
  }


  /**
   * Count Type ProfissionaisCountOutputType
   */

  export type ProfissionaisCountOutputType = {
    agendamentos: number
    horarios_trabalho: number
    profissional_especialidades: number
    profissional_formacoes: number
    profissional_idiomas: number
    profissional_tags: number
  }

  export type ProfissionaisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | ProfissionaisCountOutputTypeCountAgendamentosArgs
    horarios_trabalho?: boolean | ProfissionaisCountOutputTypeCountHorarios_trabalhoArgs
    profissional_especialidades?: boolean | ProfissionaisCountOutputTypeCountProfissional_especialidadesArgs
    profissional_formacoes?: boolean | ProfissionaisCountOutputTypeCountProfissional_formacoesArgs
    profissional_idiomas?: boolean | ProfissionaisCountOutputTypeCountProfissional_idiomasArgs
    profissional_tags?: boolean | ProfissionaisCountOutputTypeCountProfissional_tagsArgs
  }

  // Custom InputTypes
  /**
   * ProfissionaisCountOutputType without action
   */
  export type ProfissionaisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionaisCountOutputType
     */
    select?: ProfissionaisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfissionaisCountOutputType without action
   */
  export type ProfissionaisCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agendamentosWhereInput
  }

  /**
   * ProfissionaisCountOutputType without action
   */
  export type ProfissionaisCountOutputTypeCountHorarios_trabalhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: horarios_trabalhoWhereInput
  }

  /**
   * ProfissionaisCountOutputType without action
   */
  export type ProfissionaisCountOutputTypeCountProfissional_especialidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profissional_especialidadesWhereInput
  }

  /**
   * ProfissionaisCountOutputType without action
   */
  export type ProfissionaisCountOutputTypeCountProfissional_formacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profissional_formacoesWhereInput
  }

  /**
   * ProfissionaisCountOutputType without action
   */
  export type ProfissionaisCountOutputTypeCountProfissional_idiomasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profissional_idiomasWhereInput
  }

  /**
   * ProfissionaisCountOutputType without action
   */
  export type ProfissionaisCountOutputTypeCountProfissional_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profissional_tagsWhereInput
  }


  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    profissional_tags: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional_tags?: boolean | TagsCountOutputTypeCountProfissional_tagsArgs
  }

  // Custom InputTypes
  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountProfissional_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profissional_tagsWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    pacientes: number
    profissionais: number
    telefones: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | UsuariosCountOutputTypeCountPacientesArgs
    profissionais?: boolean | UsuariosCountOutputTypeCountProfissionaisArgs
    telefones?: boolean | UsuariosCountOutputTypeCountTelefonesArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountPacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pacientesWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountProfissionaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profissionaisWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountTelefonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: telefonesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model agendamentos
   */

  export type AggregateAgendamentos = {
    _count: AgendamentosCountAggregateOutputType | null
    _avg: AgendamentosAvgAggregateOutputType | null
    _sum: AgendamentosSumAggregateOutputType | null
    _min: AgendamentosMinAggregateOutputType | null
    _max: AgendamentosMaxAggregateOutputType | null
  }

  export type AgendamentosAvgAggregateOutputType = {
    id_agendamento: number | null
    profissionais_id_profissional: number | null
    pacientes_id_paciente: number | null
    enderecos_id_endereco: number | null
    duracao_consulta_minutos: number | null
    nota_atendimento: number | null
  }

  export type AgendamentosSumAggregateOutputType = {
    id_agendamento: number | null
    profissionais_id_profissional: number | null
    pacientes_id_paciente: number | null
    enderecos_id_endereco: number | null
    duracao_consulta_minutos: number | null
    nota_atendimento: number | null
  }

  export type AgendamentosMinAggregateOutputType = {
    id_agendamento: number | null
    profissionais_id_profissional: number | null
    pacientes_id_paciente: number | null
    enderecos_id_endereco: number | null
    data_horario_inicio: Date | null
    duracao_consulta_minutos: number | null
    data_criacao: Date | null
    status: $Enums.agendamentos_status | null
    nota_atendimento: number | null
    avaliacao: string | null
  }

  export type AgendamentosMaxAggregateOutputType = {
    id_agendamento: number | null
    profissionais_id_profissional: number | null
    pacientes_id_paciente: number | null
    enderecos_id_endereco: number | null
    data_horario_inicio: Date | null
    duracao_consulta_minutos: number | null
    data_criacao: Date | null
    status: $Enums.agendamentos_status | null
    nota_atendimento: number | null
    avaliacao: string | null
  }

  export type AgendamentosCountAggregateOutputType = {
    id_agendamento: number
    profissionais_id_profissional: number
    pacientes_id_paciente: number
    enderecos_id_endereco: number
    data_horario_inicio: number
    duracao_consulta_minutos: number
    data_criacao: number
    status: number
    nota_atendimento: number
    avaliacao: number
    _all: number
  }


  export type AgendamentosAvgAggregateInputType = {
    id_agendamento?: true
    profissionais_id_profissional?: true
    pacientes_id_paciente?: true
    enderecos_id_endereco?: true
    duracao_consulta_minutos?: true
    nota_atendimento?: true
  }

  export type AgendamentosSumAggregateInputType = {
    id_agendamento?: true
    profissionais_id_profissional?: true
    pacientes_id_paciente?: true
    enderecos_id_endereco?: true
    duracao_consulta_minutos?: true
    nota_atendimento?: true
  }

  export type AgendamentosMinAggregateInputType = {
    id_agendamento?: true
    profissionais_id_profissional?: true
    pacientes_id_paciente?: true
    enderecos_id_endereco?: true
    data_horario_inicio?: true
    duracao_consulta_minutos?: true
    data_criacao?: true
    status?: true
    nota_atendimento?: true
    avaliacao?: true
  }

  export type AgendamentosMaxAggregateInputType = {
    id_agendamento?: true
    profissionais_id_profissional?: true
    pacientes_id_paciente?: true
    enderecos_id_endereco?: true
    data_horario_inicio?: true
    duracao_consulta_minutos?: true
    data_criacao?: true
    status?: true
    nota_atendimento?: true
    avaliacao?: true
  }

  export type AgendamentosCountAggregateInputType = {
    id_agendamento?: true
    profissionais_id_profissional?: true
    pacientes_id_paciente?: true
    enderecos_id_endereco?: true
    data_horario_inicio?: true
    duracao_consulta_minutos?: true
    data_criacao?: true
    status?: true
    nota_atendimento?: true
    avaliacao?: true
    _all?: true
  }

  export type AgendamentosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agendamentos to aggregate.
     */
    where?: agendamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendamentos to fetch.
     */
    orderBy?: agendamentosOrderByWithRelationInput | agendamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: agendamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned agendamentos
    **/
    _count?: true | AgendamentosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgendamentosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgendamentosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendamentosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendamentosMaxAggregateInputType
  }

  export type GetAgendamentosAggregateType<T extends AgendamentosAggregateArgs> = {
        [P in keyof T & keyof AggregateAgendamentos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgendamentos[P]>
      : GetScalarType<T[P], AggregateAgendamentos[P]>
  }




  export type agendamentosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agendamentosWhereInput
    orderBy?: agendamentosOrderByWithAggregationInput | agendamentosOrderByWithAggregationInput[]
    by: AgendamentosScalarFieldEnum[] | AgendamentosScalarFieldEnum
    having?: agendamentosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendamentosCountAggregateInputType | true
    _avg?: AgendamentosAvgAggregateInputType
    _sum?: AgendamentosSumAggregateInputType
    _min?: AgendamentosMinAggregateInputType
    _max?: AgendamentosMaxAggregateInputType
  }

  export type AgendamentosGroupByOutputType = {
    id_agendamento: number
    profissionais_id_profissional: number
    pacientes_id_paciente: number
    enderecos_id_endereco: number
    data_horario_inicio: Date
    duracao_consulta_minutos: number
    data_criacao: Date
    status: $Enums.agendamentos_status
    nota_atendimento: number | null
    avaliacao: string | null
    _count: AgendamentosCountAggregateOutputType | null
    _avg: AgendamentosAvgAggregateOutputType | null
    _sum: AgendamentosSumAggregateOutputType | null
    _min: AgendamentosMinAggregateOutputType | null
    _max: AgendamentosMaxAggregateOutputType | null
  }

  type GetAgendamentosGroupByPayload<T extends agendamentosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendamentosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendamentosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendamentosGroupByOutputType[P]>
            : GetScalarType<T[P], AgendamentosGroupByOutputType[P]>
        }
      >
    >


  export type agendamentosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_agendamento?: boolean
    profissionais_id_profissional?: boolean
    pacientes_id_paciente?: boolean
    enderecos_id_endereco?: boolean
    data_horario_inicio?: boolean
    duracao_consulta_minutos?: boolean
    data_criacao?: boolean
    status?: boolean
    nota_atendimento?: boolean
    avaliacao?: boolean
    enderecos?: boolean | enderecosDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    profissionais?: boolean | profissionaisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamentos"]>



  export type agendamentosSelectScalar = {
    id_agendamento?: boolean
    profissionais_id_profissional?: boolean
    pacientes_id_paciente?: boolean
    enderecos_id_endereco?: boolean
    data_horario_inicio?: boolean
    duracao_consulta_minutos?: boolean
    data_criacao?: boolean
    status?: boolean
    nota_atendimento?: boolean
    avaliacao?: boolean
  }

  export type agendamentosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_agendamento" | "profissionais_id_profissional" | "pacientes_id_paciente" | "enderecos_id_endereco" | "data_horario_inicio" | "duracao_consulta_minutos" | "data_criacao" | "status" | "nota_atendimento" | "avaliacao", ExtArgs["result"]["agendamentos"]>
  export type agendamentosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enderecos?: boolean | enderecosDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    profissionais?: boolean | profissionaisDefaultArgs<ExtArgs>
  }

  export type $agendamentosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "agendamentos"
    objects: {
      enderecos: Prisma.$enderecosPayload<ExtArgs>
      pacientes: Prisma.$pacientesPayload<ExtArgs>
      profissionais: Prisma.$profissionaisPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_agendamento: number
      profissionais_id_profissional: number
      pacientes_id_paciente: number
      enderecos_id_endereco: number
      data_horario_inicio: Date
      duracao_consulta_minutos: number
      data_criacao: Date
      status: $Enums.agendamentos_status
      nota_atendimento: number | null
      avaliacao: string | null
    }, ExtArgs["result"]["agendamentos"]>
    composites: {}
  }

  type agendamentosGetPayload<S extends boolean | null | undefined | agendamentosDefaultArgs> = $Result.GetResult<Prisma.$agendamentosPayload, S>

  type agendamentosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<agendamentosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendamentosCountAggregateInputType | true
    }

  export interface agendamentosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agendamentos'], meta: { name: 'agendamentos' } }
    /**
     * Find zero or one Agendamentos that matches the filter.
     * @param {agendamentosFindUniqueArgs} args - Arguments to find a Agendamentos
     * @example
     * // Get one Agendamentos
     * const agendamentos = await prisma.agendamentos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends agendamentosFindUniqueArgs>(args: SelectSubset<T, agendamentosFindUniqueArgs<ExtArgs>>): Prisma__agendamentosClient<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agendamentos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {agendamentosFindUniqueOrThrowArgs} args - Arguments to find a Agendamentos
     * @example
     * // Get one Agendamentos
     * const agendamentos = await prisma.agendamentos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends agendamentosFindUniqueOrThrowArgs>(args: SelectSubset<T, agendamentosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__agendamentosClient<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamentosFindFirstArgs} args - Arguments to find a Agendamentos
     * @example
     * // Get one Agendamentos
     * const agendamentos = await prisma.agendamentos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends agendamentosFindFirstArgs>(args?: SelectSubset<T, agendamentosFindFirstArgs<ExtArgs>>): Prisma__agendamentosClient<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamentos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamentosFindFirstOrThrowArgs} args - Arguments to find a Agendamentos
     * @example
     * // Get one Agendamentos
     * const agendamentos = await prisma.agendamentos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends agendamentosFindFirstOrThrowArgs>(args?: SelectSubset<T, agendamentosFindFirstOrThrowArgs<ExtArgs>>): Prisma__agendamentosClient<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agendamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamentosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agendamentos
     * const agendamentos = await prisma.agendamentos.findMany()
     * 
     * // Get first 10 Agendamentos
     * const agendamentos = await prisma.agendamentos.findMany({ take: 10 })
     * 
     * // Only select the `id_agendamento`
     * const agendamentosWithId_agendamentoOnly = await prisma.agendamentos.findMany({ select: { id_agendamento: true } })
     * 
     */
    findMany<T extends agendamentosFindManyArgs>(args?: SelectSubset<T, agendamentosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agendamentos.
     * @param {agendamentosCreateArgs} args - Arguments to create a Agendamentos.
     * @example
     * // Create one Agendamentos
     * const Agendamentos = await prisma.agendamentos.create({
     *   data: {
     *     // ... data to create a Agendamentos
     *   }
     * })
     * 
     */
    create<T extends agendamentosCreateArgs>(args: SelectSubset<T, agendamentosCreateArgs<ExtArgs>>): Prisma__agendamentosClient<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agendamentos.
     * @param {agendamentosCreateManyArgs} args - Arguments to create many Agendamentos.
     * @example
     * // Create many Agendamentos
     * const agendamentos = await prisma.agendamentos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends agendamentosCreateManyArgs>(args?: SelectSubset<T, agendamentosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Agendamentos.
     * @param {agendamentosDeleteArgs} args - Arguments to delete one Agendamentos.
     * @example
     * // Delete one Agendamentos
     * const Agendamentos = await prisma.agendamentos.delete({
     *   where: {
     *     // ... filter to delete one Agendamentos
     *   }
     * })
     * 
     */
    delete<T extends agendamentosDeleteArgs>(args: SelectSubset<T, agendamentosDeleteArgs<ExtArgs>>): Prisma__agendamentosClient<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agendamentos.
     * @param {agendamentosUpdateArgs} args - Arguments to update one Agendamentos.
     * @example
     * // Update one Agendamentos
     * const agendamentos = await prisma.agendamentos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends agendamentosUpdateArgs>(args: SelectSubset<T, agendamentosUpdateArgs<ExtArgs>>): Prisma__agendamentosClient<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agendamentos.
     * @param {agendamentosDeleteManyArgs} args - Arguments to filter Agendamentos to delete.
     * @example
     * // Delete a few Agendamentos
     * const { count } = await prisma.agendamentos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends agendamentosDeleteManyArgs>(args?: SelectSubset<T, agendamentosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamentosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agendamentos
     * const agendamentos = await prisma.agendamentos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends agendamentosUpdateManyArgs>(args: SelectSubset<T, agendamentosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agendamentos.
     * @param {agendamentosUpsertArgs} args - Arguments to update or create a Agendamentos.
     * @example
     * // Update or create a Agendamentos
     * const agendamentos = await prisma.agendamentos.upsert({
     *   create: {
     *     // ... data to create a Agendamentos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agendamentos we want to update
     *   }
     * })
     */
    upsert<T extends agendamentosUpsertArgs>(args: SelectSubset<T, agendamentosUpsertArgs<ExtArgs>>): Prisma__agendamentosClient<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamentosCountArgs} args - Arguments to filter Agendamentos to count.
     * @example
     * // Count the number of Agendamentos
     * const count = await prisma.agendamentos.count({
     *   where: {
     *     // ... the filter for the Agendamentos we want to count
     *   }
     * })
    **/
    count<T extends agendamentosCountArgs>(
      args?: Subset<T, agendamentosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendamentosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgendamentosAggregateArgs>(args: Subset<T, AgendamentosAggregateArgs>): Prisma.PrismaPromise<GetAgendamentosAggregateType<T>>

    /**
     * Group by Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamentosGroupByArgs} args - Group by arguments.
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
      T extends agendamentosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agendamentosGroupByArgs['orderBy'] }
        : { orderBy?: agendamentosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, agendamentosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendamentosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the agendamentos model
   */
  readonly fields: agendamentosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agendamentos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agendamentosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enderecos<T extends enderecosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, enderecosDefaultArgs<ExtArgs>>): Prisma__enderecosClient<$Result.GetResult<Prisma.$enderecosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pacientes<T extends pacientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pacientesDefaultArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profissionais<T extends profissionaisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, profissionaisDefaultArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the agendamentos model
   */
  interface agendamentosFieldRefs {
    readonly id_agendamento: FieldRef<"agendamentos", 'Int'>
    readonly profissionais_id_profissional: FieldRef<"agendamentos", 'Int'>
    readonly pacientes_id_paciente: FieldRef<"agendamentos", 'Int'>
    readonly enderecos_id_endereco: FieldRef<"agendamentos", 'Int'>
    readonly data_horario_inicio: FieldRef<"agendamentos", 'DateTime'>
    readonly duracao_consulta_minutos: FieldRef<"agendamentos", 'Int'>
    readonly data_criacao: FieldRef<"agendamentos", 'DateTime'>
    readonly status: FieldRef<"agendamentos", 'agendamentos_status'>
    readonly nota_atendimento: FieldRef<"agendamentos", 'Int'>
    readonly avaliacao: FieldRef<"agendamentos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * agendamentos findUnique
   */
  export type agendamentosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    /**
     * Filter, which agendamentos to fetch.
     */
    where: agendamentosWhereUniqueInput
  }

  /**
   * agendamentos findUniqueOrThrow
   */
  export type agendamentosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    /**
     * Filter, which agendamentos to fetch.
     */
    where: agendamentosWhereUniqueInput
  }

  /**
   * agendamentos findFirst
   */
  export type agendamentosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    /**
     * Filter, which agendamentos to fetch.
     */
    where?: agendamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendamentos to fetch.
     */
    orderBy?: agendamentosOrderByWithRelationInput | agendamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agendamentos.
     */
    cursor?: agendamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agendamentos.
     */
    distinct?: AgendamentosScalarFieldEnum | AgendamentosScalarFieldEnum[]
  }

  /**
   * agendamentos findFirstOrThrow
   */
  export type agendamentosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    /**
     * Filter, which agendamentos to fetch.
     */
    where?: agendamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendamentos to fetch.
     */
    orderBy?: agendamentosOrderByWithRelationInput | agendamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agendamentos.
     */
    cursor?: agendamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agendamentos.
     */
    distinct?: AgendamentosScalarFieldEnum | AgendamentosScalarFieldEnum[]
  }

  /**
   * agendamentos findMany
   */
  export type agendamentosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    /**
     * Filter, which agendamentos to fetch.
     */
    where?: agendamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendamentos to fetch.
     */
    orderBy?: agendamentosOrderByWithRelationInput | agendamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing agendamentos.
     */
    cursor?: agendamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendamentos.
     */
    skip?: number
    distinct?: AgendamentosScalarFieldEnum | AgendamentosScalarFieldEnum[]
  }

  /**
   * agendamentos create
   */
  export type agendamentosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    /**
     * The data needed to create a agendamentos.
     */
    data: XOR<agendamentosCreateInput, agendamentosUncheckedCreateInput>
  }

  /**
   * agendamentos createMany
   */
  export type agendamentosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agendamentos.
     */
    data: agendamentosCreateManyInput | agendamentosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agendamentos update
   */
  export type agendamentosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    /**
     * The data needed to update a agendamentos.
     */
    data: XOR<agendamentosUpdateInput, agendamentosUncheckedUpdateInput>
    /**
     * Choose, which agendamentos to update.
     */
    where: agendamentosWhereUniqueInput
  }

  /**
   * agendamentos updateMany
   */
  export type agendamentosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agendamentos.
     */
    data: XOR<agendamentosUpdateManyMutationInput, agendamentosUncheckedUpdateManyInput>
    /**
     * Filter which agendamentos to update
     */
    where?: agendamentosWhereInput
    /**
     * Limit how many agendamentos to update.
     */
    limit?: number
  }

  /**
   * agendamentos upsert
   */
  export type agendamentosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    /**
     * The filter to search for the agendamentos to update in case it exists.
     */
    where: agendamentosWhereUniqueInput
    /**
     * In case the agendamentos found by the `where` argument doesn't exist, create a new agendamentos with this data.
     */
    create: XOR<agendamentosCreateInput, agendamentosUncheckedCreateInput>
    /**
     * In case the agendamentos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agendamentosUpdateInput, agendamentosUncheckedUpdateInput>
  }

  /**
   * agendamentos delete
   */
  export type agendamentosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    /**
     * Filter which agendamentos to delete.
     */
    where: agendamentosWhereUniqueInput
  }

  /**
   * agendamentos deleteMany
   */
  export type agendamentosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agendamentos to delete
     */
    where?: agendamentosWhereInput
    /**
     * Limit how many agendamentos to delete.
     */
    limit?: number
  }

  /**
   * agendamentos without action
   */
  export type agendamentosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
  }


  /**
   * Model enderecos
   */

  export type AggregateEnderecos = {
    _count: EnderecosCountAggregateOutputType | null
    _avg: EnderecosAvgAggregateOutputType | null
    _sum: EnderecosSumAggregateOutputType | null
    _min: EnderecosMinAggregateOutputType | null
    _max: EnderecosMaxAggregateOutputType | null
  }

  export type EnderecosAvgAggregateOutputType = {
    id_endereco: number | null
  }

  export type EnderecosSumAggregateOutputType = {
    id_endereco: number | null
  }

  export type EnderecosMinAggregateOutputType = {
    id_endereco: number | null
    estado: string | null
    cidade: string | null
    apelido_endereco: string | null
    cep: string | null
    logradouro: string | null
    numero: string | null
    bairro: string | null
    complemento: string | null
  }

  export type EnderecosMaxAggregateOutputType = {
    id_endereco: number | null
    estado: string | null
    cidade: string | null
    apelido_endereco: string | null
    cep: string | null
    logradouro: string | null
    numero: string | null
    bairro: string | null
    complemento: string | null
  }

  export type EnderecosCountAggregateOutputType = {
    id_endereco: number
    estado: number
    cidade: number
    apelido_endereco: number
    cep: number
    logradouro: number
    numero: number
    bairro: number
    complemento: number
    _all: number
  }


  export type EnderecosAvgAggregateInputType = {
    id_endereco?: true
  }

  export type EnderecosSumAggregateInputType = {
    id_endereco?: true
  }

  export type EnderecosMinAggregateInputType = {
    id_endereco?: true
    estado?: true
    cidade?: true
    apelido_endereco?: true
    cep?: true
    logradouro?: true
    numero?: true
    bairro?: true
    complemento?: true
  }

  export type EnderecosMaxAggregateInputType = {
    id_endereco?: true
    estado?: true
    cidade?: true
    apelido_endereco?: true
    cep?: true
    logradouro?: true
    numero?: true
    bairro?: true
    complemento?: true
  }

  export type EnderecosCountAggregateInputType = {
    id_endereco?: true
    estado?: true
    cidade?: true
    apelido_endereco?: true
    cep?: true
    logradouro?: true
    numero?: true
    bairro?: true
    complemento?: true
    _all?: true
  }

  export type EnderecosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enderecos to aggregate.
     */
    where?: enderecosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecosOrderByWithRelationInput | enderecosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enderecosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enderecos
    **/
    _count?: true | EnderecosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnderecosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnderecosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecosMaxAggregateInputType
  }

  export type GetEnderecosAggregateType<T extends EnderecosAggregateArgs> = {
        [P in keyof T & keyof AggregateEnderecos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnderecos[P]>
      : GetScalarType<T[P], AggregateEnderecos[P]>
  }




  export type enderecosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enderecosWhereInput
    orderBy?: enderecosOrderByWithAggregationInput | enderecosOrderByWithAggregationInput[]
    by: EnderecosScalarFieldEnum[] | EnderecosScalarFieldEnum
    having?: enderecosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecosCountAggregateInputType | true
    _avg?: EnderecosAvgAggregateInputType
    _sum?: EnderecosSumAggregateInputType
    _min?: EnderecosMinAggregateInputType
    _max?: EnderecosMaxAggregateInputType
  }

  export type EnderecosGroupByOutputType = {
    id_endereco: number
    estado: string
    cidade: string
    apelido_endereco: string | null
    cep: string
    logradouro: string
    numero: string
    bairro: string
    complemento: string | null
    _count: EnderecosCountAggregateOutputType | null
    _avg: EnderecosAvgAggregateOutputType | null
    _sum: EnderecosSumAggregateOutputType | null
    _min: EnderecosMinAggregateOutputType | null
    _max: EnderecosMaxAggregateOutputType | null
  }

  type GetEnderecosGroupByPayload<T extends enderecosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecosGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecosGroupByOutputType[P]>
        }
      >
    >


  export type enderecosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_endereco?: boolean
    estado?: boolean
    cidade?: boolean
    apelido_endereco?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    bairro?: boolean
    complemento?: boolean
    agendamentos?: boolean | enderecos$agendamentosArgs<ExtArgs>
    pacientes?: boolean | enderecos$pacientesArgs<ExtArgs>
    profissionais?: boolean | enderecos$profissionaisArgs<ExtArgs>
    _count?: boolean | EnderecosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enderecos"]>



  export type enderecosSelectScalar = {
    id_endereco?: boolean
    estado?: boolean
    cidade?: boolean
    apelido_endereco?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    bairro?: boolean
    complemento?: boolean
  }

  export type enderecosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_endereco" | "estado" | "cidade" | "apelido_endereco" | "cep" | "logradouro" | "numero" | "bairro" | "complemento", ExtArgs["result"]["enderecos"]>
  export type enderecosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | enderecos$agendamentosArgs<ExtArgs>
    pacientes?: boolean | enderecos$pacientesArgs<ExtArgs>
    profissionais?: boolean | enderecos$profissionaisArgs<ExtArgs>
    _count?: boolean | EnderecosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $enderecosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "enderecos"
    objects: {
      agendamentos: Prisma.$agendamentosPayload<ExtArgs>[]
      pacientes: Prisma.$pacientesPayload<ExtArgs>[]
      profissionais: Prisma.$profissionaisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_endereco: number
      estado: string
      cidade: string
      apelido_endereco: string | null
      cep: string
      logradouro: string
      numero: string
      bairro: string
      complemento: string | null
    }, ExtArgs["result"]["enderecos"]>
    composites: {}
  }

  type enderecosGetPayload<S extends boolean | null | undefined | enderecosDefaultArgs> = $Result.GetResult<Prisma.$enderecosPayload, S>

  type enderecosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enderecosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnderecosCountAggregateInputType | true
    }

  export interface enderecosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['enderecos'], meta: { name: 'enderecos' } }
    /**
     * Find zero or one Enderecos that matches the filter.
     * @param {enderecosFindUniqueArgs} args - Arguments to find a Enderecos
     * @example
     * // Get one Enderecos
     * const enderecos = await prisma.enderecos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enderecosFindUniqueArgs>(args: SelectSubset<T, enderecosFindUniqueArgs<ExtArgs>>): Prisma__enderecosClient<$Result.GetResult<Prisma.$enderecosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enderecos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enderecosFindUniqueOrThrowArgs} args - Arguments to find a Enderecos
     * @example
     * // Get one Enderecos
     * const enderecos = await prisma.enderecos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enderecosFindUniqueOrThrowArgs>(args: SelectSubset<T, enderecosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enderecosClient<$Result.GetResult<Prisma.$enderecosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecosFindFirstArgs} args - Arguments to find a Enderecos
     * @example
     * // Get one Enderecos
     * const enderecos = await prisma.enderecos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enderecosFindFirstArgs>(args?: SelectSubset<T, enderecosFindFirstArgs<ExtArgs>>): Prisma__enderecosClient<$Result.GetResult<Prisma.$enderecosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enderecos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecosFindFirstOrThrowArgs} args - Arguments to find a Enderecos
     * @example
     * // Get one Enderecos
     * const enderecos = await prisma.enderecos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enderecosFindFirstOrThrowArgs>(args?: SelectSubset<T, enderecosFindFirstOrThrowArgs<ExtArgs>>): Prisma__enderecosClient<$Result.GetResult<Prisma.$enderecosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enderecos
     * const enderecos = await prisma.enderecos.findMany()
     * 
     * // Get first 10 Enderecos
     * const enderecos = await prisma.enderecos.findMany({ take: 10 })
     * 
     * // Only select the `id_endereco`
     * const enderecosWithId_enderecoOnly = await prisma.enderecos.findMany({ select: { id_endereco: true } })
     * 
     */
    findMany<T extends enderecosFindManyArgs>(args?: SelectSubset<T, enderecosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enderecos.
     * @param {enderecosCreateArgs} args - Arguments to create a Enderecos.
     * @example
     * // Create one Enderecos
     * const Enderecos = await prisma.enderecos.create({
     *   data: {
     *     // ... data to create a Enderecos
     *   }
     * })
     * 
     */
    create<T extends enderecosCreateArgs>(args: SelectSubset<T, enderecosCreateArgs<ExtArgs>>): Prisma__enderecosClient<$Result.GetResult<Prisma.$enderecosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enderecos.
     * @param {enderecosCreateManyArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const enderecos = await prisma.enderecos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enderecosCreateManyArgs>(args?: SelectSubset<T, enderecosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Enderecos.
     * @param {enderecosDeleteArgs} args - Arguments to delete one Enderecos.
     * @example
     * // Delete one Enderecos
     * const Enderecos = await prisma.enderecos.delete({
     *   where: {
     *     // ... filter to delete one Enderecos
     *   }
     * })
     * 
     */
    delete<T extends enderecosDeleteArgs>(args: SelectSubset<T, enderecosDeleteArgs<ExtArgs>>): Prisma__enderecosClient<$Result.GetResult<Prisma.$enderecosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enderecos.
     * @param {enderecosUpdateArgs} args - Arguments to update one Enderecos.
     * @example
     * // Update one Enderecos
     * const enderecos = await prisma.enderecos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enderecosUpdateArgs>(args: SelectSubset<T, enderecosUpdateArgs<ExtArgs>>): Prisma__enderecosClient<$Result.GetResult<Prisma.$enderecosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enderecos.
     * @param {enderecosDeleteManyArgs} args - Arguments to filter Enderecos to delete.
     * @example
     * // Delete a few Enderecos
     * const { count } = await prisma.enderecos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enderecosDeleteManyArgs>(args?: SelectSubset<T, enderecosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enderecos
     * const enderecos = await prisma.enderecos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enderecosUpdateManyArgs>(args: SelectSubset<T, enderecosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Enderecos.
     * @param {enderecosUpsertArgs} args - Arguments to update or create a Enderecos.
     * @example
     * // Update or create a Enderecos
     * const enderecos = await prisma.enderecos.upsert({
     *   create: {
     *     // ... data to create a Enderecos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enderecos we want to update
     *   }
     * })
     */
    upsert<T extends enderecosUpsertArgs>(args: SelectSubset<T, enderecosUpsertArgs<ExtArgs>>): Prisma__enderecosClient<$Result.GetResult<Prisma.$enderecosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecosCountArgs} args - Arguments to filter Enderecos to count.
     * @example
     * // Count the number of Enderecos
     * const count = await prisma.enderecos.count({
     *   where: {
     *     // ... the filter for the Enderecos we want to count
     *   }
     * })
    **/
    count<T extends enderecosCountArgs>(
      args?: Subset<T, enderecosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnderecosAggregateArgs>(args: Subset<T, EnderecosAggregateArgs>): Prisma.PrismaPromise<GetEnderecosAggregateType<T>>

    /**
     * Group by Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecosGroupByArgs} args - Group by arguments.
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
      T extends enderecosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enderecosGroupByArgs['orderBy'] }
        : { orderBy?: enderecosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, enderecosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the enderecos model
   */
  readonly fields: enderecosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for enderecos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enderecosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamentos<T extends enderecos$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, enderecos$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pacientes<T extends enderecos$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, enderecos$pacientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profissionais<T extends enderecos$profissionaisArgs<ExtArgs> = {}>(args?: Subset<T, enderecos$profissionaisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the enderecos model
   */
  interface enderecosFieldRefs {
    readonly id_endereco: FieldRef<"enderecos", 'Int'>
    readonly estado: FieldRef<"enderecos", 'String'>
    readonly cidade: FieldRef<"enderecos", 'String'>
    readonly apelido_endereco: FieldRef<"enderecos", 'String'>
    readonly cep: FieldRef<"enderecos", 'String'>
    readonly logradouro: FieldRef<"enderecos", 'String'>
    readonly numero: FieldRef<"enderecos", 'String'>
    readonly bairro: FieldRef<"enderecos", 'String'>
    readonly complemento: FieldRef<"enderecos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * enderecos findUnique
   */
  export type enderecosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecos
     */
    select?: enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecos
     */
    omit?: enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecosInclude<ExtArgs> | null
    /**
     * Filter, which enderecos to fetch.
     */
    where: enderecosWhereUniqueInput
  }

  /**
   * enderecos findUniqueOrThrow
   */
  export type enderecosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecos
     */
    select?: enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecos
     */
    omit?: enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecosInclude<ExtArgs> | null
    /**
     * Filter, which enderecos to fetch.
     */
    where: enderecosWhereUniqueInput
  }

  /**
   * enderecos findFirst
   */
  export type enderecosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecos
     */
    select?: enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecos
     */
    omit?: enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecosInclude<ExtArgs> | null
    /**
     * Filter, which enderecos to fetch.
     */
    where?: enderecosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecosOrderByWithRelationInput | enderecosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enderecos.
     */
    cursor?: enderecosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enderecos.
     */
    distinct?: EnderecosScalarFieldEnum | EnderecosScalarFieldEnum[]
  }

  /**
   * enderecos findFirstOrThrow
   */
  export type enderecosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecos
     */
    select?: enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecos
     */
    omit?: enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecosInclude<ExtArgs> | null
    /**
     * Filter, which enderecos to fetch.
     */
    where?: enderecosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecosOrderByWithRelationInput | enderecosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enderecos.
     */
    cursor?: enderecosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enderecos.
     */
    distinct?: EnderecosScalarFieldEnum | EnderecosScalarFieldEnum[]
  }

  /**
   * enderecos findMany
   */
  export type enderecosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecos
     */
    select?: enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecos
     */
    omit?: enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecosInclude<ExtArgs> | null
    /**
     * Filter, which enderecos to fetch.
     */
    where?: enderecosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecosOrderByWithRelationInput | enderecosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enderecos.
     */
    cursor?: enderecosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    distinct?: EnderecosScalarFieldEnum | EnderecosScalarFieldEnum[]
  }

  /**
   * enderecos create
   */
  export type enderecosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecos
     */
    select?: enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecos
     */
    omit?: enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecosInclude<ExtArgs> | null
    /**
     * The data needed to create a enderecos.
     */
    data: XOR<enderecosCreateInput, enderecosUncheckedCreateInput>
  }

  /**
   * enderecos createMany
   */
  export type enderecosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enderecos.
     */
    data: enderecosCreateManyInput | enderecosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * enderecos update
   */
  export type enderecosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecos
     */
    select?: enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecos
     */
    omit?: enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecosInclude<ExtArgs> | null
    /**
     * The data needed to update a enderecos.
     */
    data: XOR<enderecosUpdateInput, enderecosUncheckedUpdateInput>
    /**
     * Choose, which enderecos to update.
     */
    where: enderecosWhereUniqueInput
  }

  /**
   * enderecos updateMany
   */
  export type enderecosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enderecos.
     */
    data: XOR<enderecosUpdateManyMutationInput, enderecosUncheckedUpdateManyInput>
    /**
     * Filter which enderecos to update
     */
    where?: enderecosWhereInput
    /**
     * Limit how many enderecos to update.
     */
    limit?: number
  }

  /**
   * enderecos upsert
   */
  export type enderecosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecos
     */
    select?: enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecos
     */
    omit?: enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecosInclude<ExtArgs> | null
    /**
     * The filter to search for the enderecos to update in case it exists.
     */
    where: enderecosWhereUniqueInput
    /**
     * In case the enderecos found by the `where` argument doesn't exist, create a new enderecos with this data.
     */
    create: XOR<enderecosCreateInput, enderecosUncheckedCreateInput>
    /**
     * In case the enderecos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enderecosUpdateInput, enderecosUncheckedUpdateInput>
  }

  /**
   * enderecos delete
   */
  export type enderecosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecos
     */
    select?: enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecos
     */
    omit?: enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecosInclude<ExtArgs> | null
    /**
     * Filter which enderecos to delete.
     */
    where: enderecosWhereUniqueInput
  }

  /**
   * enderecos deleteMany
   */
  export type enderecosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enderecos to delete
     */
    where?: enderecosWhereInput
    /**
     * Limit how many enderecos to delete.
     */
    limit?: number
  }

  /**
   * enderecos.agendamentos
   */
  export type enderecos$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    where?: agendamentosWhereInput
    orderBy?: agendamentosOrderByWithRelationInput | agendamentosOrderByWithRelationInput[]
    cursor?: agendamentosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentosScalarFieldEnum | AgendamentosScalarFieldEnum[]
  }

  /**
   * enderecos.pacientes
   */
  export type enderecos$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    where?: pacientesWhereInput
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    cursor?: pacientesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * enderecos.profissionais
   */
  export type enderecos$profissionaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    where?: profissionaisWhereInput
    orderBy?: profissionaisOrderByWithRelationInput | profissionaisOrderByWithRelationInput[]
    cursor?: profissionaisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfissionaisScalarFieldEnum | ProfissionaisScalarFieldEnum[]
  }

  /**
   * enderecos without action
   */
  export type enderecosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enderecos
     */
    select?: enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enderecos
     */
    omit?: enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecosInclude<ExtArgs> | null
  }


  /**
   * Model especialidades
   */

  export type AggregateEspecialidades = {
    _count: EspecialidadesCountAggregateOutputType | null
    _avg: EspecialidadesAvgAggregateOutputType | null
    _sum: EspecialidadesSumAggregateOutputType | null
    _min: EspecialidadesMinAggregateOutputType | null
    _max: EspecialidadesMaxAggregateOutputType | null
  }

  export type EspecialidadesAvgAggregateOutputType = {
    id_especialidade: number | null
  }

  export type EspecialidadesSumAggregateOutputType = {
    id_especialidade: number | null
  }

  export type EspecialidadesMinAggregateOutputType = {
    id_especialidade: number | null
    nome_especialidade: string | null
  }

  export type EspecialidadesMaxAggregateOutputType = {
    id_especialidade: number | null
    nome_especialidade: string | null
  }

  export type EspecialidadesCountAggregateOutputType = {
    id_especialidade: number
    nome_especialidade: number
    _all: number
  }


  export type EspecialidadesAvgAggregateInputType = {
    id_especialidade?: true
  }

  export type EspecialidadesSumAggregateInputType = {
    id_especialidade?: true
  }

  export type EspecialidadesMinAggregateInputType = {
    id_especialidade?: true
    nome_especialidade?: true
  }

  export type EspecialidadesMaxAggregateInputType = {
    id_especialidade?: true
    nome_especialidade?: true
  }

  export type EspecialidadesCountAggregateInputType = {
    id_especialidade?: true
    nome_especialidade?: true
    _all?: true
  }

  export type EspecialidadesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which especialidades to aggregate.
     */
    where?: especialidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of especialidades to fetch.
     */
    orderBy?: especialidadesOrderByWithRelationInput | especialidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: especialidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned especialidades
    **/
    _count?: true | EspecialidadesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EspecialidadesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EspecialidadesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspecialidadesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspecialidadesMaxAggregateInputType
  }

  export type GetEspecialidadesAggregateType<T extends EspecialidadesAggregateArgs> = {
        [P in keyof T & keyof AggregateEspecialidades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspecialidades[P]>
      : GetScalarType<T[P], AggregateEspecialidades[P]>
  }




  export type especialidadesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: especialidadesWhereInput
    orderBy?: especialidadesOrderByWithAggregationInput | especialidadesOrderByWithAggregationInput[]
    by: EspecialidadesScalarFieldEnum[] | EspecialidadesScalarFieldEnum
    having?: especialidadesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspecialidadesCountAggregateInputType | true
    _avg?: EspecialidadesAvgAggregateInputType
    _sum?: EspecialidadesSumAggregateInputType
    _min?: EspecialidadesMinAggregateInputType
    _max?: EspecialidadesMaxAggregateInputType
  }

  export type EspecialidadesGroupByOutputType = {
    id_especialidade: number
    nome_especialidade: string
    _count: EspecialidadesCountAggregateOutputType | null
    _avg: EspecialidadesAvgAggregateOutputType | null
    _sum: EspecialidadesSumAggregateOutputType | null
    _min: EspecialidadesMinAggregateOutputType | null
    _max: EspecialidadesMaxAggregateOutputType | null
  }

  type GetEspecialidadesGroupByPayload<T extends especialidadesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspecialidadesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspecialidadesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspecialidadesGroupByOutputType[P]>
            : GetScalarType<T[P], EspecialidadesGroupByOutputType[P]>
        }
      >
    >


  export type especialidadesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_especialidade?: boolean
    nome_especialidade?: boolean
    profissional_especialidades?: boolean | especialidades$profissional_especialidadesArgs<ExtArgs>
    _count?: boolean | EspecialidadesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especialidades"]>



  export type especialidadesSelectScalar = {
    id_especialidade?: boolean
    nome_especialidade?: boolean
  }

  export type especialidadesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_especialidade" | "nome_especialidade", ExtArgs["result"]["especialidades"]>
  export type especialidadesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional_especialidades?: boolean | especialidades$profissional_especialidadesArgs<ExtArgs>
    _count?: boolean | EspecialidadesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $especialidadesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "especialidades"
    objects: {
      profissional_especialidades: Prisma.$profissional_especialidadesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_especialidade: number
      nome_especialidade: string
    }, ExtArgs["result"]["especialidades"]>
    composites: {}
  }

  type especialidadesGetPayload<S extends boolean | null | undefined | especialidadesDefaultArgs> = $Result.GetResult<Prisma.$especialidadesPayload, S>

  type especialidadesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<especialidadesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EspecialidadesCountAggregateInputType | true
    }

  export interface especialidadesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['especialidades'], meta: { name: 'especialidades' } }
    /**
     * Find zero or one Especialidades that matches the filter.
     * @param {especialidadesFindUniqueArgs} args - Arguments to find a Especialidades
     * @example
     * // Get one Especialidades
     * const especialidades = await prisma.especialidades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends especialidadesFindUniqueArgs>(args: SelectSubset<T, especialidadesFindUniqueArgs<ExtArgs>>): Prisma__especialidadesClient<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Especialidades that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {especialidadesFindUniqueOrThrowArgs} args - Arguments to find a Especialidades
     * @example
     * // Get one Especialidades
     * const especialidades = await prisma.especialidades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends especialidadesFindUniqueOrThrowArgs>(args: SelectSubset<T, especialidadesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__especialidadesClient<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {especialidadesFindFirstArgs} args - Arguments to find a Especialidades
     * @example
     * // Get one Especialidades
     * const especialidades = await prisma.especialidades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends especialidadesFindFirstArgs>(args?: SelectSubset<T, especialidadesFindFirstArgs<ExtArgs>>): Prisma__especialidadesClient<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {especialidadesFindFirstOrThrowArgs} args - Arguments to find a Especialidades
     * @example
     * // Get one Especialidades
     * const especialidades = await prisma.especialidades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends especialidadesFindFirstOrThrowArgs>(args?: SelectSubset<T, especialidadesFindFirstOrThrowArgs<ExtArgs>>): Prisma__especialidadesClient<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Especialidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {especialidadesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especialidades
     * const especialidades = await prisma.especialidades.findMany()
     * 
     * // Get first 10 Especialidades
     * const especialidades = await prisma.especialidades.findMany({ take: 10 })
     * 
     * // Only select the `id_especialidade`
     * const especialidadesWithId_especialidadeOnly = await prisma.especialidades.findMany({ select: { id_especialidade: true } })
     * 
     */
    findMany<T extends especialidadesFindManyArgs>(args?: SelectSubset<T, especialidadesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Especialidades.
     * @param {especialidadesCreateArgs} args - Arguments to create a Especialidades.
     * @example
     * // Create one Especialidades
     * const Especialidades = await prisma.especialidades.create({
     *   data: {
     *     // ... data to create a Especialidades
     *   }
     * })
     * 
     */
    create<T extends especialidadesCreateArgs>(args: SelectSubset<T, especialidadesCreateArgs<ExtArgs>>): Prisma__especialidadesClient<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Especialidades.
     * @param {especialidadesCreateManyArgs} args - Arguments to create many Especialidades.
     * @example
     * // Create many Especialidades
     * const especialidades = await prisma.especialidades.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends especialidadesCreateManyArgs>(args?: SelectSubset<T, especialidadesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Especialidades.
     * @param {especialidadesDeleteArgs} args - Arguments to delete one Especialidades.
     * @example
     * // Delete one Especialidades
     * const Especialidades = await prisma.especialidades.delete({
     *   where: {
     *     // ... filter to delete one Especialidades
     *   }
     * })
     * 
     */
    delete<T extends especialidadesDeleteArgs>(args: SelectSubset<T, especialidadesDeleteArgs<ExtArgs>>): Prisma__especialidadesClient<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Especialidades.
     * @param {especialidadesUpdateArgs} args - Arguments to update one Especialidades.
     * @example
     * // Update one Especialidades
     * const especialidades = await prisma.especialidades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends especialidadesUpdateArgs>(args: SelectSubset<T, especialidadesUpdateArgs<ExtArgs>>): Prisma__especialidadesClient<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Especialidades.
     * @param {especialidadesDeleteManyArgs} args - Arguments to filter Especialidades to delete.
     * @example
     * // Delete a few Especialidades
     * const { count } = await prisma.especialidades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends especialidadesDeleteManyArgs>(args?: SelectSubset<T, especialidadesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {especialidadesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especialidades
     * const especialidades = await prisma.especialidades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends especialidadesUpdateManyArgs>(args: SelectSubset<T, especialidadesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Especialidades.
     * @param {especialidadesUpsertArgs} args - Arguments to update or create a Especialidades.
     * @example
     * // Update or create a Especialidades
     * const especialidades = await prisma.especialidades.upsert({
     *   create: {
     *     // ... data to create a Especialidades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especialidades we want to update
     *   }
     * })
     */
    upsert<T extends especialidadesUpsertArgs>(args: SelectSubset<T, especialidadesUpsertArgs<ExtArgs>>): Prisma__especialidadesClient<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {especialidadesCountArgs} args - Arguments to filter Especialidades to count.
     * @example
     * // Count the number of Especialidades
     * const count = await prisma.especialidades.count({
     *   where: {
     *     // ... the filter for the Especialidades we want to count
     *   }
     * })
    **/
    count<T extends especialidadesCountArgs>(
      args?: Subset<T, especialidadesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspecialidadesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspecialidadesAggregateArgs>(args: Subset<T, EspecialidadesAggregateArgs>): Prisma.PrismaPromise<GetEspecialidadesAggregateType<T>>

    /**
     * Group by Especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {especialidadesGroupByArgs} args - Group by arguments.
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
      T extends especialidadesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: especialidadesGroupByArgs['orderBy'] }
        : { orderBy?: especialidadesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, especialidadesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecialidadesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the especialidades model
   */
  readonly fields: especialidadesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for especialidades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__especialidadesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profissional_especialidades<T extends especialidades$profissional_especialidadesArgs<ExtArgs> = {}>(args?: Subset<T, especialidades$profissional_especialidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissional_especialidadesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the especialidades model
   */
  interface especialidadesFieldRefs {
    readonly id_especialidade: FieldRef<"especialidades", 'Int'>
    readonly nome_especialidade: FieldRef<"especialidades", 'String'>
  }
    

  // Custom InputTypes
  /**
   * especialidades findUnique
   */
  export type especialidadesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the especialidades
     */
    omit?: especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
    /**
     * Filter, which especialidades to fetch.
     */
    where: especialidadesWhereUniqueInput
  }

  /**
   * especialidades findUniqueOrThrow
   */
  export type especialidadesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the especialidades
     */
    omit?: especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
    /**
     * Filter, which especialidades to fetch.
     */
    where: especialidadesWhereUniqueInput
  }

  /**
   * especialidades findFirst
   */
  export type especialidadesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the especialidades
     */
    omit?: especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
    /**
     * Filter, which especialidades to fetch.
     */
    where?: especialidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of especialidades to fetch.
     */
    orderBy?: especialidadesOrderByWithRelationInput | especialidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for especialidades.
     */
    cursor?: especialidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of especialidades.
     */
    distinct?: EspecialidadesScalarFieldEnum | EspecialidadesScalarFieldEnum[]
  }

  /**
   * especialidades findFirstOrThrow
   */
  export type especialidadesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the especialidades
     */
    omit?: especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
    /**
     * Filter, which especialidades to fetch.
     */
    where?: especialidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of especialidades to fetch.
     */
    orderBy?: especialidadesOrderByWithRelationInput | especialidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for especialidades.
     */
    cursor?: especialidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of especialidades.
     */
    distinct?: EspecialidadesScalarFieldEnum | EspecialidadesScalarFieldEnum[]
  }

  /**
   * especialidades findMany
   */
  export type especialidadesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the especialidades
     */
    omit?: especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
    /**
     * Filter, which especialidades to fetch.
     */
    where?: especialidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of especialidades to fetch.
     */
    orderBy?: especialidadesOrderByWithRelationInput | especialidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing especialidades.
     */
    cursor?: especialidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` especialidades.
     */
    skip?: number
    distinct?: EspecialidadesScalarFieldEnum | EspecialidadesScalarFieldEnum[]
  }

  /**
   * especialidades create
   */
  export type especialidadesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the especialidades
     */
    omit?: especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
    /**
     * The data needed to create a especialidades.
     */
    data: XOR<especialidadesCreateInput, especialidadesUncheckedCreateInput>
  }

  /**
   * especialidades createMany
   */
  export type especialidadesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many especialidades.
     */
    data: especialidadesCreateManyInput | especialidadesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * especialidades update
   */
  export type especialidadesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the especialidades
     */
    omit?: especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
    /**
     * The data needed to update a especialidades.
     */
    data: XOR<especialidadesUpdateInput, especialidadesUncheckedUpdateInput>
    /**
     * Choose, which especialidades to update.
     */
    where: especialidadesWhereUniqueInput
  }

  /**
   * especialidades updateMany
   */
  export type especialidadesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update especialidades.
     */
    data: XOR<especialidadesUpdateManyMutationInput, especialidadesUncheckedUpdateManyInput>
    /**
     * Filter which especialidades to update
     */
    where?: especialidadesWhereInput
    /**
     * Limit how many especialidades to update.
     */
    limit?: number
  }

  /**
   * especialidades upsert
   */
  export type especialidadesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the especialidades
     */
    omit?: especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
    /**
     * The filter to search for the especialidades to update in case it exists.
     */
    where: especialidadesWhereUniqueInput
    /**
     * In case the especialidades found by the `where` argument doesn't exist, create a new especialidades with this data.
     */
    create: XOR<especialidadesCreateInput, especialidadesUncheckedCreateInput>
    /**
     * In case the especialidades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<especialidadesUpdateInput, especialidadesUncheckedUpdateInput>
  }

  /**
   * especialidades delete
   */
  export type especialidadesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the especialidades
     */
    omit?: especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
    /**
     * Filter which especialidades to delete.
     */
    where: especialidadesWhereUniqueInput
  }

  /**
   * especialidades deleteMany
   */
  export type especialidadesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which especialidades to delete
     */
    where?: especialidadesWhereInput
    /**
     * Limit how many especialidades to delete.
     */
    limit?: number
  }

  /**
   * especialidades.profissional_especialidades
   */
  export type especialidades$profissional_especialidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_especialidades
     */
    select?: profissional_especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_especialidades
     */
    omit?: profissional_especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_especialidadesInclude<ExtArgs> | null
    where?: profissional_especialidadesWhereInput
    orderBy?: profissional_especialidadesOrderByWithRelationInput | profissional_especialidadesOrderByWithRelationInput[]
    cursor?: profissional_especialidadesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Profissional_especialidadesScalarFieldEnum | Profissional_especialidadesScalarFieldEnum[]
  }

  /**
   * especialidades without action
   */
  export type especialidadesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the especialidades
     */
    omit?: especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
  }


  /**
   * Model formacoes
   */

  export type AggregateFormacoes = {
    _count: FormacoesCountAggregateOutputType | null
    _avg: FormacoesAvgAggregateOutputType | null
    _sum: FormacoesSumAggregateOutputType | null
    _min: FormacoesMinAggregateOutputType | null
    _max: FormacoesMaxAggregateOutputType | null
  }

  export type FormacoesAvgAggregateOutputType = {
    id_formacao: number | null
  }

  export type FormacoesSumAggregateOutputType = {
    id_formacao: number | null
  }

  export type FormacoesMinAggregateOutputType = {
    id_formacao: number | null
    formacao: string | null
  }

  export type FormacoesMaxAggregateOutputType = {
    id_formacao: number | null
    formacao: string | null
  }

  export type FormacoesCountAggregateOutputType = {
    id_formacao: number
    formacao: number
    _all: number
  }


  export type FormacoesAvgAggregateInputType = {
    id_formacao?: true
  }

  export type FormacoesSumAggregateInputType = {
    id_formacao?: true
  }

  export type FormacoesMinAggregateInputType = {
    id_formacao?: true
    formacao?: true
  }

  export type FormacoesMaxAggregateInputType = {
    id_formacao?: true
    formacao?: true
  }

  export type FormacoesCountAggregateInputType = {
    id_formacao?: true
    formacao?: true
    _all?: true
  }

  export type FormacoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formacoes to aggregate.
     */
    where?: formacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formacoes to fetch.
     */
    orderBy?: formacoesOrderByWithRelationInput | formacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formacoes
    **/
    _count?: true | FormacoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormacoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormacoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormacoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormacoesMaxAggregateInputType
  }

  export type GetFormacoesAggregateType<T extends FormacoesAggregateArgs> = {
        [P in keyof T & keyof AggregateFormacoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormacoes[P]>
      : GetScalarType<T[P], AggregateFormacoes[P]>
  }




  export type formacoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formacoesWhereInput
    orderBy?: formacoesOrderByWithAggregationInput | formacoesOrderByWithAggregationInput[]
    by: FormacoesScalarFieldEnum[] | FormacoesScalarFieldEnum
    having?: formacoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormacoesCountAggregateInputType | true
    _avg?: FormacoesAvgAggregateInputType
    _sum?: FormacoesSumAggregateInputType
    _min?: FormacoesMinAggregateInputType
    _max?: FormacoesMaxAggregateInputType
  }

  export type FormacoesGroupByOutputType = {
    id_formacao: number
    formacao: string
    _count: FormacoesCountAggregateOutputType | null
    _avg: FormacoesAvgAggregateOutputType | null
    _sum: FormacoesSumAggregateOutputType | null
    _min: FormacoesMinAggregateOutputType | null
    _max: FormacoesMaxAggregateOutputType | null
  }

  type GetFormacoesGroupByPayload<T extends formacoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormacoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormacoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormacoesGroupByOutputType[P]>
            : GetScalarType<T[P], FormacoesGroupByOutputType[P]>
        }
      >
    >


  export type formacoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_formacao?: boolean
    formacao?: boolean
    profissional_formacoes?: boolean | formacoes$profissional_formacoesArgs<ExtArgs>
    _count?: boolean | FormacoesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formacoes"]>



  export type formacoesSelectScalar = {
    id_formacao?: boolean
    formacao?: boolean
  }

  export type formacoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_formacao" | "formacao", ExtArgs["result"]["formacoes"]>
  export type formacoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional_formacoes?: boolean | formacoes$profissional_formacoesArgs<ExtArgs>
    _count?: boolean | FormacoesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $formacoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formacoes"
    objects: {
      profissional_formacoes: Prisma.$profissional_formacoesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_formacao: number
      formacao: string
    }, ExtArgs["result"]["formacoes"]>
    composites: {}
  }

  type formacoesGetPayload<S extends boolean | null | undefined | formacoesDefaultArgs> = $Result.GetResult<Prisma.$formacoesPayload, S>

  type formacoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formacoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormacoesCountAggregateInputType | true
    }

  export interface formacoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formacoes'], meta: { name: 'formacoes' } }
    /**
     * Find zero or one Formacoes that matches the filter.
     * @param {formacoesFindUniqueArgs} args - Arguments to find a Formacoes
     * @example
     * // Get one Formacoes
     * const formacoes = await prisma.formacoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formacoesFindUniqueArgs>(args: SelectSubset<T, formacoesFindUniqueArgs<ExtArgs>>): Prisma__formacoesClient<$Result.GetResult<Prisma.$formacoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formacoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formacoesFindUniqueOrThrowArgs} args - Arguments to find a Formacoes
     * @example
     * // Get one Formacoes
     * const formacoes = await prisma.formacoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formacoesFindUniqueOrThrowArgs>(args: SelectSubset<T, formacoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formacoesClient<$Result.GetResult<Prisma.$formacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formacoesFindFirstArgs} args - Arguments to find a Formacoes
     * @example
     * // Get one Formacoes
     * const formacoes = await prisma.formacoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formacoesFindFirstArgs>(args?: SelectSubset<T, formacoesFindFirstArgs<ExtArgs>>): Prisma__formacoesClient<$Result.GetResult<Prisma.$formacoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formacoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formacoesFindFirstOrThrowArgs} args - Arguments to find a Formacoes
     * @example
     * // Get one Formacoes
     * const formacoes = await prisma.formacoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formacoesFindFirstOrThrowArgs>(args?: SelectSubset<T, formacoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__formacoesClient<$Result.GetResult<Prisma.$formacoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formacoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formacoes
     * const formacoes = await prisma.formacoes.findMany()
     * 
     * // Get first 10 Formacoes
     * const formacoes = await prisma.formacoes.findMany({ take: 10 })
     * 
     * // Only select the `id_formacao`
     * const formacoesWithId_formacaoOnly = await prisma.formacoes.findMany({ select: { id_formacao: true } })
     * 
     */
    findMany<T extends formacoesFindManyArgs>(args?: SelectSubset<T, formacoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formacoes.
     * @param {formacoesCreateArgs} args - Arguments to create a Formacoes.
     * @example
     * // Create one Formacoes
     * const Formacoes = await prisma.formacoes.create({
     *   data: {
     *     // ... data to create a Formacoes
     *   }
     * })
     * 
     */
    create<T extends formacoesCreateArgs>(args: SelectSubset<T, formacoesCreateArgs<ExtArgs>>): Prisma__formacoesClient<$Result.GetResult<Prisma.$formacoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formacoes.
     * @param {formacoesCreateManyArgs} args - Arguments to create many Formacoes.
     * @example
     * // Create many Formacoes
     * const formacoes = await prisma.formacoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formacoesCreateManyArgs>(args?: SelectSubset<T, formacoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Formacoes.
     * @param {formacoesDeleteArgs} args - Arguments to delete one Formacoes.
     * @example
     * // Delete one Formacoes
     * const Formacoes = await prisma.formacoes.delete({
     *   where: {
     *     // ... filter to delete one Formacoes
     *   }
     * })
     * 
     */
    delete<T extends formacoesDeleteArgs>(args: SelectSubset<T, formacoesDeleteArgs<ExtArgs>>): Prisma__formacoesClient<$Result.GetResult<Prisma.$formacoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formacoes.
     * @param {formacoesUpdateArgs} args - Arguments to update one Formacoes.
     * @example
     * // Update one Formacoes
     * const formacoes = await prisma.formacoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formacoesUpdateArgs>(args: SelectSubset<T, formacoesUpdateArgs<ExtArgs>>): Prisma__formacoesClient<$Result.GetResult<Prisma.$formacoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formacoes.
     * @param {formacoesDeleteManyArgs} args - Arguments to filter Formacoes to delete.
     * @example
     * // Delete a few Formacoes
     * const { count } = await prisma.formacoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formacoesDeleteManyArgs>(args?: SelectSubset<T, formacoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formacoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formacoes
     * const formacoes = await prisma.formacoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formacoesUpdateManyArgs>(args: SelectSubset<T, formacoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Formacoes.
     * @param {formacoesUpsertArgs} args - Arguments to update or create a Formacoes.
     * @example
     * // Update or create a Formacoes
     * const formacoes = await prisma.formacoes.upsert({
     *   create: {
     *     // ... data to create a Formacoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formacoes we want to update
     *   }
     * })
     */
    upsert<T extends formacoesUpsertArgs>(args: SelectSubset<T, formacoesUpsertArgs<ExtArgs>>): Prisma__formacoesClient<$Result.GetResult<Prisma.$formacoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formacoesCountArgs} args - Arguments to filter Formacoes to count.
     * @example
     * // Count the number of Formacoes
     * const count = await prisma.formacoes.count({
     *   where: {
     *     // ... the filter for the Formacoes we want to count
     *   }
     * })
    **/
    count<T extends formacoesCountArgs>(
      args?: Subset<T, formacoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormacoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormacoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormacoesAggregateArgs>(args: Subset<T, FormacoesAggregateArgs>): Prisma.PrismaPromise<GetFormacoesAggregateType<T>>

    /**
     * Group by Formacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formacoesGroupByArgs} args - Group by arguments.
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
      T extends formacoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formacoesGroupByArgs['orderBy'] }
        : { orderBy?: formacoesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, formacoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormacoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formacoes model
   */
  readonly fields: formacoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formacoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formacoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profissional_formacoes<T extends formacoes$profissional_formacoesArgs<ExtArgs> = {}>(args?: Subset<T, formacoes$profissional_formacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissional_formacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the formacoes model
   */
  interface formacoesFieldRefs {
    readonly id_formacao: FieldRef<"formacoes", 'Int'>
    readonly formacao: FieldRef<"formacoes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * formacoes findUnique
   */
  export type formacoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formacoes
     */
    select?: formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formacoes
     */
    omit?: formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formacoesInclude<ExtArgs> | null
    /**
     * Filter, which formacoes to fetch.
     */
    where: formacoesWhereUniqueInput
  }

  /**
   * formacoes findUniqueOrThrow
   */
  export type formacoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formacoes
     */
    select?: formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formacoes
     */
    omit?: formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formacoesInclude<ExtArgs> | null
    /**
     * Filter, which formacoes to fetch.
     */
    where: formacoesWhereUniqueInput
  }

  /**
   * formacoes findFirst
   */
  export type formacoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formacoes
     */
    select?: formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formacoes
     */
    omit?: formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formacoesInclude<ExtArgs> | null
    /**
     * Filter, which formacoes to fetch.
     */
    where?: formacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formacoes to fetch.
     */
    orderBy?: formacoesOrderByWithRelationInput | formacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formacoes.
     */
    cursor?: formacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formacoes.
     */
    distinct?: FormacoesScalarFieldEnum | FormacoesScalarFieldEnum[]
  }

  /**
   * formacoes findFirstOrThrow
   */
  export type formacoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formacoes
     */
    select?: formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formacoes
     */
    omit?: formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formacoesInclude<ExtArgs> | null
    /**
     * Filter, which formacoes to fetch.
     */
    where?: formacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formacoes to fetch.
     */
    orderBy?: formacoesOrderByWithRelationInput | formacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formacoes.
     */
    cursor?: formacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formacoes.
     */
    distinct?: FormacoesScalarFieldEnum | FormacoesScalarFieldEnum[]
  }

  /**
   * formacoes findMany
   */
  export type formacoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formacoes
     */
    select?: formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formacoes
     */
    omit?: formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formacoesInclude<ExtArgs> | null
    /**
     * Filter, which formacoes to fetch.
     */
    where?: formacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formacoes to fetch.
     */
    orderBy?: formacoesOrderByWithRelationInput | formacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formacoes.
     */
    cursor?: formacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formacoes.
     */
    skip?: number
    distinct?: FormacoesScalarFieldEnum | FormacoesScalarFieldEnum[]
  }

  /**
   * formacoes create
   */
  export type formacoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formacoes
     */
    select?: formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formacoes
     */
    omit?: formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formacoesInclude<ExtArgs> | null
    /**
     * The data needed to create a formacoes.
     */
    data: XOR<formacoesCreateInput, formacoesUncheckedCreateInput>
  }

  /**
   * formacoes createMany
   */
  export type formacoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formacoes.
     */
    data: formacoesCreateManyInput | formacoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * formacoes update
   */
  export type formacoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formacoes
     */
    select?: formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formacoes
     */
    omit?: formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formacoesInclude<ExtArgs> | null
    /**
     * The data needed to update a formacoes.
     */
    data: XOR<formacoesUpdateInput, formacoesUncheckedUpdateInput>
    /**
     * Choose, which formacoes to update.
     */
    where: formacoesWhereUniqueInput
  }

  /**
   * formacoes updateMany
   */
  export type formacoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formacoes.
     */
    data: XOR<formacoesUpdateManyMutationInput, formacoesUncheckedUpdateManyInput>
    /**
     * Filter which formacoes to update
     */
    where?: formacoesWhereInput
    /**
     * Limit how many formacoes to update.
     */
    limit?: number
  }

  /**
   * formacoes upsert
   */
  export type formacoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formacoes
     */
    select?: formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formacoes
     */
    omit?: formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formacoesInclude<ExtArgs> | null
    /**
     * The filter to search for the formacoes to update in case it exists.
     */
    where: formacoesWhereUniqueInput
    /**
     * In case the formacoes found by the `where` argument doesn't exist, create a new formacoes with this data.
     */
    create: XOR<formacoesCreateInput, formacoesUncheckedCreateInput>
    /**
     * In case the formacoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formacoesUpdateInput, formacoesUncheckedUpdateInput>
  }

  /**
   * formacoes delete
   */
  export type formacoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formacoes
     */
    select?: formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formacoes
     */
    omit?: formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formacoesInclude<ExtArgs> | null
    /**
     * Filter which formacoes to delete.
     */
    where: formacoesWhereUniqueInput
  }

  /**
   * formacoes deleteMany
   */
  export type formacoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formacoes to delete
     */
    where?: formacoesWhereInput
    /**
     * Limit how many formacoes to delete.
     */
    limit?: number
  }

  /**
   * formacoes.profissional_formacoes
   */
  export type formacoes$profissional_formacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_formacoes
     */
    select?: profissional_formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_formacoes
     */
    omit?: profissional_formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_formacoesInclude<ExtArgs> | null
    where?: profissional_formacoesWhereInput
    orderBy?: profissional_formacoesOrderByWithRelationInput | profissional_formacoesOrderByWithRelationInput[]
    cursor?: profissional_formacoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Profissional_formacoesScalarFieldEnum | Profissional_formacoesScalarFieldEnum[]
  }

  /**
   * formacoes without action
   */
  export type formacoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formacoes
     */
    select?: formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formacoes
     */
    omit?: formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formacoesInclude<ExtArgs> | null
  }


  /**
   * Model horarios_trabalho
   */

  export type AggregateHorarios_trabalho = {
    _count: Horarios_trabalhoCountAggregateOutputType | null
    _avg: Horarios_trabalhoAvgAggregateOutputType | null
    _sum: Horarios_trabalhoSumAggregateOutputType | null
    _min: Horarios_trabalhoMinAggregateOutputType | null
    _max: Horarios_trabalhoMaxAggregateOutputType | null
  }

  export type Horarios_trabalhoAvgAggregateOutputType = {
    id_horario_trabalho: number | null
    profissionais_id_profissional: number | null
    dia_semana: number | null
  }

  export type Horarios_trabalhoSumAggregateOutputType = {
    id_horario_trabalho: number | null
    profissionais_id_profissional: number | null
    dia_semana: number | null
  }

  export type Horarios_trabalhoMinAggregateOutputType = {
    id_horario_trabalho: number | null
    profissionais_id_profissional: number | null
    dia_semana: number | null
    horario_inicio: Date | null
    horario_fim: Date | null
  }

  export type Horarios_trabalhoMaxAggregateOutputType = {
    id_horario_trabalho: number | null
    profissionais_id_profissional: number | null
    dia_semana: number | null
    horario_inicio: Date | null
    horario_fim: Date | null
  }

  export type Horarios_trabalhoCountAggregateOutputType = {
    id_horario_trabalho: number
    profissionais_id_profissional: number
    dia_semana: number
    horario_inicio: number
    horario_fim: number
    _all: number
  }


  export type Horarios_trabalhoAvgAggregateInputType = {
    id_horario_trabalho?: true
    profissionais_id_profissional?: true
    dia_semana?: true
  }

  export type Horarios_trabalhoSumAggregateInputType = {
    id_horario_trabalho?: true
    profissionais_id_profissional?: true
    dia_semana?: true
  }

  export type Horarios_trabalhoMinAggregateInputType = {
    id_horario_trabalho?: true
    profissionais_id_profissional?: true
    dia_semana?: true
    horario_inicio?: true
    horario_fim?: true
  }

  export type Horarios_trabalhoMaxAggregateInputType = {
    id_horario_trabalho?: true
    profissionais_id_profissional?: true
    dia_semana?: true
    horario_inicio?: true
    horario_fim?: true
  }

  export type Horarios_trabalhoCountAggregateInputType = {
    id_horario_trabalho?: true
    profissionais_id_profissional?: true
    dia_semana?: true
    horario_inicio?: true
    horario_fim?: true
    _all?: true
  }

  export type Horarios_trabalhoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which horarios_trabalho to aggregate.
     */
    where?: horarios_trabalhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios_trabalhos to fetch.
     */
    orderBy?: horarios_trabalhoOrderByWithRelationInput | horarios_trabalhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: horarios_trabalhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios_trabalhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios_trabalhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned horarios_trabalhos
    **/
    _count?: true | Horarios_trabalhoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Horarios_trabalhoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Horarios_trabalhoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Horarios_trabalhoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Horarios_trabalhoMaxAggregateInputType
  }

  export type GetHorarios_trabalhoAggregateType<T extends Horarios_trabalhoAggregateArgs> = {
        [P in keyof T & keyof AggregateHorarios_trabalho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorarios_trabalho[P]>
      : GetScalarType<T[P], AggregateHorarios_trabalho[P]>
  }




  export type horarios_trabalhoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: horarios_trabalhoWhereInput
    orderBy?: horarios_trabalhoOrderByWithAggregationInput | horarios_trabalhoOrderByWithAggregationInput[]
    by: Horarios_trabalhoScalarFieldEnum[] | Horarios_trabalhoScalarFieldEnum
    having?: horarios_trabalhoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Horarios_trabalhoCountAggregateInputType | true
    _avg?: Horarios_trabalhoAvgAggregateInputType
    _sum?: Horarios_trabalhoSumAggregateInputType
    _min?: Horarios_trabalhoMinAggregateInputType
    _max?: Horarios_trabalhoMaxAggregateInputType
  }

  export type Horarios_trabalhoGroupByOutputType = {
    id_horario_trabalho: number
    profissionais_id_profissional: number
    dia_semana: number
    horario_inicio: Date
    horario_fim: Date
    _count: Horarios_trabalhoCountAggregateOutputType | null
    _avg: Horarios_trabalhoAvgAggregateOutputType | null
    _sum: Horarios_trabalhoSumAggregateOutputType | null
    _min: Horarios_trabalhoMinAggregateOutputType | null
    _max: Horarios_trabalhoMaxAggregateOutputType | null
  }

  type GetHorarios_trabalhoGroupByPayload<T extends horarios_trabalhoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Horarios_trabalhoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Horarios_trabalhoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Horarios_trabalhoGroupByOutputType[P]>
            : GetScalarType<T[P], Horarios_trabalhoGroupByOutputType[P]>
        }
      >
    >


  export type horarios_trabalhoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_horario_trabalho?: boolean
    profissionais_id_profissional?: boolean
    dia_semana?: boolean
    horario_inicio?: boolean
    horario_fim?: boolean
    profissionais?: boolean | profissionaisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horarios_trabalho"]>



  export type horarios_trabalhoSelectScalar = {
    id_horario_trabalho?: boolean
    profissionais_id_profissional?: boolean
    dia_semana?: boolean
    horario_inicio?: boolean
    horario_fim?: boolean
  }

  export type horarios_trabalhoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_horario_trabalho" | "profissionais_id_profissional" | "dia_semana" | "horario_inicio" | "horario_fim", ExtArgs["result"]["horarios_trabalho"]>
  export type horarios_trabalhoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissionais?: boolean | profissionaisDefaultArgs<ExtArgs>
  }

  export type $horarios_trabalhoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "horarios_trabalho"
    objects: {
      profissionais: Prisma.$profissionaisPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_horario_trabalho: number
      profissionais_id_profissional: number
      dia_semana: number
      horario_inicio: Date
      horario_fim: Date
    }, ExtArgs["result"]["horarios_trabalho"]>
    composites: {}
  }

  type horarios_trabalhoGetPayload<S extends boolean | null | undefined | horarios_trabalhoDefaultArgs> = $Result.GetResult<Prisma.$horarios_trabalhoPayload, S>

  type horarios_trabalhoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<horarios_trabalhoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Horarios_trabalhoCountAggregateInputType | true
    }

  export interface horarios_trabalhoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['horarios_trabalho'], meta: { name: 'horarios_trabalho' } }
    /**
     * Find zero or one Horarios_trabalho that matches the filter.
     * @param {horarios_trabalhoFindUniqueArgs} args - Arguments to find a Horarios_trabalho
     * @example
     * // Get one Horarios_trabalho
     * const horarios_trabalho = await prisma.horarios_trabalho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends horarios_trabalhoFindUniqueArgs>(args: SelectSubset<T, horarios_trabalhoFindUniqueArgs<ExtArgs>>): Prisma__horarios_trabalhoClient<$Result.GetResult<Prisma.$horarios_trabalhoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Horarios_trabalho that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {horarios_trabalhoFindUniqueOrThrowArgs} args - Arguments to find a Horarios_trabalho
     * @example
     * // Get one Horarios_trabalho
     * const horarios_trabalho = await prisma.horarios_trabalho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends horarios_trabalhoFindUniqueOrThrowArgs>(args: SelectSubset<T, horarios_trabalhoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__horarios_trabalhoClient<$Result.GetResult<Prisma.$horarios_trabalhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horarios_trabalho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horarios_trabalhoFindFirstArgs} args - Arguments to find a Horarios_trabalho
     * @example
     * // Get one Horarios_trabalho
     * const horarios_trabalho = await prisma.horarios_trabalho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends horarios_trabalhoFindFirstArgs>(args?: SelectSubset<T, horarios_trabalhoFindFirstArgs<ExtArgs>>): Prisma__horarios_trabalhoClient<$Result.GetResult<Prisma.$horarios_trabalhoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horarios_trabalho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horarios_trabalhoFindFirstOrThrowArgs} args - Arguments to find a Horarios_trabalho
     * @example
     * // Get one Horarios_trabalho
     * const horarios_trabalho = await prisma.horarios_trabalho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends horarios_trabalhoFindFirstOrThrowArgs>(args?: SelectSubset<T, horarios_trabalhoFindFirstOrThrowArgs<ExtArgs>>): Prisma__horarios_trabalhoClient<$Result.GetResult<Prisma.$horarios_trabalhoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Horarios_trabalhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horarios_trabalhoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Horarios_trabalhos
     * const horarios_trabalhos = await prisma.horarios_trabalho.findMany()
     * 
     * // Get first 10 Horarios_trabalhos
     * const horarios_trabalhos = await prisma.horarios_trabalho.findMany({ take: 10 })
     * 
     * // Only select the `id_horario_trabalho`
     * const horarios_trabalhoWithId_horario_trabalhoOnly = await prisma.horarios_trabalho.findMany({ select: { id_horario_trabalho: true } })
     * 
     */
    findMany<T extends horarios_trabalhoFindManyArgs>(args?: SelectSubset<T, horarios_trabalhoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$horarios_trabalhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Horarios_trabalho.
     * @param {horarios_trabalhoCreateArgs} args - Arguments to create a Horarios_trabalho.
     * @example
     * // Create one Horarios_trabalho
     * const Horarios_trabalho = await prisma.horarios_trabalho.create({
     *   data: {
     *     // ... data to create a Horarios_trabalho
     *   }
     * })
     * 
     */
    create<T extends horarios_trabalhoCreateArgs>(args: SelectSubset<T, horarios_trabalhoCreateArgs<ExtArgs>>): Prisma__horarios_trabalhoClient<$Result.GetResult<Prisma.$horarios_trabalhoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Horarios_trabalhos.
     * @param {horarios_trabalhoCreateManyArgs} args - Arguments to create many Horarios_trabalhos.
     * @example
     * // Create many Horarios_trabalhos
     * const horarios_trabalho = await prisma.horarios_trabalho.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends horarios_trabalhoCreateManyArgs>(args?: SelectSubset<T, horarios_trabalhoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Horarios_trabalho.
     * @param {horarios_trabalhoDeleteArgs} args - Arguments to delete one Horarios_trabalho.
     * @example
     * // Delete one Horarios_trabalho
     * const Horarios_trabalho = await prisma.horarios_trabalho.delete({
     *   where: {
     *     // ... filter to delete one Horarios_trabalho
     *   }
     * })
     * 
     */
    delete<T extends horarios_trabalhoDeleteArgs>(args: SelectSubset<T, horarios_trabalhoDeleteArgs<ExtArgs>>): Prisma__horarios_trabalhoClient<$Result.GetResult<Prisma.$horarios_trabalhoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Horarios_trabalho.
     * @param {horarios_trabalhoUpdateArgs} args - Arguments to update one Horarios_trabalho.
     * @example
     * // Update one Horarios_trabalho
     * const horarios_trabalho = await prisma.horarios_trabalho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends horarios_trabalhoUpdateArgs>(args: SelectSubset<T, horarios_trabalhoUpdateArgs<ExtArgs>>): Prisma__horarios_trabalhoClient<$Result.GetResult<Prisma.$horarios_trabalhoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Horarios_trabalhos.
     * @param {horarios_trabalhoDeleteManyArgs} args - Arguments to filter Horarios_trabalhos to delete.
     * @example
     * // Delete a few Horarios_trabalhos
     * const { count } = await prisma.horarios_trabalho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends horarios_trabalhoDeleteManyArgs>(args?: SelectSubset<T, horarios_trabalhoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Horarios_trabalhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horarios_trabalhoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Horarios_trabalhos
     * const horarios_trabalho = await prisma.horarios_trabalho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends horarios_trabalhoUpdateManyArgs>(args: SelectSubset<T, horarios_trabalhoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Horarios_trabalho.
     * @param {horarios_trabalhoUpsertArgs} args - Arguments to update or create a Horarios_trabalho.
     * @example
     * // Update or create a Horarios_trabalho
     * const horarios_trabalho = await prisma.horarios_trabalho.upsert({
     *   create: {
     *     // ... data to create a Horarios_trabalho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Horarios_trabalho we want to update
     *   }
     * })
     */
    upsert<T extends horarios_trabalhoUpsertArgs>(args: SelectSubset<T, horarios_trabalhoUpsertArgs<ExtArgs>>): Prisma__horarios_trabalhoClient<$Result.GetResult<Prisma.$horarios_trabalhoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Horarios_trabalhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horarios_trabalhoCountArgs} args - Arguments to filter Horarios_trabalhos to count.
     * @example
     * // Count the number of Horarios_trabalhos
     * const count = await prisma.horarios_trabalho.count({
     *   where: {
     *     // ... the filter for the Horarios_trabalhos we want to count
     *   }
     * })
    **/
    count<T extends horarios_trabalhoCountArgs>(
      args?: Subset<T, horarios_trabalhoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Horarios_trabalhoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Horarios_trabalho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Horarios_trabalhoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Horarios_trabalhoAggregateArgs>(args: Subset<T, Horarios_trabalhoAggregateArgs>): Prisma.PrismaPromise<GetHorarios_trabalhoAggregateType<T>>

    /**
     * Group by Horarios_trabalho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horarios_trabalhoGroupByArgs} args - Group by arguments.
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
      T extends horarios_trabalhoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: horarios_trabalhoGroupByArgs['orderBy'] }
        : { orderBy?: horarios_trabalhoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, horarios_trabalhoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorarios_trabalhoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the horarios_trabalho model
   */
  readonly fields: horarios_trabalhoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for horarios_trabalho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__horarios_trabalhoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profissionais<T extends profissionaisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, profissionaisDefaultArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the horarios_trabalho model
   */
  interface horarios_trabalhoFieldRefs {
    readonly id_horario_trabalho: FieldRef<"horarios_trabalho", 'Int'>
    readonly profissionais_id_profissional: FieldRef<"horarios_trabalho", 'Int'>
    readonly dia_semana: FieldRef<"horarios_trabalho", 'Int'>
    readonly horario_inicio: FieldRef<"horarios_trabalho", 'DateTime'>
    readonly horario_fim: FieldRef<"horarios_trabalho", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * horarios_trabalho findUnique
   */
  export type horarios_trabalhoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios_trabalho
     */
    select?: horarios_trabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios_trabalho
     */
    omit?: horarios_trabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarios_trabalhoInclude<ExtArgs> | null
    /**
     * Filter, which horarios_trabalho to fetch.
     */
    where: horarios_trabalhoWhereUniqueInput
  }

  /**
   * horarios_trabalho findUniqueOrThrow
   */
  export type horarios_trabalhoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios_trabalho
     */
    select?: horarios_trabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios_trabalho
     */
    omit?: horarios_trabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarios_trabalhoInclude<ExtArgs> | null
    /**
     * Filter, which horarios_trabalho to fetch.
     */
    where: horarios_trabalhoWhereUniqueInput
  }

  /**
   * horarios_trabalho findFirst
   */
  export type horarios_trabalhoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios_trabalho
     */
    select?: horarios_trabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios_trabalho
     */
    omit?: horarios_trabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarios_trabalhoInclude<ExtArgs> | null
    /**
     * Filter, which horarios_trabalho to fetch.
     */
    where?: horarios_trabalhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios_trabalhos to fetch.
     */
    orderBy?: horarios_trabalhoOrderByWithRelationInput | horarios_trabalhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for horarios_trabalhos.
     */
    cursor?: horarios_trabalhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios_trabalhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios_trabalhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of horarios_trabalhos.
     */
    distinct?: Horarios_trabalhoScalarFieldEnum | Horarios_trabalhoScalarFieldEnum[]
  }

  /**
   * horarios_trabalho findFirstOrThrow
   */
  export type horarios_trabalhoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios_trabalho
     */
    select?: horarios_trabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios_trabalho
     */
    omit?: horarios_trabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarios_trabalhoInclude<ExtArgs> | null
    /**
     * Filter, which horarios_trabalho to fetch.
     */
    where?: horarios_trabalhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios_trabalhos to fetch.
     */
    orderBy?: horarios_trabalhoOrderByWithRelationInput | horarios_trabalhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for horarios_trabalhos.
     */
    cursor?: horarios_trabalhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios_trabalhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios_trabalhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of horarios_trabalhos.
     */
    distinct?: Horarios_trabalhoScalarFieldEnum | Horarios_trabalhoScalarFieldEnum[]
  }

  /**
   * horarios_trabalho findMany
   */
  export type horarios_trabalhoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios_trabalho
     */
    select?: horarios_trabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios_trabalho
     */
    omit?: horarios_trabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarios_trabalhoInclude<ExtArgs> | null
    /**
     * Filter, which horarios_trabalhos to fetch.
     */
    where?: horarios_trabalhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios_trabalhos to fetch.
     */
    orderBy?: horarios_trabalhoOrderByWithRelationInput | horarios_trabalhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing horarios_trabalhos.
     */
    cursor?: horarios_trabalhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios_trabalhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios_trabalhos.
     */
    skip?: number
    distinct?: Horarios_trabalhoScalarFieldEnum | Horarios_trabalhoScalarFieldEnum[]
  }

  /**
   * horarios_trabalho create
   */
  export type horarios_trabalhoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios_trabalho
     */
    select?: horarios_trabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios_trabalho
     */
    omit?: horarios_trabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarios_trabalhoInclude<ExtArgs> | null
    /**
     * The data needed to create a horarios_trabalho.
     */
    data: XOR<horarios_trabalhoCreateInput, horarios_trabalhoUncheckedCreateInput>
  }

  /**
   * horarios_trabalho createMany
   */
  export type horarios_trabalhoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many horarios_trabalhos.
     */
    data: horarios_trabalhoCreateManyInput | horarios_trabalhoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * horarios_trabalho update
   */
  export type horarios_trabalhoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios_trabalho
     */
    select?: horarios_trabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios_trabalho
     */
    omit?: horarios_trabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarios_trabalhoInclude<ExtArgs> | null
    /**
     * The data needed to update a horarios_trabalho.
     */
    data: XOR<horarios_trabalhoUpdateInput, horarios_trabalhoUncheckedUpdateInput>
    /**
     * Choose, which horarios_trabalho to update.
     */
    where: horarios_trabalhoWhereUniqueInput
  }

  /**
   * horarios_trabalho updateMany
   */
  export type horarios_trabalhoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update horarios_trabalhos.
     */
    data: XOR<horarios_trabalhoUpdateManyMutationInput, horarios_trabalhoUncheckedUpdateManyInput>
    /**
     * Filter which horarios_trabalhos to update
     */
    where?: horarios_trabalhoWhereInput
    /**
     * Limit how many horarios_trabalhos to update.
     */
    limit?: number
  }

  /**
   * horarios_trabalho upsert
   */
  export type horarios_trabalhoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios_trabalho
     */
    select?: horarios_trabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios_trabalho
     */
    omit?: horarios_trabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarios_trabalhoInclude<ExtArgs> | null
    /**
     * The filter to search for the horarios_trabalho to update in case it exists.
     */
    where: horarios_trabalhoWhereUniqueInput
    /**
     * In case the horarios_trabalho found by the `where` argument doesn't exist, create a new horarios_trabalho with this data.
     */
    create: XOR<horarios_trabalhoCreateInput, horarios_trabalhoUncheckedCreateInput>
    /**
     * In case the horarios_trabalho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<horarios_trabalhoUpdateInput, horarios_trabalhoUncheckedUpdateInput>
  }

  /**
   * horarios_trabalho delete
   */
  export type horarios_trabalhoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios_trabalho
     */
    select?: horarios_trabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios_trabalho
     */
    omit?: horarios_trabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarios_trabalhoInclude<ExtArgs> | null
    /**
     * Filter which horarios_trabalho to delete.
     */
    where: horarios_trabalhoWhereUniqueInput
  }

  /**
   * horarios_trabalho deleteMany
   */
  export type horarios_trabalhoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which horarios_trabalhos to delete
     */
    where?: horarios_trabalhoWhereInput
    /**
     * Limit how many horarios_trabalhos to delete.
     */
    limit?: number
  }

  /**
   * horarios_trabalho without action
   */
  export type horarios_trabalhoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios_trabalho
     */
    select?: horarios_trabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios_trabalho
     */
    omit?: horarios_trabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarios_trabalhoInclude<ExtArgs> | null
  }


  /**
   * Model idiomas
   */

  export type AggregateIdiomas = {
    _count: IdiomasCountAggregateOutputType | null
    _avg: IdiomasAvgAggregateOutputType | null
    _sum: IdiomasSumAggregateOutputType | null
    _min: IdiomasMinAggregateOutputType | null
    _max: IdiomasMaxAggregateOutputType | null
  }

  export type IdiomasAvgAggregateOutputType = {
    id_idioma: number | null
  }

  export type IdiomasSumAggregateOutputType = {
    id_idioma: number | null
  }

  export type IdiomasMinAggregateOutputType = {
    id_idioma: number | null
    idioma: string | null
  }

  export type IdiomasMaxAggregateOutputType = {
    id_idioma: number | null
    idioma: string | null
  }

  export type IdiomasCountAggregateOutputType = {
    id_idioma: number
    idioma: number
    _all: number
  }


  export type IdiomasAvgAggregateInputType = {
    id_idioma?: true
  }

  export type IdiomasSumAggregateInputType = {
    id_idioma?: true
  }

  export type IdiomasMinAggregateInputType = {
    id_idioma?: true
    idioma?: true
  }

  export type IdiomasMaxAggregateInputType = {
    id_idioma?: true
    idioma?: true
  }

  export type IdiomasCountAggregateInputType = {
    id_idioma?: true
    idioma?: true
    _all?: true
  }

  export type IdiomasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idiomas to aggregate.
     */
    where?: idiomasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idiomas to fetch.
     */
    orderBy?: idiomasOrderByWithRelationInput | idiomasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idiomasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idiomas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idiomas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idiomas
    **/
    _count?: true | IdiomasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdiomasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdiomasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdiomasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdiomasMaxAggregateInputType
  }

  export type GetIdiomasAggregateType<T extends IdiomasAggregateArgs> = {
        [P in keyof T & keyof AggregateIdiomas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdiomas[P]>
      : GetScalarType<T[P], AggregateIdiomas[P]>
  }




  export type idiomasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idiomasWhereInput
    orderBy?: idiomasOrderByWithAggregationInput | idiomasOrderByWithAggregationInput[]
    by: IdiomasScalarFieldEnum[] | IdiomasScalarFieldEnum
    having?: idiomasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdiomasCountAggregateInputType | true
    _avg?: IdiomasAvgAggregateInputType
    _sum?: IdiomasSumAggregateInputType
    _min?: IdiomasMinAggregateInputType
    _max?: IdiomasMaxAggregateInputType
  }

  export type IdiomasGroupByOutputType = {
    id_idioma: number
    idioma: string
    _count: IdiomasCountAggregateOutputType | null
    _avg: IdiomasAvgAggregateOutputType | null
    _sum: IdiomasSumAggregateOutputType | null
    _min: IdiomasMinAggregateOutputType | null
    _max: IdiomasMaxAggregateOutputType | null
  }

  type GetIdiomasGroupByPayload<T extends idiomasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdiomasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdiomasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdiomasGroupByOutputType[P]>
            : GetScalarType<T[P], IdiomasGroupByOutputType[P]>
        }
      >
    >


  export type idiomasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_idioma?: boolean
    idioma?: boolean
    profissional_idiomas?: boolean | idiomas$profissional_idiomasArgs<ExtArgs>
    _count?: boolean | IdiomasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idiomas"]>



  export type idiomasSelectScalar = {
    id_idioma?: boolean
    idioma?: boolean
  }

  export type idiomasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_idioma" | "idioma", ExtArgs["result"]["idiomas"]>
  export type idiomasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional_idiomas?: boolean | idiomas$profissional_idiomasArgs<ExtArgs>
    _count?: boolean | IdiomasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $idiomasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idiomas"
    objects: {
      profissional_idiomas: Prisma.$profissional_idiomasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_idioma: number
      idioma: string
    }, ExtArgs["result"]["idiomas"]>
    composites: {}
  }

  type idiomasGetPayload<S extends boolean | null | undefined | idiomasDefaultArgs> = $Result.GetResult<Prisma.$idiomasPayload, S>

  type idiomasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idiomasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdiomasCountAggregateInputType | true
    }

  export interface idiomasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idiomas'], meta: { name: 'idiomas' } }
    /**
     * Find zero or one Idiomas that matches the filter.
     * @param {idiomasFindUniqueArgs} args - Arguments to find a Idiomas
     * @example
     * // Get one Idiomas
     * const idiomas = await prisma.idiomas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idiomasFindUniqueArgs>(args: SelectSubset<T, idiomasFindUniqueArgs<ExtArgs>>): Prisma__idiomasClient<$Result.GetResult<Prisma.$idiomasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idiomas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idiomasFindUniqueOrThrowArgs} args - Arguments to find a Idiomas
     * @example
     * // Get one Idiomas
     * const idiomas = await prisma.idiomas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idiomasFindUniqueOrThrowArgs>(args: SelectSubset<T, idiomasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idiomasClient<$Result.GetResult<Prisma.$idiomasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idiomas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idiomasFindFirstArgs} args - Arguments to find a Idiomas
     * @example
     * // Get one Idiomas
     * const idiomas = await prisma.idiomas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idiomasFindFirstArgs>(args?: SelectSubset<T, idiomasFindFirstArgs<ExtArgs>>): Prisma__idiomasClient<$Result.GetResult<Prisma.$idiomasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idiomas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idiomasFindFirstOrThrowArgs} args - Arguments to find a Idiomas
     * @example
     * // Get one Idiomas
     * const idiomas = await prisma.idiomas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idiomasFindFirstOrThrowArgs>(args?: SelectSubset<T, idiomasFindFirstOrThrowArgs<ExtArgs>>): Prisma__idiomasClient<$Result.GetResult<Prisma.$idiomasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idiomas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idiomasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idiomas
     * const idiomas = await prisma.idiomas.findMany()
     * 
     * // Get first 10 Idiomas
     * const idiomas = await prisma.idiomas.findMany({ take: 10 })
     * 
     * // Only select the `id_idioma`
     * const idiomasWithId_idiomaOnly = await prisma.idiomas.findMany({ select: { id_idioma: true } })
     * 
     */
    findMany<T extends idiomasFindManyArgs>(args?: SelectSubset<T, idiomasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idiomasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idiomas.
     * @param {idiomasCreateArgs} args - Arguments to create a Idiomas.
     * @example
     * // Create one Idiomas
     * const Idiomas = await prisma.idiomas.create({
     *   data: {
     *     // ... data to create a Idiomas
     *   }
     * })
     * 
     */
    create<T extends idiomasCreateArgs>(args: SelectSubset<T, idiomasCreateArgs<ExtArgs>>): Prisma__idiomasClient<$Result.GetResult<Prisma.$idiomasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idiomas.
     * @param {idiomasCreateManyArgs} args - Arguments to create many Idiomas.
     * @example
     * // Create many Idiomas
     * const idiomas = await prisma.idiomas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idiomasCreateManyArgs>(args?: SelectSubset<T, idiomasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Idiomas.
     * @param {idiomasDeleteArgs} args - Arguments to delete one Idiomas.
     * @example
     * // Delete one Idiomas
     * const Idiomas = await prisma.idiomas.delete({
     *   where: {
     *     // ... filter to delete one Idiomas
     *   }
     * })
     * 
     */
    delete<T extends idiomasDeleteArgs>(args: SelectSubset<T, idiomasDeleteArgs<ExtArgs>>): Prisma__idiomasClient<$Result.GetResult<Prisma.$idiomasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idiomas.
     * @param {idiomasUpdateArgs} args - Arguments to update one Idiomas.
     * @example
     * // Update one Idiomas
     * const idiomas = await prisma.idiomas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idiomasUpdateArgs>(args: SelectSubset<T, idiomasUpdateArgs<ExtArgs>>): Prisma__idiomasClient<$Result.GetResult<Prisma.$idiomasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idiomas.
     * @param {idiomasDeleteManyArgs} args - Arguments to filter Idiomas to delete.
     * @example
     * // Delete a few Idiomas
     * const { count } = await prisma.idiomas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idiomasDeleteManyArgs>(args?: SelectSubset<T, idiomasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idiomas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idiomasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idiomas
     * const idiomas = await prisma.idiomas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idiomasUpdateManyArgs>(args: SelectSubset<T, idiomasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Idiomas.
     * @param {idiomasUpsertArgs} args - Arguments to update or create a Idiomas.
     * @example
     * // Update or create a Idiomas
     * const idiomas = await prisma.idiomas.upsert({
     *   create: {
     *     // ... data to create a Idiomas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idiomas we want to update
     *   }
     * })
     */
    upsert<T extends idiomasUpsertArgs>(args: SelectSubset<T, idiomasUpsertArgs<ExtArgs>>): Prisma__idiomasClient<$Result.GetResult<Prisma.$idiomasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idiomas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idiomasCountArgs} args - Arguments to filter Idiomas to count.
     * @example
     * // Count the number of Idiomas
     * const count = await prisma.idiomas.count({
     *   where: {
     *     // ... the filter for the Idiomas we want to count
     *   }
     * })
    **/
    count<T extends idiomasCountArgs>(
      args?: Subset<T, idiomasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdiomasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idiomas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdiomasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IdiomasAggregateArgs>(args: Subset<T, IdiomasAggregateArgs>): Prisma.PrismaPromise<GetIdiomasAggregateType<T>>

    /**
     * Group by Idiomas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idiomasGroupByArgs} args - Group by arguments.
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
      T extends idiomasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idiomasGroupByArgs['orderBy'] }
        : { orderBy?: idiomasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, idiomasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdiomasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idiomas model
   */
  readonly fields: idiomasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idiomas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idiomasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profissional_idiomas<T extends idiomas$profissional_idiomasArgs<ExtArgs> = {}>(args?: Subset<T, idiomas$profissional_idiomasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissional_idiomasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the idiomas model
   */
  interface idiomasFieldRefs {
    readonly id_idioma: FieldRef<"idiomas", 'Int'>
    readonly idioma: FieldRef<"idiomas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * idiomas findUnique
   */
  export type idiomasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idiomas
     */
    select?: idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idiomas
     */
    omit?: idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomasInclude<ExtArgs> | null
    /**
     * Filter, which idiomas to fetch.
     */
    where: idiomasWhereUniqueInput
  }

  /**
   * idiomas findUniqueOrThrow
   */
  export type idiomasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idiomas
     */
    select?: idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idiomas
     */
    omit?: idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomasInclude<ExtArgs> | null
    /**
     * Filter, which idiomas to fetch.
     */
    where: idiomasWhereUniqueInput
  }

  /**
   * idiomas findFirst
   */
  export type idiomasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idiomas
     */
    select?: idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idiomas
     */
    omit?: idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomasInclude<ExtArgs> | null
    /**
     * Filter, which idiomas to fetch.
     */
    where?: idiomasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idiomas to fetch.
     */
    orderBy?: idiomasOrderByWithRelationInput | idiomasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idiomas.
     */
    cursor?: idiomasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idiomas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idiomas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idiomas.
     */
    distinct?: IdiomasScalarFieldEnum | IdiomasScalarFieldEnum[]
  }

  /**
   * idiomas findFirstOrThrow
   */
  export type idiomasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idiomas
     */
    select?: idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idiomas
     */
    omit?: idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomasInclude<ExtArgs> | null
    /**
     * Filter, which idiomas to fetch.
     */
    where?: idiomasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idiomas to fetch.
     */
    orderBy?: idiomasOrderByWithRelationInput | idiomasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idiomas.
     */
    cursor?: idiomasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idiomas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idiomas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idiomas.
     */
    distinct?: IdiomasScalarFieldEnum | IdiomasScalarFieldEnum[]
  }

  /**
   * idiomas findMany
   */
  export type idiomasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idiomas
     */
    select?: idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idiomas
     */
    omit?: idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomasInclude<ExtArgs> | null
    /**
     * Filter, which idiomas to fetch.
     */
    where?: idiomasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idiomas to fetch.
     */
    orderBy?: idiomasOrderByWithRelationInput | idiomasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idiomas.
     */
    cursor?: idiomasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idiomas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idiomas.
     */
    skip?: number
    distinct?: IdiomasScalarFieldEnum | IdiomasScalarFieldEnum[]
  }

  /**
   * idiomas create
   */
  export type idiomasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idiomas
     */
    select?: idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idiomas
     */
    omit?: idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomasInclude<ExtArgs> | null
    /**
     * The data needed to create a idiomas.
     */
    data: XOR<idiomasCreateInput, idiomasUncheckedCreateInput>
  }

  /**
   * idiomas createMany
   */
  export type idiomasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idiomas.
     */
    data: idiomasCreateManyInput | idiomasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idiomas update
   */
  export type idiomasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idiomas
     */
    select?: idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idiomas
     */
    omit?: idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomasInclude<ExtArgs> | null
    /**
     * The data needed to update a idiomas.
     */
    data: XOR<idiomasUpdateInput, idiomasUncheckedUpdateInput>
    /**
     * Choose, which idiomas to update.
     */
    where: idiomasWhereUniqueInput
  }

  /**
   * idiomas updateMany
   */
  export type idiomasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idiomas.
     */
    data: XOR<idiomasUpdateManyMutationInput, idiomasUncheckedUpdateManyInput>
    /**
     * Filter which idiomas to update
     */
    where?: idiomasWhereInput
    /**
     * Limit how many idiomas to update.
     */
    limit?: number
  }

  /**
   * idiomas upsert
   */
  export type idiomasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idiomas
     */
    select?: idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idiomas
     */
    omit?: idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomasInclude<ExtArgs> | null
    /**
     * The filter to search for the idiomas to update in case it exists.
     */
    where: idiomasWhereUniqueInput
    /**
     * In case the idiomas found by the `where` argument doesn't exist, create a new idiomas with this data.
     */
    create: XOR<idiomasCreateInput, idiomasUncheckedCreateInput>
    /**
     * In case the idiomas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idiomasUpdateInput, idiomasUncheckedUpdateInput>
  }

  /**
   * idiomas delete
   */
  export type idiomasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idiomas
     */
    select?: idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idiomas
     */
    omit?: idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomasInclude<ExtArgs> | null
    /**
     * Filter which idiomas to delete.
     */
    where: idiomasWhereUniqueInput
  }

  /**
   * idiomas deleteMany
   */
  export type idiomasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idiomas to delete
     */
    where?: idiomasWhereInput
    /**
     * Limit how many idiomas to delete.
     */
    limit?: number
  }

  /**
   * idiomas.profissional_idiomas
   */
  export type idiomas$profissional_idiomasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_idiomas
     */
    select?: profissional_idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_idiomas
     */
    omit?: profissional_idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_idiomasInclude<ExtArgs> | null
    where?: profissional_idiomasWhereInput
    orderBy?: profissional_idiomasOrderByWithRelationInput | profissional_idiomasOrderByWithRelationInput[]
    cursor?: profissional_idiomasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Profissional_idiomasScalarFieldEnum | Profissional_idiomasScalarFieldEnum[]
  }

  /**
   * idiomas without action
   */
  export type idiomasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idiomas
     */
    select?: idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idiomas
     */
    omit?: idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomasInclude<ExtArgs> | null
  }


  /**
   * Model pacientes
   */

  export type AggregatePacientes = {
    _count: PacientesCountAggregateOutputType | null
    _avg: PacientesAvgAggregateOutputType | null
    _sum: PacientesSumAggregateOutputType | null
    _min: PacientesMinAggregateOutputType | null
    _max: PacientesMaxAggregateOutputType | null
  }

  export type PacientesAvgAggregateOutputType = {
    id_paciente: number | null
    usuarios_id_usuario: number | null
    enderecos_id_endereco: number | null
  }

  export type PacientesSumAggregateOutputType = {
    id_paciente: number | null
    usuarios_id_usuario: number | null
    enderecos_id_endereco: number | null
  }

  export type PacientesMinAggregateOutputType = {
    id_paciente: number | null
    usuarios_id_usuario: number | null
    enderecos_id_endereco: number | null
    nome_paciente: string | null
    cpf: string | null
    data_nascimento: Date | null
    nivel_tea: $Enums.pacientes_nivel_tea | null
    e_titular: boolean | null
    nome_titular: string | null
  }

  export type PacientesMaxAggregateOutputType = {
    id_paciente: number | null
    usuarios_id_usuario: number | null
    enderecos_id_endereco: number | null
    nome_paciente: string | null
    cpf: string | null
    data_nascimento: Date | null
    nivel_tea: $Enums.pacientes_nivel_tea | null
    e_titular: boolean | null
    nome_titular: string | null
  }

  export type PacientesCountAggregateOutputType = {
    id_paciente: number
    usuarios_id_usuario: number
    enderecos_id_endereco: number
    nome_paciente: number
    cpf: number
    data_nascimento: number
    nivel_tea: number
    e_titular: number
    nome_titular: number
    _all: number
  }


  export type PacientesAvgAggregateInputType = {
    id_paciente?: true
    usuarios_id_usuario?: true
    enderecos_id_endereco?: true
  }

  export type PacientesSumAggregateInputType = {
    id_paciente?: true
    usuarios_id_usuario?: true
    enderecos_id_endereco?: true
  }

  export type PacientesMinAggregateInputType = {
    id_paciente?: true
    usuarios_id_usuario?: true
    enderecos_id_endereco?: true
    nome_paciente?: true
    cpf?: true
    data_nascimento?: true
    nivel_tea?: true
    e_titular?: true
    nome_titular?: true
  }

  export type PacientesMaxAggregateInputType = {
    id_paciente?: true
    usuarios_id_usuario?: true
    enderecos_id_endereco?: true
    nome_paciente?: true
    cpf?: true
    data_nascimento?: true
    nivel_tea?: true
    e_titular?: true
    nome_titular?: true
  }

  export type PacientesCountAggregateInputType = {
    id_paciente?: true
    usuarios_id_usuario?: true
    enderecos_id_endereco?: true
    nome_paciente?: true
    cpf?: true
    data_nascimento?: true
    nivel_tea?: true
    e_titular?: true
    nome_titular?: true
    _all?: true
  }

  export type PacientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pacientes to aggregate.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pacientes
    **/
    _count?: true | PacientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacientesMaxAggregateInputType
  }

  export type GetPacientesAggregateType<T extends PacientesAggregateArgs> = {
        [P in keyof T & keyof AggregatePacientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePacientes[P]>
      : GetScalarType<T[P], AggregatePacientes[P]>
  }




  export type pacientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pacientesWhereInput
    orderBy?: pacientesOrderByWithAggregationInput | pacientesOrderByWithAggregationInput[]
    by: PacientesScalarFieldEnum[] | PacientesScalarFieldEnum
    having?: pacientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacientesCountAggregateInputType | true
    _avg?: PacientesAvgAggregateInputType
    _sum?: PacientesSumAggregateInputType
    _min?: PacientesMinAggregateInputType
    _max?: PacientesMaxAggregateInputType
  }

  export type PacientesGroupByOutputType = {
    id_paciente: number
    usuarios_id_usuario: number
    enderecos_id_endereco: number
    nome_paciente: string
    cpf: string
    data_nascimento: Date
    nivel_tea: $Enums.pacientes_nivel_tea
    e_titular: boolean
    nome_titular: string | null
    _count: PacientesCountAggregateOutputType | null
    _avg: PacientesAvgAggregateOutputType | null
    _sum: PacientesSumAggregateOutputType | null
    _min: PacientesMinAggregateOutputType | null
    _max: PacientesMaxAggregateOutputType | null
  }

  type GetPacientesGroupByPayload<T extends pacientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacientesGroupByOutputType[P]>
            : GetScalarType<T[P], PacientesGroupByOutputType[P]>
        }
      >
    >


  export type pacientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_paciente?: boolean
    usuarios_id_usuario?: boolean
    enderecos_id_endereco?: boolean
    nome_paciente?: boolean
    cpf?: boolean
    data_nascimento?: boolean
    nivel_tea?: boolean
    e_titular?: boolean
    nome_titular?: boolean
    agendamentos?: boolean | pacientes$agendamentosArgs<ExtArgs>
    enderecos?: boolean | enderecosDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    _count?: boolean | PacientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacientes"]>



  export type pacientesSelectScalar = {
    id_paciente?: boolean
    usuarios_id_usuario?: boolean
    enderecos_id_endereco?: boolean
    nome_paciente?: boolean
    cpf?: boolean
    data_nascimento?: boolean
    nivel_tea?: boolean
    e_titular?: boolean
    nome_titular?: boolean
  }

  export type pacientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_paciente" | "usuarios_id_usuario" | "enderecos_id_endereco" | "nome_paciente" | "cpf" | "data_nascimento" | "nivel_tea" | "e_titular" | "nome_titular", ExtArgs["result"]["pacientes"]>
  export type pacientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | pacientes$agendamentosArgs<ExtArgs>
    enderecos?: boolean | enderecosDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    _count?: boolean | PacientesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $pacientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pacientes"
    objects: {
      agendamentos: Prisma.$agendamentosPayload<ExtArgs>[]
      enderecos: Prisma.$enderecosPayload<ExtArgs>
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_paciente: number
      usuarios_id_usuario: number
      enderecos_id_endereco: number
      nome_paciente: string
      cpf: string
      data_nascimento: Date
      nivel_tea: $Enums.pacientes_nivel_tea
      e_titular: boolean
      nome_titular: string | null
    }, ExtArgs["result"]["pacientes"]>
    composites: {}
  }

  type pacientesGetPayload<S extends boolean | null | undefined | pacientesDefaultArgs> = $Result.GetResult<Prisma.$pacientesPayload, S>

  type pacientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pacientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacientesCountAggregateInputType | true
    }

  export interface pacientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pacientes'], meta: { name: 'pacientes' } }
    /**
     * Find zero or one Pacientes that matches the filter.
     * @param {pacientesFindUniqueArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pacientesFindUniqueArgs>(args: SelectSubset<T, pacientesFindUniqueArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pacientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pacientesFindUniqueOrThrowArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pacientesFindUniqueOrThrowArgs>(args: SelectSubset<T, pacientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindFirstArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pacientesFindFirstArgs>(args?: SelectSubset<T, pacientesFindFirstArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pacientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindFirstOrThrowArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pacientesFindFirstOrThrowArgs>(args?: SelectSubset<T, pacientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.pacientes.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.pacientes.findMany({ take: 10 })
     * 
     * // Only select the `id_paciente`
     * const pacientesWithId_pacienteOnly = await prisma.pacientes.findMany({ select: { id_paciente: true } })
     * 
     */
    findMany<T extends pacientesFindManyArgs>(args?: SelectSubset<T, pacientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pacientes.
     * @param {pacientesCreateArgs} args - Arguments to create a Pacientes.
     * @example
     * // Create one Pacientes
     * const Pacientes = await prisma.pacientes.create({
     *   data: {
     *     // ... data to create a Pacientes
     *   }
     * })
     * 
     */
    create<T extends pacientesCreateArgs>(args: SelectSubset<T, pacientesCreateArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {pacientesCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const pacientes = await prisma.pacientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pacientesCreateManyArgs>(args?: SelectSubset<T, pacientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pacientes.
     * @param {pacientesDeleteArgs} args - Arguments to delete one Pacientes.
     * @example
     * // Delete one Pacientes
     * const Pacientes = await prisma.pacientes.delete({
     *   where: {
     *     // ... filter to delete one Pacientes
     *   }
     * })
     * 
     */
    delete<T extends pacientesDeleteArgs>(args: SelectSubset<T, pacientesDeleteArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pacientes.
     * @param {pacientesUpdateArgs} args - Arguments to update one Pacientes.
     * @example
     * // Update one Pacientes
     * const pacientes = await prisma.pacientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pacientesUpdateArgs>(args: SelectSubset<T, pacientesUpdateArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {pacientesDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.pacientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pacientesDeleteManyArgs>(args?: SelectSubset<T, pacientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const pacientes = await prisma.pacientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pacientesUpdateManyArgs>(args: SelectSubset<T, pacientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pacientes.
     * @param {pacientesUpsertArgs} args - Arguments to update or create a Pacientes.
     * @example
     * // Update or create a Pacientes
     * const pacientes = await prisma.pacientes.upsert({
     *   create: {
     *     // ... data to create a Pacientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pacientes we want to update
     *   }
     * })
     */
    upsert<T extends pacientesUpsertArgs>(args: SelectSubset<T, pacientesUpsertArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.pacientes.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends pacientesCountArgs>(
      args?: Subset<T, pacientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacientesAggregateArgs>(args: Subset<T, PacientesAggregateArgs>): Prisma.PrismaPromise<GetPacientesAggregateType<T>>

    /**
     * Group by Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesGroupByArgs} args - Group by arguments.
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
      T extends pacientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pacientesGroupByArgs['orderBy'] }
        : { orderBy?: pacientesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pacientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pacientes model
   */
  readonly fields: pacientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pacientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pacientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamentos<T extends pacientes$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enderecos<T extends enderecosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, enderecosDefaultArgs<ExtArgs>>): Prisma__enderecosClient<$Result.GetResult<Prisma.$enderecosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pacientes model
   */
  interface pacientesFieldRefs {
    readonly id_paciente: FieldRef<"pacientes", 'Int'>
    readonly usuarios_id_usuario: FieldRef<"pacientes", 'Int'>
    readonly enderecos_id_endereco: FieldRef<"pacientes", 'Int'>
    readonly nome_paciente: FieldRef<"pacientes", 'String'>
    readonly cpf: FieldRef<"pacientes", 'String'>
    readonly data_nascimento: FieldRef<"pacientes", 'DateTime'>
    readonly nivel_tea: FieldRef<"pacientes", 'pacientes_nivel_tea'>
    readonly e_titular: FieldRef<"pacientes", 'Boolean'>
    readonly nome_titular: FieldRef<"pacientes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pacientes findUnique
   */
  export type pacientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes findUniqueOrThrow
   */
  export type pacientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes findFirst
   */
  export type pacientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes findFirstOrThrow
   */
  export type pacientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes findMany
   */
  export type pacientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes create
   */
  export type pacientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The data needed to create a pacientes.
     */
    data: XOR<pacientesCreateInput, pacientesUncheckedCreateInput>
  }

  /**
   * pacientes createMany
   */
  export type pacientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pacientes.
     */
    data: pacientesCreateManyInput | pacientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pacientes update
   */
  export type pacientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The data needed to update a pacientes.
     */
    data: XOR<pacientesUpdateInput, pacientesUncheckedUpdateInput>
    /**
     * Choose, which pacientes to update.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes updateMany
   */
  export type pacientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pacientes.
     */
    data: XOR<pacientesUpdateManyMutationInput, pacientesUncheckedUpdateManyInput>
    /**
     * Filter which pacientes to update
     */
    where?: pacientesWhereInput
    /**
     * Limit how many pacientes to update.
     */
    limit?: number
  }

  /**
   * pacientes upsert
   */
  export type pacientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The filter to search for the pacientes to update in case it exists.
     */
    where: pacientesWhereUniqueInput
    /**
     * In case the pacientes found by the `where` argument doesn't exist, create a new pacientes with this data.
     */
    create: XOR<pacientesCreateInput, pacientesUncheckedCreateInput>
    /**
     * In case the pacientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pacientesUpdateInput, pacientesUncheckedUpdateInput>
  }

  /**
   * pacientes delete
   */
  export type pacientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter which pacientes to delete.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes deleteMany
   */
  export type pacientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pacientes to delete
     */
    where?: pacientesWhereInput
    /**
     * Limit how many pacientes to delete.
     */
    limit?: number
  }

  /**
   * pacientes.agendamentos
   */
  export type pacientes$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    where?: agendamentosWhereInput
    orderBy?: agendamentosOrderByWithRelationInput | agendamentosOrderByWithRelationInput[]
    cursor?: agendamentosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentosScalarFieldEnum | AgendamentosScalarFieldEnum[]
  }

  /**
   * pacientes without action
   */
  export type pacientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
  }


  /**
   * Model profissionais
   */

  export type AggregateProfissionais = {
    _count: ProfissionaisCountAggregateOutputType | null
    _avg: ProfissionaisAvgAggregateOutputType | null
    _sum: ProfissionaisSumAggregateOutputType | null
    _min: ProfissionaisMinAggregateOutputType | null
    _max: ProfissionaisMaxAggregateOutputType | null
  }

  export type ProfissionaisAvgAggregateOutputType = {
    id_profissional: number | null
    usuarios_id_usuario: number | null
    enderecos_id_endereco: number | null
    valor_consulta: Decimal | null
  }

  export type ProfissionaisSumAggregateOutputType = {
    id_profissional: number | null
    usuarios_id_usuario: number | null
    enderecos_id_endereco: number | null
    valor_consulta: Decimal | null
  }

  export type ProfissionaisMinAggregateOutputType = {
    id_profissional: number | null
    usuarios_id_usuario: number | null
    enderecos_id_endereco: number | null
    foto_perfil_url: string | null
    nome: string | null
    cpf: string | null
    tipo_registro: $Enums.profissionais_tipo_registro | null
    numero_registro: string | null
    uf_registro: string | null
    descricao: string | null
    valor_consulta: Decimal | null
    aceita_convenio: boolean | null
  }

  export type ProfissionaisMaxAggregateOutputType = {
    id_profissional: number | null
    usuarios_id_usuario: number | null
    enderecos_id_endereco: number | null
    foto_perfil_url: string | null
    nome: string | null
    cpf: string | null
    tipo_registro: $Enums.profissionais_tipo_registro | null
    numero_registro: string | null
    uf_registro: string | null
    descricao: string | null
    valor_consulta: Decimal | null
    aceita_convenio: boolean | null
  }

  export type ProfissionaisCountAggregateOutputType = {
    id_profissional: number
    usuarios_id_usuario: number
    enderecos_id_endereco: number
    foto_perfil_url: number
    nome: number
    cpf: number
    tipo_registro: number
    numero_registro: number
    uf_registro: number
    descricao: number
    valor_consulta: number
    aceita_convenio: number
    _all: number
  }


  export type ProfissionaisAvgAggregateInputType = {
    id_profissional?: true
    usuarios_id_usuario?: true
    enderecos_id_endereco?: true
    valor_consulta?: true
  }

  export type ProfissionaisSumAggregateInputType = {
    id_profissional?: true
    usuarios_id_usuario?: true
    enderecos_id_endereco?: true
    valor_consulta?: true
  }

  export type ProfissionaisMinAggregateInputType = {
    id_profissional?: true
    usuarios_id_usuario?: true
    enderecos_id_endereco?: true
    foto_perfil_url?: true
    nome?: true
    cpf?: true
    tipo_registro?: true
    numero_registro?: true
    uf_registro?: true
    descricao?: true
    valor_consulta?: true
    aceita_convenio?: true
  }

  export type ProfissionaisMaxAggregateInputType = {
    id_profissional?: true
    usuarios_id_usuario?: true
    enderecos_id_endereco?: true
    foto_perfil_url?: true
    nome?: true
    cpf?: true
    tipo_registro?: true
    numero_registro?: true
    uf_registro?: true
    descricao?: true
    valor_consulta?: true
    aceita_convenio?: true
  }

  export type ProfissionaisCountAggregateInputType = {
    id_profissional?: true
    usuarios_id_usuario?: true
    enderecos_id_endereco?: true
    foto_perfil_url?: true
    nome?: true
    cpf?: true
    tipo_registro?: true
    numero_registro?: true
    uf_registro?: true
    descricao?: true
    valor_consulta?: true
    aceita_convenio?: true
    _all?: true
  }

  export type ProfissionaisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profissionais to aggregate.
     */
    where?: profissionaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissionais to fetch.
     */
    orderBy?: profissionaisOrderByWithRelationInput | profissionaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profissionaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissionais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissionais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profissionais
    **/
    _count?: true | ProfissionaisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfissionaisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfissionaisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfissionaisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfissionaisMaxAggregateInputType
  }

  export type GetProfissionaisAggregateType<T extends ProfissionaisAggregateArgs> = {
        [P in keyof T & keyof AggregateProfissionais]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfissionais[P]>
      : GetScalarType<T[P], AggregateProfissionais[P]>
  }




  export type profissionaisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profissionaisWhereInput
    orderBy?: profissionaisOrderByWithAggregationInput | profissionaisOrderByWithAggregationInput[]
    by: ProfissionaisScalarFieldEnum[] | ProfissionaisScalarFieldEnum
    having?: profissionaisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfissionaisCountAggregateInputType | true
    _avg?: ProfissionaisAvgAggregateInputType
    _sum?: ProfissionaisSumAggregateInputType
    _min?: ProfissionaisMinAggregateInputType
    _max?: ProfissionaisMaxAggregateInputType
  }

  export type ProfissionaisGroupByOutputType = {
    id_profissional: number
    usuarios_id_usuario: number
    enderecos_id_endereco: number
    foto_perfil_url: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao: string | null
    valor_consulta: Decimal | null
    aceita_convenio: boolean | null
    _count: ProfissionaisCountAggregateOutputType | null
    _avg: ProfissionaisAvgAggregateOutputType | null
    _sum: ProfissionaisSumAggregateOutputType | null
    _min: ProfissionaisMinAggregateOutputType | null
    _max: ProfissionaisMaxAggregateOutputType | null
  }

  type GetProfissionaisGroupByPayload<T extends profissionaisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfissionaisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfissionaisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfissionaisGroupByOutputType[P]>
            : GetScalarType<T[P], ProfissionaisGroupByOutputType[P]>
        }
      >
    >


  export type profissionaisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_profissional?: boolean
    usuarios_id_usuario?: boolean
    enderecos_id_endereco?: boolean
    foto_perfil_url?: boolean
    nome?: boolean
    cpf?: boolean
    tipo_registro?: boolean
    numero_registro?: boolean
    uf_registro?: boolean
    descricao?: boolean
    valor_consulta?: boolean
    aceita_convenio?: boolean
    agendamentos?: boolean | profissionais$agendamentosArgs<ExtArgs>
    horarios_trabalho?: boolean | profissionais$horarios_trabalhoArgs<ExtArgs>
    enderecos?: boolean | enderecosDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    profissional_especialidades?: boolean | profissionais$profissional_especialidadesArgs<ExtArgs>
    profissional_formacoes?: boolean | profissionais$profissional_formacoesArgs<ExtArgs>
    profissional_idiomas?: boolean | profissionais$profissional_idiomasArgs<ExtArgs>
    profissional_tags?: boolean | profissionais$profissional_tagsArgs<ExtArgs>
    _count?: boolean | ProfissionaisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissionais"]>



  export type profissionaisSelectScalar = {
    id_profissional?: boolean
    usuarios_id_usuario?: boolean
    enderecos_id_endereco?: boolean
    foto_perfil_url?: boolean
    nome?: boolean
    cpf?: boolean
    tipo_registro?: boolean
    numero_registro?: boolean
    uf_registro?: boolean
    descricao?: boolean
    valor_consulta?: boolean
    aceita_convenio?: boolean
  }

  export type profissionaisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_profissional" | "usuarios_id_usuario" | "enderecos_id_endereco" | "foto_perfil_url" | "nome" | "cpf" | "tipo_registro" | "numero_registro" | "uf_registro" | "descricao" | "valor_consulta" | "aceita_convenio", ExtArgs["result"]["profissionais"]>
  export type profissionaisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | profissionais$agendamentosArgs<ExtArgs>
    horarios_trabalho?: boolean | profissionais$horarios_trabalhoArgs<ExtArgs>
    enderecos?: boolean | enderecosDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    profissional_especialidades?: boolean | profissionais$profissional_especialidadesArgs<ExtArgs>
    profissional_formacoes?: boolean | profissionais$profissional_formacoesArgs<ExtArgs>
    profissional_idiomas?: boolean | profissionais$profissional_idiomasArgs<ExtArgs>
    profissional_tags?: boolean | profissionais$profissional_tagsArgs<ExtArgs>
    _count?: boolean | ProfissionaisCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $profissionaisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profissionais"
    objects: {
      agendamentos: Prisma.$agendamentosPayload<ExtArgs>[]
      horarios_trabalho: Prisma.$horarios_trabalhoPayload<ExtArgs>[]
      enderecos: Prisma.$enderecosPayload<ExtArgs>
      usuarios: Prisma.$usuariosPayload<ExtArgs>
      profissional_especialidades: Prisma.$profissional_especialidadesPayload<ExtArgs>[]
      profissional_formacoes: Prisma.$profissional_formacoesPayload<ExtArgs>[]
      profissional_idiomas: Prisma.$profissional_idiomasPayload<ExtArgs>[]
      profissional_tags: Prisma.$profissional_tagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_profissional: number
      usuarios_id_usuario: number
      enderecos_id_endereco: number
      foto_perfil_url: string | null
      nome: string
      cpf: string
      tipo_registro: $Enums.profissionais_tipo_registro
      numero_registro: string
      uf_registro: string
      descricao: string | null
      valor_consulta: Prisma.Decimal | null
      aceita_convenio: boolean | null
    }, ExtArgs["result"]["profissionais"]>
    composites: {}
  }

  type profissionaisGetPayload<S extends boolean | null | undefined | profissionaisDefaultArgs> = $Result.GetResult<Prisma.$profissionaisPayload, S>

  type profissionaisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profissionaisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfissionaisCountAggregateInputType | true
    }

  export interface profissionaisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profissionais'], meta: { name: 'profissionais' } }
    /**
     * Find zero or one Profissionais that matches the filter.
     * @param {profissionaisFindUniqueArgs} args - Arguments to find a Profissionais
     * @example
     * // Get one Profissionais
     * const profissionais = await prisma.profissionais.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profissionaisFindUniqueArgs>(args: SelectSubset<T, profissionaisFindUniqueArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profissionais that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profissionaisFindUniqueOrThrowArgs} args - Arguments to find a Profissionais
     * @example
     * // Get one Profissionais
     * const profissionais = await prisma.profissionais.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profissionaisFindUniqueOrThrowArgs>(args: SelectSubset<T, profissionaisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissionais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissionaisFindFirstArgs} args - Arguments to find a Profissionais
     * @example
     * // Get one Profissionais
     * const profissionais = await prisma.profissionais.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profissionaisFindFirstArgs>(args?: SelectSubset<T, profissionaisFindFirstArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissionais that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissionaisFindFirstOrThrowArgs} args - Arguments to find a Profissionais
     * @example
     * // Get one Profissionais
     * const profissionais = await prisma.profissionais.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profissionaisFindFirstOrThrowArgs>(args?: SelectSubset<T, profissionaisFindFirstOrThrowArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profissionais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissionaisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profissionais
     * const profissionais = await prisma.profissionais.findMany()
     * 
     * // Get first 10 Profissionais
     * const profissionais = await prisma.profissionais.findMany({ take: 10 })
     * 
     * // Only select the `id_profissional`
     * const profissionaisWithId_profissionalOnly = await prisma.profissionais.findMany({ select: { id_profissional: true } })
     * 
     */
    findMany<T extends profissionaisFindManyArgs>(args?: SelectSubset<T, profissionaisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profissionais.
     * @param {profissionaisCreateArgs} args - Arguments to create a Profissionais.
     * @example
     * // Create one Profissionais
     * const Profissionais = await prisma.profissionais.create({
     *   data: {
     *     // ... data to create a Profissionais
     *   }
     * })
     * 
     */
    create<T extends profissionaisCreateArgs>(args: SelectSubset<T, profissionaisCreateArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profissionais.
     * @param {profissionaisCreateManyArgs} args - Arguments to create many Profissionais.
     * @example
     * // Create many Profissionais
     * const profissionais = await prisma.profissionais.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profissionaisCreateManyArgs>(args?: SelectSubset<T, profissionaisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profissionais.
     * @param {profissionaisDeleteArgs} args - Arguments to delete one Profissionais.
     * @example
     * // Delete one Profissionais
     * const Profissionais = await prisma.profissionais.delete({
     *   where: {
     *     // ... filter to delete one Profissionais
     *   }
     * })
     * 
     */
    delete<T extends profissionaisDeleteArgs>(args: SelectSubset<T, profissionaisDeleteArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profissionais.
     * @param {profissionaisUpdateArgs} args - Arguments to update one Profissionais.
     * @example
     * // Update one Profissionais
     * const profissionais = await prisma.profissionais.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profissionaisUpdateArgs>(args: SelectSubset<T, profissionaisUpdateArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profissionais.
     * @param {profissionaisDeleteManyArgs} args - Arguments to filter Profissionais to delete.
     * @example
     * // Delete a few Profissionais
     * const { count } = await prisma.profissionais.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profissionaisDeleteManyArgs>(args?: SelectSubset<T, profissionaisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissionais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissionaisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profissionais
     * const profissionais = await prisma.profissionais.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profissionaisUpdateManyArgs>(args: SelectSubset<T, profissionaisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profissionais.
     * @param {profissionaisUpsertArgs} args - Arguments to update or create a Profissionais.
     * @example
     * // Update or create a Profissionais
     * const profissionais = await prisma.profissionais.upsert({
     *   create: {
     *     // ... data to create a Profissionais
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profissionais we want to update
     *   }
     * })
     */
    upsert<T extends profissionaisUpsertArgs>(args: SelectSubset<T, profissionaisUpsertArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profissionais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissionaisCountArgs} args - Arguments to filter Profissionais to count.
     * @example
     * // Count the number of Profissionais
     * const count = await prisma.profissionais.count({
     *   where: {
     *     // ... the filter for the Profissionais we want to count
     *   }
     * })
    **/
    count<T extends profissionaisCountArgs>(
      args?: Subset<T, profissionaisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfissionaisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profissionais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionaisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfissionaisAggregateArgs>(args: Subset<T, ProfissionaisAggregateArgs>): Prisma.PrismaPromise<GetProfissionaisAggregateType<T>>

    /**
     * Group by Profissionais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissionaisGroupByArgs} args - Group by arguments.
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
      T extends profissionaisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profissionaisGroupByArgs['orderBy'] }
        : { orderBy?: profissionaisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, profissionaisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfissionaisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profissionais model
   */
  readonly fields: profissionaisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profissionais.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profissionaisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamentos<T extends profissionais$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, profissionais$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    horarios_trabalho<T extends profissionais$horarios_trabalhoArgs<ExtArgs> = {}>(args?: Subset<T, profissionais$horarios_trabalhoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$horarios_trabalhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enderecos<T extends enderecosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, enderecosDefaultArgs<ExtArgs>>): Prisma__enderecosClient<$Result.GetResult<Prisma.$enderecosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profissional_especialidades<T extends profissionais$profissional_especialidadesArgs<ExtArgs> = {}>(args?: Subset<T, profissionais$profissional_especialidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissional_especialidadesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profissional_formacoes<T extends profissionais$profissional_formacoesArgs<ExtArgs> = {}>(args?: Subset<T, profissionais$profissional_formacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissional_formacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profissional_idiomas<T extends profissionais$profissional_idiomasArgs<ExtArgs> = {}>(args?: Subset<T, profissionais$profissional_idiomasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissional_idiomasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profissional_tags<T extends profissionais$profissional_tagsArgs<ExtArgs> = {}>(args?: Subset<T, profissionais$profissional_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissional_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the profissionais model
   */
  interface profissionaisFieldRefs {
    readonly id_profissional: FieldRef<"profissionais", 'Int'>
    readonly usuarios_id_usuario: FieldRef<"profissionais", 'Int'>
    readonly enderecos_id_endereco: FieldRef<"profissionais", 'Int'>
    readonly foto_perfil_url: FieldRef<"profissionais", 'String'>
    readonly nome: FieldRef<"profissionais", 'String'>
    readonly cpf: FieldRef<"profissionais", 'String'>
    readonly tipo_registro: FieldRef<"profissionais", 'profissionais_tipo_registro'>
    readonly numero_registro: FieldRef<"profissionais", 'String'>
    readonly uf_registro: FieldRef<"profissionais", 'String'>
    readonly descricao: FieldRef<"profissionais", 'String'>
    readonly valor_consulta: FieldRef<"profissionais", 'Decimal'>
    readonly aceita_convenio: FieldRef<"profissionais", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * profissionais findUnique
   */
  export type profissionaisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * Filter, which profissionais to fetch.
     */
    where: profissionaisWhereUniqueInput
  }

  /**
   * profissionais findUniqueOrThrow
   */
  export type profissionaisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * Filter, which profissionais to fetch.
     */
    where: profissionaisWhereUniqueInput
  }

  /**
   * profissionais findFirst
   */
  export type profissionaisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * Filter, which profissionais to fetch.
     */
    where?: profissionaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissionais to fetch.
     */
    orderBy?: profissionaisOrderByWithRelationInput | profissionaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profissionais.
     */
    cursor?: profissionaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissionais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissionais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profissionais.
     */
    distinct?: ProfissionaisScalarFieldEnum | ProfissionaisScalarFieldEnum[]
  }

  /**
   * profissionais findFirstOrThrow
   */
  export type profissionaisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * Filter, which profissionais to fetch.
     */
    where?: profissionaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissionais to fetch.
     */
    orderBy?: profissionaisOrderByWithRelationInput | profissionaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profissionais.
     */
    cursor?: profissionaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissionais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissionais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profissionais.
     */
    distinct?: ProfissionaisScalarFieldEnum | ProfissionaisScalarFieldEnum[]
  }

  /**
   * profissionais findMany
   */
  export type profissionaisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * Filter, which profissionais to fetch.
     */
    where?: profissionaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissionais to fetch.
     */
    orderBy?: profissionaisOrderByWithRelationInput | profissionaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profissionais.
     */
    cursor?: profissionaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissionais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissionais.
     */
    skip?: number
    distinct?: ProfissionaisScalarFieldEnum | ProfissionaisScalarFieldEnum[]
  }

  /**
   * profissionais create
   */
  export type profissionaisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * The data needed to create a profissionais.
     */
    data: XOR<profissionaisCreateInput, profissionaisUncheckedCreateInput>
  }

  /**
   * profissionais createMany
   */
  export type profissionaisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profissionais.
     */
    data: profissionaisCreateManyInput | profissionaisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profissionais update
   */
  export type profissionaisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * The data needed to update a profissionais.
     */
    data: XOR<profissionaisUpdateInput, profissionaisUncheckedUpdateInput>
    /**
     * Choose, which profissionais to update.
     */
    where: profissionaisWhereUniqueInput
  }

  /**
   * profissionais updateMany
   */
  export type profissionaisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profissionais.
     */
    data: XOR<profissionaisUpdateManyMutationInput, profissionaisUncheckedUpdateManyInput>
    /**
     * Filter which profissionais to update
     */
    where?: profissionaisWhereInput
    /**
     * Limit how many profissionais to update.
     */
    limit?: number
  }

  /**
   * profissionais upsert
   */
  export type profissionaisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * The filter to search for the profissionais to update in case it exists.
     */
    where: profissionaisWhereUniqueInput
    /**
     * In case the profissionais found by the `where` argument doesn't exist, create a new profissionais with this data.
     */
    create: XOR<profissionaisCreateInput, profissionaisUncheckedCreateInput>
    /**
     * In case the profissionais was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profissionaisUpdateInput, profissionaisUncheckedUpdateInput>
  }

  /**
   * profissionais delete
   */
  export type profissionaisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * Filter which profissionais to delete.
     */
    where: profissionaisWhereUniqueInput
  }

  /**
   * profissionais deleteMany
   */
  export type profissionaisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profissionais to delete
     */
    where?: profissionaisWhereInput
    /**
     * Limit how many profissionais to delete.
     */
    limit?: number
  }

  /**
   * profissionais.agendamentos
   */
  export type profissionais$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    where?: agendamentosWhereInput
    orderBy?: agendamentosOrderByWithRelationInput | agendamentosOrderByWithRelationInput[]
    cursor?: agendamentosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentosScalarFieldEnum | AgendamentosScalarFieldEnum[]
  }

  /**
   * profissionais.horarios_trabalho
   */
  export type profissionais$horarios_trabalhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios_trabalho
     */
    select?: horarios_trabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios_trabalho
     */
    omit?: horarios_trabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarios_trabalhoInclude<ExtArgs> | null
    where?: horarios_trabalhoWhereInput
    orderBy?: horarios_trabalhoOrderByWithRelationInput | horarios_trabalhoOrderByWithRelationInput[]
    cursor?: horarios_trabalhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Horarios_trabalhoScalarFieldEnum | Horarios_trabalhoScalarFieldEnum[]
  }

  /**
   * profissionais.profissional_especialidades
   */
  export type profissionais$profissional_especialidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_especialidades
     */
    select?: profissional_especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_especialidades
     */
    omit?: profissional_especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_especialidadesInclude<ExtArgs> | null
    where?: profissional_especialidadesWhereInput
    orderBy?: profissional_especialidadesOrderByWithRelationInput | profissional_especialidadesOrderByWithRelationInput[]
    cursor?: profissional_especialidadesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Profissional_especialidadesScalarFieldEnum | Profissional_especialidadesScalarFieldEnum[]
  }

  /**
   * profissionais.profissional_formacoes
   */
  export type profissionais$profissional_formacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_formacoes
     */
    select?: profissional_formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_formacoes
     */
    omit?: profissional_formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_formacoesInclude<ExtArgs> | null
    where?: profissional_formacoesWhereInput
    orderBy?: profissional_formacoesOrderByWithRelationInput | profissional_formacoesOrderByWithRelationInput[]
    cursor?: profissional_formacoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Profissional_formacoesScalarFieldEnum | Profissional_formacoesScalarFieldEnum[]
  }

  /**
   * profissionais.profissional_idiomas
   */
  export type profissionais$profissional_idiomasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_idiomas
     */
    select?: profissional_idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_idiomas
     */
    omit?: profissional_idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_idiomasInclude<ExtArgs> | null
    where?: profissional_idiomasWhereInput
    orderBy?: profissional_idiomasOrderByWithRelationInput | profissional_idiomasOrderByWithRelationInput[]
    cursor?: profissional_idiomasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Profissional_idiomasScalarFieldEnum | Profissional_idiomasScalarFieldEnum[]
  }

  /**
   * profissionais.profissional_tags
   */
  export type profissionais$profissional_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_tags
     */
    select?: profissional_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_tags
     */
    omit?: profissional_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_tagsInclude<ExtArgs> | null
    where?: profissional_tagsWhereInput
    orderBy?: profissional_tagsOrderByWithRelationInput | profissional_tagsOrderByWithRelationInput[]
    cursor?: profissional_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Profissional_tagsScalarFieldEnum | Profissional_tagsScalarFieldEnum[]
  }

  /**
   * profissionais without action
   */
  export type profissionaisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
  }


  /**
   * Model profissional_especialidades
   */

  export type AggregateProfissional_especialidades = {
    _count: Profissional_especialidadesCountAggregateOutputType | null
    _avg: Profissional_especialidadesAvgAggregateOutputType | null
    _sum: Profissional_especialidadesSumAggregateOutputType | null
    _min: Profissional_especialidadesMinAggregateOutputType | null
    _max: Profissional_especialidadesMaxAggregateOutputType | null
  }

  export type Profissional_especialidadesAvgAggregateOutputType = {
    profissionais_id_profissional: number | null
    especialidades_id_especialidade: number | null
  }

  export type Profissional_especialidadesSumAggregateOutputType = {
    profissionais_id_profissional: number | null
    especialidades_id_especialidade: number | null
  }

  export type Profissional_especialidadesMinAggregateOutputType = {
    profissionais_id_profissional: number | null
    especialidades_id_especialidade: number | null
  }

  export type Profissional_especialidadesMaxAggregateOutputType = {
    profissionais_id_profissional: number | null
    especialidades_id_especialidade: number | null
  }

  export type Profissional_especialidadesCountAggregateOutputType = {
    profissionais_id_profissional: number
    especialidades_id_especialidade: number
    _all: number
  }


  export type Profissional_especialidadesAvgAggregateInputType = {
    profissionais_id_profissional?: true
    especialidades_id_especialidade?: true
  }

  export type Profissional_especialidadesSumAggregateInputType = {
    profissionais_id_profissional?: true
    especialidades_id_especialidade?: true
  }

  export type Profissional_especialidadesMinAggregateInputType = {
    profissionais_id_profissional?: true
    especialidades_id_especialidade?: true
  }

  export type Profissional_especialidadesMaxAggregateInputType = {
    profissionais_id_profissional?: true
    especialidades_id_especialidade?: true
  }

  export type Profissional_especialidadesCountAggregateInputType = {
    profissionais_id_profissional?: true
    especialidades_id_especialidade?: true
    _all?: true
  }

  export type Profissional_especialidadesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profissional_especialidades to aggregate.
     */
    where?: profissional_especialidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissional_especialidades to fetch.
     */
    orderBy?: profissional_especialidadesOrderByWithRelationInput | profissional_especialidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profissional_especialidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissional_especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissional_especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profissional_especialidades
    **/
    _count?: true | Profissional_especialidadesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Profissional_especialidadesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Profissional_especialidadesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Profissional_especialidadesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Profissional_especialidadesMaxAggregateInputType
  }

  export type GetProfissional_especialidadesAggregateType<T extends Profissional_especialidadesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfissional_especialidades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfissional_especialidades[P]>
      : GetScalarType<T[P], AggregateProfissional_especialidades[P]>
  }




  export type profissional_especialidadesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profissional_especialidadesWhereInput
    orderBy?: profissional_especialidadesOrderByWithAggregationInput | profissional_especialidadesOrderByWithAggregationInput[]
    by: Profissional_especialidadesScalarFieldEnum[] | Profissional_especialidadesScalarFieldEnum
    having?: profissional_especialidadesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Profissional_especialidadesCountAggregateInputType | true
    _avg?: Profissional_especialidadesAvgAggregateInputType
    _sum?: Profissional_especialidadesSumAggregateInputType
    _min?: Profissional_especialidadesMinAggregateInputType
    _max?: Profissional_especialidadesMaxAggregateInputType
  }

  export type Profissional_especialidadesGroupByOutputType = {
    profissionais_id_profissional: number
    especialidades_id_especialidade: number
    _count: Profissional_especialidadesCountAggregateOutputType | null
    _avg: Profissional_especialidadesAvgAggregateOutputType | null
    _sum: Profissional_especialidadesSumAggregateOutputType | null
    _min: Profissional_especialidadesMinAggregateOutputType | null
    _max: Profissional_especialidadesMaxAggregateOutputType | null
  }

  type GetProfissional_especialidadesGroupByPayload<T extends profissional_especialidadesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Profissional_especialidadesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Profissional_especialidadesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Profissional_especialidadesGroupByOutputType[P]>
            : GetScalarType<T[P], Profissional_especialidadesGroupByOutputType[P]>
        }
      >
    >


  export type profissional_especialidadesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profissionais_id_profissional?: boolean
    especialidades_id_especialidade?: boolean
    especialidades?: boolean | especialidadesDefaultArgs<ExtArgs>
    profissionais?: boolean | profissionaisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissional_especialidades"]>



  export type profissional_especialidadesSelectScalar = {
    profissionais_id_profissional?: boolean
    especialidades_id_especialidade?: boolean
  }

  export type profissional_especialidadesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"profissionais_id_profissional" | "especialidades_id_especialidade", ExtArgs["result"]["profissional_especialidades"]>
  export type profissional_especialidadesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidades?: boolean | especialidadesDefaultArgs<ExtArgs>
    profissionais?: boolean | profissionaisDefaultArgs<ExtArgs>
  }

  export type $profissional_especialidadesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profissional_especialidades"
    objects: {
      especialidades: Prisma.$especialidadesPayload<ExtArgs>
      profissionais: Prisma.$profissionaisPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      profissionais_id_profissional: number
      especialidades_id_especialidade: number
    }, ExtArgs["result"]["profissional_especialidades"]>
    composites: {}
  }

  type profissional_especialidadesGetPayload<S extends boolean | null | undefined | profissional_especialidadesDefaultArgs> = $Result.GetResult<Prisma.$profissional_especialidadesPayload, S>

  type profissional_especialidadesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profissional_especialidadesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Profissional_especialidadesCountAggregateInputType | true
    }

  export interface profissional_especialidadesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profissional_especialidades'], meta: { name: 'profissional_especialidades' } }
    /**
     * Find zero or one Profissional_especialidades that matches the filter.
     * @param {profissional_especialidadesFindUniqueArgs} args - Arguments to find a Profissional_especialidades
     * @example
     * // Get one Profissional_especialidades
     * const profissional_especialidades = await prisma.profissional_especialidades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profissional_especialidadesFindUniqueArgs>(args: SelectSubset<T, profissional_especialidadesFindUniqueArgs<ExtArgs>>): Prisma__profissional_especialidadesClient<$Result.GetResult<Prisma.$profissional_especialidadesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profissional_especialidades that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profissional_especialidadesFindUniqueOrThrowArgs} args - Arguments to find a Profissional_especialidades
     * @example
     * // Get one Profissional_especialidades
     * const profissional_especialidades = await prisma.profissional_especialidades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profissional_especialidadesFindUniqueOrThrowArgs>(args: SelectSubset<T, profissional_especialidadesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profissional_especialidadesClient<$Result.GetResult<Prisma.$profissional_especialidadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissional_especialidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_especialidadesFindFirstArgs} args - Arguments to find a Profissional_especialidades
     * @example
     * // Get one Profissional_especialidades
     * const profissional_especialidades = await prisma.profissional_especialidades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profissional_especialidadesFindFirstArgs>(args?: SelectSubset<T, profissional_especialidadesFindFirstArgs<ExtArgs>>): Prisma__profissional_especialidadesClient<$Result.GetResult<Prisma.$profissional_especialidadesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissional_especialidades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_especialidadesFindFirstOrThrowArgs} args - Arguments to find a Profissional_especialidades
     * @example
     * // Get one Profissional_especialidades
     * const profissional_especialidades = await prisma.profissional_especialidades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profissional_especialidadesFindFirstOrThrowArgs>(args?: SelectSubset<T, profissional_especialidadesFindFirstOrThrowArgs<ExtArgs>>): Prisma__profissional_especialidadesClient<$Result.GetResult<Prisma.$profissional_especialidadesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profissional_especialidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_especialidadesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profissional_especialidades
     * const profissional_especialidades = await prisma.profissional_especialidades.findMany()
     * 
     * // Get first 10 Profissional_especialidades
     * const profissional_especialidades = await prisma.profissional_especialidades.findMany({ take: 10 })
     * 
     * // Only select the `profissionais_id_profissional`
     * const profissional_especialidadesWithProfissionais_id_profissionalOnly = await prisma.profissional_especialidades.findMany({ select: { profissionais_id_profissional: true } })
     * 
     */
    findMany<T extends profissional_especialidadesFindManyArgs>(args?: SelectSubset<T, profissional_especialidadesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissional_especialidadesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profissional_especialidades.
     * @param {profissional_especialidadesCreateArgs} args - Arguments to create a Profissional_especialidades.
     * @example
     * // Create one Profissional_especialidades
     * const Profissional_especialidades = await prisma.profissional_especialidades.create({
     *   data: {
     *     // ... data to create a Profissional_especialidades
     *   }
     * })
     * 
     */
    create<T extends profissional_especialidadesCreateArgs>(args: SelectSubset<T, profissional_especialidadesCreateArgs<ExtArgs>>): Prisma__profissional_especialidadesClient<$Result.GetResult<Prisma.$profissional_especialidadesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profissional_especialidades.
     * @param {profissional_especialidadesCreateManyArgs} args - Arguments to create many Profissional_especialidades.
     * @example
     * // Create many Profissional_especialidades
     * const profissional_especialidades = await prisma.profissional_especialidades.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profissional_especialidadesCreateManyArgs>(args?: SelectSubset<T, profissional_especialidadesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profissional_especialidades.
     * @param {profissional_especialidadesDeleteArgs} args - Arguments to delete one Profissional_especialidades.
     * @example
     * // Delete one Profissional_especialidades
     * const Profissional_especialidades = await prisma.profissional_especialidades.delete({
     *   where: {
     *     // ... filter to delete one Profissional_especialidades
     *   }
     * })
     * 
     */
    delete<T extends profissional_especialidadesDeleteArgs>(args: SelectSubset<T, profissional_especialidadesDeleteArgs<ExtArgs>>): Prisma__profissional_especialidadesClient<$Result.GetResult<Prisma.$profissional_especialidadesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profissional_especialidades.
     * @param {profissional_especialidadesUpdateArgs} args - Arguments to update one Profissional_especialidades.
     * @example
     * // Update one Profissional_especialidades
     * const profissional_especialidades = await prisma.profissional_especialidades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profissional_especialidadesUpdateArgs>(args: SelectSubset<T, profissional_especialidadesUpdateArgs<ExtArgs>>): Prisma__profissional_especialidadesClient<$Result.GetResult<Prisma.$profissional_especialidadesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profissional_especialidades.
     * @param {profissional_especialidadesDeleteManyArgs} args - Arguments to filter Profissional_especialidades to delete.
     * @example
     * // Delete a few Profissional_especialidades
     * const { count } = await prisma.profissional_especialidades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profissional_especialidadesDeleteManyArgs>(args?: SelectSubset<T, profissional_especialidadesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissional_especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_especialidadesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profissional_especialidades
     * const profissional_especialidades = await prisma.profissional_especialidades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profissional_especialidadesUpdateManyArgs>(args: SelectSubset<T, profissional_especialidadesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profissional_especialidades.
     * @param {profissional_especialidadesUpsertArgs} args - Arguments to update or create a Profissional_especialidades.
     * @example
     * // Update or create a Profissional_especialidades
     * const profissional_especialidades = await prisma.profissional_especialidades.upsert({
     *   create: {
     *     // ... data to create a Profissional_especialidades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profissional_especialidades we want to update
     *   }
     * })
     */
    upsert<T extends profissional_especialidadesUpsertArgs>(args: SelectSubset<T, profissional_especialidadesUpsertArgs<ExtArgs>>): Prisma__profissional_especialidadesClient<$Result.GetResult<Prisma.$profissional_especialidadesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profissional_especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_especialidadesCountArgs} args - Arguments to filter Profissional_especialidades to count.
     * @example
     * // Count the number of Profissional_especialidades
     * const count = await prisma.profissional_especialidades.count({
     *   where: {
     *     // ... the filter for the Profissional_especialidades we want to count
     *   }
     * })
    **/
    count<T extends profissional_especialidadesCountArgs>(
      args?: Subset<T, profissional_especialidadesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Profissional_especialidadesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profissional_especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Profissional_especialidadesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Profissional_especialidadesAggregateArgs>(args: Subset<T, Profissional_especialidadesAggregateArgs>): Prisma.PrismaPromise<GetProfissional_especialidadesAggregateType<T>>

    /**
     * Group by Profissional_especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_especialidadesGroupByArgs} args - Group by arguments.
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
      T extends profissional_especialidadesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profissional_especialidadesGroupByArgs['orderBy'] }
        : { orderBy?: profissional_especialidadesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, profissional_especialidadesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfissional_especialidadesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profissional_especialidades model
   */
  readonly fields: profissional_especialidadesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profissional_especialidades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profissional_especialidadesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    especialidades<T extends especialidadesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, especialidadesDefaultArgs<ExtArgs>>): Prisma__especialidadesClient<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profissionais<T extends profissionaisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, profissionaisDefaultArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the profissional_especialidades model
   */
  interface profissional_especialidadesFieldRefs {
    readonly profissionais_id_profissional: FieldRef<"profissional_especialidades", 'Int'>
    readonly especialidades_id_especialidade: FieldRef<"profissional_especialidades", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * profissional_especialidades findUnique
   */
  export type profissional_especialidadesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_especialidades
     */
    select?: profissional_especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_especialidades
     */
    omit?: profissional_especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_especialidadesInclude<ExtArgs> | null
    /**
     * Filter, which profissional_especialidades to fetch.
     */
    where: profissional_especialidadesWhereUniqueInput
  }

  /**
   * profissional_especialidades findUniqueOrThrow
   */
  export type profissional_especialidadesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_especialidades
     */
    select?: profissional_especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_especialidades
     */
    omit?: profissional_especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_especialidadesInclude<ExtArgs> | null
    /**
     * Filter, which profissional_especialidades to fetch.
     */
    where: profissional_especialidadesWhereUniqueInput
  }

  /**
   * profissional_especialidades findFirst
   */
  export type profissional_especialidadesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_especialidades
     */
    select?: profissional_especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_especialidades
     */
    omit?: profissional_especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_especialidadesInclude<ExtArgs> | null
    /**
     * Filter, which profissional_especialidades to fetch.
     */
    where?: profissional_especialidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissional_especialidades to fetch.
     */
    orderBy?: profissional_especialidadesOrderByWithRelationInput | profissional_especialidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profissional_especialidades.
     */
    cursor?: profissional_especialidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissional_especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissional_especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profissional_especialidades.
     */
    distinct?: Profissional_especialidadesScalarFieldEnum | Profissional_especialidadesScalarFieldEnum[]
  }

  /**
   * profissional_especialidades findFirstOrThrow
   */
  export type profissional_especialidadesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_especialidades
     */
    select?: profissional_especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_especialidades
     */
    omit?: profissional_especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_especialidadesInclude<ExtArgs> | null
    /**
     * Filter, which profissional_especialidades to fetch.
     */
    where?: profissional_especialidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissional_especialidades to fetch.
     */
    orderBy?: profissional_especialidadesOrderByWithRelationInput | profissional_especialidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profissional_especialidades.
     */
    cursor?: profissional_especialidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissional_especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissional_especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profissional_especialidades.
     */
    distinct?: Profissional_especialidadesScalarFieldEnum | Profissional_especialidadesScalarFieldEnum[]
  }

  /**
   * profissional_especialidades findMany
   */
  export type profissional_especialidadesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_especialidades
     */
    select?: profissional_especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_especialidades
     */
    omit?: profissional_especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_especialidadesInclude<ExtArgs> | null
    /**
     * Filter, which profissional_especialidades to fetch.
     */
    where?: profissional_especialidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissional_especialidades to fetch.
     */
    orderBy?: profissional_especialidadesOrderByWithRelationInput | profissional_especialidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profissional_especialidades.
     */
    cursor?: profissional_especialidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissional_especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissional_especialidades.
     */
    skip?: number
    distinct?: Profissional_especialidadesScalarFieldEnum | Profissional_especialidadesScalarFieldEnum[]
  }

  /**
   * profissional_especialidades create
   */
  export type profissional_especialidadesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_especialidades
     */
    select?: profissional_especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_especialidades
     */
    omit?: profissional_especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_especialidadesInclude<ExtArgs> | null
    /**
     * The data needed to create a profissional_especialidades.
     */
    data: XOR<profissional_especialidadesCreateInput, profissional_especialidadesUncheckedCreateInput>
  }

  /**
   * profissional_especialidades createMany
   */
  export type profissional_especialidadesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profissional_especialidades.
     */
    data: profissional_especialidadesCreateManyInput | profissional_especialidadesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profissional_especialidades update
   */
  export type profissional_especialidadesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_especialidades
     */
    select?: profissional_especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_especialidades
     */
    omit?: profissional_especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_especialidadesInclude<ExtArgs> | null
    /**
     * The data needed to update a profissional_especialidades.
     */
    data: XOR<profissional_especialidadesUpdateInput, profissional_especialidadesUncheckedUpdateInput>
    /**
     * Choose, which profissional_especialidades to update.
     */
    where: profissional_especialidadesWhereUniqueInput
  }

  /**
   * profissional_especialidades updateMany
   */
  export type profissional_especialidadesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profissional_especialidades.
     */
    data: XOR<profissional_especialidadesUpdateManyMutationInput, profissional_especialidadesUncheckedUpdateManyInput>
    /**
     * Filter which profissional_especialidades to update
     */
    where?: profissional_especialidadesWhereInput
    /**
     * Limit how many profissional_especialidades to update.
     */
    limit?: number
  }

  /**
   * profissional_especialidades upsert
   */
  export type profissional_especialidadesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_especialidades
     */
    select?: profissional_especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_especialidades
     */
    omit?: profissional_especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_especialidadesInclude<ExtArgs> | null
    /**
     * The filter to search for the profissional_especialidades to update in case it exists.
     */
    where: profissional_especialidadesWhereUniqueInput
    /**
     * In case the profissional_especialidades found by the `where` argument doesn't exist, create a new profissional_especialidades with this data.
     */
    create: XOR<profissional_especialidadesCreateInput, profissional_especialidadesUncheckedCreateInput>
    /**
     * In case the profissional_especialidades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profissional_especialidadesUpdateInput, profissional_especialidadesUncheckedUpdateInput>
  }

  /**
   * profissional_especialidades delete
   */
  export type profissional_especialidadesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_especialidades
     */
    select?: profissional_especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_especialidades
     */
    omit?: profissional_especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_especialidadesInclude<ExtArgs> | null
    /**
     * Filter which profissional_especialidades to delete.
     */
    where: profissional_especialidadesWhereUniqueInput
  }

  /**
   * profissional_especialidades deleteMany
   */
  export type profissional_especialidadesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profissional_especialidades to delete
     */
    where?: profissional_especialidadesWhereInput
    /**
     * Limit how many profissional_especialidades to delete.
     */
    limit?: number
  }

  /**
   * profissional_especialidades without action
   */
  export type profissional_especialidadesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_especialidades
     */
    select?: profissional_especialidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_especialidades
     */
    omit?: profissional_especialidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_especialidadesInclude<ExtArgs> | null
  }


  /**
   * Model profissional_formacoes
   */

  export type AggregateProfissional_formacoes = {
    _count: Profissional_formacoesCountAggregateOutputType | null
    _avg: Profissional_formacoesAvgAggregateOutputType | null
    _sum: Profissional_formacoesSumAggregateOutputType | null
    _min: Profissional_formacoesMinAggregateOutputType | null
    _max: Profissional_formacoesMaxAggregateOutputType | null
  }

  export type Profissional_formacoesAvgAggregateOutputType = {
    formacoes_id_formacao: number | null
    profissionais_id_profissional: number | null
  }

  export type Profissional_formacoesSumAggregateOutputType = {
    formacoes_id_formacao: number | null
    profissionais_id_profissional: number | null
  }

  export type Profissional_formacoesMinAggregateOutputType = {
    formacoes_id_formacao: number | null
    profissionais_id_profissional: number | null
  }

  export type Profissional_formacoesMaxAggregateOutputType = {
    formacoes_id_formacao: number | null
    profissionais_id_profissional: number | null
  }

  export type Profissional_formacoesCountAggregateOutputType = {
    formacoes_id_formacao: number
    profissionais_id_profissional: number
    _all: number
  }


  export type Profissional_formacoesAvgAggregateInputType = {
    formacoes_id_formacao?: true
    profissionais_id_profissional?: true
  }

  export type Profissional_formacoesSumAggregateInputType = {
    formacoes_id_formacao?: true
    profissionais_id_profissional?: true
  }

  export type Profissional_formacoesMinAggregateInputType = {
    formacoes_id_formacao?: true
    profissionais_id_profissional?: true
  }

  export type Profissional_formacoesMaxAggregateInputType = {
    formacoes_id_formacao?: true
    profissionais_id_profissional?: true
  }

  export type Profissional_formacoesCountAggregateInputType = {
    formacoes_id_formacao?: true
    profissionais_id_profissional?: true
    _all?: true
  }

  export type Profissional_formacoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profissional_formacoes to aggregate.
     */
    where?: profissional_formacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissional_formacoes to fetch.
     */
    orderBy?: profissional_formacoesOrderByWithRelationInput | profissional_formacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profissional_formacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissional_formacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissional_formacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profissional_formacoes
    **/
    _count?: true | Profissional_formacoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Profissional_formacoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Profissional_formacoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Profissional_formacoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Profissional_formacoesMaxAggregateInputType
  }

  export type GetProfissional_formacoesAggregateType<T extends Profissional_formacoesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfissional_formacoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfissional_formacoes[P]>
      : GetScalarType<T[P], AggregateProfissional_formacoes[P]>
  }




  export type profissional_formacoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profissional_formacoesWhereInput
    orderBy?: profissional_formacoesOrderByWithAggregationInput | profissional_formacoesOrderByWithAggregationInput[]
    by: Profissional_formacoesScalarFieldEnum[] | Profissional_formacoesScalarFieldEnum
    having?: profissional_formacoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Profissional_formacoesCountAggregateInputType | true
    _avg?: Profissional_formacoesAvgAggregateInputType
    _sum?: Profissional_formacoesSumAggregateInputType
    _min?: Profissional_formacoesMinAggregateInputType
    _max?: Profissional_formacoesMaxAggregateInputType
  }

  export type Profissional_formacoesGroupByOutputType = {
    formacoes_id_formacao: number
    profissionais_id_profissional: number
    _count: Profissional_formacoesCountAggregateOutputType | null
    _avg: Profissional_formacoesAvgAggregateOutputType | null
    _sum: Profissional_formacoesSumAggregateOutputType | null
    _min: Profissional_formacoesMinAggregateOutputType | null
    _max: Profissional_formacoesMaxAggregateOutputType | null
  }

  type GetProfissional_formacoesGroupByPayload<T extends profissional_formacoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Profissional_formacoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Profissional_formacoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Profissional_formacoesGroupByOutputType[P]>
            : GetScalarType<T[P], Profissional_formacoesGroupByOutputType[P]>
        }
      >
    >


  export type profissional_formacoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    formacoes_id_formacao?: boolean
    profissionais_id_profissional?: boolean
    formacoes?: boolean | formacoesDefaultArgs<ExtArgs>
    profissionais?: boolean | profissionaisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissional_formacoes"]>



  export type profissional_formacoesSelectScalar = {
    formacoes_id_formacao?: boolean
    profissionais_id_profissional?: boolean
  }

  export type profissional_formacoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"formacoes_id_formacao" | "profissionais_id_profissional", ExtArgs["result"]["profissional_formacoes"]>
  export type profissional_formacoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formacoes?: boolean | formacoesDefaultArgs<ExtArgs>
    profissionais?: boolean | profissionaisDefaultArgs<ExtArgs>
  }

  export type $profissional_formacoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profissional_formacoes"
    objects: {
      formacoes: Prisma.$formacoesPayload<ExtArgs>
      profissionais: Prisma.$profissionaisPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      formacoes_id_formacao: number
      profissionais_id_profissional: number
    }, ExtArgs["result"]["profissional_formacoes"]>
    composites: {}
  }

  type profissional_formacoesGetPayload<S extends boolean | null | undefined | profissional_formacoesDefaultArgs> = $Result.GetResult<Prisma.$profissional_formacoesPayload, S>

  type profissional_formacoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profissional_formacoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Profissional_formacoesCountAggregateInputType | true
    }

  export interface profissional_formacoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profissional_formacoes'], meta: { name: 'profissional_formacoes' } }
    /**
     * Find zero or one Profissional_formacoes that matches the filter.
     * @param {profissional_formacoesFindUniqueArgs} args - Arguments to find a Profissional_formacoes
     * @example
     * // Get one Profissional_formacoes
     * const profissional_formacoes = await prisma.profissional_formacoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profissional_formacoesFindUniqueArgs>(args: SelectSubset<T, profissional_formacoesFindUniqueArgs<ExtArgs>>): Prisma__profissional_formacoesClient<$Result.GetResult<Prisma.$profissional_formacoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profissional_formacoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profissional_formacoesFindUniqueOrThrowArgs} args - Arguments to find a Profissional_formacoes
     * @example
     * // Get one Profissional_formacoes
     * const profissional_formacoes = await prisma.profissional_formacoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profissional_formacoesFindUniqueOrThrowArgs>(args: SelectSubset<T, profissional_formacoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profissional_formacoesClient<$Result.GetResult<Prisma.$profissional_formacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissional_formacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_formacoesFindFirstArgs} args - Arguments to find a Profissional_formacoes
     * @example
     * // Get one Profissional_formacoes
     * const profissional_formacoes = await prisma.profissional_formacoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profissional_formacoesFindFirstArgs>(args?: SelectSubset<T, profissional_formacoesFindFirstArgs<ExtArgs>>): Prisma__profissional_formacoesClient<$Result.GetResult<Prisma.$profissional_formacoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissional_formacoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_formacoesFindFirstOrThrowArgs} args - Arguments to find a Profissional_formacoes
     * @example
     * // Get one Profissional_formacoes
     * const profissional_formacoes = await prisma.profissional_formacoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profissional_formacoesFindFirstOrThrowArgs>(args?: SelectSubset<T, profissional_formacoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__profissional_formacoesClient<$Result.GetResult<Prisma.$profissional_formacoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profissional_formacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_formacoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profissional_formacoes
     * const profissional_formacoes = await prisma.profissional_formacoes.findMany()
     * 
     * // Get first 10 Profissional_formacoes
     * const profissional_formacoes = await prisma.profissional_formacoes.findMany({ take: 10 })
     * 
     * // Only select the `formacoes_id_formacao`
     * const profissional_formacoesWithFormacoes_id_formacaoOnly = await prisma.profissional_formacoes.findMany({ select: { formacoes_id_formacao: true } })
     * 
     */
    findMany<T extends profissional_formacoesFindManyArgs>(args?: SelectSubset<T, profissional_formacoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissional_formacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profissional_formacoes.
     * @param {profissional_formacoesCreateArgs} args - Arguments to create a Profissional_formacoes.
     * @example
     * // Create one Profissional_formacoes
     * const Profissional_formacoes = await prisma.profissional_formacoes.create({
     *   data: {
     *     // ... data to create a Profissional_formacoes
     *   }
     * })
     * 
     */
    create<T extends profissional_formacoesCreateArgs>(args: SelectSubset<T, profissional_formacoesCreateArgs<ExtArgs>>): Prisma__profissional_formacoesClient<$Result.GetResult<Prisma.$profissional_formacoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profissional_formacoes.
     * @param {profissional_formacoesCreateManyArgs} args - Arguments to create many Profissional_formacoes.
     * @example
     * // Create many Profissional_formacoes
     * const profissional_formacoes = await prisma.profissional_formacoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profissional_formacoesCreateManyArgs>(args?: SelectSubset<T, profissional_formacoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profissional_formacoes.
     * @param {profissional_formacoesDeleteArgs} args - Arguments to delete one Profissional_formacoes.
     * @example
     * // Delete one Profissional_formacoes
     * const Profissional_formacoes = await prisma.profissional_formacoes.delete({
     *   where: {
     *     // ... filter to delete one Profissional_formacoes
     *   }
     * })
     * 
     */
    delete<T extends profissional_formacoesDeleteArgs>(args: SelectSubset<T, profissional_formacoesDeleteArgs<ExtArgs>>): Prisma__profissional_formacoesClient<$Result.GetResult<Prisma.$profissional_formacoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profissional_formacoes.
     * @param {profissional_formacoesUpdateArgs} args - Arguments to update one Profissional_formacoes.
     * @example
     * // Update one Profissional_formacoes
     * const profissional_formacoes = await prisma.profissional_formacoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profissional_formacoesUpdateArgs>(args: SelectSubset<T, profissional_formacoesUpdateArgs<ExtArgs>>): Prisma__profissional_formacoesClient<$Result.GetResult<Prisma.$profissional_formacoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profissional_formacoes.
     * @param {profissional_formacoesDeleteManyArgs} args - Arguments to filter Profissional_formacoes to delete.
     * @example
     * // Delete a few Profissional_formacoes
     * const { count } = await prisma.profissional_formacoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profissional_formacoesDeleteManyArgs>(args?: SelectSubset<T, profissional_formacoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissional_formacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_formacoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profissional_formacoes
     * const profissional_formacoes = await prisma.profissional_formacoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profissional_formacoesUpdateManyArgs>(args: SelectSubset<T, profissional_formacoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profissional_formacoes.
     * @param {profissional_formacoesUpsertArgs} args - Arguments to update or create a Profissional_formacoes.
     * @example
     * // Update or create a Profissional_formacoes
     * const profissional_formacoes = await prisma.profissional_formacoes.upsert({
     *   create: {
     *     // ... data to create a Profissional_formacoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profissional_formacoes we want to update
     *   }
     * })
     */
    upsert<T extends profissional_formacoesUpsertArgs>(args: SelectSubset<T, profissional_formacoesUpsertArgs<ExtArgs>>): Prisma__profissional_formacoesClient<$Result.GetResult<Prisma.$profissional_formacoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profissional_formacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_formacoesCountArgs} args - Arguments to filter Profissional_formacoes to count.
     * @example
     * // Count the number of Profissional_formacoes
     * const count = await prisma.profissional_formacoes.count({
     *   where: {
     *     // ... the filter for the Profissional_formacoes we want to count
     *   }
     * })
    **/
    count<T extends profissional_formacoesCountArgs>(
      args?: Subset<T, profissional_formacoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Profissional_formacoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profissional_formacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Profissional_formacoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Profissional_formacoesAggregateArgs>(args: Subset<T, Profissional_formacoesAggregateArgs>): Prisma.PrismaPromise<GetProfissional_formacoesAggregateType<T>>

    /**
     * Group by Profissional_formacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_formacoesGroupByArgs} args - Group by arguments.
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
      T extends profissional_formacoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profissional_formacoesGroupByArgs['orderBy'] }
        : { orderBy?: profissional_formacoesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, profissional_formacoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfissional_formacoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profissional_formacoes model
   */
  readonly fields: profissional_formacoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profissional_formacoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profissional_formacoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formacoes<T extends formacoesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, formacoesDefaultArgs<ExtArgs>>): Prisma__formacoesClient<$Result.GetResult<Prisma.$formacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profissionais<T extends profissionaisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, profissionaisDefaultArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the profissional_formacoes model
   */
  interface profissional_formacoesFieldRefs {
    readonly formacoes_id_formacao: FieldRef<"profissional_formacoes", 'Int'>
    readonly profissionais_id_profissional: FieldRef<"profissional_formacoes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * profissional_formacoes findUnique
   */
  export type profissional_formacoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_formacoes
     */
    select?: profissional_formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_formacoes
     */
    omit?: profissional_formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_formacoesInclude<ExtArgs> | null
    /**
     * Filter, which profissional_formacoes to fetch.
     */
    where: profissional_formacoesWhereUniqueInput
  }

  /**
   * profissional_formacoes findUniqueOrThrow
   */
  export type profissional_formacoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_formacoes
     */
    select?: profissional_formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_formacoes
     */
    omit?: profissional_formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_formacoesInclude<ExtArgs> | null
    /**
     * Filter, which profissional_formacoes to fetch.
     */
    where: profissional_formacoesWhereUniqueInput
  }

  /**
   * profissional_formacoes findFirst
   */
  export type profissional_formacoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_formacoes
     */
    select?: profissional_formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_formacoes
     */
    omit?: profissional_formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_formacoesInclude<ExtArgs> | null
    /**
     * Filter, which profissional_formacoes to fetch.
     */
    where?: profissional_formacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissional_formacoes to fetch.
     */
    orderBy?: profissional_formacoesOrderByWithRelationInput | profissional_formacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profissional_formacoes.
     */
    cursor?: profissional_formacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissional_formacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissional_formacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profissional_formacoes.
     */
    distinct?: Profissional_formacoesScalarFieldEnum | Profissional_formacoesScalarFieldEnum[]
  }

  /**
   * profissional_formacoes findFirstOrThrow
   */
  export type profissional_formacoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_formacoes
     */
    select?: profissional_formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_formacoes
     */
    omit?: profissional_formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_formacoesInclude<ExtArgs> | null
    /**
     * Filter, which profissional_formacoes to fetch.
     */
    where?: profissional_formacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissional_formacoes to fetch.
     */
    orderBy?: profissional_formacoesOrderByWithRelationInput | profissional_formacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profissional_formacoes.
     */
    cursor?: profissional_formacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissional_formacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissional_formacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profissional_formacoes.
     */
    distinct?: Profissional_formacoesScalarFieldEnum | Profissional_formacoesScalarFieldEnum[]
  }

  /**
   * profissional_formacoes findMany
   */
  export type profissional_formacoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_formacoes
     */
    select?: profissional_formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_formacoes
     */
    omit?: profissional_formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_formacoesInclude<ExtArgs> | null
    /**
     * Filter, which profissional_formacoes to fetch.
     */
    where?: profissional_formacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissional_formacoes to fetch.
     */
    orderBy?: profissional_formacoesOrderByWithRelationInput | profissional_formacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profissional_formacoes.
     */
    cursor?: profissional_formacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissional_formacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissional_formacoes.
     */
    skip?: number
    distinct?: Profissional_formacoesScalarFieldEnum | Profissional_formacoesScalarFieldEnum[]
  }

  /**
   * profissional_formacoes create
   */
  export type profissional_formacoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_formacoes
     */
    select?: profissional_formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_formacoes
     */
    omit?: profissional_formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_formacoesInclude<ExtArgs> | null
    /**
     * The data needed to create a profissional_formacoes.
     */
    data: XOR<profissional_formacoesCreateInput, profissional_formacoesUncheckedCreateInput>
  }

  /**
   * profissional_formacoes createMany
   */
  export type profissional_formacoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profissional_formacoes.
     */
    data: profissional_formacoesCreateManyInput | profissional_formacoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profissional_formacoes update
   */
  export type profissional_formacoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_formacoes
     */
    select?: profissional_formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_formacoes
     */
    omit?: profissional_formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_formacoesInclude<ExtArgs> | null
    /**
     * The data needed to update a profissional_formacoes.
     */
    data: XOR<profissional_formacoesUpdateInput, profissional_formacoesUncheckedUpdateInput>
    /**
     * Choose, which profissional_formacoes to update.
     */
    where: profissional_formacoesWhereUniqueInput
  }

  /**
   * profissional_formacoes updateMany
   */
  export type profissional_formacoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profissional_formacoes.
     */
    data: XOR<profissional_formacoesUpdateManyMutationInput, profissional_formacoesUncheckedUpdateManyInput>
    /**
     * Filter which profissional_formacoes to update
     */
    where?: profissional_formacoesWhereInput
    /**
     * Limit how many profissional_formacoes to update.
     */
    limit?: number
  }

  /**
   * profissional_formacoes upsert
   */
  export type profissional_formacoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_formacoes
     */
    select?: profissional_formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_formacoes
     */
    omit?: profissional_formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_formacoesInclude<ExtArgs> | null
    /**
     * The filter to search for the profissional_formacoes to update in case it exists.
     */
    where: profissional_formacoesWhereUniqueInput
    /**
     * In case the profissional_formacoes found by the `where` argument doesn't exist, create a new profissional_formacoes with this data.
     */
    create: XOR<profissional_formacoesCreateInput, profissional_formacoesUncheckedCreateInput>
    /**
     * In case the profissional_formacoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profissional_formacoesUpdateInput, profissional_formacoesUncheckedUpdateInput>
  }

  /**
   * profissional_formacoes delete
   */
  export type profissional_formacoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_formacoes
     */
    select?: profissional_formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_formacoes
     */
    omit?: profissional_formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_formacoesInclude<ExtArgs> | null
    /**
     * Filter which profissional_formacoes to delete.
     */
    where: profissional_formacoesWhereUniqueInput
  }

  /**
   * profissional_formacoes deleteMany
   */
  export type profissional_formacoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profissional_formacoes to delete
     */
    where?: profissional_formacoesWhereInput
    /**
     * Limit how many profissional_formacoes to delete.
     */
    limit?: number
  }

  /**
   * profissional_formacoes without action
   */
  export type profissional_formacoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_formacoes
     */
    select?: profissional_formacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_formacoes
     */
    omit?: profissional_formacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_formacoesInclude<ExtArgs> | null
  }


  /**
   * Model profissional_idiomas
   */

  export type AggregateProfissional_idiomas = {
    _count: Profissional_idiomasCountAggregateOutputType | null
    _avg: Profissional_idiomasAvgAggregateOutputType | null
    _sum: Profissional_idiomasSumAggregateOutputType | null
    _min: Profissional_idiomasMinAggregateOutputType | null
    _max: Profissional_idiomasMaxAggregateOutputType | null
  }

  export type Profissional_idiomasAvgAggregateOutputType = {
    idiomas_id_idioma: number | null
    profissionais_id_profissional: number | null
  }

  export type Profissional_idiomasSumAggregateOutputType = {
    idiomas_id_idioma: number | null
    profissionais_id_profissional: number | null
  }

  export type Profissional_idiomasMinAggregateOutputType = {
    idiomas_id_idioma: number | null
    profissionais_id_profissional: number | null
  }

  export type Profissional_idiomasMaxAggregateOutputType = {
    idiomas_id_idioma: number | null
    profissionais_id_profissional: number | null
  }

  export type Profissional_idiomasCountAggregateOutputType = {
    idiomas_id_idioma: number
    profissionais_id_profissional: number
    _all: number
  }


  export type Profissional_idiomasAvgAggregateInputType = {
    idiomas_id_idioma?: true
    profissionais_id_profissional?: true
  }

  export type Profissional_idiomasSumAggregateInputType = {
    idiomas_id_idioma?: true
    profissionais_id_profissional?: true
  }

  export type Profissional_idiomasMinAggregateInputType = {
    idiomas_id_idioma?: true
    profissionais_id_profissional?: true
  }

  export type Profissional_idiomasMaxAggregateInputType = {
    idiomas_id_idioma?: true
    profissionais_id_profissional?: true
  }

  export type Profissional_idiomasCountAggregateInputType = {
    idiomas_id_idioma?: true
    profissionais_id_profissional?: true
    _all?: true
  }

  export type Profissional_idiomasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profissional_idiomas to aggregate.
     */
    where?: profissional_idiomasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissional_idiomas to fetch.
     */
    orderBy?: profissional_idiomasOrderByWithRelationInput | profissional_idiomasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profissional_idiomasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissional_idiomas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissional_idiomas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profissional_idiomas
    **/
    _count?: true | Profissional_idiomasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Profissional_idiomasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Profissional_idiomasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Profissional_idiomasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Profissional_idiomasMaxAggregateInputType
  }

  export type GetProfissional_idiomasAggregateType<T extends Profissional_idiomasAggregateArgs> = {
        [P in keyof T & keyof AggregateProfissional_idiomas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfissional_idiomas[P]>
      : GetScalarType<T[P], AggregateProfissional_idiomas[P]>
  }




  export type profissional_idiomasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profissional_idiomasWhereInput
    orderBy?: profissional_idiomasOrderByWithAggregationInput | profissional_idiomasOrderByWithAggregationInput[]
    by: Profissional_idiomasScalarFieldEnum[] | Profissional_idiomasScalarFieldEnum
    having?: profissional_idiomasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Profissional_idiomasCountAggregateInputType | true
    _avg?: Profissional_idiomasAvgAggregateInputType
    _sum?: Profissional_idiomasSumAggregateInputType
    _min?: Profissional_idiomasMinAggregateInputType
    _max?: Profissional_idiomasMaxAggregateInputType
  }

  export type Profissional_idiomasGroupByOutputType = {
    idiomas_id_idioma: number
    profissionais_id_profissional: number
    _count: Profissional_idiomasCountAggregateOutputType | null
    _avg: Profissional_idiomasAvgAggregateOutputType | null
    _sum: Profissional_idiomasSumAggregateOutputType | null
    _min: Profissional_idiomasMinAggregateOutputType | null
    _max: Profissional_idiomasMaxAggregateOutputType | null
  }

  type GetProfissional_idiomasGroupByPayload<T extends profissional_idiomasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Profissional_idiomasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Profissional_idiomasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Profissional_idiomasGroupByOutputType[P]>
            : GetScalarType<T[P], Profissional_idiomasGroupByOutputType[P]>
        }
      >
    >


  export type profissional_idiomasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idiomas_id_idioma?: boolean
    profissionais_id_profissional?: boolean
    idiomas?: boolean | idiomasDefaultArgs<ExtArgs>
    profissionais?: boolean | profissionaisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissional_idiomas"]>



  export type profissional_idiomasSelectScalar = {
    idiomas_id_idioma?: boolean
    profissionais_id_profissional?: boolean
  }

  export type profissional_idiomasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idiomas_id_idioma" | "profissionais_id_profissional", ExtArgs["result"]["profissional_idiomas"]>
  export type profissional_idiomasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idiomas?: boolean | idiomasDefaultArgs<ExtArgs>
    profissionais?: boolean | profissionaisDefaultArgs<ExtArgs>
  }

  export type $profissional_idiomasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profissional_idiomas"
    objects: {
      idiomas: Prisma.$idiomasPayload<ExtArgs>
      profissionais: Prisma.$profissionaisPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idiomas_id_idioma: number
      profissionais_id_profissional: number
    }, ExtArgs["result"]["profissional_idiomas"]>
    composites: {}
  }

  type profissional_idiomasGetPayload<S extends boolean | null | undefined | profissional_idiomasDefaultArgs> = $Result.GetResult<Prisma.$profissional_idiomasPayload, S>

  type profissional_idiomasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profissional_idiomasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Profissional_idiomasCountAggregateInputType | true
    }

  export interface profissional_idiomasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profissional_idiomas'], meta: { name: 'profissional_idiomas' } }
    /**
     * Find zero or one Profissional_idiomas that matches the filter.
     * @param {profissional_idiomasFindUniqueArgs} args - Arguments to find a Profissional_idiomas
     * @example
     * // Get one Profissional_idiomas
     * const profissional_idiomas = await prisma.profissional_idiomas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profissional_idiomasFindUniqueArgs>(args: SelectSubset<T, profissional_idiomasFindUniqueArgs<ExtArgs>>): Prisma__profissional_idiomasClient<$Result.GetResult<Prisma.$profissional_idiomasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profissional_idiomas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profissional_idiomasFindUniqueOrThrowArgs} args - Arguments to find a Profissional_idiomas
     * @example
     * // Get one Profissional_idiomas
     * const profissional_idiomas = await prisma.profissional_idiomas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profissional_idiomasFindUniqueOrThrowArgs>(args: SelectSubset<T, profissional_idiomasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profissional_idiomasClient<$Result.GetResult<Prisma.$profissional_idiomasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissional_idiomas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_idiomasFindFirstArgs} args - Arguments to find a Profissional_idiomas
     * @example
     * // Get one Profissional_idiomas
     * const profissional_idiomas = await prisma.profissional_idiomas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profissional_idiomasFindFirstArgs>(args?: SelectSubset<T, profissional_idiomasFindFirstArgs<ExtArgs>>): Prisma__profissional_idiomasClient<$Result.GetResult<Prisma.$profissional_idiomasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissional_idiomas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_idiomasFindFirstOrThrowArgs} args - Arguments to find a Profissional_idiomas
     * @example
     * // Get one Profissional_idiomas
     * const profissional_idiomas = await prisma.profissional_idiomas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profissional_idiomasFindFirstOrThrowArgs>(args?: SelectSubset<T, profissional_idiomasFindFirstOrThrowArgs<ExtArgs>>): Prisma__profissional_idiomasClient<$Result.GetResult<Prisma.$profissional_idiomasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profissional_idiomas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_idiomasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profissional_idiomas
     * const profissional_idiomas = await prisma.profissional_idiomas.findMany()
     * 
     * // Get first 10 Profissional_idiomas
     * const profissional_idiomas = await prisma.profissional_idiomas.findMany({ take: 10 })
     * 
     * // Only select the `idiomas_id_idioma`
     * const profissional_idiomasWithIdiomas_id_idiomaOnly = await prisma.profissional_idiomas.findMany({ select: { idiomas_id_idioma: true } })
     * 
     */
    findMany<T extends profissional_idiomasFindManyArgs>(args?: SelectSubset<T, profissional_idiomasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissional_idiomasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profissional_idiomas.
     * @param {profissional_idiomasCreateArgs} args - Arguments to create a Profissional_idiomas.
     * @example
     * // Create one Profissional_idiomas
     * const Profissional_idiomas = await prisma.profissional_idiomas.create({
     *   data: {
     *     // ... data to create a Profissional_idiomas
     *   }
     * })
     * 
     */
    create<T extends profissional_idiomasCreateArgs>(args: SelectSubset<T, profissional_idiomasCreateArgs<ExtArgs>>): Prisma__profissional_idiomasClient<$Result.GetResult<Prisma.$profissional_idiomasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profissional_idiomas.
     * @param {profissional_idiomasCreateManyArgs} args - Arguments to create many Profissional_idiomas.
     * @example
     * // Create many Profissional_idiomas
     * const profissional_idiomas = await prisma.profissional_idiomas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profissional_idiomasCreateManyArgs>(args?: SelectSubset<T, profissional_idiomasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profissional_idiomas.
     * @param {profissional_idiomasDeleteArgs} args - Arguments to delete one Profissional_idiomas.
     * @example
     * // Delete one Profissional_idiomas
     * const Profissional_idiomas = await prisma.profissional_idiomas.delete({
     *   where: {
     *     // ... filter to delete one Profissional_idiomas
     *   }
     * })
     * 
     */
    delete<T extends profissional_idiomasDeleteArgs>(args: SelectSubset<T, profissional_idiomasDeleteArgs<ExtArgs>>): Prisma__profissional_idiomasClient<$Result.GetResult<Prisma.$profissional_idiomasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profissional_idiomas.
     * @param {profissional_idiomasUpdateArgs} args - Arguments to update one Profissional_idiomas.
     * @example
     * // Update one Profissional_idiomas
     * const profissional_idiomas = await prisma.profissional_idiomas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profissional_idiomasUpdateArgs>(args: SelectSubset<T, profissional_idiomasUpdateArgs<ExtArgs>>): Prisma__profissional_idiomasClient<$Result.GetResult<Prisma.$profissional_idiomasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profissional_idiomas.
     * @param {profissional_idiomasDeleteManyArgs} args - Arguments to filter Profissional_idiomas to delete.
     * @example
     * // Delete a few Profissional_idiomas
     * const { count } = await prisma.profissional_idiomas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profissional_idiomasDeleteManyArgs>(args?: SelectSubset<T, profissional_idiomasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissional_idiomas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_idiomasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profissional_idiomas
     * const profissional_idiomas = await prisma.profissional_idiomas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profissional_idiomasUpdateManyArgs>(args: SelectSubset<T, profissional_idiomasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profissional_idiomas.
     * @param {profissional_idiomasUpsertArgs} args - Arguments to update or create a Profissional_idiomas.
     * @example
     * // Update or create a Profissional_idiomas
     * const profissional_idiomas = await prisma.profissional_idiomas.upsert({
     *   create: {
     *     // ... data to create a Profissional_idiomas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profissional_idiomas we want to update
     *   }
     * })
     */
    upsert<T extends profissional_idiomasUpsertArgs>(args: SelectSubset<T, profissional_idiomasUpsertArgs<ExtArgs>>): Prisma__profissional_idiomasClient<$Result.GetResult<Prisma.$profissional_idiomasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profissional_idiomas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_idiomasCountArgs} args - Arguments to filter Profissional_idiomas to count.
     * @example
     * // Count the number of Profissional_idiomas
     * const count = await prisma.profissional_idiomas.count({
     *   where: {
     *     // ... the filter for the Profissional_idiomas we want to count
     *   }
     * })
    **/
    count<T extends profissional_idiomasCountArgs>(
      args?: Subset<T, profissional_idiomasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Profissional_idiomasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profissional_idiomas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Profissional_idiomasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Profissional_idiomasAggregateArgs>(args: Subset<T, Profissional_idiomasAggregateArgs>): Prisma.PrismaPromise<GetProfissional_idiomasAggregateType<T>>

    /**
     * Group by Profissional_idiomas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_idiomasGroupByArgs} args - Group by arguments.
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
      T extends profissional_idiomasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profissional_idiomasGroupByArgs['orderBy'] }
        : { orderBy?: profissional_idiomasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, profissional_idiomasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfissional_idiomasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profissional_idiomas model
   */
  readonly fields: profissional_idiomasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profissional_idiomas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profissional_idiomasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    idiomas<T extends idiomasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, idiomasDefaultArgs<ExtArgs>>): Prisma__idiomasClient<$Result.GetResult<Prisma.$idiomasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profissionais<T extends profissionaisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, profissionaisDefaultArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the profissional_idiomas model
   */
  interface profissional_idiomasFieldRefs {
    readonly idiomas_id_idioma: FieldRef<"profissional_idiomas", 'Int'>
    readonly profissionais_id_profissional: FieldRef<"profissional_idiomas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * profissional_idiomas findUnique
   */
  export type profissional_idiomasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_idiomas
     */
    select?: profissional_idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_idiomas
     */
    omit?: profissional_idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_idiomasInclude<ExtArgs> | null
    /**
     * Filter, which profissional_idiomas to fetch.
     */
    where: profissional_idiomasWhereUniqueInput
  }

  /**
   * profissional_idiomas findUniqueOrThrow
   */
  export type profissional_idiomasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_idiomas
     */
    select?: profissional_idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_idiomas
     */
    omit?: profissional_idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_idiomasInclude<ExtArgs> | null
    /**
     * Filter, which profissional_idiomas to fetch.
     */
    where: profissional_idiomasWhereUniqueInput
  }

  /**
   * profissional_idiomas findFirst
   */
  export type profissional_idiomasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_idiomas
     */
    select?: profissional_idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_idiomas
     */
    omit?: profissional_idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_idiomasInclude<ExtArgs> | null
    /**
     * Filter, which profissional_idiomas to fetch.
     */
    where?: profissional_idiomasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissional_idiomas to fetch.
     */
    orderBy?: profissional_idiomasOrderByWithRelationInput | profissional_idiomasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profissional_idiomas.
     */
    cursor?: profissional_idiomasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissional_idiomas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissional_idiomas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profissional_idiomas.
     */
    distinct?: Profissional_idiomasScalarFieldEnum | Profissional_idiomasScalarFieldEnum[]
  }

  /**
   * profissional_idiomas findFirstOrThrow
   */
  export type profissional_idiomasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_idiomas
     */
    select?: profissional_idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_idiomas
     */
    omit?: profissional_idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_idiomasInclude<ExtArgs> | null
    /**
     * Filter, which profissional_idiomas to fetch.
     */
    where?: profissional_idiomasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissional_idiomas to fetch.
     */
    orderBy?: profissional_idiomasOrderByWithRelationInput | profissional_idiomasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profissional_idiomas.
     */
    cursor?: profissional_idiomasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissional_idiomas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissional_idiomas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profissional_idiomas.
     */
    distinct?: Profissional_idiomasScalarFieldEnum | Profissional_idiomasScalarFieldEnum[]
  }

  /**
   * profissional_idiomas findMany
   */
  export type profissional_idiomasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_idiomas
     */
    select?: profissional_idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_idiomas
     */
    omit?: profissional_idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_idiomasInclude<ExtArgs> | null
    /**
     * Filter, which profissional_idiomas to fetch.
     */
    where?: profissional_idiomasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissional_idiomas to fetch.
     */
    orderBy?: profissional_idiomasOrderByWithRelationInput | profissional_idiomasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profissional_idiomas.
     */
    cursor?: profissional_idiomasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissional_idiomas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissional_idiomas.
     */
    skip?: number
    distinct?: Profissional_idiomasScalarFieldEnum | Profissional_idiomasScalarFieldEnum[]
  }

  /**
   * profissional_idiomas create
   */
  export type profissional_idiomasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_idiomas
     */
    select?: profissional_idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_idiomas
     */
    omit?: profissional_idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_idiomasInclude<ExtArgs> | null
    /**
     * The data needed to create a profissional_idiomas.
     */
    data: XOR<profissional_idiomasCreateInput, profissional_idiomasUncheckedCreateInput>
  }

  /**
   * profissional_idiomas createMany
   */
  export type profissional_idiomasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profissional_idiomas.
     */
    data: profissional_idiomasCreateManyInput | profissional_idiomasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profissional_idiomas update
   */
  export type profissional_idiomasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_idiomas
     */
    select?: profissional_idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_idiomas
     */
    omit?: profissional_idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_idiomasInclude<ExtArgs> | null
    /**
     * The data needed to update a profissional_idiomas.
     */
    data: XOR<profissional_idiomasUpdateInput, profissional_idiomasUncheckedUpdateInput>
    /**
     * Choose, which profissional_idiomas to update.
     */
    where: profissional_idiomasWhereUniqueInput
  }

  /**
   * profissional_idiomas updateMany
   */
  export type profissional_idiomasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profissional_idiomas.
     */
    data: XOR<profissional_idiomasUpdateManyMutationInput, profissional_idiomasUncheckedUpdateManyInput>
    /**
     * Filter which profissional_idiomas to update
     */
    where?: profissional_idiomasWhereInput
    /**
     * Limit how many profissional_idiomas to update.
     */
    limit?: number
  }

  /**
   * profissional_idiomas upsert
   */
  export type profissional_idiomasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_idiomas
     */
    select?: profissional_idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_idiomas
     */
    omit?: profissional_idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_idiomasInclude<ExtArgs> | null
    /**
     * The filter to search for the profissional_idiomas to update in case it exists.
     */
    where: profissional_idiomasWhereUniqueInput
    /**
     * In case the profissional_idiomas found by the `where` argument doesn't exist, create a new profissional_idiomas with this data.
     */
    create: XOR<profissional_idiomasCreateInput, profissional_idiomasUncheckedCreateInput>
    /**
     * In case the profissional_idiomas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profissional_idiomasUpdateInput, profissional_idiomasUncheckedUpdateInput>
  }

  /**
   * profissional_idiomas delete
   */
  export type profissional_idiomasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_idiomas
     */
    select?: profissional_idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_idiomas
     */
    omit?: profissional_idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_idiomasInclude<ExtArgs> | null
    /**
     * Filter which profissional_idiomas to delete.
     */
    where: profissional_idiomasWhereUniqueInput
  }

  /**
   * profissional_idiomas deleteMany
   */
  export type profissional_idiomasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profissional_idiomas to delete
     */
    where?: profissional_idiomasWhereInput
    /**
     * Limit how many profissional_idiomas to delete.
     */
    limit?: number
  }

  /**
   * profissional_idiomas without action
   */
  export type profissional_idiomasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_idiomas
     */
    select?: profissional_idiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_idiomas
     */
    omit?: profissional_idiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_idiomasInclude<ExtArgs> | null
  }


  /**
   * Model profissional_tags
   */

  export type AggregateProfissional_tags = {
    _count: Profissional_tagsCountAggregateOutputType | null
    _avg: Profissional_tagsAvgAggregateOutputType | null
    _sum: Profissional_tagsSumAggregateOutputType | null
    _min: Profissional_tagsMinAggregateOutputType | null
    _max: Profissional_tagsMaxAggregateOutputType | null
  }

  export type Profissional_tagsAvgAggregateOutputType = {
    tags_id_tag: number | null
    profissionais_id_profissional: number | null
  }

  export type Profissional_tagsSumAggregateOutputType = {
    tags_id_tag: number | null
    profissionais_id_profissional: number | null
  }

  export type Profissional_tagsMinAggregateOutputType = {
    tags_id_tag: number | null
    profissionais_id_profissional: number | null
  }

  export type Profissional_tagsMaxAggregateOutputType = {
    tags_id_tag: number | null
    profissionais_id_profissional: number | null
  }

  export type Profissional_tagsCountAggregateOutputType = {
    tags_id_tag: number
    profissionais_id_profissional: number
    _all: number
  }


  export type Profissional_tagsAvgAggregateInputType = {
    tags_id_tag?: true
    profissionais_id_profissional?: true
  }

  export type Profissional_tagsSumAggregateInputType = {
    tags_id_tag?: true
    profissionais_id_profissional?: true
  }

  export type Profissional_tagsMinAggregateInputType = {
    tags_id_tag?: true
    profissionais_id_profissional?: true
  }

  export type Profissional_tagsMaxAggregateInputType = {
    tags_id_tag?: true
    profissionais_id_profissional?: true
  }

  export type Profissional_tagsCountAggregateInputType = {
    tags_id_tag?: true
    profissionais_id_profissional?: true
    _all?: true
  }

  export type Profissional_tagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profissional_tags to aggregate.
     */
    where?: profissional_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissional_tags to fetch.
     */
    orderBy?: profissional_tagsOrderByWithRelationInput | profissional_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profissional_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissional_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissional_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profissional_tags
    **/
    _count?: true | Profissional_tagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Profissional_tagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Profissional_tagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Profissional_tagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Profissional_tagsMaxAggregateInputType
  }

  export type GetProfissional_tagsAggregateType<T extends Profissional_tagsAggregateArgs> = {
        [P in keyof T & keyof AggregateProfissional_tags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfissional_tags[P]>
      : GetScalarType<T[P], AggregateProfissional_tags[P]>
  }




  export type profissional_tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profissional_tagsWhereInput
    orderBy?: profissional_tagsOrderByWithAggregationInput | profissional_tagsOrderByWithAggregationInput[]
    by: Profissional_tagsScalarFieldEnum[] | Profissional_tagsScalarFieldEnum
    having?: profissional_tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Profissional_tagsCountAggregateInputType | true
    _avg?: Profissional_tagsAvgAggregateInputType
    _sum?: Profissional_tagsSumAggregateInputType
    _min?: Profissional_tagsMinAggregateInputType
    _max?: Profissional_tagsMaxAggregateInputType
  }

  export type Profissional_tagsGroupByOutputType = {
    tags_id_tag: number
    profissionais_id_profissional: number
    _count: Profissional_tagsCountAggregateOutputType | null
    _avg: Profissional_tagsAvgAggregateOutputType | null
    _sum: Profissional_tagsSumAggregateOutputType | null
    _min: Profissional_tagsMinAggregateOutputType | null
    _max: Profissional_tagsMaxAggregateOutputType | null
  }

  type GetProfissional_tagsGroupByPayload<T extends profissional_tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Profissional_tagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Profissional_tagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Profissional_tagsGroupByOutputType[P]>
            : GetScalarType<T[P], Profissional_tagsGroupByOutputType[P]>
        }
      >
    >


  export type profissional_tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tags_id_tag?: boolean
    profissionais_id_profissional?: boolean
    profissionais?: boolean | profissionaisDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissional_tags"]>



  export type profissional_tagsSelectScalar = {
    tags_id_tag?: boolean
    profissionais_id_profissional?: boolean
  }

  export type profissional_tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tags_id_tag" | "profissionais_id_profissional", ExtArgs["result"]["profissional_tags"]>
  export type profissional_tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissionais?: boolean | profissionaisDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }

  export type $profissional_tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profissional_tags"
    objects: {
      profissionais: Prisma.$profissionaisPayload<ExtArgs>
      tags: Prisma.$tagsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tags_id_tag: number
      profissionais_id_profissional: number
    }, ExtArgs["result"]["profissional_tags"]>
    composites: {}
  }

  type profissional_tagsGetPayload<S extends boolean | null | undefined | profissional_tagsDefaultArgs> = $Result.GetResult<Prisma.$profissional_tagsPayload, S>

  type profissional_tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profissional_tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Profissional_tagsCountAggregateInputType | true
    }

  export interface profissional_tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profissional_tags'], meta: { name: 'profissional_tags' } }
    /**
     * Find zero or one Profissional_tags that matches the filter.
     * @param {profissional_tagsFindUniqueArgs} args - Arguments to find a Profissional_tags
     * @example
     * // Get one Profissional_tags
     * const profissional_tags = await prisma.profissional_tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profissional_tagsFindUniqueArgs>(args: SelectSubset<T, profissional_tagsFindUniqueArgs<ExtArgs>>): Prisma__profissional_tagsClient<$Result.GetResult<Prisma.$profissional_tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profissional_tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profissional_tagsFindUniqueOrThrowArgs} args - Arguments to find a Profissional_tags
     * @example
     * // Get one Profissional_tags
     * const profissional_tags = await prisma.profissional_tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profissional_tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, profissional_tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profissional_tagsClient<$Result.GetResult<Prisma.$profissional_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissional_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_tagsFindFirstArgs} args - Arguments to find a Profissional_tags
     * @example
     * // Get one Profissional_tags
     * const profissional_tags = await prisma.profissional_tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profissional_tagsFindFirstArgs>(args?: SelectSubset<T, profissional_tagsFindFirstArgs<ExtArgs>>): Prisma__profissional_tagsClient<$Result.GetResult<Prisma.$profissional_tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissional_tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_tagsFindFirstOrThrowArgs} args - Arguments to find a Profissional_tags
     * @example
     * // Get one Profissional_tags
     * const profissional_tags = await prisma.profissional_tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profissional_tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, profissional_tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__profissional_tagsClient<$Result.GetResult<Prisma.$profissional_tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profissional_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profissional_tags
     * const profissional_tags = await prisma.profissional_tags.findMany()
     * 
     * // Get first 10 Profissional_tags
     * const profissional_tags = await prisma.profissional_tags.findMany({ take: 10 })
     * 
     * // Only select the `tags_id_tag`
     * const profissional_tagsWithTags_id_tagOnly = await prisma.profissional_tags.findMany({ select: { tags_id_tag: true } })
     * 
     */
    findMany<T extends profissional_tagsFindManyArgs>(args?: SelectSubset<T, profissional_tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissional_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profissional_tags.
     * @param {profissional_tagsCreateArgs} args - Arguments to create a Profissional_tags.
     * @example
     * // Create one Profissional_tags
     * const Profissional_tags = await prisma.profissional_tags.create({
     *   data: {
     *     // ... data to create a Profissional_tags
     *   }
     * })
     * 
     */
    create<T extends profissional_tagsCreateArgs>(args: SelectSubset<T, profissional_tagsCreateArgs<ExtArgs>>): Prisma__profissional_tagsClient<$Result.GetResult<Prisma.$profissional_tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profissional_tags.
     * @param {profissional_tagsCreateManyArgs} args - Arguments to create many Profissional_tags.
     * @example
     * // Create many Profissional_tags
     * const profissional_tags = await prisma.profissional_tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profissional_tagsCreateManyArgs>(args?: SelectSubset<T, profissional_tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profissional_tags.
     * @param {profissional_tagsDeleteArgs} args - Arguments to delete one Profissional_tags.
     * @example
     * // Delete one Profissional_tags
     * const Profissional_tags = await prisma.profissional_tags.delete({
     *   where: {
     *     // ... filter to delete one Profissional_tags
     *   }
     * })
     * 
     */
    delete<T extends profissional_tagsDeleteArgs>(args: SelectSubset<T, profissional_tagsDeleteArgs<ExtArgs>>): Prisma__profissional_tagsClient<$Result.GetResult<Prisma.$profissional_tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profissional_tags.
     * @param {profissional_tagsUpdateArgs} args - Arguments to update one Profissional_tags.
     * @example
     * // Update one Profissional_tags
     * const profissional_tags = await prisma.profissional_tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profissional_tagsUpdateArgs>(args: SelectSubset<T, profissional_tagsUpdateArgs<ExtArgs>>): Prisma__profissional_tagsClient<$Result.GetResult<Prisma.$profissional_tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profissional_tags.
     * @param {profissional_tagsDeleteManyArgs} args - Arguments to filter Profissional_tags to delete.
     * @example
     * // Delete a few Profissional_tags
     * const { count } = await prisma.profissional_tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profissional_tagsDeleteManyArgs>(args?: SelectSubset<T, profissional_tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissional_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profissional_tags
     * const profissional_tags = await prisma.profissional_tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profissional_tagsUpdateManyArgs>(args: SelectSubset<T, profissional_tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profissional_tags.
     * @param {profissional_tagsUpsertArgs} args - Arguments to update or create a Profissional_tags.
     * @example
     * // Update or create a Profissional_tags
     * const profissional_tags = await prisma.profissional_tags.upsert({
     *   create: {
     *     // ... data to create a Profissional_tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profissional_tags we want to update
     *   }
     * })
     */
    upsert<T extends profissional_tagsUpsertArgs>(args: SelectSubset<T, profissional_tagsUpsertArgs<ExtArgs>>): Prisma__profissional_tagsClient<$Result.GetResult<Prisma.$profissional_tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profissional_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_tagsCountArgs} args - Arguments to filter Profissional_tags to count.
     * @example
     * // Count the number of Profissional_tags
     * const count = await prisma.profissional_tags.count({
     *   where: {
     *     // ... the filter for the Profissional_tags we want to count
     *   }
     * })
    **/
    count<T extends profissional_tagsCountArgs>(
      args?: Subset<T, profissional_tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Profissional_tagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profissional_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Profissional_tagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Profissional_tagsAggregateArgs>(args: Subset<T, Profissional_tagsAggregateArgs>): Prisma.PrismaPromise<GetProfissional_tagsAggregateType<T>>

    /**
     * Group by Profissional_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissional_tagsGroupByArgs} args - Group by arguments.
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
      T extends profissional_tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profissional_tagsGroupByArgs['orderBy'] }
        : { orderBy?: profissional_tagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, profissional_tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfissional_tagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profissional_tags model
   */
  readonly fields: profissional_tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profissional_tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profissional_tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profissionais<T extends profissionaisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, profissionaisDefaultArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends tagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagsDefaultArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the profissional_tags model
   */
  interface profissional_tagsFieldRefs {
    readonly tags_id_tag: FieldRef<"profissional_tags", 'Int'>
    readonly profissionais_id_profissional: FieldRef<"profissional_tags", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * profissional_tags findUnique
   */
  export type profissional_tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_tags
     */
    select?: profissional_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_tags
     */
    omit?: profissional_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_tagsInclude<ExtArgs> | null
    /**
     * Filter, which profissional_tags to fetch.
     */
    where: profissional_tagsWhereUniqueInput
  }

  /**
   * profissional_tags findUniqueOrThrow
   */
  export type profissional_tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_tags
     */
    select?: profissional_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_tags
     */
    omit?: profissional_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_tagsInclude<ExtArgs> | null
    /**
     * Filter, which profissional_tags to fetch.
     */
    where: profissional_tagsWhereUniqueInput
  }

  /**
   * profissional_tags findFirst
   */
  export type profissional_tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_tags
     */
    select?: profissional_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_tags
     */
    omit?: profissional_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_tagsInclude<ExtArgs> | null
    /**
     * Filter, which profissional_tags to fetch.
     */
    where?: profissional_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissional_tags to fetch.
     */
    orderBy?: profissional_tagsOrderByWithRelationInput | profissional_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profissional_tags.
     */
    cursor?: profissional_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissional_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissional_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profissional_tags.
     */
    distinct?: Profissional_tagsScalarFieldEnum | Profissional_tagsScalarFieldEnum[]
  }

  /**
   * profissional_tags findFirstOrThrow
   */
  export type profissional_tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_tags
     */
    select?: profissional_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_tags
     */
    omit?: profissional_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_tagsInclude<ExtArgs> | null
    /**
     * Filter, which profissional_tags to fetch.
     */
    where?: profissional_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissional_tags to fetch.
     */
    orderBy?: profissional_tagsOrderByWithRelationInput | profissional_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profissional_tags.
     */
    cursor?: profissional_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissional_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissional_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profissional_tags.
     */
    distinct?: Profissional_tagsScalarFieldEnum | Profissional_tagsScalarFieldEnum[]
  }

  /**
   * profissional_tags findMany
   */
  export type profissional_tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_tags
     */
    select?: profissional_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_tags
     */
    omit?: profissional_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_tagsInclude<ExtArgs> | null
    /**
     * Filter, which profissional_tags to fetch.
     */
    where?: profissional_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissional_tags to fetch.
     */
    orderBy?: profissional_tagsOrderByWithRelationInput | profissional_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profissional_tags.
     */
    cursor?: profissional_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissional_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissional_tags.
     */
    skip?: number
    distinct?: Profissional_tagsScalarFieldEnum | Profissional_tagsScalarFieldEnum[]
  }

  /**
   * profissional_tags create
   */
  export type profissional_tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_tags
     */
    select?: profissional_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_tags
     */
    omit?: profissional_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a profissional_tags.
     */
    data: XOR<profissional_tagsCreateInput, profissional_tagsUncheckedCreateInput>
  }

  /**
   * profissional_tags createMany
   */
  export type profissional_tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profissional_tags.
     */
    data: profissional_tagsCreateManyInput | profissional_tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profissional_tags update
   */
  export type profissional_tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_tags
     */
    select?: profissional_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_tags
     */
    omit?: profissional_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a profissional_tags.
     */
    data: XOR<profissional_tagsUpdateInput, profissional_tagsUncheckedUpdateInput>
    /**
     * Choose, which profissional_tags to update.
     */
    where: profissional_tagsWhereUniqueInput
  }

  /**
   * profissional_tags updateMany
   */
  export type profissional_tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profissional_tags.
     */
    data: XOR<profissional_tagsUpdateManyMutationInput, profissional_tagsUncheckedUpdateManyInput>
    /**
     * Filter which profissional_tags to update
     */
    where?: profissional_tagsWhereInput
    /**
     * Limit how many profissional_tags to update.
     */
    limit?: number
  }

  /**
   * profissional_tags upsert
   */
  export type profissional_tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_tags
     */
    select?: profissional_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_tags
     */
    omit?: profissional_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the profissional_tags to update in case it exists.
     */
    where: profissional_tagsWhereUniqueInput
    /**
     * In case the profissional_tags found by the `where` argument doesn't exist, create a new profissional_tags with this data.
     */
    create: XOR<profissional_tagsCreateInput, profissional_tagsUncheckedCreateInput>
    /**
     * In case the profissional_tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profissional_tagsUpdateInput, profissional_tagsUncheckedUpdateInput>
  }

  /**
   * profissional_tags delete
   */
  export type profissional_tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_tags
     */
    select?: profissional_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_tags
     */
    omit?: profissional_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_tagsInclude<ExtArgs> | null
    /**
     * Filter which profissional_tags to delete.
     */
    where: profissional_tagsWhereUniqueInput
  }

  /**
   * profissional_tags deleteMany
   */
  export type profissional_tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profissional_tags to delete
     */
    where?: profissional_tagsWhereInput
    /**
     * Limit how many profissional_tags to delete.
     */
    limit?: number
  }

  /**
   * profissional_tags without action
   */
  export type profissional_tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_tags
     */
    select?: profissional_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_tags
     */
    omit?: profissional_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_tagsInclude<ExtArgs> | null
  }


  /**
   * Model tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsAvgAggregateOutputType = {
    id_tag: number | null
  }

  export type TagsSumAggregateOutputType = {
    id_tag: number | null
  }

  export type TagsMinAggregateOutputType = {
    id_tag: number | null
    nome_tag: string | null
  }

  export type TagsMaxAggregateOutputType = {
    id_tag: number | null
    nome_tag: string | null
  }

  export type TagsCountAggregateOutputType = {
    id_tag: number
    nome_tag: number
    _all: number
  }


  export type TagsAvgAggregateInputType = {
    id_tag?: true
  }

  export type TagsSumAggregateInputType = {
    id_tag?: true
  }

  export type TagsMinAggregateInputType = {
    id_tag?: true
    nome_tag?: true
  }

  export type TagsMaxAggregateInputType = {
    id_tag?: true
    nome_tag?: true
  }

  export type TagsCountAggregateInputType = {
    id_tag?: true
    nome_tag?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to aggregate.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithAggregationInput | tagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _avg?: TagsAvgAggregateInputType
    _sum?: TagsSumAggregateInputType
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id_tag: number
    nome_tag: string
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tag?: boolean
    nome_tag?: boolean
    profissional_tags?: boolean | tags$profissional_tagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>



  export type tagsSelectScalar = {
    id_tag?: boolean
    nome_tag?: boolean
  }

  export type tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tag" | "nome_tag", ExtArgs["result"]["tags"]>
  export type tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional_tags?: boolean | tags$profissional_tagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tags"
    objects: {
      profissional_tags: Prisma.$profissional_tagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tag: number
      nome_tag: string
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type tagsGetPayload<S extends boolean | null | undefined | tagsDefaultArgs> = $Result.GetResult<Prisma.$tagsPayload, S>

  type tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tags'], meta: { name: 'tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {tagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagsFindUniqueArgs>(args: SelectSubset<T, tagsFindUniqueArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagsFindFirstArgs>(args?: SelectSubset<T, tagsFindFirstArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id_tag`
     * const tagsWithId_tagOnly = await prisma.tags.findMany({ select: { id_tag: true } })
     * 
     */
    findMany<T extends tagsFindManyArgs>(args?: SelectSubset<T, tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {tagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends tagsCreateArgs>(args: SelectSubset<T, tagsCreateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagsCreateManyArgs>(args?: SelectSubset<T, tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tags.
     * @param {tagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends tagsDeleteArgs>(args: SelectSubset<T, tagsDeleteArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {tagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagsUpdateArgs>(args: SelectSubset<T, tagsUpdateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagsDeleteManyArgs>(args?: SelectSubset<T, tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagsUpdateManyArgs>(args: SelectSubset<T, tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tags.
     * @param {tagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends tagsUpsertArgs>(args: SelectSubset<T, tagsUpsertArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagsCountArgs>(
      args?: Subset<T, tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsGroupByArgs} args - Group by arguments.
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
      T extends tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagsGroupByArgs['orderBy'] }
        : { orderBy?: tagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tags model
   */
  readonly fields: tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profissional_tags<T extends tags$profissional_tagsArgs<ExtArgs> = {}>(args?: Subset<T, tags$profissional_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissional_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tags model
   */
  interface tagsFieldRefs {
    readonly id_tag: FieldRef<"tags", 'Int'>
    readonly nome_tag: FieldRef<"tags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tags findUnique
   */
  export type tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findUniqueOrThrow
   */
  export type tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findFirst
   */
  export type tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findFirstOrThrow
   */
  export type tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findMany
   */
  export type tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags create
   */
  export type tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a tags.
     */
    data: XOR<tagsCreateInput, tagsUncheckedCreateInput>
  }

  /**
   * tags createMany
   */
  export type tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags update
   */
  export type tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a tags.
     */
    data: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
    /**
     * Choose, which tags to update.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags updateMany
   */
  export type tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags upsert
   */
  export type tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the tags to update in case it exists.
     */
    where: tagsWhereUniqueInput
    /**
     * In case the tags found by the `where` argument doesn't exist, create a new tags with this data.
     */
    create: XOR<tagsCreateInput, tagsUncheckedCreateInput>
    /**
     * In case the tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
  }

  /**
   * tags delete
   */
  export type tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter which tags to delete.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags deleteMany
   */
  export type tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tags.profissional_tags
   */
  export type tags$profissional_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissional_tags
     */
    select?: profissional_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissional_tags
     */
    omit?: profissional_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissional_tagsInclude<ExtArgs> | null
    where?: profissional_tagsWhereInput
    orderBy?: profissional_tagsOrderByWithRelationInput | profissional_tagsOrderByWithRelationInput[]
    cursor?: profissional_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Profissional_tagsScalarFieldEnum | Profissional_tagsScalarFieldEnum[]
  }

  /**
   * tags without action
   */
  export type tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
  }


  /**
   * Model telefones
   */

  export type AggregateTelefones = {
    _count: TelefonesCountAggregateOutputType | null
    _avg: TelefonesAvgAggregateOutputType | null
    _sum: TelefonesSumAggregateOutputType | null
    _min: TelefonesMinAggregateOutputType | null
    _max: TelefonesMaxAggregateOutputType | null
  }

  export type TelefonesAvgAggregateOutputType = {
    id_telefone: number | null
    usuarios_id_usuario: number | null
  }

  export type TelefonesSumAggregateOutputType = {
    id_telefone: number | null
    usuarios_id_usuario: number | null
  }

  export type TelefonesMinAggregateOutputType = {
    id_telefone: number | null
    usuarios_id_usuario: number | null
    ddd: string | null
    numero: string | null
    tipo: $Enums.telefones_tipo | null
  }

  export type TelefonesMaxAggregateOutputType = {
    id_telefone: number | null
    usuarios_id_usuario: number | null
    ddd: string | null
    numero: string | null
    tipo: $Enums.telefones_tipo | null
  }

  export type TelefonesCountAggregateOutputType = {
    id_telefone: number
    usuarios_id_usuario: number
    ddd: number
    numero: number
    tipo: number
    _all: number
  }


  export type TelefonesAvgAggregateInputType = {
    id_telefone?: true
    usuarios_id_usuario?: true
  }

  export type TelefonesSumAggregateInputType = {
    id_telefone?: true
    usuarios_id_usuario?: true
  }

  export type TelefonesMinAggregateInputType = {
    id_telefone?: true
    usuarios_id_usuario?: true
    ddd?: true
    numero?: true
    tipo?: true
  }

  export type TelefonesMaxAggregateInputType = {
    id_telefone?: true
    usuarios_id_usuario?: true
    ddd?: true
    numero?: true
    tipo?: true
  }

  export type TelefonesCountAggregateInputType = {
    id_telefone?: true
    usuarios_id_usuario?: true
    ddd?: true
    numero?: true
    tipo?: true
    _all?: true
  }

  export type TelefonesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which telefones to aggregate.
     */
    where?: telefonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of telefones to fetch.
     */
    orderBy?: telefonesOrderByWithRelationInput | telefonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: telefonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` telefones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned telefones
    **/
    _count?: true | TelefonesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TelefonesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TelefonesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelefonesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelefonesMaxAggregateInputType
  }

  export type GetTelefonesAggregateType<T extends TelefonesAggregateArgs> = {
        [P in keyof T & keyof AggregateTelefones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelefones[P]>
      : GetScalarType<T[P], AggregateTelefones[P]>
  }




  export type telefonesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: telefonesWhereInput
    orderBy?: telefonesOrderByWithAggregationInput | telefonesOrderByWithAggregationInput[]
    by: TelefonesScalarFieldEnum[] | TelefonesScalarFieldEnum
    having?: telefonesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelefonesCountAggregateInputType | true
    _avg?: TelefonesAvgAggregateInputType
    _sum?: TelefonesSumAggregateInputType
    _min?: TelefonesMinAggregateInputType
    _max?: TelefonesMaxAggregateInputType
  }

  export type TelefonesGroupByOutputType = {
    id_telefone: number
    usuarios_id_usuario: number
    ddd: string
    numero: string
    tipo: $Enums.telefones_tipo
    _count: TelefonesCountAggregateOutputType | null
    _avg: TelefonesAvgAggregateOutputType | null
    _sum: TelefonesSumAggregateOutputType | null
    _min: TelefonesMinAggregateOutputType | null
    _max: TelefonesMaxAggregateOutputType | null
  }

  type GetTelefonesGroupByPayload<T extends telefonesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelefonesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelefonesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelefonesGroupByOutputType[P]>
            : GetScalarType<T[P], TelefonesGroupByOutputType[P]>
        }
      >
    >


  export type telefonesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_telefone?: boolean
    usuarios_id_usuario?: boolean
    ddd?: boolean
    numero?: boolean
    tipo?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telefones"]>



  export type telefonesSelectScalar = {
    id_telefone?: boolean
    usuarios_id_usuario?: boolean
    ddd?: boolean
    numero?: boolean
    tipo?: boolean
  }

  export type telefonesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_telefone" | "usuarios_id_usuario" | "ddd" | "numero" | "tipo", ExtArgs["result"]["telefones"]>
  export type telefonesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $telefonesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "telefones"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_telefone: number
      usuarios_id_usuario: number
      ddd: string
      numero: string
      tipo: $Enums.telefones_tipo
    }, ExtArgs["result"]["telefones"]>
    composites: {}
  }

  type telefonesGetPayload<S extends boolean | null | undefined | telefonesDefaultArgs> = $Result.GetResult<Prisma.$telefonesPayload, S>

  type telefonesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<telefonesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelefonesCountAggregateInputType | true
    }

  export interface telefonesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['telefones'], meta: { name: 'telefones' } }
    /**
     * Find zero or one Telefones that matches the filter.
     * @param {telefonesFindUniqueArgs} args - Arguments to find a Telefones
     * @example
     * // Get one Telefones
     * const telefones = await prisma.telefones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends telefonesFindUniqueArgs>(args: SelectSubset<T, telefonesFindUniqueArgs<ExtArgs>>): Prisma__telefonesClient<$Result.GetResult<Prisma.$telefonesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Telefones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {telefonesFindUniqueOrThrowArgs} args - Arguments to find a Telefones
     * @example
     * // Get one Telefones
     * const telefones = await prisma.telefones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends telefonesFindUniqueOrThrowArgs>(args: SelectSubset<T, telefonesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__telefonesClient<$Result.GetResult<Prisma.$telefonesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Telefones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {telefonesFindFirstArgs} args - Arguments to find a Telefones
     * @example
     * // Get one Telefones
     * const telefones = await prisma.telefones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends telefonesFindFirstArgs>(args?: SelectSubset<T, telefonesFindFirstArgs<ExtArgs>>): Prisma__telefonesClient<$Result.GetResult<Prisma.$telefonesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Telefones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {telefonesFindFirstOrThrowArgs} args - Arguments to find a Telefones
     * @example
     * // Get one Telefones
     * const telefones = await prisma.telefones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends telefonesFindFirstOrThrowArgs>(args?: SelectSubset<T, telefonesFindFirstOrThrowArgs<ExtArgs>>): Prisma__telefonesClient<$Result.GetResult<Prisma.$telefonesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Telefones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {telefonesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Telefones
     * const telefones = await prisma.telefones.findMany()
     * 
     * // Get first 10 Telefones
     * const telefones = await prisma.telefones.findMany({ take: 10 })
     * 
     * // Only select the `id_telefone`
     * const telefonesWithId_telefoneOnly = await prisma.telefones.findMany({ select: { id_telefone: true } })
     * 
     */
    findMany<T extends telefonesFindManyArgs>(args?: SelectSubset<T, telefonesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$telefonesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Telefones.
     * @param {telefonesCreateArgs} args - Arguments to create a Telefones.
     * @example
     * // Create one Telefones
     * const Telefones = await prisma.telefones.create({
     *   data: {
     *     // ... data to create a Telefones
     *   }
     * })
     * 
     */
    create<T extends telefonesCreateArgs>(args: SelectSubset<T, telefonesCreateArgs<ExtArgs>>): Prisma__telefonesClient<$Result.GetResult<Prisma.$telefonesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Telefones.
     * @param {telefonesCreateManyArgs} args - Arguments to create many Telefones.
     * @example
     * // Create many Telefones
     * const telefones = await prisma.telefones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends telefonesCreateManyArgs>(args?: SelectSubset<T, telefonesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Telefones.
     * @param {telefonesDeleteArgs} args - Arguments to delete one Telefones.
     * @example
     * // Delete one Telefones
     * const Telefones = await prisma.telefones.delete({
     *   where: {
     *     // ... filter to delete one Telefones
     *   }
     * })
     * 
     */
    delete<T extends telefonesDeleteArgs>(args: SelectSubset<T, telefonesDeleteArgs<ExtArgs>>): Prisma__telefonesClient<$Result.GetResult<Prisma.$telefonesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Telefones.
     * @param {telefonesUpdateArgs} args - Arguments to update one Telefones.
     * @example
     * // Update one Telefones
     * const telefones = await prisma.telefones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends telefonesUpdateArgs>(args: SelectSubset<T, telefonesUpdateArgs<ExtArgs>>): Prisma__telefonesClient<$Result.GetResult<Prisma.$telefonesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Telefones.
     * @param {telefonesDeleteManyArgs} args - Arguments to filter Telefones to delete.
     * @example
     * // Delete a few Telefones
     * const { count } = await prisma.telefones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends telefonesDeleteManyArgs>(args?: SelectSubset<T, telefonesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Telefones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {telefonesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Telefones
     * const telefones = await prisma.telefones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends telefonesUpdateManyArgs>(args: SelectSubset<T, telefonesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Telefones.
     * @param {telefonesUpsertArgs} args - Arguments to update or create a Telefones.
     * @example
     * // Update or create a Telefones
     * const telefones = await prisma.telefones.upsert({
     *   create: {
     *     // ... data to create a Telefones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Telefones we want to update
     *   }
     * })
     */
    upsert<T extends telefonesUpsertArgs>(args: SelectSubset<T, telefonesUpsertArgs<ExtArgs>>): Prisma__telefonesClient<$Result.GetResult<Prisma.$telefonesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Telefones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {telefonesCountArgs} args - Arguments to filter Telefones to count.
     * @example
     * // Count the number of Telefones
     * const count = await prisma.telefones.count({
     *   where: {
     *     // ... the filter for the Telefones we want to count
     *   }
     * })
    **/
    count<T extends telefonesCountArgs>(
      args?: Subset<T, telefonesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelefonesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Telefones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefonesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TelefonesAggregateArgs>(args: Subset<T, TelefonesAggregateArgs>): Prisma.PrismaPromise<GetTelefonesAggregateType<T>>

    /**
     * Group by Telefones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {telefonesGroupByArgs} args - Group by arguments.
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
      T extends telefonesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: telefonesGroupByArgs['orderBy'] }
        : { orderBy?: telefonesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, telefonesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelefonesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the telefones model
   */
  readonly fields: telefonesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for telefones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__telefonesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the telefones model
   */
  interface telefonesFieldRefs {
    readonly id_telefone: FieldRef<"telefones", 'Int'>
    readonly usuarios_id_usuario: FieldRef<"telefones", 'Int'>
    readonly ddd: FieldRef<"telefones", 'String'>
    readonly numero: FieldRef<"telefones", 'String'>
    readonly tipo: FieldRef<"telefones", 'telefones_tipo'>
  }
    

  // Custom InputTypes
  /**
   * telefones findUnique
   */
  export type telefonesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefones
     */
    select?: telefonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefones
     */
    omit?: telefonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefonesInclude<ExtArgs> | null
    /**
     * Filter, which telefones to fetch.
     */
    where: telefonesWhereUniqueInput
  }

  /**
   * telefones findUniqueOrThrow
   */
  export type telefonesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefones
     */
    select?: telefonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefones
     */
    omit?: telefonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefonesInclude<ExtArgs> | null
    /**
     * Filter, which telefones to fetch.
     */
    where: telefonesWhereUniqueInput
  }

  /**
   * telefones findFirst
   */
  export type telefonesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefones
     */
    select?: telefonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefones
     */
    omit?: telefonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefonesInclude<ExtArgs> | null
    /**
     * Filter, which telefones to fetch.
     */
    where?: telefonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of telefones to fetch.
     */
    orderBy?: telefonesOrderByWithRelationInput | telefonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for telefones.
     */
    cursor?: telefonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` telefones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of telefones.
     */
    distinct?: TelefonesScalarFieldEnum | TelefonesScalarFieldEnum[]
  }

  /**
   * telefones findFirstOrThrow
   */
  export type telefonesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefones
     */
    select?: telefonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefones
     */
    omit?: telefonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefonesInclude<ExtArgs> | null
    /**
     * Filter, which telefones to fetch.
     */
    where?: telefonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of telefones to fetch.
     */
    orderBy?: telefonesOrderByWithRelationInput | telefonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for telefones.
     */
    cursor?: telefonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` telefones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of telefones.
     */
    distinct?: TelefonesScalarFieldEnum | TelefonesScalarFieldEnum[]
  }

  /**
   * telefones findMany
   */
  export type telefonesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefones
     */
    select?: telefonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefones
     */
    omit?: telefonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefonesInclude<ExtArgs> | null
    /**
     * Filter, which telefones to fetch.
     */
    where?: telefonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of telefones to fetch.
     */
    orderBy?: telefonesOrderByWithRelationInput | telefonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing telefones.
     */
    cursor?: telefonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` telefones.
     */
    skip?: number
    distinct?: TelefonesScalarFieldEnum | TelefonesScalarFieldEnum[]
  }

  /**
   * telefones create
   */
  export type telefonesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefones
     */
    select?: telefonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefones
     */
    omit?: telefonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefonesInclude<ExtArgs> | null
    /**
     * The data needed to create a telefones.
     */
    data: XOR<telefonesCreateInput, telefonesUncheckedCreateInput>
  }

  /**
   * telefones createMany
   */
  export type telefonesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many telefones.
     */
    data: telefonesCreateManyInput | telefonesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * telefones update
   */
  export type telefonesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefones
     */
    select?: telefonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefones
     */
    omit?: telefonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefonesInclude<ExtArgs> | null
    /**
     * The data needed to update a telefones.
     */
    data: XOR<telefonesUpdateInput, telefonesUncheckedUpdateInput>
    /**
     * Choose, which telefones to update.
     */
    where: telefonesWhereUniqueInput
  }

  /**
   * telefones updateMany
   */
  export type telefonesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update telefones.
     */
    data: XOR<telefonesUpdateManyMutationInput, telefonesUncheckedUpdateManyInput>
    /**
     * Filter which telefones to update
     */
    where?: telefonesWhereInput
    /**
     * Limit how many telefones to update.
     */
    limit?: number
  }

  /**
   * telefones upsert
   */
  export type telefonesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefones
     */
    select?: telefonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefones
     */
    omit?: telefonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefonesInclude<ExtArgs> | null
    /**
     * The filter to search for the telefones to update in case it exists.
     */
    where: telefonesWhereUniqueInput
    /**
     * In case the telefones found by the `where` argument doesn't exist, create a new telefones with this data.
     */
    create: XOR<telefonesCreateInput, telefonesUncheckedCreateInput>
    /**
     * In case the telefones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<telefonesUpdateInput, telefonesUncheckedUpdateInput>
  }

  /**
   * telefones delete
   */
  export type telefonesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefones
     */
    select?: telefonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefones
     */
    omit?: telefonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefonesInclude<ExtArgs> | null
    /**
     * Filter which telefones to delete.
     */
    where: telefonesWhereUniqueInput
  }

  /**
   * telefones deleteMany
   */
  export type telefonesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which telefones to delete
     */
    where?: telefonesWhereInput
    /**
     * Limit how many telefones to delete.
     */
    limit?: number
  }

  /**
   * telefones without action
   */
  export type telefonesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefones
     */
    select?: telefonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefones
     */
    omit?: telefonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefonesInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id_usuario: number | null
    email: string | null
    senha: string | null
    data_criacao: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id_usuario: number | null
    email: string | null
    senha: string | null
    data_criacao: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id_usuario: number
    email: number
    senha: number
    data_criacao: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosMinAggregateInputType = {
    id_usuario?: true
    email?: true
    senha?: true
    data_criacao?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id_usuario?: true
    email?: true
    senha?: true
    data_criacao?: true
  }

  export type UsuariosCountAggregateInputType = {
    id_usuario?: true
    email?: true
    senha?: true
    data_criacao?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id_usuario: number
    email: string
    senha: string
    data_criacao: Date
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    email?: boolean
    senha?: boolean
    data_criacao?: boolean
    pacientes?: boolean | usuarios$pacientesArgs<ExtArgs>
    profissionais?: boolean | usuarios$profissionaisArgs<ExtArgs>
    telefones?: boolean | usuarios$telefonesArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>



  export type usuariosSelectScalar = {
    id_usuario?: boolean
    email?: boolean
    senha?: boolean
    data_criacao?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "email" | "senha" | "data_criacao", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | usuarios$pacientesArgs<ExtArgs>
    profissionais?: boolean | usuarios$profissionaisArgs<ExtArgs>
    telefones?: boolean | usuarios$telefonesArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      pacientes: Prisma.$pacientesPayload<ExtArgs>[]
      profissionais: Prisma.$profissionaisPayload<ExtArgs>[]
      telefones: Prisma.$telefonesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      email: string
      senha: string
      data_criacao: Date
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacientes<T extends usuarios$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$pacientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profissionais<T extends usuarios$profissionaisArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$profissionaisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    telefones<T extends usuarios$telefonesArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$telefonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$telefonesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id_usuario: FieldRef<"usuarios", 'Int'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly senha: FieldRef<"usuarios", 'String'>
    readonly data_criacao: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.pacientes
   */
  export type usuarios$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    where?: pacientesWhereInput
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    cursor?: pacientesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * usuarios.profissionais
   */
  export type usuarios$profissionaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    where?: profissionaisWhereInput
    orderBy?: profissionaisOrderByWithRelationInput | profissionaisOrderByWithRelationInput[]
    cursor?: profissionaisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfissionaisScalarFieldEnum | ProfissionaisScalarFieldEnum[]
  }

  /**
   * usuarios.telefones
   */
  export type usuarios$telefonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the telefones
     */
    select?: telefonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the telefones
     */
    omit?: telefonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: telefonesInclude<ExtArgs> | null
    where?: telefonesWhereInput
    orderBy?: telefonesOrderByWithRelationInput | telefonesOrderByWithRelationInput[]
    cursor?: telefonesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TelefonesScalarFieldEnum | TelefonesScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
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


  export const AgendamentosScalarFieldEnum: {
    id_agendamento: 'id_agendamento',
    profissionais_id_profissional: 'profissionais_id_profissional',
    pacientes_id_paciente: 'pacientes_id_paciente',
    enderecos_id_endereco: 'enderecos_id_endereco',
    data_horario_inicio: 'data_horario_inicio',
    duracao_consulta_minutos: 'duracao_consulta_minutos',
    data_criacao: 'data_criacao',
    status: 'status',
    nota_atendimento: 'nota_atendimento',
    avaliacao: 'avaliacao'
  };

  export type AgendamentosScalarFieldEnum = (typeof AgendamentosScalarFieldEnum)[keyof typeof AgendamentosScalarFieldEnum]


  export const EnderecosScalarFieldEnum: {
    id_endereco: 'id_endereco',
    estado: 'estado',
    cidade: 'cidade',
    apelido_endereco: 'apelido_endereco',
    cep: 'cep',
    logradouro: 'logradouro',
    numero: 'numero',
    bairro: 'bairro',
    complemento: 'complemento'
  };

  export type EnderecosScalarFieldEnum = (typeof EnderecosScalarFieldEnum)[keyof typeof EnderecosScalarFieldEnum]


  export const EspecialidadesScalarFieldEnum: {
    id_especialidade: 'id_especialidade',
    nome_especialidade: 'nome_especialidade'
  };

  export type EspecialidadesScalarFieldEnum = (typeof EspecialidadesScalarFieldEnum)[keyof typeof EspecialidadesScalarFieldEnum]


  export const FormacoesScalarFieldEnum: {
    id_formacao: 'id_formacao',
    formacao: 'formacao'
  };

  export type FormacoesScalarFieldEnum = (typeof FormacoesScalarFieldEnum)[keyof typeof FormacoesScalarFieldEnum]


  export const Horarios_trabalhoScalarFieldEnum: {
    id_horario_trabalho: 'id_horario_trabalho',
    profissionais_id_profissional: 'profissionais_id_profissional',
    dia_semana: 'dia_semana',
    horario_inicio: 'horario_inicio',
    horario_fim: 'horario_fim'
  };

  export type Horarios_trabalhoScalarFieldEnum = (typeof Horarios_trabalhoScalarFieldEnum)[keyof typeof Horarios_trabalhoScalarFieldEnum]


  export const IdiomasScalarFieldEnum: {
    id_idioma: 'id_idioma',
    idioma: 'idioma'
  };

  export type IdiomasScalarFieldEnum = (typeof IdiomasScalarFieldEnum)[keyof typeof IdiomasScalarFieldEnum]


  export const PacientesScalarFieldEnum: {
    id_paciente: 'id_paciente',
    usuarios_id_usuario: 'usuarios_id_usuario',
    enderecos_id_endereco: 'enderecos_id_endereco',
    nome_paciente: 'nome_paciente',
    cpf: 'cpf',
    data_nascimento: 'data_nascimento',
    nivel_tea: 'nivel_tea',
    e_titular: 'e_titular',
    nome_titular: 'nome_titular'
  };

  export type PacientesScalarFieldEnum = (typeof PacientesScalarFieldEnum)[keyof typeof PacientesScalarFieldEnum]


  export const ProfissionaisScalarFieldEnum: {
    id_profissional: 'id_profissional',
    usuarios_id_usuario: 'usuarios_id_usuario',
    enderecos_id_endereco: 'enderecos_id_endereco',
    foto_perfil_url: 'foto_perfil_url',
    nome: 'nome',
    cpf: 'cpf',
    tipo_registro: 'tipo_registro',
    numero_registro: 'numero_registro',
    uf_registro: 'uf_registro',
    descricao: 'descricao',
    valor_consulta: 'valor_consulta',
    aceita_convenio: 'aceita_convenio'
  };

  export type ProfissionaisScalarFieldEnum = (typeof ProfissionaisScalarFieldEnum)[keyof typeof ProfissionaisScalarFieldEnum]


  export const Profissional_especialidadesScalarFieldEnum: {
    profissionais_id_profissional: 'profissionais_id_profissional',
    especialidades_id_especialidade: 'especialidades_id_especialidade'
  };

  export type Profissional_especialidadesScalarFieldEnum = (typeof Profissional_especialidadesScalarFieldEnum)[keyof typeof Profissional_especialidadesScalarFieldEnum]


  export const Profissional_formacoesScalarFieldEnum: {
    formacoes_id_formacao: 'formacoes_id_formacao',
    profissionais_id_profissional: 'profissionais_id_profissional'
  };

  export type Profissional_formacoesScalarFieldEnum = (typeof Profissional_formacoesScalarFieldEnum)[keyof typeof Profissional_formacoesScalarFieldEnum]


  export const Profissional_idiomasScalarFieldEnum: {
    idiomas_id_idioma: 'idiomas_id_idioma',
    profissionais_id_profissional: 'profissionais_id_profissional'
  };

  export type Profissional_idiomasScalarFieldEnum = (typeof Profissional_idiomasScalarFieldEnum)[keyof typeof Profissional_idiomasScalarFieldEnum]


  export const Profissional_tagsScalarFieldEnum: {
    tags_id_tag: 'tags_id_tag',
    profissionais_id_profissional: 'profissionais_id_profissional'
  };

  export type Profissional_tagsScalarFieldEnum = (typeof Profissional_tagsScalarFieldEnum)[keyof typeof Profissional_tagsScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id_tag: 'id_tag',
    nome_tag: 'nome_tag'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const TelefonesScalarFieldEnum: {
    id_telefone: 'id_telefone',
    usuarios_id_usuario: 'usuarios_id_usuario',
    ddd: 'ddd',
    numero: 'numero',
    tipo: 'tipo'
  };

  export type TelefonesScalarFieldEnum = (typeof TelefonesScalarFieldEnum)[keyof typeof TelefonesScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id_usuario: 'id_usuario',
    email: 'email',
    senha: 'senha',
    data_criacao: 'data_criacao'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const agendamentosOrderByRelevanceFieldEnum: {
    avaliacao: 'avaliacao'
  };

  export type agendamentosOrderByRelevanceFieldEnum = (typeof agendamentosOrderByRelevanceFieldEnum)[keyof typeof agendamentosOrderByRelevanceFieldEnum]


  export const enderecosOrderByRelevanceFieldEnum: {
    estado: 'estado',
    cidade: 'cidade',
    apelido_endereco: 'apelido_endereco',
    cep: 'cep',
    logradouro: 'logradouro',
    numero: 'numero',
    bairro: 'bairro',
    complemento: 'complemento'
  };

  export type enderecosOrderByRelevanceFieldEnum = (typeof enderecosOrderByRelevanceFieldEnum)[keyof typeof enderecosOrderByRelevanceFieldEnum]


  export const especialidadesOrderByRelevanceFieldEnum: {
    nome_especialidade: 'nome_especialidade'
  };

  export type especialidadesOrderByRelevanceFieldEnum = (typeof especialidadesOrderByRelevanceFieldEnum)[keyof typeof especialidadesOrderByRelevanceFieldEnum]


  export const formacoesOrderByRelevanceFieldEnum: {
    formacao: 'formacao'
  };

  export type formacoesOrderByRelevanceFieldEnum = (typeof formacoesOrderByRelevanceFieldEnum)[keyof typeof formacoesOrderByRelevanceFieldEnum]


  export const idiomasOrderByRelevanceFieldEnum: {
    idioma: 'idioma'
  };

  export type idiomasOrderByRelevanceFieldEnum = (typeof idiomasOrderByRelevanceFieldEnum)[keyof typeof idiomasOrderByRelevanceFieldEnum]


  export const pacientesOrderByRelevanceFieldEnum: {
    nome_paciente: 'nome_paciente',
    cpf: 'cpf',
    nome_titular: 'nome_titular'
  };

  export type pacientesOrderByRelevanceFieldEnum = (typeof pacientesOrderByRelevanceFieldEnum)[keyof typeof pacientesOrderByRelevanceFieldEnum]


  export const profissionaisOrderByRelevanceFieldEnum: {
    foto_perfil_url: 'foto_perfil_url',
    nome: 'nome',
    cpf: 'cpf',
    numero_registro: 'numero_registro',
    uf_registro: 'uf_registro',
    descricao: 'descricao'
  };

  export type profissionaisOrderByRelevanceFieldEnum = (typeof profissionaisOrderByRelevanceFieldEnum)[keyof typeof profissionaisOrderByRelevanceFieldEnum]


  export const tagsOrderByRelevanceFieldEnum: {
    nome_tag: 'nome_tag'
  };

  export type tagsOrderByRelevanceFieldEnum = (typeof tagsOrderByRelevanceFieldEnum)[keyof typeof tagsOrderByRelevanceFieldEnum]


  export const telefonesOrderByRelevanceFieldEnum: {
    ddd: 'ddd',
    numero: 'numero'
  };

  export type telefonesOrderByRelevanceFieldEnum = (typeof telefonesOrderByRelevanceFieldEnum)[keyof typeof telefonesOrderByRelevanceFieldEnum]


  export const usuariosOrderByRelevanceFieldEnum: {
    email: 'email',
    senha: 'senha'
  };

  export type usuariosOrderByRelevanceFieldEnum = (typeof usuariosOrderByRelevanceFieldEnum)[keyof typeof usuariosOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'agendamentos_status'
   */
  export type Enumagendamentos_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'agendamentos_status'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'pacientes_nivel_tea'
   */
  export type Enumpacientes_nivel_teaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pacientes_nivel_tea'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'profissionais_tipo_registro'
   */
  export type Enumprofissionais_tipo_registroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'profissionais_tipo_registro'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'telefones_tipo'
   */
  export type Enumtelefones_tipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'telefones_tipo'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type agendamentosWhereInput = {
    AND?: agendamentosWhereInput | agendamentosWhereInput[]
    OR?: agendamentosWhereInput[]
    NOT?: agendamentosWhereInput | agendamentosWhereInput[]
    id_agendamento?: IntFilter<"agendamentos"> | number
    profissionais_id_profissional?: IntFilter<"agendamentos"> | number
    pacientes_id_paciente?: IntFilter<"agendamentos"> | number
    enderecos_id_endereco?: IntFilter<"agendamentos"> | number
    data_horario_inicio?: DateTimeFilter<"agendamentos"> | Date | string
    duracao_consulta_minutos?: IntFilter<"agendamentos"> | number
    data_criacao?: DateTimeFilter<"agendamentos"> | Date | string
    status?: Enumagendamentos_statusFilter<"agendamentos"> | $Enums.agendamentos_status
    nota_atendimento?: IntNullableFilter<"agendamentos"> | number | null
    avaliacao?: StringNullableFilter<"agendamentos"> | string | null
    enderecos?: XOR<EnderecosScalarRelationFilter, enderecosWhereInput>
    pacientes?: XOR<PacientesScalarRelationFilter, pacientesWhereInput>
    profissionais?: XOR<ProfissionaisScalarRelationFilter, profissionaisWhereInput>
  }

  export type agendamentosOrderByWithRelationInput = {
    id_agendamento?: SortOrder
    profissionais_id_profissional?: SortOrder
    pacientes_id_paciente?: SortOrder
    enderecos_id_endereco?: SortOrder
    data_horario_inicio?: SortOrder
    duracao_consulta_minutos?: SortOrder
    data_criacao?: SortOrder
    status?: SortOrder
    nota_atendimento?: SortOrderInput | SortOrder
    avaliacao?: SortOrderInput | SortOrder
    enderecos?: enderecosOrderByWithRelationInput
    pacientes?: pacientesOrderByWithRelationInput
    profissionais?: profissionaisOrderByWithRelationInput
    _relevance?: agendamentosOrderByRelevanceInput
  }

  export type agendamentosWhereUniqueInput = Prisma.AtLeast<{
    id_agendamento?: number
    AND?: agendamentosWhereInput | agendamentosWhereInput[]
    OR?: agendamentosWhereInput[]
    NOT?: agendamentosWhereInput | agendamentosWhereInput[]
    profissionais_id_profissional?: IntFilter<"agendamentos"> | number
    pacientes_id_paciente?: IntFilter<"agendamentos"> | number
    enderecos_id_endereco?: IntFilter<"agendamentos"> | number
    data_horario_inicio?: DateTimeFilter<"agendamentos"> | Date | string
    duracao_consulta_minutos?: IntFilter<"agendamentos"> | number
    data_criacao?: DateTimeFilter<"agendamentos"> | Date | string
    status?: Enumagendamentos_statusFilter<"agendamentos"> | $Enums.agendamentos_status
    nota_atendimento?: IntNullableFilter<"agendamentos"> | number | null
    avaliacao?: StringNullableFilter<"agendamentos"> | string | null
    enderecos?: XOR<EnderecosScalarRelationFilter, enderecosWhereInput>
    pacientes?: XOR<PacientesScalarRelationFilter, pacientesWhereInput>
    profissionais?: XOR<ProfissionaisScalarRelationFilter, profissionaisWhereInput>
  }, "id_agendamento">

  export type agendamentosOrderByWithAggregationInput = {
    id_agendamento?: SortOrder
    profissionais_id_profissional?: SortOrder
    pacientes_id_paciente?: SortOrder
    enderecos_id_endereco?: SortOrder
    data_horario_inicio?: SortOrder
    duracao_consulta_minutos?: SortOrder
    data_criacao?: SortOrder
    status?: SortOrder
    nota_atendimento?: SortOrderInput | SortOrder
    avaliacao?: SortOrderInput | SortOrder
    _count?: agendamentosCountOrderByAggregateInput
    _avg?: agendamentosAvgOrderByAggregateInput
    _max?: agendamentosMaxOrderByAggregateInput
    _min?: agendamentosMinOrderByAggregateInput
    _sum?: agendamentosSumOrderByAggregateInput
  }

  export type agendamentosScalarWhereWithAggregatesInput = {
    AND?: agendamentosScalarWhereWithAggregatesInput | agendamentosScalarWhereWithAggregatesInput[]
    OR?: agendamentosScalarWhereWithAggregatesInput[]
    NOT?: agendamentosScalarWhereWithAggregatesInput | agendamentosScalarWhereWithAggregatesInput[]
    id_agendamento?: IntWithAggregatesFilter<"agendamentos"> | number
    profissionais_id_profissional?: IntWithAggregatesFilter<"agendamentos"> | number
    pacientes_id_paciente?: IntWithAggregatesFilter<"agendamentos"> | number
    enderecos_id_endereco?: IntWithAggregatesFilter<"agendamentos"> | number
    data_horario_inicio?: DateTimeWithAggregatesFilter<"agendamentos"> | Date | string
    duracao_consulta_minutos?: IntWithAggregatesFilter<"agendamentos"> | number
    data_criacao?: DateTimeWithAggregatesFilter<"agendamentos"> | Date | string
    status?: Enumagendamentos_statusWithAggregatesFilter<"agendamentos"> | $Enums.agendamentos_status
    nota_atendimento?: IntNullableWithAggregatesFilter<"agendamentos"> | number | null
    avaliacao?: StringNullableWithAggregatesFilter<"agendamentos"> | string | null
  }

  export type enderecosWhereInput = {
    AND?: enderecosWhereInput | enderecosWhereInput[]
    OR?: enderecosWhereInput[]
    NOT?: enderecosWhereInput | enderecosWhereInput[]
    id_endereco?: IntFilter<"enderecos"> | number
    estado?: StringFilter<"enderecos"> | string
    cidade?: StringFilter<"enderecos"> | string
    apelido_endereco?: StringNullableFilter<"enderecos"> | string | null
    cep?: StringFilter<"enderecos"> | string
    logradouro?: StringFilter<"enderecos"> | string
    numero?: StringFilter<"enderecos"> | string
    bairro?: StringFilter<"enderecos"> | string
    complemento?: StringNullableFilter<"enderecos"> | string | null
    agendamentos?: AgendamentosListRelationFilter
    pacientes?: PacientesListRelationFilter
    profissionais?: ProfissionaisListRelationFilter
  }

  export type enderecosOrderByWithRelationInput = {
    id_endereco?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    apelido_endereco?: SortOrderInput | SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    complemento?: SortOrderInput | SortOrder
    agendamentos?: agendamentosOrderByRelationAggregateInput
    pacientes?: pacientesOrderByRelationAggregateInput
    profissionais?: profissionaisOrderByRelationAggregateInput
    _relevance?: enderecosOrderByRelevanceInput
  }

  export type enderecosWhereUniqueInput = Prisma.AtLeast<{
    id_endereco?: number
    AND?: enderecosWhereInput | enderecosWhereInput[]
    OR?: enderecosWhereInput[]
    NOT?: enderecosWhereInput | enderecosWhereInput[]
    estado?: StringFilter<"enderecos"> | string
    cidade?: StringFilter<"enderecos"> | string
    apelido_endereco?: StringNullableFilter<"enderecos"> | string | null
    cep?: StringFilter<"enderecos"> | string
    logradouro?: StringFilter<"enderecos"> | string
    numero?: StringFilter<"enderecos"> | string
    bairro?: StringFilter<"enderecos"> | string
    complemento?: StringNullableFilter<"enderecos"> | string | null
    agendamentos?: AgendamentosListRelationFilter
    pacientes?: PacientesListRelationFilter
    profissionais?: ProfissionaisListRelationFilter
  }, "id_endereco">

  export type enderecosOrderByWithAggregationInput = {
    id_endereco?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    apelido_endereco?: SortOrderInput | SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    complemento?: SortOrderInput | SortOrder
    _count?: enderecosCountOrderByAggregateInput
    _avg?: enderecosAvgOrderByAggregateInput
    _max?: enderecosMaxOrderByAggregateInput
    _min?: enderecosMinOrderByAggregateInput
    _sum?: enderecosSumOrderByAggregateInput
  }

  export type enderecosScalarWhereWithAggregatesInput = {
    AND?: enderecosScalarWhereWithAggregatesInput | enderecosScalarWhereWithAggregatesInput[]
    OR?: enderecosScalarWhereWithAggregatesInput[]
    NOT?: enderecosScalarWhereWithAggregatesInput | enderecosScalarWhereWithAggregatesInput[]
    id_endereco?: IntWithAggregatesFilter<"enderecos"> | number
    estado?: StringWithAggregatesFilter<"enderecos"> | string
    cidade?: StringWithAggregatesFilter<"enderecos"> | string
    apelido_endereco?: StringNullableWithAggregatesFilter<"enderecos"> | string | null
    cep?: StringWithAggregatesFilter<"enderecos"> | string
    logradouro?: StringWithAggregatesFilter<"enderecos"> | string
    numero?: StringWithAggregatesFilter<"enderecos"> | string
    bairro?: StringWithAggregatesFilter<"enderecos"> | string
    complemento?: StringNullableWithAggregatesFilter<"enderecos"> | string | null
  }

  export type especialidadesWhereInput = {
    AND?: especialidadesWhereInput | especialidadesWhereInput[]
    OR?: especialidadesWhereInput[]
    NOT?: especialidadesWhereInput | especialidadesWhereInput[]
    id_especialidade?: IntFilter<"especialidades"> | number
    nome_especialidade?: StringFilter<"especialidades"> | string
    profissional_especialidades?: Profissional_especialidadesListRelationFilter
  }

  export type especialidadesOrderByWithRelationInput = {
    id_especialidade?: SortOrder
    nome_especialidade?: SortOrder
    profissional_especialidades?: profissional_especialidadesOrderByRelationAggregateInput
    _relevance?: especialidadesOrderByRelevanceInput
  }

  export type especialidadesWhereUniqueInput = Prisma.AtLeast<{
    id_especialidade?: number
    nome_especialidade?: string
    AND?: especialidadesWhereInput | especialidadesWhereInput[]
    OR?: especialidadesWhereInput[]
    NOT?: especialidadesWhereInput | especialidadesWhereInput[]
    profissional_especialidades?: Profissional_especialidadesListRelationFilter
  }, "id_especialidade" | "nome_especialidade">

  export type especialidadesOrderByWithAggregationInput = {
    id_especialidade?: SortOrder
    nome_especialidade?: SortOrder
    _count?: especialidadesCountOrderByAggregateInput
    _avg?: especialidadesAvgOrderByAggregateInput
    _max?: especialidadesMaxOrderByAggregateInput
    _min?: especialidadesMinOrderByAggregateInput
    _sum?: especialidadesSumOrderByAggregateInput
  }

  export type especialidadesScalarWhereWithAggregatesInput = {
    AND?: especialidadesScalarWhereWithAggregatesInput | especialidadesScalarWhereWithAggregatesInput[]
    OR?: especialidadesScalarWhereWithAggregatesInput[]
    NOT?: especialidadesScalarWhereWithAggregatesInput | especialidadesScalarWhereWithAggregatesInput[]
    id_especialidade?: IntWithAggregatesFilter<"especialidades"> | number
    nome_especialidade?: StringWithAggregatesFilter<"especialidades"> | string
  }

  export type formacoesWhereInput = {
    AND?: formacoesWhereInput | formacoesWhereInput[]
    OR?: formacoesWhereInput[]
    NOT?: formacoesWhereInput | formacoesWhereInput[]
    id_formacao?: IntFilter<"formacoes"> | number
    formacao?: StringFilter<"formacoes"> | string
    profissional_formacoes?: Profissional_formacoesListRelationFilter
  }

  export type formacoesOrderByWithRelationInput = {
    id_formacao?: SortOrder
    formacao?: SortOrder
    profissional_formacoes?: profissional_formacoesOrderByRelationAggregateInput
    _relevance?: formacoesOrderByRelevanceInput
  }

  export type formacoesWhereUniqueInput = Prisma.AtLeast<{
    id_formacao?: number
    formacao?: string
    AND?: formacoesWhereInput | formacoesWhereInput[]
    OR?: formacoesWhereInput[]
    NOT?: formacoesWhereInput | formacoesWhereInput[]
    profissional_formacoes?: Profissional_formacoesListRelationFilter
  }, "id_formacao" | "formacao">

  export type formacoesOrderByWithAggregationInput = {
    id_formacao?: SortOrder
    formacao?: SortOrder
    _count?: formacoesCountOrderByAggregateInput
    _avg?: formacoesAvgOrderByAggregateInput
    _max?: formacoesMaxOrderByAggregateInput
    _min?: formacoesMinOrderByAggregateInput
    _sum?: formacoesSumOrderByAggregateInput
  }

  export type formacoesScalarWhereWithAggregatesInput = {
    AND?: formacoesScalarWhereWithAggregatesInput | formacoesScalarWhereWithAggregatesInput[]
    OR?: formacoesScalarWhereWithAggregatesInput[]
    NOT?: formacoesScalarWhereWithAggregatesInput | formacoesScalarWhereWithAggregatesInput[]
    id_formacao?: IntWithAggregatesFilter<"formacoes"> | number
    formacao?: StringWithAggregatesFilter<"formacoes"> | string
  }

  export type horarios_trabalhoWhereInput = {
    AND?: horarios_trabalhoWhereInput | horarios_trabalhoWhereInput[]
    OR?: horarios_trabalhoWhereInput[]
    NOT?: horarios_trabalhoWhereInput | horarios_trabalhoWhereInput[]
    id_horario_trabalho?: IntFilter<"horarios_trabalho"> | number
    profissionais_id_profissional?: IntFilter<"horarios_trabalho"> | number
    dia_semana?: IntFilter<"horarios_trabalho"> | number
    horario_inicio?: DateTimeFilter<"horarios_trabalho"> | Date | string
    horario_fim?: DateTimeFilter<"horarios_trabalho"> | Date | string
    profissionais?: XOR<ProfissionaisScalarRelationFilter, profissionaisWhereInput>
  }

  export type horarios_trabalhoOrderByWithRelationInput = {
    id_horario_trabalho?: SortOrder
    profissionais_id_profissional?: SortOrder
    dia_semana?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
    profissionais?: profissionaisOrderByWithRelationInput
  }

  export type horarios_trabalhoWhereUniqueInput = Prisma.AtLeast<{
    id_horario_trabalho?: number
    AND?: horarios_trabalhoWhereInput | horarios_trabalhoWhereInput[]
    OR?: horarios_trabalhoWhereInput[]
    NOT?: horarios_trabalhoWhereInput | horarios_trabalhoWhereInput[]
    profissionais_id_profissional?: IntFilter<"horarios_trabalho"> | number
    dia_semana?: IntFilter<"horarios_trabalho"> | number
    horario_inicio?: DateTimeFilter<"horarios_trabalho"> | Date | string
    horario_fim?: DateTimeFilter<"horarios_trabalho"> | Date | string
    profissionais?: XOR<ProfissionaisScalarRelationFilter, profissionaisWhereInput>
  }, "id_horario_trabalho">

  export type horarios_trabalhoOrderByWithAggregationInput = {
    id_horario_trabalho?: SortOrder
    profissionais_id_profissional?: SortOrder
    dia_semana?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
    _count?: horarios_trabalhoCountOrderByAggregateInput
    _avg?: horarios_trabalhoAvgOrderByAggregateInput
    _max?: horarios_trabalhoMaxOrderByAggregateInput
    _min?: horarios_trabalhoMinOrderByAggregateInput
    _sum?: horarios_trabalhoSumOrderByAggregateInput
  }

  export type horarios_trabalhoScalarWhereWithAggregatesInput = {
    AND?: horarios_trabalhoScalarWhereWithAggregatesInput | horarios_trabalhoScalarWhereWithAggregatesInput[]
    OR?: horarios_trabalhoScalarWhereWithAggregatesInput[]
    NOT?: horarios_trabalhoScalarWhereWithAggregatesInput | horarios_trabalhoScalarWhereWithAggregatesInput[]
    id_horario_trabalho?: IntWithAggregatesFilter<"horarios_trabalho"> | number
    profissionais_id_profissional?: IntWithAggregatesFilter<"horarios_trabalho"> | number
    dia_semana?: IntWithAggregatesFilter<"horarios_trabalho"> | number
    horario_inicio?: DateTimeWithAggregatesFilter<"horarios_trabalho"> | Date | string
    horario_fim?: DateTimeWithAggregatesFilter<"horarios_trabalho"> | Date | string
  }

  export type idiomasWhereInput = {
    AND?: idiomasWhereInput | idiomasWhereInput[]
    OR?: idiomasWhereInput[]
    NOT?: idiomasWhereInput | idiomasWhereInput[]
    id_idioma?: IntFilter<"idiomas"> | number
    idioma?: StringFilter<"idiomas"> | string
    profissional_idiomas?: Profissional_idiomasListRelationFilter
  }

  export type idiomasOrderByWithRelationInput = {
    id_idioma?: SortOrder
    idioma?: SortOrder
    profissional_idiomas?: profissional_idiomasOrderByRelationAggregateInput
    _relevance?: idiomasOrderByRelevanceInput
  }

  export type idiomasWhereUniqueInput = Prisma.AtLeast<{
    id_idioma?: number
    idioma?: string
    AND?: idiomasWhereInput | idiomasWhereInput[]
    OR?: idiomasWhereInput[]
    NOT?: idiomasWhereInput | idiomasWhereInput[]
    profissional_idiomas?: Profissional_idiomasListRelationFilter
  }, "id_idioma" | "idioma">

  export type idiomasOrderByWithAggregationInput = {
    id_idioma?: SortOrder
    idioma?: SortOrder
    _count?: idiomasCountOrderByAggregateInput
    _avg?: idiomasAvgOrderByAggregateInput
    _max?: idiomasMaxOrderByAggregateInput
    _min?: idiomasMinOrderByAggregateInput
    _sum?: idiomasSumOrderByAggregateInput
  }

  export type idiomasScalarWhereWithAggregatesInput = {
    AND?: idiomasScalarWhereWithAggregatesInput | idiomasScalarWhereWithAggregatesInput[]
    OR?: idiomasScalarWhereWithAggregatesInput[]
    NOT?: idiomasScalarWhereWithAggregatesInput | idiomasScalarWhereWithAggregatesInput[]
    id_idioma?: IntWithAggregatesFilter<"idiomas"> | number
    idioma?: StringWithAggregatesFilter<"idiomas"> | string
  }

  export type pacientesWhereInput = {
    AND?: pacientesWhereInput | pacientesWhereInput[]
    OR?: pacientesWhereInput[]
    NOT?: pacientesWhereInput | pacientesWhereInput[]
    id_paciente?: IntFilter<"pacientes"> | number
    usuarios_id_usuario?: IntFilter<"pacientes"> | number
    enderecos_id_endereco?: IntFilter<"pacientes"> | number
    nome_paciente?: StringFilter<"pacientes"> | string
    cpf?: StringFilter<"pacientes"> | string
    data_nascimento?: DateTimeFilter<"pacientes"> | Date | string
    nivel_tea?: Enumpacientes_nivel_teaFilter<"pacientes"> | $Enums.pacientes_nivel_tea
    e_titular?: BoolFilter<"pacientes"> | boolean
    nome_titular?: StringNullableFilter<"pacientes"> | string | null
    agendamentos?: AgendamentosListRelationFilter
    enderecos?: XOR<EnderecosScalarRelationFilter, enderecosWhereInput>
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type pacientesOrderByWithRelationInput = {
    id_paciente?: SortOrder
    usuarios_id_usuario?: SortOrder
    enderecos_id_endereco?: SortOrder
    nome_paciente?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    nivel_tea?: SortOrder
    e_titular?: SortOrder
    nome_titular?: SortOrderInput | SortOrder
    agendamentos?: agendamentosOrderByRelationAggregateInput
    enderecos?: enderecosOrderByWithRelationInput
    usuarios?: usuariosOrderByWithRelationInput
    _relevance?: pacientesOrderByRelevanceInput
  }

  export type pacientesWhereUniqueInput = Prisma.AtLeast<{
    id_paciente?: number
    cpf?: string
    AND?: pacientesWhereInput | pacientesWhereInput[]
    OR?: pacientesWhereInput[]
    NOT?: pacientesWhereInput | pacientesWhereInput[]
    usuarios_id_usuario?: IntFilter<"pacientes"> | number
    enderecos_id_endereco?: IntFilter<"pacientes"> | number
    nome_paciente?: StringFilter<"pacientes"> | string
    data_nascimento?: DateTimeFilter<"pacientes"> | Date | string
    nivel_tea?: Enumpacientes_nivel_teaFilter<"pacientes"> | $Enums.pacientes_nivel_tea
    e_titular?: BoolFilter<"pacientes"> | boolean
    nome_titular?: StringNullableFilter<"pacientes"> | string | null
    agendamentos?: AgendamentosListRelationFilter
    enderecos?: XOR<EnderecosScalarRelationFilter, enderecosWhereInput>
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id_paciente" | "cpf">

  export type pacientesOrderByWithAggregationInput = {
    id_paciente?: SortOrder
    usuarios_id_usuario?: SortOrder
    enderecos_id_endereco?: SortOrder
    nome_paciente?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    nivel_tea?: SortOrder
    e_titular?: SortOrder
    nome_titular?: SortOrderInput | SortOrder
    _count?: pacientesCountOrderByAggregateInput
    _avg?: pacientesAvgOrderByAggregateInput
    _max?: pacientesMaxOrderByAggregateInput
    _min?: pacientesMinOrderByAggregateInput
    _sum?: pacientesSumOrderByAggregateInput
  }

  export type pacientesScalarWhereWithAggregatesInput = {
    AND?: pacientesScalarWhereWithAggregatesInput | pacientesScalarWhereWithAggregatesInput[]
    OR?: pacientesScalarWhereWithAggregatesInput[]
    NOT?: pacientesScalarWhereWithAggregatesInput | pacientesScalarWhereWithAggregatesInput[]
    id_paciente?: IntWithAggregatesFilter<"pacientes"> | number
    usuarios_id_usuario?: IntWithAggregatesFilter<"pacientes"> | number
    enderecos_id_endereco?: IntWithAggregatesFilter<"pacientes"> | number
    nome_paciente?: StringWithAggregatesFilter<"pacientes"> | string
    cpf?: StringWithAggregatesFilter<"pacientes"> | string
    data_nascimento?: DateTimeWithAggregatesFilter<"pacientes"> | Date | string
    nivel_tea?: Enumpacientes_nivel_teaWithAggregatesFilter<"pacientes"> | $Enums.pacientes_nivel_tea
    e_titular?: BoolWithAggregatesFilter<"pacientes"> | boolean
    nome_titular?: StringNullableWithAggregatesFilter<"pacientes"> | string | null
  }

  export type profissionaisWhereInput = {
    AND?: profissionaisWhereInput | profissionaisWhereInput[]
    OR?: profissionaisWhereInput[]
    NOT?: profissionaisWhereInput | profissionaisWhereInput[]
    id_profissional?: IntFilter<"profissionais"> | number
    usuarios_id_usuario?: IntFilter<"profissionais"> | number
    enderecos_id_endereco?: IntFilter<"profissionais"> | number
    foto_perfil_url?: StringNullableFilter<"profissionais"> | string | null
    nome?: StringFilter<"profissionais"> | string
    cpf?: StringFilter<"profissionais"> | string
    tipo_registro?: Enumprofissionais_tipo_registroFilter<"profissionais"> | $Enums.profissionais_tipo_registro
    numero_registro?: StringFilter<"profissionais"> | string
    uf_registro?: StringFilter<"profissionais"> | string
    descricao?: StringNullableFilter<"profissionais"> | string | null
    valor_consulta?: DecimalNullableFilter<"profissionais"> | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: BoolNullableFilter<"profissionais"> | boolean | null
    agendamentos?: AgendamentosListRelationFilter
    horarios_trabalho?: Horarios_trabalhoListRelationFilter
    enderecos?: XOR<EnderecosScalarRelationFilter, enderecosWhereInput>
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    profissional_especialidades?: Profissional_especialidadesListRelationFilter
    profissional_formacoes?: Profissional_formacoesListRelationFilter
    profissional_idiomas?: Profissional_idiomasListRelationFilter
    profissional_tags?: Profissional_tagsListRelationFilter
  }

  export type profissionaisOrderByWithRelationInput = {
    id_profissional?: SortOrder
    usuarios_id_usuario?: SortOrder
    enderecos_id_endereco?: SortOrder
    foto_perfil_url?: SortOrderInput | SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    tipo_registro?: SortOrder
    numero_registro?: SortOrder
    uf_registro?: SortOrder
    descricao?: SortOrderInput | SortOrder
    valor_consulta?: SortOrderInput | SortOrder
    aceita_convenio?: SortOrderInput | SortOrder
    agendamentos?: agendamentosOrderByRelationAggregateInput
    horarios_trabalho?: horarios_trabalhoOrderByRelationAggregateInput
    enderecos?: enderecosOrderByWithRelationInput
    usuarios?: usuariosOrderByWithRelationInput
    profissional_especialidades?: profissional_especialidadesOrderByRelationAggregateInput
    profissional_formacoes?: profissional_formacoesOrderByRelationAggregateInput
    profissional_idiomas?: profissional_idiomasOrderByRelationAggregateInput
    profissional_tags?: profissional_tagsOrderByRelationAggregateInput
    _relevance?: profissionaisOrderByRelevanceInput
  }

  export type profissionaisWhereUniqueInput = Prisma.AtLeast<{
    id_profissional?: number
    cpf?: string
    AND?: profissionaisWhereInput | profissionaisWhereInput[]
    OR?: profissionaisWhereInput[]
    NOT?: profissionaisWhereInput | profissionaisWhereInput[]
    usuarios_id_usuario?: IntFilter<"profissionais"> | number
    enderecos_id_endereco?: IntFilter<"profissionais"> | number
    foto_perfil_url?: StringNullableFilter<"profissionais"> | string | null
    nome?: StringFilter<"profissionais"> | string
    tipo_registro?: Enumprofissionais_tipo_registroFilter<"profissionais"> | $Enums.profissionais_tipo_registro
    numero_registro?: StringFilter<"profissionais"> | string
    uf_registro?: StringFilter<"profissionais"> | string
    descricao?: StringNullableFilter<"profissionais"> | string | null
    valor_consulta?: DecimalNullableFilter<"profissionais"> | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: BoolNullableFilter<"profissionais"> | boolean | null
    agendamentos?: AgendamentosListRelationFilter
    horarios_trabalho?: Horarios_trabalhoListRelationFilter
    enderecos?: XOR<EnderecosScalarRelationFilter, enderecosWhereInput>
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    profissional_especialidades?: Profissional_especialidadesListRelationFilter
    profissional_formacoes?: Profissional_formacoesListRelationFilter
    profissional_idiomas?: Profissional_idiomasListRelationFilter
    profissional_tags?: Profissional_tagsListRelationFilter
  }, "id_profissional" | "cpf">

  export type profissionaisOrderByWithAggregationInput = {
    id_profissional?: SortOrder
    usuarios_id_usuario?: SortOrder
    enderecos_id_endereco?: SortOrder
    foto_perfil_url?: SortOrderInput | SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    tipo_registro?: SortOrder
    numero_registro?: SortOrder
    uf_registro?: SortOrder
    descricao?: SortOrderInput | SortOrder
    valor_consulta?: SortOrderInput | SortOrder
    aceita_convenio?: SortOrderInput | SortOrder
    _count?: profissionaisCountOrderByAggregateInput
    _avg?: profissionaisAvgOrderByAggregateInput
    _max?: profissionaisMaxOrderByAggregateInput
    _min?: profissionaisMinOrderByAggregateInput
    _sum?: profissionaisSumOrderByAggregateInput
  }

  export type profissionaisScalarWhereWithAggregatesInput = {
    AND?: profissionaisScalarWhereWithAggregatesInput | profissionaisScalarWhereWithAggregatesInput[]
    OR?: profissionaisScalarWhereWithAggregatesInput[]
    NOT?: profissionaisScalarWhereWithAggregatesInput | profissionaisScalarWhereWithAggregatesInput[]
    id_profissional?: IntWithAggregatesFilter<"profissionais"> | number
    usuarios_id_usuario?: IntWithAggregatesFilter<"profissionais"> | number
    enderecos_id_endereco?: IntWithAggregatesFilter<"profissionais"> | number
    foto_perfil_url?: StringNullableWithAggregatesFilter<"profissionais"> | string | null
    nome?: StringWithAggregatesFilter<"profissionais"> | string
    cpf?: StringWithAggregatesFilter<"profissionais"> | string
    tipo_registro?: Enumprofissionais_tipo_registroWithAggregatesFilter<"profissionais"> | $Enums.profissionais_tipo_registro
    numero_registro?: StringWithAggregatesFilter<"profissionais"> | string
    uf_registro?: StringWithAggregatesFilter<"profissionais"> | string
    descricao?: StringNullableWithAggregatesFilter<"profissionais"> | string | null
    valor_consulta?: DecimalNullableWithAggregatesFilter<"profissionais"> | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: BoolNullableWithAggregatesFilter<"profissionais"> | boolean | null
  }

  export type profissional_especialidadesWhereInput = {
    AND?: profissional_especialidadesWhereInput | profissional_especialidadesWhereInput[]
    OR?: profissional_especialidadesWhereInput[]
    NOT?: profissional_especialidadesWhereInput | profissional_especialidadesWhereInput[]
    profissionais_id_profissional?: IntFilter<"profissional_especialidades"> | number
    especialidades_id_especialidade?: IntFilter<"profissional_especialidades"> | number
    especialidades?: XOR<EspecialidadesScalarRelationFilter, especialidadesWhereInput>
    profissionais?: XOR<ProfissionaisScalarRelationFilter, profissionaisWhereInput>
  }

  export type profissional_especialidadesOrderByWithRelationInput = {
    profissionais_id_profissional?: SortOrder
    especialidades_id_especialidade?: SortOrder
    especialidades?: especialidadesOrderByWithRelationInput
    profissionais?: profissionaisOrderByWithRelationInput
  }

  export type profissional_especialidadesWhereUniqueInput = Prisma.AtLeast<{
    profissionais_id_profissional_especialidades_id_especialidade?: profissional_especialidadesProfissionais_id_profissionalEspecialidades_id_especialidadeCompoundUniqueInput
    AND?: profissional_especialidadesWhereInput | profissional_especialidadesWhereInput[]
    OR?: profissional_especialidadesWhereInput[]
    NOT?: profissional_especialidadesWhereInput | profissional_especialidadesWhereInput[]
    profissionais_id_profissional?: IntFilter<"profissional_especialidades"> | number
    especialidades_id_especialidade?: IntFilter<"profissional_especialidades"> | number
    especialidades?: XOR<EspecialidadesScalarRelationFilter, especialidadesWhereInput>
    profissionais?: XOR<ProfissionaisScalarRelationFilter, profissionaisWhereInput>
  }, "profissionais_id_profissional_especialidades_id_especialidade">

  export type profissional_especialidadesOrderByWithAggregationInput = {
    profissionais_id_profissional?: SortOrder
    especialidades_id_especialidade?: SortOrder
    _count?: profissional_especialidadesCountOrderByAggregateInput
    _avg?: profissional_especialidadesAvgOrderByAggregateInput
    _max?: profissional_especialidadesMaxOrderByAggregateInput
    _min?: profissional_especialidadesMinOrderByAggregateInput
    _sum?: profissional_especialidadesSumOrderByAggregateInput
  }

  export type profissional_especialidadesScalarWhereWithAggregatesInput = {
    AND?: profissional_especialidadesScalarWhereWithAggregatesInput | profissional_especialidadesScalarWhereWithAggregatesInput[]
    OR?: profissional_especialidadesScalarWhereWithAggregatesInput[]
    NOT?: profissional_especialidadesScalarWhereWithAggregatesInput | profissional_especialidadesScalarWhereWithAggregatesInput[]
    profissionais_id_profissional?: IntWithAggregatesFilter<"profissional_especialidades"> | number
    especialidades_id_especialidade?: IntWithAggregatesFilter<"profissional_especialidades"> | number
  }

  export type profissional_formacoesWhereInput = {
    AND?: profissional_formacoesWhereInput | profissional_formacoesWhereInput[]
    OR?: profissional_formacoesWhereInput[]
    NOT?: profissional_formacoesWhereInput | profissional_formacoesWhereInput[]
    formacoes_id_formacao?: IntFilter<"profissional_formacoes"> | number
    profissionais_id_profissional?: IntFilter<"profissional_formacoes"> | number
    formacoes?: XOR<FormacoesScalarRelationFilter, formacoesWhereInput>
    profissionais?: XOR<ProfissionaisScalarRelationFilter, profissionaisWhereInput>
  }

  export type profissional_formacoesOrderByWithRelationInput = {
    formacoes_id_formacao?: SortOrder
    profissionais_id_profissional?: SortOrder
    formacoes?: formacoesOrderByWithRelationInput
    profissionais?: profissionaisOrderByWithRelationInput
  }

  export type profissional_formacoesWhereUniqueInput = Prisma.AtLeast<{
    formacoes_id_formacao_profissionais_id_profissional?: profissional_formacoesFormacoes_id_formacaoProfissionais_id_profissionalCompoundUniqueInput
    AND?: profissional_formacoesWhereInput | profissional_formacoesWhereInput[]
    OR?: profissional_formacoesWhereInput[]
    NOT?: profissional_formacoesWhereInput | profissional_formacoesWhereInput[]
    formacoes_id_formacao?: IntFilter<"profissional_formacoes"> | number
    profissionais_id_profissional?: IntFilter<"profissional_formacoes"> | number
    formacoes?: XOR<FormacoesScalarRelationFilter, formacoesWhereInput>
    profissionais?: XOR<ProfissionaisScalarRelationFilter, profissionaisWhereInput>
  }, "formacoes_id_formacao_profissionais_id_profissional">

  export type profissional_formacoesOrderByWithAggregationInput = {
    formacoes_id_formacao?: SortOrder
    profissionais_id_profissional?: SortOrder
    _count?: profissional_formacoesCountOrderByAggregateInput
    _avg?: profissional_formacoesAvgOrderByAggregateInput
    _max?: profissional_formacoesMaxOrderByAggregateInput
    _min?: profissional_formacoesMinOrderByAggregateInput
    _sum?: profissional_formacoesSumOrderByAggregateInput
  }

  export type profissional_formacoesScalarWhereWithAggregatesInput = {
    AND?: profissional_formacoesScalarWhereWithAggregatesInput | profissional_formacoesScalarWhereWithAggregatesInput[]
    OR?: profissional_formacoesScalarWhereWithAggregatesInput[]
    NOT?: profissional_formacoesScalarWhereWithAggregatesInput | profissional_formacoesScalarWhereWithAggregatesInput[]
    formacoes_id_formacao?: IntWithAggregatesFilter<"profissional_formacoes"> | number
    profissionais_id_profissional?: IntWithAggregatesFilter<"profissional_formacoes"> | number
  }

  export type profissional_idiomasWhereInput = {
    AND?: profissional_idiomasWhereInput | profissional_idiomasWhereInput[]
    OR?: profissional_idiomasWhereInput[]
    NOT?: profissional_idiomasWhereInput | profissional_idiomasWhereInput[]
    idiomas_id_idioma?: IntFilter<"profissional_idiomas"> | number
    profissionais_id_profissional?: IntFilter<"profissional_idiomas"> | number
    idiomas?: XOR<IdiomasScalarRelationFilter, idiomasWhereInput>
    profissionais?: XOR<ProfissionaisScalarRelationFilter, profissionaisWhereInput>
  }

  export type profissional_idiomasOrderByWithRelationInput = {
    idiomas_id_idioma?: SortOrder
    profissionais_id_profissional?: SortOrder
    idiomas?: idiomasOrderByWithRelationInput
    profissionais?: profissionaisOrderByWithRelationInput
  }

  export type profissional_idiomasWhereUniqueInput = Prisma.AtLeast<{
    idiomas_id_idioma_profissionais_id_profissional?: profissional_idiomasIdiomas_id_idiomaProfissionais_id_profissionalCompoundUniqueInput
    AND?: profissional_idiomasWhereInput | profissional_idiomasWhereInput[]
    OR?: profissional_idiomasWhereInput[]
    NOT?: profissional_idiomasWhereInput | profissional_idiomasWhereInput[]
    idiomas_id_idioma?: IntFilter<"profissional_idiomas"> | number
    profissionais_id_profissional?: IntFilter<"profissional_idiomas"> | number
    idiomas?: XOR<IdiomasScalarRelationFilter, idiomasWhereInput>
    profissionais?: XOR<ProfissionaisScalarRelationFilter, profissionaisWhereInput>
  }, "idiomas_id_idioma_profissionais_id_profissional">

  export type profissional_idiomasOrderByWithAggregationInput = {
    idiomas_id_idioma?: SortOrder
    profissionais_id_profissional?: SortOrder
    _count?: profissional_idiomasCountOrderByAggregateInput
    _avg?: profissional_idiomasAvgOrderByAggregateInput
    _max?: profissional_idiomasMaxOrderByAggregateInput
    _min?: profissional_idiomasMinOrderByAggregateInput
    _sum?: profissional_idiomasSumOrderByAggregateInput
  }

  export type profissional_idiomasScalarWhereWithAggregatesInput = {
    AND?: profissional_idiomasScalarWhereWithAggregatesInput | profissional_idiomasScalarWhereWithAggregatesInput[]
    OR?: profissional_idiomasScalarWhereWithAggregatesInput[]
    NOT?: profissional_idiomasScalarWhereWithAggregatesInput | profissional_idiomasScalarWhereWithAggregatesInput[]
    idiomas_id_idioma?: IntWithAggregatesFilter<"profissional_idiomas"> | number
    profissionais_id_profissional?: IntWithAggregatesFilter<"profissional_idiomas"> | number
  }

  export type profissional_tagsWhereInput = {
    AND?: profissional_tagsWhereInput | profissional_tagsWhereInput[]
    OR?: profissional_tagsWhereInput[]
    NOT?: profissional_tagsWhereInput | profissional_tagsWhereInput[]
    tags_id_tag?: IntFilter<"profissional_tags"> | number
    profissionais_id_profissional?: IntFilter<"profissional_tags"> | number
    profissionais?: XOR<ProfissionaisScalarRelationFilter, profissionaisWhereInput>
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }

  export type profissional_tagsOrderByWithRelationInput = {
    tags_id_tag?: SortOrder
    profissionais_id_profissional?: SortOrder
    profissionais?: profissionaisOrderByWithRelationInput
    tags?: tagsOrderByWithRelationInput
  }

  export type profissional_tagsWhereUniqueInput = Prisma.AtLeast<{
    tags_id_tag_profissionais_id_profissional?: profissional_tagsTags_id_tagProfissionais_id_profissionalCompoundUniqueInput
    AND?: profissional_tagsWhereInput | profissional_tagsWhereInput[]
    OR?: profissional_tagsWhereInput[]
    NOT?: profissional_tagsWhereInput | profissional_tagsWhereInput[]
    tags_id_tag?: IntFilter<"profissional_tags"> | number
    profissionais_id_profissional?: IntFilter<"profissional_tags"> | number
    profissionais?: XOR<ProfissionaisScalarRelationFilter, profissionaisWhereInput>
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }, "tags_id_tag_profissionais_id_profissional">

  export type profissional_tagsOrderByWithAggregationInput = {
    tags_id_tag?: SortOrder
    profissionais_id_profissional?: SortOrder
    _count?: profissional_tagsCountOrderByAggregateInput
    _avg?: profissional_tagsAvgOrderByAggregateInput
    _max?: profissional_tagsMaxOrderByAggregateInput
    _min?: profissional_tagsMinOrderByAggregateInput
    _sum?: profissional_tagsSumOrderByAggregateInput
  }

  export type profissional_tagsScalarWhereWithAggregatesInput = {
    AND?: profissional_tagsScalarWhereWithAggregatesInput | profissional_tagsScalarWhereWithAggregatesInput[]
    OR?: profissional_tagsScalarWhereWithAggregatesInput[]
    NOT?: profissional_tagsScalarWhereWithAggregatesInput | profissional_tagsScalarWhereWithAggregatesInput[]
    tags_id_tag?: IntWithAggregatesFilter<"profissional_tags"> | number
    profissionais_id_profissional?: IntWithAggregatesFilter<"profissional_tags"> | number
  }

  export type tagsWhereInput = {
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    id_tag?: IntFilter<"tags"> | number
    nome_tag?: StringFilter<"tags"> | string
    profissional_tags?: Profissional_tagsListRelationFilter
  }

  export type tagsOrderByWithRelationInput = {
    id_tag?: SortOrder
    nome_tag?: SortOrder
    profissional_tags?: profissional_tagsOrderByRelationAggregateInput
    _relevance?: tagsOrderByRelevanceInput
  }

  export type tagsWhereUniqueInput = Prisma.AtLeast<{
    id_tag?: number
    nome_tag?: string
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    profissional_tags?: Profissional_tagsListRelationFilter
  }, "id_tag" | "nome_tag">

  export type tagsOrderByWithAggregationInput = {
    id_tag?: SortOrder
    nome_tag?: SortOrder
    _count?: tagsCountOrderByAggregateInput
    _avg?: tagsAvgOrderByAggregateInput
    _max?: tagsMaxOrderByAggregateInput
    _min?: tagsMinOrderByAggregateInput
    _sum?: tagsSumOrderByAggregateInput
  }

  export type tagsScalarWhereWithAggregatesInput = {
    AND?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    OR?: tagsScalarWhereWithAggregatesInput[]
    NOT?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    id_tag?: IntWithAggregatesFilter<"tags"> | number
    nome_tag?: StringWithAggregatesFilter<"tags"> | string
  }

  export type telefonesWhereInput = {
    AND?: telefonesWhereInput | telefonesWhereInput[]
    OR?: telefonesWhereInput[]
    NOT?: telefonesWhereInput | telefonesWhereInput[]
    id_telefone?: IntFilter<"telefones"> | number
    usuarios_id_usuario?: IntFilter<"telefones"> | number
    ddd?: StringFilter<"telefones"> | string
    numero?: StringFilter<"telefones"> | string
    tipo?: Enumtelefones_tipoFilter<"telefones"> | $Enums.telefones_tipo
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type telefonesOrderByWithRelationInput = {
    id_telefone?: SortOrder
    usuarios_id_usuario?: SortOrder
    ddd?: SortOrder
    numero?: SortOrder
    tipo?: SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    _relevance?: telefonesOrderByRelevanceInput
  }

  export type telefonesWhereUniqueInput = Prisma.AtLeast<{
    id_telefone?: number
    AND?: telefonesWhereInput | telefonesWhereInput[]
    OR?: telefonesWhereInput[]
    NOT?: telefonesWhereInput | telefonesWhereInput[]
    usuarios_id_usuario?: IntFilter<"telefones"> | number
    ddd?: StringFilter<"telefones"> | string
    numero?: StringFilter<"telefones"> | string
    tipo?: Enumtelefones_tipoFilter<"telefones"> | $Enums.telefones_tipo
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id_telefone">

  export type telefonesOrderByWithAggregationInput = {
    id_telefone?: SortOrder
    usuarios_id_usuario?: SortOrder
    ddd?: SortOrder
    numero?: SortOrder
    tipo?: SortOrder
    _count?: telefonesCountOrderByAggregateInput
    _avg?: telefonesAvgOrderByAggregateInput
    _max?: telefonesMaxOrderByAggregateInput
    _min?: telefonesMinOrderByAggregateInput
    _sum?: telefonesSumOrderByAggregateInput
  }

  export type telefonesScalarWhereWithAggregatesInput = {
    AND?: telefonesScalarWhereWithAggregatesInput | telefonesScalarWhereWithAggregatesInput[]
    OR?: telefonesScalarWhereWithAggregatesInput[]
    NOT?: telefonesScalarWhereWithAggregatesInput | telefonesScalarWhereWithAggregatesInput[]
    id_telefone?: IntWithAggregatesFilter<"telefones"> | number
    usuarios_id_usuario?: IntWithAggregatesFilter<"telefones"> | number
    ddd?: StringWithAggregatesFilter<"telefones"> | string
    numero?: StringWithAggregatesFilter<"telefones"> | string
    tipo?: Enumtelefones_tipoWithAggregatesFilter<"telefones"> | $Enums.telefones_tipo
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id_usuario?: IntFilter<"usuarios"> | number
    email?: StringFilter<"usuarios"> | string
    senha?: StringFilter<"usuarios"> | string
    data_criacao?: DateTimeFilter<"usuarios"> | Date | string
    pacientes?: PacientesListRelationFilter
    profissionais?: ProfissionaisListRelationFilter
    telefones?: TelefonesListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id_usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    data_criacao?: SortOrder
    pacientes?: pacientesOrderByRelationAggregateInput
    profissionais?: profissionaisOrderByRelationAggregateInput
    telefones?: telefonesOrderByRelationAggregateInput
    _relevance?: usuariosOrderByRelevanceInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    senha?: StringFilter<"usuarios"> | string
    data_criacao?: DateTimeFilter<"usuarios"> | Date | string
    pacientes?: PacientesListRelationFilter
    profissionais?: ProfissionaisListRelationFilter
    telefones?: TelefonesListRelationFilter
  }, "id_usuario" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    data_criacao?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuarios"> | number
    email?: StringWithAggregatesFilter<"usuarios"> | string
    senha?: StringWithAggregatesFilter<"usuarios"> | string
    data_criacao?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
  }

  export type agendamentosCreateInput = {
    data_horario_inicio: Date | string
    duracao_consulta_minutos: number
    data_criacao?: Date | string
    status: $Enums.agendamentos_status
    nota_atendimento?: number | null
    avaliacao?: string | null
    enderecos: enderecosCreateNestedOneWithoutAgendamentosInput
    pacientes: pacientesCreateNestedOneWithoutAgendamentosInput
    profissionais: profissionaisCreateNestedOneWithoutAgendamentosInput
  }

  export type agendamentosUncheckedCreateInput = {
    id_agendamento?: number
    profissionais_id_profissional: number
    pacientes_id_paciente: number
    enderecos_id_endereco: number
    data_horario_inicio: Date | string
    duracao_consulta_minutos: number
    data_criacao?: Date | string
    status: $Enums.agendamentos_status
    nota_atendimento?: number | null
    avaliacao?: string | null
  }

  export type agendamentosUpdateInput = {
    data_horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao_consulta_minutos?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    nota_atendimento?: NullableIntFieldUpdateOperationsInput | number | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    enderecos?: enderecosUpdateOneRequiredWithoutAgendamentosNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutAgendamentosNestedInput
    profissionais?: profissionaisUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type agendamentosUncheckedUpdateInput = {
    id_agendamento?: IntFieldUpdateOperationsInput | number
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
    pacientes_id_paciente?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    data_horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao_consulta_minutos?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    nota_atendimento?: NullableIntFieldUpdateOperationsInput | number | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agendamentosCreateManyInput = {
    id_agendamento?: number
    profissionais_id_profissional: number
    pacientes_id_paciente: number
    enderecos_id_endereco: number
    data_horario_inicio: Date | string
    duracao_consulta_minutos: number
    data_criacao?: Date | string
    status: $Enums.agendamentos_status
    nota_atendimento?: number | null
    avaliacao?: string | null
  }

  export type agendamentosUpdateManyMutationInput = {
    data_horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao_consulta_minutos?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    nota_atendimento?: NullableIntFieldUpdateOperationsInput | number | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agendamentosUncheckedUpdateManyInput = {
    id_agendamento?: IntFieldUpdateOperationsInput | number
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
    pacientes_id_paciente?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    data_horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao_consulta_minutos?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    nota_atendimento?: NullableIntFieldUpdateOperationsInput | number | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type enderecosCreateInput = {
    estado: string
    cidade: string
    apelido_endereco?: string | null
    cep: string
    logradouro: string
    numero: string
    bairro: string
    complemento?: string | null
    agendamentos?: agendamentosCreateNestedManyWithoutEnderecosInput
    pacientes?: pacientesCreateNestedManyWithoutEnderecosInput
    profissionais?: profissionaisCreateNestedManyWithoutEnderecosInput
  }

  export type enderecosUncheckedCreateInput = {
    id_endereco?: number
    estado: string
    cidade: string
    apelido_endereco?: string | null
    cep: string
    logradouro: string
    numero: string
    bairro: string
    complemento?: string | null
    agendamentos?: agendamentosUncheckedCreateNestedManyWithoutEnderecosInput
    pacientes?: pacientesUncheckedCreateNestedManyWithoutEnderecosInput
    profissionais?: profissionaisUncheckedCreateNestedManyWithoutEnderecosInput
  }

  export type enderecosUpdateInput = {
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    apelido_endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: agendamentosUpdateManyWithoutEnderecosNestedInput
    pacientes?: pacientesUpdateManyWithoutEnderecosNestedInput
    profissionais?: profissionaisUpdateManyWithoutEnderecosNestedInput
  }

  export type enderecosUncheckedUpdateInput = {
    id_endereco?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    apelido_endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: agendamentosUncheckedUpdateManyWithoutEnderecosNestedInput
    pacientes?: pacientesUncheckedUpdateManyWithoutEnderecosNestedInput
    profissionais?: profissionaisUncheckedUpdateManyWithoutEnderecosNestedInput
  }

  export type enderecosCreateManyInput = {
    id_endereco?: number
    estado: string
    cidade: string
    apelido_endereco?: string | null
    cep: string
    logradouro: string
    numero: string
    bairro: string
    complemento?: string | null
  }

  export type enderecosUpdateManyMutationInput = {
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    apelido_endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type enderecosUncheckedUpdateManyInput = {
    id_endereco?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    apelido_endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type especialidadesCreateInput = {
    nome_especialidade: string
    profissional_especialidades?: profissional_especialidadesCreateNestedManyWithoutEspecialidadesInput
  }

  export type especialidadesUncheckedCreateInput = {
    id_especialidade?: number
    nome_especialidade: string
    profissional_especialidades?: profissional_especialidadesUncheckedCreateNestedManyWithoutEspecialidadesInput
  }

  export type especialidadesUpdateInput = {
    nome_especialidade?: StringFieldUpdateOperationsInput | string
    profissional_especialidades?: profissional_especialidadesUpdateManyWithoutEspecialidadesNestedInput
  }

  export type especialidadesUncheckedUpdateInput = {
    id_especialidade?: IntFieldUpdateOperationsInput | number
    nome_especialidade?: StringFieldUpdateOperationsInput | string
    profissional_especialidades?: profissional_especialidadesUncheckedUpdateManyWithoutEspecialidadesNestedInput
  }

  export type especialidadesCreateManyInput = {
    id_especialidade?: number
    nome_especialidade: string
  }

  export type especialidadesUpdateManyMutationInput = {
    nome_especialidade?: StringFieldUpdateOperationsInput | string
  }

  export type especialidadesUncheckedUpdateManyInput = {
    id_especialidade?: IntFieldUpdateOperationsInput | number
    nome_especialidade?: StringFieldUpdateOperationsInput | string
  }

  export type formacoesCreateInput = {
    formacao: string
    profissional_formacoes?: profissional_formacoesCreateNestedManyWithoutFormacoesInput
  }

  export type formacoesUncheckedCreateInput = {
    id_formacao?: number
    formacao: string
    profissional_formacoes?: profissional_formacoesUncheckedCreateNestedManyWithoutFormacoesInput
  }

  export type formacoesUpdateInput = {
    formacao?: StringFieldUpdateOperationsInput | string
    profissional_formacoes?: profissional_formacoesUpdateManyWithoutFormacoesNestedInput
  }

  export type formacoesUncheckedUpdateInput = {
    id_formacao?: IntFieldUpdateOperationsInput | number
    formacao?: StringFieldUpdateOperationsInput | string
    profissional_formacoes?: profissional_formacoesUncheckedUpdateManyWithoutFormacoesNestedInput
  }

  export type formacoesCreateManyInput = {
    id_formacao?: number
    formacao: string
  }

  export type formacoesUpdateManyMutationInput = {
    formacao?: StringFieldUpdateOperationsInput | string
  }

  export type formacoesUncheckedUpdateManyInput = {
    id_formacao?: IntFieldUpdateOperationsInput | number
    formacao?: StringFieldUpdateOperationsInput | string
  }

  export type horarios_trabalhoCreateInput = {
    dia_semana: number
    horario_inicio: Date | string
    horario_fim: Date | string
    profissionais: profissionaisCreateNestedOneWithoutHorarios_trabalhoInput
  }

  export type horarios_trabalhoUncheckedCreateInput = {
    id_horario_trabalho?: number
    profissionais_id_profissional: number
    dia_semana: number
    horario_inicio: Date | string
    horario_fim: Date | string
  }

  export type horarios_trabalhoUpdateInput = {
    dia_semana?: IntFieldUpdateOperationsInput | number
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    profissionais?: profissionaisUpdateOneRequiredWithoutHorarios_trabalhoNestedInput
  }

  export type horarios_trabalhoUncheckedUpdateInput = {
    id_horario_trabalho?: IntFieldUpdateOperationsInput | number
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
    dia_semana?: IntFieldUpdateOperationsInput | number
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type horarios_trabalhoCreateManyInput = {
    id_horario_trabalho?: number
    profissionais_id_profissional: number
    dia_semana: number
    horario_inicio: Date | string
    horario_fim: Date | string
  }

  export type horarios_trabalhoUpdateManyMutationInput = {
    dia_semana?: IntFieldUpdateOperationsInput | number
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type horarios_trabalhoUncheckedUpdateManyInput = {
    id_horario_trabalho?: IntFieldUpdateOperationsInput | number
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
    dia_semana?: IntFieldUpdateOperationsInput | number
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idiomasCreateInput = {
    idioma: string
    profissional_idiomas?: profissional_idiomasCreateNestedManyWithoutIdiomasInput
  }

  export type idiomasUncheckedCreateInput = {
    id_idioma?: number
    idioma: string
    profissional_idiomas?: profissional_idiomasUncheckedCreateNestedManyWithoutIdiomasInput
  }

  export type idiomasUpdateInput = {
    idioma?: StringFieldUpdateOperationsInput | string
    profissional_idiomas?: profissional_idiomasUpdateManyWithoutIdiomasNestedInput
  }

  export type idiomasUncheckedUpdateInput = {
    id_idioma?: IntFieldUpdateOperationsInput | number
    idioma?: StringFieldUpdateOperationsInput | string
    profissional_idiomas?: profissional_idiomasUncheckedUpdateManyWithoutIdiomasNestedInput
  }

  export type idiomasCreateManyInput = {
    id_idioma?: number
    idioma: string
  }

  export type idiomasUpdateManyMutationInput = {
    idioma?: StringFieldUpdateOperationsInput | string
  }

  export type idiomasUncheckedUpdateManyInput = {
    id_idioma?: IntFieldUpdateOperationsInput | number
    idioma?: StringFieldUpdateOperationsInput | string
  }

  export type pacientesCreateInput = {
    nome_paciente: string
    cpf: string
    data_nascimento: Date | string
    nivel_tea: $Enums.pacientes_nivel_tea
    e_titular: boolean
    nome_titular?: string | null
    agendamentos?: agendamentosCreateNestedManyWithoutPacientesInput
    enderecos: enderecosCreateNestedOneWithoutPacientesInput
    usuarios: usuariosCreateNestedOneWithoutPacientesInput
  }

  export type pacientesUncheckedCreateInput = {
    id_paciente?: number
    usuarios_id_usuario: number
    enderecos_id_endereco: number
    nome_paciente: string
    cpf: string
    data_nascimento: Date | string
    nivel_tea: $Enums.pacientes_nivel_tea
    e_titular: boolean
    nome_titular?: string | null
    agendamentos?: agendamentosUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUpdateInput = {
    nome_paciente?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_tea?: Enumpacientes_nivel_teaFieldUpdateOperationsInput | $Enums.pacientes_nivel_tea
    e_titular?: BoolFieldUpdateOperationsInput | boolean
    nome_titular?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: agendamentosUpdateManyWithoutPacientesNestedInput
    enderecos?: enderecosUpdateOneRequiredWithoutPacientesNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateInput = {
    id_paciente?: IntFieldUpdateOperationsInput | number
    usuarios_id_usuario?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    nome_paciente?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_tea?: Enumpacientes_nivel_teaFieldUpdateOperationsInput | $Enums.pacientes_nivel_tea
    e_titular?: BoolFieldUpdateOperationsInput | boolean
    nome_titular?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: agendamentosUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesCreateManyInput = {
    id_paciente?: number
    usuarios_id_usuario: number
    enderecos_id_endereco: number
    nome_paciente: string
    cpf: string
    data_nascimento: Date | string
    nivel_tea: $Enums.pacientes_nivel_tea
    e_titular: boolean
    nome_titular?: string | null
  }

  export type pacientesUpdateManyMutationInput = {
    nome_paciente?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_tea?: Enumpacientes_nivel_teaFieldUpdateOperationsInput | $Enums.pacientes_nivel_tea
    e_titular?: BoolFieldUpdateOperationsInput | boolean
    nome_titular?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pacientesUncheckedUpdateManyInput = {
    id_paciente?: IntFieldUpdateOperationsInput | number
    usuarios_id_usuario?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    nome_paciente?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_tea?: Enumpacientes_nivel_teaFieldUpdateOperationsInput | $Enums.pacientes_nivel_tea
    e_titular?: BoolFieldUpdateOperationsInput | boolean
    nome_titular?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profissionaisCreateInput = {
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
    agendamentos?: agendamentosCreateNestedManyWithoutProfissionaisInput
    horarios_trabalho?: horarios_trabalhoCreateNestedManyWithoutProfissionaisInput
    enderecos: enderecosCreateNestedOneWithoutProfissionaisInput
    usuarios: usuariosCreateNestedOneWithoutProfissionaisInput
    profissional_especialidades?: profissional_especialidadesCreateNestedManyWithoutProfissionaisInput
    profissional_formacoes?: profissional_formacoesCreateNestedManyWithoutProfissionaisInput
    profissional_idiomas?: profissional_idiomasCreateNestedManyWithoutProfissionaisInput
    profissional_tags?: profissional_tagsCreateNestedManyWithoutProfissionaisInput
  }

  export type profissionaisUncheckedCreateInput = {
    id_profissional?: number
    usuarios_id_usuario: number
    enderecos_id_endereco: number
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
    agendamentos?: agendamentosUncheckedCreateNestedManyWithoutProfissionaisInput
    horarios_trabalho?: horarios_trabalhoUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_especialidades?: profissional_especialidadesUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_formacoes?: profissional_formacoesUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_idiomas?: profissional_idiomasUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_tags?: profissional_tagsUncheckedCreateNestedManyWithoutProfissionaisInput
  }

  export type profissionaisUpdateInput = {
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agendamentos?: agendamentosUpdateManyWithoutProfissionaisNestedInput
    horarios_trabalho?: horarios_trabalhoUpdateManyWithoutProfissionaisNestedInput
    enderecos?: enderecosUpdateOneRequiredWithoutProfissionaisNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutProfissionaisNestedInput
    profissional_especialidades?: profissional_especialidadesUpdateManyWithoutProfissionaisNestedInput
    profissional_formacoes?: profissional_formacoesUpdateManyWithoutProfissionaisNestedInput
    profissional_idiomas?: profissional_idiomasUpdateManyWithoutProfissionaisNestedInput
    profissional_tags?: profissional_tagsUpdateManyWithoutProfissionaisNestedInput
  }

  export type profissionaisUncheckedUpdateInput = {
    id_profissional?: IntFieldUpdateOperationsInput | number
    usuarios_id_usuario?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agendamentos?: agendamentosUncheckedUpdateManyWithoutProfissionaisNestedInput
    horarios_trabalho?: horarios_trabalhoUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_especialidades?: profissional_especialidadesUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_formacoes?: profissional_formacoesUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_idiomas?: profissional_idiomasUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_tags?: profissional_tagsUncheckedUpdateManyWithoutProfissionaisNestedInput
  }

  export type profissionaisCreateManyInput = {
    id_profissional?: number
    usuarios_id_usuario: number
    enderecos_id_endereco: number
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
  }

  export type profissionaisUpdateManyMutationInput = {
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type profissionaisUncheckedUpdateManyInput = {
    id_profissional?: IntFieldUpdateOperationsInput | number
    usuarios_id_usuario?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type profissional_especialidadesCreateInput = {
    especialidades: especialidadesCreateNestedOneWithoutProfissional_especialidadesInput
    profissionais: profissionaisCreateNestedOneWithoutProfissional_especialidadesInput
  }

  export type profissional_especialidadesUncheckedCreateInput = {
    profissionais_id_profissional: number
    especialidades_id_especialidade: number
  }

  export type profissional_especialidadesUpdateInput = {
    especialidades?: especialidadesUpdateOneRequiredWithoutProfissional_especialidadesNestedInput
    profissionais?: profissionaisUpdateOneRequiredWithoutProfissional_especialidadesNestedInput
  }

  export type profissional_especialidadesUncheckedUpdateInput = {
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
    especialidades_id_especialidade?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_especialidadesCreateManyInput = {
    profissionais_id_profissional: number
    especialidades_id_especialidade: number
  }

  export type profissional_especialidadesUpdateManyMutationInput = {

  }

  export type profissional_especialidadesUncheckedUpdateManyInput = {
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
    especialidades_id_especialidade?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_formacoesCreateInput = {
    formacoes: formacoesCreateNestedOneWithoutProfissional_formacoesInput
    profissionais: profissionaisCreateNestedOneWithoutProfissional_formacoesInput
  }

  export type profissional_formacoesUncheckedCreateInput = {
    formacoes_id_formacao: number
    profissionais_id_profissional: number
  }

  export type profissional_formacoesUpdateInput = {
    formacoes?: formacoesUpdateOneRequiredWithoutProfissional_formacoesNestedInput
    profissionais?: profissionaisUpdateOneRequiredWithoutProfissional_formacoesNestedInput
  }

  export type profissional_formacoesUncheckedUpdateInput = {
    formacoes_id_formacao?: IntFieldUpdateOperationsInput | number
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_formacoesCreateManyInput = {
    formacoes_id_formacao: number
    profissionais_id_profissional: number
  }

  export type profissional_formacoesUpdateManyMutationInput = {

  }

  export type profissional_formacoesUncheckedUpdateManyInput = {
    formacoes_id_formacao?: IntFieldUpdateOperationsInput | number
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_idiomasCreateInput = {
    idiomas: idiomasCreateNestedOneWithoutProfissional_idiomasInput
    profissionais: profissionaisCreateNestedOneWithoutProfissional_idiomasInput
  }

  export type profissional_idiomasUncheckedCreateInput = {
    idiomas_id_idioma: number
    profissionais_id_profissional: number
  }

  export type profissional_idiomasUpdateInput = {
    idiomas?: idiomasUpdateOneRequiredWithoutProfissional_idiomasNestedInput
    profissionais?: profissionaisUpdateOneRequiredWithoutProfissional_idiomasNestedInput
  }

  export type profissional_idiomasUncheckedUpdateInput = {
    idiomas_id_idioma?: IntFieldUpdateOperationsInput | number
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_idiomasCreateManyInput = {
    idiomas_id_idioma: number
    profissionais_id_profissional: number
  }

  export type profissional_idiomasUpdateManyMutationInput = {

  }

  export type profissional_idiomasUncheckedUpdateManyInput = {
    idiomas_id_idioma?: IntFieldUpdateOperationsInput | number
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_tagsCreateInput = {
    profissionais: profissionaisCreateNestedOneWithoutProfissional_tagsInput
    tags: tagsCreateNestedOneWithoutProfissional_tagsInput
  }

  export type profissional_tagsUncheckedCreateInput = {
    tags_id_tag: number
    profissionais_id_profissional: number
  }

  export type profissional_tagsUpdateInput = {
    profissionais?: profissionaisUpdateOneRequiredWithoutProfissional_tagsNestedInput
    tags?: tagsUpdateOneRequiredWithoutProfissional_tagsNestedInput
  }

  export type profissional_tagsUncheckedUpdateInput = {
    tags_id_tag?: IntFieldUpdateOperationsInput | number
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_tagsCreateManyInput = {
    tags_id_tag: number
    profissionais_id_profissional: number
  }

  export type profissional_tagsUpdateManyMutationInput = {

  }

  export type profissional_tagsUncheckedUpdateManyInput = {
    tags_id_tag?: IntFieldUpdateOperationsInput | number
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
  }

  export type tagsCreateInput = {
    nome_tag: string
    profissional_tags?: profissional_tagsCreateNestedManyWithoutTagsInput
  }

  export type tagsUncheckedCreateInput = {
    id_tag?: number
    nome_tag: string
    profissional_tags?: profissional_tagsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type tagsUpdateInput = {
    nome_tag?: StringFieldUpdateOperationsInput | string
    profissional_tags?: profissional_tagsUpdateManyWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateInput = {
    id_tag?: IntFieldUpdateOperationsInput | number
    nome_tag?: StringFieldUpdateOperationsInput | string
    profissional_tags?: profissional_tagsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type tagsCreateManyInput = {
    id_tag?: number
    nome_tag: string
  }

  export type tagsUpdateManyMutationInput = {
    nome_tag?: StringFieldUpdateOperationsInput | string
  }

  export type tagsUncheckedUpdateManyInput = {
    id_tag?: IntFieldUpdateOperationsInput | number
    nome_tag?: StringFieldUpdateOperationsInput | string
  }

  export type telefonesCreateInput = {
    ddd: string
    numero: string
    tipo: $Enums.telefones_tipo
    usuarios: usuariosCreateNestedOneWithoutTelefonesInput
  }

  export type telefonesUncheckedCreateInput = {
    id_telefone?: number
    usuarios_id_usuario: number
    ddd: string
    numero: string
    tipo: $Enums.telefones_tipo
  }

  export type telefonesUpdateInput = {
    ddd?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtelefones_tipoFieldUpdateOperationsInput | $Enums.telefones_tipo
    usuarios?: usuariosUpdateOneRequiredWithoutTelefonesNestedInput
  }

  export type telefonesUncheckedUpdateInput = {
    id_telefone?: IntFieldUpdateOperationsInput | number
    usuarios_id_usuario?: IntFieldUpdateOperationsInput | number
    ddd?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtelefones_tipoFieldUpdateOperationsInput | $Enums.telefones_tipo
  }

  export type telefonesCreateManyInput = {
    id_telefone?: number
    usuarios_id_usuario: number
    ddd: string
    numero: string
    tipo: $Enums.telefones_tipo
  }

  export type telefonesUpdateManyMutationInput = {
    ddd?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtelefones_tipoFieldUpdateOperationsInput | $Enums.telefones_tipo
  }

  export type telefonesUncheckedUpdateManyInput = {
    id_telefone?: IntFieldUpdateOperationsInput | number
    usuarios_id_usuario?: IntFieldUpdateOperationsInput | number
    ddd?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtelefones_tipoFieldUpdateOperationsInput | $Enums.telefones_tipo
  }

  export type usuariosCreateInput = {
    email: string
    senha: string
    data_criacao?: Date | string
    pacientes?: pacientesCreateNestedManyWithoutUsuariosInput
    profissionais?: profissionaisCreateNestedManyWithoutUsuariosInput
    telefones?: telefonesCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id_usuario?: number
    email: string
    senha: string
    data_criacao?: Date | string
    pacientes?: pacientesUncheckedCreateNestedManyWithoutUsuariosInput
    profissionais?: profissionaisUncheckedCreateNestedManyWithoutUsuariosInput
    telefones?: telefonesUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pacientes?: pacientesUpdateManyWithoutUsuariosNestedInput
    profissionais?: profissionaisUpdateManyWithoutUsuariosNestedInput
    telefones?: telefonesUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pacientes?: pacientesUncheckedUpdateManyWithoutUsuariosNestedInput
    profissionais?: profissionaisUncheckedUpdateManyWithoutUsuariosNestedInput
    telefones?: telefonesUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id_usuario?: number
    email: string
    senha: string
    data_criacao?: Date | string
  }

  export type usuariosUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Enumagendamentos_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.agendamentos_status | Enumagendamentos_statusFieldRefInput<$PrismaModel>
    in?: $Enums.agendamentos_status[]
    notIn?: $Enums.agendamentos_status[]
    not?: NestedEnumagendamentos_statusFilter<$PrismaModel> | $Enums.agendamentos_status
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnderecosScalarRelationFilter = {
    is?: enderecosWhereInput
    isNot?: enderecosWhereInput
  }

  export type PacientesScalarRelationFilter = {
    is?: pacientesWhereInput
    isNot?: pacientesWhereInput
  }

  export type ProfissionaisScalarRelationFilter = {
    is?: profissionaisWhereInput
    isNot?: profissionaisWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type agendamentosOrderByRelevanceInput = {
    fields: agendamentosOrderByRelevanceFieldEnum | agendamentosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type agendamentosCountOrderByAggregateInput = {
    id_agendamento?: SortOrder
    profissionais_id_profissional?: SortOrder
    pacientes_id_paciente?: SortOrder
    enderecos_id_endereco?: SortOrder
    data_horario_inicio?: SortOrder
    duracao_consulta_minutos?: SortOrder
    data_criacao?: SortOrder
    status?: SortOrder
    nota_atendimento?: SortOrder
    avaliacao?: SortOrder
  }

  export type agendamentosAvgOrderByAggregateInput = {
    id_agendamento?: SortOrder
    profissionais_id_profissional?: SortOrder
    pacientes_id_paciente?: SortOrder
    enderecos_id_endereco?: SortOrder
    duracao_consulta_minutos?: SortOrder
    nota_atendimento?: SortOrder
  }

  export type agendamentosMaxOrderByAggregateInput = {
    id_agendamento?: SortOrder
    profissionais_id_profissional?: SortOrder
    pacientes_id_paciente?: SortOrder
    enderecos_id_endereco?: SortOrder
    data_horario_inicio?: SortOrder
    duracao_consulta_minutos?: SortOrder
    data_criacao?: SortOrder
    status?: SortOrder
    nota_atendimento?: SortOrder
    avaliacao?: SortOrder
  }

  export type agendamentosMinOrderByAggregateInput = {
    id_agendamento?: SortOrder
    profissionais_id_profissional?: SortOrder
    pacientes_id_paciente?: SortOrder
    enderecos_id_endereco?: SortOrder
    data_horario_inicio?: SortOrder
    duracao_consulta_minutos?: SortOrder
    data_criacao?: SortOrder
    status?: SortOrder
    nota_atendimento?: SortOrder
    avaliacao?: SortOrder
  }

  export type agendamentosSumOrderByAggregateInput = {
    id_agendamento?: SortOrder
    profissionais_id_profissional?: SortOrder
    pacientes_id_paciente?: SortOrder
    enderecos_id_endereco?: SortOrder
    duracao_consulta_minutos?: SortOrder
    nota_atendimento?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumagendamentos_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.agendamentos_status | Enumagendamentos_statusFieldRefInput<$PrismaModel>
    in?: $Enums.agendamentos_status[]
    notIn?: $Enums.agendamentos_status[]
    not?: NestedEnumagendamentos_statusWithAggregatesFilter<$PrismaModel> | $Enums.agendamentos_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumagendamentos_statusFilter<$PrismaModel>
    _max?: NestedEnumagendamentos_statusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AgendamentosListRelationFilter = {
    every?: agendamentosWhereInput
    some?: agendamentosWhereInput
    none?: agendamentosWhereInput
  }

  export type PacientesListRelationFilter = {
    every?: pacientesWhereInput
    some?: pacientesWhereInput
    none?: pacientesWhereInput
  }

  export type ProfissionaisListRelationFilter = {
    every?: profissionaisWhereInput
    some?: profissionaisWhereInput
    none?: profissionaisWhereInput
  }

  export type agendamentosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pacientesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type profissionaisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type enderecosOrderByRelevanceInput = {
    fields: enderecosOrderByRelevanceFieldEnum | enderecosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type enderecosCountOrderByAggregateInput = {
    id_endereco?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    apelido_endereco?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    complemento?: SortOrder
  }

  export type enderecosAvgOrderByAggregateInput = {
    id_endereco?: SortOrder
  }

  export type enderecosMaxOrderByAggregateInput = {
    id_endereco?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    apelido_endereco?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    complemento?: SortOrder
  }

  export type enderecosMinOrderByAggregateInput = {
    id_endereco?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    apelido_endereco?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    complemento?: SortOrder
  }

  export type enderecosSumOrderByAggregateInput = {
    id_endereco?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Profissional_especialidadesListRelationFilter = {
    every?: profissional_especialidadesWhereInput
    some?: profissional_especialidadesWhereInput
    none?: profissional_especialidadesWhereInput
  }

  export type profissional_especialidadesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type especialidadesOrderByRelevanceInput = {
    fields: especialidadesOrderByRelevanceFieldEnum | especialidadesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type especialidadesCountOrderByAggregateInput = {
    id_especialidade?: SortOrder
    nome_especialidade?: SortOrder
  }

  export type especialidadesAvgOrderByAggregateInput = {
    id_especialidade?: SortOrder
  }

  export type especialidadesMaxOrderByAggregateInput = {
    id_especialidade?: SortOrder
    nome_especialidade?: SortOrder
  }

  export type especialidadesMinOrderByAggregateInput = {
    id_especialidade?: SortOrder
    nome_especialidade?: SortOrder
  }

  export type especialidadesSumOrderByAggregateInput = {
    id_especialidade?: SortOrder
  }

  export type Profissional_formacoesListRelationFilter = {
    every?: profissional_formacoesWhereInput
    some?: profissional_formacoesWhereInput
    none?: profissional_formacoesWhereInput
  }

  export type profissional_formacoesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type formacoesOrderByRelevanceInput = {
    fields: formacoesOrderByRelevanceFieldEnum | formacoesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type formacoesCountOrderByAggregateInput = {
    id_formacao?: SortOrder
    formacao?: SortOrder
  }

  export type formacoesAvgOrderByAggregateInput = {
    id_formacao?: SortOrder
  }

  export type formacoesMaxOrderByAggregateInput = {
    id_formacao?: SortOrder
    formacao?: SortOrder
  }

  export type formacoesMinOrderByAggregateInput = {
    id_formacao?: SortOrder
    formacao?: SortOrder
  }

  export type formacoesSumOrderByAggregateInput = {
    id_formacao?: SortOrder
  }

  export type horarios_trabalhoCountOrderByAggregateInput = {
    id_horario_trabalho?: SortOrder
    profissionais_id_profissional?: SortOrder
    dia_semana?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
  }

  export type horarios_trabalhoAvgOrderByAggregateInput = {
    id_horario_trabalho?: SortOrder
    profissionais_id_profissional?: SortOrder
    dia_semana?: SortOrder
  }

  export type horarios_trabalhoMaxOrderByAggregateInput = {
    id_horario_trabalho?: SortOrder
    profissionais_id_profissional?: SortOrder
    dia_semana?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
  }

  export type horarios_trabalhoMinOrderByAggregateInput = {
    id_horario_trabalho?: SortOrder
    profissionais_id_profissional?: SortOrder
    dia_semana?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
  }

  export type horarios_trabalhoSumOrderByAggregateInput = {
    id_horario_trabalho?: SortOrder
    profissionais_id_profissional?: SortOrder
    dia_semana?: SortOrder
  }

  export type Profissional_idiomasListRelationFilter = {
    every?: profissional_idiomasWhereInput
    some?: profissional_idiomasWhereInput
    none?: profissional_idiomasWhereInput
  }

  export type profissional_idiomasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type idiomasOrderByRelevanceInput = {
    fields: idiomasOrderByRelevanceFieldEnum | idiomasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type idiomasCountOrderByAggregateInput = {
    id_idioma?: SortOrder
    idioma?: SortOrder
  }

  export type idiomasAvgOrderByAggregateInput = {
    id_idioma?: SortOrder
  }

  export type idiomasMaxOrderByAggregateInput = {
    id_idioma?: SortOrder
    idioma?: SortOrder
  }

  export type idiomasMinOrderByAggregateInput = {
    id_idioma?: SortOrder
    idioma?: SortOrder
  }

  export type idiomasSumOrderByAggregateInput = {
    id_idioma?: SortOrder
  }

  export type Enumpacientes_nivel_teaFilter<$PrismaModel = never> = {
    equals?: $Enums.pacientes_nivel_tea | Enumpacientes_nivel_teaFieldRefInput<$PrismaModel>
    in?: $Enums.pacientes_nivel_tea[]
    notIn?: $Enums.pacientes_nivel_tea[]
    not?: NestedEnumpacientes_nivel_teaFilter<$PrismaModel> | $Enums.pacientes_nivel_tea
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type pacientesOrderByRelevanceInput = {
    fields: pacientesOrderByRelevanceFieldEnum | pacientesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type pacientesCountOrderByAggregateInput = {
    id_paciente?: SortOrder
    usuarios_id_usuario?: SortOrder
    enderecos_id_endereco?: SortOrder
    nome_paciente?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    nivel_tea?: SortOrder
    e_titular?: SortOrder
    nome_titular?: SortOrder
  }

  export type pacientesAvgOrderByAggregateInput = {
    id_paciente?: SortOrder
    usuarios_id_usuario?: SortOrder
    enderecos_id_endereco?: SortOrder
  }

  export type pacientesMaxOrderByAggregateInput = {
    id_paciente?: SortOrder
    usuarios_id_usuario?: SortOrder
    enderecos_id_endereco?: SortOrder
    nome_paciente?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    nivel_tea?: SortOrder
    e_titular?: SortOrder
    nome_titular?: SortOrder
  }

  export type pacientesMinOrderByAggregateInput = {
    id_paciente?: SortOrder
    usuarios_id_usuario?: SortOrder
    enderecos_id_endereco?: SortOrder
    nome_paciente?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    nivel_tea?: SortOrder
    e_titular?: SortOrder
    nome_titular?: SortOrder
  }

  export type pacientesSumOrderByAggregateInput = {
    id_paciente?: SortOrder
    usuarios_id_usuario?: SortOrder
    enderecos_id_endereco?: SortOrder
  }

  export type Enumpacientes_nivel_teaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pacientes_nivel_tea | Enumpacientes_nivel_teaFieldRefInput<$PrismaModel>
    in?: $Enums.pacientes_nivel_tea[]
    notIn?: $Enums.pacientes_nivel_tea[]
    not?: NestedEnumpacientes_nivel_teaWithAggregatesFilter<$PrismaModel> | $Enums.pacientes_nivel_tea
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpacientes_nivel_teaFilter<$PrismaModel>
    _max?: NestedEnumpacientes_nivel_teaFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Enumprofissionais_tipo_registroFilter<$PrismaModel = never> = {
    equals?: $Enums.profissionais_tipo_registro | Enumprofissionais_tipo_registroFieldRefInput<$PrismaModel>
    in?: $Enums.profissionais_tipo_registro[]
    notIn?: $Enums.profissionais_tipo_registro[]
    not?: NestedEnumprofissionais_tipo_registroFilter<$PrismaModel> | $Enums.profissionais_tipo_registro
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Horarios_trabalhoListRelationFilter = {
    every?: horarios_trabalhoWhereInput
    some?: horarios_trabalhoWhereInput
    none?: horarios_trabalhoWhereInput
  }

  export type Profissional_tagsListRelationFilter = {
    every?: profissional_tagsWhereInput
    some?: profissional_tagsWhereInput
    none?: profissional_tagsWhereInput
  }

  export type horarios_trabalhoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type profissional_tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type profissionaisOrderByRelevanceInput = {
    fields: profissionaisOrderByRelevanceFieldEnum | profissionaisOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type profissionaisCountOrderByAggregateInput = {
    id_profissional?: SortOrder
    usuarios_id_usuario?: SortOrder
    enderecos_id_endereco?: SortOrder
    foto_perfil_url?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    tipo_registro?: SortOrder
    numero_registro?: SortOrder
    uf_registro?: SortOrder
    descricao?: SortOrder
    valor_consulta?: SortOrder
    aceita_convenio?: SortOrder
  }

  export type profissionaisAvgOrderByAggregateInput = {
    id_profissional?: SortOrder
    usuarios_id_usuario?: SortOrder
    enderecos_id_endereco?: SortOrder
    valor_consulta?: SortOrder
  }

  export type profissionaisMaxOrderByAggregateInput = {
    id_profissional?: SortOrder
    usuarios_id_usuario?: SortOrder
    enderecos_id_endereco?: SortOrder
    foto_perfil_url?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    tipo_registro?: SortOrder
    numero_registro?: SortOrder
    uf_registro?: SortOrder
    descricao?: SortOrder
    valor_consulta?: SortOrder
    aceita_convenio?: SortOrder
  }

  export type profissionaisMinOrderByAggregateInput = {
    id_profissional?: SortOrder
    usuarios_id_usuario?: SortOrder
    enderecos_id_endereco?: SortOrder
    foto_perfil_url?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    tipo_registro?: SortOrder
    numero_registro?: SortOrder
    uf_registro?: SortOrder
    descricao?: SortOrder
    valor_consulta?: SortOrder
    aceita_convenio?: SortOrder
  }

  export type profissionaisSumOrderByAggregateInput = {
    id_profissional?: SortOrder
    usuarios_id_usuario?: SortOrder
    enderecos_id_endereco?: SortOrder
    valor_consulta?: SortOrder
  }

  export type Enumprofissionais_tipo_registroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.profissionais_tipo_registro | Enumprofissionais_tipo_registroFieldRefInput<$PrismaModel>
    in?: $Enums.profissionais_tipo_registro[]
    notIn?: $Enums.profissionais_tipo_registro[]
    not?: NestedEnumprofissionais_tipo_registroWithAggregatesFilter<$PrismaModel> | $Enums.profissionais_tipo_registro
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumprofissionais_tipo_registroFilter<$PrismaModel>
    _max?: NestedEnumprofissionais_tipo_registroFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EspecialidadesScalarRelationFilter = {
    is?: especialidadesWhereInput
    isNot?: especialidadesWhereInput
  }

  export type profissional_especialidadesProfissionais_id_profissionalEspecialidades_id_especialidadeCompoundUniqueInput = {
    profissionais_id_profissional: number
    especialidades_id_especialidade: number
  }

  export type profissional_especialidadesCountOrderByAggregateInput = {
    profissionais_id_profissional?: SortOrder
    especialidades_id_especialidade?: SortOrder
  }

  export type profissional_especialidadesAvgOrderByAggregateInput = {
    profissionais_id_profissional?: SortOrder
    especialidades_id_especialidade?: SortOrder
  }

  export type profissional_especialidadesMaxOrderByAggregateInput = {
    profissionais_id_profissional?: SortOrder
    especialidades_id_especialidade?: SortOrder
  }

  export type profissional_especialidadesMinOrderByAggregateInput = {
    profissionais_id_profissional?: SortOrder
    especialidades_id_especialidade?: SortOrder
  }

  export type profissional_especialidadesSumOrderByAggregateInput = {
    profissionais_id_profissional?: SortOrder
    especialidades_id_especialidade?: SortOrder
  }

  export type FormacoesScalarRelationFilter = {
    is?: formacoesWhereInput
    isNot?: formacoesWhereInput
  }

  export type profissional_formacoesFormacoes_id_formacaoProfissionais_id_profissionalCompoundUniqueInput = {
    formacoes_id_formacao: number
    profissionais_id_profissional: number
  }

  export type profissional_formacoesCountOrderByAggregateInput = {
    formacoes_id_formacao?: SortOrder
    profissionais_id_profissional?: SortOrder
  }

  export type profissional_formacoesAvgOrderByAggregateInput = {
    formacoes_id_formacao?: SortOrder
    profissionais_id_profissional?: SortOrder
  }

  export type profissional_formacoesMaxOrderByAggregateInput = {
    formacoes_id_formacao?: SortOrder
    profissionais_id_profissional?: SortOrder
  }

  export type profissional_formacoesMinOrderByAggregateInput = {
    formacoes_id_formacao?: SortOrder
    profissionais_id_profissional?: SortOrder
  }

  export type profissional_formacoesSumOrderByAggregateInput = {
    formacoes_id_formacao?: SortOrder
    profissionais_id_profissional?: SortOrder
  }

  export type IdiomasScalarRelationFilter = {
    is?: idiomasWhereInput
    isNot?: idiomasWhereInput
  }

  export type profissional_idiomasIdiomas_id_idiomaProfissionais_id_profissionalCompoundUniqueInput = {
    idiomas_id_idioma: number
    profissionais_id_profissional: number
  }

  export type profissional_idiomasCountOrderByAggregateInput = {
    idiomas_id_idioma?: SortOrder
    profissionais_id_profissional?: SortOrder
  }

  export type profissional_idiomasAvgOrderByAggregateInput = {
    idiomas_id_idioma?: SortOrder
    profissionais_id_profissional?: SortOrder
  }

  export type profissional_idiomasMaxOrderByAggregateInput = {
    idiomas_id_idioma?: SortOrder
    profissionais_id_profissional?: SortOrder
  }

  export type profissional_idiomasMinOrderByAggregateInput = {
    idiomas_id_idioma?: SortOrder
    profissionais_id_profissional?: SortOrder
  }

  export type profissional_idiomasSumOrderByAggregateInput = {
    idiomas_id_idioma?: SortOrder
    profissionais_id_profissional?: SortOrder
  }

  export type TagsScalarRelationFilter = {
    is?: tagsWhereInput
    isNot?: tagsWhereInput
  }

  export type profissional_tagsTags_id_tagProfissionais_id_profissionalCompoundUniqueInput = {
    tags_id_tag: number
    profissionais_id_profissional: number
  }

  export type profissional_tagsCountOrderByAggregateInput = {
    tags_id_tag?: SortOrder
    profissionais_id_profissional?: SortOrder
  }

  export type profissional_tagsAvgOrderByAggregateInput = {
    tags_id_tag?: SortOrder
    profissionais_id_profissional?: SortOrder
  }

  export type profissional_tagsMaxOrderByAggregateInput = {
    tags_id_tag?: SortOrder
    profissionais_id_profissional?: SortOrder
  }

  export type profissional_tagsMinOrderByAggregateInput = {
    tags_id_tag?: SortOrder
    profissionais_id_profissional?: SortOrder
  }

  export type profissional_tagsSumOrderByAggregateInput = {
    tags_id_tag?: SortOrder
    profissionais_id_profissional?: SortOrder
  }

  export type tagsOrderByRelevanceInput = {
    fields: tagsOrderByRelevanceFieldEnum | tagsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tagsCountOrderByAggregateInput = {
    id_tag?: SortOrder
    nome_tag?: SortOrder
  }

  export type tagsAvgOrderByAggregateInput = {
    id_tag?: SortOrder
  }

  export type tagsMaxOrderByAggregateInput = {
    id_tag?: SortOrder
    nome_tag?: SortOrder
  }

  export type tagsMinOrderByAggregateInput = {
    id_tag?: SortOrder
    nome_tag?: SortOrder
  }

  export type tagsSumOrderByAggregateInput = {
    id_tag?: SortOrder
  }

  export type Enumtelefones_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.telefones_tipo | Enumtelefones_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.telefones_tipo[]
    notIn?: $Enums.telefones_tipo[]
    not?: NestedEnumtelefones_tipoFilter<$PrismaModel> | $Enums.telefones_tipo
  }

  export type telefonesOrderByRelevanceInput = {
    fields: telefonesOrderByRelevanceFieldEnum | telefonesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type telefonesCountOrderByAggregateInput = {
    id_telefone?: SortOrder
    usuarios_id_usuario?: SortOrder
    ddd?: SortOrder
    numero?: SortOrder
    tipo?: SortOrder
  }

  export type telefonesAvgOrderByAggregateInput = {
    id_telefone?: SortOrder
    usuarios_id_usuario?: SortOrder
  }

  export type telefonesMaxOrderByAggregateInput = {
    id_telefone?: SortOrder
    usuarios_id_usuario?: SortOrder
    ddd?: SortOrder
    numero?: SortOrder
    tipo?: SortOrder
  }

  export type telefonesMinOrderByAggregateInput = {
    id_telefone?: SortOrder
    usuarios_id_usuario?: SortOrder
    ddd?: SortOrder
    numero?: SortOrder
    tipo?: SortOrder
  }

  export type telefonesSumOrderByAggregateInput = {
    id_telefone?: SortOrder
    usuarios_id_usuario?: SortOrder
  }

  export type Enumtelefones_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.telefones_tipo | Enumtelefones_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.telefones_tipo[]
    notIn?: $Enums.telefones_tipo[]
    not?: NestedEnumtelefones_tipoWithAggregatesFilter<$PrismaModel> | $Enums.telefones_tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtelefones_tipoFilter<$PrismaModel>
    _max?: NestedEnumtelefones_tipoFilter<$PrismaModel>
  }

  export type TelefonesListRelationFilter = {
    every?: telefonesWhereInput
    some?: telefonesWhereInput
    none?: telefonesWhereInput
  }

  export type telefonesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosOrderByRelevanceInput = {
    fields: usuariosOrderByRelevanceFieldEnum | usuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuariosCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    data_criacao?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    data_criacao?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    data_criacao?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type enderecosCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<enderecosCreateWithoutAgendamentosInput, enderecosUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: enderecosCreateOrConnectWithoutAgendamentosInput
    connect?: enderecosWhereUniqueInput
  }

  export type pacientesCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<pacientesCreateWithoutAgendamentosInput, pacientesUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutAgendamentosInput
    connect?: pacientesWhereUniqueInput
  }

  export type profissionaisCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<profissionaisCreateWithoutAgendamentosInput, profissionaisUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutAgendamentosInput
    connect?: profissionaisWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumagendamentos_statusFieldUpdateOperationsInput = {
    set?: $Enums.agendamentos_status
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type enderecosUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<enderecosCreateWithoutAgendamentosInput, enderecosUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: enderecosCreateOrConnectWithoutAgendamentosInput
    upsert?: enderecosUpsertWithoutAgendamentosInput
    connect?: enderecosWhereUniqueInput
    update?: XOR<XOR<enderecosUpdateToOneWithWhereWithoutAgendamentosInput, enderecosUpdateWithoutAgendamentosInput>, enderecosUncheckedUpdateWithoutAgendamentosInput>
  }

  export type pacientesUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<pacientesCreateWithoutAgendamentosInput, pacientesUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutAgendamentosInput
    upsert?: pacientesUpsertWithoutAgendamentosInput
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutAgendamentosInput, pacientesUpdateWithoutAgendamentosInput>, pacientesUncheckedUpdateWithoutAgendamentosInput>
  }

  export type profissionaisUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<profissionaisCreateWithoutAgendamentosInput, profissionaisUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutAgendamentosInput
    upsert?: profissionaisUpsertWithoutAgendamentosInput
    connect?: profissionaisWhereUniqueInput
    update?: XOR<XOR<profissionaisUpdateToOneWithWhereWithoutAgendamentosInput, profissionaisUpdateWithoutAgendamentosInput>, profissionaisUncheckedUpdateWithoutAgendamentosInput>
  }

  export type agendamentosCreateNestedManyWithoutEnderecosInput = {
    create?: XOR<agendamentosCreateWithoutEnderecosInput, agendamentosUncheckedCreateWithoutEnderecosInput> | agendamentosCreateWithoutEnderecosInput[] | agendamentosUncheckedCreateWithoutEnderecosInput[]
    connectOrCreate?: agendamentosCreateOrConnectWithoutEnderecosInput | agendamentosCreateOrConnectWithoutEnderecosInput[]
    createMany?: agendamentosCreateManyEnderecosInputEnvelope
    connect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
  }

  export type pacientesCreateNestedManyWithoutEnderecosInput = {
    create?: XOR<pacientesCreateWithoutEnderecosInput, pacientesUncheckedCreateWithoutEnderecosInput> | pacientesCreateWithoutEnderecosInput[] | pacientesUncheckedCreateWithoutEnderecosInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutEnderecosInput | pacientesCreateOrConnectWithoutEnderecosInput[]
    createMany?: pacientesCreateManyEnderecosInputEnvelope
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
  }

  export type profissionaisCreateNestedManyWithoutEnderecosInput = {
    create?: XOR<profissionaisCreateWithoutEnderecosInput, profissionaisUncheckedCreateWithoutEnderecosInput> | profissionaisCreateWithoutEnderecosInput[] | profissionaisUncheckedCreateWithoutEnderecosInput[]
    connectOrCreate?: profissionaisCreateOrConnectWithoutEnderecosInput | profissionaisCreateOrConnectWithoutEnderecosInput[]
    createMany?: profissionaisCreateManyEnderecosInputEnvelope
    connect?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
  }

  export type agendamentosUncheckedCreateNestedManyWithoutEnderecosInput = {
    create?: XOR<agendamentosCreateWithoutEnderecosInput, agendamentosUncheckedCreateWithoutEnderecosInput> | agendamentosCreateWithoutEnderecosInput[] | agendamentosUncheckedCreateWithoutEnderecosInput[]
    connectOrCreate?: agendamentosCreateOrConnectWithoutEnderecosInput | agendamentosCreateOrConnectWithoutEnderecosInput[]
    createMany?: agendamentosCreateManyEnderecosInputEnvelope
    connect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
  }

  export type pacientesUncheckedCreateNestedManyWithoutEnderecosInput = {
    create?: XOR<pacientesCreateWithoutEnderecosInput, pacientesUncheckedCreateWithoutEnderecosInput> | pacientesCreateWithoutEnderecosInput[] | pacientesUncheckedCreateWithoutEnderecosInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutEnderecosInput | pacientesCreateOrConnectWithoutEnderecosInput[]
    createMany?: pacientesCreateManyEnderecosInputEnvelope
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
  }

  export type profissionaisUncheckedCreateNestedManyWithoutEnderecosInput = {
    create?: XOR<profissionaisCreateWithoutEnderecosInput, profissionaisUncheckedCreateWithoutEnderecosInput> | profissionaisCreateWithoutEnderecosInput[] | profissionaisUncheckedCreateWithoutEnderecosInput[]
    connectOrCreate?: profissionaisCreateOrConnectWithoutEnderecosInput | profissionaisCreateOrConnectWithoutEnderecosInput[]
    createMany?: profissionaisCreateManyEnderecosInputEnvelope
    connect?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type agendamentosUpdateManyWithoutEnderecosNestedInput = {
    create?: XOR<agendamentosCreateWithoutEnderecosInput, agendamentosUncheckedCreateWithoutEnderecosInput> | agendamentosCreateWithoutEnderecosInput[] | agendamentosUncheckedCreateWithoutEnderecosInput[]
    connectOrCreate?: agendamentosCreateOrConnectWithoutEnderecosInput | agendamentosCreateOrConnectWithoutEnderecosInput[]
    upsert?: agendamentosUpsertWithWhereUniqueWithoutEnderecosInput | agendamentosUpsertWithWhereUniqueWithoutEnderecosInput[]
    createMany?: agendamentosCreateManyEnderecosInputEnvelope
    set?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    disconnect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    delete?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    connect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    update?: agendamentosUpdateWithWhereUniqueWithoutEnderecosInput | agendamentosUpdateWithWhereUniqueWithoutEnderecosInput[]
    updateMany?: agendamentosUpdateManyWithWhereWithoutEnderecosInput | agendamentosUpdateManyWithWhereWithoutEnderecosInput[]
    deleteMany?: agendamentosScalarWhereInput | agendamentosScalarWhereInput[]
  }

  export type pacientesUpdateManyWithoutEnderecosNestedInput = {
    create?: XOR<pacientesCreateWithoutEnderecosInput, pacientesUncheckedCreateWithoutEnderecosInput> | pacientesCreateWithoutEnderecosInput[] | pacientesUncheckedCreateWithoutEnderecosInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutEnderecosInput | pacientesCreateOrConnectWithoutEnderecosInput[]
    upsert?: pacientesUpsertWithWhereUniqueWithoutEnderecosInput | pacientesUpsertWithWhereUniqueWithoutEnderecosInput[]
    createMany?: pacientesCreateManyEnderecosInputEnvelope
    set?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    disconnect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    delete?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    update?: pacientesUpdateWithWhereUniqueWithoutEnderecosInput | pacientesUpdateWithWhereUniqueWithoutEnderecosInput[]
    updateMany?: pacientesUpdateManyWithWhereWithoutEnderecosInput | pacientesUpdateManyWithWhereWithoutEnderecosInput[]
    deleteMany?: pacientesScalarWhereInput | pacientesScalarWhereInput[]
  }

  export type profissionaisUpdateManyWithoutEnderecosNestedInput = {
    create?: XOR<profissionaisCreateWithoutEnderecosInput, profissionaisUncheckedCreateWithoutEnderecosInput> | profissionaisCreateWithoutEnderecosInput[] | profissionaisUncheckedCreateWithoutEnderecosInput[]
    connectOrCreate?: profissionaisCreateOrConnectWithoutEnderecosInput | profissionaisCreateOrConnectWithoutEnderecosInput[]
    upsert?: profissionaisUpsertWithWhereUniqueWithoutEnderecosInput | profissionaisUpsertWithWhereUniqueWithoutEnderecosInput[]
    createMany?: profissionaisCreateManyEnderecosInputEnvelope
    set?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
    disconnect?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
    delete?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
    connect?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
    update?: profissionaisUpdateWithWhereUniqueWithoutEnderecosInput | profissionaisUpdateWithWhereUniqueWithoutEnderecosInput[]
    updateMany?: profissionaisUpdateManyWithWhereWithoutEnderecosInput | profissionaisUpdateManyWithWhereWithoutEnderecosInput[]
    deleteMany?: profissionaisScalarWhereInput | profissionaisScalarWhereInput[]
  }

  export type agendamentosUncheckedUpdateManyWithoutEnderecosNestedInput = {
    create?: XOR<agendamentosCreateWithoutEnderecosInput, agendamentosUncheckedCreateWithoutEnderecosInput> | agendamentosCreateWithoutEnderecosInput[] | agendamentosUncheckedCreateWithoutEnderecosInput[]
    connectOrCreate?: agendamentosCreateOrConnectWithoutEnderecosInput | agendamentosCreateOrConnectWithoutEnderecosInput[]
    upsert?: agendamentosUpsertWithWhereUniqueWithoutEnderecosInput | agendamentosUpsertWithWhereUniqueWithoutEnderecosInput[]
    createMany?: agendamentosCreateManyEnderecosInputEnvelope
    set?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    disconnect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    delete?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    connect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    update?: agendamentosUpdateWithWhereUniqueWithoutEnderecosInput | agendamentosUpdateWithWhereUniqueWithoutEnderecosInput[]
    updateMany?: agendamentosUpdateManyWithWhereWithoutEnderecosInput | agendamentosUpdateManyWithWhereWithoutEnderecosInput[]
    deleteMany?: agendamentosScalarWhereInput | agendamentosScalarWhereInput[]
  }

  export type pacientesUncheckedUpdateManyWithoutEnderecosNestedInput = {
    create?: XOR<pacientesCreateWithoutEnderecosInput, pacientesUncheckedCreateWithoutEnderecosInput> | pacientesCreateWithoutEnderecosInput[] | pacientesUncheckedCreateWithoutEnderecosInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutEnderecosInput | pacientesCreateOrConnectWithoutEnderecosInput[]
    upsert?: pacientesUpsertWithWhereUniqueWithoutEnderecosInput | pacientesUpsertWithWhereUniqueWithoutEnderecosInput[]
    createMany?: pacientesCreateManyEnderecosInputEnvelope
    set?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    disconnect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    delete?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    update?: pacientesUpdateWithWhereUniqueWithoutEnderecosInput | pacientesUpdateWithWhereUniqueWithoutEnderecosInput[]
    updateMany?: pacientesUpdateManyWithWhereWithoutEnderecosInput | pacientesUpdateManyWithWhereWithoutEnderecosInput[]
    deleteMany?: pacientesScalarWhereInput | pacientesScalarWhereInput[]
  }

  export type profissionaisUncheckedUpdateManyWithoutEnderecosNestedInput = {
    create?: XOR<profissionaisCreateWithoutEnderecosInput, profissionaisUncheckedCreateWithoutEnderecosInput> | profissionaisCreateWithoutEnderecosInput[] | profissionaisUncheckedCreateWithoutEnderecosInput[]
    connectOrCreate?: profissionaisCreateOrConnectWithoutEnderecosInput | profissionaisCreateOrConnectWithoutEnderecosInput[]
    upsert?: profissionaisUpsertWithWhereUniqueWithoutEnderecosInput | profissionaisUpsertWithWhereUniqueWithoutEnderecosInput[]
    createMany?: profissionaisCreateManyEnderecosInputEnvelope
    set?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
    disconnect?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
    delete?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
    connect?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
    update?: profissionaisUpdateWithWhereUniqueWithoutEnderecosInput | profissionaisUpdateWithWhereUniqueWithoutEnderecosInput[]
    updateMany?: profissionaisUpdateManyWithWhereWithoutEnderecosInput | profissionaisUpdateManyWithWhereWithoutEnderecosInput[]
    deleteMany?: profissionaisScalarWhereInput | profissionaisScalarWhereInput[]
  }

  export type profissional_especialidadesCreateNestedManyWithoutEspecialidadesInput = {
    create?: XOR<profissional_especialidadesCreateWithoutEspecialidadesInput, profissional_especialidadesUncheckedCreateWithoutEspecialidadesInput> | profissional_especialidadesCreateWithoutEspecialidadesInput[] | profissional_especialidadesUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: profissional_especialidadesCreateOrConnectWithoutEspecialidadesInput | profissional_especialidadesCreateOrConnectWithoutEspecialidadesInput[]
    createMany?: profissional_especialidadesCreateManyEspecialidadesInputEnvelope
    connect?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
  }

  export type profissional_especialidadesUncheckedCreateNestedManyWithoutEspecialidadesInput = {
    create?: XOR<profissional_especialidadesCreateWithoutEspecialidadesInput, profissional_especialidadesUncheckedCreateWithoutEspecialidadesInput> | profissional_especialidadesCreateWithoutEspecialidadesInput[] | profissional_especialidadesUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: profissional_especialidadesCreateOrConnectWithoutEspecialidadesInput | profissional_especialidadesCreateOrConnectWithoutEspecialidadesInput[]
    createMany?: profissional_especialidadesCreateManyEspecialidadesInputEnvelope
    connect?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
  }

  export type profissional_especialidadesUpdateManyWithoutEspecialidadesNestedInput = {
    create?: XOR<profissional_especialidadesCreateWithoutEspecialidadesInput, profissional_especialidadesUncheckedCreateWithoutEspecialidadesInput> | profissional_especialidadesCreateWithoutEspecialidadesInput[] | profissional_especialidadesUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: profissional_especialidadesCreateOrConnectWithoutEspecialidadesInput | profissional_especialidadesCreateOrConnectWithoutEspecialidadesInput[]
    upsert?: profissional_especialidadesUpsertWithWhereUniqueWithoutEspecialidadesInput | profissional_especialidadesUpsertWithWhereUniqueWithoutEspecialidadesInput[]
    createMany?: profissional_especialidadesCreateManyEspecialidadesInputEnvelope
    set?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
    disconnect?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
    delete?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
    connect?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
    update?: profissional_especialidadesUpdateWithWhereUniqueWithoutEspecialidadesInput | profissional_especialidadesUpdateWithWhereUniqueWithoutEspecialidadesInput[]
    updateMany?: profissional_especialidadesUpdateManyWithWhereWithoutEspecialidadesInput | profissional_especialidadesUpdateManyWithWhereWithoutEspecialidadesInput[]
    deleteMany?: profissional_especialidadesScalarWhereInput | profissional_especialidadesScalarWhereInput[]
  }

  export type profissional_especialidadesUncheckedUpdateManyWithoutEspecialidadesNestedInput = {
    create?: XOR<profissional_especialidadesCreateWithoutEspecialidadesInput, profissional_especialidadesUncheckedCreateWithoutEspecialidadesInput> | profissional_especialidadesCreateWithoutEspecialidadesInput[] | profissional_especialidadesUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: profissional_especialidadesCreateOrConnectWithoutEspecialidadesInput | profissional_especialidadesCreateOrConnectWithoutEspecialidadesInput[]
    upsert?: profissional_especialidadesUpsertWithWhereUniqueWithoutEspecialidadesInput | profissional_especialidadesUpsertWithWhereUniqueWithoutEspecialidadesInput[]
    createMany?: profissional_especialidadesCreateManyEspecialidadesInputEnvelope
    set?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
    disconnect?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
    delete?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
    connect?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
    update?: profissional_especialidadesUpdateWithWhereUniqueWithoutEspecialidadesInput | profissional_especialidadesUpdateWithWhereUniqueWithoutEspecialidadesInput[]
    updateMany?: profissional_especialidadesUpdateManyWithWhereWithoutEspecialidadesInput | profissional_especialidadesUpdateManyWithWhereWithoutEspecialidadesInput[]
    deleteMany?: profissional_especialidadesScalarWhereInput | profissional_especialidadesScalarWhereInput[]
  }

  export type profissional_formacoesCreateNestedManyWithoutFormacoesInput = {
    create?: XOR<profissional_formacoesCreateWithoutFormacoesInput, profissional_formacoesUncheckedCreateWithoutFormacoesInput> | profissional_formacoesCreateWithoutFormacoesInput[] | profissional_formacoesUncheckedCreateWithoutFormacoesInput[]
    connectOrCreate?: profissional_formacoesCreateOrConnectWithoutFormacoesInput | profissional_formacoesCreateOrConnectWithoutFormacoesInput[]
    createMany?: profissional_formacoesCreateManyFormacoesInputEnvelope
    connect?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
  }

  export type profissional_formacoesUncheckedCreateNestedManyWithoutFormacoesInput = {
    create?: XOR<profissional_formacoesCreateWithoutFormacoesInput, profissional_formacoesUncheckedCreateWithoutFormacoesInput> | profissional_formacoesCreateWithoutFormacoesInput[] | profissional_formacoesUncheckedCreateWithoutFormacoesInput[]
    connectOrCreate?: profissional_formacoesCreateOrConnectWithoutFormacoesInput | profissional_formacoesCreateOrConnectWithoutFormacoesInput[]
    createMany?: profissional_formacoesCreateManyFormacoesInputEnvelope
    connect?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
  }

  export type profissional_formacoesUpdateManyWithoutFormacoesNestedInput = {
    create?: XOR<profissional_formacoesCreateWithoutFormacoesInput, profissional_formacoesUncheckedCreateWithoutFormacoesInput> | profissional_formacoesCreateWithoutFormacoesInput[] | profissional_formacoesUncheckedCreateWithoutFormacoesInput[]
    connectOrCreate?: profissional_formacoesCreateOrConnectWithoutFormacoesInput | profissional_formacoesCreateOrConnectWithoutFormacoesInput[]
    upsert?: profissional_formacoesUpsertWithWhereUniqueWithoutFormacoesInput | profissional_formacoesUpsertWithWhereUniqueWithoutFormacoesInput[]
    createMany?: profissional_formacoesCreateManyFormacoesInputEnvelope
    set?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
    disconnect?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
    delete?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
    connect?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
    update?: profissional_formacoesUpdateWithWhereUniqueWithoutFormacoesInput | profissional_formacoesUpdateWithWhereUniqueWithoutFormacoesInput[]
    updateMany?: profissional_formacoesUpdateManyWithWhereWithoutFormacoesInput | profissional_formacoesUpdateManyWithWhereWithoutFormacoesInput[]
    deleteMany?: profissional_formacoesScalarWhereInput | profissional_formacoesScalarWhereInput[]
  }

  export type profissional_formacoesUncheckedUpdateManyWithoutFormacoesNestedInput = {
    create?: XOR<profissional_formacoesCreateWithoutFormacoesInput, profissional_formacoesUncheckedCreateWithoutFormacoesInput> | profissional_formacoesCreateWithoutFormacoesInput[] | profissional_formacoesUncheckedCreateWithoutFormacoesInput[]
    connectOrCreate?: profissional_formacoesCreateOrConnectWithoutFormacoesInput | profissional_formacoesCreateOrConnectWithoutFormacoesInput[]
    upsert?: profissional_formacoesUpsertWithWhereUniqueWithoutFormacoesInput | profissional_formacoesUpsertWithWhereUniqueWithoutFormacoesInput[]
    createMany?: profissional_formacoesCreateManyFormacoesInputEnvelope
    set?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
    disconnect?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
    delete?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
    connect?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
    update?: profissional_formacoesUpdateWithWhereUniqueWithoutFormacoesInput | profissional_formacoesUpdateWithWhereUniqueWithoutFormacoesInput[]
    updateMany?: profissional_formacoesUpdateManyWithWhereWithoutFormacoesInput | profissional_formacoesUpdateManyWithWhereWithoutFormacoesInput[]
    deleteMany?: profissional_formacoesScalarWhereInput | profissional_formacoesScalarWhereInput[]
  }

  export type profissionaisCreateNestedOneWithoutHorarios_trabalhoInput = {
    create?: XOR<profissionaisCreateWithoutHorarios_trabalhoInput, profissionaisUncheckedCreateWithoutHorarios_trabalhoInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutHorarios_trabalhoInput
    connect?: profissionaisWhereUniqueInput
  }

  export type profissionaisUpdateOneRequiredWithoutHorarios_trabalhoNestedInput = {
    create?: XOR<profissionaisCreateWithoutHorarios_trabalhoInput, profissionaisUncheckedCreateWithoutHorarios_trabalhoInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutHorarios_trabalhoInput
    upsert?: profissionaisUpsertWithoutHorarios_trabalhoInput
    connect?: profissionaisWhereUniqueInput
    update?: XOR<XOR<profissionaisUpdateToOneWithWhereWithoutHorarios_trabalhoInput, profissionaisUpdateWithoutHorarios_trabalhoInput>, profissionaisUncheckedUpdateWithoutHorarios_trabalhoInput>
  }

  export type profissional_idiomasCreateNestedManyWithoutIdiomasInput = {
    create?: XOR<profissional_idiomasCreateWithoutIdiomasInput, profissional_idiomasUncheckedCreateWithoutIdiomasInput> | profissional_idiomasCreateWithoutIdiomasInput[] | profissional_idiomasUncheckedCreateWithoutIdiomasInput[]
    connectOrCreate?: profissional_idiomasCreateOrConnectWithoutIdiomasInput | profissional_idiomasCreateOrConnectWithoutIdiomasInput[]
    createMany?: profissional_idiomasCreateManyIdiomasInputEnvelope
    connect?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
  }

  export type profissional_idiomasUncheckedCreateNestedManyWithoutIdiomasInput = {
    create?: XOR<profissional_idiomasCreateWithoutIdiomasInput, profissional_idiomasUncheckedCreateWithoutIdiomasInput> | profissional_idiomasCreateWithoutIdiomasInput[] | profissional_idiomasUncheckedCreateWithoutIdiomasInput[]
    connectOrCreate?: profissional_idiomasCreateOrConnectWithoutIdiomasInput | profissional_idiomasCreateOrConnectWithoutIdiomasInput[]
    createMany?: profissional_idiomasCreateManyIdiomasInputEnvelope
    connect?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
  }

  export type profissional_idiomasUpdateManyWithoutIdiomasNestedInput = {
    create?: XOR<profissional_idiomasCreateWithoutIdiomasInput, profissional_idiomasUncheckedCreateWithoutIdiomasInput> | profissional_idiomasCreateWithoutIdiomasInput[] | profissional_idiomasUncheckedCreateWithoutIdiomasInput[]
    connectOrCreate?: profissional_idiomasCreateOrConnectWithoutIdiomasInput | profissional_idiomasCreateOrConnectWithoutIdiomasInput[]
    upsert?: profissional_idiomasUpsertWithWhereUniqueWithoutIdiomasInput | profissional_idiomasUpsertWithWhereUniqueWithoutIdiomasInput[]
    createMany?: profissional_idiomasCreateManyIdiomasInputEnvelope
    set?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
    disconnect?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
    delete?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
    connect?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
    update?: profissional_idiomasUpdateWithWhereUniqueWithoutIdiomasInput | profissional_idiomasUpdateWithWhereUniqueWithoutIdiomasInput[]
    updateMany?: profissional_idiomasUpdateManyWithWhereWithoutIdiomasInput | profissional_idiomasUpdateManyWithWhereWithoutIdiomasInput[]
    deleteMany?: profissional_idiomasScalarWhereInput | profissional_idiomasScalarWhereInput[]
  }

  export type profissional_idiomasUncheckedUpdateManyWithoutIdiomasNestedInput = {
    create?: XOR<profissional_idiomasCreateWithoutIdiomasInput, profissional_idiomasUncheckedCreateWithoutIdiomasInput> | profissional_idiomasCreateWithoutIdiomasInput[] | profissional_idiomasUncheckedCreateWithoutIdiomasInput[]
    connectOrCreate?: profissional_idiomasCreateOrConnectWithoutIdiomasInput | profissional_idiomasCreateOrConnectWithoutIdiomasInput[]
    upsert?: profissional_idiomasUpsertWithWhereUniqueWithoutIdiomasInput | profissional_idiomasUpsertWithWhereUniqueWithoutIdiomasInput[]
    createMany?: profissional_idiomasCreateManyIdiomasInputEnvelope
    set?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
    disconnect?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
    delete?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
    connect?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
    update?: profissional_idiomasUpdateWithWhereUniqueWithoutIdiomasInput | profissional_idiomasUpdateWithWhereUniqueWithoutIdiomasInput[]
    updateMany?: profissional_idiomasUpdateManyWithWhereWithoutIdiomasInput | profissional_idiomasUpdateManyWithWhereWithoutIdiomasInput[]
    deleteMany?: profissional_idiomasScalarWhereInput | profissional_idiomasScalarWhereInput[]
  }

  export type agendamentosCreateNestedManyWithoutPacientesInput = {
    create?: XOR<agendamentosCreateWithoutPacientesInput, agendamentosUncheckedCreateWithoutPacientesInput> | agendamentosCreateWithoutPacientesInput[] | agendamentosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: agendamentosCreateOrConnectWithoutPacientesInput | agendamentosCreateOrConnectWithoutPacientesInput[]
    createMany?: agendamentosCreateManyPacientesInputEnvelope
    connect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
  }

  export type enderecosCreateNestedOneWithoutPacientesInput = {
    create?: XOR<enderecosCreateWithoutPacientesInput, enderecosUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: enderecosCreateOrConnectWithoutPacientesInput
    connect?: enderecosWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutPacientesInput = {
    create?: XOR<usuariosCreateWithoutPacientesInput, usuariosUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutPacientesInput
    connect?: usuariosWhereUniqueInput
  }

  export type agendamentosUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: XOR<agendamentosCreateWithoutPacientesInput, agendamentosUncheckedCreateWithoutPacientesInput> | agendamentosCreateWithoutPacientesInput[] | agendamentosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: agendamentosCreateOrConnectWithoutPacientesInput | agendamentosCreateOrConnectWithoutPacientesInput[]
    createMany?: agendamentosCreateManyPacientesInputEnvelope
    connect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
  }

  export type Enumpacientes_nivel_teaFieldUpdateOperationsInput = {
    set?: $Enums.pacientes_nivel_tea
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type agendamentosUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<agendamentosCreateWithoutPacientesInput, agendamentosUncheckedCreateWithoutPacientesInput> | agendamentosCreateWithoutPacientesInput[] | agendamentosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: agendamentosCreateOrConnectWithoutPacientesInput | agendamentosCreateOrConnectWithoutPacientesInput[]
    upsert?: agendamentosUpsertWithWhereUniqueWithoutPacientesInput | agendamentosUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: agendamentosCreateManyPacientesInputEnvelope
    set?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    disconnect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    delete?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    connect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    update?: agendamentosUpdateWithWhereUniqueWithoutPacientesInput | agendamentosUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: agendamentosUpdateManyWithWhereWithoutPacientesInput | agendamentosUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: agendamentosScalarWhereInput | agendamentosScalarWhereInput[]
  }

  export type enderecosUpdateOneRequiredWithoutPacientesNestedInput = {
    create?: XOR<enderecosCreateWithoutPacientesInput, enderecosUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: enderecosCreateOrConnectWithoutPacientesInput
    upsert?: enderecosUpsertWithoutPacientesInput
    connect?: enderecosWhereUniqueInput
    update?: XOR<XOR<enderecosUpdateToOneWithWhereWithoutPacientesInput, enderecosUpdateWithoutPacientesInput>, enderecosUncheckedUpdateWithoutPacientesInput>
  }

  export type usuariosUpdateOneRequiredWithoutPacientesNestedInput = {
    create?: XOR<usuariosCreateWithoutPacientesInput, usuariosUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutPacientesInput
    upsert?: usuariosUpsertWithoutPacientesInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutPacientesInput, usuariosUpdateWithoutPacientesInput>, usuariosUncheckedUpdateWithoutPacientesInput>
  }

  export type agendamentosUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<agendamentosCreateWithoutPacientesInput, agendamentosUncheckedCreateWithoutPacientesInput> | agendamentosCreateWithoutPacientesInput[] | agendamentosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: agendamentosCreateOrConnectWithoutPacientesInput | agendamentosCreateOrConnectWithoutPacientesInput[]
    upsert?: agendamentosUpsertWithWhereUniqueWithoutPacientesInput | agendamentosUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: agendamentosCreateManyPacientesInputEnvelope
    set?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    disconnect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    delete?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    connect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    update?: agendamentosUpdateWithWhereUniqueWithoutPacientesInput | agendamentosUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: agendamentosUpdateManyWithWhereWithoutPacientesInput | agendamentosUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: agendamentosScalarWhereInput | agendamentosScalarWhereInput[]
  }

  export type agendamentosCreateNestedManyWithoutProfissionaisInput = {
    create?: XOR<agendamentosCreateWithoutProfissionaisInput, agendamentosUncheckedCreateWithoutProfissionaisInput> | agendamentosCreateWithoutProfissionaisInput[] | agendamentosUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: agendamentosCreateOrConnectWithoutProfissionaisInput | agendamentosCreateOrConnectWithoutProfissionaisInput[]
    createMany?: agendamentosCreateManyProfissionaisInputEnvelope
    connect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
  }

  export type horarios_trabalhoCreateNestedManyWithoutProfissionaisInput = {
    create?: XOR<horarios_trabalhoCreateWithoutProfissionaisInput, horarios_trabalhoUncheckedCreateWithoutProfissionaisInput> | horarios_trabalhoCreateWithoutProfissionaisInput[] | horarios_trabalhoUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: horarios_trabalhoCreateOrConnectWithoutProfissionaisInput | horarios_trabalhoCreateOrConnectWithoutProfissionaisInput[]
    createMany?: horarios_trabalhoCreateManyProfissionaisInputEnvelope
    connect?: horarios_trabalhoWhereUniqueInput | horarios_trabalhoWhereUniqueInput[]
  }

  export type enderecosCreateNestedOneWithoutProfissionaisInput = {
    create?: XOR<enderecosCreateWithoutProfissionaisInput, enderecosUncheckedCreateWithoutProfissionaisInput>
    connectOrCreate?: enderecosCreateOrConnectWithoutProfissionaisInput
    connect?: enderecosWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutProfissionaisInput = {
    create?: XOR<usuariosCreateWithoutProfissionaisInput, usuariosUncheckedCreateWithoutProfissionaisInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutProfissionaisInput
    connect?: usuariosWhereUniqueInput
  }

  export type profissional_especialidadesCreateNestedManyWithoutProfissionaisInput = {
    create?: XOR<profissional_especialidadesCreateWithoutProfissionaisInput, profissional_especialidadesUncheckedCreateWithoutProfissionaisInput> | profissional_especialidadesCreateWithoutProfissionaisInput[] | profissional_especialidadesUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: profissional_especialidadesCreateOrConnectWithoutProfissionaisInput | profissional_especialidadesCreateOrConnectWithoutProfissionaisInput[]
    createMany?: profissional_especialidadesCreateManyProfissionaisInputEnvelope
    connect?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
  }

  export type profissional_formacoesCreateNestedManyWithoutProfissionaisInput = {
    create?: XOR<profissional_formacoesCreateWithoutProfissionaisInput, profissional_formacoesUncheckedCreateWithoutProfissionaisInput> | profissional_formacoesCreateWithoutProfissionaisInput[] | profissional_formacoesUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: profissional_formacoesCreateOrConnectWithoutProfissionaisInput | profissional_formacoesCreateOrConnectWithoutProfissionaisInput[]
    createMany?: profissional_formacoesCreateManyProfissionaisInputEnvelope
    connect?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
  }

  export type profissional_idiomasCreateNestedManyWithoutProfissionaisInput = {
    create?: XOR<profissional_idiomasCreateWithoutProfissionaisInput, profissional_idiomasUncheckedCreateWithoutProfissionaisInput> | profissional_idiomasCreateWithoutProfissionaisInput[] | profissional_idiomasUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: profissional_idiomasCreateOrConnectWithoutProfissionaisInput | profissional_idiomasCreateOrConnectWithoutProfissionaisInput[]
    createMany?: profissional_idiomasCreateManyProfissionaisInputEnvelope
    connect?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
  }

  export type profissional_tagsCreateNestedManyWithoutProfissionaisInput = {
    create?: XOR<profissional_tagsCreateWithoutProfissionaisInput, profissional_tagsUncheckedCreateWithoutProfissionaisInput> | profissional_tagsCreateWithoutProfissionaisInput[] | profissional_tagsUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: profissional_tagsCreateOrConnectWithoutProfissionaisInput | profissional_tagsCreateOrConnectWithoutProfissionaisInput[]
    createMany?: profissional_tagsCreateManyProfissionaisInputEnvelope
    connect?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
  }

  export type agendamentosUncheckedCreateNestedManyWithoutProfissionaisInput = {
    create?: XOR<agendamentosCreateWithoutProfissionaisInput, agendamentosUncheckedCreateWithoutProfissionaisInput> | agendamentosCreateWithoutProfissionaisInput[] | agendamentosUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: agendamentosCreateOrConnectWithoutProfissionaisInput | agendamentosCreateOrConnectWithoutProfissionaisInput[]
    createMany?: agendamentosCreateManyProfissionaisInputEnvelope
    connect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
  }

  export type horarios_trabalhoUncheckedCreateNestedManyWithoutProfissionaisInput = {
    create?: XOR<horarios_trabalhoCreateWithoutProfissionaisInput, horarios_trabalhoUncheckedCreateWithoutProfissionaisInput> | horarios_trabalhoCreateWithoutProfissionaisInput[] | horarios_trabalhoUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: horarios_trabalhoCreateOrConnectWithoutProfissionaisInput | horarios_trabalhoCreateOrConnectWithoutProfissionaisInput[]
    createMany?: horarios_trabalhoCreateManyProfissionaisInputEnvelope
    connect?: horarios_trabalhoWhereUniqueInput | horarios_trabalhoWhereUniqueInput[]
  }

  export type profissional_especialidadesUncheckedCreateNestedManyWithoutProfissionaisInput = {
    create?: XOR<profissional_especialidadesCreateWithoutProfissionaisInput, profissional_especialidadesUncheckedCreateWithoutProfissionaisInput> | profissional_especialidadesCreateWithoutProfissionaisInput[] | profissional_especialidadesUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: profissional_especialidadesCreateOrConnectWithoutProfissionaisInput | profissional_especialidadesCreateOrConnectWithoutProfissionaisInput[]
    createMany?: profissional_especialidadesCreateManyProfissionaisInputEnvelope
    connect?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
  }

  export type profissional_formacoesUncheckedCreateNestedManyWithoutProfissionaisInput = {
    create?: XOR<profissional_formacoesCreateWithoutProfissionaisInput, profissional_formacoesUncheckedCreateWithoutProfissionaisInput> | profissional_formacoesCreateWithoutProfissionaisInput[] | profissional_formacoesUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: profissional_formacoesCreateOrConnectWithoutProfissionaisInput | profissional_formacoesCreateOrConnectWithoutProfissionaisInput[]
    createMany?: profissional_formacoesCreateManyProfissionaisInputEnvelope
    connect?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
  }

  export type profissional_idiomasUncheckedCreateNestedManyWithoutProfissionaisInput = {
    create?: XOR<profissional_idiomasCreateWithoutProfissionaisInput, profissional_idiomasUncheckedCreateWithoutProfissionaisInput> | profissional_idiomasCreateWithoutProfissionaisInput[] | profissional_idiomasUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: profissional_idiomasCreateOrConnectWithoutProfissionaisInput | profissional_idiomasCreateOrConnectWithoutProfissionaisInput[]
    createMany?: profissional_idiomasCreateManyProfissionaisInputEnvelope
    connect?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
  }

  export type profissional_tagsUncheckedCreateNestedManyWithoutProfissionaisInput = {
    create?: XOR<profissional_tagsCreateWithoutProfissionaisInput, profissional_tagsUncheckedCreateWithoutProfissionaisInput> | profissional_tagsCreateWithoutProfissionaisInput[] | profissional_tagsUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: profissional_tagsCreateOrConnectWithoutProfissionaisInput | profissional_tagsCreateOrConnectWithoutProfissionaisInput[]
    createMany?: profissional_tagsCreateManyProfissionaisInputEnvelope
    connect?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
  }

  export type Enumprofissionais_tipo_registroFieldUpdateOperationsInput = {
    set?: $Enums.profissionais_tipo_registro
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type agendamentosUpdateManyWithoutProfissionaisNestedInput = {
    create?: XOR<agendamentosCreateWithoutProfissionaisInput, agendamentosUncheckedCreateWithoutProfissionaisInput> | agendamentosCreateWithoutProfissionaisInput[] | agendamentosUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: agendamentosCreateOrConnectWithoutProfissionaisInput | agendamentosCreateOrConnectWithoutProfissionaisInput[]
    upsert?: agendamentosUpsertWithWhereUniqueWithoutProfissionaisInput | agendamentosUpsertWithWhereUniqueWithoutProfissionaisInput[]
    createMany?: agendamentosCreateManyProfissionaisInputEnvelope
    set?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    disconnect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    delete?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    connect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    update?: agendamentosUpdateWithWhereUniqueWithoutProfissionaisInput | agendamentosUpdateWithWhereUniqueWithoutProfissionaisInput[]
    updateMany?: agendamentosUpdateManyWithWhereWithoutProfissionaisInput | agendamentosUpdateManyWithWhereWithoutProfissionaisInput[]
    deleteMany?: agendamentosScalarWhereInput | agendamentosScalarWhereInput[]
  }

  export type horarios_trabalhoUpdateManyWithoutProfissionaisNestedInput = {
    create?: XOR<horarios_trabalhoCreateWithoutProfissionaisInput, horarios_trabalhoUncheckedCreateWithoutProfissionaisInput> | horarios_trabalhoCreateWithoutProfissionaisInput[] | horarios_trabalhoUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: horarios_trabalhoCreateOrConnectWithoutProfissionaisInput | horarios_trabalhoCreateOrConnectWithoutProfissionaisInput[]
    upsert?: horarios_trabalhoUpsertWithWhereUniqueWithoutProfissionaisInput | horarios_trabalhoUpsertWithWhereUniqueWithoutProfissionaisInput[]
    createMany?: horarios_trabalhoCreateManyProfissionaisInputEnvelope
    set?: horarios_trabalhoWhereUniqueInput | horarios_trabalhoWhereUniqueInput[]
    disconnect?: horarios_trabalhoWhereUniqueInput | horarios_trabalhoWhereUniqueInput[]
    delete?: horarios_trabalhoWhereUniqueInput | horarios_trabalhoWhereUniqueInput[]
    connect?: horarios_trabalhoWhereUniqueInput | horarios_trabalhoWhereUniqueInput[]
    update?: horarios_trabalhoUpdateWithWhereUniqueWithoutProfissionaisInput | horarios_trabalhoUpdateWithWhereUniqueWithoutProfissionaisInput[]
    updateMany?: horarios_trabalhoUpdateManyWithWhereWithoutProfissionaisInput | horarios_trabalhoUpdateManyWithWhereWithoutProfissionaisInput[]
    deleteMany?: horarios_trabalhoScalarWhereInput | horarios_trabalhoScalarWhereInput[]
  }

  export type enderecosUpdateOneRequiredWithoutProfissionaisNestedInput = {
    create?: XOR<enderecosCreateWithoutProfissionaisInput, enderecosUncheckedCreateWithoutProfissionaisInput>
    connectOrCreate?: enderecosCreateOrConnectWithoutProfissionaisInput
    upsert?: enderecosUpsertWithoutProfissionaisInput
    connect?: enderecosWhereUniqueInput
    update?: XOR<XOR<enderecosUpdateToOneWithWhereWithoutProfissionaisInput, enderecosUpdateWithoutProfissionaisInput>, enderecosUncheckedUpdateWithoutProfissionaisInput>
  }

  export type usuariosUpdateOneRequiredWithoutProfissionaisNestedInput = {
    create?: XOR<usuariosCreateWithoutProfissionaisInput, usuariosUncheckedCreateWithoutProfissionaisInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutProfissionaisInput
    upsert?: usuariosUpsertWithoutProfissionaisInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutProfissionaisInput, usuariosUpdateWithoutProfissionaisInput>, usuariosUncheckedUpdateWithoutProfissionaisInput>
  }

  export type profissional_especialidadesUpdateManyWithoutProfissionaisNestedInput = {
    create?: XOR<profissional_especialidadesCreateWithoutProfissionaisInput, profissional_especialidadesUncheckedCreateWithoutProfissionaisInput> | profissional_especialidadesCreateWithoutProfissionaisInput[] | profissional_especialidadesUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: profissional_especialidadesCreateOrConnectWithoutProfissionaisInput | profissional_especialidadesCreateOrConnectWithoutProfissionaisInput[]
    upsert?: profissional_especialidadesUpsertWithWhereUniqueWithoutProfissionaisInput | profissional_especialidadesUpsertWithWhereUniqueWithoutProfissionaisInput[]
    createMany?: profissional_especialidadesCreateManyProfissionaisInputEnvelope
    set?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
    disconnect?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
    delete?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
    connect?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
    update?: profissional_especialidadesUpdateWithWhereUniqueWithoutProfissionaisInput | profissional_especialidadesUpdateWithWhereUniqueWithoutProfissionaisInput[]
    updateMany?: profissional_especialidadesUpdateManyWithWhereWithoutProfissionaisInput | profissional_especialidadesUpdateManyWithWhereWithoutProfissionaisInput[]
    deleteMany?: profissional_especialidadesScalarWhereInput | profissional_especialidadesScalarWhereInput[]
  }

  export type profissional_formacoesUpdateManyWithoutProfissionaisNestedInput = {
    create?: XOR<profissional_formacoesCreateWithoutProfissionaisInput, profissional_formacoesUncheckedCreateWithoutProfissionaisInput> | profissional_formacoesCreateWithoutProfissionaisInput[] | profissional_formacoesUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: profissional_formacoesCreateOrConnectWithoutProfissionaisInput | profissional_formacoesCreateOrConnectWithoutProfissionaisInput[]
    upsert?: profissional_formacoesUpsertWithWhereUniqueWithoutProfissionaisInput | profissional_formacoesUpsertWithWhereUniqueWithoutProfissionaisInput[]
    createMany?: profissional_formacoesCreateManyProfissionaisInputEnvelope
    set?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
    disconnect?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
    delete?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
    connect?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
    update?: profissional_formacoesUpdateWithWhereUniqueWithoutProfissionaisInput | profissional_formacoesUpdateWithWhereUniqueWithoutProfissionaisInput[]
    updateMany?: profissional_formacoesUpdateManyWithWhereWithoutProfissionaisInput | profissional_formacoesUpdateManyWithWhereWithoutProfissionaisInput[]
    deleteMany?: profissional_formacoesScalarWhereInput | profissional_formacoesScalarWhereInput[]
  }

  export type profissional_idiomasUpdateManyWithoutProfissionaisNestedInput = {
    create?: XOR<profissional_idiomasCreateWithoutProfissionaisInput, profissional_idiomasUncheckedCreateWithoutProfissionaisInput> | profissional_idiomasCreateWithoutProfissionaisInput[] | profissional_idiomasUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: profissional_idiomasCreateOrConnectWithoutProfissionaisInput | profissional_idiomasCreateOrConnectWithoutProfissionaisInput[]
    upsert?: profissional_idiomasUpsertWithWhereUniqueWithoutProfissionaisInput | profissional_idiomasUpsertWithWhereUniqueWithoutProfissionaisInput[]
    createMany?: profissional_idiomasCreateManyProfissionaisInputEnvelope
    set?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
    disconnect?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
    delete?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
    connect?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
    update?: profissional_idiomasUpdateWithWhereUniqueWithoutProfissionaisInput | profissional_idiomasUpdateWithWhereUniqueWithoutProfissionaisInput[]
    updateMany?: profissional_idiomasUpdateManyWithWhereWithoutProfissionaisInput | profissional_idiomasUpdateManyWithWhereWithoutProfissionaisInput[]
    deleteMany?: profissional_idiomasScalarWhereInput | profissional_idiomasScalarWhereInput[]
  }

  export type profissional_tagsUpdateManyWithoutProfissionaisNestedInput = {
    create?: XOR<profissional_tagsCreateWithoutProfissionaisInput, profissional_tagsUncheckedCreateWithoutProfissionaisInput> | profissional_tagsCreateWithoutProfissionaisInput[] | profissional_tagsUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: profissional_tagsCreateOrConnectWithoutProfissionaisInput | profissional_tagsCreateOrConnectWithoutProfissionaisInput[]
    upsert?: profissional_tagsUpsertWithWhereUniqueWithoutProfissionaisInput | profissional_tagsUpsertWithWhereUniqueWithoutProfissionaisInput[]
    createMany?: profissional_tagsCreateManyProfissionaisInputEnvelope
    set?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
    disconnect?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
    delete?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
    connect?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
    update?: profissional_tagsUpdateWithWhereUniqueWithoutProfissionaisInput | profissional_tagsUpdateWithWhereUniqueWithoutProfissionaisInput[]
    updateMany?: profissional_tagsUpdateManyWithWhereWithoutProfissionaisInput | profissional_tagsUpdateManyWithWhereWithoutProfissionaisInput[]
    deleteMany?: profissional_tagsScalarWhereInput | profissional_tagsScalarWhereInput[]
  }

  export type agendamentosUncheckedUpdateManyWithoutProfissionaisNestedInput = {
    create?: XOR<agendamentosCreateWithoutProfissionaisInput, agendamentosUncheckedCreateWithoutProfissionaisInput> | agendamentosCreateWithoutProfissionaisInput[] | agendamentosUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: agendamentosCreateOrConnectWithoutProfissionaisInput | agendamentosCreateOrConnectWithoutProfissionaisInput[]
    upsert?: agendamentosUpsertWithWhereUniqueWithoutProfissionaisInput | agendamentosUpsertWithWhereUniqueWithoutProfissionaisInput[]
    createMany?: agendamentosCreateManyProfissionaisInputEnvelope
    set?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    disconnect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    delete?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    connect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    update?: agendamentosUpdateWithWhereUniqueWithoutProfissionaisInput | agendamentosUpdateWithWhereUniqueWithoutProfissionaisInput[]
    updateMany?: agendamentosUpdateManyWithWhereWithoutProfissionaisInput | agendamentosUpdateManyWithWhereWithoutProfissionaisInput[]
    deleteMany?: agendamentosScalarWhereInput | agendamentosScalarWhereInput[]
  }

  export type horarios_trabalhoUncheckedUpdateManyWithoutProfissionaisNestedInput = {
    create?: XOR<horarios_trabalhoCreateWithoutProfissionaisInput, horarios_trabalhoUncheckedCreateWithoutProfissionaisInput> | horarios_trabalhoCreateWithoutProfissionaisInput[] | horarios_trabalhoUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: horarios_trabalhoCreateOrConnectWithoutProfissionaisInput | horarios_trabalhoCreateOrConnectWithoutProfissionaisInput[]
    upsert?: horarios_trabalhoUpsertWithWhereUniqueWithoutProfissionaisInput | horarios_trabalhoUpsertWithWhereUniqueWithoutProfissionaisInput[]
    createMany?: horarios_trabalhoCreateManyProfissionaisInputEnvelope
    set?: horarios_trabalhoWhereUniqueInput | horarios_trabalhoWhereUniqueInput[]
    disconnect?: horarios_trabalhoWhereUniqueInput | horarios_trabalhoWhereUniqueInput[]
    delete?: horarios_trabalhoWhereUniqueInput | horarios_trabalhoWhereUniqueInput[]
    connect?: horarios_trabalhoWhereUniqueInput | horarios_trabalhoWhereUniqueInput[]
    update?: horarios_trabalhoUpdateWithWhereUniqueWithoutProfissionaisInput | horarios_trabalhoUpdateWithWhereUniqueWithoutProfissionaisInput[]
    updateMany?: horarios_trabalhoUpdateManyWithWhereWithoutProfissionaisInput | horarios_trabalhoUpdateManyWithWhereWithoutProfissionaisInput[]
    deleteMany?: horarios_trabalhoScalarWhereInput | horarios_trabalhoScalarWhereInput[]
  }

  export type profissional_especialidadesUncheckedUpdateManyWithoutProfissionaisNestedInput = {
    create?: XOR<profissional_especialidadesCreateWithoutProfissionaisInput, profissional_especialidadesUncheckedCreateWithoutProfissionaisInput> | profissional_especialidadesCreateWithoutProfissionaisInput[] | profissional_especialidadesUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: profissional_especialidadesCreateOrConnectWithoutProfissionaisInput | profissional_especialidadesCreateOrConnectWithoutProfissionaisInput[]
    upsert?: profissional_especialidadesUpsertWithWhereUniqueWithoutProfissionaisInput | profissional_especialidadesUpsertWithWhereUniqueWithoutProfissionaisInput[]
    createMany?: profissional_especialidadesCreateManyProfissionaisInputEnvelope
    set?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
    disconnect?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
    delete?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
    connect?: profissional_especialidadesWhereUniqueInput | profissional_especialidadesWhereUniqueInput[]
    update?: profissional_especialidadesUpdateWithWhereUniqueWithoutProfissionaisInput | profissional_especialidadesUpdateWithWhereUniqueWithoutProfissionaisInput[]
    updateMany?: profissional_especialidadesUpdateManyWithWhereWithoutProfissionaisInput | profissional_especialidadesUpdateManyWithWhereWithoutProfissionaisInput[]
    deleteMany?: profissional_especialidadesScalarWhereInput | profissional_especialidadesScalarWhereInput[]
  }

  export type profissional_formacoesUncheckedUpdateManyWithoutProfissionaisNestedInput = {
    create?: XOR<profissional_formacoesCreateWithoutProfissionaisInput, profissional_formacoesUncheckedCreateWithoutProfissionaisInput> | profissional_formacoesCreateWithoutProfissionaisInput[] | profissional_formacoesUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: profissional_formacoesCreateOrConnectWithoutProfissionaisInput | profissional_formacoesCreateOrConnectWithoutProfissionaisInput[]
    upsert?: profissional_formacoesUpsertWithWhereUniqueWithoutProfissionaisInput | profissional_formacoesUpsertWithWhereUniqueWithoutProfissionaisInput[]
    createMany?: profissional_formacoesCreateManyProfissionaisInputEnvelope
    set?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
    disconnect?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
    delete?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
    connect?: profissional_formacoesWhereUniqueInput | profissional_formacoesWhereUniqueInput[]
    update?: profissional_formacoesUpdateWithWhereUniqueWithoutProfissionaisInput | profissional_formacoesUpdateWithWhereUniqueWithoutProfissionaisInput[]
    updateMany?: profissional_formacoesUpdateManyWithWhereWithoutProfissionaisInput | profissional_formacoesUpdateManyWithWhereWithoutProfissionaisInput[]
    deleteMany?: profissional_formacoesScalarWhereInput | profissional_formacoesScalarWhereInput[]
  }

  export type profissional_idiomasUncheckedUpdateManyWithoutProfissionaisNestedInput = {
    create?: XOR<profissional_idiomasCreateWithoutProfissionaisInput, profissional_idiomasUncheckedCreateWithoutProfissionaisInput> | profissional_idiomasCreateWithoutProfissionaisInput[] | profissional_idiomasUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: profissional_idiomasCreateOrConnectWithoutProfissionaisInput | profissional_idiomasCreateOrConnectWithoutProfissionaisInput[]
    upsert?: profissional_idiomasUpsertWithWhereUniqueWithoutProfissionaisInput | profissional_idiomasUpsertWithWhereUniqueWithoutProfissionaisInput[]
    createMany?: profissional_idiomasCreateManyProfissionaisInputEnvelope
    set?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
    disconnect?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
    delete?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
    connect?: profissional_idiomasWhereUniqueInput | profissional_idiomasWhereUniqueInput[]
    update?: profissional_idiomasUpdateWithWhereUniqueWithoutProfissionaisInput | profissional_idiomasUpdateWithWhereUniqueWithoutProfissionaisInput[]
    updateMany?: profissional_idiomasUpdateManyWithWhereWithoutProfissionaisInput | profissional_idiomasUpdateManyWithWhereWithoutProfissionaisInput[]
    deleteMany?: profissional_idiomasScalarWhereInput | profissional_idiomasScalarWhereInput[]
  }

  export type profissional_tagsUncheckedUpdateManyWithoutProfissionaisNestedInput = {
    create?: XOR<profissional_tagsCreateWithoutProfissionaisInput, profissional_tagsUncheckedCreateWithoutProfissionaisInput> | profissional_tagsCreateWithoutProfissionaisInput[] | profissional_tagsUncheckedCreateWithoutProfissionaisInput[]
    connectOrCreate?: profissional_tagsCreateOrConnectWithoutProfissionaisInput | profissional_tagsCreateOrConnectWithoutProfissionaisInput[]
    upsert?: profissional_tagsUpsertWithWhereUniqueWithoutProfissionaisInput | profissional_tagsUpsertWithWhereUniqueWithoutProfissionaisInput[]
    createMany?: profissional_tagsCreateManyProfissionaisInputEnvelope
    set?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
    disconnect?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
    delete?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
    connect?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
    update?: profissional_tagsUpdateWithWhereUniqueWithoutProfissionaisInput | profissional_tagsUpdateWithWhereUniqueWithoutProfissionaisInput[]
    updateMany?: profissional_tagsUpdateManyWithWhereWithoutProfissionaisInput | profissional_tagsUpdateManyWithWhereWithoutProfissionaisInput[]
    deleteMany?: profissional_tagsScalarWhereInput | profissional_tagsScalarWhereInput[]
  }

  export type especialidadesCreateNestedOneWithoutProfissional_especialidadesInput = {
    create?: XOR<especialidadesCreateWithoutProfissional_especialidadesInput, especialidadesUncheckedCreateWithoutProfissional_especialidadesInput>
    connectOrCreate?: especialidadesCreateOrConnectWithoutProfissional_especialidadesInput
    connect?: especialidadesWhereUniqueInput
  }

  export type profissionaisCreateNestedOneWithoutProfissional_especialidadesInput = {
    create?: XOR<profissionaisCreateWithoutProfissional_especialidadesInput, profissionaisUncheckedCreateWithoutProfissional_especialidadesInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutProfissional_especialidadesInput
    connect?: profissionaisWhereUniqueInput
  }

  export type especialidadesUpdateOneRequiredWithoutProfissional_especialidadesNestedInput = {
    create?: XOR<especialidadesCreateWithoutProfissional_especialidadesInput, especialidadesUncheckedCreateWithoutProfissional_especialidadesInput>
    connectOrCreate?: especialidadesCreateOrConnectWithoutProfissional_especialidadesInput
    upsert?: especialidadesUpsertWithoutProfissional_especialidadesInput
    connect?: especialidadesWhereUniqueInput
    update?: XOR<XOR<especialidadesUpdateToOneWithWhereWithoutProfissional_especialidadesInput, especialidadesUpdateWithoutProfissional_especialidadesInput>, especialidadesUncheckedUpdateWithoutProfissional_especialidadesInput>
  }

  export type profissionaisUpdateOneRequiredWithoutProfissional_especialidadesNestedInput = {
    create?: XOR<profissionaisCreateWithoutProfissional_especialidadesInput, profissionaisUncheckedCreateWithoutProfissional_especialidadesInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutProfissional_especialidadesInput
    upsert?: profissionaisUpsertWithoutProfissional_especialidadesInput
    connect?: profissionaisWhereUniqueInput
    update?: XOR<XOR<profissionaisUpdateToOneWithWhereWithoutProfissional_especialidadesInput, profissionaisUpdateWithoutProfissional_especialidadesInput>, profissionaisUncheckedUpdateWithoutProfissional_especialidadesInput>
  }

  export type formacoesCreateNestedOneWithoutProfissional_formacoesInput = {
    create?: XOR<formacoesCreateWithoutProfissional_formacoesInput, formacoesUncheckedCreateWithoutProfissional_formacoesInput>
    connectOrCreate?: formacoesCreateOrConnectWithoutProfissional_formacoesInput
    connect?: formacoesWhereUniqueInput
  }

  export type profissionaisCreateNestedOneWithoutProfissional_formacoesInput = {
    create?: XOR<profissionaisCreateWithoutProfissional_formacoesInput, profissionaisUncheckedCreateWithoutProfissional_formacoesInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutProfissional_formacoesInput
    connect?: profissionaisWhereUniqueInput
  }

  export type formacoesUpdateOneRequiredWithoutProfissional_formacoesNestedInput = {
    create?: XOR<formacoesCreateWithoutProfissional_formacoesInput, formacoesUncheckedCreateWithoutProfissional_formacoesInput>
    connectOrCreate?: formacoesCreateOrConnectWithoutProfissional_formacoesInput
    upsert?: formacoesUpsertWithoutProfissional_formacoesInput
    connect?: formacoesWhereUniqueInput
    update?: XOR<XOR<formacoesUpdateToOneWithWhereWithoutProfissional_formacoesInput, formacoesUpdateWithoutProfissional_formacoesInput>, formacoesUncheckedUpdateWithoutProfissional_formacoesInput>
  }

  export type profissionaisUpdateOneRequiredWithoutProfissional_formacoesNestedInput = {
    create?: XOR<profissionaisCreateWithoutProfissional_formacoesInput, profissionaisUncheckedCreateWithoutProfissional_formacoesInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutProfissional_formacoesInput
    upsert?: profissionaisUpsertWithoutProfissional_formacoesInput
    connect?: profissionaisWhereUniqueInput
    update?: XOR<XOR<profissionaisUpdateToOneWithWhereWithoutProfissional_formacoesInput, profissionaisUpdateWithoutProfissional_formacoesInput>, profissionaisUncheckedUpdateWithoutProfissional_formacoesInput>
  }

  export type idiomasCreateNestedOneWithoutProfissional_idiomasInput = {
    create?: XOR<idiomasCreateWithoutProfissional_idiomasInput, idiomasUncheckedCreateWithoutProfissional_idiomasInput>
    connectOrCreate?: idiomasCreateOrConnectWithoutProfissional_idiomasInput
    connect?: idiomasWhereUniqueInput
  }

  export type profissionaisCreateNestedOneWithoutProfissional_idiomasInput = {
    create?: XOR<profissionaisCreateWithoutProfissional_idiomasInput, profissionaisUncheckedCreateWithoutProfissional_idiomasInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutProfissional_idiomasInput
    connect?: profissionaisWhereUniqueInput
  }

  export type idiomasUpdateOneRequiredWithoutProfissional_idiomasNestedInput = {
    create?: XOR<idiomasCreateWithoutProfissional_idiomasInput, idiomasUncheckedCreateWithoutProfissional_idiomasInput>
    connectOrCreate?: idiomasCreateOrConnectWithoutProfissional_idiomasInput
    upsert?: idiomasUpsertWithoutProfissional_idiomasInput
    connect?: idiomasWhereUniqueInput
    update?: XOR<XOR<idiomasUpdateToOneWithWhereWithoutProfissional_idiomasInput, idiomasUpdateWithoutProfissional_idiomasInput>, idiomasUncheckedUpdateWithoutProfissional_idiomasInput>
  }

  export type profissionaisUpdateOneRequiredWithoutProfissional_idiomasNestedInput = {
    create?: XOR<profissionaisCreateWithoutProfissional_idiomasInput, profissionaisUncheckedCreateWithoutProfissional_idiomasInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutProfissional_idiomasInput
    upsert?: profissionaisUpsertWithoutProfissional_idiomasInput
    connect?: profissionaisWhereUniqueInput
    update?: XOR<XOR<profissionaisUpdateToOneWithWhereWithoutProfissional_idiomasInput, profissionaisUpdateWithoutProfissional_idiomasInput>, profissionaisUncheckedUpdateWithoutProfissional_idiomasInput>
  }

  export type profissionaisCreateNestedOneWithoutProfissional_tagsInput = {
    create?: XOR<profissionaisCreateWithoutProfissional_tagsInput, profissionaisUncheckedCreateWithoutProfissional_tagsInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutProfissional_tagsInput
    connect?: profissionaisWhereUniqueInput
  }

  export type tagsCreateNestedOneWithoutProfissional_tagsInput = {
    create?: XOR<tagsCreateWithoutProfissional_tagsInput, tagsUncheckedCreateWithoutProfissional_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutProfissional_tagsInput
    connect?: tagsWhereUniqueInput
  }

  export type profissionaisUpdateOneRequiredWithoutProfissional_tagsNestedInput = {
    create?: XOR<profissionaisCreateWithoutProfissional_tagsInput, profissionaisUncheckedCreateWithoutProfissional_tagsInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutProfissional_tagsInput
    upsert?: profissionaisUpsertWithoutProfissional_tagsInput
    connect?: profissionaisWhereUniqueInput
    update?: XOR<XOR<profissionaisUpdateToOneWithWhereWithoutProfissional_tagsInput, profissionaisUpdateWithoutProfissional_tagsInput>, profissionaisUncheckedUpdateWithoutProfissional_tagsInput>
  }

  export type tagsUpdateOneRequiredWithoutProfissional_tagsNestedInput = {
    create?: XOR<tagsCreateWithoutProfissional_tagsInput, tagsUncheckedCreateWithoutProfissional_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutProfissional_tagsInput
    upsert?: tagsUpsertWithoutProfissional_tagsInput
    connect?: tagsWhereUniqueInput
    update?: XOR<XOR<tagsUpdateToOneWithWhereWithoutProfissional_tagsInput, tagsUpdateWithoutProfissional_tagsInput>, tagsUncheckedUpdateWithoutProfissional_tagsInput>
  }

  export type profissional_tagsCreateNestedManyWithoutTagsInput = {
    create?: XOR<profissional_tagsCreateWithoutTagsInput, profissional_tagsUncheckedCreateWithoutTagsInput> | profissional_tagsCreateWithoutTagsInput[] | profissional_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: profissional_tagsCreateOrConnectWithoutTagsInput | profissional_tagsCreateOrConnectWithoutTagsInput[]
    createMany?: profissional_tagsCreateManyTagsInputEnvelope
    connect?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
  }

  export type profissional_tagsUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<profissional_tagsCreateWithoutTagsInput, profissional_tagsUncheckedCreateWithoutTagsInput> | profissional_tagsCreateWithoutTagsInput[] | profissional_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: profissional_tagsCreateOrConnectWithoutTagsInput | profissional_tagsCreateOrConnectWithoutTagsInput[]
    createMany?: profissional_tagsCreateManyTagsInputEnvelope
    connect?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
  }

  export type profissional_tagsUpdateManyWithoutTagsNestedInput = {
    create?: XOR<profissional_tagsCreateWithoutTagsInput, profissional_tagsUncheckedCreateWithoutTagsInput> | profissional_tagsCreateWithoutTagsInput[] | profissional_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: profissional_tagsCreateOrConnectWithoutTagsInput | profissional_tagsCreateOrConnectWithoutTagsInput[]
    upsert?: profissional_tagsUpsertWithWhereUniqueWithoutTagsInput | profissional_tagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: profissional_tagsCreateManyTagsInputEnvelope
    set?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
    disconnect?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
    delete?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
    connect?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
    update?: profissional_tagsUpdateWithWhereUniqueWithoutTagsInput | profissional_tagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: profissional_tagsUpdateManyWithWhereWithoutTagsInput | profissional_tagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: profissional_tagsScalarWhereInput | profissional_tagsScalarWhereInput[]
  }

  export type profissional_tagsUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<profissional_tagsCreateWithoutTagsInput, profissional_tagsUncheckedCreateWithoutTagsInput> | profissional_tagsCreateWithoutTagsInput[] | profissional_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: profissional_tagsCreateOrConnectWithoutTagsInput | profissional_tagsCreateOrConnectWithoutTagsInput[]
    upsert?: profissional_tagsUpsertWithWhereUniqueWithoutTagsInput | profissional_tagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: profissional_tagsCreateManyTagsInputEnvelope
    set?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
    disconnect?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
    delete?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
    connect?: profissional_tagsWhereUniqueInput | profissional_tagsWhereUniqueInput[]
    update?: profissional_tagsUpdateWithWhereUniqueWithoutTagsInput | profissional_tagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: profissional_tagsUpdateManyWithWhereWithoutTagsInput | profissional_tagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: profissional_tagsScalarWhereInput | profissional_tagsScalarWhereInput[]
  }

  export type usuariosCreateNestedOneWithoutTelefonesInput = {
    create?: XOR<usuariosCreateWithoutTelefonesInput, usuariosUncheckedCreateWithoutTelefonesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutTelefonesInput
    connect?: usuariosWhereUniqueInput
  }

  export type Enumtelefones_tipoFieldUpdateOperationsInput = {
    set?: $Enums.telefones_tipo
  }

  export type usuariosUpdateOneRequiredWithoutTelefonesNestedInput = {
    create?: XOR<usuariosCreateWithoutTelefonesInput, usuariosUncheckedCreateWithoutTelefonesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutTelefonesInput
    upsert?: usuariosUpsertWithoutTelefonesInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutTelefonesInput, usuariosUpdateWithoutTelefonesInput>, usuariosUncheckedUpdateWithoutTelefonesInput>
  }

  export type pacientesCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput> | pacientesCreateWithoutUsuariosInput[] | pacientesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutUsuariosInput | pacientesCreateOrConnectWithoutUsuariosInput[]
    createMany?: pacientesCreateManyUsuariosInputEnvelope
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
  }

  export type profissionaisCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<profissionaisCreateWithoutUsuariosInput, profissionaisUncheckedCreateWithoutUsuariosInput> | profissionaisCreateWithoutUsuariosInput[] | profissionaisUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: profissionaisCreateOrConnectWithoutUsuariosInput | profissionaisCreateOrConnectWithoutUsuariosInput[]
    createMany?: profissionaisCreateManyUsuariosInputEnvelope
    connect?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
  }

  export type telefonesCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<telefonesCreateWithoutUsuariosInput, telefonesUncheckedCreateWithoutUsuariosInput> | telefonesCreateWithoutUsuariosInput[] | telefonesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: telefonesCreateOrConnectWithoutUsuariosInput | telefonesCreateOrConnectWithoutUsuariosInput[]
    createMany?: telefonesCreateManyUsuariosInputEnvelope
    connect?: telefonesWhereUniqueInput | telefonesWhereUniqueInput[]
  }

  export type pacientesUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput> | pacientesCreateWithoutUsuariosInput[] | pacientesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutUsuariosInput | pacientesCreateOrConnectWithoutUsuariosInput[]
    createMany?: pacientesCreateManyUsuariosInputEnvelope
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
  }

  export type profissionaisUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<profissionaisCreateWithoutUsuariosInput, profissionaisUncheckedCreateWithoutUsuariosInput> | profissionaisCreateWithoutUsuariosInput[] | profissionaisUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: profissionaisCreateOrConnectWithoutUsuariosInput | profissionaisCreateOrConnectWithoutUsuariosInput[]
    createMany?: profissionaisCreateManyUsuariosInputEnvelope
    connect?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
  }

  export type telefonesUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<telefonesCreateWithoutUsuariosInput, telefonesUncheckedCreateWithoutUsuariosInput> | telefonesCreateWithoutUsuariosInput[] | telefonesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: telefonesCreateOrConnectWithoutUsuariosInput | telefonesCreateOrConnectWithoutUsuariosInput[]
    createMany?: telefonesCreateManyUsuariosInputEnvelope
    connect?: telefonesWhereUniqueInput | telefonesWhereUniqueInput[]
  }

  export type pacientesUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput> | pacientesCreateWithoutUsuariosInput[] | pacientesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutUsuariosInput | pacientesCreateOrConnectWithoutUsuariosInput[]
    upsert?: pacientesUpsertWithWhereUniqueWithoutUsuariosInput | pacientesUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: pacientesCreateManyUsuariosInputEnvelope
    set?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    disconnect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    delete?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    update?: pacientesUpdateWithWhereUniqueWithoutUsuariosInput | pacientesUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: pacientesUpdateManyWithWhereWithoutUsuariosInput | pacientesUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: pacientesScalarWhereInput | pacientesScalarWhereInput[]
  }

  export type profissionaisUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<profissionaisCreateWithoutUsuariosInput, profissionaisUncheckedCreateWithoutUsuariosInput> | profissionaisCreateWithoutUsuariosInput[] | profissionaisUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: profissionaisCreateOrConnectWithoutUsuariosInput | profissionaisCreateOrConnectWithoutUsuariosInput[]
    upsert?: profissionaisUpsertWithWhereUniqueWithoutUsuariosInput | profissionaisUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: profissionaisCreateManyUsuariosInputEnvelope
    set?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
    disconnect?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
    delete?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
    connect?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
    update?: profissionaisUpdateWithWhereUniqueWithoutUsuariosInput | profissionaisUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: profissionaisUpdateManyWithWhereWithoutUsuariosInput | profissionaisUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: profissionaisScalarWhereInput | profissionaisScalarWhereInput[]
  }

  export type telefonesUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<telefonesCreateWithoutUsuariosInput, telefonesUncheckedCreateWithoutUsuariosInput> | telefonesCreateWithoutUsuariosInput[] | telefonesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: telefonesCreateOrConnectWithoutUsuariosInput | telefonesCreateOrConnectWithoutUsuariosInput[]
    upsert?: telefonesUpsertWithWhereUniqueWithoutUsuariosInput | telefonesUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: telefonesCreateManyUsuariosInputEnvelope
    set?: telefonesWhereUniqueInput | telefonesWhereUniqueInput[]
    disconnect?: telefonesWhereUniqueInput | telefonesWhereUniqueInput[]
    delete?: telefonesWhereUniqueInput | telefonesWhereUniqueInput[]
    connect?: telefonesWhereUniqueInput | telefonesWhereUniqueInput[]
    update?: telefonesUpdateWithWhereUniqueWithoutUsuariosInput | telefonesUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: telefonesUpdateManyWithWhereWithoutUsuariosInput | telefonesUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: telefonesScalarWhereInput | telefonesScalarWhereInput[]
  }

  export type pacientesUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput> | pacientesCreateWithoutUsuariosInput[] | pacientesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutUsuariosInput | pacientesCreateOrConnectWithoutUsuariosInput[]
    upsert?: pacientesUpsertWithWhereUniqueWithoutUsuariosInput | pacientesUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: pacientesCreateManyUsuariosInputEnvelope
    set?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    disconnect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    delete?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    update?: pacientesUpdateWithWhereUniqueWithoutUsuariosInput | pacientesUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: pacientesUpdateManyWithWhereWithoutUsuariosInput | pacientesUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: pacientesScalarWhereInput | pacientesScalarWhereInput[]
  }

  export type profissionaisUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<profissionaisCreateWithoutUsuariosInput, profissionaisUncheckedCreateWithoutUsuariosInput> | profissionaisCreateWithoutUsuariosInput[] | profissionaisUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: profissionaisCreateOrConnectWithoutUsuariosInput | profissionaisCreateOrConnectWithoutUsuariosInput[]
    upsert?: profissionaisUpsertWithWhereUniqueWithoutUsuariosInput | profissionaisUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: profissionaisCreateManyUsuariosInputEnvelope
    set?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
    disconnect?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
    delete?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
    connect?: profissionaisWhereUniqueInput | profissionaisWhereUniqueInput[]
    update?: profissionaisUpdateWithWhereUniqueWithoutUsuariosInput | profissionaisUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: profissionaisUpdateManyWithWhereWithoutUsuariosInput | profissionaisUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: profissionaisScalarWhereInput | profissionaisScalarWhereInput[]
  }

  export type telefonesUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<telefonesCreateWithoutUsuariosInput, telefonesUncheckedCreateWithoutUsuariosInput> | telefonesCreateWithoutUsuariosInput[] | telefonesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: telefonesCreateOrConnectWithoutUsuariosInput | telefonesCreateOrConnectWithoutUsuariosInput[]
    upsert?: telefonesUpsertWithWhereUniqueWithoutUsuariosInput | telefonesUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: telefonesCreateManyUsuariosInputEnvelope
    set?: telefonesWhereUniqueInput | telefonesWhereUniqueInput[]
    disconnect?: telefonesWhereUniqueInput | telefonesWhereUniqueInput[]
    delete?: telefonesWhereUniqueInput | telefonesWhereUniqueInput[]
    connect?: telefonesWhereUniqueInput | telefonesWhereUniqueInput[]
    update?: telefonesUpdateWithWhereUniqueWithoutUsuariosInput | telefonesUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: telefonesUpdateManyWithWhereWithoutUsuariosInput | telefonesUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: telefonesScalarWhereInput | telefonesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumagendamentos_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.agendamentos_status | Enumagendamentos_statusFieldRefInput<$PrismaModel>
    in?: $Enums.agendamentos_status[]
    notIn?: $Enums.agendamentos_status[]
    not?: NestedEnumagendamentos_statusFilter<$PrismaModel> | $Enums.agendamentos_status
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumagendamentos_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.agendamentos_status | Enumagendamentos_statusFieldRefInput<$PrismaModel>
    in?: $Enums.agendamentos_status[]
    notIn?: $Enums.agendamentos_status[]
    not?: NestedEnumagendamentos_statusWithAggregatesFilter<$PrismaModel> | $Enums.agendamentos_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumagendamentos_statusFilter<$PrismaModel>
    _max?: NestedEnumagendamentos_statusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumpacientes_nivel_teaFilter<$PrismaModel = never> = {
    equals?: $Enums.pacientes_nivel_tea | Enumpacientes_nivel_teaFieldRefInput<$PrismaModel>
    in?: $Enums.pacientes_nivel_tea[]
    notIn?: $Enums.pacientes_nivel_tea[]
    not?: NestedEnumpacientes_nivel_teaFilter<$PrismaModel> | $Enums.pacientes_nivel_tea
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumpacientes_nivel_teaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pacientes_nivel_tea | Enumpacientes_nivel_teaFieldRefInput<$PrismaModel>
    in?: $Enums.pacientes_nivel_tea[]
    notIn?: $Enums.pacientes_nivel_tea[]
    not?: NestedEnumpacientes_nivel_teaWithAggregatesFilter<$PrismaModel> | $Enums.pacientes_nivel_tea
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpacientes_nivel_teaFilter<$PrismaModel>
    _max?: NestedEnumpacientes_nivel_teaFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumprofissionais_tipo_registroFilter<$PrismaModel = never> = {
    equals?: $Enums.profissionais_tipo_registro | Enumprofissionais_tipo_registroFieldRefInput<$PrismaModel>
    in?: $Enums.profissionais_tipo_registro[]
    notIn?: $Enums.profissionais_tipo_registro[]
    not?: NestedEnumprofissionais_tipo_registroFilter<$PrismaModel> | $Enums.profissionais_tipo_registro
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumprofissionais_tipo_registroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.profissionais_tipo_registro | Enumprofissionais_tipo_registroFieldRefInput<$PrismaModel>
    in?: $Enums.profissionais_tipo_registro[]
    notIn?: $Enums.profissionais_tipo_registro[]
    not?: NestedEnumprofissionais_tipo_registroWithAggregatesFilter<$PrismaModel> | $Enums.profissionais_tipo_registro
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumprofissionais_tipo_registroFilter<$PrismaModel>
    _max?: NestedEnumprofissionais_tipo_registroFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumtelefones_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.telefones_tipo | Enumtelefones_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.telefones_tipo[]
    notIn?: $Enums.telefones_tipo[]
    not?: NestedEnumtelefones_tipoFilter<$PrismaModel> | $Enums.telefones_tipo
  }

  export type NestedEnumtelefones_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.telefones_tipo | Enumtelefones_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.telefones_tipo[]
    notIn?: $Enums.telefones_tipo[]
    not?: NestedEnumtelefones_tipoWithAggregatesFilter<$PrismaModel> | $Enums.telefones_tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtelefones_tipoFilter<$PrismaModel>
    _max?: NestedEnumtelefones_tipoFilter<$PrismaModel>
  }

  export type enderecosCreateWithoutAgendamentosInput = {
    estado: string
    cidade: string
    apelido_endereco?: string | null
    cep: string
    logradouro: string
    numero: string
    bairro: string
    complemento?: string | null
    pacientes?: pacientesCreateNestedManyWithoutEnderecosInput
    profissionais?: profissionaisCreateNestedManyWithoutEnderecosInput
  }

  export type enderecosUncheckedCreateWithoutAgendamentosInput = {
    id_endereco?: number
    estado: string
    cidade: string
    apelido_endereco?: string | null
    cep: string
    logradouro: string
    numero: string
    bairro: string
    complemento?: string | null
    pacientes?: pacientesUncheckedCreateNestedManyWithoutEnderecosInput
    profissionais?: profissionaisUncheckedCreateNestedManyWithoutEnderecosInput
  }

  export type enderecosCreateOrConnectWithoutAgendamentosInput = {
    where: enderecosWhereUniqueInput
    create: XOR<enderecosCreateWithoutAgendamentosInput, enderecosUncheckedCreateWithoutAgendamentosInput>
  }

  export type pacientesCreateWithoutAgendamentosInput = {
    nome_paciente: string
    cpf: string
    data_nascimento: Date | string
    nivel_tea: $Enums.pacientes_nivel_tea
    e_titular: boolean
    nome_titular?: string | null
    enderecos: enderecosCreateNestedOneWithoutPacientesInput
    usuarios: usuariosCreateNestedOneWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutAgendamentosInput = {
    id_paciente?: number
    usuarios_id_usuario: number
    enderecos_id_endereco: number
    nome_paciente: string
    cpf: string
    data_nascimento: Date | string
    nivel_tea: $Enums.pacientes_nivel_tea
    e_titular: boolean
    nome_titular?: string | null
  }

  export type pacientesCreateOrConnectWithoutAgendamentosInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutAgendamentosInput, pacientesUncheckedCreateWithoutAgendamentosInput>
  }

  export type profissionaisCreateWithoutAgendamentosInput = {
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
    horarios_trabalho?: horarios_trabalhoCreateNestedManyWithoutProfissionaisInput
    enderecos: enderecosCreateNestedOneWithoutProfissionaisInput
    usuarios: usuariosCreateNestedOneWithoutProfissionaisInput
    profissional_especialidades?: profissional_especialidadesCreateNestedManyWithoutProfissionaisInput
    profissional_formacoes?: profissional_formacoesCreateNestedManyWithoutProfissionaisInput
    profissional_idiomas?: profissional_idiomasCreateNestedManyWithoutProfissionaisInput
    profissional_tags?: profissional_tagsCreateNestedManyWithoutProfissionaisInput
  }

  export type profissionaisUncheckedCreateWithoutAgendamentosInput = {
    id_profissional?: number
    usuarios_id_usuario: number
    enderecos_id_endereco: number
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
    horarios_trabalho?: horarios_trabalhoUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_especialidades?: profissional_especialidadesUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_formacoes?: profissional_formacoesUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_idiomas?: profissional_idiomasUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_tags?: profissional_tagsUncheckedCreateNestedManyWithoutProfissionaisInput
  }

  export type profissionaisCreateOrConnectWithoutAgendamentosInput = {
    where: profissionaisWhereUniqueInput
    create: XOR<profissionaisCreateWithoutAgendamentosInput, profissionaisUncheckedCreateWithoutAgendamentosInput>
  }

  export type enderecosUpsertWithoutAgendamentosInput = {
    update: XOR<enderecosUpdateWithoutAgendamentosInput, enderecosUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<enderecosCreateWithoutAgendamentosInput, enderecosUncheckedCreateWithoutAgendamentosInput>
    where?: enderecosWhereInput
  }

  export type enderecosUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: enderecosWhereInput
    data: XOR<enderecosUpdateWithoutAgendamentosInput, enderecosUncheckedUpdateWithoutAgendamentosInput>
  }

  export type enderecosUpdateWithoutAgendamentosInput = {
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    apelido_endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    pacientes?: pacientesUpdateManyWithoutEnderecosNestedInput
    profissionais?: profissionaisUpdateManyWithoutEnderecosNestedInput
  }

  export type enderecosUncheckedUpdateWithoutAgendamentosInput = {
    id_endereco?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    apelido_endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    pacientes?: pacientesUncheckedUpdateManyWithoutEnderecosNestedInput
    profissionais?: profissionaisUncheckedUpdateManyWithoutEnderecosNestedInput
  }

  export type pacientesUpsertWithoutAgendamentosInput = {
    update: XOR<pacientesUpdateWithoutAgendamentosInput, pacientesUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<pacientesCreateWithoutAgendamentosInput, pacientesUncheckedCreateWithoutAgendamentosInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutAgendamentosInput, pacientesUncheckedUpdateWithoutAgendamentosInput>
  }

  export type pacientesUpdateWithoutAgendamentosInput = {
    nome_paciente?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_tea?: Enumpacientes_nivel_teaFieldUpdateOperationsInput | $Enums.pacientes_nivel_tea
    e_titular?: BoolFieldUpdateOperationsInput | boolean
    nome_titular?: NullableStringFieldUpdateOperationsInput | string | null
    enderecos?: enderecosUpdateOneRequiredWithoutPacientesNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutAgendamentosInput = {
    id_paciente?: IntFieldUpdateOperationsInput | number
    usuarios_id_usuario?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    nome_paciente?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_tea?: Enumpacientes_nivel_teaFieldUpdateOperationsInput | $Enums.pacientes_nivel_tea
    e_titular?: BoolFieldUpdateOperationsInput | boolean
    nome_titular?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profissionaisUpsertWithoutAgendamentosInput = {
    update: XOR<profissionaisUpdateWithoutAgendamentosInput, profissionaisUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<profissionaisCreateWithoutAgendamentosInput, profissionaisUncheckedCreateWithoutAgendamentosInput>
    where?: profissionaisWhereInput
  }

  export type profissionaisUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: profissionaisWhereInput
    data: XOR<profissionaisUpdateWithoutAgendamentosInput, profissionaisUncheckedUpdateWithoutAgendamentosInput>
  }

  export type profissionaisUpdateWithoutAgendamentosInput = {
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    horarios_trabalho?: horarios_trabalhoUpdateManyWithoutProfissionaisNestedInput
    enderecos?: enderecosUpdateOneRequiredWithoutProfissionaisNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutProfissionaisNestedInput
    profissional_especialidades?: profissional_especialidadesUpdateManyWithoutProfissionaisNestedInput
    profissional_formacoes?: profissional_formacoesUpdateManyWithoutProfissionaisNestedInput
    profissional_idiomas?: profissional_idiomasUpdateManyWithoutProfissionaisNestedInput
    profissional_tags?: profissional_tagsUpdateManyWithoutProfissionaisNestedInput
  }

  export type profissionaisUncheckedUpdateWithoutAgendamentosInput = {
    id_profissional?: IntFieldUpdateOperationsInput | number
    usuarios_id_usuario?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    horarios_trabalho?: horarios_trabalhoUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_especialidades?: profissional_especialidadesUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_formacoes?: profissional_formacoesUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_idiomas?: profissional_idiomasUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_tags?: profissional_tagsUncheckedUpdateManyWithoutProfissionaisNestedInput
  }

  export type agendamentosCreateWithoutEnderecosInput = {
    data_horario_inicio: Date | string
    duracao_consulta_minutos: number
    data_criacao?: Date | string
    status: $Enums.agendamentos_status
    nota_atendimento?: number | null
    avaliacao?: string | null
    pacientes: pacientesCreateNestedOneWithoutAgendamentosInput
    profissionais: profissionaisCreateNestedOneWithoutAgendamentosInput
  }

  export type agendamentosUncheckedCreateWithoutEnderecosInput = {
    id_agendamento?: number
    profissionais_id_profissional: number
    pacientes_id_paciente: number
    data_horario_inicio: Date | string
    duracao_consulta_minutos: number
    data_criacao?: Date | string
    status: $Enums.agendamentos_status
    nota_atendimento?: number | null
    avaliacao?: string | null
  }

  export type agendamentosCreateOrConnectWithoutEnderecosInput = {
    where: agendamentosWhereUniqueInput
    create: XOR<agendamentosCreateWithoutEnderecosInput, agendamentosUncheckedCreateWithoutEnderecosInput>
  }

  export type agendamentosCreateManyEnderecosInputEnvelope = {
    data: agendamentosCreateManyEnderecosInput | agendamentosCreateManyEnderecosInput[]
    skipDuplicates?: boolean
  }

  export type pacientesCreateWithoutEnderecosInput = {
    nome_paciente: string
    cpf: string
    data_nascimento: Date | string
    nivel_tea: $Enums.pacientes_nivel_tea
    e_titular: boolean
    nome_titular?: string | null
    agendamentos?: agendamentosCreateNestedManyWithoutPacientesInput
    usuarios: usuariosCreateNestedOneWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutEnderecosInput = {
    id_paciente?: number
    usuarios_id_usuario: number
    nome_paciente: string
    cpf: string
    data_nascimento: Date | string
    nivel_tea: $Enums.pacientes_nivel_tea
    e_titular: boolean
    nome_titular?: string | null
    agendamentos?: agendamentosUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutEnderecosInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutEnderecosInput, pacientesUncheckedCreateWithoutEnderecosInput>
  }

  export type pacientesCreateManyEnderecosInputEnvelope = {
    data: pacientesCreateManyEnderecosInput | pacientesCreateManyEnderecosInput[]
    skipDuplicates?: boolean
  }

  export type profissionaisCreateWithoutEnderecosInput = {
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
    agendamentos?: agendamentosCreateNestedManyWithoutProfissionaisInput
    horarios_trabalho?: horarios_trabalhoCreateNestedManyWithoutProfissionaisInput
    usuarios: usuariosCreateNestedOneWithoutProfissionaisInput
    profissional_especialidades?: profissional_especialidadesCreateNestedManyWithoutProfissionaisInput
    profissional_formacoes?: profissional_formacoesCreateNestedManyWithoutProfissionaisInput
    profissional_idiomas?: profissional_idiomasCreateNestedManyWithoutProfissionaisInput
    profissional_tags?: profissional_tagsCreateNestedManyWithoutProfissionaisInput
  }

  export type profissionaisUncheckedCreateWithoutEnderecosInput = {
    id_profissional?: number
    usuarios_id_usuario: number
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
    agendamentos?: agendamentosUncheckedCreateNestedManyWithoutProfissionaisInput
    horarios_trabalho?: horarios_trabalhoUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_especialidades?: profissional_especialidadesUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_formacoes?: profissional_formacoesUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_idiomas?: profissional_idiomasUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_tags?: profissional_tagsUncheckedCreateNestedManyWithoutProfissionaisInput
  }

  export type profissionaisCreateOrConnectWithoutEnderecosInput = {
    where: profissionaisWhereUniqueInput
    create: XOR<profissionaisCreateWithoutEnderecosInput, profissionaisUncheckedCreateWithoutEnderecosInput>
  }

  export type profissionaisCreateManyEnderecosInputEnvelope = {
    data: profissionaisCreateManyEnderecosInput | profissionaisCreateManyEnderecosInput[]
    skipDuplicates?: boolean
  }

  export type agendamentosUpsertWithWhereUniqueWithoutEnderecosInput = {
    where: agendamentosWhereUniqueInput
    update: XOR<agendamentosUpdateWithoutEnderecosInput, agendamentosUncheckedUpdateWithoutEnderecosInput>
    create: XOR<agendamentosCreateWithoutEnderecosInput, agendamentosUncheckedCreateWithoutEnderecosInput>
  }

  export type agendamentosUpdateWithWhereUniqueWithoutEnderecosInput = {
    where: agendamentosWhereUniqueInput
    data: XOR<agendamentosUpdateWithoutEnderecosInput, agendamentosUncheckedUpdateWithoutEnderecosInput>
  }

  export type agendamentosUpdateManyWithWhereWithoutEnderecosInput = {
    where: agendamentosScalarWhereInput
    data: XOR<agendamentosUpdateManyMutationInput, agendamentosUncheckedUpdateManyWithoutEnderecosInput>
  }

  export type agendamentosScalarWhereInput = {
    AND?: agendamentosScalarWhereInput | agendamentosScalarWhereInput[]
    OR?: agendamentosScalarWhereInput[]
    NOT?: agendamentosScalarWhereInput | agendamentosScalarWhereInput[]
    id_agendamento?: IntFilter<"agendamentos"> | number
    profissionais_id_profissional?: IntFilter<"agendamentos"> | number
    pacientes_id_paciente?: IntFilter<"agendamentos"> | number
    enderecos_id_endereco?: IntFilter<"agendamentos"> | number
    data_horario_inicio?: DateTimeFilter<"agendamentos"> | Date | string
    duracao_consulta_minutos?: IntFilter<"agendamentos"> | number
    data_criacao?: DateTimeFilter<"agendamentos"> | Date | string
    status?: Enumagendamentos_statusFilter<"agendamentos"> | $Enums.agendamentos_status
    nota_atendimento?: IntNullableFilter<"agendamentos"> | number | null
    avaliacao?: StringNullableFilter<"agendamentos"> | string | null
  }

  export type pacientesUpsertWithWhereUniqueWithoutEnderecosInput = {
    where: pacientesWhereUniqueInput
    update: XOR<pacientesUpdateWithoutEnderecosInput, pacientesUncheckedUpdateWithoutEnderecosInput>
    create: XOR<pacientesCreateWithoutEnderecosInput, pacientesUncheckedCreateWithoutEnderecosInput>
  }

  export type pacientesUpdateWithWhereUniqueWithoutEnderecosInput = {
    where: pacientesWhereUniqueInput
    data: XOR<pacientesUpdateWithoutEnderecosInput, pacientesUncheckedUpdateWithoutEnderecosInput>
  }

  export type pacientesUpdateManyWithWhereWithoutEnderecosInput = {
    where: pacientesScalarWhereInput
    data: XOR<pacientesUpdateManyMutationInput, pacientesUncheckedUpdateManyWithoutEnderecosInput>
  }

  export type pacientesScalarWhereInput = {
    AND?: pacientesScalarWhereInput | pacientesScalarWhereInput[]
    OR?: pacientesScalarWhereInput[]
    NOT?: pacientesScalarWhereInput | pacientesScalarWhereInput[]
    id_paciente?: IntFilter<"pacientes"> | number
    usuarios_id_usuario?: IntFilter<"pacientes"> | number
    enderecos_id_endereco?: IntFilter<"pacientes"> | number
    nome_paciente?: StringFilter<"pacientes"> | string
    cpf?: StringFilter<"pacientes"> | string
    data_nascimento?: DateTimeFilter<"pacientes"> | Date | string
    nivel_tea?: Enumpacientes_nivel_teaFilter<"pacientes"> | $Enums.pacientes_nivel_tea
    e_titular?: BoolFilter<"pacientes"> | boolean
    nome_titular?: StringNullableFilter<"pacientes"> | string | null
  }

  export type profissionaisUpsertWithWhereUniqueWithoutEnderecosInput = {
    where: profissionaisWhereUniqueInput
    update: XOR<profissionaisUpdateWithoutEnderecosInput, profissionaisUncheckedUpdateWithoutEnderecosInput>
    create: XOR<profissionaisCreateWithoutEnderecosInput, profissionaisUncheckedCreateWithoutEnderecosInput>
  }

  export type profissionaisUpdateWithWhereUniqueWithoutEnderecosInput = {
    where: profissionaisWhereUniqueInput
    data: XOR<profissionaisUpdateWithoutEnderecosInput, profissionaisUncheckedUpdateWithoutEnderecosInput>
  }

  export type profissionaisUpdateManyWithWhereWithoutEnderecosInput = {
    where: profissionaisScalarWhereInput
    data: XOR<profissionaisUpdateManyMutationInput, profissionaisUncheckedUpdateManyWithoutEnderecosInput>
  }

  export type profissionaisScalarWhereInput = {
    AND?: profissionaisScalarWhereInput | profissionaisScalarWhereInput[]
    OR?: profissionaisScalarWhereInput[]
    NOT?: profissionaisScalarWhereInput | profissionaisScalarWhereInput[]
    id_profissional?: IntFilter<"profissionais"> | number
    usuarios_id_usuario?: IntFilter<"profissionais"> | number
    enderecos_id_endereco?: IntFilter<"profissionais"> | number
    foto_perfil_url?: StringNullableFilter<"profissionais"> | string | null
    nome?: StringFilter<"profissionais"> | string
    cpf?: StringFilter<"profissionais"> | string
    tipo_registro?: Enumprofissionais_tipo_registroFilter<"profissionais"> | $Enums.profissionais_tipo_registro
    numero_registro?: StringFilter<"profissionais"> | string
    uf_registro?: StringFilter<"profissionais"> | string
    descricao?: StringNullableFilter<"profissionais"> | string | null
    valor_consulta?: DecimalNullableFilter<"profissionais"> | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: BoolNullableFilter<"profissionais"> | boolean | null
  }

  export type profissional_especialidadesCreateWithoutEspecialidadesInput = {
    profissionais: profissionaisCreateNestedOneWithoutProfissional_especialidadesInput
  }

  export type profissional_especialidadesUncheckedCreateWithoutEspecialidadesInput = {
    profissionais_id_profissional: number
  }

  export type profissional_especialidadesCreateOrConnectWithoutEspecialidadesInput = {
    where: profissional_especialidadesWhereUniqueInput
    create: XOR<profissional_especialidadesCreateWithoutEspecialidadesInput, profissional_especialidadesUncheckedCreateWithoutEspecialidadesInput>
  }

  export type profissional_especialidadesCreateManyEspecialidadesInputEnvelope = {
    data: profissional_especialidadesCreateManyEspecialidadesInput | profissional_especialidadesCreateManyEspecialidadesInput[]
    skipDuplicates?: boolean
  }

  export type profissional_especialidadesUpsertWithWhereUniqueWithoutEspecialidadesInput = {
    where: profissional_especialidadesWhereUniqueInput
    update: XOR<profissional_especialidadesUpdateWithoutEspecialidadesInput, profissional_especialidadesUncheckedUpdateWithoutEspecialidadesInput>
    create: XOR<profissional_especialidadesCreateWithoutEspecialidadesInput, profissional_especialidadesUncheckedCreateWithoutEspecialidadesInput>
  }

  export type profissional_especialidadesUpdateWithWhereUniqueWithoutEspecialidadesInput = {
    where: profissional_especialidadesWhereUniqueInput
    data: XOR<profissional_especialidadesUpdateWithoutEspecialidadesInput, profissional_especialidadesUncheckedUpdateWithoutEspecialidadesInput>
  }

  export type profissional_especialidadesUpdateManyWithWhereWithoutEspecialidadesInput = {
    where: profissional_especialidadesScalarWhereInput
    data: XOR<profissional_especialidadesUpdateManyMutationInput, profissional_especialidadesUncheckedUpdateManyWithoutEspecialidadesInput>
  }

  export type profissional_especialidadesScalarWhereInput = {
    AND?: profissional_especialidadesScalarWhereInput | profissional_especialidadesScalarWhereInput[]
    OR?: profissional_especialidadesScalarWhereInput[]
    NOT?: profissional_especialidadesScalarWhereInput | profissional_especialidadesScalarWhereInput[]
    profissionais_id_profissional?: IntFilter<"profissional_especialidades"> | number
    especialidades_id_especialidade?: IntFilter<"profissional_especialidades"> | number
  }

  export type profissional_formacoesCreateWithoutFormacoesInput = {
    profissionais: profissionaisCreateNestedOneWithoutProfissional_formacoesInput
  }

  export type profissional_formacoesUncheckedCreateWithoutFormacoesInput = {
    profissionais_id_profissional: number
  }

  export type profissional_formacoesCreateOrConnectWithoutFormacoesInput = {
    where: profissional_formacoesWhereUniqueInput
    create: XOR<profissional_formacoesCreateWithoutFormacoesInput, profissional_formacoesUncheckedCreateWithoutFormacoesInput>
  }

  export type profissional_formacoesCreateManyFormacoesInputEnvelope = {
    data: profissional_formacoesCreateManyFormacoesInput | profissional_formacoesCreateManyFormacoesInput[]
    skipDuplicates?: boolean
  }

  export type profissional_formacoesUpsertWithWhereUniqueWithoutFormacoesInput = {
    where: profissional_formacoesWhereUniqueInput
    update: XOR<profissional_formacoesUpdateWithoutFormacoesInput, profissional_formacoesUncheckedUpdateWithoutFormacoesInput>
    create: XOR<profissional_formacoesCreateWithoutFormacoesInput, profissional_formacoesUncheckedCreateWithoutFormacoesInput>
  }

  export type profissional_formacoesUpdateWithWhereUniqueWithoutFormacoesInput = {
    where: profissional_formacoesWhereUniqueInput
    data: XOR<profissional_formacoesUpdateWithoutFormacoesInput, profissional_formacoesUncheckedUpdateWithoutFormacoesInput>
  }

  export type profissional_formacoesUpdateManyWithWhereWithoutFormacoesInput = {
    where: profissional_formacoesScalarWhereInput
    data: XOR<profissional_formacoesUpdateManyMutationInput, profissional_formacoesUncheckedUpdateManyWithoutFormacoesInput>
  }

  export type profissional_formacoesScalarWhereInput = {
    AND?: profissional_formacoesScalarWhereInput | profissional_formacoesScalarWhereInput[]
    OR?: profissional_formacoesScalarWhereInput[]
    NOT?: profissional_formacoesScalarWhereInput | profissional_formacoesScalarWhereInput[]
    formacoes_id_formacao?: IntFilter<"profissional_formacoes"> | number
    profissionais_id_profissional?: IntFilter<"profissional_formacoes"> | number
  }

  export type profissionaisCreateWithoutHorarios_trabalhoInput = {
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
    agendamentos?: agendamentosCreateNestedManyWithoutProfissionaisInput
    enderecos: enderecosCreateNestedOneWithoutProfissionaisInput
    usuarios: usuariosCreateNestedOneWithoutProfissionaisInput
    profissional_especialidades?: profissional_especialidadesCreateNestedManyWithoutProfissionaisInput
    profissional_formacoes?: profissional_formacoesCreateNestedManyWithoutProfissionaisInput
    profissional_idiomas?: profissional_idiomasCreateNestedManyWithoutProfissionaisInput
    profissional_tags?: profissional_tagsCreateNestedManyWithoutProfissionaisInput
  }

  export type profissionaisUncheckedCreateWithoutHorarios_trabalhoInput = {
    id_profissional?: number
    usuarios_id_usuario: number
    enderecos_id_endereco: number
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
    agendamentos?: agendamentosUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_especialidades?: profissional_especialidadesUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_formacoes?: profissional_formacoesUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_idiomas?: profissional_idiomasUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_tags?: profissional_tagsUncheckedCreateNestedManyWithoutProfissionaisInput
  }

  export type profissionaisCreateOrConnectWithoutHorarios_trabalhoInput = {
    where: profissionaisWhereUniqueInput
    create: XOR<profissionaisCreateWithoutHorarios_trabalhoInput, profissionaisUncheckedCreateWithoutHorarios_trabalhoInput>
  }

  export type profissionaisUpsertWithoutHorarios_trabalhoInput = {
    update: XOR<profissionaisUpdateWithoutHorarios_trabalhoInput, profissionaisUncheckedUpdateWithoutHorarios_trabalhoInput>
    create: XOR<profissionaisCreateWithoutHorarios_trabalhoInput, profissionaisUncheckedCreateWithoutHorarios_trabalhoInput>
    where?: profissionaisWhereInput
  }

  export type profissionaisUpdateToOneWithWhereWithoutHorarios_trabalhoInput = {
    where?: profissionaisWhereInput
    data: XOR<profissionaisUpdateWithoutHorarios_trabalhoInput, profissionaisUncheckedUpdateWithoutHorarios_trabalhoInput>
  }

  export type profissionaisUpdateWithoutHorarios_trabalhoInput = {
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agendamentos?: agendamentosUpdateManyWithoutProfissionaisNestedInput
    enderecos?: enderecosUpdateOneRequiredWithoutProfissionaisNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutProfissionaisNestedInput
    profissional_especialidades?: profissional_especialidadesUpdateManyWithoutProfissionaisNestedInput
    profissional_formacoes?: profissional_formacoesUpdateManyWithoutProfissionaisNestedInput
    profissional_idiomas?: profissional_idiomasUpdateManyWithoutProfissionaisNestedInput
    profissional_tags?: profissional_tagsUpdateManyWithoutProfissionaisNestedInput
  }

  export type profissionaisUncheckedUpdateWithoutHorarios_trabalhoInput = {
    id_profissional?: IntFieldUpdateOperationsInput | number
    usuarios_id_usuario?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agendamentos?: agendamentosUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_especialidades?: profissional_especialidadesUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_formacoes?: profissional_formacoesUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_idiomas?: profissional_idiomasUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_tags?: profissional_tagsUncheckedUpdateManyWithoutProfissionaisNestedInput
  }

  export type profissional_idiomasCreateWithoutIdiomasInput = {
    profissionais: profissionaisCreateNestedOneWithoutProfissional_idiomasInput
  }

  export type profissional_idiomasUncheckedCreateWithoutIdiomasInput = {
    profissionais_id_profissional: number
  }

  export type profissional_idiomasCreateOrConnectWithoutIdiomasInput = {
    where: profissional_idiomasWhereUniqueInput
    create: XOR<profissional_idiomasCreateWithoutIdiomasInput, profissional_idiomasUncheckedCreateWithoutIdiomasInput>
  }

  export type profissional_idiomasCreateManyIdiomasInputEnvelope = {
    data: profissional_idiomasCreateManyIdiomasInput | profissional_idiomasCreateManyIdiomasInput[]
    skipDuplicates?: boolean
  }

  export type profissional_idiomasUpsertWithWhereUniqueWithoutIdiomasInput = {
    where: profissional_idiomasWhereUniqueInput
    update: XOR<profissional_idiomasUpdateWithoutIdiomasInput, profissional_idiomasUncheckedUpdateWithoutIdiomasInput>
    create: XOR<profissional_idiomasCreateWithoutIdiomasInput, profissional_idiomasUncheckedCreateWithoutIdiomasInput>
  }

  export type profissional_idiomasUpdateWithWhereUniqueWithoutIdiomasInput = {
    where: profissional_idiomasWhereUniqueInput
    data: XOR<profissional_idiomasUpdateWithoutIdiomasInput, profissional_idiomasUncheckedUpdateWithoutIdiomasInput>
  }

  export type profissional_idiomasUpdateManyWithWhereWithoutIdiomasInput = {
    where: profissional_idiomasScalarWhereInput
    data: XOR<profissional_idiomasUpdateManyMutationInput, profissional_idiomasUncheckedUpdateManyWithoutIdiomasInput>
  }

  export type profissional_idiomasScalarWhereInput = {
    AND?: profissional_idiomasScalarWhereInput | profissional_idiomasScalarWhereInput[]
    OR?: profissional_idiomasScalarWhereInput[]
    NOT?: profissional_idiomasScalarWhereInput | profissional_idiomasScalarWhereInput[]
    idiomas_id_idioma?: IntFilter<"profissional_idiomas"> | number
    profissionais_id_profissional?: IntFilter<"profissional_idiomas"> | number
  }

  export type agendamentosCreateWithoutPacientesInput = {
    data_horario_inicio: Date | string
    duracao_consulta_minutos: number
    data_criacao?: Date | string
    status: $Enums.agendamentos_status
    nota_atendimento?: number | null
    avaliacao?: string | null
    enderecos: enderecosCreateNestedOneWithoutAgendamentosInput
    profissionais: profissionaisCreateNestedOneWithoutAgendamentosInput
  }

  export type agendamentosUncheckedCreateWithoutPacientesInput = {
    id_agendamento?: number
    profissionais_id_profissional: number
    enderecos_id_endereco: number
    data_horario_inicio: Date | string
    duracao_consulta_minutos: number
    data_criacao?: Date | string
    status: $Enums.agendamentos_status
    nota_atendimento?: number | null
    avaliacao?: string | null
  }

  export type agendamentosCreateOrConnectWithoutPacientesInput = {
    where: agendamentosWhereUniqueInput
    create: XOR<agendamentosCreateWithoutPacientesInput, agendamentosUncheckedCreateWithoutPacientesInput>
  }

  export type agendamentosCreateManyPacientesInputEnvelope = {
    data: agendamentosCreateManyPacientesInput | agendamentosCreateManyPacientesInput[]
    skipDuplicates?: boolean
  }

  export type enderecosCreateWithoutPacientesInput = {
    estado: string
    cidade: string
    apelido_endereco?: string | null
    cep: string
    logradouro: string
    numero: string
    bairro: string
    complemento?: string | null
    agendamentos?: agendamentosCreateNestedManyWithoutEnderecosInput
    profissionais?: profissionaisCreateNestedManyWithoutEnderecosInput
  }

  export type enderecosUncheckedCreateWithoutPacientesInput = {
    id_endereco?: number
    estado: string
    cidade: string
    apelido_endereco?: string | null
    cep: string
    logradouro: string
    numero: string
    bairro: string
    complemento?: string | null
    agendamentos?: agendamentosUncheckedCreateNestedManyWithoutEnderecosInput
    profissionais?: profissionaisUncheckedCreateNestedManyWithoutEnderecosInput
  }

  export type enderecosCreateOrConnectWithoutPacientesInput = {
    where: enderecosWhereUniqueInput
    create: XOR<enderecosCreateWithoutPacientesInput, enderecosUncheckedCreateWithoutPacientesInput>
  }

  export type usuariosCreateWithoutPacientesInput = {
    email: string
    senha: string
    data_criacao?: Date | string
    profissionais?: profissionaisCreateNestedManyWithoutUsuariosInput
    telefones?: telefonesCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutPacientesInput = {
    id_usuario?: number
    email: string
    senha: string
    data_criacao?: Date | string
    profissionais?: profissionaisUncheckedCreateNestedManyWithoutUsuariosInput
    telefones?: telefonesUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutPacientesInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutPacientesInput, usuariosUncheckedCreateWithoutPacientesInput>
  }

  export type agendamentosUpsertWithWhereUniqueWithoutPacientesInput = {
    where: agendamentosWhereUniqueInput
    update: XOR<agendamentosUpdateWithoutPacientesInput, agendamentosUncheckedUpdateWithoutPacientesInput>
    create: XOR<agendamentosCreateWithoutPacientesInput, agendamentosUncheckedCreateWithoutPacientesInput>
  }

  export type agendamentosUpdateWithWhereUniqueWithoutPacientesInput = {
    where: agendamentosWhereUniqueInput
    data: XOR<agendamentosUpdateWithoutPacientesInput, agendamentosUncheckedUpdateWithoutPacientesInput>
  }

  export type agendamentosUpdateManyWithWhereWithoutPacientesInput = {
    where: agendamentosScalarWhereInput
    data: XOR<agendamentosUpdateManyMutationInput, agendamentosUncheckedUpdateManyWithoutPacientesInput>
  }

  export type enderecosUpsertWithoutPacientesInput = {
    update: XOR<enderecosUpdateWithoutPacientesInput, enderecosUncheckedUpdateWithoutPacientesInput>
    create: XOR<enderecosCreateWithoutPacientesInput, enderecosUncheckedCreateWithoutPacientesInput>
    where?: enderecosWhereInput
  }

  export type enderecosUpdateToOneWithWhereWithoutPacientesInput = {
    where?: enderecosWhereInput
    data: XOR<enderecosUpdateWithoutPacientesInput, enderecosUncheckedUpdateWithoutPacientesInput>
  }

  export type enderecosUpdateWithoutPacientesInput = {
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    apelido_endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: agendamentosUpdateManyWithoutEnderecosNestedInput
    profissionais?: profissionaisUpdateManyWithoutEnderecosNestedInput
  }

  export type enderecosUncheckedUpdateWithoutPacientesInput = {
    id_endereco?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    apelido_endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: agendamentosUncheckedUpdateManyWithoutEnderecosNestedInput
    profissionais?: profissionaisUncheckedUpdateManyWithoutEnderecosNestedInput
  }

  export type usuariosUpsertWithoutPacientesInput = {
    update: XOR<usuariosUpdateWithoutPacientesInput, usuariosUncheckedUpdateWithoutPacientesInput>
    create: XOR<usuariosCreateWithoutPacientesInput, usuariosUncheckedCreateWithoutPacientesInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutPacientesInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutPacientesInput, usuariosUncheckedUpdateWithoutPacientesInput>
  }

  export type usuariosUpdateWithoutPacientesInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    profissionais?: profissionaisUpdateManyWithoutUsuariosNestedInput
    telefones?: telefonesUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutPacientesInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    profissionais?: profissionaisUncheckedUpdateManyWithoutUsuariosNestedInput
    telefones?: telefonesUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type agendamentosCreateWithoutProfissionaisInput = {
    data_horario_inicio: Date | string
    duracao_consulta_minutos: number
    data_criacao?: Date | string
    status: $Enums.agendamentos_status
    nota_atendimento?: number | null
    avaliacao?: string | null
    enderecos: enderecosCreateNestedOneWithoutAgendamentosInput
    pacientes: pacientesCreateNestedOneWithoutAgendamentosInput
  }

  export type agendamentosUncheckedCreateWithoutProfissionaisInput = {
    id_agendamento?: number
    pacientes_id_paciente: number
    enderecos_id_endereco: number
    data_horario_inicio: Date | string
    duracao_consulta_minutos: number
    data_criacao?: Date | string
    status: $Enums.agendamentos_status
    nota_atendimento?: number | null
    avaliacao?: string | null
  }

  export type agendamentosCreateOrConnectWithoutProfissionaisInput = {
    where: agendamentosWhereUniqueInput
    create: XOR<agendamentosCreateWithoutProfissionaisInput, agendamentosUncheckedCreateWithoutProfissionaisInput>
  }

  export type agendamentosCreateManyProfissionaisInputEnvelope = {
    data: agendamentosCreateManyProfissionaisInput | agendamentosCreateManyProfissionaisInput[]
    skipDuplicates?: boolean
  }

  export type horarios_trabalhoCreateWithoutProfissionaisInput = {
    dia_semana: number
    horario_inicio: Date | string
    horario_fim: Date | string
  }

  export type horarios_trabalhoUncheckedCreateWithoutProfissionaisInput = {
    id_horario_trabalho?: number
    dia_semana: number
    horario_inicio: Date | string
    horario_fim: Date | string
  }

  export type horarios_trabalhoCreateOrConnectWithoutProfissionaisInput = {
    where: horarios_trabalhoWhereUniqueInput
    create: XOR<horarios_trabalhoCreateWithoutProfissionaisInput, horarios_trabalhoUncheckedCreateWithoutProfissionaisInput>
  }

  export type horarios_trabalhoCreateManyProfissionaisInputEnvelope = {
    data: horarios_trabalhoCreateManyProfissionaisInput | horarios_trabalhoCreateManyProfissionaisInput[]
    skipDuplicates?: boolean
  }

  export type enderecosCreateWithoutProfissionaisInput = {
    estado: string
    cidade: string
    apelido_endereco?: string | null
    cep: string
    logradouro: string
    numero: string
    bairro: string
    complemento?: string | null
    agendamentos?: agendamentosCreateNestedManyWithoutEnderecosInput
    pacientes?: pacientesCreateNestedManyWithoutEnderecosInput
  }

  export type enderecosUncheckedCreateWithoutProfissionaisInput = {
    id_endereco?: number
    estado: string
    cidade: string
    apelido_endereco?: string | null
    cep: string
    logradouro: string
    numero: string
    bairro: string
    complemento?: string | null
    agendamentos?: agendamentosUncheckedCreateNestedManyWithoutEnderecosInput
    pacientes?: pacientesUncheckedCreateNestedManyWithoutEnderecosInput
  }

  export type enderecosCreateOrConnectWithoutProfissionaisInput = {
    where: enderecosWhereUniqueInput
    create: XOR<enderecosCreateWithoutProfissionaisInput, enderecosUncheckedCreateWithoutProfissionaisInput>
  }

  export type usuariosCreateWithoutProfissionaisInput = {
    email: string
    senha: string
    data_criacao?: Date | string
    pacientes?: pacientesCreateNestedManyWithoutUsuariosInput
    telefones?: telefonesCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutProfissionaisInput = {
    id_usuario?: number
    email: string
    senha: string
    data_criacao?: Date | string
    pacientes?: pacientesUncheckedCreateNestedManyWithoutUsuariosInput
    telefones?: telefonesUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutProfissionaisInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutProfissionaisInput, usuariosUncheckedCreateWithoutProfissionaisInput>
  }

  export type profissional_especialidadesCreateWithoutProfissionaisInput = {
    especialidades: especialidadesCreateNestedOneWithoutProfissional_especialidadesInput
  }

  export type profissional_especialidadesUncheckedCreateWithoutProfissionaisInput = {
    especialidades_id_especialidade: number
  }

  export type profissional_especialidadesCreateOrConnectWithoutProfissionaisInput = {
    where: profissional_especialidadesWhereUniqueInput
    create: XOR<profissional_especialidadesCreateWithoutProfissionaisInput, profissional_especialidadesUncheckedCreateWithoutProfissionaisInput>
  }

  export type profissional_especialidadesCreateManyProfissionaisInputEnvelope = {
    data: profissional_especialidadesCreateManyProfissionaisInput | profissional_especialidadesCreateManyProfissionaisInput[]
    skipDuplicates?: boolean
  }

  export type profissional_formacoesCreateWithoutProfissionaisInput = {
    formacoes: formacoesCreateNestedOneWithoutProfissional_formacoesInput
  }

  export type profissional_formacoesUncheckedCreateWithoutProfissionaisInput = {
    formacoes_id_formacao: number
  }

  export type profissional_formacoesCreateOrConnectWithoutProfissionaisInput = {
    where: profissional_formacoesWhereUniqueInput
    create: XOR<profissional_formacoesCreateWithoutProfissionaisInput, profissional_formacoesUncheckedCreateWithoutProfissionaisInput>
  }

  export type profissional_formacoesCreateManyProfissionaisInputEnvelope = {
    data: profissional_formacoesCreateManyProfissionaisInput | profissional_formacoesCreateManyProfissionaisInput[]
    skipDuplicates?: boolean
  }

  export type profissional_idiomasCreateWithoutProfissionaisInput = {
    idiomas: idiomasCreateNestedOneWithoutProfissional_idiomasInput
  }

  export type profissional_idiomasUncheckedCreateWithoutProfissionaisInput = {
    idiomas_id_idioma: number
  }

  export type profissional_idiomasCreateOrConnectWithoutProfissionaisInput = {
    where: profissional_idiomasWhereUniqueInput
    create: XOR<profissional_idiomasCreateWithoutProfissionaisInput, profissional_idiomasUncheckedCreateWithoutProfissionaisInput>
  }

  export type profissional_idiomasCreateManyProfissionaisInputEnvelope = {
    data: profissional_idiomasCreateManyProfissionaisInput | profissional_idiomasCreateManyProfissionaisInput[]
    skipDuplicates?: boolean
  }

  export type profissional_tagsCreateWithoutProfissionaisInput = {
    tags: tagsCreateNestedOneWithoutProfissional_tagsInput
  }

  export type profissional_tagsUncheckedCreateWithoutProfissionaisInput = {
    tags_id_tag: number
  }

  export type profissional_tagsCreateOrConnectWithoutProfissionaisInput = {
    where: profissional_tagsWhereUniqueInput
    create: XOR<profissional_tagsCreateWithoutProfissionaisInput, profissional_tagsUncheckedCreateWithoutProfissionaisInput>
  }

  export type profissional_tagsCreateManyProfissionaisInputEnvelope = {
    data: profissional_tagsCreateManyProfissionaisInput | profissional_tagsCreateManyProfissionaisInput[]
    skipDuplicates?: boolean
  }

  export type agendamentosUpsertWithWhereUniqueWithoutProfissionaisInput = {
    where: agendamentosWhereUniqueInput
    update: XOR<agendamentosUpdateWithoutProfissionaisInput, agendamentosUncheckedUpdateWithoutProfissionaisInput>
    create: XOR<agendamentosCreateWithoutProfissionaisInput, agendamentosUncheckedCreateWithoutProfissionaisInput>
  }

  export type agendamentosUpdateWithWhereUniqueWithoutProfissionaisInput = {
    where: agendamentosWhereUniqueInput
    data: XOR<agendamentosUpdateWithoutProfissionaisInput, agendamentosUncheckedUpdateWithoutProfissionaisInput>
  }

  export type agendamentosUpdateManyWithWhereWithoutProfissionaisInput = {
    where: agendamentosScalarWhereInput
    data: XOR<agendamentosUpdateManyMutationInput, agendamentosUncheckedUpdateManyWithoutProfissionaisInput>
  }

  export type horarios_trabalhoUpsertWithWhereUniqueWithoutProfissionaisInput = {
    where: horarios_trabalhoWhereUniqueInput
    update: XOR<horarios_trabalhoUpdateWithoutProfissionaisInput, horarios_trabalhoUncheckedUpdateWithoutProfissionaisInput>
    create: XOR<horarios_trabalhoCreateWithoutProfissionaisInput, horarios_trabalhoUncheckedCreateWithoutProfissionaisInput>
  }

  export type horarios_trabalhoUpdateWithWhereUniqueWithoutProfissionaisInput = {
    where: horarios_trabalhoWhereUniqueInput
    data: XOR<horarios_trabalhoUpdateWithoutProfissionaisInput, horarios_trabalhoUncheckedUpdateWithoutProfissionaisInput>
  }

  export type horarios_trabalhoUpdateManyWithWhereWithoutProfissionaisInput = {
    where: horarios_trabalhoScalarWhereInput
    data: XOR<horarios_trabalhoUpdateManyMutationInput, horarios_trabalhoUncheckedUpdateManyWithoutProfissionaisInput>
  }

  export type horarios_trabalhoScalarWhereInput = {
    AND?: horarios_trabalhoScalarWhereInput | horarios_trabalhoScalarWhereInput[]
    OR?: horarios_trabalhoScalarWhereInput[]
    NOT?: horarios_trabalhoScalarWhereInput | horarios_trabalhoScalarWhereInput[]
    id_horario_trabalho?: IntFilter<"horarios_trabalho"> | number
    profissionais_id_profissional?: IntFilter<"horarios_trabalho"> | number
    dia_semana?: IntFilter<"horarios_trabalho"> | number
    horario_inicio?: DateTimeFilter<"horarios_trabalho"> | Date | string
    horario_fim?: DateTimeFilter<"horarios_trabalho"> | Date | string
  }

  export type enderecosUpsertWithoutProfissionaisInput = {
    update: XOR<enderecosUpdateWithoutProfissionaisInput, enderecosUncheckedUpdateWithoutProfissionaisInput>
    create: XOR<enderecosCreateWithoutProfissionaisInput, enderecosUncheckedCreateWithoutProfissionaisInput>
    where?: enderecosWhereInput
  }

  export type enderecosUpdateToOneWithWhereWithoutProfissionaisInput = {
    where?: enderecosWhereInput
    data: XOR<enderecosUpdateWithoutProfissionaisInput, enderecosUncheckedUpdateWithoutProfissionaisInput>
  }

  export type enderecosUpdateWithoutProfissionaisInput = {
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    apelido_endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: agendamentosUpdateManyWithoutEnderecosNestedInput
    pacientes?: pacientesUpdateManyWithoutEnderecosNestedInput
  }

  export type enderecosUncheckedUpdateWithoutProfissionaisInput = {
    id_endereco?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    apelido_endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: agendamentosUncheckedUpdateManyWithoutEnderecosNestedInput
    pacientes?: pacientesUncheckedUpdateManyWithoutEnderecosNestedInput
  }

  export type usuariosUpsertWithoutProfissionaisInput = {
    update: XOR<usuariosUpdateWithoutProfissionaisInput, usuariosUncheckedUpdateWithoutProfissionaisInput>
    create: XOR<usuariosCreateWithoutProfissionaisInput, usuariosUncheckedCreateWithoutProfissionaisInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutProfissionaisInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutProfissionaisInput, usuariosUncheckedUpdateWithoutProfissionaisInput>
  }

  export type usuariosUpdateWithoutProfissionaisInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pacientes?: pacientesUpdateManyWithoutUsuariosNestedInput
    telefones?: telefonesUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutProfissionaisInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pacientes?: pacientesUncheckedUpdateManyWithoutUsuariosNestedInput
    telefones?: telefonesUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type profissional_especialidadesUpsertWithWhereUniqueWithoutProfissionaisInput = {
    where: profissional_especialidadesWhereUniqueInput
    update: XOR<profissional_especialidadesUpdateWithoutProfissionaisInput, profissional_especialidadesUncheckedUpdateWithoutProfissionaisInput>
    create: XOR<profissional_especialidadesCreateWithoutProfissionaisInput, profissional_especialidadesUncheckedCreateWithoutProfissionaisInput>
  }

  export type profissional_especialidadesUpdateWithWhereUniqueWithoutProfissionaisInput = {
    where: profissional_especialidadesWhereUniqueInput
    data: XOR<profissional_especialidadesUpdateWithoutProfissionaisInput, profissional_especialidadesUncheckedUpdateWithoutProfissionaisInput>
  }

  export type profissional_especialidadesUpdateManyWithWhereWithoutProfissionaisInput = {
    where: profissional_especialidadesScalarWhereInput
    data: XOR<profissional_especialidadesUpdateManyMutationInput, profissional_especialidadesUncheckedUpdateManyWithoutProfissionaisInput>
  }

  export type profissional_formacoesUpsertWithWhereUniqueWithoutProfissionaisInput = {
    where: profissional_formacoesWhereUniqueInput
    update: XOR<profissional_formacoesUpdateWithoutProfissionaisInput, profissional_formacoesUncheckedUpdateWithoutProfissionaisInput>
    create: XOR<profissional_formacoesCreateWithoutProfissionaisInput, profissional_formacoesUncheckedCreateWithoutProfissionaisInput>
  }

  export type profissional_formacoesUpdateWithWhereUniqueWithoutProfissionaisInput = {
    where: profissional_formacoesWhereUniqueInput
    data: XOR<profissional_formacoesUpdateWithoutProfissionaisInput, profissional_formacoesUncheckedUpdateWithoutProfissionaisInput>
  }

  export type profissional_formacoesUpdateManyWithWhereWithoutProfissionaisInput = {
    where: profissional_formacoesScalarWhereInput
    data: XOR<profissional_formacoesUpdateManyMutationInput, profissional_formacoesUncheckedUpdateManyWithoutProfissionaisInput>
  }

  export type profissional_idiomasUpsertWithWhereUniqueWithoutProfissionaisInput = {
    where: profissional_idiomasWhereUniqueInput
    update: XOR<profissional_idiomasUpdateWithoutProfissionaisInput, profissional_idiomasUncheckedUpdateWithoutProfissionaisInput>
    create: XOR<profissional_idiomasCreateWithoutProfissionaisInput, profissional_idiomasUncheckedCreateWithoutProfissionaisInput>
  }

  export type profissional_idiomasUpdateWithWhereUniqueWithoutProfissionaisInput = {
    where: profissional_idiomasWhereUniqueInput
    data: XOR<profissional_idiomasUpdateWithoutProfissionaisInput, profissional_idiomasUncheckedUpdateWithoutProfissionaisInput>
  }

  export type profissional_idiomasUpdateManyWithWhereWithoutProfissionaisInput = {
    where: profissional_idiomasScalarWhereInput
    data: XOR<profissional_idiomasUpdateManyMutationInput, profissional_idiomasUncheckedUpdateManyWithoutProfissionaisInput>
  }

  export type profissional_tagsUpsertWithWhereUniqueWithoutProfissionaisInput = {
    where: profissional_tagsWhereUniqueInput
    update: XOR<profissional_tagsUpdateWithoutProfissionaisInput, profissional_tagsUncheckedUpdateWithoutProfissionaisInput>
    create: XOR<profissional_tagsCreateWithoutProfissionaisInput, profissional_tagsUncheckedCreateWithoutProfissionaisInput>
  }

  export type profissional_tagsUpdateWithWhereUniqueWithoutProfissionaisInput = {
    where: profissional_tagsWhereUniqueInput
    data: XOR<profissional_tagsUpdateWithoutProfissionaisInput, profissional_tagsUncheckedUpdateWithoutProfissionaisInput>
  }

  export type profissional_tagsUpdateManyWithWhereWithoutProfissionaisInput = {
    where: profissional_tagsScalarWhereInput
    data: XOR<profissional_tagsUpdateManyMutationInput, profissional_tagsUncheckedUpdateManyWithoutProfissionaisInput>
  }

  export type profissional_tagsScalarWhereInput = {
    AND?: profissional_tagsScalarWhereInput | profissional_tagsScalarWhereInput[]
    OR?: profissional_tagsScalarWhereInput[]
    NOT?: profissional_tagsScalarWhereInput | profissional_tagsScalarWhereInput[]
    tags_id_tag?: IntFilter<"profissional_tags"> | number
    profissionais_id_profissional?: IntFilter<"profissional_tags"> | number
  }

  export type especialidadesCreateWithoutProfissional_especialidadesInput = {
    nome_especialidade: string
  }

  export type especialidadesUncheckedCreateWithoutProfissional_especialidadesInput = {
    id_especialidade?: number
    nome_especialidade: string
  }

  export type especialidadesCreateOrConnectWithoutProfissional_especialidadesInput = {
    where: especialidadesWhereUniqueInput
    create: XOR<especialidadesCreateWithoutProfissional_especialidadesInput, especialidadesUncheckedCreateWithoutProfissional_especialidadesInput>
  }

  export type profissionaisCreateWithoutProfissional_especialidadesInput = {
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
    agendamentos?: agendamentosCreateNestedManyWithoutProfissionaisInput
    horarios_trabalho?: horarios_trabalhoCreateNestedManyWithoutProfissionaisInput
    enderecos: enderecosCreateNestedOneWithoutProfissionaisInput
    usuarios: usuariosCreateNestedOneWithoutProfissionaisInput
    profissional_formacoes?: profissional_formacoesCreateNestedManyWithoutProfissionaisInput
    profissional_idiomas?: profissional_idiomasCreateNestedManyWithoutProfissionaisInput
    profissional_tags?: profissional_tagsCreateNestedManyWithoutProfissionaisInput
  }

  export type profissionaisUncheckedCreateWithoutProfissional_especialidadesInput = {
    id_profissional?: number
    usuarios_id_usuario: number
    enderecos_id_endereco: number
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
    agendamentos?: agendamentosUncheckedCreateNestedManyWithoutProfissionaisInput
    horarios_trabalho?: horarios_trabalhoUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_formacoes?: profissional_formacoesUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_idiomas?: profissional_idiomasUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_tags?: profissional_tagsUncheckedCreateNestedManyWithoutProfissionaisInput
  }

  export type profissionaisCreateOrConnectWithoutProfissional_especialidadesInput = {
    where: profissionaisWhereUniqueInput
    create: XOR<profissionaisCreateWithoutProfissional_especialidadesInput, profissionaisUncheckedCreateWithoutProfissional_especialidadesInput>
  }

  export type especialidadesUpsertWithoutProfissional_especialidadesInput = {
    update: XOR<especialidadesUpdateWithoutProfissional_especialidadesInput, especialidadesUncheckedUpdateWithoutProfissional_especialidadesInput>
    create: XOR<especialidadesCreateWithoutProfissional_especialidadesInput, especialidadesUncheckedCreateWithoutProfissional_especialidadesInput>
    where?: especialidadesWhereInput
  }

  export type especialidadesUpdateToOneWithWhereWithoutProfissional_especialidadesInput = {
    where?: especialidadesWhereInput
    data: XOR<especialidadesUpdateWithoutProfissional_especialidadesInput, especialidadesUncheckedUpdateWithoutProfissional_especialidadesInput>
  }

  export type especialidadesUpdateWithoutProfissional_especialidadesInput = {
    nome_especialidade?: StringFieldUpdateOperationsInput | string
  }

  export type especialidadesUncheckedUpdateWithoutProfissional_especialidadesInput = {
    id_especialidade?: IntFieldUpdateOperationsInput | number
    nome_especialidade?: StringFieldUpdateOperationsInput | string
  }

  export type profissionaisUpsertWithoutProfissional_especialidadesInput = {
    update: XOR<profissionaisUpdateWithoutProfissional_especialidadesInput, profissionaisUncheckedUpdateWithoutProfissional_especialidadesInput>
    create: XOR<profissionaisCreateWithoutProfissional_especialidadesInput, profissionaisUncheckedCreateWithoutProfissional_especialidadesInput>
    where?: profissionaisWhereInput
  }

  export type profissionaisUpdateToOneWithWhereWithoutProfissional_especialidadesInput = {
    where?: profissionaisWhereInput
    data: XOR<profissionaisUpdateWithoutProfissional_especialidadesInput, profissionaisUncheckedUpdateWithoutProfissional_especialidadesInput>
  }

  export type profissionaisUpdateWithoutProfissional_especialidadesInput = {
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agendamentos?: agendamentosUpdateManyWithoutProfissionaisNestedInput
    horarios_trabalho?: horarios_trabalhoUpdateManyWithoutProfissionaisNestedInput
    enderecos?: enderecosUpdateOneRequiredWithoutProfissionaisNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutProfissionaisNestedInput
    profissional_formacoes?: profissional_formacoesUpdateManyWithoutProfissionaisNestedInput
    profissional_idiomas?: profissional_idiomasUpdateManyWithoutProfissionaisNestedInput
    profissional_tags?: profissional_tagsUpdateManyWithoutProfissionaisNestedInput
  }

  export type profissionaisUncheckedUpdateWithoutProfissional_especialidadesInput = {
    id_profissional?: IntFieldUpdateOperationsInput | number
    usuarios_id_usuario?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agendamentos?: agendamentosUncheckedUpdateManyWithoutProfissionaisNestedInput
    horarios_trabalho?: horarios_trabalhoUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_formacoes?: profissional_formacoesUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_idiomas?: profissional_idiomasUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_tags?: profissional_tagsUncheckedUpdateManyWithoutProfissionaisNestedInput
  }

  export type formacoesCreateWithoutProfissional_formacoesInput = {
    formacao: string
  }

  export type formacoesUncheckedCreateWithoutProfissional_formacoesInput = {
    id_formacao?: number
    formacao: string
  }

  export type formacoesCreateOrConnectWithoutProfissional_formacoesInput = {
    where: formacoesWhereUniqueInput
    create: XOR<formacoesCreateWithoutProfissional_formacoesInput, formacoesUncheckedCreateWithoutProfissional_formacoesInput>
  }

  export type profissionaisCreateWithoutProfissional_formacoesInput = {
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
    agendamentos?: agendamentosCreateNestedManyWithoutProfissionaisInput
    horarios_trabalho?: horarios_trabalhoCreateNestedManyWithoutProfissionaisInput
    enderecos: enderecosCreateNestedOneWithoutProfissionaisInput
    usuarios: usuariosCreateNestedOneWithoutProfissionaisInput
    profissional_especialidades?: profissional_especialidadesCreateNestedManyWithoutProfissionaisInput
    profissional_idiomas?: profissional_idiomasCreateNestedManyWithoutProfissionaisInput
    profissional_tags?: profissional_tagsCreateNestedManyWithoutProfissionaisInput
  }

  export type profissionaisUncheckedCreateWithoutProfissional_formacoesInput = {
    id_profissional?: number
    usuarios_id_usuario: number
    enderecos_id_endereco: number
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
    agendamentos?: agendamentosUncheckedCreateNestedManyWithoutProfissionaisInput
    horarios_trabalho?: horarios_trabalhoUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_especialidades?: profissional_especialidadesUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_idiomas?: profissional_idiomasUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_tags?: profissional_tagsUncheckedCreateNestedManyWithoutProfissionaisInput
  }

  export type profissionaisCreateOrConnectWithoutProfissional_formacoesInput = {
    where: profissionaisWhereUniqueInput
    create: XOR<profissionaisCreateWithoutProfissional_formacoesInput, profissionaisUncheckedCreateWithoutProfissional_formacoesInput>
  }

  export type formacoesUpsertWithoutProfissional_formacoesInput = {
    update: XOR<formacoesUpdateWithoutProfissional_formacoesInput, formacoesUncheckedUpdateWithoutProfissional_formacoesInput>
    create: XOR<formacoesCreateWithoutProfissional_formacoesInput, formacoesUncheckedCreateWithoutProfissional_formacoesInput>
    where?: formacoesWhereInput
  }

  export type formacoesUpdateToOneWithWhereWithoutProfissional_formacoesInput = {
    where?: formacoesWhereInput
    data: XOR<formacoesUpdateWithoutProfissional_formacoesInput, formacoesUncheckedUpdateWithoutProfissional_formacoesInput>
  }

  export type formacoesUpdateWithoutProfissional_formacoesInput = {
    formacao?: StringFieldUpdateOperationsInput | string
  }

  export type formacoesUncheckedUpdateWithoutProfissional_formacoesInput = {
    id_formacao?: IntFieldUpdateOperationsInput | number
    formacao?: StringFieldUpdateOperationsInput | string
  }

  export type profissionaisUpsertWithoutProfissional_formacoesInput = {
    update: XOR<profissionaisUpdateWithoutProfissional_formacoesInput, profissionaisUncheckedUpdateWithoutProfissional_formacoesInput>
    create: XOR<profissionaisCreateWithoutProfissional_formacoesInput, profissionaisUncheckedCreateWithoutProfissional_formacoesInput>
    where?: profissionaisWhereInput
  }

  export type profissionaisUpdateToOneWithWhereWithoutProfissional_formacoesInput = {
    where?: profissionaisWhereInput
    data: XOR<profissionaisUpdateWithoutProfissional_formacoesInput, profissionaisUncheckedUpdateWithoutProfissional_formacoesInput>
  }

  export type profissionaisUpdateWithoutProfissional_formacoesInput = {
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agendamentos?: agendamentosUpdateManyWithoutProfissionaisNestedInput
    horarios_trabalho?: horarios_trabalhoUpdateManyWithoutProfissionaisNestedInput
    enderecos?: enderecosUpdateOneRequiredWithoutProfissionaisNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutProfissionaisNestedInput
    profissional_especialidades?: profissional_especialidadesUpdateManyWithoutProfissionaisNestedInput
    profissional_idiomas?: profissional_idiomasUpdateManyWithoutProfissionaisNestedInput
    profissional_tags?: profissional_tagsUpdateManyWithoutProfissionaisNestedInput
  }

  export type profissionaisUncheckedUpdateWithoutProfissional_formacoesInput = {
    id_profissional?: IntFieldUpdateOperationsInput | number
    usuarios_id_usuario?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agendamentos?: agendamentosUncheckedUpdateManyWithoutProfissionaisNestedInput
    horarios_trabalho?: horarios_trabalhoUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_especialidades?: profissional_especialidadesUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_idiomas?: profissional_idiomasUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_tags?: profissional_tagsUncheckedUpdateManyWithoutProfissionaisNestedInput
  }

  export type idiomasCreateWithoutProfissional_idiomasInput = {
    idioma: string
  }

  export type idiomasUncheckedCreateWithoutProfissional_idiomasInput = {
    id_idioma?: number
    idioma: string
  }

  export type idiomasCreateOrConnectWithoutProfissional_idiomasInput = {
    where: idiomasWhereUniqueInput
    create: XOR<idiomasCreateWithoutProfissional_idiomasInput, idiomasUncheckedCreateWithoutProfissional_idiomasInput>
  }

  export type profissionaisCreateWithoutProfissional_idiomasInput = {
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
    agendamentos?: agendamentosCreateNestedManyWithoutProfissionaisInput
    horarios_trabalho?: horarios_trabalhoCreateNestedManyWithoutProfissionaisInput
    enderecos: enderecosCreateNestedOneWithoutProfissionaisInput
    usuarios: usuariosCreateNestedOneWithoutProfissionaisInput
    profissional_especialidades?: profissional_especialidadesCreateNestedManyWithoutProfissionaisInput
    profissional_formacoes?: profissional_formacoesCreateNestedManyWithoutProfissionaisInput
    profissional_tags?: profissional_tagsCreateNestedManyWithoutProfissionaisInput
  }

  export type profissionaisUncheckedCreateWithoutProfissional_idiomasInput = {
    id_profissional?: number
    usuarios_id_usuario: number
    enderecos_id_endereco: number
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
    agendamentos?: agendamentosUncheckedCreateNestedManyWithoutProfissionaisInput
    horarios_trabalho?: horarios_trabalhoUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_especialidades?: profissional_especialidadesUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_formacoes?: profissional_formacoesUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_tags?: profissional_tagsUncheckedCreateNestedManyWithoutProfissionaisInput
  }

  export type profissionaisCreateOrConnectWithoutProfissional_idiomasInput = {
    where: profissionaisWhereUniqueInput
    create: XOR<profissionaisCreateWithoutProfissional_idiomasInput, profissionaisUncheckedCreateWithoutProfissional_idiomasInput>
  }

  export type idiomasUpsertWithoutProfissional_idiomasInput = {
    update: XOR<idiomasUpdateWithoutProfissional_idiomasInput, idiomasUncheckedUpdateWithoutProfissional_idiomasInput>
    create: XOR<idiomasCreateWithoutProfissional_idiomasInput, idiomasUncheckedCreateWithoutProfissional_idiomasInput>
    where?: idiomasWhereInput
  }

  export type idiomasUpdateToOneWithWhereWithoutProfissional_idiomasInput = {
    where?: idiomasWhereInput
    data: XOR<idiomasUpdateWithoutProfissional_idiomasInput, idiomasUncheckedUpdateWithoutProfissional_idiomasInput>
  }

  export type idiomasUpdateWithoutProfissional_idiomasInput = {
    idioma?: StringFieldUpdateOperationsInput | string
  }

  export type idiomasUncheckedUpdateWithoutProfissional_idiomasInput = {
    id_idioma?: IntFieldUpdateOperationsInput | number
    idioma?: StringFieldUpdateOperationsInput | string
  }

  export type profissionaisUpsertWithoutProfissional_idiomasInput = {
    update: XOR<profissionaisUpdateWithoutProfissional_idiomasInput, profissionaisUncheckedUpdateWithoutProfissional_idiomasInput>
    create: XOR<profissionaisCreateWithoutProfissional_idiomasInput, profissionaisUncheckedCreateWithoutProfissional_idiomasInput>
    where?: profissionaisWhereInput
  }

  export type profissionaisUpdateToOneWithWhereWithoutProfissional_idiomasInput = {
    where?: profissionaisWhereInput
    data: XOR<profissionaisUpdateWithoutProfissional_idiomasInput, profissionaisUncheckedUpdateWithoutProfissional_idiomasInput>
  }

  export type profissionaisUpdateWithoutProfissional_idiomasInput = {
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agendamentos?: agendamentosUpdateManyWithoutProfissionaisNestedInput
    horarios_trabalho?: horarios_trabalhoUpdateManyWithoutProfissionaisNestedInput
    enderecos?: enderecosUpdateOneRequiredWithoutProfissionaisNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutProfissionaisNestedInput
    profissional_especialidades?: profissional_especialidadesUpdateManyWithoutProfissionaisNestedInput
    profissional_formacoes?: profissional_formacoesUpdateManyWithoutProfissionaisNestedInput
    profissional_tags?: profissional_tagsUpdateManyWithoutProfissionaisNestedInput
  }

  export type profissionaisUncheckedUpdateWithoutProfissional_idiomasInput = {
    id_profissional?: IntFieldUpdateOperationsInput | number
    usuarios_id_usuario?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agendamentos?: agendamentosUncheckedUpdateManyWithoutProfissionaisNestedInput
    horarios_trabalho?: horarios_trabalhoUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_especialidades?: profissional_especialidadesUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_formacoes?: profissional_formacoesUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_tags?: profissional_tagsUncheckedUpdateManyWithoutProfissionaisNestedInput
  }

  export type profissionaisCreateWithoutProfissional_tagsInput = {
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
    agendamentos?: agendamentosCreateNestedManyWithoutProfissionaisInput
    horarios_trabalho?: horarios_trabalhoCreateNestedManyWithoutProfissionaisInput
    enderecos: enderecosCreateNestedOneWithoutProfissionaisInput
    usuarios: usuariosCreateNestedOneWithoutProfissionaisInput
    profissional_especialidades?: profissional_especialidadesCreateNestedManyWithoutProfissionaisInput
    profissional_formacoes?: profissional_formacoesCreateNestedManyWithoutProfissionaisInput
    profissional_idiomas?: profissional_idiomasCreateNestedManyWithoutProfissionaisInput
  }

  export type profissionaisUncheckedCreateWithoutProfissional_tagsInput = {
    id_profissional?: number
    usuarios_id_usuario: number
    enderecos_id_endereco: number
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
    agendamentos?: agendamentosUncheckedCreateNestedManyWithoutProfissionaisInput
    horarios_trabalho?: horarios_trabalhoUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_especialidades?: profissional_especialidadesUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_formacoes?: profissional_formacoesUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_idiomas?: profissional_idiomasUncheckedCreateNestedManyWithoutProfissionaisInput
  }

  export type profissionaisCreateOrConnectWithoutProfissional_tagsInput = {
    where: profissionaisWhereUniqueInput
    create: XOR<profissionaisCreateWithoutProfissional_tagsInput, profissionaisUncheckedCreateWithoutProfissional_tagsInput>
  }

  export type tagsCreateWithoutProfissional_tagsInput = {
    nome_tag: string
  }

  export type tagsUncheckedCreateWithoutProfissional_tagsInput = {
    id_tag?: number
    nome_tag: string
  }

  export type tagsCreateOrConnectWithoutProfissional_tagsInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutProfissional_tagsInput, tagsUncheckedCreateWithoutProfissional_tagsInput>
  }

  export type profissionaisUpsertWithoutProfissional_tagsInput = {
    update: XOR<profissionaisUpdateWithoutProfissional_tagsInput, profissionaisUncheckedUpdateWithoutProfissional_tagsInput>
    create: XOR<profissionaisCreateWithoutProfissional_tagsInput, profissionaisUncheckedCreateWithoutProfissional_tagsInput>
    where?: profissionaisWhereInput
  }

  export type profissionaisUpdateToOneWithWhereWithoutProfissional_tagsInput = {
    where?: profissionaisWhereInput
    data: XOR<profissionaisUpdateWithoutProfissional_tagsInput, profissionaisUncheckedUpdateWithoutProfissional_tagsInput>
  }

  export type profissionaisUpdateWithoutProfissional_tagsInput = {
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agendamentos?: agendamentosUpdateManyWithoutProfissionaisNestedInput
    horarios_trabalho?: horarios_trabalhoUpdateManyWithoutProfissionaisNestedInput
    enderecos?: enderecosUpdateOneRequiredWithoutProfissionaisNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutProfissionaisNestedInput
    profissional_especialidades?: profissional_especialidadesUpdateManyWithoutProfissionaisNestedInput
    profissional_formacoes?: profissional_formacoesUpdateManyWithoutProfissionaisNestedInput
    profissional_idiomas?: profissional_idiomasUpdateManyWithoutProfissionaisNestedInput
  }

  export type profissionaisUncheckedUpdateWithoutProfissional_tagsInput = {
    id_profissional?: IntFieldUpdateOperationsInput | number
    usuarios_id_usuario?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agendamentos?: agendamentosUncheckedUpdateManyWithoutProfissionaisNestedInput
    horarios_trabalho?: horarios_trabalhoUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_especialidades?: profissional_especialidadesUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_formacoes?: profissional_formacoesUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_idiomas?: profissional_idiomasUncheckedUpdateManyWithoutProfissionaisNestedInput
  }

  export type tagsUpsertWithoutProfissional_tagsInput = {
    update: XOR<tagsUpdateWithoutProfissional_tagsInput, tagsUncheckedUpdateWithoutProfissional_tagsInput>
    create: XOR<tagsCreateWithoutProfissional_tagsInput, tagsUncheckedCreateWithoutProfissional_tagsInput>
    where?: tagsWhereInput
  }

  export type tagsUpdateToOneWithWhereWithoutProfissional_tagsInput = {
    where?: tagsWhereInput
    data: XOR<tagsUpdateWithoutProfissional_tagsInput, tagsUncheckedUpdateWithoutProfissional_tagsInput>
  }

  export type tagsUpdateWithoutProfissional_tagsInput = {
    nome_tag?: StringFieldUpdateOperationsInput | string
  }

  export type tagsUncheckedUpdateWithoutProfissional_tagsInput = {
    id_tag?: IntFieldUpdateOperationsInput | number
    nome_tag?: StringFieldUpdateOperationsInput | string
  }

  export type profissional_tagsCreateWithoutTagsInput = {
    profissionais: profissionaisCreateNestedOneWithoutProfissional_tagsInput
  }

  export type profissional_tagsUncheckedCreateWithoutTagsInput = {
    profissionais_id_profissional: number
  }

  export type profissional_tagsCreateOrConnectWithoutTagsInput = {
    where: profissional_tagsWhereUniqueInput
    create: XOR<profissional_tagsCreateWithoutTagsInput, profissional_tagsUncheckedCreateWithoutTagsInput>
  }

  export type profissional_tagsCreateManyTagsInputEnvelope = {
    data: profissional_tagsCreateManyTagsInput | profissional_tagsCreateManyTagsInput[]
    skipDuplicates?: boolean
  }

  export type profissional_tagsUpsertWithWhereUniqueWithoutTagsInput = {
    where: profissional_tagsWhereUniqueInput
    update: XOR<profissional_tagsUpdateWithoutTagsInput, profissional_tagsUncheckedUpdateWithoutTagsInput>
    create: XOR<profissional_tagsCreateWithoutTagsInput, profissional_tagsUncheckedCreateWithoutTagsInput>
  }

  export type profissional_tagsUpdateWithWhereUniqueWithoutTagsInput = {
    where: profissional_tagsWhereUniqueInput
    data: XOR<profissional_tagsUpdateWithoutTagsInput, profissional_tagsUncheckedUpdateWithoutTagsInput>
  }

  export type profissional_tagsUpdateManyWithWhereWithoutTagsInput = {
    where: profissional_tagsScalarWhereInput
    data: XOR<profissional_tagsUpdateManyMutationInput, profissional_tagsUncheckedUpdateManyWithoutTagsInput>
  }

  export type usuariosCreateWithoutTelefonesInput = {
    email: string
    senha: string
    data_criacao?: Date | string
    pacientes?: pacientesCreateNestedManyWithoutUsuariosInput
    profissionais?: profissionaisCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutTelefonesInput = {
    id_usuario?: number
    email: string
    senha: string
    data_criacao?: Date | string
    pacientes?: pacientesUncheckedCreateNestedManyWithoutUsuariosInput
    profissionais?: profissionaisUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutTelefonesInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutTelefonesInput, usuariosUncheckedCreateWithoutTelefonesInput>
  }

  export type usuariosUpsertWithoutTelefonesInput = {
    update: XOR<usuariosUpdateWithoutTelefonesInput, usuariosUncheckedUpdateWithoutTelefonesInput>
    create: XOR<usuariosCreateWithoutTelefonesInput, usuariosUncheckedCreateWithoutTelefonesInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutTelefonesInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutTelefonesInput, usuariosUncheckedUpdateWithoutTelefonesInput>
  }

  export type usuariosUpdateWithoutTelefonesInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pacientes?: pacientesUpdateManyWithoutUsuariosNestedInput
    profissionais?: profissionaisUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutTelefonesInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pacientes?: pacientesUncheckedUpdateManyWithoutUsuariosNestedInput
    profissionais?: profissionaisUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type pacientesCreateWithoutUsuariosInput = {
    nome_paciente: string
    cpf: string
    data_nascimento: Date | string
    nivel_tea: $Enums.pacientes_nivel_tea
    e_titular: boolean
    nome_titular?: string | null
    agendamentos?: agendamentosCreateNestedManyWithoutPacientesInput
    enderecos: enderecosCreateNestedOneWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutUsuariosInput = {
    id_paciente?: number
    enderecos_id_endereco: number
    nome_paciente: string
    cpf: string
    data_nascimento: Date | string
    nivel_tea: $Enums.pacientes_nivel_tea
    e_titular: boolean
    nome_titular?: string | null
    agendamentos?: agendamentosUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutUsuariosInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
  }

  export type pacientesCreateManyUsuariosInputEnvelope = {
    data: pacientesCreateManyUsuariosInput | pacientesCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type profissionaisCreateWithoutUsuariosInput = {
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
    agendamentos?: agendamentosCreateNestedManyWithoutProfissionaisInput
    horarios_trabalho?: horarios_trabalhoCreateNestedManyWithoutProfissionaisInput
    enderecos: enderecosCreateNestedOneWithoutProfissionaisInput
    profissional_especialidades?: profissional_especialidadesCreateNestedManyWithoutProfissionaisInput
    profissional_formacoes?: profissional_formacoesCreateNestedManyWithoutProfissionaisInput
    profissional_idiomas?: profissional_idiomasCreateNestedManyWithoutProfissionaisInput
    profissional_tags?: profissional_tagsCreateNestedManyWithoutProfissionaisInput
  }

  export type profissionaisUncheckedCreateWithoutUsuariosInput = {
    id_profissional?: number
    enderecos_id_endereco: number
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
    agendamentos?: agendamentosUncheckedCreateNestedManyWithoutProfissionaisInput
    horarios_trabalho?: horarios_trabalhoUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_especialidades?: profissional_especialidadesUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_formacoes?: profissional_formacoesUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_idiomas?: profissional_idiomasUncheckedCreateNestedManyWithoutProfissionaisInput
    profissional_tags?: profissional_tagsUncheckedCreateNestedManyWithoutProfissionaisInput
  }

  export type profissionaisCreateOrConnectWithoutUsuariosInput = {
    where: profissionaisWhereUniqueInput
    create: XOR<profissionaisCreateWithoutUsuariosInput, profissionaisUncheckedCreateWithoutUsuariosInput>
  }

  export type profissionaisCreateManyUsuariosInputEnvelope = {
    data: profissionaisCreateManyUsuariosInput | profissionaisCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type telefonesCreateWithoutUsuariosInput = {
    ddd: string
    numero: string
    tipo: $Enums.telefones_tipo
  }

  export type telefonesUncheckedCreateWithoutUsuariosInput = {
    id_telefone?: number
    ddd: string
    numero: string
    tipo: $Enums.telefones_tipo
  }

  export type telefonesCreateOrConnectWithoutUsuariosInput = {
    where: telefonesWhereUniqueInput
    create: XOR<telefonesCreateWithoutUsuariosInput, telefonesUncheckedCreateWithoutUsuariosInput>
  }

  export type telefonesCreateManyUsuariosInputEnvelope = {
    data: telefonesCreateManyUsuariosInput | telefonesCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type pacientesUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: pacientesWhereUniqueInput
    update: XOR<pacientesUpdateWithoutUsuariosInput, pacientesUncheckedUpdateWithoutUsuariosInput>
    create: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
  }

  export type pacientesUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: pacientesWhereUniqueInput
    data: XOR<pacientesUpdateWithoutUsuariosInput, pacientesUncheckedUpdateWithoutUsuariosInput>
  }

  export type pacientesUpdateManyWithWhereWithoutUsuariosInput = {
    where: pacientesScalarWhereInput
    data: XOR<pacientesUpdateManyMutationInput, pacientesUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type profissionaisUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: profissionaisWhereUniqueInput
    update: XOR<profissionaisUpdateWithoutUsuariosInput, profissionaisUncheckedUpdateWithoutUsuariosInput>
    create: XOR<profissionaisCreateWithoutUsuariosInput, profissionaisUncheckedCreateWithoutUsuariosInput>
  }

  export type profissionaisUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: profissionaisWhereUniqueInput
    data: XOR<profissionaisUpdateWithoutUsuariosInput, profissionaisUncheckedUpdateWithoutUsuariosInput>
  }

  export type profissionaisUpdateManyWithWhereWithoutUsuariosInput = {
    where: profissionaisScalarWhereInput
    data: XOR<profissionaisUpdateManyMutationInput, profissionaisUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type telefonesUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: telefonesWhereUniqueInput
    update: XOR<telefonesUpdateWithoutUsuariosInput, telefonesUncheckedUpdateWithoutUsuariosInput>
    create: XOR<telefonesCreateWithoutUsuariosInput, telefonesUncheckedCreateWithoutUsuariosInput>
  }

  export type telefonesUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: telefonesWhereUniqueInput
    data: XOR<telefonesUpdateWithoutUsuariosInput, telefonesUncheckedUpdateWithoutUsuariosInput>
  }

  export type telefonesUpdateManyWithWhereWithoutUsuariosInput = {
    where: telefonesScalarWhereInput
    data: XOR<telefonesUpdateManyMutationInput, telefonesUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type telefonesScalarWhereInput = {
    AND?: telefonesScalarWhereInput | telefonesScalarWhereInput[]
    OR?: telefonesScalarWhereInput[]
    NOT?: telefonesScalarWhereInput | telefonesScalarWhereInput[]
    id_telefone?: IntFilter<"telefones"> | number
    usuarios_id_usuario?: IntFilter<"telefones"> | number
    ddd?: StringFilter<"telefones"> | string
    numero?: StringFilter<"telefones"> | string
    tipo?: Enumtelefones_tipoFilter<"telefones"> | $Enums.telefones_tipo
  }

  export type agendamentosCreateManyEnderecosInput = {
    id_agendamento?: number
    profissionais_id_profissional: number
    pacientes_id_paciente: number
    data_horario_inicio: Date | string
    duracao_consulta_minutos: number
    data_criacao?: Date | string
    status: $Enums.agendamentos_status
    nota_atendimento?: number | null
    avaliacao?: string | null
  }

  export type pacientesCreateManyEnderecosInput = {
    id_paciente?: number
    usuarios_id_usuario: number
    nome_paciente: string
    cpf: string
    data_nascimento: Date | string
    nivel_tea: $Enums.pacientes_nivel_tea
    e_titular: boolean
    nome_titular?: string | null
  }

  export type profissionaisCreateManyEnderecosInput = {
    id_profissional?: number
    usuarios_id_usuario: number
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
  }

  export type agendamentosUpdateWithoutEnderecosInput = {
    data_horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao_consulta_minutos?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    nota_atendimento?: NullableIntFieldUpdateOperationsInput | number | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    pacientes?: pacientesUpdateOneRequiredWithoutAgendamentosNestedInput
    profissionais?: profissionaisUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type agendamentosUncheckedUpdateWithoutEnderecosInput = {
    id_agendamento?: IntFieldUpdateOperationsInput | number
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
    pacientes_id_paciente?: IntFieldUpdateOperationsInput | number
    data_horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao_consulta_minutos?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    nota_atendimento?: NullableIntFieldUpdateOperationsInput | number | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agendamentosUncheckedUpdateManyWithoutEnderecosInput = {
    id_agendamento?: IntFieldUpdateOperationsInput | number
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
    pacientes_id_paciente?: IntFieldUpdateOperationsInput | number
    data_horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao_consulta_minutos?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    nota_atendimento?: NullableIntFieldUpdateOperationsInput | number | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pacientesUpdateWithoutEnderecosInput = {
    nome_paciente?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_tea?: Enumpacientes_nivel_teaFieldUpdateOperationsInput | $Enums.pacientes_nivel_tea
    e_titular?: BoolFieldUpdateOperationsInput | boolean
    nome_titular?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: agendamentosUpdateManyWithoutPacientesNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutEnderecosInput = {
    id_paciente?: IntFieldUpdateOperationsInput | number
    usuarios_id_usuario?: IntFieldUpdateOperationsInput | number
    nome_paciente?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_tea?: Enumpacientes_nivel_teaFieldUpdateOperationsInput | $Enums.pacientes_nivel_tea
    e_titular?: BoolFieldUpdateOperationsInput | boolean
    nome_titular?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: agendamentosUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateManyWithoutEnderecosInput = {
    id_paciente?: IntFieldUpdateOperationsInput | number
    usuarios_id_usuario?: IntFieldUpdateOperationsInput | number
    nome_paciente?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_tea?: Enumpacientes_nivel_teaFieldUpdateOperationsInput | $Enums.pacientes_nivel_tea
    e_titular?: BoolFieldUpdateOperationsInput | boolean
    nome_titular?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profissionaisUpdateWithoutEnderecosInput = {
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agendamentos?: agendamentosUpdateManyWithoutProfissionaisNestedInput
    horarios_trabalho?: horarios_trabalhoUpdateManyWithoutProfissionaisNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutProfissionaisNestedInput
    profissional_especialidades?: profissional_especialidadesUpdateManyWithoutProfissionaisNestedInput
    profissional_formacoes?: profissional_formacoesUpdateManyWithoutProfissionaisNestedInput
    profissional_idiomas?: profissional_idiomasUpdateManyWithoutProfissionaisNestedInput
    profissional_tags?: profissional_tagsUpdateManyWithoutProfissionaisNestedInput
  }

  export type profissionaisUncheckedUpdateWithoutEnderecosInput = {
    id_profissional?: IntFieldUpdateOperationsInput | number
    usuarios_id_usuario?: IntFieldUpdateOperationsInput | number
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agendamentos?: agendamentosUncheckedUpdateManyWithoutProfissionaisNestedInput
    horarios_trabalho?: horarios_trabalhoUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_especialidades?: profissional_especialidadesUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_formacoes?: profissional_formacoesUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_idiomas?: profissional_idiomasUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_tags?: profissional_tagsUncheckedUpdateManyWithoutProfissionaisNestedInput
  }

  export type profissionaisUncheckedUpdateManyWithoutEnderecosInput = {
    id_profissional?: IntFieldUpdateOperationsInput | number
    usuarios_id_usuario?: IntFieldUpdateOperationsInput | number
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type profissional_especialidadesCreateManyEspecialidadesInput = {
    profissionais_id_profissional: number
  }

  export type profissional_especialidadesUpdateWithoutEspecialidadesInput = {
    profissionais?: profissionaisUpdateOneRequiredWithoutProfissional_especialidadesNestedInput
  }

  export type profissional_especialidadesUncheckedUpdateWithoutEspecialidadesInput = {
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_especialidadesUncheckedUpdateManyWithoutEspecialidadesInput = {
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_formacoesCreateManyFormacoesInput = {
    profissionais_id_profissional: number
  }

  export type profissional_formacoesUpdateWithoutFormacoesInput = {
    profissionais?: profissionaisUpdateOneRequiredWithoutProfissional_formacoesNestedInput
  }

  export type profissional_formacoesUncheckedUpdateWithoutFormacoesInput = {
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_formacoesUncheckedUpdateManyWithoutFormacoesInput = {
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_idiomasCreateManyIdiomasInput = {
    profissionais_id_profissional: number
  }

  export type profissional_idiomasUpdateWithoutIdiomasInput = {
    profissionais?: profissionaisUpdateOneRequiredWithoutProfissional_idiomasNestedInput
  }

  export type profissional_idiomasUncheckedUpdateWithoutIdiomasInput = {
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_idiomasUncheckedUpdateManyWithoutIdiomasInput = {
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
  }

  export type agendamentosCreateManyPacientesInput = {
    id_agendamento?: number
    profissionais_id_profissional: number
    enderecos_id_endereco: number
    data_horario_inicio: Date | string
    duracao_consulta_minutos: number
    data_criacao?: Date | string
    status: $Enums.agendamentos_status
    nota_atendimento?: number | null
    avaliacao?: string | null
  }

  export type agendamentosUpdateWithoutPacientesInput = {
    data_horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao_consulta_minutos?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    nota_atendimento?: NullableIntFieldUpdateOperationsInput | number | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    enderecos?: enderecosUpdateOneRequiredWithoutAgendamentosNestedInput
    profissionais?: profissionaisUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type agendamentosUncheckedUpdateWithoutPacientesInput = {
    id_agendamento?: IntFieldUpdateOperationsInput | number
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    data_horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao_consulta_minutos?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    nota_atendimento?: NullableIntFieldUpdateOperationsInput | number | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agendamentosUncheckedUpdateManyWithoutPacientesInput = {
    id_agendamento?: IntFieldUpdateOperationsInput | number
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    data_horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao_consulta_minutos?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    nota_atendimento?: NullableIntFieldUpdateOperationsInput | number | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agendamentosCreateManyProfissionaisInput = {
    id_agendamento?: number
    pacientes_id_paciente: number
    enderecos_id_endereco: number
    data_horario_inicio: Date | string
    duracao_consulta_minutos: number
    data_criacao?: Date | string
    status: $Enums.agendamentos_status
    nota_atendimento?: number | null
    avaliacao?: string | null
  }

  export type horarios_trabalhoCreateManyProfissionaisInput = {
    id_horario_trabalho?: number
    dia_semana: number
    horario_inicio: Date | string
    horario_fim: Date | string
  }

  export type profissional_especialidadesCreateManyProfissionaisInput = {
    especialidades_id_especialidade: number
  }

  export type profissional_formacoesCreateManyProfissionaisInput = {
    formacoes_id_formacao: number
  }

  export type profissional_idiomasCreateManyProfissionaisInput = {
    idiomas_id_idioma: number
  }

  export type profissional_tagsCreateManyProfissionaisInput = {
    tags_id_tag: number
  }

  export type agendamentosUpdateWithoutProfissionaisInput = {
    data_horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao_consulta_minutos?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    nota_atendimento?: NullableIntFieldUpdateOperationsInput | number | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    enderecos?: enderecosUpdateOneRequiredWithoutAgendamentosNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type agendamentosUncheckedUpdateWithoutProfissionaisInput = {
    id_agendamento?: IntFieldUpdateOperationsInput | number
    pacientes_id_paciente?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    data_horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao_consulta_minutos?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    nota_atendimento?: NullableIntFieldUpdateOperationsInput | number | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agendamentosUncheckedUpdateManyWithoutProfissionaisInput = {
    id_agendamento?: IntFieldUpdateOperationsInput | number
    pacientes_id_paciente?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    data_horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    duracao_consulta_minutos?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    nota_atendimento?: NullableIntFieldUpdateOperationsInput | number | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type horarios_trabalhoUpdateWithoutProfissionaisInput = {
    dia_semana?: IntFieldUpdateOperationsInput | number
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type horarios_trabalhoUncheckedUpdateWithoutProfissionaisInput = {
    id_horario_trabalho?: IntFieldUpdateOperationsInput | number
    dia_semana?: IntFieldUpdateOperationsInput | number
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type horarios_trabalhoUncheckedUpdateManyWithoutProfissionaisInput = {
    id_horario_trabalho?: IntFieldUpdateOperationsInput | number
    dia_semana?: IntFieldUpdateOperationsInput | number
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type profissional_especialidadesUpdateWithoutProfissionaisInput = {
    especialidades?: especialidadesUpdateOneRequiredWithoutProfissional_especialidadesNestedInput
  }

  export type profissional_especialidadesUncheckedUpdateWithoutProfissionaisInput = {
    especialidades_id_especialidade?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_especialidadesUncheckedUpdateManyWithoutProfissionaisInput = {
    especialidades_id_especialidade?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_formacoesUpdateWithoutProfissionaisInput = {
    formacoes?: formacoesUpdateOneRequiredWithoutProfissional_formacoesNestedInput
  }

  export type profissional_formacoesUncheckedUpdateWithoutProfissionaisInput = {
    formacoes_id_formacao?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_formacoesUncheckedUpdateManyWithoutProfissionaisInput = {
    formacoes_id_formacao?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_idiomasUpdateWithoutProfissionaisInput = {
    idiomas?: idiomasUpdateOneRequiredWithoutProfissional_idiomasNestedInput
  }

  export type profissional_idiomasUncheckedUpdateWithoutProfissionaisInput = {
    idiomas_id_idioma?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_idiomasUncheckedUpdateManyWithoutProfissionaisInput = {
    idiomas_id_idioma?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_tagsUpdateWithoutProfissionaisInput = {
    tags?: tagsUpdateOneRequiredWithoutProfissional_tagsNestedInput
  }

  export type profissional_tagsUncheckedUpdateWithoutProfissionaisInput = {
    tags_id_tag?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_tagsUncheckedUpdateManyWithoutProfissionaisInput = {
    tags_id_tag?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_tagsCreateManyTagsInput = {
    profissionais_id_profissional: number
  }

  export type profissional_tagsUpdateWithoutTagsInput = {
    profissionais?: profissionaisUpdateOneRequiredWithoutProfissional_tagsNestedInput
  }

  export type profissional_tagsUncheckedUpdateWithoutTagsInput = {
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
  }

  export type profissional_tagsUncheckedUpdateManyWithoutTagsInput = {
    profissionais_id_profissional?: IntFieldUpdateOperationsInput | number
  }

  export type pacientesCreateManyUsuariosInput = {
    id_paciente?: number
    enderecos_id_endereco: number
    nome_paciente: string
    cpf: string
    data_nascimento: Date | string
    nivel_tea: $Enums.pacientes_nivel_tea
    e_titular: boolean
    nome_titular?: string | null
  }

  export type profissionaisCreateManyUsuariosInput = {
    id_profissional?: number
    enderecos_id_endereco: number
    foto_perfil_url?: string | null
    nome: string
    cpf: string
    tipo_registro: $Enums.profissionais_tipo_registro
    numero_registro: string
    uf_registro: string
    descricao?: string | null
    valor_consulta?: Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: boolean | null
  }

  export type telefonesCreateManyUsuariosInput = {
    id_telefone?: number
    ddd: string
    numero: string
    tipo: $Enums.telefones_tipo
  }

  export type pacientesUpdateWithoutUsuariosInput = {
    nome_paciente?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_tea?: Enumpacientes_nivel_teaFieldUpdateOperationsInput | $Enums.pacientes_nivel_tea
    e_titular?: BoolFieldUpdateOperationsInput | boolean
    nome_titular?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: agendamentosUpdateManyWithoutPacientesNestedInput
    enderecos?: enderecosUpdateOneRequiredWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutUsuariosInput = {
    id_paciente?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    nome_paciente?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_tea?: Enumpacientes_nivel_teaFieldUpdateOperationsInput | $Enums.pacientes_nivel_tea
    e_titular?: BoolFieldUpdateOperationsInput | boolean
    nome_titular?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: agendamentosUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateManyWithoutUsuariosInput = {
    id_paciente?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    nome_paciente?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_tea?: Enumpacientes_nivel_teaFieldUpdateOperationsInput | $Enums.pacientes_nivel_tea
    e_titular?: BoolFieldUpdateOperationsInput | boolean
    nome_titular?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profissionaisUpdateWithoutUsuariosInput = {
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agendamentos?: agendamentosUpdateManyWithoutProfissionaisNestedInput
    horarios_trabalho?: horarios_trabalhoUpdateManyWithoutProfissionaisNestedInput
    enderecos?: enderecosUpdateOneRequiredWithoutProfissionaisNestedInput
    profissional_especialidades?: profissional_especialidadesUpdateManyWithoutProfissionaisNestedInput
    profissional_formacoes?: profissional_formacoesUpdateManyWithoutProfissionaisNestedInput
    profissional_idiomas?: profissional_idiomasUpdateManyWithoutProfissionaisNestedInput
    profissional_tags?: profissional_tagsUpdateManyWithoutProfissionaisNestedInput
  }

  export type profissionaisUncheckedUpdateWithoutUsuariosInput = {
    id_profissional?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    agendamentos?: agendamentosUncheckedUpdateManyWithoutProfissionaisNestedInput
    horarios_trabalho?: horarios_trabalhoUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_especialidades?: profissional_especialidadesUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_formacoes?: profissional_formacoesUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_idiomas?: profissional_idiomasUncheckedUpdateManyWithoutProfissionaisNestedInput
    profissional_tags?: profissional_tagsUncheckedUpdateManyWithoutProfissionaisNestedInput
  }

  export type profissionaisUncheckedUpdateManyWithoutUsuariosInput = {
    id_profissional?: IntFieldUpdateOperationsInput | number
    enderecos_id_endereco?: IntFieldUpdateOperationsInput | number
    foto_perfil_url?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    tipo_registro?: Enumprofissionais_tipo_registroFieldUpdateOperationsInput | $Enums.profissionais_tipo_registro
    numero_registro?: StringFieldUpdateOperationsInput | string
    uf_registro?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_consulta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    aceita_convenio?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type telefonesUpdateWithoutUsuariosInput = {
    ddd?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtelefones_tipoFieldUpdateOperationsInput | $Enums.telefones_tipo
  }

  export type telefonesUncheckedUpdateWithoutUsuariosInput = {
    id_telefone?: IntFieldUpdateOperationsInput | number
    ddd?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtelefones_tipoFieldUpdateOperationsInput | $Enums.telefones_tipo
  }

  export type telefonesUncheckedUpdateManyWithoutUsuariosInput = {
    id_telefone?: IntFieldUpdateOperationsInput | number
    ddd?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtelefones_tipoFieldUpdateOperationsInput | $Enums.telefones_tipo
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