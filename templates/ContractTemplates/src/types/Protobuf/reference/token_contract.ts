/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Address, Hash, MerklePath } from "../../aelf/core";
import { Empty } from "../../google/protobuf/empty";

export const protobufPackage = "token";

export enum FeeTypeEnum {
  READ = 0,
  STORAGE = 1,
  WRITE = 2,
  TRAFFIC = 3,
  TX = 4,
  UNRECOGNIZED = -1,
}

export function feeTypeEnumFromJSON(object: any): FeeTypeEnum {
  switch (object) {
    case 0:
    case "READ":
      return FeeTypeEnum.READ;
    case 1:
    case "STORAGE":
      return FeeTypeEnum.STORAGE;
    case 2:
    case "WRITE":
      return FeeTypeEnum.WRITE;
    case 3:
    case "TRAFFIC":
      return FeeTypeEnum.TRAFFIC;
    case 4:
    case "TX":
      return FeeTypeEnum.TX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeeTypeEnum.UNRECOGNIZED;
  }
}

export function feeTypeEnumToJSON(object: FeeTypeEnum): string {
  switch (object) {
    case FeeTypeEnum.READ:
      return "READ";
    case FeeTypeEnum.STORAGE:
      return "STORAGE";
    case FeeTypeEnum.WRITE:
      return "WRITE";
    case FeeTypeEnum.TRAFFIC:
      return "TRAFFIC";
    case FeeTypeEnum.TX:
      return "TX";
    case FeeTypeEnum.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TokenInfo {
  symbol: string;
  tokenName: string;
  supply: number;
  totalSupply: number;
  decimals: number;
  issuer: Address | undefined;
  isBurnable: boolean;
  issueChainId: number;
  issued: number;
}

export interface CreateInput {
  symbol: string;
  tokenName: string;
  totalSupply: number;
  decimals: number;
  issuer: Address | undefined;
  isBurnable: boolean;
  lockWhiteList: Address[];
  issueChainId: number;
}

export interface RegisterNativeTokenInfoInput {
  symbol: string;
  tokenName: string;
  totalSupply: number;
  decimals: number;
  issuer: Address | undefined;
  isBurnable: boolean;
  issueChainId: number;
}

export interface IssueInput {
  symbol: string;
  amount: number;
  memo: string;
  to: Address | undefined;
}

export interface TransferInput {
  to: Address | undefined;
  symbol: string;
  amount: number;
  memo: string;
}

export interface LockInput {
  /** The one want to lock his token. */
  address: Address | undefined;
  lockId: Hash | undefined;
  symbol: string;
  usage: string;
  amount: number;
}

export interface UnlockInput {
  /** The one want to lock his token. */
  address: Address | undefined;
  lockId: Hash | undefined;
  symbol: string;
  usage: string;
  amount: number;
}

export interface TransferFromInput {
  from: Address | undefined;
  to: Address | undefined;
  symbol: string;
  amount: number;
  memo: string;
}

export interface ApproveInput {
  spender: Address | undefined;
  symbol: string;
  amount: number;
}

export interface UnApproveInput {
  spender: Address | undefined;
  symbol: string;
  amount: number;
}

export interface BurnInput {
  symbol: string;
  amount: number;
}

export interface ChargeResourceTokenInput {
  costDic: { [key: string]: number };
  caller: Address | undefined;
}

export interface ChargeResourceTokenInput_CostDicEntry {
  key: string;
  value: number;
}

export interface TransactionFeeBill {
  feesMap: { [key: string]: number };
}

export interface TransactionFeeBill_FeesMapEntry {
  key: string;
  value: number;
}

export interface CheckThresholdInput {
  sender: Address | undefined;
  symbolToThreshold: { [key: string]: number };
  isCheckAllowance: boolean;
}

export interface CheckThresholdInput_SymbolToThresholdEntry {
  key: string;
  value: number;
}

export interface GetTokenInfoInput {
  symbol: string;
}

export interface GetBalanceInput {
  symbol: string;
  owner: Address | undefined;
}

export interface GetBalanceOutput {
  symbol: string;
  owner: Address | undefined;
  balance: number;
}

export interface GetAllowanceInput {
  symbol: string;
  owner: Address | undefined;
  spender: Address | undefined;
}

export interface GetAllowanceOutput {
  symbol: string;
  owner: Address | undefined;
  spender: Address | undefined;
  allowance: number;
}

export interface CrossChainTransferInput {
  to: Address | undefined;
  symbol: string;
  amount: number;
  memo: string;
  toChainId: number;
  issueChainId: number;
}

export interface CrossChainReceiveTokenInput {
  fromChainId: number;
  parentChainHeight: number;
  transferTransactionBytes: Uint8Array;
  merklePath: MerklePath | undefined;
}

export interface IsInWhiteListInput {
  symbol: string;
  address: Address | undefined;
}

export interface SymbolToPayTxSizeFee {
  tokenSymbol: string;
  baseTokenWeight: number;
  addedTokenWeight: number;
}

export interface SymbolListToPayTxSizeFee {
  symbolsToPayTxSizeFee: SymbolToPayTxSizeFee[];
}

export interface ChargeTransactionFeesInput {
  methodName: string;
  contractAddress: Address | undefined;
  transactionSizeFee: number;
  symbolsToPayTxSizeFee: SymbolToPayTxSizeFee[];
}

export interface ChargeTransactionFeesOutput {
  success: boolean;
  chargingInformation: string;
}

export interface ExtraTokenListModified {
  symbolListToPayTxSizeFee: SymbolListToPayTxSizeFee | undefined;
}

export interface ReturnTaxInput {
  balanceBeforeSelling: number;
  returnTaxReceiverAddress: Address | undefined;
}

export interface GetLockedAmountInput {
  address: Address | undefined;
  symbol: string;
  lockId: Hash | undefined;
}

export interface GetLockedAmountOutput {
  address: Address | undefined;
  symbol: string;
  lockId: Hash | undefined;
  amount: number;
}

export interface TokenInfoList {
  value: TokenInfo[];
}

export interface GetCrossChainTransferTokenContractAddressInput {
  chainId: number;
}

export interface CrossChainCreateTokenInput {
  fromChainId: number;
  parentChainHeight: number;
  transactionBytes: Uint8Array;
  merklePath: MerklePath | undefined;
}

export interface InitializeFromParentChainInput {
  resourceAmount: { [key: string]: number };
  registeredOtherTokenContractAddresses: { [key: number]: Address };
  creator: Address | undefined;
}

export interface InitializeFromParentChainInput_ResourceAmountEntry {
  key: string;
  value: number;
}

export interface InitializeFromParentChainInput_RegisteredOtherTokenContractAddressesEntry {
  key: number;
  value: Address | undefined;
}

export interface UpdateCoefficientsInput {
  /** To specify pieces gonna update. */
  pieceNumbers: number[];
  coefficients: CalculateFeeCoefficients | undefined;
}

/**
 * Coefficients of one single piece.
 * The first char is its type: liner / power.
 * The second char is its piece upper bound.
 */
export interface CalculateFeePieceCoefficients {
  value: number[];
}

/** Coefficients of one single type ot token, like READ, WRITE, etc. */
export interface CalculateFeeCoefficients {
  feeTokenType: number;
  pieceCoefficientsList: CalculateFeePieceCoefficients[];
}

/** To include coefficients of all tokens. */
export interface AllCalculateFeeCoefficients {
  value: CalculateFeeCoefficients[];
}

export interface TotalTransactionFeesMap {
  value: { [key: string]: number };
  blockHash: Hash | undefined;
  blockHeight: number;
}

export interface TotalTransactionFeesMap_ValueEntry {
  key: string;
  value: number;
}

export interface TotalResourceTokensMaps {
  value: ContractTotalResourceTokens[];
  blockHash: Hash | undefined;
  blockHeight: number;
}

export interface ContractTotalResourceTokens {
  contractAddress: Address | undefined;
  tokensMap: TotalResourceTokensMap | undefined;
}

export interface TotalResourceTokensMap {
  value: { [key: string]: number };
}

export interface TotalResourceTokensMap_ValueEntry {
  key: string;
  value: number;
}

export interface ChangeTokenIssuerInput {
  symbol: string;
  newTokenIssuer: Address | undefined;
}

export interface Transferred {
  from: Address | undefined;
  to: Address | undefined;
  symbol: string;
  amount: number;
  memo: string;
}

export interface Approved {
  owner: Address | undefined;
  spender: Address | undefined;
  symbol: string;
  amount: number;
}

export interface UnApproved {
  owner: Address | undefined;
  spender: Address | undefined;
  symbol: string;
  amount: number;
}

export interface Burned {
  burner: Address | undefined;
  symbol: string;
  amount: number;
}

export interface ChainPrimaryTokenSymbolSet {
  tokenSymbol: string;
}

export interface TransactionSizeFeeUnitPriceUpdated {
  unitPrice: number;
}

/** The modification of each fee type will fire one event. */
export interface CalculateFeeAlgorithmUpdated {
  allTypeFeeCoefficients: AllCalculateFeeCoefficients | undefined;
}

export interface RentalCharged {
  symbol: string;
  amount: number;
}

export interface RentalAccountBalanceInsufficient {
  symbol: string;
  amount: number;
}

export interface TokenCreated {
  symbol: string;
  tokenName: string;
  totalSupply: number;
  decimals: number;
  issuer: Address | undefined;
  isBurnable: boolean;
  issueChainId: number;
}

export interface Issued {
  symbol: string;
  amount: number;
  memo: string;
  to: Address | undefined;
}

export interface CrossChainTransferred {
  from: Address | undefined;
  to: Address | undefined;
  symbol: string;
  amount: number;
  memo: string;
  toChainId: number;
  issueChainId: number;
}

export interface CrossChainReceived {
  from: Address | undefined;
  to: Address | undefined;
  symbol: string;
  amount: number;
  memo: string;
  fromChainId: number;
  issueChainId: number;
  parentChainHeight: number;
}

function createBaseTokenInfo(): TokenInfo {
  return {
    symbol: "",
    tokenName: "",
    supply: 0,
    totalSupply: 0,
    decimals: 0,
    issuer: undefined,
    isBurnable: false,
    issueChainId: 0,
    issued: 0,
  };
}

export const TokenInfo = {
  encode(message: TokenInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.tokenName !== "") {
      writer.uint32(18).string(message.tokenName);
    }
    if (message.supply !== 0) {
      writer.uint32(24).int64(message.supply);
    }
    if (message.totalSupply !== 0) {
      writer.uint32(32).int64(message.totalSupply);
    }
    if (message.decimals !== 0) {
      writer.uint32(40).int32(message.decimals);
    }
    if (message.issuer !== undefined) {
      Address.encode(message.issuer, writer.uint32(50).fork()).ldelim();
    }
    if (message.isBurnable === true) {
      writer.uint32(56).bool(message.isBurnable);
    }
    if (message.issueChainId !== 0) {
      writer.uint32(72).int32(message.issueChainId);
    }
    if (message.issued !== 0) {
      writer.uint32(80).int64(message.issued);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenInfo();
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
          if (tag !== 18) {
            break;
          }

          message.tokenName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.supply = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.totalSupply = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.decimals = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.issuer = Address.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.isBurnable = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.issueChainId = reader.int32();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.issued = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenInfo {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
      supply: isSet(object.supply) ? Number(object.supply) : 0,
      totalSupply: isSet(object.totalSupply) ? Number(object.totalSupply) : 0,
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      issuer: isSet(object.issuer) ? Address.fromJSON(object.issuer) : undefined,
      isBurnable: isSet(object.isBurnable) ? Boolean(object.isBurnable) : false,
      issueChainId: isSet(object.issueChainId) ? Number(object.issueChainId) : 0,
      issued: isSet(object.issued) ? Number(object.issued) : 0,
    };
  },

  toJSON(message: TokenInfo): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.tokenName !== undefined && (obj.tokenName = message.tokenName);
    message.supply !== undefined && (obj.supply = Math.round(message.supply));
    message.totalSupply !== undefined && (obj.totalSupply = Math.round(message.totalSupply));
    message.decimals !== undefined && (obj.decimals = Math.round(message.decimals));
    message.issuer !== undefined && (obj.issuer = message.issuer ? Address.toJSON(message.issuer) : undefined);
    message.isBurnable !== undefined && (obj.isBurnable = message.isBurnable);
    message.issueChainId !== undefined && (obj.issueChainId = Math.round(message.issueChainId));
    message.issued !== undefined && (obj.issued = Math.round(message.issued));
    return obj;
  },

  create<I extends Exact<DeepPartial<TokenInfo>, I>>(base?: I): TokenInfo {
    return TokenInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TokenInfo>, I>>(object: I): TokenInfo {
    const message = createBaseTokenInfo();
    message.symbol = object.symbol ?? "";
    message.tokenName = object.tokenName ?? "";
    message.supply = object.supply ?? 0;
    message.totalSupply = object.totalSupply ?? 0;
    message.decimals = object.decimals ?? 0;
    message.issuer = (object.issuer !== undefined && object.issuer !== null)
      ? Address.fromPartial(object.issuer)
      : undefined;
    message.isBurnable = object.isBurnable ?? false;
    message.issueChainId = object.issueChainId ?? 0;
    message.issued = object.issued ?? 0;
    return message;
  },
};

function createBaseCreateInput(): CreateInput {
  return {
    symbol: "",
    tokenName: "",
    totalSupply: 0,
    decimals: 0,
    issuer: undefined,
    isBurnable: false,
    lockWhiteList: [],
    issueChainId: 0,
  };
}

export const CreateInput = {
  encode(message: CreateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.tokenName !== "") {
      writer.uint32(18).string(message.tokenName);
    }
    if (message.totalSupply !== 0) {
      writer.uint32(24).int64(message.totalSupply);
    }
    if (message.decimals !== 0) {
      writer.uint32(32).int32(message.decimals);
    }
    if (message.issuer !== undefined) {
      Address.encode(message.issuer, writer.uint32(42).fork()).ldelim();
    }
    if (message.isBurnable === true) {
      writer.uint32(48).bool(message.isBurnable);
    }
    for (const v of message.lockWhiteList) {
      Address.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.issueChainId !== 0) {
      writer.uint32(64).int32(message.issueChainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInput();
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
          if (tag !== 18) {
            break;
          }

          message.tokenName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalSupply = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.decimals = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.issuer = Address.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isBurnable = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.lockWhiteList.push(Address.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.issueChainId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateInput {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
      totalSupply: isSet(object.totalSupply) ? Number(object.totalSupply) : 0,
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      issuer: isSet(object.issuer) ? Address.fromJSON(object.issuer) : undefined,
      isBurnable: isSet(object.isBurnable) ? Boolean(object.isBurnable) : false,
      lockWhiteList: Array.isArray(object?.lockWhiteList)
        ? object.lockWhiteList.map((e: any) => Address.fromJSON(e))
        : [],
      issueChainId: isSet(object.issueChainId) ? Number(object.issueChainId) : 0,
    };
  },

  toJSON(message: CreateInput): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.tokenName !== undefined && (obj.tokenName = message.tokenName);
    message.totalSupply !== undefined && (obj.totalSupply = Math.round(message.totalSupply));
    message.decimals !== undefined && (obj.decimals = Math.round(message.decimals));
    message.issuer !== undefined && (obj.issuer = message.issuer ? Address.toJSON(message.issuer) : undefined);
    message.isBurnable !== undefined && (obj.isBurnable = message.isBurnable);
    if (message.lockWhiteList) {
      obj.lockWhiteList = message.lockWhiteList.map((e) => e ? Address.toJSON(e) : undefined);
    } else {
      obj.lockWhiteList = [];
    }
    message.issueChainId !== undefined && (obj.issueChainId = Math.round(message.issueChainId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateInput>, I>>(base?: I): CreateInput {
    return CreateInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateInput>, I>>(object: I): CreateInput {
    const message = createBaseCreateInput();
    message.symbol = object.symbol ?? "";
    message.tokenName = object.tokenName ?? "";
    message.totalSupply = object.totalSupply ?? 0;
    message.decimals = object.decimals ?? 0;
    message.issuer = (object.issuer !== undefined && object.issuer !== null)
      ? Address.fromPartial(object.issuer)
      : undefined;
    message.isBurnable = object.isBurnable ?? false;
    message.lockWhiteList = object.lockWhiteList?.map((e) => Address.fromPartial(e)) || [];
    message.issueChainId = object.issueChainId ?? 0;
    return message;
  },
};

function createBaseRegisterNativeTokenInfoInput(): RegisterNativeTokenInfoInput {
  return {
    symbol: "",
    tokenName: "",
    totalSupply: 0,
    decimals: 0,
    issuer: undefined,
    isBurnable: false,
    issueChainId: 0,
  };
}

export const RegisterNativeTokenInfoInput = {
  encode(message: RegisterNativeTokenInfoInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.tokenName !== "") {
      writer.uint32(18).string(message.tokenName);
    }
    if (message.totalSupply !== 0) {
      writer.uint32(24).int64(message.totalSupply);
    }
    if (message.decimals !== 0) {
      writer.uint32(32).int32(message.decimals);
    }
    if (message.issuer !== undefined) {
      Address.encode(message.issuer, writer.uint32(42).fork()).ldelim();
    }
    if (message.isBurnable === true) {
      writer.uint32(48).bool(message.isBurnable);
    }
    if (message.issueChainId !== 0) {
      writer.uint32(56).int32(message.issueChainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterNativeTokenInfoInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterNativeTokenInfoInput();
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
          if (tag !== 18) {
            break;
          }

          message.tokenName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalSupply = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.decimals = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.issuer = Address.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isBurnable = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.issueChainId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterNativeTokenInfoInput {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
      totalSupply: isSet(object.totalSupply) ? Number(object.totalSupply) : 0,
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      issuer: isSet(object.issuer) ? Address.fromJSON(object.issuer) : undefined,
      isBurnable: isSet(object.isBurnable) ? Boolean(object.isBurnable) : false,
      issueChainId: isSet(object.issueChainId) ? Number(object.issueChainId) : 0,
    };
  },

  toJSON(message: RegisterNativeTokenInfoInput): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.tokenName !== undefined && (obj.tokenName = message.tokenName);
    message.totalSupply !== undefined && (obj.totalSupply = Math.round(message.totalSupply));
    message.decimals !== undefined && (obj.decimals = Math.round(message.decimals));
    message.issuer !== undefined && (obj.issuer = message.issuer ? Address.toJSON(message.issuer) : undefined);
    message.isBurnable !== undefined && (obj.isBurnable = message.isBurnable);
    message.issueChainId !== undefined && (obj.issueChainId = Math.round(message.issueChainId));
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterNativeTokenInfoInput>, I>>(base?: I): RegisterNativeTokenInfoInput {
    return RegisterNativeTokenInfoInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RegisterNativeTokenInfoInput>, I>>(object: I): RegisterNativeTokenInfoInput {
    const message = createBaseRegisterNativeTokenInfoInput();
    message.symbol = object.symbol ?? "";
    message.tokenName = object.tokenName ?? "";
    message.totalSupply = object.totalSupply ?? 0;
    message.decimals = object.decimals ?? 0;
    message.issuer = (object.issuer !== undefined && object.issuer !== null)
      ? Address.fromPartial(object.issuer)
      : undefined;
    message.isBurnable = object.isBurnable ?? false;
    message.issueChainId = object.issueChainId ?? 0;
    return message;
  },
};

function createBaseIssueInput(): IssueInput {
  return { symbol: "", amount: 0, memo: "", to: undefined };
}

export const IssueInput = {
  encode(message: IssueInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int64(message.amount);
    }
    if (message.memo !== "") {
      writer.uint32(26).string(message.memo);
    }
    if (message.to !== undefined) {
      Address.encode(message.to, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IssueInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIssueInput();
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

          message.amount = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.memo = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.to = Address.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IssueInput {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      memo: isSet(object.memo) ? String(object.memo) : "",
      to: isSet(object.to) ? Address.fromJSON(object.to) : undefined,
    };
  },

  toJSON(message: IssueInput): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.memo !== undefined && (obj.memo = message.memo);
    message.to !== undefined && (obj.to = message.to ? Address.toJSON(message.to) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<IssueInput>, I>>(base?: I): IssueInput {
    return IssueInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IssueInput>, I>>(object: I): IssueInput {
    const message = createBaseIssueInput();
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? 0;
    message.memo = object.memo ?? "";
    message.to = (object.to !== undefined && object.to !== null) ? Address.fromPartial(object.to) : undefined;
    return message;
  },
};

function createBaseTransferInput(): TransferInput {
  return { to: undefined, symbol: "", amount: 0, memo: "" };
}

export const TransferInput = {
  encode(message: TransferInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.to !== undefined) {
      Address.encode(message.to, writer.uint32(10).fork()).ldelim();
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.amount !== 0) {
      writer.uint32(24).int64(message.amount);
    }
    if (message.memo !== "") {
      writer.uint32(34).string(message.memo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.to = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.memo = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransferInput {
    return {
      to: isSet(object.to) ? Address.fromJSON(object.to) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      memo: isSet(object.memo) ? String(object.memo) : "",
    };
  },

  toJSON(message: TransferInput): unknown {
    const obj: any = {};
    message.to !== undefined && (obj.to = message.to ? Address.toJSON(message.to) : undefined);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.memo !== undefined && (obj.memo = message.memo);
    return obj;
  },

  create<I extends Exact<DeepPartial<TransferInput>, I>>(base?: I): TransferInput {
    return TransferInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransferInput>, I>>(object: I): TransferInput {
    const message = createBaseTransferInput();
    message.to = (object.to !== undefined && object.to !== null) ? Address.fromPartial(object.to) : undefined;
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? 0;
    message.memo = object.memo ?? "";
    return message;
  },
};

function createBaseLockInput(): LockInput {
  return { address: undefined, lockId: undefined, symbol: "", usage: "", amount: 0 };
}

export const LockInput = {
  encode(message: LockInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.lockId !== undefined) {
      Hash.encode(message.lockId, writer.uint32(18).fork()).ldelim();
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.usage !== "") {
      writer.uint32(34).string(message.usage);
    }
    if (message.amount !== 0) {
      writer.uint32(40).int64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockInput();
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

          message.lockId = Hash.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.usage = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LockInput {
    return {
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
      lockId: isSet(object.lockId) ? Hash.fromJSON(object.lockId) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      usage: isSet(object.usage) ? String(object.usage) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: LockInput): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address ? Address.toJSON(message.address) : undefined);
    message.lockId !== undefined && (obj.lockId = message.lockId ? Hash.toJSON(message.lockId) : undefined);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.usage !== undefined && (obj.usage = message.usage);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  create<I extends Exact<DeepPartial<LockInput>, I>>(base?: I): LockInput {
    return LockInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LockInput>, I>>(object: I): LockInput {
    const message = createBaseLockInput();
    message.address = (object.address !== undefined && object.address !== null)
      ? Address.fromPartial(object.address)
      : undefined;
    message.lockId = (object.lockId !== undefined && object.lockId !== null)
      ? Hash.fromPartial(object.lockId)
      : undefined;
    message.symbol = object.symbol ?? "";
    message.usage = object.usage ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseUnlockInput(): UnlockInput {
  return { address: undefined, lockId: undefined, symbol: "", usage: "", amount: 0 };
}

export const UnlockInput = {
  encode(message: UnlockInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.lockId !== undefined) {
      Hash.encode(message.lockId, writer.uint32(18).fork()).ldelim();
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.usage !== "") {
      writer.uint32(34).string(message.usage);
    }
    if (message.amount !== 0) {
      writer.uint32(40).int64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnlockInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnlockInput();
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

          message.lockId = Hash.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.usage = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnlockInput {
    return {
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
      lockId: isSet(object.lockId) ? Hash.fromJSON(object.lockId) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      usage: isSet(object.usage) ? String(object.usage) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: UnlockInput): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address ? Address.toJSON(message.address) : undefined);
    message.lockId !== undefined && (obj.lockId = message.lockId ? Hash.toJSON(message.lockId) : undefined);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.usage !== undefined && (obj.usage = message.usage);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  create<I extends Exact<DeepPartial<UnlockInput>, I>>(base?: I): UnlockInput {
    return UnlockInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UnlockInput>, I>>(object: I): UnlockInput {
    const message = createBaseUnlockInput();
    message.address = (object.address !== undefined && object.address !== null)
      ? Address.fromPartial(object.address)
      : undefined;
    message.lockId = (object.lockId !== undefined && object.lockId !== null)
      ? Hash.fromPartial(object.lockId)
      : undefined;
    message.symbol = object.symbol ?? "";
    message.usage = object.usage ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseTransferFromInput(): TransferFromInput {
  return { from: undefined, to: undefined, symbol: "", amount: 0, memo: "" };
}

export const TransferFromInput = {
  encode(message: TransferFromInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== undefined) {
      Address.encode(message.from, writer.uint32(10).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Address.encode(message.to, writer.uint32(18).fork()).ldelim();
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.amount !== 0) {
      writer.uint32(32).int64(message.amount);
    }
    if (message.memo !== "") {
      writer.uint32(42).string(message.memo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferFromInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferFromInput();
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
          if (tag !== 26) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.memo = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransferFromInput {
    return {
      from: isSet(object.from) ? Address.fromJSON(object.from) : undefined,
      to: isSet(object.to) ? Address.fromJSON(object.to) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      memo: isSet(object.memo) ? String(object.memo) : "",
    };
  },

  toJSON(message: TransferFromInput): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from ? Address.toJSON(message.from) : undefined);
    message.to !== undefined && (obj.to = message.to ? Address.toJSON(message.to) : undefined);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.memo !== undefined && (obj.memo = message.memo);
    return obj;
  },

  create<I extends Exact<DeepPartial<TransferFromInput>, I>>(base?: I): TransferFromInput {
    return TransferFromInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransferFromInput>, I>>(object: I): TransferFromInput {
    const message = createBaseTransferFromInput();
    message.from = (object.from !== undefined && object.from !== null) ? Address.fromPartial(object.from) : undefined;
    message.to = (object.to !== undefined && object.to !== null) ? Address.fromPartial(object.to) : undefined;
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? 0;
    message.memo = object.memo ?? "";
    return message;
  },
};

function createBaseApproveInput(): ApproveInput {
  return { spender: undefined, symbol: "", amount: 0 };
}

export const ApproveInput = {
  encode(message: ApproveInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spender !== undefined) {
      Address.encode(message.spender, writer.uint32(10).fork()).ldelim();
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.amount !== 0) {
      writer.uint32(24).int64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApproveInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApproveInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.spender = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApproveInput {
    return {
      spender: isSet(object.spender) ? Address.fromJSON(object.spender) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: ApproveInput): unknown {
    const obj: any = {};
    message.spender !== undefined && (obj.spender = message.spender ? Address.toJSON(message.spender) : undefined);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  create<I extends Exact<DeepPartial<ApproveInput>, I>>(base?: I): ApproveInput {
    return ApproveInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ApproveInput>, I>>(object: I): ApproveInput {
    const message = createBaseApproveInput();
    message.spender = (object.spender !== undefined && object.spender !== null)
      ? Address.fromPartial(object.spender)
      : undefined;
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseUnApproveInput(): UnApproveInput {
  return { spender: undefined, symbol: "", amount: 0 };
}

export const UnApproveInput = {
  encode(message: UnApproveInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spender !== undefined) {
      Address.encode(message.spender, writer.uint32(10).fork()).ldelim();
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.amount !== 0) {
      writer.uint32(24).int64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnApproveInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnApproveInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.spender = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnApproveInput {
    return {
      spender: isSet(object.spender) ? Address.fromJSON(object.spender) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: UnApproveInput): unknown {
    const obj: any = {};
    message.spender !== undefined && (obj.spender = message.spender ? Address.toJSON(message.spender) : undefined);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  create<I extends Exact<DeepPartial<UnApproveInput>, I>>(base?: I): UnApproveInput {
    return UnApproveInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UnApproveInput>, I>>(object: I): UnApproveInput {
    const message = createBaseUnApproveInput();
    message.spender = (object.spender !== undefined && object.spender !== null)
      ? Address.fromPartial(object.spender)
      : undefined;
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseBurnInput(): BurnInput {
  return { symbol: "", amount: 0 };
}

export const BurnInput = {
  encode(message: BurnInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BurnInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurnInput();
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

          message.amount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BurnInput {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: BurnInput): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  create<I extends Exact<DeepPartial<BurnInput>, I>>(base?: I): BurnInput {
    return BurnInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BurnInput>, I>>(object: I): BurnInput {
    const message = createBaseBurnInput();
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseChargeResourceTokenInput(): ChargeResourceTokenInput {
  return { costDic: {}, caller: undefined };
}

export const ChargeResourceTokenInput = {
  encode(message: ChargeResourceTokenInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.costDic).forEach(([key, value]) => {
      ChargeResourceTokenInput_CostDicEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    if (message.caller !== undefined) {
      Address.encode(message.caller, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChargeResourceTokenInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChargeResourceTokenInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = ChargeResourceTokenInput_CostDicEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.costDic[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.caller = Address.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChargeResourceTokenInput {
    return {
      costDic: isObject(object.costDic)
        ? Object.entries(object.costDic).reduce<{ [key: string]: number }>((acc, [key, value]) => {
          acc[key] = Number(value);
          return acc;
        }, {})
        : {},
      caller: isSet(object.caller) ? Address.fromJSON(object.caller) : undefined,
    };
  },

  toJSON(message: ChargeResourceTokenInput): unknown {
    const obj: any = {};
    obj.costDic = {};
    if (message.costDic) {
      Object.entries(message.costDic).forEach(([k, v]) => {
        obj.costDic[k] = Math.round(v);
      });
    }
    message.caller !== undefined && (obj.caller = message.caller ? Address.toJSON(message.caller) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ChargeResourceTokenInput>, I>>(base?: I): ChargeResourceTokenInput {
    return ChargeResourceTokenInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ChargeResourceTokenInput>, I>>(object: I): ChargeResourceTokenInput {
    const message = createBaseChargeResourceTokenInput();
    message.costDic = Object.entries(object.costDic ?? {}).reduce<{ [key: string]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Number(value);
      }
      return acc;
    }, {});
    message.caller = (object.caller !== undefined && object.caller !== null)
      ? Address.fromPartial(object.caller)
      : undefined;
    return message;
  },
};

function createBaseChargeResourceTokenInput_CostDicEntry(): ChargeResourceTokenInput_CostDicEntry {
  return { key: "", value: 0 };
}

export const ChargeResourceTokenInput_CostDicEntry = {
  encode(message: ChargeResourceTokenInput_CostDicEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChargeResourceTokenInput_CostDicEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChargeResourceTokenInput_CostDicEntry();
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

          message.value = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChargeResourceTokenInput_CostDicEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: ChargeResourceTokenInput_CostDicEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<ChargeResourceTokenInput_CostDicEntry>, I>>(
    base?: I,
  ): ChargeResourceTokenInput_CostDicEntry {
    return ChargeResourceTokenInput_CostDicEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ChargeResourceTokenInput_CostDicEntry>, I>>(
    object: I,
  ): ChargeResourceTokenInput_CostDicEntry {
    const message = createBaseChargeResourceTokenInput_CostDicEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTransactionFeeBill(): TransactionFeeBill {
  return { feesMap: {} };
}

export const TransactionFeeBill = {
  encode(message: TransactionFeeBill, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.feesMap).forEach(([key, value]) => {
      TransactionFeeBill_FeesMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionFeeBill {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionFeeBill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = TransactionFeeBill_FeesMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.feesMap[entry1.key] = entry1.value;
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

  fromJSON(object: any): TransactionFeeBill {
    return {
      feesMap: isObject(object.feesMap)
        ? Object.entries(object.feesMap).reduce<{ [key: string]: number }>((acc, [key, value]) => {
          acc[key] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: TransactionFeeBill): unknown {
    const obj: any = {};
    obj.feesMap = {};
    if (message.feesMap) {
      Object.entries(message.feesMap).forEach(([k, v]) => {
        obj.feesMap[k] = Math.round(v);
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionFeeBill>, I>>(base?: I): TransactionFeeBill {
    return TransactionFeeBill.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransactionFeeBill>, I>>(object: I): TransactionFeeBill {
    const message = createBaseTransactionFeeBill();
    message.feesMap = Object.entries(object.feesMap ?? {}).reduce<{ [key: string]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Number(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseTransactionFeeBill_FeesMapEntry(): TransactionFeeBill_FeesMapEntry {
  return { key: "", value: 0 };
}

export const TransactionFeeBill_FeesMapEntry = {
  encode(message: TransactionFeeBill_FeesMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionFeeBill_FeesMapEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionFeeBill_FeesMapEntry();
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

          message.value = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionFeeBill_FeesMapEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: TransactionFeeBill_FeesMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionFeeBill_FeesMapEntry>, I>>(base?: I): TransactionFeeBill_FeesMapEntry {
    return TransactionFeeBill_FeesMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransactionFeeBill_FeesMapEntry>, I>>(
    object: I,
  ): TransactionFeeBill_FeesMapEntry {
    const message = createBaseTransactionFeeBill_FeesMapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseCheckThresholdInput(): CheckThresholdInput {
  return { sender: undefined, symbolToThreshold: {}, isCheckAllowance: false };
}

export const CheckThresholdInput = {
  encode(message: CheckThresholdInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== undefined) {
      Address.encode(message.sender, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.symbolToThreshold).forEach(([key, value]) => {
      CheckThresholdInput_SymbolToThresholdEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.isCheckAllowance === true) {
      writer.uint32(24).bool(message.isCheckAllowance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckThresholdInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckThresholdInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = CheckThresholdInput_SymbolToThresholdEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.symbolToThreshold[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isCheckAllowance = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckThresholdInput {
    return {
      sender: isSet(object.sender) ? Address.fromJSON(object.sender) : undefined,
      symbolToThreshold: isObject(object.symbolToThreshold)
        ? Object.entries(object.symbolToThreshold).reduce<{ [key: string]: number }>((acc, [key, value]) => {
          acc[key] = Number(value);
          return acc;
        }, {})
        : {},
      isCheckAllowance: isSet(object.isCheckAllowance) ? Boolean(object.isCheckAllowance) : false,
    };
  },

  toJSON(message: CheckThresholdInput): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender ? Address.toJSON(message.sender) : undefined);
    obj.symbolToThreshold = {};
    if (message.symbolToThreshold) {
      Object.entries(message.symbolToThreshold).forEach(([k, v]) => {
        obj.symbolToThreshold[k] = Math.round(v);
      });
    }
    message.isCheckAllowance !== undefined && (obj.isCheckAllowance = message.isCheckAllowance);
    return obj;
  },

  create<I extends Exact<DeepPartial<CheckThresholdInput>, I>>(base?: I): CheckThresholdInput {
    return CheckThresholdInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CheckThresholdInput>, I>>(object: I): CheckThresholdInput {
    const message = createBaseCheckThresholdInput();
    message.sender = (object.sender !== undefined && object.sender !== null)
      ? Address.fromPartial(object.sender)
      : undefined;
    message.symbolToThreshold = Object.entries(object.symbolToThreshold ?? {}).reduce<{ [key: string]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Number(value);
        }
        return acc;
      },
      {},
    );
    message.isCheckAllowance = object.isCheckAllowance ?? false;
    return message;
  },
};

function createBaseCheckThresholdInput_SymbolToThresholdEntry(): CheckThresholdInput_SymbolToThresholdEntry {
  return { key: "", value: 0 };
}

export const CheckThresholdInput_SymbolToThresholdEntry = {
  encode(message: CheckThresholdInput_SymbolToThresholdEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckThresholdInput_SymbolToThresholdEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckThresholdInput_SymbolToThresholdEntry();
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

          message.value = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckThresholdInput_SymbolToThresholdEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: CheckThresholdInput_SymbolToThresholdEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<CheckThresholdInput_SymbolToThresholdEntry>, I>>(
    base?: I,
  ): CheckThresholdInput_SymbolToThresholdEntry {
    return CheckThresholdInput_SymbolToThresholdEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CheckThresholdInput_SymbolToThresholdEntry>, I>>(
    object: I,
  ): CheckThresholdInput_SymbolToThresholdEntry {
    const message = createBaseCheckThresholdInput_SymbolToThresholdEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseGetTokenInfoInput(): GetTokenInfoInput {
  return { symbol: "" };
}

export const GetTokenInfoInput = {
  encode(message: GetTokenInfoInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTokenInfoInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTokenInfoInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.symbol = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTokenInfoInput {
    return { symbol: isSet(object.symbol) ? String(object.symbol) : "" };
  },

  toJSON(message: GetTokenInfoInput): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTokenInfoInput>, I>>(base?: I): GetTokenInfoInput {
    return GetTokenInfoInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetTokenInfoInput>, I>>(object: I): GetTokenInfoInput {
    const message = createBaseGetTokenInfoInput();
    message.symbol = object.symbol ?? "";
    return message;
  },
};

function createBaseGetBalanceInput(): GetBalanceInput {
  return { symbol: "", owner: undefined };
}

export const GetBalanceInput = {
  encode(message: GetBalanceInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.owner !== undefined) {
      Address.encode(message.owner, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBalanceInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBalanceInput();
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
          if (tag !== 18) {
            break;
          }

          message.owner = Address.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBalanceInput {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      owner: isSet(object.owner) ? Address.fromJSON(object.owner) : undefined,
    };
  },

  toJSON(message: GetBalanceInput): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.owner !== undefined && (obj.owner = message.owner ? Address.toJSON(message.owner) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBalanceInput>, I>>(base?: I): GetBalanceInput {
    return GetBalanceInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBalanceInput>, I>>(object: I): GetBalanceInput {
    const message = createBaseGetBalanceInput();
    message.symbol = object.symbol ?? "";
    message.owner = (object.owner !== undefined && object.owner !== null)
      ? Address.fromPartial(object.owner)
      : undefined;
    return message;
  },
};

function createBaseGetBalanceOutput(): GetBalanceOutput {
  return { symbol: "", owner: undefined, balance: 0 };
}

export const GetBalanceOutput = {
  encode(message: GetBalanceOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.owner !== undefined) {
      Address.encode(message.owner, writer.uint32(18).fork()).ldelim();
    }
    if (message.balance !== 0) {
      writer.uint32(24).int64(message.balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBalanceOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBalanceOutput();
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
          if (tag !== 18) {
            break;
          }

          message.owner = Address.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.balance = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBalanceOutput {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      owner: isSet(object.owner) ? Address.fromJSON(object.owner) : undefined,
      balance: isSet(object.balance) ? Number(object.balance) : 0,
    };
  },

  toJSON(message: GetBalanceOutput): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.owner !== undefined && (obj.owner = message.owner ? Address.toJSON(message.owner) : undefined);
    message.balance !== undefined && (obj.balance = Math.round(message.balance));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBalanceOutput>, I>>(base?: I): GetBalanceOutput {
    return GetBalanceOutput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBalanceOutput>, I>>(object: I): GetBalanceOutput {
    const message = createBaseGetBalanceOutput();
    message.symbol = object.symbol ?? "";
    message.owner = (object.owner !== undefined && object.owner !== null)
      ? Address.fromPartial(object.owner)
      : undefined;
    message.balance = object.balance ?? 0;
    return message;
  },
};

function createBaseGetAllowanceInput(): GetAllowanceInput {
  return { symbol: "", owner: undefined, spender: undefined };
}

export const GetAllowanceInput = {
  encode(message: GetAllowanceInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.owner !== undefined) {
      Address.encode(message.owner, writer.uint32(18).fork()).ldelim();
    }
    if (message.spender !== undefined) {
      Address.encode(message.spender, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllowanceInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllowanceInput();
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
          if (tag !== 18) {
            break;
          }

          message.owner = Address.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.spender = Address.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAllowanceInput {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      owner: isSet(object.owner) ? Address.fromJSON(object.owner) : undefined,
      spender: isSet(object.spender) ? Address.fromJSON(object.spender) : undefined,
    };
  },

  toJSON(message: GetAllowanceInput): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.owner !== undefined && (obj.owner = message.owner ? Address.toJSON(message.owner) : undefined);
    message.spender !== undefined && (obj.spender = message.spender ? Address.toJSON(message.spender) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllowanceInput>, I>>(base?: I): GetAllowanceInput {
    return GetAllowanceInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAllowanceInput>, I>>(object: I): GetAllowanceInput {
    const message = createBaseGetAllowanceInput();
    message.symbol = object.symbol ?? "";
    message.owner = (object.owner !== undefined && object.owner !== null)
      ? Address.fromPartial(object.owner)
      : undefined;
    message.spender = (object.spender !== undefined && object.spender !== null)
      ? Address.fromPartial(object.spender)
      : undefined;
    return message;
  },
};

function createBaseGetAllowanceOutput(): GetAllowanceOutput {
  return { symbol: "", owner: undefined, spender: undefined, allowance: 0 };
}

export const GetAllowanceOutput = {
  encode(message: GetAllowanceOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.owner !== undefined) {
      Address.encode(message.owner, writer.uint32(18).fork()).ldelim();
    }
    if (message.spender !== undefined) {
      Address.encode(message.spender, writer.uint32(26).fork()).ldelim();
    }
    if (message.allowance !== 0) {
      writer.uint32(32).int64(message.allowance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllowanceOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllowanceOutput();
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
          if (tag !== 18) {
            break;
          }

          message.owner = Address.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.spender = Address.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.allowance = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAllowanceOutput {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      owner: isSet(object.owner) ? Address.fromJSON(object.owner) : undefined,
      spender: isSet(object.spender) ? Address.fromJSON(object.spender) : undefined,
      allowance: isSet(object.allowance) ? Number(object.allowance) : 0,
    };
  },

  toJSON(message: GetAllowanceOutput): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.owner !== undefined && (obj.owner = message.owner ? Address.toJSON(message.owner) : undefined);
    message.spender !== undefined && (obj.spender = message.spender ? Address.toJSON(message.spender) : undefined);
    message.allowance !== undefined && (obj.allowance = Math.round(message.allowance));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllowanceOutput>, I>>(base?: I): GetAllowanceOutput {
    return GetAllowanceOutput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAllowanceOutput>, I>>(object: I): GetAllowanceOutput {
    const message = createBaseGetAllowanceOutput();
    message.symbol = object.symbol ?? "";
    message.owner = (object.owner !== undefined && object.owner !== null)
      ? Address.fromPartial(object.owner)
      : undefined;
    message.spender = (object.spender !== undefined && object.spender !== null)
      ? Address.fromPartial(object.spender)
      : undefined;
    message.allowance = object.allowance ?? 0;
    return message;
  },
};

function createBaseCrossChainTransferInput(): CrossChainTransferInput {
  return { to: undefined, symbol: "", amount: 0, memo: "", toChainId: 0, issueChainId: 0 };
}

export const CrossChainTransferInput = {
  encode(message: CrossChainTransferInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.to !== undefined) {
      Address.encode(message.to, writer.uint32(10).fork()).ldelim();
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.amount !== 0) {
      writer.uint32(24).int64(message.amount);
    }
    if (message.memo !== "") {
      writer.uint32(34).string(message.memo);
    }
    if (message.toChainId !== 0) {
      writer.uint32(40).int32(message.toChainId);
    }
    if (message.issueChainId !== 0) {
      writer.uint32(48).int32(message.issueChainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrossChainTransferInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrossChainTransferInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.to = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.memo = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.toChainId = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.issueChainId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CrossChainTransferInput {
    return {
      to: isSet(object.to) ? Address.fromJSON(object.to) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      memo: isSet(object.memo) ? String(object.memo) : "",
      toChainId: isSet(object.toChainId) ? Number(object.toChainId) : 0,
      issueChainId: isSet(object.issueChainId) ? Number(object.issueChainId) : 0,
    };
  },

  toJSON(message: CrossChainTransferInput): unknown {
    const obj: any = {};
    message.to !== undefined && (obj.to = message.to ? Address.toJSON(message.to) : undefined);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.memo !== undefined && (obj.memo = message.memo);
    message.toChainId !== undefined && (obj.toChainId = Math.round(message.toChainId));
    message.issueChainId !== undefined && (obj.issueChainId = Math.round(message.issueChainId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CrossChainTransferInput>, I>>(base?: I): CrossChainTransferInput {
    return CrossChainTransferInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CrossChainTransferInput>, I>>(object: I): CrossChainTransferInput {
    const message = createBaseCrossChainTransferInput();
    message.to = (object.to !== undefined && object.to !== null) ? Address.fromPartial(object.to) : undefined;
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? 0;
    message.memo = object.memo ?? "";
    message.toChainId = object.toChainId ?? 0;
    message.issueChainId = object.issueChainId ?? 0;
    return message;
  },
};

function createBaseCrossChainReceiveTokenInput(): CrossChainReceiveTokenInput {
  return { fromChainId: 0, parentChainHeight: 0, transferTransactionBytes: new Uint8Array(0), merklePath: undefined };
}

export const CrossChainReceiveTokenInput = {
  encode(message: CrossChainReceiveTokenInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromChainId !== 0) {
      writer.uint32(8).int32(message.fromChainId);
    }
    if (message.parentChainHeight !== 0) {
      writer.uint32(16).int64(message.parentChainHeight);
    }
    if (message.transferTransactionBytes.length !== 0) {
      writer.uint32(26).bytes(message.transferTransactionBytes);
    }
    if (message.merklePath !== undefined) {
      MerklePath.encode(message.merklePath, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrossChainReceiveTokenInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrossChainReceiveTokenInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.fromChainId = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.parentChainHeight = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.transferTransactionBytes = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.merklePath = MerklePath.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CrossChainReceiveTokenInput {
    return {
      fromChainId: isSet(object.fromChainId) ? Number(object.fromChainId) : 0,
      parentChainHeight: isSet(object.parentChainHeight) ? Number(object.parentChainHeight) : 0,
      transferTransactionBytes: isSet(object.transferTransactionBytes)
        ? bytesFromBase64(object.transferTransactionBytes)
        : new Uint8Array(0),
      merklePath: isSet(object.merklePath) ? MerklePath.fromJSON(object.merklePath) : undefined,
    };
  },

  toJSON(message: CrossChainReceiveTokenInput): unknown {
    const obj: any = {};
    message.fromChainId !== undefined && (obj.fromChainId = Math.round(message.fromChainId));
    message.parentChainHeight !== undefined && (obj.parentChainHeight = Math.round(message.parentChainHeight));
    message.transferTransactionBytes !== undefined &&
      (obj.transferTransactionBytes = base64FromBytes(
        message.transferTransactionBytes !== undefined ? message.transferTransactionBytes : new Uint8Array(0),
      ));
    message.merklePath !== undefined &&
      (obj.merklePath = message.merklePath ? MerklePath.toJSON(message.merklePath) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CrossChainReceiveTokenInput>, I>>(base?: I): CrossChainReceiveTokenInput {
    return CrossChainReceiveTokenInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CrossChainReceiveTokenInput>, I>>(object: I): CrossChainReceiveTokenInput {
    const message = createBaseCrossChainReceiveTokenInput();
    message.fromChainId = object.fromChainId ?? 0;
    message.parentChainHeight = object.parentChainHeight ?? 0;
    message.transferTransactionBytes = object.transferTransactionBytes ?? new Uint8Array(0);
    message.merklePath = (object.merklePath !== undefined && object.merklePath !== null)
      ? MerklePath.fromPartial(object.merklePath)
      : undefined;
    return message;
  },
};

function createBaseIsInWhiteListInput(): IsInWhiteListInput {
  return { symbol: "", address: undefined };
}

export const IsInWhiteListInput = {
  encode(message: IsInWhiteListInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IsInWhiteListInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsInWhiteListInput();
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
          if (tag !== 18) {
            break;
          }

          message.address = Address.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IsInWhiteListInput {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
    };
  },

  toJSON(message: IsInWhiteListInput): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.address !== undefined && (obj.address = message.address ? Address.toJSON(message.address) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<IsInWhiteListInput>, I>>(base?: I): IsInWhiteListInput {
    return IsInWhiteListInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IsInWhiteListInput>, I>>(object: I): IsInWhiteListInput {
    const message = createBaseIsInWhiteListInput();
    message.symbol = object.symbol ?? "";
    message.address = (object.address !== undefined && object.address !== null)
      ? Address.fromPartial(object.address)
      : undefined;
    return message;
  },
};

function createBaseSymbolToPayTxSizeFee(): SymbolToPayTxSizeFee {
  return { tokenSymbol: "", baseTokenWeight: 0, addedTokenWeight: 0 };
}

export const SymbolToPayTxSizeFee = {
  encode(message: SymbolToPayTxSizeFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenSymbol !== "") {
      writer.uint32(10).string(message.tokenSymbol);
    }
    if (message.baseTokenWeight !== 0) {
      writer.uint32(16).int32(message.baseTokenWeight);
    }
    if (message.addedTokenWeight !== 0) {
      writer.uint32(24).int32(message.addedTokenWeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SymbolToPayTxSizeFee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSymbolToPayTxSizeFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenSymbol = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.baseTokenWeight = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.addedTokenWeight = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SymbolToPayTxSizeFee {
    return {
      tokenSymbol: isSet(object.tokenSymbol) ? String(object.tokenSymbol) : "",
      baseTokenWeight: isSet(object.baseTokenWeight) ? Number(object.baseTokenWeight) : 0,
      addedTokenWeight: isSet(object.addedTokenWeight) ? Number(object.addedTokenWeight) : 0,
    };
  },

  toJSON(message: SymbolToPayTxSizeFee): unknown {
    const obj: any = {};
    message.tokenSymbol !== undefined && (obj.tokenSymbol = message.tokenSymbol);
    message.baseTokenWeight !== undefined && (obj.baseTokenWeight = Math.round(message.baseTokenWeight));
    message.addedTokenWeight !== undefined && (obj.addedTokenWeight = Math.round(message.addedTokenWeight));
    return obj;
  },

  create<I extends Exact<DeepPartial<SymbolToPayTxSizeFee>, I>>(base?: I): SymbolToPayTxSizeFee {
    return SymbolToPayTxSizeFee.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SymbolToPayTxSizeFee>, I>>(object: I): SymbolToPayTxSizeFee {
    const message = createBaseSymbolToPayTxSizeFee();
    message.tokenSymbol = object.tokenSymbol ?? "";
    message.baseTokenWeight = object.baseTokenWeight ?? 0;
    message.addedTokenWeight = object.addedTokenWeight ?? 0;
    return message;
  },
};

function createBaseSymbolListToPayTxSizeFee(): SymbolListToPayTxSizeFee {
  return { symbolsToPayTxSizeFee: [] };
}

export const SymbolListToPayTxSizeFee = {
  encode(message: SymbolListToPayTxSizeFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.symbolsToPayTxSizeFee) {
      SymbolToPayTxSizeFee.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SymbolListToPayTxSizeFee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSymbolListToPayTxSizeFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.symbolsToPayTxSizeFee.push(SymbolToPayTxSizeFee.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SymbolListToPayTxSizeFee {
    return {
      symbolsToPayTxSizeFee: Array.isArray(object?.symbolsToPayTxSizeFee)
        ? object.symbolsToPayTxSizeFee.map((e: any) => SymbolToPayTxSizeFee.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SymbolListToPayTxSizeFee): unknown {
    const obj: any = {};
    if (message.symbolsToPayTxSizeFee) {
      obj.symbolsToPayTxSizeFee = message.symbolsToPayTxSizeFee.map((e) =>
        e ? SymbolToPayTxSizeFee.toJSON(e) : undefined
      );
    } else {
      obj.symbolsToPayTxSizeFee = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SymbolListToPayTxSizeFee>, I>>(base?: I): SymbolListToPayTxSizeFee {
    return SymbolListToPayTxSizeFee.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SymbolListToPayTxSizeFee>, I>>(object: I): SymbolListToPayTxSizeFee {
    const message = createBaseSymbolListToPayTxSizeFee();
    message.symbolsToPayTxSizeFee = object.symbolsToPayTxSizeFee?.map((e) => SymbolToPayTxSizeFee.fromPartial(e)) || [];
    return message;
  },
};

function createBaseChargeTransactionFeesInput(): ChargeTransactionFeesInput {
  return { methodName: "", contractAddress: undefined, transactionSizeFee: 0, symbolsToPayTxSizeFee: [] };
}

export const ChargeTransactionFeesInput = {
  encode(message: ChargeTransactionFeesInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.methodName !== "") {
      writer.uint32(10).string(message.methodName);
    }
    if (message.contractAddress !== undefined) {
      Address.encode(message.contractAddress, writer.uint32(18).fork()).ldelim();
    }
    if (message.transactionSizeFee !== 0) {
      writer.uint32(24).int64(message.transactionSizeFee);
    }
    for (const v of message.symbolsToPayTxSizeFee) {
      SymbolToPayTxSizeFee.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChargeTransactionFeesInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChargeTransactionFeesInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.methodName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contractAddress = Address.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.transactionSizeFee = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.symbolsToPayTxSizeFee.push(SymbolToPayTxSizeFee.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChargeTransactionFeesInput {
    return {
      methodName: isSet(object.methodName) ? String(object.methodName) : "",
      contractAddress: isSet(object.contractAddress) ? Address.fromJSON(object.contractAddress) : undefined,
      transactionSizeFee: isSet(object.transactionSizeFee) ? Number(object.transactionSizeFee) : 0,
      symbolsToPayTxSizeFee: Array.isArray(object?.symbolsToPayTxSizeFee)
        ? object.symbolsToPayTxSizeFee.map((e: any) => SymbolToPayTxSizeFee.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ChargeTransactionFeesInput): unknown {
    const obj: any = {};
    message.methodName !== undefined && (obj.methodName = message.methodName);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress ? Address.toJSON(message.contractAddress) : undefined);
    message.transactionSizeFee !== undefined && (obj.transactionSizeFee = Math.round(message.transactionSizeFee));
    if (message.symbolsToPayTxSizeFee) {
      obj.symbolsToPayTxSizeFee = message.symbolsToPayTxSizeFee.map((e) =>
        e ? SymbolToPayTxSizeFee.toJSON(e) : undefined
      );
    } else {
      obj.symbolsToPayTxSizeFee = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChargeTransactionFeesInput>, I>>(base?: I): ChargeTransactionFeesInput {
    return ChargeTransactionFeesInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ChargeTransactionFeesInput>, I>>(object: I): ChargeTransactionFeesInput {
    const message = createBaseChargeTransactionFeesInput();
    message.methodName = object.methodName ?? "";
    message.contractAddress = (object.contractAddress !== undefined && object.contractAddress !== null)
      ? Address.fromPartial(object.contractAddress)
      : undefined;
    message.transactionSizeFee = object.transactionSizeFee ?? 0;
    message.symbolsToPayTxSizeFee = object.symbolsToPayTxSizeFee?.map((e) => SymbolToPayTxSizeFee.fromPartial(e)) || [];
    return message;
  },
};

function createBaseChargeTransactionFeesOutput(): ChargeTransactionFeesOutput {
  return { success: false, chargingInformation: "" };
}

export const ChargeTransactionFeesOutput = {
  encode(message: ChargeTransactionFeesOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.chargingInformation !== "") {
      writer.uint32(18).string(message.chargingInformation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChargeTransactionFeesOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChargeTransactionFeesOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.success = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chargingInformation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChargeTransactionFeesOutput {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      chargingInformation: isSet(object.chargingInformation) ? String(object.chargingInformation) : "",
    };
  },

  toJSON(message: ChargeTransactionFeesOutput): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.chargingInformation !== undefined && (obj.chargingInformation = message.chargingInformation);
    return obj;
  },

  create<I extends Exact<DeepPartial<ChargeTransactionFeesOutput>, I>>(base?: I): ChargeTransactionFeesOutput {
    return ChargeTransactionFeesOutput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ChargeTransactionFeesOutput>, I>>(object: I): ChargeTransactionFeesOutput {
    const message = createBaseChargeTransactionFeesOutput();
    message.success = object.success ?? false;
    message.chargingInformation = object.chargingInformation ?? "";
    return message;
  },
};

function createBaseExtraTokenListModified(): ExtraTokenListModified {
  return { symbolListToPayTxSizeFee: undefined };
}

export const ExtraTokenListModified = {
  encode(message: ExtraTokenListModified, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbolListToPayTxSizeFee !== undefined) {
      SymbolListToPayTxSizeFee.encode(message.symbolListToPayTxSizeFee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtraTokenListModified {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtraTokenListModified();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.symbolListToPayTxSizeFee = SymbolListToPayTxSizeFee.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExtraTokenListModified {
    return {
      symbolListToPayTxSizeFee: isSet(object.symbolListToPayTxSizeFee)
        ? SymbolListToPayTxSizeFee.fromJSON(object.symbolListToPayTxSizeFee)
        : undefined,
    };
  },

  toJSON(message: ExtraTokenListModified): unknown {
    const obj: any = {};
    message.symbolListToPayTxSizeFee !== undefined && (obj.symbolListToPayTxSizeFee = message.symbolListToPayTxSizeFee
      ? SymbolListToPayTxSizeFee.toJSON(message.symbolListToPayTxSizeFee)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExtraTokenListModified>, I>>(base?: I): ExtraTokenListModified {
    return ExtraTokenListModified.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExtraTokenListModified>, I>>(object: I): ExtraTokenListModified {
    const message = createBaseExtraTokenListModified();
    message.symbolListToPayTxSizeFee =
      (object.symbolListToPayTxSizeFee !== undefined && object.symbolListToPayTxSizeFee !== null)
        ? SymbolListToPayTxSizeFee.fromPartial(object.symbolListToPayTxSizeFee)
        : undefined;
    return message;
  },
};

function createBaseReturnTaxInput(): ReturnTaxInput {
  return { balanceBeforeSelling: 0, returnTaxReceiverAddress: undefined };
}

export const ReturnTaxInput = {
  encode(message: ReturnTaxInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balanceBeforeSelling !== 0) {
      writer.uint32(8).int64(message.balanceBeforeSelling);
    }
    if (message.returnTaxReceiverAddress !== undefined) {
      Address.encode(message.returnTaxReceiverAddress, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReturnTaxInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnTaxInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.balanceBeforeSelling = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.returnTaxReceiverAddress = Address.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReturnTaxInput {
    return {
      balanceBeforeSelling: isSet(object.balanceBeforeSelling) ? Number(object.balanceBeforeSelling) : 0,
      returnTaxReceiverAddress: isSet(object.returnTaxReceiverAddress)
        ? Address.fromJSON(object.returnTaxReceiverAddress)
        : undefined,
    };
  },

  toJSON(message: ReturnTaxInput): unknown {
    const obj: any = {};
    message.balanceBeforeSelling !== undefined && (obj.balanceBeforeSelling = Math.round(message.balanceBeforeSelling));
    message.returnTaxReceiverAddress !== undefined && (obj.returnTaxReceiverAddress = message.returnTaxReceiverAddress
      ? Address.toJSON(message.returnTaxReceiverAddress)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ReturnTaxInput>, I>>(base?: I): ReturnTaxInput {
    return ReturnTaxInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReturnTaxInput>, I>>(object: I): ReturnTaxInput {
    const message = createBaseReturnTaxInput();
    message.balanceBeforeSelling = object.balanceBeforeSelling ?? 0;
    message.returnTaxReceiverAddress =
      (object.returnTaxReceiverAddress !== undefined && object.returnTaxReceiverAddress !== null)
        ? Address.fromPartial(object.returnTaxReceiverAddress)
        : undefined;
    return message;
  },
};

function createBaseGetLockedAmountInput(): GetLockedAmountInput {
  return { address: undefined, symbol: "", lockId: undefined };
}

export const GetLockedAmountInput = {
  encode(message: GetLockedAmountInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.lockId !== undefined) {
      Hash.encode(message.lockId, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLockedAmountInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLockedAmountInput();
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

          message.symbol = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lockId = Hash.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLockedAmountInput {
    return {
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      lockId: isSet(object.lockId) ? Hash.fromJSON(object.lockId) : undefined,
    };
  },

  toJSON(message: GetLockedAmountInput): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address ? Address.toJSON(message.address) : undefined);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.lockId !== undefined && (obj.lockId = message.lockId ? Hash.toJSON(message.lockId) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLockedAmountInput>, I>>(base?: I): GetLockedAmountInput {
    return GetLockedAmountInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetLockedAmountInput>, I>>(object: I): GetLockedAmountInput {
    const message = createBaseGetLockedAmountInput();
    message.address = (object.address !== undefined && object.address !== null)
      ? Address.fromPartial(object.address)
      : undefined;
    message.symbol = object.symbol ?? "";
    message.lockId = (object.lockId !== undefined && object.lockId !== null)
      ? Hash.fromPartial(object.lockId)
      : undefined;
    return message;
  },
};

function createBaseGetLockedAmountOutput(): GetLockedAmountOutput {
  return { address: undefined, symbol: "", lockId: undefined, amount: 0 };
}

export const GetLockedAmountOutput = {
  encode(message: GetLockedAmountOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.lockId !== undefined) {
      Hash.encode(message.lockId, writer.uint32(26).fork()).ldelim();
    }
    if (message.amount !== 0) {
      writer.uint32(32).int64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLockedAmountOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLockedAmountOutput();
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

          message.symbol = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lockId = Hash.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLockedAmountOutput {
    return {
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      lockId: isSet(object.lockId) ? Hash.fromJSON(object.lockId) : undefined,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: GetLockedAmountOutput): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address ? Address.toJSON(message.address) : undefined);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.lockId !== undefined && (obj.lockId = message.lockId ? Hash.toJSON(message.lockId) : undefined);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLockedAmountOutput>, I>>(base?: I): GetLockedAmountOutput {
    return GetLockedAmountOutput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetLockedAmountOutput>, I>>(object: I): GetLockedAmountOutput {
    const message = createBaseGetLockedAmountOutput();
    message.address = (object.address !== undefined && object.address !== null)
      ? Address.fromPartial(object.address)
      : undefined;
    message.symbol = object.symbol ?? "";
    message.lockId = (object.lockId !== undefined && object.lockId !== null)
      ? Hash.fromPartial(object.lockId)
      : undefined;
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseTokenInfoList(): TokenInfoList {
  return { value: [] };
}

export const TokenInfoList = {
  encode(message: TokenInfoList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      TokenInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenInfoList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenInfoList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value.push(TokenInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenInfoList {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => TokenInfo.fromJSON(e)) : [] };
  },

  toJSON(message: TokenInfoList): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? TokenInfo.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TokenInfoList>, I>>(base?: I): TokenInfoList {
    return TokenInfoList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TokenInfoList>, I>>(object: I): TokenInfoList {
    const message = createBaseTokenInfoList();
    message.value = object.value?.map((e) => TokenInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetCrossChainTransferTokenContractAddressInput(): GetCrossChainTransferTokenContractAddressInput {
  return { chainId: 0 };
}

export const GetCrossChainTransferTokenContractAddressInput = {
  encode(
    message: GetCrossChainTransferTokenContractAddressInput,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chainId !== 0) {
      writer.uint32(8).int32(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCrossChainTransferTokenContractAddressInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCrossChainTransferTokenContractAddressInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.chainId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetCrossChainTransferTokenContractAddressInput {
    return { chainId: isSet(object.chainId) ? Number(object.chainId) : 0 };
  },

  toJSON(message: GetCrossChainTransferTokenContractAddressInput): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = Math.round(message.chainId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCrossChainTransferTokenContractAddressInput>, I>>(
    base?: I,
  ): GetCrossChainTransferTokenContractAddressInput {
    return GetCrossChainTransferTokenContractAddressInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCrossChainTransferTokenContractAddressInput>, I>>(
    object: I,
  ): GetCrossChainTransferTokenContractAddressInput {
    const message = createBaseGetCrossChainTransferTokenContractAddressInput();
    message.chainId = object.chainId ?? 0;
    return message;
  },
};

function createBaseCrossChainCreateTokenInput(): CrossChainCreateTokenInput {
  return { fromChainId: 0, parentChainHeight: 0, transactionBytes: new Uint8Array(0), merklePath: undefined };
}

export const CrossChainCreateTokenInput = {
  encode(message: CrossChainCreateTokenInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromChainId !== 0) {
      writer.uint32(8).int32(message.fromChainId);
    }
    if (message.parentChainHeight !== 0) {
      writer.uint32(16).int64(message.parentChainHeight);
    }
    if (message.transactionBytes.length !== 0) {
      writer.uint32(26).bytes(message.transactionBytes);
    }
    if (message.merklePath !== undefined) {
      MerklePath.encode(message.merklePath, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrossChainCreateTokenInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrossChainCreateTokenInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.fromChainId = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.parentChainHeight = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.transactionBytes = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.merklePath = MerklePath.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CrossChainCreateTokenInput {
    return {
      fromChainId: isSet(object.fromChainId) ? Number(object.fromChainId) : 0,
      parentChainHeight: isSet(object.parentChainHeight) ? Number(object.parentChainHeight) : 0,
      transactionBytes: isSet(object.transactionBytes) ? bytesFromBase64(object.transactionBytes) : new Uint8Array(0),
      merklePath: isSet(object.merklePath) ? MerklePath.fromJSON(object.merklePath) : undefined,
    };
  },

  toJSON(message: CrossChainCreateTokenInput): unknown {
    const obj: any = {};
    message.fromChainId !== undefined && (obj.fromChainId = Math.round(message.fromChainId));
    message.parentChainHeight !== undefined && (obj.parentChainHeight = Math.round(message.parentChainHeight));
    message.transactionBytes !== undefined &&
      (obj.transactionBytes = base64FromBytes(
        message.transactionBytes !== undefined ? message.transactionBytes : new Uint8Array(0),
      ));
    message.merklePath !== undefined &&
      (obj.merklePath = message.merklePath ? MerklePath.toJSON(message.merklePath) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CrossChainCreateTokenInput>, I>>(base?: I): CrossChainCreateTokenInput {
    return CrossChainCreateTokenInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CrossChainCreateTokenInput>, I>>(object: I): CrossChainCreateTokenInput {
    const message = createBaseCrossChainCreateTokenInput();
    message.fromChainId = object.fromChainId ?? 0;
    message.parentChainHeight = object.parentChainHeight ?? 0;
    message.transactionBytes = object.transactionBytes ?? new Uint8Array(0);
    message.merklePath = (object.merklePath !== undefined && object.merklePath !== null)
      ? MerklePath.fromPartial(object.merklePath)
      : undefined;
    return message;
  },
};

function createBaseInitializeFromParentChainInput(): InitializeFromParentChainInput {
  return { resourceAmount: {}, registeredOtherTokenContractAddresses: {}, creator: undefined };
}

export const InitializeFromParentChainInput = {
  encode(message: InitializeFromParentChainInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.resourceAmount).forEach(([key, value]) => {
      InitializeFromParentChainInput_ResourceAmountEntry.encode({ key: key as any, value }, writer.uint32(10).fork())
        .ldelim();
    });
    Object.entries(message.registeredOtherTokenContractAddresses).forEach(([key, value]) => {
      InitializeFromParentChainInput_RegisteredOtherTokenContractAddressesEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork(),
      ).ldelim();
    });
    if (message.creator !== undefined) {
      Address.encode(message.creator, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitializeFromParentChainInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitializeFromParentChainInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = InitializeFromParentChainInput_ResourceAmountEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.resourceAmount[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = InitializeFromParentChainInput_RegisteredOtherTokenContractAddressesEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry2.value !== undefined) {
            message.registeredOtherTokenContractAddresses[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.creator = Address.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InitializeFromParentChainInput {
    return {
      resourceAmount: isObject(object.resourceAmount)
        ? Object.entries(object.resourceAmount).reduce<{ [key: string]: number }>((acc, [key, value]) => {
          acc[key] = Number(value);
          return acc;
        }, {})
        : {},
      registeredOtherTokenContractAddresses: isObject(object.registeredOtherTokenContractAddresses)
        ? Object.entries(object.registeredOtherTokenContractAddresses).reduce<{ [key: number]: Address }>(
          (acc, [key, value]) => {
            acc[Number(key)] = Address.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      creator: isSet(object.creator) ? Address.fromJSON(object.creator) : undefined,
    };
  },

  toJSON(message: InitializeFromParentChainInput): unknown {
    const obj: any = {};
    obj.resourceAmount = {};
    if (message.resourceAmount) {
      Object.entries(message.resourceAmount).forEach(([k, v]) => {
        obj.resourceAmount[k] = Math.round(v);
      });
    }
    obj.registeredOtherTokenContractAddresses = {};
    if (message.registeredOtherTokenContractAddresses) {
      Object.entries(message.registeredOtherTokenContractAddresses).forEach(([k, v]) => {
        obj.registeredOtherTokenContractAddresses[k] = Address.toJSON(v);
      });
    }
    message.creator !== undefined && (obj.creator = message.creator ? Address.toJSON(message.creator) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<InitializeFromParentChainInput>, I>>(base?: I): InitializeFromParentChainInput {
    return InitializeFromParentChainInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InitializeFromParentChainInput>, I>>(
    object: I,
  ): InitializeFromParentChainInput {
    const message = createBaseInitializeFromParentChainInput();
    message.resourceAmount = Object.entries(object.resourceAmount ?? {}).reduce<{ [key: string]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Number(value);
        }
        return acc;
      },
      {},
    );
    message.registeredOtherTokenContractAddresses = Object.entries(object.registeredOtherTokenContractAddresses ?? {})
      .reduce<{ [key: number]: Address }>((acc, [key, value]) => {
        if (value !== undefined) {
          acc[Number(key)] = Address.fromPartial(value);
        }
        return acc;
      }, {});
    message.creator = (object.creator !== undefined && object.creator !== null)
      ? Address.fromPartial(object.creator)
      : undefined;
    return message;
  },
};

function createBaseInitializeFromParentChainInput_ResourceAmountEntry(): InitializeFromParentChainInput_ResourceAmountEntry {
  return { key: "", value: 0 };
}

export const InitializeFromParentChainInput_ResourceAmountEntry = {
  encode(
    message: InitializeFromParentChainInput_ResourceAmountEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitializeFromParentChainInput_ResourceAmountEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitializeFromParentChainInput_ResourceAmountEntry();
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

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InitializeFromParentChainInput_ResourceAmountEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: InitializeFromParentChainInput_ResourceAmountEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<InitializeFromParentChainInput_ResourceAmountEntry>, I>>(
    base?: I,
  ): InitializeFromParentChainInput_ResourceAmountEntry {
    return InitializeFromParentChainInput_ResourceAmountEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InitializeFromParentChainInput_ResourceAmountEntry>, I>>(
    object: I,
  ): InitializeFromParentChainInput_ResourceAmountEntry {
    const message = createBaseInitializeFromParentChainInput_ResourceAmountEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseInitializeFromParentChainInput_RegisteredOtherTokenContractAddressesEntry(): InitializeFromParentChainInput_RegisteredOtherTokenContractAddressesEntry {
  return { key: 0, value: undefined };
}

export const InitializeFromParentChainInput_RegisteredOtherTokenContractAddressesEntry = {
  encode(
    message: InitializeFromParentChainInput_RegisteredOtherTokenContractAddressesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      Address.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): InitializeFromParentChainInput_RegisteredOtherTokenContractAddressesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitializeFromParentChainInput_RegisteredOtherTokenContractAddressesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Address.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InitializeFromParentChainInput_RegisteredOtherTokenContractAddressesEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? Address.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: InitializeFromParentChainInput_RegisteredOtherTokenContractAddressesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = message.value ? Address.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<InitializeFromParentChainInput_RegisteredOtherTokenContractAddressesEntry>, I>>(
    base?: I,
  ): InitializeFromParentChainInput_RegisteredOtherTokenContractAddressesEntry {
    return InitializeFromParentChainInput_RegisteredOtherTokenContractAddressesEntry.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<InitializeFromParentChainInput_RegisteredOtherTokenContractAddressesEntry>, I>,
  >(object: I): InitializeFromParentChainInput_RegisteredOtherTokenContractAddressesEntry {
    const message = createBaseInitializeFromParentChainInput_RegisteredOtherTokenContractAddressesEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? Address.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseUpdateCoefficientsInput(): UpdateCoefficientsInput {
  return { pieceNumbers: [], coefficients: undefined };
}

export const UpdateCoefficientsInput = {
  encode(message: UpdateCoefficientsInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.pieceNumbers) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.coefficients !== undefined) {
      CalculateFeeCoefficients.encode(message.coefficients, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCoefficientsInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCoefficientsInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.pieceNumbers.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pieceNumbers.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.coefficients = CalculateFeeCoefficients.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateCoefficientsInput {
    return {
      pieceNumbers: Array.isArray(object?.pieceNumbers) ? object.pieceNumbers.map((e: any) => Number(e)) : [],
      coefficients: isSet(object.coefficients) ? CalculateFeeCoefficients.fromJSON(object.coefficients) : undefined,
    };
  },

  toJSON(message: UpdateCoefficientsInput): unknown {
    const obj: any = {};
    if (message.pieceNumbers) {
      obj.pieceNumbers = message.pieceNumbers.map((e) => Math.round(e));
    } else {
      obj.pieceNumbers = [];
    }
    message.coefficients !== undefined &&
      (obj.coefficients = message.coefficients ? CalculateFeeCoefficients.toJSON(message.coefficients) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateCoefficientsInput>, I>>(base?: I): UpdateCoefficientsInput {
    return UpdateCoefficientsInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateCoefficientsInput>, I>>(object: I): UpdateCoefficientsInput {
    const message = createBaseUpdateCoefficientsInput();
    message.pieceNumbers = object.pieceNumbers?.map((e) => e) || [];
    message.coefficients = (object.coefficients !== undefined && object.coefficients !== null)
      ? CalculateFeeCoefficients.fromPartial(object.coefficients)
      : undefined;
    return message;
  },
};

function createBaseCalculateFeePieceCoefficients(): CalculateFeePieceCoefficients {
  return { value: [] };
}

export const CalculateFeePieceCoefficients = {
  encode(message: CalculateFeePieceCoefficients, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.value) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CalculateFeePieceCoefficients {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalculateFeePieceCoefficients();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.value.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.value.push(reader.int32());
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

  fromJSON(object: any): CalculateFeePieceCoefficients {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CalculateFeePieceCoefficients): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => Math.round(e));
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CalculateFeePieceCoefficients>, I>>(base?: I): CalculateFeePieceCoefficients {
    return CalculateFeePieceCoefficients.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CalculateFeePieceCoefficients>, I>>(
    object: I,
  ): CalculateFeePieceCoefficients {
    const message = createBaseCalculateFeePieceCoefficients();
    message.value = object.value?.map((e) => e) || [];
    return message;
  },
};

function createBaseCalculateFeeCoefficients(): CalculateFeeCoefficients {
  return { feeTokenType: 0, pieceCoefficientsList: [] };
}

export const CalculateFeeCoefficients = {
  encode(message: CalculateFeeCoefficients, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeTokenType !== 0) {
      writer.uint32(8).int32(message.feeTokenType);
    }
    for (const v of message.pieceCoefficientsList) {
      CalculateFeePieceCoefficients.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CalculateFeeCoefficients {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalculateFeeCoefficients();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.feeTokenType = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pieceCoefficientsList.push(CalculateFeePieceCoefficients.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CalculateFeeCoefficients {
    return {
      feeTokenType: isSet(object.feeTokenType) ? Number(object.feeTokenType) : 0,
      pieceCoefficientsList: Array.isArray(object?.pieceCoefficientsList)
        ? object.pieceCoefficientsList.map((e: any) => CalculateFeePieceCoefficients.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CalculateFeeCoefficients): unknown {
    const obj: any = {};
    message.feeTokenType !== undefined && (obj.feeTokenType = Math.round(message.feeTokenType));
    if (message.pieceCoefficientsList) {
      obj.pieceCoefficientsList = message.pieceCoefficientsList.map((e) =>
        e ? CalculateFeePieceCoefficients.toJSON(e) : undefined
      );
    } else {
      obj.pieceCoefficientsList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CalculateFeeCoefficients>, I>>(base?: I): CalculateFeeCoefficients {
    return CalculateFeeCoefficients.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CalculateFeeCoefficients>, I>>(object: I): CalculateFeeCoefficients {
    const message = createBaseCalculateFeeCoefficients();
    message.feeTokenType = object.feeTokenType ?? 0;
    message.pieceCoefficientsList =
      object.pieceCoefficientsList?.map((e) => CalculateFeePieceCoefficients.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAllCalculateFeeCoefficients(): AllCalculateFeeCoefficients {
  return { value: [] };
}

export const AllCalculateFeeCoefficients = {
  encode(message: AllCalculateFeeCoefficients, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      CalculateFeeCoefficients.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllCalculateFeeCoefficients {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllCalculateFeeCoefficients();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value.push(CalculateFeeCoefficients.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AllCalculateFeeCoefficients {
    return {
      value: Array.isArray(object?.value) ? object.value.map((e: any) => CalculateFeeCoefficients.fromJSON(e)) : [],
    };
  },

  toJSON(message: AllCalculateFeeCoefficients): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? CalculateFeeCoefficients.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AllCalculateFeeCoefficients>, I>>(base?: I): AllCalculateFeeCoefficients {
    return AllCalculateFeeCoefficients.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AllCalculateFeeCoefficients>, I>>(object: I): AllCalculateFeeCoefficients {
    const message = createBaseAllCalculateFeeCoefficients();
    message.value = object.value?.map((e) => CalculateFeeCoefficients.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTotalTransactionFeesMap(): TotalTransactionFeesMap {
  return { value: {}, blockHash: undefined, blockHeight: 0 };
}

export const TotalTransactionFeesMap = {
  encode(message: TotalTransactionFeesMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.value).forEach(([key, value]) => {
      TotalTransactionFeesMap_ValueEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    if (message.blockHash !== undefined) {
      Hash.encode(message.blockHash, writer.uint32(18).fork()).ldelim();
    }
    if (message.blockHeight !== 0) {
      writer.uint32(24).int64(message.blockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalTransactionFeesMap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalTransactionFeesMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = TotalTransactionFeesMap_ValueEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.value[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.blockHash = Hash.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.blockHeight = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TotalTransactionFeesMap {
    return {
      value: isObject(object.value)
        ? Object.entries(object.value).reduce<{ [key: string]: number }>((acc, [key, value]) => {
          acc[key] = Number(value);
          return acc;
        }, {})
        : {},
      blockHash: isSet(object.blockHash) ? Hash.fromJSON(object.blockHash) : undefined,
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
    };
  },

  toJSON(message: TotalTransactionFeesMap): unknown {
    const obj: any = {};
    obj.value = {};
    if (message.value) {
      Object.entries(message.value).forEach(([k, v]) => {
        obj.value[k] = Math.round(v);
      });
    }
    message.blockHash !== undefined && (obj.blockHash = message.blockHash ? Hash.toJSON(message.blockHash) : undefined);
    message.blockHeight !== undefined && (obj.blockHeight = Math.round(message.blockHeight));
    return obj;
  },

  create<I extends Exact<DeepPartial<TotalTransactionFeesMap>, I>>(base?: I): TotalTransactionFeesMap {
    return TotalTransactionFeesMap.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TotalTransactionFeesMap>, I>>(object: I): TotalTransactionFeesMap {
    const message = createBaseTotalTransactionFeesMap();
    message.value = Object.entries(object.value ?? {}).reduce<{ [key: string]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Number(value);
      }
      return acc;
    }, {});
    message.blockHash = (object.blockHash !== undefined && object.blockHash !== null)
      ? Hash.fromPartial(object.blockHash)
      : undefined;
    message.blockHeight = object.blockHeight ?? 0;
    return message;
  },
};

function createBaseTotalTransactionFeesMap_ValueEntry(): TotalTransactionFeesMap_ValueEntry {
  return { key: "", value: 0 };
}

export const TotalTransactionFeesMap_ValueEntry = {
  encode(message: TotalTransactionFeesMap_ValueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalTransactionFeesMap_ValueEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalTransactionFeesMap_ValueEntry();
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

          message.value = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TotalTransactionFeesMap_ValueEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: TotalTransactionFeesMap_ValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<TotalTransactionFeesMap_ValueEntry>, I>>(
    base?: I,
  ): TotalTransactionFeesMap_ValueEntry {
    return TotalTransactionFeesMap_ValueEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TotalTransactionFeesMap_ValueEntry>, I>>(
    object: I,
  ): TotalTransactionFeesMap_ValueEntry {
    const message = createBaseTotalTransactionFeesMap_ValueEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTotalResourceTokensMaps(): TotalResourceTokensMaps {
  return { value: [], blockHash: undefined, blockHeight: 0 };
}

export const TotalResourceTokensMaps = {
  encode(message: TotalResourceTokensMaps, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      ContractTotalResourceTokens.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockHash !== undefined) {
      Hash.encode(message.blockHash, writer.uint32(18).fork()).ldelim();
    }
    if (message.blockHeight !== 0) {
      writer.uint32(24).int64(message.blockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalResourceTokensMaps {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalResourceTokensMaps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value.push(ContractTotalResourceTokens.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.blockHash = Hash.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.blockHeight = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TotalResourceTokensMaps {
    return {
      value: Array.isArray(object?.value) ? object.value.map((e: any) => ContractTotalResourceTokens.fromJSON(e)) : [],
      blockHash: isSet(object.blockHash) ? Hash.fromJSON(object.blockHash) : undefined,
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
    };
  },

  toJSON(message: TotalResourceTokensMaps): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? ContractTotalResourceTokens.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }
    message.blockHash !== undefined && (obj.blockHash = message.blockHash ? Hash.toJSON(message.blockHash) : undefined);
    message.blockHeight !== undefined && (obj.blockHeight = Math.round(message.blockHeight));
    return obj;
  },

  create<I extends Exact<DeepPartial<TotalResourceTokensMaps>, I>>(base?: I): TotalResourceTokensMaps {
    return TotalResourceTokensMaps.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TotalResourceTokensMaps>, I>>(object: I): TotalResourceTokensMaps {
    const message = createBaseTotalResourceTokensMaps();
    message.value = object.value?.map((e) => ContractTotalResourceTokens.fromPartial(e)) || [];
    message.blockHash = (object.blockHash !== undefined && object.blockHash !== null)
      ? Hash.fromPartial(object.blockHash)
      : undefined;
    message.blockHeight = object.blockHeight ?? 0;
    return message;
  },
};

function createBaseContractTotalResourceTokens(): ContractTotalResourceTokens {
  return { contractAddress: undefined, tokensMap: undefined };
}

export const ContractTotalResourceTokens = {
  encode(message: ContractTotalResourceTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== undefined) {
      Address.encode(message.contractAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokensMap !== undefined) {
      TotalResourceTokensMap.encode(message.tokensMap, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractTotalResourceTokens {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractTotalResourceTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contractAddress = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tokensMap = TotalResourceTokensMap.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContractTotalResourceTokens {
    return {
      contractAddress: isSet(object.contractAddress) ? Address.fromJSON(object.contractAddress) : undefined,
      tokensMap: isSet(object.tokensMap) ? TotalResourceTokensMap.fromJSON(object.tokensMap) : undefined,
    };
  },

  toJSON(message: ContractTotalResourceTokens): unknown {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress ? Address.toJSON(message.contractAddress) : undefined);
    message.tokensMap !== undefined &&
      (obj.tokensMap = message.tokensMap ? TotalResourceTokensMap.toJSON(message.tokensMap) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ContractTotalResourceTokens>, I>>(base?: I): ContractTotalResourceTokens {
    return ContractTotalResourceTokens.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ContractTotalResourceTokens>, I>>(object: I): ContractTotalResourceTokens {
    const message = createBaseContractTotalResourceTokens();
    message.contractAddress = (object.contractAddress !== undefined && object.contractAddress !== null)
      ? Address.fromPartial(object.contractAddress)
      : undefined;
    message.tokensMap = (object.tokensMap !== undefined && object.tokensMap !== null)
      ? TotalResourceTokensMap.fromPartial(object.tokensMap)
      : undefined;
    return message;
  },
};

function createBaseTotalResourceTokensMap(): TotalResourceTokensMap {
  return { value: {} };
}

export const TotalResourceTokensMap = {
  encode(message: TotalResourceTokensMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.value).forEach(([key, value]) => {
      TotalResourceTokensMap_ValueEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalResourceTokensMap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalResourceTokensMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = TotalResourceTokensMap_ValueEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.value[entry1.key] = entry1.value;
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

  fromJSON(object: any): TotalResourceTokensMap {
    return {
      value: isObject(object.value)
        ? Object.entries(object.value).reduce<{ [key: string]: number }>((acc, [key, value]) => {
          acc[key] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: TotalResourceTokensMap): unknown {
    const obj: any = {};
    obj.value = {};
    if (message.value) {
      Object.entries(message.value).forEach(([k, v]) => {
        obj.value[k] = Math.round(v);
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TotalResourceTokensMap>, I>>(base?: I): TotalResourceTokensMap {
    return TotalResourceTokensMap.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TotalResourceTokensMap>, I>>(object: I): TotalResourceTokensMap {
    const message = createBaseTotalResourceTokensMap();
    message.value = Object.entries(object.value ?? {}).reduce<{ [key: string]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Number(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseTotalResourceTokensMap_ValueEntry(): TotalResourceTokensMap_ValueEntry {
  return { key: "", value: 0 };
}

export const TotalResourceTokensMap_ValueEntry = {
  encode(message: TotalResourceTokensMap_ValueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalResourceTokensMap_ValueEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalResourceTokensMap_ValueEntry();
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

          message.value = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TotalResourceTokensMap_ValueEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: TotalResourceTokensMap_ValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<TotalResourceTokensMap_ValueEntry>, I>>(
    base?: I,
  ): TotalResourceTokensMap_ValueEntry {
    return TotalResourceTokensMap_ValueEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TotalResourceTokensMap_ValueEntry>, I>>(
    object: I,
  ): TotalResourceTokensMap_ValueEntry {
    const message = createBaseTotalResourceTokensMap_ValueEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseChangeTokenIssuerInput(): ChangeTokenIssuerInput {
  return { symbol: "", newTokenIssuer: undefined };
}

export const ChangeTokenIssuerInput = {
  encode(message: ChangeTokenIssuerInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.newTokenIssuer !== undefined) {
      Address.encode(message.newTokenIssuer, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeTokenIssuerInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeTokenIssuerInput();
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
          if (tag !== 18) {
            break;
          }

          message.newTokenIssuer = Address.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChangeTokenIssuerInput {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      newTokenIssuer: isSet(object.newTokenIssuer) ? Address.fromJSON(object.newTokenIssuer) : undefined,
    };
  },

  toJSON(message: ChangeTokenIssuerInput): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.newTokenIssuer !== undefined &&
      (obj.newTokenIssuer = message.newTokenIssuer ? Address.toJSON(message.newTokenIssuer) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ChangeTokenIssuerInput>, I>>(base?: I): ChangeTokenIssuerInput {
    return ChangeTokenIssuerInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ChangeTokenIssuerInput>, I>>(object: I): ChangeTokenIssuerInput {
    const message = createBaseChangeTokenIssuerInput();
    message.symbol = object.symbol ?? "";
    message.newTokenIssuer = (object.newTokenIssuer !== undefined && object.newTokenIssuer !== null)
      ? Address.fromPartial(object.newTokenIssuer)
      : undefined;
    return message;
  },
};

function createBaseTransferred(): Transferred {
  return { from: undefined, to: undefined, symbol: "", amount: 0, memo: "" };
}

export const Transferred = {
  encode(message: Transferred, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== undefined) {
      Address.encode(message.from, writer.uint32(10).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Address.encode(message.to, writer.uint32(18).fork()).ldelim();
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.amount !== 0) {
      writer.uint32(32).int64(message.amount);
    }
    if (message.memo !== "") {
      writer.uint32(42).string(message.memo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transferred {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferred();
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
          if (tag !== 26) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.memo = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Transferred {
    return {
      from: isSet(object.from) ? Address.fromJSON(object.from) : undefined,
      to: isSet(object.to) ? Address.fromJSON(object.to) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      memo: isSet(object.memo) ? String(object.memo) : "",
    };
  },

  toJSON(message: Transferred): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from ? Address.toJSON(message.from) : undefined);
    message.to !== undefined && (obj.to = message.to ? Address.toJSON(message.to) : undefined);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.memo !== undefined && (obj.memo = message.memo);
    return obj;
  },

  create<I extends Exact<DeepPartial<Transferred>, I>>(base?: I): Transferred {
    return Transferred.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Transferred>, I>>(object: I): Transferred {
    const message = createBaseTransferred();
    message.from = (object.from !== undefined && object.from !== null) ? Address.fromPartial(object.from) : undefined;
    message.to = (object.to !== undefined && object.to !== null) ? Address.fromPartial(object.to) : undefined;
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? 0;
    message.memo = object.memo ?? "";
    return message;
  },
};

function createBaseApproved(): Approved {
  return { owner: undefined, spender: undefined, symbol: "", amount: 0 };
}

export const Approved = {
  encode(message: Approved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== undefined) {
      Address.encode(message.owner, writer.uint32(10).fork()).ldelim();
    }
    if (message.spender !== undefined) {
      Address.encode(message.spender, writer.uint32(18).fork()).ldelim();
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.amount !== 0) {
      writer.uint32(32).int64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Approved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApproved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.spender = Address.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Approved {
    return {
      owner: isSet(object.owner) ? Address.fromJSON(object.owner) : undefined,
      spender: isSet(object.spender) ? Address.fromJSON(object.spender) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: Approved): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner ? Address.toJSON(message.owner) : undefined);
    message.spender !== undefined && (obj.spender = message.spender ? Address.toJSON(message.spender) : undefined);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  create<I extends Exact<DeepPartial<Approved>, I>>(base?: I): Approved {
    return Approved.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Approved>, I>>(object: I): Approved {
    const message = createBaseApproved();
    message.owner = (object.owner !== undefined && object.owner !== null)
      ? Address.fromPartial(object.owner)
      : undefined;
    message.spender = (object.spender !== undefined && object.spender !== null)
      ? Address.fromPartial(object.spender)
      : undefined;
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseUnApproved(): UnApproved {
  return { owner: undefined, spender: undefined, symbol: "", amount: 0 };
}

export const UnApproved = {
  encode(message: UnApproved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== undefined) {
      Address.encode(message.owner, writer.uint32(10).fork()).ldelim();
    }
    if (message.spender !== undefined) {
      Address.encode(message.spender, writer.uint32(18).fork()).ldelim();
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.amount !== 0) {
      writer.uint32(32).int64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnApproved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnApproved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.spender = Address.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnApproved {
    return {
      owner: isSet(object.owner) ? Address.fromJSON(object.owner) : undefined,
      spender: isSet(object.spender) ? Address.fromJSON(object.spender) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: UnApproved): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner ? Address.toJSON(message.owner) : undefined);
    message.spender !== undefined && (obj.spender = message.spender ? Address.toJSON(message.spender) : undefined);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  create<I extends Exact<DeepPartial<UnApproved>, I>>(base?: I): UnApproved {
    return UnApproved.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UnApproved>, I>>(object: I): UnApproved {
    const message = createBaseUnApproved();
    message.owner = (object.owner !== undefined && object.owner !== null)
      ? Address.fromPartial(object.owner)
      : undefined;
    message.spender = (object.spender !== undefined && object.spender !== null)
      ? Address.fromPartial(object.spender)
      : undefined;
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseBurned(): Burned {
  return { burner: undefined, symbol: "", amount: 0 };
}

export const Burned = {
  encode(message: Burned, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.burner !== undefined) {
      Address.encode(message.burner, writer.uint32(10).fork()).ldelim();
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.amount !== 0) {
      writer.uint32(24).int64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Burned {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurned();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.burner = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Burned {
    return {
      burner: isSet(object.burner) ? Address.fromJSON(object.burner) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: Burned): unknown {
    const obj: any = {};
    message.burner !== undefined && (obj.burner = message.burner ? Address.toJSON(message.burner) : undefined);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  create<I extends Exact<DeepPartial<Burned>, I>>(base?: I): Burned {
    return Burned.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Burned>, I>>(object: I): Burned {
    const message = createBaseBurned();
    message.burner = (object.burner !== undefined && object.burner !== null)
      ? Address.fromPartial(object.burner)
      : undefined;
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseChainPrimaryTokenSymbolSet(): ChainPrimaryTokenSymbolSet {
  return { tokenSymbol: "" };
}

export const ChainPrimaryTokenSymbolSet = {
  encode(message: ChainPrimaryTokenSymbolSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenSymbol !== "") {
      writer.uint32(10).string(message.tokenSymbol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainPrimaryTokenSymbolSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainPrimaryTokenSymbolSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenSymbol = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChainPrimaryTokenSymbolSet {
    return { tokenSymbol: isSet(object.tokenSymbol) ? String(object.tokenSymbol) : "" };
  },

  toJSON(message: ChainPrimaryTokenSymbolSet): unknown {
    const obj: any = {};
    message.tokenSymbol !== undefined && (obj.tokenSymbol = message.tokenSymbol);
    return obj;
  },

  create<I extends Exact<DeepPartial<ChainPrimaryTokenSymbolSet>, I>>(base?: I): ChainPrimaryTokenSymbolSet {
    return ChainPrimaryTokenSymbolSet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ChainPrimaryTokenSymbolSet>, I>>(object: I): ChainPrimaryTokenSymbolSet {
    const message = createBaseChainPrimaryTokenSymbolSet();
    message.tokenSymbol = object.tokenSymbol ?? "";
    return message;
  },
};

function createBaseTransactionSizeFeeUnitPriceUpdated(): TransactionSizeFeeUnitPriceUpdated {
  return { unitPrice: 0 };
}

export const TransactionSizeFeeUnitPriceUpdated = {
  encode(message: TransactionSizeFeeUnitPriceUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unitPrice !== 0) {
      writer.uint32(8).int64(message.unitPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionSizeFeeUnitPriceUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionSizeFeeUnitPriceUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.unitPrice = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionSizeFeeUnitPriceUpdated {
    return { unitPrice: isSet(object.unitPrice) ? Number(object.unitPrice) : 0 };
  },

  toJSON(message: TransactionSizeFeeUnitPriceUpdated): unknown {
    const obj: any = {};
    message.unitPrice !== undefined && (obj.unitPrice = Math.round(message.unitPrice));
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionSizeFeeUnitPriceUpdated>, I>>(
    base?: I,
  ): TransactionSizeFeeUnitPriceUpdated {
    return TransactionSizeFeeUnitPriceUpdated.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransactionSizeFeeUnitPriceUpdated>, I>>(
    object: I,
  ): TransactionSizeFeeUnitPriceUpdated {
    const message = createBaseTransactionSizeFeeUnitPriceUpdated();
    message.unitPrice = object.unitPrice ?? 0;
    return message;
  },
};

function createBaseCalculateFeeAlgorithmUpdated(): CalculateFeeAlgorithmUpdated {
  return { allTypeFeeCoefficients: undefined };
}

export const CalculateFeeAlgorithmUpdated = {
  encode(message: CalculateFeeAlgorithmUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allTypeFeeCoefficients !== undefined) {
      AllCalculateFeeCoefficients.encode(message.allTypeFeeCoefficients, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CalculateFeeAlgorithmUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalculateFeeAlgorithmUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allTypeFeeCoefficients = AllCalculateFeeCoefficients.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CalculateFeeAlgorithmUpdated {
    return {
      allTypeFeeCoefficients: isSet(object.allTypeFeeCoefficients)
        ? AllCalculateFeeCoefficients.fromJSON(object.allTypeFeeCoefficients)
        : undefined,
    };
  },

  toJSON(message: CalculateFeeAlgorithmUpdated): unknown {
    const obj: any = {};
    message.allTypeFeeCoefficients !== undefined && (obj.allTypeFeeCoefficients = message.allTypeFeeCoefficients
      ? AllCalculateFeeCoefficients.toJSON(message.allTypeFeeCoefficients)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CalculateFeeAlgorithmUpdated>, I>>(base?: I): CalculateFeeAlgorithmUpdated {
    return CalculateFeeAlgorithmUpdated.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CalculateFeeAlgorithmUpdated>, I>>(object: I): CalculateFeeAlgorithmUpdated {
    const message = createBaseCalculateFeeAlgorithmUpdated();
    message.allTypeFeeCoefficients =
      (object.allTypeFeeCoefficients !== undefined && object.allTypeFeeCoefficients !== null)
        ? AllCalculateFeeCoefficients.fromPartial(object.allTypeFeeCoefficients)
        : undefined;
    return message;
  },
};

function createBaseRentalCharged(): RentalCharged {
  return { symbol: "", amount: 0 };
}

export const RentalCharged = {
  encode(message: RentalCharged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RentalCharged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRentalCharged();
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

          message.amount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RentalCharged {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: RentalCharged): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  create<I extends Exact<DeepPartial<RentalCharged>, I>>(base?: I): RentalCharged {
    return RentalCharged.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RentalCharged>, I>>(object: I): RentalCharged {
    const message = createBaseRentalCharged();
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseRentalAccountBalanceInsufficient(): RentalAccountBalanceInsufficient {
  return { symbol: "", amount: 0 };
}

export const RentalAccountBalanceInsufficient = {
  encode(message: RentalAccountBalanceInsufficient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RentalAccountBalanceInsufficient {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRentalAccountBalanceInsufficient();
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

          message.amount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RentalAccountBalanceInsufficient {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: RentalAccountBalanceInsufficient): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  create<I extends Exact<DeepPartial<RentalAccountBalanceInsufficient>, I>>(
    base?: I,
  ): RentalAccountBalanceInsufficient {
    return RentalAccountBalanceInsufficient.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RentalAccountBalanceInsufficient>, I>>(
    object: I,
  ): RentalAccountBalanceInsufficient {
    const message = createBaseRentalAccountBalanceInsufficient();
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseTokenCreated(): TokenCreated {
  return {
    symbol: "",
    tokenName: "",
    totalSupply: 0,
    decimals: 0,
    issuer: undefined,
    isBurnable: false,
    issueChainId: 0,
  };
}

export const TokenCreated = {
  encode(message: TokenCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.tokenName !== "") {
      writer.uint32(18).string(message.tokenName);
    }
    if (message.totalSupply !== 0) {
      writer.uint32(24).int64(message.totalSupply);
    }
    if (message.decimals !== 0) {
      writer.uint32(32).int32(message.decimals);
    }
    if (message.issuer !== undefined) {
      Address.encode(message.issuer, writer.uint32(42).fork()).ldelim();
    }
    if (message.isBurnable === true) {
      writer.uint32(48).bool(message.isBurnable);
    }
    if (message.issueChainId !== 0) {
      writer.uint32(56).int32(message.issueChainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenCreated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenCreated();
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
          if (tag !== 18) {
            break;
          }

          message.tokenName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalSupply = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.decimals = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.issuer = Address.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isBurnable = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.issueChainId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenCreated {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
      totalSupply: isSet(object.totalSupply) ? Number(object.totalSupply) : 0,
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      issuer: isSet(object.issuer) ? Address.fromJSON(object.issuer) : undefined,
      isBurnable: isSet(object.isBurnable) ? Boolean(object.isBurnable) : false,
      issueChainId: isSet(object.issueChainId) ? Number(object.issueChainId) : 0,
    };
  },

  toJSON(message: TokenCreated): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.tokenName !== undefined && (obj.tokenName = message.tokenName);
    message.totalSupply !== undefined && (obj.totalSupply = Math.round(message.totalSupply));
    message.decimals !== undefined && (obj.decimals = Math.round(message.decimals));
    message.issuer !== undefined && (obj.issuer = message.issuer ? Address.toJSON(message.issuer) : undefined);
    message.isBurnable !== undefined && (obj.isBurnable = message.isBurnable);
    message.issueChainId !== undefined && (obj.issueChainId = Math.round(message.issueChainId));
    return obj;
  },

  create<I extends Exact<DeepPartial<TokenCreated>, I>>(base?: I): TokenCreated {
    return TokenCreated.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TokenCreated>, I>>(object: I): TokenCreated {
    const message = createBaseTokenCreated();
    message.symbol = object.symbol ?? "";
    message.tokenName = object.tokenName ?? "";
    message.totalSupply = object.totalSupply ?? 0;
    message.decimals = object.decimals ?? 0;
    message.issuer = (object.issuer !== undefined && object.issuer !== null)
      ? Address.fromPartial(object.issuer)
      : undefined;
    message.isBurnable = object.isBurnable ?? false;
    message.issueChainId = object.issueChainId ?? 0;
    return message;
  },
};

function createBaseIssued(): Issued {
  return { symbol: "", amount: 0, memo: "", to: undefined };
}

export const Issued = {
  encode(message: Issued, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int64(message.amount);
    }
    if (message.memo !== "") {
      writer.uint32(26).string(message.memo);
    }
    if (message.to !== undefined) {
      Address.encode(message.to, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Issued {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIssued();
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

          message.amount = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.memo = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.to = Address.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Issued {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      memo: isSet(object.memo) ? String(object.memo) : "",
      to: isSet(object.to) ? Address.fromJSON(object.to) : undefined,
    };
  },

  toJSON(message: Issued): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.memo !== undefined && (obj.memo = message.memo);
    message.to !== undefined && (obj.to = message.to ? Address.toJSON(message.to) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Issued>, I>>(base?: I): Issued {
    return Issued.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Issued>, I>>(object: I): Issued {
    const message = createBaseIssued();
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? 0;
    message.memo = object.memo ?? "";
    message.to = (object.to !== undefined && object.to !== null) ? Address.fromPartial(object.to) : undefined;
    return message;
  },
};

function createBaseCrossChainTransferred(): CrossChainTransferred {
  return { from: undefined, to: undefined, symbol: "", amount: 0, memo: "", toChainId: 0, issueChainId: 0 };
}

export const CrossChainTransferred = {
  encode(message: CrossChainTransferred, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== undefined) {
      Address.encode(message.from, writer.uint32(10).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Address.encode(message.to, writer.uint32(18).fork()).ldelim();
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.amount !== 0) {
      writer.uint32(32).int64(message.amount);
    }
    if (message.memo !== "") {
      writer.uint32(42).string(message.memo);
    }
    if (message.toChainId !== 0) {
      writer.uint32(48).int32(message.toChainId);
    }
    if (message.issueChainId !== 0) {
      writer.uint32(56).int32(message.issueChainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrossChainTransferred {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrossChainTransferred();
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
          if (tag !== 26) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.memo = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.toChainId = reader.int32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.issueChainId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CrossChainTransferred {
    return {
      from: isSet(object.from) ? Address.fromJSON(object.from) : undefined,
      to: isSet(object.to) ? Address.fromJSON(object.to) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      memo: isSet(object.memo) ? String(object.memo) : "",
      toChainId: isSet(object.toChainId) ? Number(object.toChainId) : 0,
      issueChainId: isSet(object.issueChainId) ? Number(object.issueChainId) : 0,
    };
  },

  toJSON(message: CrossChainTransferred): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from ? Address.toJSON(message.from) : undefined);
    message.to !== undefined && (obj.to = message.to ? Address.toJSON(message.to) : undefined);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.memo !== undefined && (obj.memo = message.memo);
    message.toChainId !== undefined && (obj.toChainId = Math.round(message.toChainId));
    message.issueChainId !== undefined && (obj.issueChainId = Math.round(message.issueChainId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CrossChainTransferred>, I>>(base?: I): CrossChainTransferred {
    return CrossChainTransferred.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CrossChainTransferred>, I>>(object: I): CrossChainTransferred {
    const message = createBaseCrossChainTransferred();
    message.from = (object.from !== undefined && object.from !== null) ? Address.fromPartial(object.from) : undefined;
    message.to = (object.to !== undefined && object.to !== null) ? Address.fromPartial(object.to) : undefined;
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? 0;
    message.memo = object.memo ?? "";
    message.toChainId = object.toChainId ?? 0;
    message.issueChainId = object.issueChainId ?? 0;
    return message;
  },
};

function createBaseCrossChainReceived(): CrossChainReceived {
  return {
    from: undefined,
    to: undefined,
    symbol: "",
    amount: 0,
    memo: "",
    fromChainId: 0,
    issueChainId: 0,
    parentChainHeight: 0,
  };
}

export const CrossChainReceived = {
  encode(message: CrossChainReceived, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== undefined) {
      Address.encode(message.from, writer.uint32(10).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Address.encode(message.to, writer.uint32(18).fork()).ldelim();
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.amount !== 0) {
      writer.uint32(32).int64(message.amount);
    }
    if (message.memo !== "") {
      writer.uint32(42).string(message.memo);
    }
    if (message.fromChainId !== 0) {
      writer.uint32(48).int32(message.fromChainId);
    }
    if (message.issueChainId !== 0) {
      writer.uint32(56).int32(message.issueChainId);
    }
    if (message.parentChainHeight !== 0) {
      writer.uint32(64).int64(message.parentChainHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrossChainReceived {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrossChainReceived();
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
          if (tag !== 26) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.memo = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.fromChainId = reader.int32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.issueChainId = reader.int32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.parentChainHeight = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CrossChainReceived {
    return {
      from: isSet(object.from) ? Address.fromJSON(object.from) : undefined,
      to: isSet(object.to) ? Address.fromJSON(object.to) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      memo: isSet(object.memo) ? String(object.memo) : "",
      fromChainId: isSet(object.fromChainId) ? Number(object.fromChainId) : 0,
      issueChainId: isSet(object.issueChainId) ? Number(object.issueChainId) : 0,
      parentChainHeight: isSet(object.parentChainHeight) ? Number(object.parentChainHeight) : 0,
    };
  },

  toJSON(message: CrossChainReceived): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from ? Address.toJSON(message.from) : undefined);
    message.to !== undefined && (obj.to = message.to ? Address.toJSON(message.to) : undefined);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.memo !== undefined && (obj.memo = message.memo);
    message.fromChainId !== undefined && (obj.fromChainId = Math.round(message.fromChainId));
    message.issueChainId !== undefined && (obj.issueChainId = Math.round(message.issueChainId));
    message.parentChainHeight !== undefined && (obj.parentChainHeight = Math.round(message.parentChainHeight));
    return obj;
  },

  create<I extends Exact<DeepPartial<CrossChainReceived>, I>>(base?: I): CrossChainReceived {
    return CrossChainReceived.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CrossChainReceived>, I>>(object: I): CrossChainReceived {
    const message = createBaseCrossChainReceived();
    message.from = (object.from !== undefined && object.from !== null) ? Address.fromPartial(object.from) : undefined;
    message.to = (object.to !== undefined && object.to !== null) ? Address.fromPartial(object.to) : undefined;
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? 0;
    message.memo = object.memo ?? "";
    message.fromChainId = object.fromChainId ?? 0;
    message.issueChainId = object.issueChainId ?? 0;
    message.parentChainHeight = object.parentChainHeight ?? 0;
    return message;
  },
};

export interface TokenContract {
  /** Multiple Token */
  Create(request: CreateInput): Promise<Empty>;
  Issue(request: IssueInput): Promise<Empty>;
  Transfer(request: TransferInput): Promise<Empty>;
  TransferFrom(request: TransferFromInput): Promise<Empty>;
  Approve(request: ApproveInput): Promise<Empty>;
  UnApprove(request: UnApproveInput): Promise<Empty>;
  /** Views */
  GetTokenInfo(request: GetTokenInfoInput): Promise<TokenInfo>;
  GetBalance(request: GetBalanceInput): Promise<GetBalanceOutput>;
  GetAllowance(request: GetAllowanceInput): Promise<GetAllowanceOutput>;
}

export const TokenContractServiceName = "token.TokenContract";
export class TokenContractClientImpl implements TokenContract {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || TokenContractServiceName;
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Issue = this.Issue.bind(this);
    this.Transfer = this.Transfer.bind(this);
    this.TransferFrom = this.TransferFrom.bind(this);
    this.Approve = this.Approve.bind(this);
    this.UnApprove = this.UnApprove.bind(this);
    this.GetTokenInfo = this.GetTokenInfo.bind(this);
    this.GetBalance = this.GetBalance.bind(this);
    this.GetAllowance = this.GetAllowance.bind(this);
  }
  Create(request: CreateInput): Promise<Empty> {
    const data = CreateInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "Create", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  Issue(request: IssueInput): Promise<Empty> {
    const data = IssueInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "Issue", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  Transfer(request: TransferInput): Promise<Empty> {
    const data = TransferInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "Transfer", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  TransferFrom(request: TransferFromInput): Promise<Empty> {
    const data = TransferFromInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "TransferFrom", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  Approve(request: ApproveInput): Promise<Empty> {
    const data = ApproveInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "Approve", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  UnApprove(request: UnApproveInput): Promise<Empty> {
    const data = UnApproveInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnApprove", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  GetTokenInfo(request: GetTokenInfoInput): Promise<TokenInfo> {
    const data = GetTokenInfoInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetTokenInfo", data);
    return promise.then((data) => TokenInfo.decode(_m0.Reader.create(data)));
  }

  GetBalance(request: GetBalanceInput): Promise<GetBalanceOutput> {
    const data = GetBalanceInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBalance", data);
    return promise.then((data) => GetBalanceOutput.decode(_m0.Reader.create(data)));
  }

  GetAllowance(request: GetAllowanceInput): Promise<GetAllowanceOutput> {
    const data = GetAllowanceInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAllowance", data);
    return promise.then((data) => GetAllowanceOutput.decode(_m0.Reader.create(data)));
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
