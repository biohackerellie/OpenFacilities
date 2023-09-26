
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/ellie/github/OpenFacilities/front-end/prisma/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.3.1",
  "engineVersion": "61e140623197a131c2a6189271ffee05a7aa9a59",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKCW91dHB1dCAgID0gIi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQogIGRpcmVjdFVybCA9IGVudigiRElSRUNUX1VSTCIpCn0KCm1vZGVsIEFjY291bnQgewogIGlkICAgICAgICAgICAgICAgIFN0cmluZyAgQGlkKG1hcDogImlkeF8zMDA4OV9QUklNQVJZIikgQGRiLlZhckNoYXIoMTkxKSBAZGVmYXVsdChjdWlkKCkpCiAgdXNlcklkICAgICAgICAgICAgU3RyaW5nICBAZGIuVmFyQ2hhcigxOTEpCiAgdHlwZSAgICAgICAgICAgICAgU3RyaW5nICBAZGIuVmFyQ2hhcigxOTEpCiAgcHJvdmlkZXIgICAgICAgICAgU3RyaW5nICBAZGIuVmFyQ2hhcigxOTEpCiAgcHJvdmlkZXJBY2NvdW50SWQgU3RyaW5nICBAZGIuVmFyQ2hhcigxOTEpCiAgcmVmcmVzaF90b2tlbiAgICAgU3RyaW5nPwogIGFjY2Vzc190b2tlbiAgICAgIFN0cmluZz8KICBleHBpcmVzX2F0ICAgICAgICBJbnQ/CiAgdG9rZW5fdHlwZSAgICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigxOTEpCiAgc2NvcGUgICAgICAgICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigxOTEpCiAgaWRfdG9rZW4gICAgICAgICAgU3RyaW5nPwogIHNlc3Npb25fc3RhdGUgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMTkxKQogIGV4dF9leHBpcmVzX2luICAgIEludD8KICB1c2VyICAgICAgICAgICAgICBVc2VyICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKCiAgQEB1bmlxdWUoW3Byb3ZpZGVyLCBwcm92aWRlckFjY291bnRJZF0sIG1hcDogImlkeF8zMDA4OV9BY2NvdW50X3Byb3ZpZGVyX3Byb3ZpZGVyQWNjb3VudElkX2tleSIpCiAgQEBpbmRleChbdXNlcklkXSwgbWFwOiAiaWR4XzMwMDg5X0FjY291bnRfdXNlcklkX2ZrZXkiKQp9Cgptb2RlbCBDYXRlZ29yeSB7CiAgaWQgICAgICAgICAgQmlnSW50ICAgICAgICBAaWQobWFwOiAiaWR4XzMwMDk1X1BSSU1BUlkiKSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbmFtZSAgICAgICAgU3RyaW5nICAgICAgICBAZGIuVmFyQ2hhcigxOTEpCiAgZGVzY3JpcHRpb24gU3RyaW5nCiAgcHJpY2UgICAgICAgRmxvYXQKICBmYWNpbGl0eUlkICBCaWdJbnQKICBGYWNpbGl0eSAgICBGYWNpbGl0eSAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtmYWNpbGl0eUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBSZXNlcnZhdGlvbiBSZXNlcnZhdGlvbltdCgogIEBAaW5kZXgoW2ZhY2lsaXR5SWRdLCBtYXA6ICJpZHhfMzAwOTVfQ2F0ZWdvcnlfZmFjaWxpdHlJZF9ma2V5IikKfQoKbW9kZWwgRXZlbnRzIHsKICBpZCAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkKG1hcDogImlkeF8zMDEwMV9QUklNQVJZIikgQHVuaXF1ZShtYXA6ICJpZHhfMzAxMDFfRXZlbnRzX2lkX2tleSIpIEBkYi5WYXJDaGFyKDE5MSkKICBjYWxlbmRhcklkICAgICAgIFN0cmluZz8gICAgICAgQGRiLlZhckNoYXIoMTkxKQogIHRpdGxlICAgICAgICAgICAgU3RyaW5nPyAgICAgICBAZGIuVmFyQ2hhcigxOTEpCiAgc3RhcnQgICAgICAgICAgICBEYXRlVGltZT8gICAgIEBkYi5UaW1lc3RhbXB0eigzKQogIGVuZCAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICBAZGIuVGltZXN0YW1wdHooMykKICBsb2NhdGlvbiAgICAgICAgIFN0cmluZz8gICAgICAgQGRiLlZhckNoYXIoMTkxKQogIHJlY3VycmluZ0V2ZW50SWQgU3RyaW5nPyAgICAgICBAZGIuVmFyQ2hhcigxOTEpCiAgZmFjaWxpdHlJZCAgICAgICBCaWdJbnQKICBGYWNpbGl0eSAgICAgICAgIEZhY2lsaXR5ICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2ZhY2lsaXR5SWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBSZXNlcnZhdGlvbiAgICAgIFJlc2VydmF0aW9uW10KCiAgQEBpbmRleChbZmFjaWxpdHlJZF0sIG1hcDogImlkeF8zMDEwMV9FdmVudHNfZmFjaWxpdHlJZF9ma2V5IikKfQoKbW9kZWwgRmFjaWxpdHkgewogIGlkICAgICAgICAgICAgICAgQmlnSW50ICAgICAgICBAaWQobWFwOiAiaWR4XzMwMTA3X1BSSU1BUlkiKSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbmFtZSAgICAgICAgICAgICBTdHJpbmcgICAgICAgIEB1bmlxdWUobWFwOiAiaWR4XzMwMTA3X0ZhY2lsaXR5X25hbWVfa2V5IikgQGRiLlZhckNoYXIoMTkxKQogIGJ1aWxkaW5nICAgICAgICAgU3RyaW5nICAgICAgICBAZGIuVmFyQ2hhcigxOTEpCiAgYWRkcmVzcyAgICAgICAgICBTdHJpbmcgICAgICAgIEBkYi5WYXJDaGFyKDE5MSkKICBpbWFnZVBhdGggICAgICAgIFN0cmluZz8gICAgICAgQGRiLlZhckNoYXIoMTkxKQogIGNhcGFjaXR5ICAgICAgICAgSW50PwogIGNyZWF0ZWRBdCAgICAgICAgRGF0ZVRpbWU/ICAgICBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDMpCiAgdXBkYXRlZEF0ICAgICAgICBEYXRlVGltZT8gICAgIEBkYi5UaW1lc3RhbXB0eigzKQogIGdvb2dsZUNhbGVuZGFySWQgU3RyaW5nICAgICAgICBAdW5pcXVlKG1hcDogImlkeF8zMDEwN19GYWNpbGl0eV9jYWxlbmRhcklkX2tleSIpIEBkYi5WYXJDaGFyKDE5MSkKICBDYXRlZ29yeSAgICAgICAgIENhdGVnb3J5W10KICBFdmVudHMgICAgICAgICAgIEV2ZW50c1tdCiAgUmVzZXJ2YXRpb24gICAgICBSZXNlcnZhdGlvbltdCiAgT3B0aW9uICAgICAgICAgICBPcHRpb25bXSAgICAgIEByZWxhdGlvbigiRmFjaWxpdHlUb09wdGlvbiIpCn0KCm1vZGVsIEluc3VyYW5jZUZpbGVzIHsKICBpZCAgICAgICAgICAgIEJpZ0ludCAgICAgIEBpZChtYXA6ICJpZHhfMzAxMTVfUFJJTUFSWSIpIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBwYXRoICAgICAgICAgIFN0cmluZz8gICAgIEBkYi5WYXJDaGFyKDE5MSkKICBmaWxlTmFtZSAgICAgIFN0cmluZz8gICAgIEBkYi5WYXJDaGFyKDE5MSkKICByZXNlcnZhdGlvbklkIEJpZ0ludAogIHZhcmlmaWVkICAgICAgQm9vbGVhbiAgICAgQGRlZmF1bHQoZmFsc2UpCiAgUmVzZXJ2YXRpb24gICBSZXNlcnZhdGlvbiBAcmVsYXRpb24oZmllbGRzOiBbcmVzZXJ2YXRpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQoKICBAQGluZGV4KFtyZXNlcnZhdGlvbklkXSwgbWFwOiAiaWR4XzMwMTE1X0luc3VyYW5jZUZpbGVzX3Jlc2VydmF0aW9uSWRfZmtleSIpCn0KCm1vZGVsIE9wdGlvbiB7CiAgaWQgICAgICAgQmlnSW50ICAgICBAaWQobWFwOiAiaWR4XzMwMTIxX1BSSU1BUlkiKSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbmFtZSAgICAgU3RyaW5nICAgICBAZGIuVmFyQ2hhcigxOTEpCiAgRmFjaWxpdHkgRmFjaWxpdHlbXSBAcmVsYXRpb24oIkZhY2lsaXR5VG9PcHRpb24iKQp9Cgptb2RlbCBSZXNlcnZhdGlvbiB7CiAgaWQgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICBAaWQobWFwOiAiaWR4XzMwMTI2X1BSSU1BUlkiKSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdXNlcklkICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxOTEpCiAgZXZlbnROYW1lICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxOTEpCiAgZmFjaWxpdHlJZCAgICAgICBCaWdJbnQKICBhcHByb3ZlZCAgICAgICAgIFJlc2VydmF0aW9uX2FwcHJvdmVkIEBkZWZhdWx0KHBlbmRpbmcpCiAgY3JlYXRlZEF0ICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDMpCiAgdXBkYXRlZEF0ICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICBAZGIuVGltZXN0YW1wdHooMykKICBkZXRhaWxzICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDIwMDApCiAgZXZlbnRJZCAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxOTEpCiAgZmVlcyAgICAgICAgICAgICBGbG9hdD8KICBpbnN1cmFuY2UgICAgICAgIEJvb2xlYW4KICBwcmltYXJ5Q29udGFjdCAgIFN0cmluZz8gICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDE5MSkKICByZXNwb25zaWJsZVBhcnR5IFN0cmluZz8gICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDE5MSkKICBkb29yQWNjZXNzICAgICAgIEJvb2xlYW4/CiAgZG9vcnNEZXRhaWxzICAgICBTdHJpbmc/ICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxOTEpCiAgbmFtZSAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxOTEpCiAgcGVvcGxlICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxOTEpCiAgdGVjaERldGFpbHMgICAgICBTdHJpbmc/ICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxOTEpCiAgdGVjaFN1cHBvcnQgICAgICBCb29sZWFuPwogIHBob25lICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTkxKQogIGNhdGVnb3J5SWQgICAgICAgQmlnSW50CiAgdG90YWxIb3VycyAgICAgICBGbG9hdD8KICBpblBlcnNvbiAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHBhaWQgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgcGF5bWVudFVybCAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxOTEpCiAgcGF5bWVudExpbmtJRCAgICBTdHJpbmc/ICAgICAgICAgICAgICBAdW5pcXVlKG1hcDogImlkeF8zMDEyNl9SZXNlcnZhdGlvbl9wYXltZW50TGlua0lEX2tleSIpIEBkYi5WYXJDaGFyKDE5MSkKICB0aWNrZXRNYWRlICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGNvbmZsaWN0cyAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgSW5zdXJhbmNlRmlsZXMgICBJbnN1cmFuY2VGaWxlc1tdCiAgQ2F0ZWdvcnkgICAgICAgICBDYXRlZ29yeSAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbY2F0ZWdvcnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgRXZlbnRzICAgICAgICAgICBFdmVudHM/ICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbZXZlbnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIEZhY2lsaXR5ICAgICAgICAgRmFjaWxpdHkgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2ZhY2lsaXR5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIFVzZXIgICAgICAgICAgICAgVXNlciAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgUmVzZXJ2YXRpb25EYXRlICBSZXNlcnZhdGlvbkRhdGVbXQogIFJlc2VydmF0aW9uRmVlcyAgUmVzZXJ2YXRpb25GZWVzW10KCiAgQEBpbmRleChbY2F0ZWdvcnlJZF0sIG1hcDogImlkeF8zMDEyNl9SZXNlcnZhdGlvbl9jYXRlZ29yeUlkX2ZrZXkiKQogIEBAaW5kZXgoW2V2ZW50SWRdLCBtYXA6ICJpZHhfMzAxMjZfUmVzZXJ2YXRpb25fZXZlbnRJZF9ma2V5IikKICBAQGluZGV4KFtmYWNpbGl0eUlkXSwgbWFwOiAiaWR4XzMwMTI2X1Jlc2VydmF0aW9uX2ZhY2lsaXR5SWRfZmtleSIpCiAgQEBpbmRleChbdXNlcklkXSwgbWFwOiAiaWR4XzMwMTI2X1Jlc2VydmF0aW9uX3VzZXJJZF9ma2V5IikKfQoKbW9kZWwgUmVzZXJ2YXRpb25EYXRlIHsKICBpZCAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICAgICBAaWQobWFwOiAiaWR4XzMwMTM5X1BSSU1BUlkiKSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgc3RhcnREYXRlICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTkxKQogIGVuZERhdGUgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDE5MSkKICBzdGFydFRpbWUgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxOTEpCiAgZW5kVGltZSAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTkxKQogIHJlc2VydmF0aW9uSWQgQmlnSW50CiAgYXBwcm92ZWQgICAgICBSZXNlcnZhdGlvbkRhdGVfYXBwcm92ZWQgQGRlZmF1bHQocGVuZGluZykKICBSZXNlcnZhdGlvbiAgIFJlc2VydmF0aW9uICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbcmVzZXJ2YXRpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQoKICBAQGluZGV4KFtyZXNlcnZhdGlvbklkXSwgbWFwOiAiaWR4XzMwMTM5X1Jlc2VydmF0aW9uRGF0ZV9yZXNlcnZhdGlvbklkX2ZrZXkiKQp9Cgptb2RlbCBSZXNlcnZhdGlvbkZlZXMgewogIGlkICAgICAgICAgICAgIEJpZ0ludCAgICAgIEBpZChtYXA6ICJpZHhfMzAxNDdfUFJJTUFSWSIpIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBhZGRpdGlvbmFsRmVlcyBGbG9hdD8KICBmZWVzVHlwZSAgICAgICBTdHJpbmc/ICAgICBAZGIuVmFyQ2hhcigxOTEpCiAgcmVzZXJ2YXRpb25JZCAgQmlnSW50CiAgUmVzZXJ2YXRpb24gICAgUmVzZXJ2YXRpb24gQHJlbGF0aW9uKGZpZWxkczogW3Jlc2VydmF0aW9uSWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKCiAgQEBpbmRleChbcmVzZXJ2YXRpb25JZF0sIG1hcDogImlkeF8zMDE0N19SZXNlcnZhdGlvbkZlZXNfcmVzZXJ2YXRpb25JZF9ma2V5IikKfQoKbW9kZWwgU2Vzc2lvbiB7CiAgaWQgICAgICAgICAgIFN0cmluZyAgICBAaWQobWFwOiAiaWR4XzMwMTUxX1BSSU1BUlkiKSBAZGIuVmFyQ2hhcigxOTEpCiAgc2Vzc2lvblRva2VuIFN0cmluZyAgICBAdW5pcXVlKG1hcDogImlkeF8zMDE1MV9TZXNzaW9uX3Nlc3Npb25Ub2tlbl9rZXkiKSBAZGIuVmFyQ2hhcigxOTEpCiAgdXNlcklkICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcigxOTEpCiAgZXhwaXJlcyAgICAgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wdHooMykKICBVc2VyICAgICAgICAgVXNlciAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKCiAgQEBpbmRleChbdXNlcklkXSwgbWFwOiAiaWR4XzMwMTUxX1Nlc3Npb25fdXNlcklkX2ZrZXkiKQp9Cgptb2RlbCBVc2VyIHsKICBpZCAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkKG1hcDogImlkeF8zMDE1Nl9QUklNQVJZIikgQGRlZmF1bHQoY3VpZCgpKSBAZGIuVmFyQ2hhcigxOTEpCiAgbmFtZSAgICAgICAgICBTdHJpbmcgICAgICAgIEBkYi5WYXJDaGFyKDE5MSkKICBpbWFnZSAgICAgICAgIFN0cmluZz8gICAgICAgQGRiLlZhckNoYXIoMTkxKQogIGVtYWlsICAgICAgICAgU3RyaW5nICAgICAgICBAdW5pcXVlKG1hcDogImlkeF8zMDE1Nl9Vc2VyX2VtYWlsX2tleSIpIEBkYi5WYXJDaGFyKDE5MSkKICBlbWFpbFZlcmlmaWVkIERhdGVUaW1lPyAgICAgQGRiLlRpbWVzdGFtcHR6KDMpCiAgcGFzc3dvcmQgICAgICBTdHJpbmc/ICAgICAgIEBkYi5WYXJDaGFyKDE5MSkKICBwcm92aWRlciAgICAgIFN0cmluZz8gICAgICAgQGRiLlZhckNoYXIoMTkxKQogIGV4dGVybmFsVXNlciAgQm9vbGVhbiAgICAgICBAZGVmYXVsdChmYWxzZSkKICByb2xlICAgICAgICAgIFVzZXJfcm9sZSAgICAgQGRlZmF1bHQoVVNFUikKICBjcmVhdGVkQXQgICAgIERhdGVUaW1lPyAgICAgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eigzKQogIHRvcyAgICAgICAgICAgQm9vbGVhbiAgICAgICBAZGVmYXVsdChmYWxzZSkKICBBY2NvdW50ICAgICAgIEFjY291bnRbXQogIFJlc2VydmF0aW9uICAgUmVzZXJ2YXRpb25bXQogIFNlc3Npb24gICAgICAgU2Vzc2lvbltdCn0KCm1vZGVsIFZlcmlmaWNhdGlvblRva2VuIHsKICBpZGVudGlmaWVyIFN0cmluZyAgICBAZGIuVmFyQ2hhcigxOTEpCiAgdG9rZW4gICAgICBTdHJpbmcgICAgQHVuaXF1ZShtYXA6ICJpZHhfMzAxNjVfVmVyaWZpY2F0aW9uVG9rZW5fdG9rZW5fa2V5IikgQGRiLlZhckNoYXIoMTkxKQogIGV4cGlyZXMgICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXB0eigzKQoKICBAQHVuaXF1ZShbaWRlbnRpZmllciwgdG9rZW5dLCBtYXA6ICJpZHhfMzAxNjVfVmVyaWZpY2F0aW9uVG9rZW5faWRlbnRpZmllcl90b2tlbl9rZXkiKQp9CgplbnVtIFJlc2VydmF0aW9uRGF0ZV9hcHByb3ZlZCB7CiAgcGVuZGluZwogIGFwcHJvdmVkCiAgZGVuaWVkCiAgY2FuY2VsZWQKfQoKZW51bSBSZXNlcnZhdGlvbl9hcHByb3ZlZCB7CiAgcGVuZGluZwogIGFwcHJvdmVkCiAgZGVuaWVkCiAgY2FuY2VsZWQKfQoKZW51bSBVc2VyX3JvbGUgewogIENBTF9BRE1JTgogIEFETUlOX0FETUlOCiAgR1JfQURNSU4KICBMSFNfQURNSU4KICBMTVNfQURNSU4KICBXRV9BRE1JTgogIFNPX0FETUlOCiAgU1VQX0FETUlOCiAgVVNFUgp9Cg==",
  "inlineSchemaHash": "511785f593ef220733160f29ca5d4b51fb3d3f26345ebd37d3ea9bceff4b522f",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Account\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerAccountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refresh_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"access_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"session_state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ext_expires_in\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AccountToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"provider\",\"providerAccountId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"provider\",\"providerAccountId\"]}],\"isGenerated\":false},\"Category\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"facilityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Facility\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Facility\",\"relationName\":\"CategoryToFacility\",\"relationFromFields\":[\"facilityId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reservation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"CategoryToReservation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Events\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"calendarId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recurringEventId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"facilityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Facility\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Facility\",\"relationName\":\"EventsToFacility\",\"relationFromFields\":[\"facilityId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reservation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"EventsToReservation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Facility\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imagePath\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"capacity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"googleCalendarId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Category\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Category\",\"relationName\":\"CategoryToFacility\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Events\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Events\",\"relationName\":\"EventsToFacility\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reservation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"FacilityToReservation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Option\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Option\",\"relationName\":\"FacilityToOption\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InsuranceFiles\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fileName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"varified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reservation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"InsuranceFilesToReservation\",\"relationFromFields\":[\"reservationId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Option\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Facility\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Facility\",\"relationName\":\"FacilityToOption\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Reservation\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"facilityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"approved\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Reservation_approved\",\"default\":\"pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fees\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"primaryContact\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"responsibleParty\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"doorAccess\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"doorsDetails\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"people\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"techDetails\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"techSupport\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalHours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inPerson\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentLinkID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticketMade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conflicts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InsuranceFiles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InsuranceFiles\",\"relationName\":\"InsuranceFilesToReservation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Category\",\"relationName\":\"CategoryToReservation\",\"relationFromFields\":[\"categoryId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Events\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Events\",\"relationName\":\"EventsToReservation\",\"relationFromFields\":[\"eventId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Facility\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Facility\",\"relationName\":\"FacilityToReservation\",\"relationFromFields\":[\"facilityId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ReservationToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ReservationDate\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ReservationDate\",\"relationName\":\"ReservationToReservationDate\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ReservationFees\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ReservationFees\",\"relationName\":\"ReservationToReservationFees\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ReservationDate\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"approved\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ReservationDate_approved\",\"default\":\"pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reservation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"ReservationToReservationDate\",\"relationFromFields\":[\"reservationId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ReservationFees\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"additionalFees\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"feesType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reservation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"ReservationToReservationFees\",\"relationFromFields\":[\"reservationId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Session\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessionToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"SessionToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"externalUser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"User_role\",\"default\":\"USER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Account\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Account\",\"relationName\":\"AccountToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reservation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"ReservationToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Session\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Session\",\"relationName\":\"SessionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"VerificationToken\":{\"dbName\":null,\"fields\":[{\"name\":\"identifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"identifier\",\"token\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"identifier\",\"token\"]}],\"isGenerated\":false}},\"enums\":{\"ReservationDate_approved\":{\"values\":[{\"name\":\"pending\",\"dbName\":null},{\"name\":\"approved\",\"dbName\":null},{\"name\":\"denied\",\"dbName\":null},{\"name\":\"canceled\",\"dbName\":null}],\"dbName\":null},\"Reservation_approved\":{\"values\":[{\"name\":\"pending\",\"dbName\":null},{\"name\":\"approved\",\"dbName\":null},{\"name\":\"denied\",\"dbName\":null},{\"name\":\"canceled\",\"dbName\":null}],\"dbName\":null},\"User_role\":{\"values\":[{\"name\":\"CAL_ADMIN\",\"dbName\":null},{\"name\":\"ADMIN_ADMIN\",\"dbName\":null},{\"name\":\"GR_ADMIN\",\"dbName\":null},{\"name\":\"LHS_ADMIN\",\"dbName\":null},{\"name\":\"LMS_ADMIN\",\"dbName\":null},{\"name\":\"WE_ADMIN\",\"dbName\":null},{\"name\":\"SO_ADMIN\",\"dbName\":null},{\"name\":\"SUP_ADMIN\",\"dbName\":null},{\"name\":\"USER\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

