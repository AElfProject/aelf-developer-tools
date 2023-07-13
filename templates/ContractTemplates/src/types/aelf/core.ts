/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "aelf";

export enum TransactionResultStatus {
  /** NOT_EXISTED - The execution result of the transaction does not exist. */
  NOT_EXISTED = 0,
  /** PENDING - The transaction is in the transaction pool waiting to be packaged. */
  PENDING = 1,
  /** FAILED - Transaction execution failed. */
  FAILED = 2,
  /** MINED - The transaction was successfully executed and successfully packaged into a block. */
  MINED = 3,
  /** CONFLICT - When executed in parallel, there are conflicts with other transactions. */
  CONFLICT = 4,
  /** PENDING_VALIDATION - The transaction is waiting for validation. */
  PENDING_VALIDATION = 5,
  /** NODE_VALIDATION_FAILED - Transaction validation failed. */
  NODE_VALIDATION_FAILED = 6,
  UNRECOGNIZED = -1,
}

export function transactionResultStatusFromJSON(object: any): TransactionResultStatus {
  switch (object) {
    case 0:
    case "NOT_EXISTED":
      return TransactionResultStatus.NOT_EXISTED;
    case 1:
    case "PENDING":
      return TransactionResultStatus.PENDING;
    case 2:
    case "FAILED":
      return TransactionResultStatus.FAILED;
    case 3:
    case "MINED":
      return TransactionResultStatus.MINED;
    case 4:
    case "CONFLICT":
      return TransactionResultStatus.CONFLICT;
    case 5:
    case "PENDING_VALIDATION":
      return TransactionResultStatus.PENDING_VALIDATION;
    case 6:
    case "NODE_VALIDATION_FAILED":
      return TransactionResultStatus.NODE_VALIDATION_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransactionResultStatus.UNRECOGNIZED;
  }
}

