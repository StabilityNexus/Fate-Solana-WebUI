/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useMemo, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FormData } from "@/types/FormData";
import { ASSET_CONFIG } from "@/config/assets";
import { Coins, Search, X } from "lucide-react";

type PoolConfigurationStepProps = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  errors: { [key: string]: string };
};

const PoolConfigurationStep: React.FC<PoolConfigurationStepProps> = ({
  formData,
  updateFormData,
  errors,
}) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredAssets = useMemo(() => {
    if (!search.trim()) {
      return Object.entries(ASSET_CONFIG);
    }
    return Object.entries(ASSET_CONFIG).filter(
      ([key, asset]: any) =>
        asset.name.toLowerCase().includes(search.toLowerCase()) ||
        key.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const selectedAsset = formData.pairId ? ASSET_CONFIG[formData.pairId] : null;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleSelectAsset = (key: string) => {
    updateFormData({
      pairId: key,
      assetAddress: ASSET_CONFIG[key].coinId,
    });
    setIsOpen(false);
    setSearch("");
  };

  const handleClearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateFormData({
      pairId: undefined,
      assetAddress: undefined,
    });
    setSearch("");
  };

  return (
    <div className="space-y-4">
      {/* Pool Name */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Coins className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
          <Label
            htmlFor="poolName"
            className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
          >
            Name of the Fate Pool *
          </Label>
        </div>
        <Input
          type="text"
          id="poolName"
          name="poolName"
          placeholder="Enter descriptive name for your pool"
          value={formData.poolName}
          onChange={(e) => updateFormData({ poolName: e.target.value })}
          className={`transition-all focus:ring-2 focus:ring-black dark:focus:ring-white border-neutral-200 dark:border-neutral-700 text-black dark:text-white ${
            errors.poolName ? "border-red-500" : ""
          }`}
        />
        {errors.poolName && (
          <p className="text-red-500 text-sm">{errors.poolName}</p>
        )}
      </div>

      {/* Pool Description */}
      <div className="space-y-2">
        <Label
          htmlFor="poolDescription"
          className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
        >
          Pool Description
        </Label>
        <Input
          type="text"
          id="poolDescription"
          name="poolDescription"
          placeholder="Enter a brief description of the pool (optional)"
          value={formData.poolDescription || ""}
          onChange={(e) => updateFormData({ poolDescription: e.target.value })}
          className="transition-all focus:ring-2 focus:ring-black dark:focus:ring-white border-neutral-200 dark:border-neutral-700 text-black dark:text-white"
        />
      </div>

      {/* Asset ID  */}
      <div className="space-y-2">
        <Label
          htmlFor="assetId"
          className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
        >
          Asset ID *
        </Label>

        <div className="relative" ref={dropdownRef}>
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              ref={searchInputRef}
              type="text"
              placeholder="Search assets..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              className={`pl-8 text-sm border rounded-md bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-600 focus:ring-1 focus:ring-blue-500 ${
                errors.pairId ? "border-red-500" : ""
              }`}
            />
            {selectedAsset && (
              <button
                type="button"
                onClick={handleClearSelection}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute z-50 w-full mt-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md shadow-lg max-h-60 overflow-hidden">
              <div className="max-h-40 overflow-y-auto">
                {filteredAssets.length > 0 ? (
                  filteredAssets.map(([key, asset]: any) => (
                    <div
                      key={key}
                      onClick={() => {
                        handleSelectAsset(key);
                        setSearch(asset.name);
                        setIsOpen(false);
                      }}
                      className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors ${
                        formData.pairId === key
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                          : "text-black dark:text-white"
                      }`}
                    >
                      <div className="font-medium">{asset.name}</div>
                    </div>
                  ))
                ) : (
                  <div className="px-3 py-4 text-sm text-center text-gray-500 dark:text-gray-400">
                    No assets found matching &quot;{search}&quot;
                  </div>
                )}
              </div>
            </div>
          )}

          {errors.pairId && (
            <p className="text-red-500 text-sm mt-1">{errors.pairId}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PoolConfigurationStep;
