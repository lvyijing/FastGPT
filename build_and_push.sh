#!/bin/bash

# 配置变量
IMAGE_NAME="registry.cn-hangzhou.aliyuncs.com/fastgpt/fastgpt"  # 镜像名称
IMAGE_TAG="v4.8.21-fix_1.10"           # 镜像标签，默认为 latest
DOCKERFILE_PATH="."          # Dockerfile 路径，默认为当前目录
REGISTRY_URL="crpi-b71hgy3y7yanyni3.cn-qingdao.personal.cr.aliyuncs.com"  # 阿里云容器镜像服务的 Registry 地址
NAMESPACE="fastgpt_elitech"   # 阿里云容器镜像服务的命名空间
REPO_NAME="fastgpt"   # 仓库名称
USERNAME="837436790@qq.com" # 阿里云账号的用户名

# 登录阿里云容器镜像服务
docker login --username=$USERNAME $REGISTRY_URL

# 检查是否登录成功
if [ $? -ne 0 ]; then
  echo "登录阿里云容器镜像服务失败，请检查用户名和密码。"
  exit 1
fi

# 构建 Docker 镜像
echo "开始构建 Docker 镜像..."
docker build --platform linux/amd64 -t $IMAGE_NAME:$IMAGE_TAG $DOCKERFILE_PATH

# 检查镜像是否构建成功
if [ $? -ne 0 ]; then
  echo "Docker 镜像构建失败，请检查 Dockerfile 或构建上下文。"
  exit 1
fi

# 打标签，将镜像推送到阿里云仓库
REMOTE_IMAGE="$REGISTRY_URL/$NAMESPACE/$REPO_NAME:$IMAGE_TAG"
echo "打标签并推送镜像到阿里云仓库: $REMOTE_IMAGE"
docker tag $IMAGE_NAME:$IMAGE_TAG $REMOTE_IMAGE
docker push $REMOTE_IMAGE

# 检查镜像是否推送成功
if [ $? -ne 0 ]; then
  echo "镜像推送失败，请检查网络或仓库权限。"
  exit 1
fi

echo "镜像构建并推送成功: $REMOTE_IMAGE"