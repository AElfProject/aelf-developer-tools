/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Address, Hash } from "../../aelf/core";
import { Empty } from "../../google/protobuf/empty";
import { Timestamp } from "../../google/protobuf/timestamp";
import { BoolValue, Int32Value, Int64Value } from "../../google/protobuf/wrappers";

export const protobufPackage = "";

export enum BingoType {
  Small = 0,
  Large = 1,
  UNRECOGNIZED = -1,
}

export function bingoTypeFromJSON(object: any): BingoType {
  switch (object) {
    case 0:
    case "Small":
      return BingoType.Small;
    case 1:
    case "Large":
      return BingoType.Large;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BingoType.UNRECOGNIZED;
  }
}

export function bingoTypeToJSON(object: BingoType): string {
  switch (object) {
    case BingoType.Small:
      return "Small";
    case BingoType.Large:
      return "Large";
    case BingoType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PlayInput {
  amount: number;
  type: BingoType;
}

export interface GetBoutInformationInput {
  playId: Hash | undefined;
}

export interface PlayerInformation {
  seed: Hash | undefined;
  bouts: BoutInformation[];
  registerTime: Date | undefined;
}

export interface DiceList {
  dices: number[];
}

export interface BoutInformation {
  playBlockHeight: number;
  amount: number;
  award: number;
  isComplete: boolean;
  playId: Hash | undefined;
  bingoBlockHeight: number;
  type: BingoType;
  randomNumber: number;
  roundNumber: number;
  playTime: Date | undefined;
  dices: DiceList | undefined;
  playerAddress: Address | undefined;
}

export interface LimitSettings {
  minAmount: number;
  maxAmount: number;
}

function createBasePlayInput(): PlayInput {
  return { amount: 0, type: 0 };
}

export const PlayInput = {
  encode(message: PlayInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).int64(message.amount);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlayInput {
    return {
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      type: isSet(object.type) ? bingoTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: PlayInput): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.type !== undefined && (obj.type = bingoTypeToJSON(message.type));
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayInput>, I>>(base?: I): PlayInput {
    return PlayInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlayInput>, I>>(object: I): PlayInput {
    const message = createBasePlayInput();
    message.amount = object.amount ?? 0;
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseGetBoutInformationInput(): GetBoutInformationInput {
  return { playId: undefined };
}

export const GetBoutInformationInput = {
  encode(message: GetBoutInformationInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playId !== undefined) {
      Hash.encode(message.playId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBoutInformationInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBoutInformationInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playId = Hash.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBoutInformationInput {
    return { playId: isSet(object.playId) ? Hash.fromJSON(object.playId) : undefined };
  },

  toJSON(message: GetBoutInformationInput): unknown {
    const obj: any = {};
    message.playId !== undefined && (obj.playId = message.playId ? Hash.toJSON(message.playId) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBoutInformationInput>, I>>(base?: I): GetBoutInformationInput {
    return GetBoutInformationInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBoutInformationInput>, I>>(object: I): GetBoutInformationInput {
    const message = createBaseGetBoutInformationInput();
    message.playId = (object.playId !== undefined && object.playId !== null)
      ? Hash.fromPartial(object.playId)
      : undefined;
    return message;
  },
};

function createBasePlayerInformation(): PlayerInformation {
  return { seed: undefined, bouts: [], registerTime: undefined };
}

export const PlayerInformation = {
  encode(message: PlayerInformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seed !== undefined) {
      Hash.encode(message.seed, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.bouts) {
      BoutInformation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.registerTime !== undefined) {
      Timestamp.encode(toTimestamp(message.registerTime), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerInformation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerInformation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.seed = Hash.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bouts.push(BoutInformation.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.registerTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlayerInformation {
    return {
      seed: isSet(object.seed) ? Hash.fromJSON(object.seed) : undefined,
      bouts: Array.isArray(object?.bouts) ? object.bouts.map((e: any) => BoutInformation.fromJSON(e)) : [],
      registerTime: isSet(object.registerTime) ? fromJsonTimestamp(object.registerTime) : undefined,
    };
  },

  toJSON(message: PlayerInformation): unknown {
    const obj: any = {};
    message.seed !== undefined && (obj.seed = message.seed ? Hash.toJSON(message.seed) : undefined);
    if (message.bouts) {
      obj.bouts = message.bouts.map((e) => e ? BoutInformation.toJSON(e) : undefined);
    } else {
      obj.bouts = [];
    }
    message.registerTime !== undefined && (obj.registerTime = message.registerTime.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerInformation>, I>>(base?: I): PlayerInformation {
    return PlayerInformation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlayerInformation>, I>>(object: I): PlayerInformation {
    const message = createBasePlayerInformation();
    message.seed = (object.seed !== undefined && object.seed !== null) ? Hash.fromPartial(object.seed) : undefined;
    message.bouts = object.bouts?.map((e) => BoutInformation.fromPartial(e)) || [];
    message.registerTime = object.registerTime ?? undefined;
    return message;
  },
};

function createBaseDiceList(): DiceList {
  return { dices: [] };
}

export const DiceList = {
  encode(message: DiceList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.dices) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiceList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.dices.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dices.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DiceList {
    return { dices: Array.isArray(object?.dices) ? object.dices.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: DiceList): unknown {
    const obj: any = {};
    if (message.dices) {
      obj.dices = message.dices.map((e) => Math.round(e));
    } else {
      obj.dices = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DiceList>, I>>(base?: I): DiceList {
    return DiceList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DiceList>, I>>(object: I): DiceList {
    const message = createBaseDiceList();
    message.dices = object.dices?.map((e) => e) || [];
    return message;
  },
};

function createBaseBoutInformation(): BoutInformation {
  return {
    playBlockHeight: 0,
    amount: 0,
    award: 0,
    isComplete: false,
    playId: undefined,
    bingoBlockHeight: 0,
    type: 0,
    randomNumber: 0,
    roundNumber: 0,
    playTime: undefined,
    dices: undefined,
    playerAddress: undefined,
  };
}

export const BoutInformation = {
  encode(message: BoutInformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playBlockHeight !== 0) {
      writer.uint32(8).int64(message.playBlockHeight);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int64(message.amount);
    }
    if (message.award !== 0) {
      writer.uint32(24).int64(message.award);
    }
    if (message.isComplete === true) {
      writer.uint32(32).bool(message.isComplete);
    }
    if (message.playId !== undefined) {
      Hash.encode(message.playId, writer.uint32(42).fork()).ldelim();
    }
    if (message.bingoBlockHeight !== 0) {
      writer.uint32(48).int64(message.bingoBlockHeight);
    }
    if (message.type !== 0) {
      writer.uint32(56).int32(message.type);
    }
    if (message.randomNumber !== 0) {
      writer.uint32(64).int32(message.randomNumber);
    }
    if (message.roundNumber !== 0) {
      writer.uint32(72).int64(message.roundNumber);
    }
    if (message.playTime !== undefined) {
      Timestamp.encode(toTimestamp(message.playTime), writer.uint32(82).fork()).ldelim();
    }
    if (message.dices !== undefined) {
      DiceList.encode(message.dices, writer.uint32(90).fork()).ldelim();
    }
    if (message.playerAddress !== undefined) {
      Address.encode(message.playerAddress, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BoutInformation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoutInformation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.playBlockHeight = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.award = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isComplete = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.playId = Hash.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.bingoBlockHeight = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.randomNumber = reader.int32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.roundNumber = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.playTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.dices = DiceList.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.playerAddress = Address.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BoutInformation {
    return {
      playBlockHeight: isSet(object.playBlockHeight) ? Number(object.playBlockHeight) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      award: isSet(object.award) ? Number(object.award) : 0,
      isComplete: isSet(object.isComplete) ? Boolean(object.isComplete) : false,
      playId: isSet(object.playId) ? Hash.fromJSON(object.playId) : undefined,
      bingoBlockHeight: isSet(object.bingoBlockHeight) ? Number(object.bingoBlockHeight) : 0,
      type: isSet(object.type) ? bingoTypeFromJSON(object.type) : 0,
      randomNumber: isSet(object.randomNumber) ? Number(object.randomNumber) : 0,
      roundNumber: isSet(object.roundNumber) ? Number(object.roundNumber) : 0,
      playTime: isSet(object.playTime) ? fromJsonTimestamp(object.playTime) : undefined,
      dices: isSet(object.dices) ? DiceList.fromJSON(object.dices) : undefined,
      playerAddress: isSet(object.playerAddress) ? Address.fromJSON(object.playerAddress) : undefined,
    };
  },

  toJSON(message: BoutInformation): unknown {
    const obj: any = {};
    message.playBlockHeight !== undefined && (obj.playBlockHeight = Math.round(message.playBlockHeight));
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.award !== undefined && (obj.award = Math.round(message.award));
    message.isComplete !== undefined && (obj.isComplete = message.isComplete);
    message.playId !== undefined && (obj.playId = message.playId ? Hash.toJSON(message.playId) : undefined);
    message.bingoBlockHeight !== undefined && (obj.bingoBlockHeight = Math.round(message.bingoBlockHeight));
    message.type !== undefined && (obj.type = bingoTypeToJSON(message.type));
    message.randomNumber !== undefined && (obj.randomNumber = Math.round(message.randomNumber));
    message.roundNumber !== undefined && (obj.roundNumber = Math.round(message.roundNumber));
    message.playTime !== undefined && (obj.playTime = message.playTime.toISOString());
    message.dices !== undefined && (obj.dices = message.dices ? DiceList.toJSON(message.dices) : undefined);
    message.playerAddress !== undefined &&
      (obj.playerAddress = message.playerAddress ? Address.toJSON(message.playerAddress) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<BoutInformation>, I>>(base?: I): BoutInformation {
    return BoutInformation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BoutInformation>, I>>(object: I): BoutInformation {
    const message = createBaseBoutInformation();
    message.playBlockHeight = object.playBlockHeight ?? 0;
    message.amount = object.amount ?? 0;
    message.award = object.award ?? 0;
    message.isComplete = object.isComplete ?? false;
    message.playId = (object.playId !== undefined && object.playId !== null)
      ? Hash.fromPartial(object.playId)
      : undefined;
    message.bingoBlockHeight = object.bingoBlockHeight ?? 0;
    message.type = object.type ?? 0;
    message.randomNumber = object.randomNumber ?? 0;
    message.roundNumber = object.roundNumber ?? 0;
    message.playTime = object.playTime ?? undefined;
    message.dices = (object.dices !== undefined && object.dices !== null)
      ? DiceList.fromPartial(object.dices)
      : undefined;
    message.playerAddress = (object.playerAddress !== undefined && object.playerAddress !== null)
      ? Address.fromPartial(object.playerAddress)
      : undefined;
    return message;
  },
};

function createBaseLimitSettings(): LimitSettings {
  return { minAmount: 0, maxAmount: 0 };
}

export const LimitSettings = {
  encode(message: LimitSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minAmount !== 0) {
      writer.uint32(8).int64(message.minAmount);
    }
    if (message.maxAmount !== 0) {
      writer.uint32(16).int64(message.maxAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LimitSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.minAmount = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxAmount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LimitSettings {
    return {
      minAmount: isSet(object.minAmount) ? Number(object.minAmount) : 0,
      maxAmount: isSet(object.maxAmount) ? Number(object.maxAmount) : 0,
    };
  },

  toJSON(message: LimitSettings): unknown {
    const obj: any = {};
    message.minAmount !== undefined && (obj.minAmount = Math.round(message.minAmount));
    message.maxAmount !== undefined && (obj.maxAmount = Math.round(message.maxAmount));
    return obj;
  },

  create<I extends Exact<DeepPartial<LimitSettings>, I>>(base?: I): LimitSettings {
    return LimitSettings.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LimitSettings>, I>>(object: I): LimitSettings {
    const message = createBaseLimitSettings();
    message.minAmount = object.minAmount ?? 0;
    message.maxAmount = object.maxAmount ?? 0;
    return message;
  },
};

export interface BingoGameContract {
  /** Actions */
  Register(request: Empty): Promise<Empty>;
  Play(request: PlayInput): Promise<Int64Value>;
  Bingo(request: Hash): Promise<BoolValue>;
  Quit(request: Empty): Promise<Empty>;
  SetLimitSettings(request: LimitSettings): Promise<Empty>;
  Initialize(request: Empty): Promise<Empty>;
  /** Views */
  GetAward(request: Hash): Promise<Int64Value>;
  GetPlayerInformation(request: Address): Promise<PlayerInformation>;
  GetLimitSettings(request: Empty): Promise<LimitSettings>;
  GetRandomNumber(request: Hash): Promise<Int32Value>;
  GetBoutInformation(request: GetBoutInformationInput): Promise<BoutInformation>;
}

export const BingoGameContractServiceName = "BingoGameContract";
export class BingoGameContractClientImpl implements BingoGameContract {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || BingoGameContractServiceName;
    this.rpc = rpc;
    this.Register = this.Register.bind(this);
    this.Play = this.Play.bind(this);
    this.Bingo = this.Bingo.bind(this);
    this.Quit = this.Quit.bind(this);
    this.SetLimitSettings = this.SetLimitSettings.bind(this);
    this.Initialize = this.Initialize.bind(this);
    this.GetAward = this.GetAward.bind(this);
    this.GetPlayerInformation = this.GetPlayerInformation.bind(this);
    this.GetLimitSettings = this.GetLimitSettings.bind(this);
    this.GetRandomNumber = this.GetRandomNumber.bind(this);
    this.GetBoutInformation = this.GetBoutInformation.bind(this);
  }
  Register(request: Empty): Promise<Empty> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request(this.service, "Register", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  Play(request: PlayInput): Promise<Int64Value> {
    const data = PlayInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "Play", data);
    return promise.then((data) => Int64Value.decode(_m0.Reader.create(data)));
  }

  Bingo(request: Hash): Promise<BoolValue> {
    const data = Hash.encode(request).finish();
    const promise = this.rpc.request(this.service, "Bingo", data);
    return promise.then((data) => BoolValue.decode(_m0.Reader.create(data)));
  }

  Quit(request: Empty): Promise<Empty> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request(this.service, "Quit", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  SetLimitSettings(request: LimitSettings): Promise<Empty> {
    const data = LimitSettings.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetLimitSettings", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  Initialize(request: Empty): Promise<Empty> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request(this.service, "Initialize", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  GetAward(request: Hash): Promise<Int64Value> {
    const data = Hash.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAward", data);
    return promise.then((data) => Int64Value.decode(_m0.Reader.create(data)));
  }

  GetPlayerInformation(request: Address): Promise<PlayerInformation> {
    const data = Address.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetPlayerInformation", data);
    return promise.then((data) => PlayerInformation.decode(_m0.Reader.create(data)));
  }

  GetLimitSettings(request: Empty): Promise<LimitSettings> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetLimitSettings", data);
    return promise.then((data) => LimitSettings.decode(_m0.Reader.create(data)));
  }

  GetRandomNumber(request: Hash): Promise<Int32Value> {
    const data = Hash.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetRandomNumber", data);
    return promise.then((data) => Int32Value.decode(_m0.Reader.create(data)));
  }

  GetBoutInformation(request: GetBoutInformationInput): Promise<BoutInformation> {
    const data = GetBoutInformationInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBoutInformation", data);
    return promise.then((data) => BoutInformation.decode(_m0.Reader.create(data)));
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
