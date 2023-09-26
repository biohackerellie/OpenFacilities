
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.3.1
 * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
 */
Prisma.prismaVersion = {
  client: "5.3.1",
  engine: "61e140623197a131c2a6189271ffee05a7aa9a59"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
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

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  price: 'price',
  facilityId: 'facilityId'
};

exports.Prisma.EventsScalarFieldEnum = {
  id: 'id',
  calendarId: 'calendarId',
  title: 'title',
  start: 'start',
  end: 'end',
  location: 'location',
  recurringEventId: 'recurringEventId',
  facilityId: 'facilityId'
};

exports.Prisma.FacilityScalarFieldEnum = {
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

exports.Prisma.InsuranceFilesScalarFieldEnum = {
  id: 'id',
  path: 'path',
  fileName: 'fileName',
  reservationId: 'reservationId',
  varified: 'varified'
};

exports.Prisma.OptionScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.ReservationScalarFieldEnum = {
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

exports.Prisma.ReservationDateScalarFieldEnum = {
  id: 'id',
  startDate: 'startDate',
  endDate: 'endDate',
  startTime: 'startTime',
  endTime: 'endTime',
  reservationId: 'reservationId',
  approved: 'approved'
};

exports.Prisma.ReservationFeesScalarFieldEnum = {
  id: 'id',
  additionalFees: 'additionalFees',
  feesType: 'feesType',
  reservationId: 'reservationId'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Reservation_approved = exports.$Enums.Reservation_approved = {
  pending: 'pending',
  approved: 'approved',
  denied: 'denied',
  canceled: 'canceled'
};

exports.ReservationDate_approved = exports.$Enums.ReservationDate_approved = {
  pending: 'pending',
  approved: 'approved',
  denied: 'denied',
  canceled: 'canceled'
};

exports.User_role = exports.$Enums.User_role = {
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

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
