"use client";

import React from "react";
import { Coins } from "lucide-react";
import type { FormData } from "@/types/FormData";
import { InputField } from "./InputField";

interface FeeConfigurationStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  errors: { [key: string]: string };
}

const FeeConfigurationStep: React.FC<FeeConfigurationStepProps> = ({
  formData,
  updateFormData,
  errors,
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
          Fee Configuration
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Configure fee structure and initial liquidity for your pool
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <InputField
          label="Protocol Fee *"
          tooltip="Percentage of fees allocated to the Protocol"
          value={formData.protocolFee}
          onChange={(value) => updateFormData({ protocolFee: value })}
          error={errors.protocolFee}
        />

        <InputField
          label="Mint Fee *"
          tooltip="Percentage of fees charged and transferred to opposite side when minting new tokens."
          value={formData.mintFee}
          onChange={(value) => updateFormData({ mintFee: value })}
          error={errors.mintFee}
        />

        <InputField
          label="Burn Fee *"
          tooltip="Percentage of fees charged and transferred to opposite side when burning tokens."
          value={formData.burnFee}
          onChange={(value) => updateFormData({ burnFee: value })}
          error={errors.burnFee}
        />

        <InputField
          label="Pool Creator Fee *"
          tooltip="Percentage of fees allocated to the creator"
          value={formData.poolCreatorFee}
          onChange={(value) => updateFormData({ poolCreatorFee: value })}
          error={errors.poolCreatorFee}
        />

        <InputField
          label="Fee Recipient Address"
          tooltip="The address that will receive the creator's portion of vault fees. Leave empty to use your connected wallet address."
          value={formData.poolCreatorAddress!}
          onChange={(value) => updateFormData({ poolCreatorAddress: value })}
          error={errors.poolCreatorAddress}
          type="text"
          placeholder="0x... (optional - will use your wallet address if empty)"
          step=""
          min=""
          max=""
        />

        <InputField
          label="Initial SUI Amount *"
          tooltip="Amount of SUI to provide as initial liquidity. Will be split equally between bull and bear tokens."
          value={formData.initialSuiAmount!}
          onChange={(value) => updateFormData({ initialSuiAmount: value })}
          error={errors.initialSuiAmount}
          icon={
            <Coins className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
          }
          placeholder="Enter amount in SUI"
          max="1000000"
        />
      </div>
    </div>
  );
};

export default FeeConfigurationStep;
