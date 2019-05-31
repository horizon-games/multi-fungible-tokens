/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";
import { TransactionOverrides } from ".";

export class IERC1155TokenReceiver extends Contract {
  functions: {
    onERC1155Received(
      _operator: string,
      _from: string,
      _id: number | string | BigNumber,
      _amount: number | string | BigNumber,
      _data: (string)[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: (number | string | BigNumber)[],
      _amounts: (number | string | BigNumber)[],
      _data: (string)[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    isERC1155TokenReceiver(): Promise<string>;
  };
  filters: {};
}
