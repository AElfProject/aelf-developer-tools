import {
  BingoGameContract,
  BoutInformation,
  GetBoutInformationInput,
  LimitSettings,
  PlayInput,
  PlayerInformation,
} from "./dist/Protobuf/contract/bingo_game_contract";
import { Hash, Address } from "./dist/aelf/core";
import { Empty } from "./dist/google/protobuf/empty";
import {
  Int64Value,
  BoolValue,
  Int32Value,
} from "./dist/google/protobuf/wrappers";

/**
 * The following methods can be implemented such that it follows the generated types in dist
 */
export class BingoGameService implements BingoGameContract {
  Register(request: Empty): Promise<Empty> {
    throw new Error("Method not implemented.");
  }
  Play(request: PlayInput): Promise<Int64Value> {
    throw new Error("Method not implemented.");
  }
  Bingo(request: Hash): Promise<BoolValue> {
    throw new Error("Method not implemented.");
  }
  Quit(request: Empty): Promise<Empty> {
    throw new Error("Method not implemented.");
  }
  SetLimitSettings(request: LimitSettings): Promise<Empty> {
    throw new Error("Method not implemented.");
  }
  Initialize(request: Empty): Promise<Empty> {
    throw new Error("Method not implemented.");
  }
  GetAward(request: Hash): Promise<Int64Value> {
    throw new Error("Method not implemented.");
  }
  GetPlayerInformation(request: Address): Promise<PlayerInformation> {
    throw new Error("Method not implemented.");
  }
  GetLimitSettings(request: Empty): Promise<LimitSettings> {
    throw new Error("Method not implemented.");
  }
  GetRandomNumber(request: Hash): Promise<Int32Value> {
    throw new Error("Method not implemented.");
  }
  GetBoutInformation(
    request: GetBoutInformationInput
  ): Promise<BoutInformation> {
    throw new Error("Method not implemented.");
  }
}