export function transactionResultStatusToJSON(object: TransactionResultStatus): string {
  switch (object) {
    case TransactionResultStatus.NOT_EXISTED:
      return "NOT_EXISTED";
    case TransactionResultStatus.PENDING:
      return "PENDING";
    case TransactionResultStatus.FAILED:
      return "FAILED";
    case TransactionResultStatus.MINED:
      return "MINED";
    case TransactionResultStatus.CONFLICT:
      return "CONFLICT";
    case TransactionResultStatus.PENDING_VALIDATION:
      return "PENDING_VALIDATION";
    case TransactionResultStatus.NODE_VALIDATION_FAILED:
      return "NODE_VALIDATION_FAILED";
    case TransactionResultStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Transaction {
  /** The address of the sender of the transaction. */
  from:
    | Address
    | undefined;
  /** The address of the contract when calling a contract. */
  to:
    | Address
    | undefined;
  /** The height of the referenced block hash. */
  refBlockNumber: number;
  /** The first four bytes of the referenced block hash. */
  refBlockPrefix: Uint8Array;
  /** The name of a method in the smart contract at the To address. */
  methodName: string;
  /** The parameters to pass to the smart contract method. */
  params: Uint8Array;
  /**
   * When signing a transaction it’s actually a subset of the fields: from/to and the target method as well as
   * the parameter that were given. It also contains the reference block number and prefix.
   */
  signature: Uint8Array;
}

export interface StatePath {
  /** The partial path of the state path. */
  parts: string[];
}

export interface ScopedStatePath {
  /** The scope address, which will be the contract address. */
  address:
    | Address
    | undefined;
  /** The path of contract state. */
  path: StatePath | undefined;
}

export interface TransactionResult {
  /** The transaction id. */
  transactionId:
    | Hash
    | undefined;
  /** The transaction result status. */
  status: TransactionResultStatus;
  /** The log events. */
  logs: LogEvent[];
  /**
   * Bloom filter for transaction logs. A transaction log event can be defined in the contract and stored
   * in the bloom filter after the transaction is executed. Through this filter, we can quickly search for
   * and determine whether a log exists in the transaction result.
   */
  bloom: Uint8Array;
  /** The return value of the transaction execution. */
  returnValue: Uint8Array;
  /** The height of the block hat packages the transaction. */
  blockNumber: number;
  /** The hash of the block hat packages the transaction. */
  blockHash:
    | Hash
    | undefined;
  /** Failed execution error message. */
  error: string;
}

export interface LogEvent {
  /** The contract address. */
  address:
    | Address
    | undefined;
  /** The name of the log event. */
  name: string;
  /** The indexed data, used to calculate bloom. */
  indexed: Uint8Array[];
  /** The non indexed data. */
  nonIndexed: Uint8Array;
}

export interface SmartContractRegistration {
  /** The category of contract code(0: C#). */
  category: number;
  /** The byte array of the contract code. */
  code: Uint8Array;
  /** The hash of the contract code. */
  codeHash:
    | Hash
    | undefined;
  /** Whether it is a system contract. */
  isSystemContract: boolean;
  /** The version of the current contract. */
  version: number;
  /** The version of the contract. */
  contractVersion: string;
  /** The address of the current contract. */
  contractAddress:
    | Address
    | undefined;
  /** Indicates if the contract is the user contract. */
  isUserContract: boolean;
}

export interface TransactionExecutingStateSet {
  /** The changed states. */
  writes: { [key: string]: Uint8Array };
  /** The read states. */
  reads: { [key: string]: boolean };
  /** The deleted states. */
  deletes: { [key: string]: boolean };
}

export interface TransactionExecutingStateSet_WritesEntry {
  key: string;
  value: Uint8Array;
}

export interface TransactionExecutingStateSet_ReadsEntry {
  key: string;
  value: boolean;
}

export interface TransactionExecutingStateSet_DeletesEntry {
  key: string;
  value: boolean;
}

export interface Address {
  value: Uint8Array;
}

export interface Hash {
  value: Uint8Array;
}

export interface SInt32Value {
  value: number;
}

export interface SInt64Value {
  value: number;
}

export interface MerklePath {
  /** The merkle path nodes. */
  merklePathNodes: MerklePathNode[];
}

export interface MerklePathNode {
  /** The node hash. */
  hash:
    | Hash
    | undefined;
  /** Whether it is a left child node. */
  isLeftChildNode: boolean;
}

export interface BinaryMerkleTree {
  /** The leaf nodes. */
  nodes: Hash[];
  /** The root node hash. */
  root:
    | Hash
    | undefined;
  /** The count of leaf node. */
  leafCount: number;
}

export interface BigIntValue {
  value: string;
}

function createBaseTransaction(): Transaction {
  return {
    from: undefined,
    to: undefined,
    refBlockNumber: 0,
    refBlockPrefix: new Uint8Array(0),
    methodName: "",
    params: new Uint8Array(0),
    signature: new Uint8Array(0),
  };
}

export const Transaction = {
  encode(message: Transaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== undefined) {
      Address.encode(message.from, writer.uint32(10).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Address.encode(message.to, writer.uint32(18).fork()).ldelim();
    }
    if (message.refBlockNumber !== 0) {
      writer.uint32(24).int64(message.refBlockNumber);
    }
    if (message.refBlockPrefix.length !== 0) {
      writer.uint32(34).bytes(message.refBlockPrefix);
    }
    if (message.methodName !== "") {
      writer.uint32(42).string(message.methodName);
    }
    if (message.params.length !== 0) {
      writer.uint32(50).bytes(message.params);
    }
    if (message.signature.length !== 0) {
      writer.uint32(80002).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.from = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.to = Address.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.refBlockNumber = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.refBlockPrefix = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.methodName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.params = reader.bytes();
          continue;
        case 10000:
          if (tag !== 80002) {
            break;
          }

          message.signature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    return {
      from: isSet(object.from) ? Address.fromJSON(object.from) : undefined,
      to: isSet(object.to) ? Address.fromJSON(object.to) : undefined,
      refBlockNumber: isSet(object.refBlockNumber) ? Number(object.refBlockNumber) : 0,
      refBlockPrefix: isSet(object.refBlockPrefix) ? bytesFromBase64(object.refBlockPrefix) : new Uint8Array(0),
      methodName: isSet(object.methodName) ? String(object.methodName) : "",
      params: isSet(object.params) ? bytesFromBase64(object.params) : new Uint8Array(0),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from ? Address.toJSON(message.from) : undefined);
    message.to !== undefined && (obj.to = message.to ? Address.toJSON(message.to) : undefined);
    message.refBlockNumber !== undefined && (obj.refBlockNumber = Math.round(message.refBlockNumber));
    message.refBlockPrefix !== undefined &&
      (obj.refBlockPrefix = base64FromBytes(
        message.refBlockPrefix !== undefined ? message.refBlockPrefix : new Uint8Array(0),
      ));
    message.methodName !== undefined && (obj.methodName = message.methodName);
    message.params !== undefined &&
      (obj.params = base64FromBytes(message.params !== undefined ? message.params : new Uint8Array(0)));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<Transaction>, I>>(base?: I): Transaction {
    return Transaction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Transaction>, I>>(object: I): Transaction {
    const message = createBaseTransaction();
    message.from = (object.from !== undefined && object.from !== null) ? Address.fromPartial(object.from) : undefined;
    message.to = (object.to !== undefined && object.to !== null) ? Address.fromPartial(object.to) : undefined;
    message.refBlockNumber = object.refBlockNumber ?? 0;
    message.refBlockPrefix = object.refBlockPrefix ?? new Uint8Array(0);
    message.methodName = object.methodName ?? "";
    message.params = object.params ?? new Uint8Array(0);
    message.signature = object.signature ?? new Uint8Array(0);
    return message;
  },
};

function createBaseStatePath(): StatePath {
  return { parts: [] };
}

export const StatePath = {
  encode(message: StatePath, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.parts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatePath {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parts.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatePath {
    return { parts: Array.isArray(object?.parts) ? object.parts.map((e: any) => String(e)) : [] };
  },

  toJSON(message: StatePath): unknown {
    const obj: any = {};
    if (message.parts) {
      obj.parts = message.parts.map((e) => e);
    } else {
      obj.parts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatePath>, I>>(base?: I): StatePath {
    return StatePath.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StatePath>, I>>(object: I): StatePath {
    const message = createBaseStatePath();
    message.parts = object.parts?.map((e) => e) || [];
    return message;
  },
};

function createBaseScopedStatePath(): ScopedStatePath {
  return { address: undefined, path: undefined };
}

export const ScopedStatePath = {
  encode(message: ScopedStatePath, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.path !== undefined) {
      StatePath.encode(message.path, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScopedStatePath {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScopedStatePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.path = StatePath.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScopedStatePath {
    return {
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
      path: isSet(object.path) ? StatePath.fromJSON(object.path) : undefined,
    };
  },

  toJSON(message: ScopedStatePath): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address ? Address.toJSON(message.address) : undefined);
    message.path !== undefined && (obj.path = message.path ? StatePath.toJSON(message.path) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScopedStatePath>, I>>(base?: I): ScopedStatePath {
    return ScopedStatePath.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScopedStatePath>, I>>(object: I): ScopedStatePath {
    const message = createBaseScopedStatePath();
    message.address = (object.address !== undefined && object.address !== null)
      ? Address.fromPartial(object.address)
      : undefined;
    message.path = (object.path !== undefined && object.path !== null) ? StatePath.fromPartial(object.path) : undefined;
    return message;
  },
};

function createBaseTransactionResult(): TransactionResult {
  return {
    transactionId: undefined,
    status: 0,
    logs: [],
    bloom: new Uint8Array(0),
    returnValue: new Uint8Array(0),
    blockNumber: 0,
    blockHash: undefined,
    error: "",
  };
}

export const TransactionResult = {
  encode(message: TransactionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionId !== undefined) {
      Hash.encode(message.transactionId, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    for (const v of message.logs) {
      LogEvent.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.bloom.length !== 0) {
      writer.uint32(34).bytes(message.bloom);
    }
    if (message.returnValue.length !== 0) {
      writer.uint32(42).bytes(message.returnValue);
    }
    if (message.blockNumber !== 0) {
      writer.uint32(48).int64(message.blockNumber);
    }
    if (message.blockHash !== undefined) {
      Hash.encode(message.blockHash, writer.uint32(58).fork()).ldelim();
    }
    if (message.error !== "") {
      writer.uint32(82).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionId = Hash.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.logs.push(LogEvent.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bloom = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.returnValue = reader.bytes();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.blockNumber = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.blockHash = Hash.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionResult {
    return {
      transactionId: isSet(object.transactionId) ? Hash.fromJSON(object.transactionId) : undefined,
      status: isSet(object.status) ? transactionResultStatusFromJSON(object.status) : 0,
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => LogEvent.fromJSON(e)) : [],
      bloom: isSet(object.bloom) ? bytesFromBase64(object.bloom) : new Uint8Array(0),
      returnValue: isSet(object.returnValue) ? bytesFromBase64(object.returnValue) : new Uint8Array(0),
      blockNumber: isSet(object.blockNumber) ? Number(object.blockNumber) : 0,
      blockHash: isSet(object.blockHash) ? Hash.fromJSON(object.blockHash) : undefined,
      error: isSet(object.error) ? String(object.error) : "",
    };
  },

  toJSON(message: TransactionResult): unknown {
    const obj: any = {};
    message.transactionId !== undefined &&
      (obj.transactionId = message.transactionId ? Hash.toJSON(message.transactionId) : undefined);
    message.status !== undefined && (obj.status = transactionResultStatusToJSON(message.status));
    if (message.logs) {
      obj.logs = message.logs.map((e) => e ? LogEvent.toJSON(e) : undefined);
    } else {
      obj.logs = [];
    }
    message.bloom !== undefined &&
      (obj.bloom = base64FromBytes(message.bloom !== undefined ? message.bloom : new Uint8Array(0)));
    message.returnValue !== undefined &&
      (obj.returnValue = base64FromBytes(message.returnValue !== undefined ? message.returnValue : new Uint8Array(0)));
    message.blockNumber !== undefined && (obj.blockNumber = Math.round(message.blockNumber));
    message.blockHash !== undefined && (obj.blockHash = message.blockHash ? Hash.toJSON(message.blockHash) : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionResult>, I>>(base?: I): TransactionResult {
    return TransactionResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransactionResult>, I>>(object: I): TransactionResult {
    const message = createBaseTransactionResult();
    message.transactionId = (object.transactionId !== undefined && object.transactionId !== null)
      ? Hash.fromPartial(object.transactionId)
      : undefined;
    message.status = object.status ?? 0;
    message.logs = object.logs?.map((e) => LogEvent.fromPartial(e)) || [];
    message.bloom = object.bloom ?? new Uint8Array(0);
    message.returnValue = object.returnValue ?? new Uint8Array(0);
    message.blockNumber = object.blockNumber ?? 0;
    message.blockHash = (object.blockHash !== undefined && object.blockHash !== null)
      ? Hash.fromPartial(object.blockHash)
      : undefined;
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseLogEvent(): LogEvent {
  return { address: undefined, name: "", indexed: [], nonIndexed: new Uint8Array(0) };
}

export const LogEvent = {
  encode(message: LogEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.indexed) {
      writer.uint32(26).bytes(v!);
    }
    if (message.nonIndexed.length !== 0) {
      writer.uint32(34).bytes(message.nonIndexed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.indexed.push(reader.bytes());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nonIndexed = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogEvent {
    return {
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      indexed: Array.isArray(object?.indexed) ? object.indexed.map((e: any) => bytesFromBase64(e)) : [],
      nonIndexed: isSet(object.nonIndexed) ? bytesFromBase64(object.nonIndexed) : new Uint8Array(0),
    };
  },

  toJSON(message: LogEvent): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address ? Address.toJSON(message.address) : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.indexed) {
      obj.indexed = message.indexed.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array(0)));
    } else {
      obj.indexed = [];
    }
    message.nonIndexed !== undefined &&
      (obj.nonIndexed = base64FromBytes(message.nonIndexed !== undefined ? message.nonIndexed : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<LogEvent>, I>>(base?: I): LogEvent {
    return LogEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LogEvent>, I>>(object: I): LogEvent {
    const message = createBaseLogEvent();
    message.address = (object.address !== undefined && object.address !== null)
      ? Address.fromPartial(object.address)
      : undefined;
    message.name = object.name ?? "";
    message.indexed = object.indexed?.map((e) => e) || [];
    message.nonIndexed = object.nonIndexed ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSmartContractRegistration(): SmartContractRegistration {
  return {
    category: 0,
    code: new Uint8Array(0),
    codeHash: undefined,
    isSystemContract: false,
    version: 0,
    contractVersion: "",
    contractAddress: undefined,
    isUserContract: false,
  };
}

export const SmartContractRegistration = {
  encode(message: SmartContractRegistration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.category !== 0) {
      writer.uint32(8).sint32(message.category);
    }
    if (message.code.length !== 0) {
      writer.uint32(18).bytes(message.code);
    }
    if (message.codeHash !== undefined) {
      Hash.encode(message.codeHash, writer.uint32(26).fork()).ldelim();
    }
    if (message.isSystemContract === true) {
      writer.uint32(32).bool(message.isSystemContract);
    }
    if (message.version !== 0) {
      writer.uint32(40).int32(message.version);
    }
    if (message.contractVersion !== "") {
      writer.uint32(50).string(message.contractVersion);
    }
    if (message.contractAddress !== undefined) {
      Address.encode(message.contractAddress, writer.uint32(58).fork()).ldelim();
    }
    if (message.isUserContract === true) {
      writer.uint32(64).bool(message.isUserContract);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SmartContractRegistration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSmartContractRegistration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.category = reader.sint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.code = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.codeHash = Hash.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isSystemContract = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.version = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.contractVersion = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.contractAddress = Address.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.isUserContract = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SmartContractRegistration {
    return {
      category: isSet(object.category) ? Number(object.category) : 0,
      code: isSet(object.code) ? bytesFromBase64(object.code) : new Uint8Array(0),
      codeHash: isSet(object.codeHash) ? Hash.fromJSON(object.codeHash) : undefined,
      isSystemContract: isSet(object.isSystemContract) ? Boolean(object.isSystemContract) : false,
      version: isSet(object.version) ? Number(object.version) : 0,
      contractVersion: isSet(object.contractVersion) ? String(object.contractVersion) : "",
      contractAddress: isSet(object.contractAddress) ? Address.fromJSON(object.contractAddress) : undefined,
      isUserContract: isSet(object.isUserContract) ? Boolean(object.isUserContract) : false,
    };
  },

  toJSON(message: SmartContractRegistration): unknown {
    const obj: any = {};
    message.category !== undefined && (obj.category = Math.round(message.category));
    message.code !== undefined &&
      (obj.code = base64FromBytes(message.code !== undefined ? message.code : new Uint8Array(0)));
    message.codeHash !== undefined && (obj.codeHash = message.codeHash ? Hash.toJSON(message.codeHash) : undefined);
    message.isSystemContract !== undefined && (obj.isSystemContract = message.isSystemContract);
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.contractVersion !== undefined && (obj.contractVersion = message.contractVersion);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress ? Address.toJSON(message.contractAddress) : undefined);
    message.isUserContract !== undefined && (obj.isUserContract = message.isUserContract);
    return obj;
  },

  create<I extends Exact<DeepPartial<SmartContractRegistration>, I>>(base?: I): SmartContractRegistration {
    return SmartContractRegistration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SmartContractRegistration>, I>>(object: I): SmartContractRegistration {
    const message = createBaseSmartContractRegistration();
    message.category = object.category ?? 0;
    message.code = object.code ?? new Uint8Array(0);
    message.codeHash = (object.codeHash !== undefined && object.codeHash !== null)
      ? Hash.fromPartial(object.codeHash)
      : undefined;
    message.isSystemContract = object.isSystemContract ?? false;
    message.version = object.version ?? 0;
    message.contractVersion = object.contractVersion ?? "";
    message.contractAddress = (object.contractAddress !== undefined && object.contractAddress !== null)
      ? Address.fromPartial(object.contractAddress)
      : undefined;
    message.isUserContract = object.isUserContract ?? false;
    return message;
  },
};

function createBaseTransactionExecutingStateSet(): TransactionExecutingStateSet {
  return { writes: {}, reads: {}, deletes: {} };
}

export const TransactionExecutingStateSet = {
  encode(message: TransactionExecutingStateSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.writes).forEach(([key, value]) => {
      TransactionExecutingStateSet_WritesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    Object.entries(message.reads).forEach(([key, value]) => {
      TransactionExecutingStateSet_ReadsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    Object.entries(message.deletes).forEach(([key, value]) => {
      TransactionExecutingStateSet_DeletesEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionExecutingStateSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionExecutingStateSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = TransactionExecutingStateSet_WritesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.writes[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = TransactionExecutingStateSet_ReadsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.reads[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = TransactionExecutingStateSet_DeletesEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.deletes[entry3.key] = entry3.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionExecutingStateSet {
    return {
      writes: isObject(object.writes)
        ? Object.entries(object.writes).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
          acc[key] = bytesFromBase64(value as string);
          return acc;
        }, {})
        : {},
      reads: isObject(object.reads)
        ? Object.entries(object.reads).reduce<{ [key: string]: boolean }>((acc, [key, value]) => {
          acc[key] = Boolean(value);
          return acc;
        }, {})
        : {},
      deletes: isObject(object.deletes)
        ? Object.entries(object.deletes).reduce<{ [key: string]: boolean }>((acc, [key, value]) => {
          acc[key] = Boolean(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: TransactionExecutingStateSet): unknown {
    const obj: any = {};
    obj.writes = {};
    if (message.writes) {
      Object.entries(message.writes).forEach(([k, v]) => {
        obj.writes[k] = base64FromBytes(v);
      });
    }
    obj.reads = {};
    if (message.reads) {
      Object.entries(message.reads).forEach(([k, v]) => {
        obj.reads[k] = v;
      });
    }
    obj.deletes = {};
    if (message.deletes) {
      Object.entries(message.deletes).forEach(([k, v]) => {
        obj.deletes[k] = v;
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionExecutingStateSet>, I>>(base?: I): TransactionExecutingStateSet {
    return TransactionExecutingStateSet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransactionExecutingStateSet>, I>>(object: I): TransactionExecutingStateSet {
    const message = createBaseTransactionExecutingStateSet();
    message.writes = Object.entries(object.writes ?? {}).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    message.reads = Object.entries(object.reads ?? {}).reduce<{ [key: string]: boolean }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Boolean(value);
      }
      return acc;
    }, {});
    message.deletes = Object.entries(object.deletes ?? {}).reduce<{ [key: string]: boolean }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Boolean(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseTransactionExecutingStateSet_WritesEntry(): TransactionExecutingStateSet_WritesEntry {
  return { key: "", value: new Uint8Array(0) };
}

export const TransactionExecutingStateSet_WritesEntry = {
  encode(message: TransactionExecutingStateSet_WritesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionExecutingStateSet_WritesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionExecutingStateSet_WritesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionExecutingStateSet_WritesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
    };
  },

  toJSON(message: TransactionExecutingStateSet_WritesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionExecutingStateSet_WritesEntry>, I>>(
    base?: I,
  ): TransactionExecutingStateSet_WritesEntry {
    return TransactionExecutingStateSet_WritesEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransactionExecutingStateSet_WritesEntry>, I>>(
    object: I,
  ): TransactionExecutingStateSet_WritesEntry {
    const message = createBaseTransactionExecutingStateSet_WritesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseTransactionExecutingStateSet_ReadsEntry(): TransactionExecutingStateSet_ReadsEntry {
  return { key: "", value: false };
}

export const TransactionExecutingStateSet_ReadsEntry = {
  encode(message: TransactionExecutingStateSet_ReadsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionExecutingStateSet_ReadsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionExecutingStateSet_ReadsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionExecutingStateSet_ReadsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Boolean(object.value) : false,
    };
  },

  toJSON(message: TransactionExecutingStateSet_ReadsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionExecutingStateSet_ReadsEntry>, I>>(
    base?: I,
  ): TransactionExecutingStateSet_ReadsEntry {
    return TransactionExecutingStateSet_ReadsEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransactionExecutingStateSet_ReadsEntry>, I>>(
    object: I,
  ): TransactionExecutingStateSet_ReadsEntry {
    const message = createBaseTransactionExecutingStateSet_ReadsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseTransactionExecutingStateSet_DeletesEntry(): TransactionExecutingStateSet_DeletesEntry {
  return { key: "", value: false };
}

export const TransactionExecutingStateSet_DeletesEntry = {
  encode(message: TransactionExecutingStateSet_DeletesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionExecutingStateSet_DeletesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionExecutingStateSet_DeletesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionExecutingStateSet_DeletesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Boolean(object.value) : false,
    };
  },

  toJSON(message: TransactionExecutingStateSet_DeletesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionExecutingStateSet_DeletesEntry>, I>>(
    base?: I,
  ): TransactionExecutingStateSet_DeletesEntry {
    return TransactionExecutingStateSet_DeletesEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransactionExecutingStateSet_DeletesEntry>, I>>(
    object: I,
  ): TransactionExecutingStateSet_DeletesEntry {
    const message = createBaseTransactionExecutingStateSet_DeletesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseAddress(): Address {
  return { value: new Uint8Array(0) };
}

export const Address = {
  encode(message: Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Address {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<Address>, I>>(base?: I): Address {
    return Address.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Address>, I>>(object: I): Address {
    const message = createBaseAddress();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseHash(): Hash {
  return { value: new Uint8Array(0) };
}

export const Hash = {
  encode(message: Hash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Hash {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Hash {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: Hash): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<Hash>, I>>(base?: I): Hash {
    return Hash.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Hash>, I>>(object: I): Hash {
    const message = createBaseHash();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSInt32Value(): SInt32Value {
  return { value: 0 };
}

export const SInt32Value = {
  encode(message: SInt32Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).sint32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SInt32Value {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSInt32Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.sint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SInt32Value {
    return { value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: SInt32Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<SInt32Value>, I>>(base?: I): SInt32Value {
    return SInt32Value.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SInt32Value>, I>>(object: I): SInt32Value {
    const message = createBaseSInt32Value();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseSInt64Value(): SInt64Value {
  return { value: 0 };
}

export const SInt64Value = {
  encode(message: SInt64Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).sint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SInt64Value {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSInt64Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = longToNumber(reader.sint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SInt64Value {
    return { value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: SInt64Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<SInt64Value>, I>>(base?: I): SInt64Value {
    return SInt64Value.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SInt64Value>, I>>(object: I): SInt64Value {
    const message = createBaseSInt64Value();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseMerklePath(): MerklePath {
  return { merklePathNodes: [] };
}

export const MerklePath = {
  encode(message: MerklePath, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.merklePathNodes) {
      MerklePathNode.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MerklePath {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerklePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.merklePathNodes.push(MerklePathNode.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MerklePath {
    return {
      merklePathNodes: Array.isArray(object?.merklePathNodes)
        ? object.merklePathNodes.map((e: any) => MerklePathNode.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MerklePath): unknown {
    const obj: any = {};
    if (message.merklePathNodes) {
      obj.merklePathNodes = message.merklePathNodes.map((e) => e ? MerklePathNode.toJSON(e) : undefined);
    } else {
      obj.merklePathNodes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MerklePath>, I>>(base?: I): MerklePath {
    return MerklePath.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MerklePath>, I>>(object: I): MerklePath {
    const message = createBaseMerklePath();
    message.merklePathNodes = object.merklePathNodes?.map((e) => MerklePathNode.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMerklePathNode(): MerklePathNode {
  return { hash: undefined, isLeftChildNode: false };
}

export const MerklePathNode = {
  encode(message: MerklePathNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== undefined) {
      Hash.encode(message.hash, writer.uint32(10).fork()).ldelim();
    }
    if (message.isLeftChildNode === true) {
      writer.uint32(16).bool(message.isLeftChildNode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MerklePathNode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerklePathNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hash = Hash.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isLeftChildNode = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MerklePathNode {
    return {
      hash: isSet(object.hash) ? Hash.fromJSON(object.hash) : undefined,
      isLeftChildNode: isSet(object.isLeftChildNode) ? Boolean(object.isLeftChildNode) : false,
    };
  },

  toJSON(message: MerklePathNode): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash ? Hash.toJSON(message.hash) : undefined);
    message.isLeftChildNode !== undefined && (obj.isLeftChildNode = message.isLeftChildNode);
    return obj;
  },

  create<I extends Exact<DeepPartial<MerklePathNode>, I>>(base?: I): MerklePathNode {
    return MerklePathNode.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MerklePathNode>, I>>(object: I): MerklePathNode {
    const message = createBaseMerklePathNode();
    message.hash = (object.hash !== undefined && object.hash !== null) ? Hash.fromPartial(object.hash) : undefined;
    message.isLeftChildNode = object.isLeftChildNode ?? false;
    return message;
  },
};

function createBaseBinaryMerkleTree(): BinaryMerkleTree {
  return { nodes: [], root: undefined, leafCount: 0 };
}

export const BinaryMerkleTree = {
  encode(message: BinaryMerkleTree, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nodes) {
      Hash.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.root !== undefined) {
      Hash.encode(message.root, writer.uint32(18).fork()).ldelim();
    }
    if (message.leafCount !== 0) {
      writer.uint32(24).int32(message.leafCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BinaryMerkleTree {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBinaryMerkleTree();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodes.push(Hash.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.root = Hash.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.leafCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BinaryMerkleTree {
    return {
      nodes: Array.isArray(object?.nodes) ? object.nodes.map((e: any) => Hash.fromJSON(e)) : [],
      root: isSet(object.root) ? Hash.fromJSON(object.root) : undefined,
      leafCount: isSet(object.leafCount) ? Number(object.leafCount) : 0,
    };
  },

  toJSON(message: BinaryMerkleTree): unknown {
    const obj: any = {};
    if (message.nodes) {
      obj.nodes = message.nodes.map((e) => e ? Hash.toJSON(e) : undefined);
    } else {
      obj.nodes = [];
    }
    message.root !== undefined && (obj.root = message.root ? Hash.toJSON(message.root) : undefined);
    message.leafCount !== undefined && (obj.leafCount = Math.round(message.leafCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<BinaryMerkleTree>, I>>(base?: I): BinaryMerkleTree {
    return BinaryMerkleTree.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BinaryMerkleTree>, I>>(object: I): BinaryMerkleTree {
    const message = createBaseBinaryMerkleTree();
    message.nodes = object.nodes?.map((e) => Hash.fromPartial(e)) || [];
    message.root = (object.root !== undefined && object.root !== null) ? Hash.fromPartial(object.root) : undefined;
    message.leafCount = object.leafCount ?? 0;
    return message;
  },
};

function createBaseBigIntValue(): BigIntValue {
  return { value: "" };
}

export const BigIntValue = {
  encode(message: BigIntValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BigIntValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBigIntValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BigIntValue {
    return { value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: BigIntValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<BigIntValue>, I>>(base?: I): BigIntValue {
    return BigIntValue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BigIntValue>, I>>(object: I): BigIntValue {
    const message = createBaseBigIntValue();
    message.value = object.value ?? "";
    return message;
  },
};

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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
