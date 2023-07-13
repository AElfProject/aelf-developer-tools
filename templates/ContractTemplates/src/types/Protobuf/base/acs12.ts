/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "acs12";

/**
 * AElf Standards ACS12(User Contract Standard)
 *
 * Used to manage user contract.
 */

/** Specified method fee for user contract. */
export interface UserContractMethodFees {
  /** List of fees to be charged. */
  fees: UserContractMethodFee[];
  /** Optional based on the implementation of SetConfiguration method. */
  isSizeFeeFree: boolean;
}

export interface UserContractMethodFee {
  /** The token symbol of the method fee. */
  symbol: string;
  /** The amount of fees to be charged. */
  basicFee: number;
}

function createBaseUserContractMethodFees(): UserContractMethodFees {
  return { fees: [], isSizeFeeFree: false };
}

export const UserContractMethodFees = {
  encode(message: UserContractMethodFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fees) {
      UserContractMethodFee.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.isSizeFeeFree === true) {
      writer.uint32(24).bool(message.isSizeFeeFree);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserContractMethodFees {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserContractMethodFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fees.push(UserContractMethodFee.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isSizeFeeFree = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserContractMethodFees {
    return {
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => UserContractMethodFee.fromJSON(e)) : [],
      isSizeFeeFree: isSet(object.isSizeFeeFree) ? Boolean(object.isSizeFeeFree) : false,
    };
  },

  toJSON(message: UserContractMethodFees): unknown {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map((e) => e ? UserContractMethodFee.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }
    message.isSizeFeeFree !== undefined && (obj.isSizeFeeFree = message.isSizeFeeFree);
    return obj;
  },

  create<I extends Exact<DeepPartial<UserContractMethodFees>, I>>(base?: I): UserContractMethodFees {
    return UserContractMethodFees.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserContractMethodFees>, I>>(object: I): UserContractMethodFees {
    const message = createBaseUserContractMethodFees();
    message.fees = object.fees?.map((e) => UserContractMethodFee.fromPartial(e)) || [];
    message.isSizeFeeFree = object.isSizeFeeFree ?? false;
    return message;
  },
};

function createBaseUserContractMethodFee(): UserContractMethodFee {
  return { symbol: "", basicFee: 0 };
}

export const UserContractMethodFee = {
  encode(message: UserContractMethodFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.basicFee !== 0) {
      writer.uint32(16).int64(message.basicFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserContractMethodFee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserContractMethodFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.basicFee = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserContractMethodFee {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      basicFee: isSet(object.basicFee) ? Number(object.basicFee) : 0,
    };
  },

  toJSON(message: UserContractMethodFee): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.basicFee !== undefined && (obj.basicFee = Math.round(message.basicFee));
    return obj;
  },

  create<I extends Exact<DeepPartial<UserContractMethodFee>, I>>(base?: I): UserContractMethodFee {
    return UserContractMethodFee.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserContractMethodFee>, I>>(object: I): UserContractMethodFee {
    const message = createBaseUserContractMethodFee();
    message.symbol = object.symbol ?? "";
    message.basicFee = object.basicFee ?? 0;
    return message;
  },
};

export interface UserContract {
}

export const UserContractServiceName = "acs12.UserContract";
export class UserContractClientImpl implements UserContract {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || UserContractServiceName;
    this.rpc = rpc;
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
