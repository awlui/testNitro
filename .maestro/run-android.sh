#!/bin/bash
set -e

app_path=$1
app_flow=$2
output_report=$3

echo "Installing Maestro"
curl -Ls "https://get.maestro.mobile.dev" | bash
export PATH="${PATH}":"${HOME}/.maestro/bin"

echo "Installing app from ${app_path}"
adb install "${app_path}"

echo "Running tests with Maestro"
maestro test "${app_flow}" --format junit --output "${output_report}"