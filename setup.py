from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in pasig_lgu_demo/__init__.py
from pasig_lgu_demo import __version__ as version

setup(
	name="pasig_lgu_demo",
	version=version,
	description="Pasig LGU Demo",
	author="Xurpas Inc.",
	author_email="andy@xurpas.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
