SeerahApp.controller("SeerahController", function searchController($scope, $sanitize, DataModelService) {

    $scope.ModelYear = "Before Hijri 1";
    $scope.BeforeHijri =DataModelService.BeforeHijri;
    $scope.AfterHijri = DataModelService.AfterHijri;
    $scope.Years = DataModelService.AllYears;
    $scope.Current = $scope.Years[0];
    $scope.ModelAfterHijri = "After Hijri";
    $scope.SelectHijri = function (hijri,type) {
        if (type == "before") {
            $scope.ModelYear = hijri;
            $scope.ModelAfterHijri = "Select After Hijri";
        }
        else {
            $scope.ModelAfterHijri = hijri;
            $scope.ModelYear = "Select Before Hijri";
        }

            $scope.Current = $scope.returnHijri(hijri);
           
    }


    $scope.returnHijri=function(hijri){
        res = DataModelService.NoData;
        for(i=0;i<$scope.Years.length;i++)
        {
            if($scope.Years[i].Year== hijri)
            {
                res = $scope.Years[i];
                break;
            }
        }
        return res;
    };
});